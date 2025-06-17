#!/bin/bash

# README Markdown Viewer - GitHub Repository Setup Script
# Run this script to initialize and push your GitHub repository

set -e  # Exit on any error

echo "🚀 README Markdown Viewer - GitHub Setup"
echo "========================================"

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Please run this script from the project root directory."
    exit 1
fi

# Initialize git if not already done
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    git branch -M main
else
    echo "✅ Git repository already initialized"
fi

# Add all files
echo "📁 Adding all files to git..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit"
else
    # Initial commit
    echo "💾 Creating initial commit..."
    git commit -m "🎉 Initial release of README Markdown Viewer

✨ Features:
- Auto-detects README.md files (case-insensitive)
- Beautiful markdown rendering using VS Code's built-in renderer
- Real-time content updates
- VS Code theme integration
- Zero configuration required

🛠️ Technical:
- Written in TypeScript
- Uses VS Code Extension API
- Comprehensive test coverage
- CI/CD pipeline with GitHub Actions
- Full open-source project structure

📧 Contact: pratham.rajbhar987@gmail.com
🐛 Issues: https://github.com/prathamrajbhar/readme-markdown-viewer/issues"
fi

# Check if remote origin exists
if git remote get-url origin &> /dev/null; then
    echo "✅ Remote origin already configured"
    REMOTE_URL=$(git remote get-url origin)
    echo "📍 Remote URL: $REMOTE_URL"
else
    echo "🔗 Setting up remote origin..."
    REPO_URL="https://github.com/prathamrajbhar/readme-markdown-viewer.git"
    git remote add origin $REPO_URL
    echo "✅ Remote origin added: $REPO_URL"
fi

# Function to push to GitHub
push_to_github() {
    echo "🚀 Pushing to GitHub..."
    if git push -u origin main; then
        echo "✅ Successfully pushed to GitHub!"
        echo ""
        echo "🎉 Your repository is now live at:"
        echo "   https://github.com/prathamrajbhar/readme-markdown-viewer"
        echo ""
        echo "📋 Next steps:"
        echo "   1. Go to your repository on GitHub"
        echo "   2. Add a description and topics"
        echo "   3. Enable GitHub Actions (CI/CD will run automatically)"
        echo "   4. Consider adding branch protection rules"
        echo "   5. Share your extension with the community!"
        return 0
    else
        echo "❌ Failed to push to GitHub"
        echo "💡 This might be because:"
        echo "   1. The repository doesn't exist on GitHub yet"
        echo "   2. You don't have push permissions"
        echo "   3. Authentication is required"
        return 1
    fi
}

# Ask user if they want to push now
echo ""
echo "📋 Setup Summary:"
echo "   ✅ Git repository initialized"
echo "   ✅ Files committed"
echo "   ✅ Remote origin configured"
echo ""

read -p "🤔 Do you want to push to GitHub now? (y/N): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    if ! push_to_github; then
        echo ""
        echo "🔧 Manual setup required:"
        echo ""
        echo "1. Create repository on GitHub:"
        echo "   https://github.com/new"
        echo "   Repository name: readme-markdown-viewer"
        echo "   Description: VS Code extension that automatically renders README.md files"
        echo "   Make it public for open source"
        echo ""
        echo "2. Then run:"
        echo "   git push -u origin main"
        echo ""
        echo "3. Or use GitHub CLI:"
        echo "   gh repo create readme-markdown-viewer --public --source=."
        echo "   git push -u origin main"
    fi
else
    echo "⏳ Setup completed but not pushed to GitHub yet."
    echo ""
    echo "🔧 When you're ready to push:"
    echo ""
    echo "1. Create repository on GitHub:"
    echo "   https://github.com/new"
    echo "   Repository name: readme-markdown-viewer"
    echo "   Description: VS Code extension that automatically renders README.md files"
    echo ""
    echo "2. Then run:"
    echo "   git push -u origin main"
    echo ""
    echo "3. Or use this script again:"
    echo "   ./setup-github.sh"
fi

echo ""
echo "🎯 Project is ready for open source collaboration!"
echo "📧 Contact: pratham.rajbhar987@gmail.com"
