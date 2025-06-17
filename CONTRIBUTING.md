# Contributing to README Markdown Viewer

Thank you for your interest in contributing to the README Markdown Viewer extension! We welcome contributions from the community.

## 🤝 How to Contribute

### Reporting Bugs
- Use the [Issues](https://github.com/prathamrajbhar/readme-markdown-viewer/issues) tab to report bugs
- Include VS Code version, extension version, and steps to reproduce
- Add screenshots or GIFs if applicable

### Suggesting Features
- Open an issue with the "enhancement" label
- Describe the feature and its use case
- Discuss implementation approaches

### Code Contributions

#### Prerequisites
- Node.js (v18 or higher)
- VS Code
- Git

#### Setup Development Environment

1. **Fork and Clone**
   ```bash
   git clone https://github.com/prathamrajbhar/readme-markdown-viewer.git
   cd readme-markdown-viewer
   npm install
   ```

2. **Open in VS Code**
   ```bash
   code .
   ```

3. **Run Extension**
   - Press `F5` to open Extension Development Host
   - Test your changes with README.md files

#### Development Workflow

1. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Follow the coding standards below
   - Write tests for new features
   - Update documentation as needed

3. **Test Your Changes**
   ```bash
   npm run compile
   npm run test
   npm run lint
   ```

4. **Commit and Push**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   git push origin feature/your-feature-name
   ```

5. **Create Pull Request**
   - Use the PR template
   - Link related issues
   - Add screenshots for UI changes

## 📝 Coding Standards

### TypeScript Style
- Use TypeScript strict mode
- Follow existing code patterns
- Add JSDoc comments for public APIs
- Use meaningful variable and function names

### Code Structure
```typescript
// Good
async function renderMarkdownContent(document: vscode.TextDocument): Promise<string> {
    // Implementation
}

// Avoid
function doStuff(doc: any) {
    // Implementation
}
```

### Error Handling
- Always handle errors gracefully
- Log errors to console for debugging
- Show user-friendly error messages

```typescript
try {
    const result = await vscode.commands.executeCommand('markdown.api.render', content);
    return result;
} catch (error) {
    console.error('Failed to render markdown:', error);
    vscode.window.showErrorMessage('Failed to render README as markdown');
    return fallbackContent;
}
```

## 🧪 Testing

### Running Tests
```bash
npm run test
```

### Writing Tests
- Add tests for new features in `src/test/`
- Test edge cases and error scenarios
- Use VS Code's testing framework

```typescript
import * as assert from 'assert';
import * as vscode from 'vscode';

suite('Extension Tests', () => {
    test('Should detect README.md files', () => {
        // Test implementation
    });
});
```

## 📦 Building and Packaging

### Local Development
```bash
npm run compile    # Compile TypeScript
npm run watch      # Watch for changes
npm run lint       # Run ESLint
```

### Creating Package
```bash
npm run package    # Creates .vsix file
```

## 🔖 Release Process

1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Create git tag: `git tag v1.x.x`
4. Push tag: `git push origin v1.x.x`
5. GitHub Actions will create release automatically

## 💡 Feature Ideas

Looking for contribution ideas? Check out these:

- [ ] Support for other markdown files (not just README.md)
- [ ] Custom CSS themes
- [ ] Print functionality
- [ ] Export to PDF
- [ ] Table of contents generation
- [ ] Search within rendered markdown
- [ ] Markdown extensions support
- [ ] Performance optimizations
- [ ] Better error handling
- [ ] Accessibility improvements

## 📞 Getting Help

- Join discussions in [Issues](https://github.com/prathamrajbhar/readme-markdown-viewer/issues)
- Check existing [Pull Requests](https://github.com/prathamrajbhar/readme-markdown-viewer/pulls)
- Read the [VS Code Extension API docs](https://code.visualstudio.com/api)

## 🎉 Recognition

Contributors will be:
- Added to the Contributors section in README
- Mentioned in release notes
- Given credit in the extension's about page

Thank you for contributing! 🚀
