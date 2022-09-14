import { LRLanguage, LanguageSupport } from '@codemirror/language';
import { CompletionSource } from '@codemirror/autocomplete';

/**
CSS property and value keyword completion source.
*/
declare const cssCompletionSource: CompletionSource;

/**
A language provider based on the [Lezer CSS
parser](https://github.com/lezer-parser/css), extended with
highlighting and indentation information.
*/
declare const cssLanguage: LRLanguage;
/**
Language support for CSS.
*/
declare function css(): LanguageSupport;

export { css, cssCompletionSource, cssLanguage };
