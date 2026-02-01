#!/bin/bash
# Script to rewrite commit messages to follow Conventional Commits

set -e

echo "=========================================="
echo "Rewrite Commit Messages to Conventional Commits"
echo "=========================================="
echo ""
echo "This will rewrite git history. Make sure you understand the implications:"
echo "- All commit hashes will change"
echo "- You will need to force push (git push --force)"
echo "- Anyone who has pulled must re-clone or reset their branch"
echo ""
read -p "Continue? (y/N): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Aborted."
    exit 1
fi

echo ""
echo "Creating backup branch..."
git branch -f backup-commits-$(date +%Y%m%d-%H%M%S)

echo "Starting interactive rebase..."
echo ""
echo "INSTRUCTIONS:"
echo "1. The editor will open with a list of commits"
echo "2. Change 'pick' to 'reword' for commits you want to rename"
echo "3. Change 'pick' to 'drop' for duplicate commits"
echo "4. Save and close the editor"
echo "5. For each commit, update the message following this format:"
echo ""
echo "   <type>(<scope>): <description>"
echo ""
echo "   Types: feat, fix, docs, style, refactor, perf, test, build, ci, chore"
echo "   Scopes: cli, web, templates, docs, deps, git"
echo ""
echo "Example conversions:"
echo "  'Add AGENTS.md for AI coding assistants'"
echo "  → 'docs: add AGENTS.md for AI assistants'"
echo ""
echo "  'Remove internal documentation from public repo'"
echo "  → 'chore: remove internal documentation'"
echo ""
echo "  'Rebrand to BlueprintKit'"
echo "  → 'refactor: rebrand project to BlueprintKit'"
echo ""
read -p "Press Enter to start rebase..."

# Start interactive rebase from the beginning
# We rebase from 71e1190 (first commit) up to (but not including) 95535f1 (latest good commit)
GIT_SEQUENCE_EDITOR="cat" git rebase -i 71e1190^

echo ""
echo "=========================================="
echo "Rebase complete!"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Review the commit history: git log --oneline"
echo "2. If everything looks good: git push --force-with-lease"
echo "3. If you need to undo: git reset --hard backup-commits-<timestamp>"
echo ""
