import * as _codemirror_state from '@codemirror/state';
import { LRLanguage, LanguageSupport } from '@codemirror/language';
import { Completion, CompletionContext, CompletionResult } from '@codemirror/autocomplete';
import { Diagnostic } from '@codemirror/lint';
import { EditorView } from '@codemirror/view';

/**
A language provider based on the [Lezer JavaScript
parser](https://github.com/lezer-parser/javascript), extended with
highlighting and indentation information.
*/
declare const javascriptLanguage: LRLanguage;
/**
A language provider for TypeScript.
*/
declare const typescriptLanguage: LRLanguage;
/**
Language provider for JSX.
*/
declare const jsxLanguage: LRLanguage;
/**
Language provider for JSX + TypeScript.
*/
declare const tsxLanguage: LRLanguage;
/**
JavaScript support. Includes [snippet](https://codemirror.net/6/docs/ref/#lang-javascript.snippets)
completion.
*/
declare function javascript(config?: {
    jsx?: boolean;
    typescript?: boolean;
}): LanguageSupport;
/**
Extension that will automatically insert JSX close tags when a `>` or
`/` is typed.
*/
declare const autoCloseTags: _codemirror_state.Extension;

/**
A collection of JavaScript-related
[snippets](https://codemirror.net/6/docs/ref/#autocomplete.snippet).
*/
declare const snippets: readonly Completion[];

/**
Connects an [ESLint](https://eslint.org/) linter to CodeMirror's
[lint](https://codemirror.net/6/docs/ref/#lint) integration. `eslint` should be an instance of the
[`Linter`](https://eslint.org/docs/developer-guide/nodejs-api#linter)
class, and `config` an optional ESLint configuration. The return
value of this function can be passed to [`linter`](https://codemirror.net/6/docs/ref/#lint.linter)
to create a JavaScript linting extension.

Note that ESLint targets node, and is tricky to run in the
browser. The [eslint4b](https://github.com/mysticatea/eslint4b)
and
[eslint4b-prebuilt](https://github.com/marijnh/eslint4b-prebuilt/)
packages may help with that.
*/
declare function esLint(eslint: any, config?: any): (view: EditorView) => Diagnostic[];

/**
Completion source that looks up locally defined names in
JavaScript code.
*/
declare function localCompletionSource(context: CompletionContext): CompletionResult | null;

export { autoCloseTags, esLint, javascript, javascriptLanguage, jsxLanguage, localCompletionSource, snippets, tsxLanguage, typescriptLanguage };
