# DevKit Templates

This directory contains production-ready project templates for DevKit CLI.

## Available Templates

### 1. nextjs-tailwind

**Description:** Next.js 15 with App Router, TypeScript, Tailwind CSS, and Shadcn UI

**Category:** Fullstack

**Tech Stack:**
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn UI
- ESLint
- Prettier

**When to use:**
- Building modern web applications
- Creating landing pages
- Developing full-stack applications
- Need SEO optimization
- Want server-side rendering

**Get started:**
```bash
devkit init -t nextjs-tailwind
cd your-project
npm run dev
```

---

### 2. express-typescript

**Description:** Express REST API with TypeScript, structured for production

**Category:** Backend

**Tech Stack:**
- Express
- TypeScript
- Jest
- Winston (logging)
- Helmet (security)
- CORS
- Compression
- Rate limiting

**When to use:**
- Building REST APIs
- Creating microservices
- Need backend for mobile/web apps
- Building authentication servers
- Developing data processing services

**Get started:**
```bash
devkit init -t express-typescript
cd your-project
cp .env.example .env
npm run dev
```

---

### 3. react-native-expo

**Description:** React Native with Expo, TypeScript, and Navigation

**Category:** Mobile

**Tech Stack:**
- React Native
- Expo
- TypeScript
- Expo Router
- React Navigation
- Theme System (light/dark)

**When to use:**
- Building mobile apps for iOS and Android
- Need cross-platform mobile development
- Want quick prototyping
- Building MVP mobile apps
- Creating mobile-first applications

**Get started:**
```bash
devkit init -t react-native-expo
cd your-project
npm start
```

## Template Structure

Each template follows this structure:

```
template-name/
├── package.json          # Dependencies and scripts (with template variables)
├── README.md             # Template-specific documentation
├── tsconfig.json         # TypeScript configuration
├── .gitignore            # Git ignore rules
├── .eslintrc.json        # ESLint configuration
├── .prettierrc           # Prettier configuration
└── src/ or app/          # Source code
```

## Template Variables

All templates support these variables that are replaced during project creation:

- `{{PROJECT_NAME}}` - Project name
- `{{AUTHOR}}` - Author name
- `{{DESCRIPTION}}` - Project description
- `{{VERSION}}` - Project version
- `{{YEAR}}` - Current year

## Creating Custom Templates

You can create your own templates by following this structure:

1. Create a new directory in `templates/`
2. Add `package.json` with template variables
3. Add `README.md` with usage instructions
4. Add configuration files (.gitignore, tsconfig.json, etc.)
5. Add source code structure
6. Test the template

### Example package.json

```json
{
  "name": "{{PROJECT_NAME}}",
  "version": "{{VERSION}}",
  "description": "{{DESCRIPTION}}",
  "author": "{{AUTHOR}}",
  "license": "MIT"
}
```

## Quality Standards

All templates must meet these standards:

1. **Production-Ready**
   - Error handling
   - Environment variables
   - Security best practices
   - Performance optimization

2. **Developer Experience**
   - Clear README
   - TypeScript support
   - ESLint + Prettier
   - Hot reload in development

3. **Documentation**
   - Getting started guide
   - Available scripts
   - Environment variables
   - Deployment instructions

4. **Testing**
   - Test setup (Jest, etc.)
   - Example tests
   - Test scripts in package.json

5. **Code Quality**
   - Consistent code style
   - Meaningful comments
   - Proper error messages
   - Type safety

## Contributing Templates

To contribute a new template:

1. Fork the repository
2. Create your template in `templates/`
3. Follow the quality standards above
4. Update this README
5. Submit a pull request

### Template Checklist

- [ ] All files use template variables
- [ ] README.md is comprehensive
- [ ] TypeScript configuration is strict
- [ ] ESLint and Prettier are configured
- [ ] .gitignore includes common files
- [ ] package.json has clear scripts
- [ ] Code follows best practices
- [ ] Template has been tested
- [ ] Documentation is clear

## License

All templates are licensed under MIT unless otherwise specified.

## Support

For issues or questions about templates:
- [GitHub Issues](https://github.com/yourusername/devkit/issues)
- [Documentation](https://devkit.dev/templates)
