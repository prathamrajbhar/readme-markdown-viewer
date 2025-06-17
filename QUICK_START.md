# 🚀 Quick Start Guide for Contributors

## Prerequisites Checklist
- [ ] [Node.js](https://nodejs.org/) v18+ installed
- [ ] [VS Code](https://code.visualstudio.com/) installed
- [ ] [Git](https://git-scm.com/) installed
- [ ] GitHub account for contributions

## 📦 Setup (5 minutes)

```bash
# 1. Fork & Clone
git clone https://github.com/prathamrajbhar/readme-markdown-viewer.git
cd readme-markdown-viewer

# 2. Install dependencies
npm install

# 3. Open in VS Code
code .

# 4. Start development
npm run watch
```

## 🧪 Testing Your Changes

1. **Press F5** in VS Code → Opens Extension Development Host
2. **Create/Open README.md** → Should auto-render in webview
3. **Make changes** → Hot reload with `npm run watch`

## 📋 Common Commands

```bash
npm run compile     # Build once
npm run watch       # Build + watch for changes
npm run lint        # Check code style
npm run test        # Run all tests
npm run package     # Create .vsix file
```

## 🎯 Quick Contribution Workflow

1. **Create branch**: `git checkout -b feature/your-feature`
2. **Make changes** in `src/extension.ts`
3. **Test**: Press F5 → Test with README files
4. **Commit**: `git commit -m "feat: your change"`
5. **Push**: `git push origin feature/your-feature`
6. **PR**: Create pull request on GitHub

## 🐛 Common Issues

**Extension not activating?**
- Check console in Extension Development Host (Ctrl+Shift+I)
- Verify `onLanguage:markdown` activation event

**Changes not showing?**
- Reload Extension Development Host (Ctrl+R)
- Check `npm run watch` is running

**Build errors?**
- Run `npm run clean && npm install`
- Check TypeScript version compatibility

## 📞 Need Help?

- 💬 [GitHub Discussions](https://github.com/prathamrajbhar/readme-markdown-viewer/discussions)
- 🐛 [Report Issues](https://github.com/prathamrajbhar/readme-markdown-viewer/issues)
- 📖 [VS Code Extension API](https://code.visualstudio.com/api)

Happy coding! 🎉
