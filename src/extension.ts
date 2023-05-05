import * as vscode from "vscode";

/**
 * 插件触发条件
 */
const documentSelector = [
  "javascript",
  "css",
  "vue",
  "typescriptreact",
  "typescript",
];

export function activate(context: vscode.ExtensionContext) {
  vscode.languages.registerCompletionItemProvider(
    documentSelector,
    {
      provideCompletionItems(document, position, token, context) {
        const completionItems = [];
        // 添加一些自动完成建议
        completionItems.push(new vscode.CompletionItem("clr-green-1"));
        completionItems.push(new vscode.CompletionItem("clr-green-2"));
        completionItems.push(new vscode.CompletionItem("clr-green-3"));
        return completionItems;
      },
    },
    "clr"
  );
  let disposable = vscode.commands.registerCommand("no.helloWorld", () => {
    const date = new Date();
    vscode.window.showInformationMessage("当前时间：" + date.toString());
  });
  context.subscriptions.push(disposable);
}
export function deactivate() {}
