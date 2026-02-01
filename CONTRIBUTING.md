# Contributing to BlueprintKit

Thank you for your interest in contributing to BlueprintKit! 🎉

## 🤝 How to Contribute

### Adding a New Template

1. **Fork the Repository**
   ```bash
   git clone https://github.com/vickcoo/devkit.git
   cd devkit
   ```

2. **Create Your Template**
   ```bash
   cd templates
   mkdir my-awesome-template
   cd my-awesome-template
   ```

3. **Template Structure**
   ```
   my-awesome-template/
   ├── README.md           # Required: Template documentation
   ├── package.json        # If applicable
   ├── src/               # Source code
   ├── .env.example       # Environment variables example
   ├── .gitignore
   └── tsconfig.json      # If using TypeScript
   ```

4. **README Requirements**

   Your template README must include:
   - Description of what the template does
   - Tech stack overview
   - Quick start guide
   - Project structure
   - Available scripts
   - Deployment instructions

5. **Register Your Template**

   Add your template to `cli/src/utils/templates.ts`:
   ```typescript
   {
     name: 'my-awesome-template',
     description: 'Brief description',
     localPath: path.join(__dirname, '../../..', 'templates', 'my-awesome-template'),
     techStack: ['Framework', 'Library', 'Tool'],
     category: 'backend', // or 'frontend', 'fullstack', 'mobile', etc.
     author: 'Your Name',
     version: '1.0.0'
   }
   ```

6. **Test Your Template**
   ```bash
   cd cli
   npm run build
   npx blueprintkit init
   # Select your template and verify it works
   ```

7. **Submit a Pull Request**
   - Create a new branch: `git checkout -b add-my-template`
   - Commit your changes: `git commit -m "Add my-awesome-template"`
   - Push to GitHub: `git push origin add-my-template`
   - Open a PR on GitHub

### Quality Guidelines

Templates should:
- ✅ Follow best practices for the framework
- ✅ Include TypeScript (if applicable)
- ✅ Have ESLint and Prettier configured
- ✅ Include a comprehensive README
- ✅ Use modern, stable versions of dependencies
- ✅ Be production-ready (not just "hello world")
- ✅ Include `.env.example` for environment variables
- ✅ Have a clear, logical folder structure

### Reporting Bugs

Found a bug? Please [open an issue](https://github.com/vickcoo/devkit/issues) with:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Your environment (OS, Node version, etc.)

### Suggesting Features

Have an idea? [Open an issue](https://github.com/vickcoo/devkit/issues) with:
- Clear description of the feature
- Use case / problem it solves
- Proposed implementation (if you have ideas)

### Code Style

- Use TypeScript for CLI code
- Follow existing code style (see `.eslintrc` and `.prettierrc`)
- Run `npm run build` before committing
- Ensure all tests pass
- Follow conventional commit messages (see below)

### Commit Message Guidelines

**IMPORTANT**: All commits must follow [Conventional Commits](https://www.conventionalcommits.org/) specification.

#### Format

```
<type>(<scope>): <description>
```

#### Examples

```bash
feat(cli): add django-rest template
fix(web): resolve mobile navigation overflow
docs(readme): update installation instructions
refactor: improve template loading logic
chore(deps): update typescript to 5.3
```

#### Types

- `feat` - New feature (triggers MINOR version bump)
- `fix` - Bug fix (triggers PATCH version bump)
- `docs` - Documentation changes
- `style` - Code formatting (not affecting functionality)
- `refactor` - Code restructuring
- `perf` - Performance improvements
- `test` - Adding or updating tests
- `build` - Build system changes
- `ci` - CI/CD changes
- `chore` - Maintenance tasks

#### Scopes

- `cli` - CLI tool changes
- `web` - Website changes
- `templates` - Template changes
- `docs` - Documentation changes
- `deps` - Dependency updates

#### Rules

- Use imperative mood: "add" not "added" or "adds"
- No capitalization of first letter
- No period at the end
- Keep description under 50 characters
- Make atomic commits (one logical change per commit)

#### Breaking Changes

Indicate breaking changes with `!` or `BREAKING CHANGE` footer:

```bash
feat(cli)!: change template directory structure

BREAKING CHANGE: Template structure has changed.
Existing custom templates need to be updated.
```

### Versioning

BlueprintKit follows [Semantic Versioning](https://semver.org/):

- **MAJOR** (x.0.0) - Breaking changes
- **MINOR** (0.x.0) - New features (backward compatible)
- **PATCH** (0.0.x) - Bug fixes (backward compatible)

Your commit type determines version bumps:
- `feat` → MINOR version bump
- `fix`, `perf` → PATCH version bump
- `feat!`, `BREAKING CHANGE` → MAJOR version bump

### Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feat/your-feature-name
   ```

2. **Make atomic commits**
   - Each commit should be a single logical change
   - Follow conventional commit format
   - Keep commits small and focused

3. **Update documentation**
   - Update README if you added features
   - Add/update comments in code
   - Update AGENTS.md if changing architecture

4. **Test thoroughly**
   - Test your changes locally
   - Ensure `npm run build` succeeds
   - Verify templates work end-to-end

5. **Submit PR**
   - Clear title following conventional format
   - Detailed description of changes
   - Link related issues (Fixes #123)
   - Include screenshots for UI changes

6. **Address feedback**
   - Respond to review comments
   - Make requested changes
   - Keep the PR updated

7. **Merge**
   - Once approved, maintainers will merge
   - Squash merge is typically used

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You!

Every contribution helps make BlueprintKit better for developers worldwide. Thank you for being part of the community! ❤️
