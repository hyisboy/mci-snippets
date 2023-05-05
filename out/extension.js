"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
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
function activate(context) {
    vscode.languages.registerCompletionItemProvider(documentSelector, {
        provideCompletionItems(document, position, token, context) {
            const completionItems = [];
            // 添加一些自动完成建议
            completionItems.push(new vscode.CompletionItem("clr-green-1"));
            completionItems.push(new vscode.CompletionItem("clr-green-2"));
            completionItems.push(new vscode.CompletionItem("clr-green-3"));
            return completionItems;
        },
    }, "clr");
    let disposable = vscode.commands.registerCommand("no.helloWorld", () => {
        const date = new Date();
        vscode.window.showInformationMessage("当前时间：" + date.toString());
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map