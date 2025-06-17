# Change Log

All notable changes to the "README Markdown Viewer" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Support for other markdown files (not just README.md)
- Custom CSS themes
- Print functionality
- Export to PDF feature
- Table of contents generation

## [1.0.0] - 2025-06-17

### Added
- 🎉 Initial release of README Markdown Viewer
- ✨ Automatic detection of README.md files (case-insensitive)
- 🎨 Beautiful markdown rendering using VS Code's built-in renderer
- ⚡ Real-time content updates when README files are modified
- 🎭 VS Code theme integration for consistent styling
- 🔄 Automatic text editor closure when README is opened
- 📱 Responsive webview design
- 🛡️ Error handling with graceful fallbacks
- 🧪 Comprehensive test coverage
- 📚 Complete documentation and contributing guidelines

### Technical Details
- Uses `workspace.onDidOpenTextDocument` for file detection
- Implements `window.createWebviewPanel` for markdown display
- Leverages `commands.executeCommand('markdown.api.render')` for rendering
- Employs `workbench.action.closeActiveEditor` for editor management
- Written in TypeScript with strict mode enabled
- Follows VS Code extension best practices

### Performance
- < 100ms activation time
- < 10MB memory footprint
- Optimized for files up to 1MB
- No external dependencies

### Supported Formats
- Standard Markdown syntax
- GitHub Flavored Markdown
- Code blocks with syntax highlighting
- Tables, lists, and blockquotes
- Images and links
- Emojis and special characters

## [0.0.1] - 2025-06-17

### Added
- Initial project setup
- Basic extension scaffolding
- TypeScript configuration
- Development environment setup

---

## Legend

- 🎉 Major feature
- ✨ New feature
- 🎨 UI/UX improvement
- ⚡ Performance improvement
- 🐛 Bug fix
- 🔒 Security fix
- 🛡️ Error handling
- 📚 Documentation
- 🧪 Testing
- 🔄 Refactoring
- 💥 Breaking change
- 🗑️ Deprecation
- 📱 Responsive design
- 🎭 Theme support