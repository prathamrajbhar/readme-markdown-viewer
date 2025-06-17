# Copilot Instructions for README Markdown Viewer Extension

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This is a VS Code extension project. Please use the get_vscode_api with a query as input to fetch the latest VS Code API references.

## Project Overview
This extension automatically detects when README.md files are opened and displays them as rendered Markdown in a webview instead of the default text editor.

## Key Features
- Auto-detects README.md files (case-insensitive)
- Uses VS Code's built-in markdown rendering
- Displays content in a webview with proper styling
- Closes the default text editor when README.md is opened
- Works silently in the background without user interaction

## Technical Details
- Uses `workspace.onDidOpenTextDocument` to detect file opens
- Uses `window.createWebviewPanel` to create markdown preview
- Uses `commands.executeCommand('markdown.api.render')` for rendering
- Uses `commands.executeCommand('workbench.action.closeActiveEditor')` to close text editor
