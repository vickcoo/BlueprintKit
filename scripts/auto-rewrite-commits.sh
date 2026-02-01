#!/bin/bash
# Automated script to rewrite commit messages using mapping file

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
MAP_FILE="$SCRIPT_DIR/commit-message-map.txt"

echo "=========================================="
echo "Auto-Rewrite Commit Messages"
echo "=========================================="
echo ""

if [ ! -f "$MAP_FILE" ]; then
    echo "Error: Mapping file not found: $MAP_FILE"
    exit 1
fi

echo "Using mapping file: $MAP_FILE"
echo ""
echo "WARNING: This will rewrite git history!"
echo "- All commit hashes will change"
echo "- You must force push after this"
echo "- Other collaborators must re-clone or reset"
echo ""
read -p "Create backup and continue? (y/N): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Aborted."
    exit 1
fi

# Create backup branch
BACKUP_BRANCH="backup-before-rewrite-$(date +%Y%m%d-%H%M%S)"
echo "Creating backup branch: $BACKUP_BRANCH"
git branch "$BACKUP_BRANCH"

# Create message filter script with embedded mapping
FILTER_SCRIPT="/tmp/git-msg-filter-$$.sh"
cat > "$FILTER_SCRIPT" << FILTER_EOF
#!/bin/bash
msg=\$(cat)

case "\$msg" in
FILTER_EOF

# Add all mappings to the case statement
while IFS='|' read -r old new; do
    # Skip comments and empty lines
    [[ "$old" =~ ^#.*$ ]] && continue
    [[ -z "$old" ]] && continue

    # Escape special characters for case statement
    old_escaped=$(printf '%s\n' "$old" | sed 's/[[\.*^$()|+?{]/\\&/g')

    echo "    \"$old\")" >> "$FILTER_SCRIPT"
    echo "        echo \"$new\"" >> "$FILTER_SCRIPT"
    echo "        ;;" >> "$FILTER_SCRIPT"
done < "$MAP_FILE"

# Add default case
cat >> "$FILTER_SCRIPT" << 'FILTER_EOF'
    *)
        echo "$msg"
        ;;
esac
FILTER_EOF

chmod +x "$FILTER_SCRIPT"

echo ""
echo "Rewriting commit messages..."
echo ""

# Run filter-branch
FILTER_BRANCH_SQUELCH_WARNING=1 git filter-branch -f \
    --msg-filter "$FILTER_SCRIPT" \
    -- 71e1190..HEAD

rm -f "$FILTER_SCRIPT"

echo ""
echo "=========================================="
echo "Rewrite complete!"
echo "=========================================="
echo ""
echo "Review the changes:"
echo "  git log --oneline -15"
echo ""
echo "Compare with backup:"
echo "  git log --oneline $BACKUP_BRANCH -15"
echo ""
echo "If everything looks good:"
echo "  git push --force-with-lease"
echo ""
echo "If you need to undo:"
echo "  git reset --hard $BACKUP_BRANCH"
echo "  git branch -D $BACKUP_BRANCH"
echo ""
