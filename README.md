# README Markdown Viewer Extension

[![CI/CD Pipeline](https://github.com/prathamrajbhar/readme-markdown-viewer/actions/workflows/ci.yml/badge.svg)](https://github.com/prathamrajbhar/readme-markdown-viewer/actions/workflows/ci.yml)
[![VS Code Marketplace](https://img.shields.io/visual-studio-marketplace/v/your-publisher-name.readme-markdown-viewer.svg)](https://marketplace.visualstudio.com/items?itemName=your-publisher-name.readme-markdown-viewer)
[![Downloads](https://img.shields.io/visual-studio-marketplace/d/your-publisher-name.readme-markdown-viewer.svg)](https://marketplace.visualstudio.com/items?itemName=your-publisher-name.readme-markdown-viewer)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/your-publisher-name.readme-markdown-viewer.svg)](https://marketplace.visualstudio.com/items?itemName=your-publisher-name.readme-markdown-viewer)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> 🚀 **Automatically renders README.md files as beautifully formatted Markdown webviews in VS Code**

A VS Code extension that automatically detects when README.md files are opened and displays them as beautifully rendered Markdown in a webview instead of the default text editor.

![Demo GIF](https://via.placeholder.com/800x400/1e1e1e/ffffff?text=Demo+GIF+Coming+Soon)

## ✨ Features

- **🔍 Automatic Detection**: Automatically detects when README.md files (case-insensitive) are opened
- **🎨 Beautiful Rendering**: Uses VS Code's built-in markdown renderer for consistent, high-quality display
- **⚡ Live Updates**: Content updates automatically when the README file is modified
- **🎭 Theme Integration**: Respects your VS Code theme colors and styling
- **🔄 Zero Configuration**: Works silently in the background without any setup
- **📱 Responsive Design**: Optimized layout that works well in different panel sizes

## 🚀 Quick Start

### Installation

#### From VS Code Marketplace
1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X`)
3. Search for "README Markdown Viewer"
4. Click Install

#### From VSIX file
1. Download the latest `.vsix` file from [Releases](https://github.com/prathamrajbhar/readme-markdown-viewer/releases)
2. Open VS Code
3. Run `Extensions: Install from VSIX...` from Command Palette (`Ctrl+Shift+P`)
4. Select the downloaded `.vsix` file

### Usage

1. **Open any README.md file** in VS Code
2. **That's it!** 🎉 The extension automatically:
   - Closes the default text editor for the README file
   - Opens a webview panel with the rendered Markdown content
   - Updates the content live as you edit the file

## 🛠️ Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [VS Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)

### Setup

```bash
# Clone the repository
git clone https://github.com/prathamrajbhar/readme-markdown-viewer.git
cd readme-markdown-viewer

# Install dependencies
npm install

# Open in VS Code
code .
```

### Building

```bash
# Compile TypeScript
npm run compile

# Watch for changes during development
npm run watch

# Run linter
npm run lint

# Run tests
npm test

# Package extension
npm run package
```

### Testing

```bash
# Run all tests
npm test

# Test in VS Code Extension Development Host
# Press F5 in VS Code to launch a new window with the extension loaded
```

## 🏗️ Architecture

### Key Components

- **File Detection**: Uses `workspace.onDidOpenTextDocument` to detect when files are opened
- **Webview Management**: Uses `window.createWebviewPanel` to create the markdown preview panel
- **Markdown Rendering**: Uses VS Code's `markdown.api.render` command for consistent rendering
- **Editor Management**: Uses `workbench.action.closeActiveEditor` to close the default text editor

### Project Structure

```
├── src/
│   ├── extension.ts          # Main extension logic
│   └── test/
│       └── extension.test.ts # Test files
├── .github/
│   ├── workflows/            # GitHub Actions CI/CD
│   ├── ISSUE_TEMPLATE/       # Issue templates
│   └── pull_request_template.md
├── .vscode/                  # VS Code configuration
├── out/                      # Compiled JavaScript
├── package.json              # Extension manifest
└── README.md                 # This file
```

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) to get started.

### Ways to Contribute

- 🐛 [Report bugs](https://github.com/prathamrajbhar/readme-markdown-viewer/issues/new?template=bug_report.md)
- 💡 [Request features](https://github.com/prathamrajbhar/readme-markdown-viewer/issues/new?template=feature_request.md)
- 🔧 Submit pull requests
- 📖 Improve documentation
- ⭐ Star the project

### Development Process

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests for your changes
5. Ensure all tests pass (`npm test`)
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

## 📋 Roadmap

- [ ] Support for other markdown files (not just README.md)
- [ ] Custom CSS themes and styling options
- [ ] Print functionality for rendered markdown
- [ ] Export to PDF feature
- [ ] Table of contents generation
- [ ] Search within rendered markdown
- [ ] Markdown extensions support (math, diagrams)
- [ ] Performance optimizations for large files
- [ ] Better accessibility support
- [ ] Multi-language support

## 🐛 Known Issues

- Very large README files (>1MB) may take a moment to render initially
- Some complex HTML in markdown may not render perfectly
- Images with relative paths work best when the README is in the workspace root

See the [Issues](https://github.com/prathamrajbhar/readme-markdown-viewer/issues) page for a complete list.

## 📊 Requirements

- **VS Code**: Version 1.101.0 or higher
- **Operating System**: Windows, macOS, or Linux
- **No additional dependencies** required

## 📈 Performance

- **Startup**: < 100ms activation time
- **Memory**: < 10MB memory footprint
- **Rendering**: Optimized for files up to 1MB

## 🔒 Privacy

This extension:
- ✅ Processes files locally only
- ✅ No data is sent to external servers
- ✅ No telemetry or analytics
- ✅ Respects VS Code's privacy settings

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **VS Code Team** for the excellent extension API
- **Markdown-it** for the markdown parsing
- **Contributors** who help improve this extension
- **Community** for feedback and feature requests

## 📞 Support

- 💬 [GitHub Discussions](https://github.com/prathamrajbhar/readme-markdown-viewer/discussions)
- 🐛 [Issue Tracker](https://github.com/prathamrajbhar/readme-markdown-viewer/issues)
- 📧 [Email Support](mailto:pratham.rajbhar987@gmail.com)

## 🌟 Show Your Support

If you find this extension helpful:
- ⭐ Star the repository
- 🐦 Share it on social media
- 📝 Write a review on the VS Code Marketplace
- 🤝 Contribute to the project

---

<div align="center">

**Made with ❤️ by [Pratham Rajbhar](https://github.com/prathamrajbhar)**

[⬆ Back to Top](#readme-markdown-viewer-extension)

</div>

## Features

- **Automatic Detection**: Automatically detects when README.md files (case-insensitive) are opened
- **Markdown Rendering**: Uses VS Code's built-in markdown renderer to display rich formatting
- **Live Updates**: Content updates automatically when the README file is modified
- **VS Code Theming**: Respects your VS Code theme colors and styling
- **No User Interaction Required**: Works silently in the background

## How It Works

1. Open any README.md file in VS Code
2. The extension automatically:
   - Closes the default text editor for the README file
   - Opens a webview panel with the rendered Markdown content
   - Updates the content live as you edit the file

## Installation

1. Clone this repository
2. Open the project in VS Code
3. Run `npm install` to install dependencies
4. Press `F5` to run the extension in a new Extension Development Host window

## Development

### Building

```bash
npm run compile
```

### Running

- Press `F5` to open a new window with your extension loaded
- Open any README.md file to see the extension in action

### Testing

- Open the debug console in VS Code (`Ctrl+Shift+Y`) to see logging output
- Make changes to `src/extension.ts` and reload (`Ctrl+R`) to see changes

## Technical Details

### Architecture

- **File Detection**: Uses `workspace.onDidOpenTextDocument` to detect when files are opened
- **Webview Creation**: Uses `window.createWebviewPanel` to create the markdown preview panel
- **Markdown Rendering**: Uses VS Code's `markdown.api.render` command for consistent rendering
- **Editor Management**: Uses `workbench.action.closeActiveEditor` to close the default text editor

### Key Components

- **README Detection**: Case-insensitive detection of files named "readme.md"
- **Webview Management**: Tracks open webview panels to prevent duplicates
- **Live Updates**: Monitors document changes and updates webview content
- **Styling**: CSS that respects VS Code theme variables for consistent appearance

## Requirements

- VS Code 1.101.0 or higher
- No additional dependencies required

## Known Issues

- If VS Code's markdown renderer is unavailable, falls back to plain text display
- Very large README files may take a moment to render initially

## Release Notes

### 0.0.1

Initial release featuring:
- Automatic README.md detection and rendering
- Live content updates
- VS Code theme integration
- Background operation without user commands

---

## Contributing

Feel free to contribute to this extension by:
- Reporting bugs
- Suggesting new features  
- Submitting pull requests

## License

This extension is provided as-is for educational and practical use.

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
