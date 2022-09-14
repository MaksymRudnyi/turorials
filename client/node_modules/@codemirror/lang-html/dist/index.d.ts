import * as _codemirror_state from '@codemirror/state';
import { LRLanguage, LanguageSupport } from '@codemirror/language';
import { CompletionContext, CompletionResult } from '@codemirror/autocomplete';

/**
Type used to specify tags to complete.
*/
interface TagSpec {
    /**
    Define tag-specific attributes. Property names are attribute
    names, and property values can be null to indicate free-form
    attributes, or a list of strings for suggested attribute values.
    */
    attrs?: Record<string, null | readonly string[]>;
    /**
    Can be used to specify a list of child tags that are valid
    inside this tag. The default is to allow any tag.
    */
    children?: readonly string[];
}
/**
HTML tag completion. Opens and closes tags and attributes in a
context-aware way.
*/
declare function htmlCompletionSource(context: CompletionContext): CompletionResult | null;
/**
Create a completion source for HTML extended with additional tags
or attributes.
*/
declare function htmlCompletionSourceWith(config: {
    /**
    Define extra tag names to complete.
    */
    extraTags?: Record<string, TagSpec>;
    /**
    Add global attributes that are available on all tags.
    */
    extraGlobalAttributes?: Record<string, null | readonly string[]>;
}): (context: CompletionContext) => CompletionResult | null;

/**
A language provider based on the [Lezer HTML
parser](https://github.com/lezer-parser/html), extended with the
JavaScript and CSS parsers to parse the content of `<script>` and
`<style>` tags.
*/
declare const htmlLanguage: LRLanguage;
/**
Language support for HTML, including
[`htmlCompletion`](https://codemirror.net/6/docs/ref/#lang-html.htmlCompletion) and JavaScript and
CSS support extensions.
*/
declare function html(config?: {
    /**
    By default, the syntax tree will highlight mismatched closing
    tags. Set this to `false` to turn that off (for example when you
    expect to only be parsing a fragment of HTML text, not a full
    document).
    */
    matchClosingTags?: boolean;
    /**
    Determines whether [`autoCloseTags`](https://codemirror.net/6/docs/ref/#lang-html.autoCloseTags)
    is included in the support extensions. Defaults to true.
    */
    autoCloseTags?: boolean;
    /**
    Add additional tags that can be completed.
    */
    extraTags?: Record<string, TagSpec>;
    /**
    Add additional completable attributes to all tags.
    */
    extraGlobalAttributes?: Record<string, null | readonly string[]>;
}): LanguageSupport;
/**
Extension that will automatically insert close tags when a `>` or
`/` is typed.
*/
declare const autoCloseTags: _codemirror_state.Extension;

export { TagSpec, autoCloseTags, html, htmlCompletionSource, htmlCompletionSourceWith, htmlLanguage };
