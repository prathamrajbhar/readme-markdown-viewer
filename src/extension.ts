// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log('README Markdown Viewer extension is now active!');

	// Create a map to track webview panels for opened README files
	const readmeWebviews = new Map<string, vscode.WebviewPanel>();

	// Listen for when text documents are opened
	const disposable = vscode.workspace.onDidOpenTextDocument(async (document) => {
		// Check if the opened document is a README.md file (case-insensitive)
		const fileName = path.basename(document.fileName).toLowerCase();
		if (fileName === 'readme.md') {
			// Small delay to ensure the text editor is opened first
			setTimeout(async () => {
				await handleReadmeFile(document, context, readmeWebviews);
			}, 100);
		}
	});

	// Also check if there's already an active README.md file when the extension activates
	if (vscode.window.activeTextEditor) {
		const activeDocument = vscode.window.activeTextEditor.document;
		const fileName = path.basename(activeDocument.fileName).toLowerCase();
		if (fileName === 'readme.md') {
			setTimeout(async () => {
				await handleReadmeFile(activeDocument, context, readmeWebviews);
			}, 100);
		}
	}

	context.subscriptions.push(disposable);
}

async function handleReadmeFile(
	document: vscode.TextDocument, 
	context: vscode.ExtensionContext, 
	readmeWebviews: Map<string, vscode.WebviewPanel>
) {
	const filePath = document.fileName;
	
	// Check if we already have a webview for this file
	if (readmeWebviews.has(filePath)) {
		const existingPanel = readmeWebviews.get(filePath);
		if (existingPanel) {
			existingPanel.reveal();
			return;
		}
	}

	try {
		// Close the text editor that was opened for the README file
		await vscode.commands.executeCommand('workbench.action.closeActiveEditor');

		// Create a webview panel for the README
		const panel = vscode.window.createWebviewPanel(
			'readmeViewer',
			`README - ${path.basename(path.dirname(filePath))}`,
			vscode.ViewColumn.One,
			{
				enableScripts: true,
				retainContextWhenHidden: true,
				localResourceRoots: [vscode.Uri.file(path.dirname(filePath))]
			}
		);

		// Store the panel in our map
		readmeWebviews.set(filePath, panel);

		// Generate HTML content for the webview
		const htmlContent = await generateMarkdownHtml(document, panel.webview, context);
		panel.webview.html = htmlContent;

		// Clean up when the panel is disposed
		panel.onDidDispose(() => {
			readmeWebviews.delete(filePath);
		});

		// Update content when the document changes
		const changeDisposable = vscode.workspace.onDidChangeTextDocument(async (event) => {
			if (event.document.fileName === filePath) {
				const updatedHtml = await generateMarkdownHtml(event.document, panel.webview, context);
				panel.webview.html = updatedHtml;
			}
		});

		// Clean up the change listener when panel is disposed
		panel.onDidDispose(() => {
			changeDisposable.dispose();
		});

	} catch (error) {
		console.error('Error handling README file:', error);
		vscode.window.showErrorMessage('Failed to open README as markdown viewer');
	}
}

async function generateMarkdownHtml(
	document: vscode.TextDocument, 
	webview: vscode.Webview, 
	context: vscode.ExtensionContext
): Promise<string> {
	const markdownContent = document.getText();
	
	try {
		// Use VS Code's built-in markdown rendering
		const rendered = await vscode.commands.executeCommand<string>(
			'markdown.api.render',
			markdownContent
		);

		// Create the complete HTML document with styling
		return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', sans-serif;
            line-height: 1.6;
            color: var(--vscode-foreground);
            background-color: var(--vscode-editor-background);
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
            font-size: 14px;
        }
        h1, h2, h3, h4, h5, h6 {
            color: var(--vscode-foreground);
            margin-top: 1.5em;
            margin-bottom: 0.5em;
        }
        h1 {
            font-size: 2em;
            border-bottom: 1px solid var(--vscode-textSeparator-foreground);
            padding-bottom: 0.3em;
        }
        h2 {
            font-size: 1.5em;
            border-bottom: 1px solid var(--vscode-textSeparator-foreground);
            padding-bottom: 0.3em;
        }
        code {
            background-color: var(--vscode-textCodeBlock-background);
            color: var(--vscode-textPreformat-foreground);
            padding: 2px 4px;
            border-radius: 3px;
            font-family: 'Menlo', 'Monaco', 'Consolas', 'Droid Sans Mono', 'Courier New', monospace;
        }
        pre {
            background-color: var(--vscode-textCodeBlock-background);
            color: var(--vscode-textPreformat-foreground);
            padding: 16px;
            border-radius: 6px;
            overflow-x: auto;
            font-family: 'Menlo', 'Monaco', 'Consolas', 'Droid Sans Mono', 'Courier New', monospace;
        }
        pre code {
            background-color: transparent;
            padding: 0;
        }
        blockquote {
            border-left: 4px solid var(--vscode-textBlockQuote-border);
            background-color: var(--vscode-textBlockQuote-background);
            padding: 8px 16px;
            margin: 16px 0;
            color: var(--vscode-textBlockQuote-foreground);
        }
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 16px 0;
        }
        th, td {
            border: 1px solid var(--vscode-textSeparator-foreground);
            padding: 8px 12px;
            text-align: left;
        }
        th {
            background-color: var(--vscode-textCodeBlock-background);
            font-weight: bold;
        }
        a {
            color: var(--vscode-textLink-foreground);
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        img {
            max-width: 100%;
            height: auto;
        }
        ul, ol {
            padding-left: 20px;
        }
        li {
            margin: 4px 0;
        }
        hr {
            border: none;
            border-top: 1px solid var(--vscode-textSeparator-foreground);
            margin: 24px 0;
        }
    </style>
</head>
<body>
    ${rendered || markdownContent}
</body>
</html>`;
	} catch (error) {
		console.error('Error rendering markdown:', error);
		// Fallback to basic HTML rendering if markdown.api.render fails
		const escapedContent = markdownContent
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/\n/g, '<br>');
		
		return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', sans-serif;
            line-height: 1.6;
            color: var(--vscode-foreground);
            background-color: var(--vscode-editor-background);
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <pre>${escapedContent}</pre>
</body>
</html>`;
	}
}

// This method is called when your extension is deactivated
export function deactivate() {}
