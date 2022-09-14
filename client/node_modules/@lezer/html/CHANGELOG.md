## 1.0.1 (2022-07-27)

### Bug fixes

Continue parsing when an invalid entity reference appears in an attribute value.

## 1.0.0 (2022-06-06)

### New features

First stable version.

## 0.16.1 (2022-05-16)

### Bug fixes

Fix a bug where comment end tokens preceded by dashes were sometimes not recognized.

## 0.16.0 (2022-04-20)

### Breaking changes

Move to 0.16 serialized parser format.

### New features

The parser now includes syntax highlighting information in its node types.

## 0.15.1 (2022-02-16)

### Bug fixes

Make sure the tree for unfinished self-closing tags shows them as self-closing.

## 0.15.0 (2021-08-11)

### Breaking changes

The module's name changed from `lezer-html` to `@lezer/html`.

Upgrade to the 0.15.0 lezer interfaces.

## 0.13.6 (2021-06-16)

### Bug fixes

Add a rule for invalid `&` syntax to avoid error-recovery around stray ampersands.

## 0.13.5 (2021-05-05)

### Bug fixes

Fix a problem where like attributes inappropriately included trailing whitespace.

## 0.13.4 (2021-03-10)

### Bug fixes

Strip quotes from attribute values passed to `attrs` predicates in `configureNesting`.

## 0.13.3 (2021-02-17)

### Bug fixes

Optimize the tokenizer by using a context tracker.

## 0.13.2 (2021-01-22)

### Bug fixes

Make comments consist of multiple tokens, so that huge comments don't freeze the parser.

## 0.13.1 (2020-12-04)

### Bug fixes

Fix versions of lezer packages depended on.

## 0.13.0 (2020-12-04)

### Breaking changes

The nested parser configuration utility is now called `configureNesting`, and returns an object to pass to `Parser.configure`'s `nested` option instead of a new parser.

### New features

The parser can now be given a "noMatch" dialect to not mark mismatched tags.

## 0.12.0 (2020-10-23)

### Breaking changes

Adjust to changed serialized parser format.

### New features

The parser now more effectively matches close and open tags, even in the presence of mismatched tags.

## 0.11.1 (2020-09-26)

### Bug fixes

Fix lezer depencency versions

## 0.11.0 (2020-09-26)

### Breaking changes

Follow change in serialized parser format.

## 0.10.0 (2020-08-07)

### Breaking changes

Upgrade to 0.10 parser serialization

## 0.9.0 (2020-06-08)

### Breaking changes

Upgrade to 0.9 parser serialization

### New features

Tag start/end tokens now have `NodeProp.openedBy`/`closedBy` props.

## 0.8.4 (2020-04-09)

### Bug fixes

Regenerate parser with a fix in lezer-generator so that the top node prop is properly assigned.

## 0.8.3 (2020-04-01)

### Bug fixes

Make the package load as an ES module on node

## 0.8.2 (2020-02-28)

### New features

Provide an ES module file.

## 0.8.1 (2020-02-26)

### Bug fixes

Adds support for single-quoted attribute values.

Don't treat /> tag ends as self-closing, just ignore them instead.

## 0.8.0 (2020-02-03)

### New features

Follow 0.8.0 release of the library.

## 0.7.0 (2020-01-20)

### Breaking changes

Use the lezer 0.7.0 parser format.

## 0.5.2 (2020-01-15)

### Bug fixes

Allow whitespace between the `<` and `/` in a close tag.

## 0.5.1 (2019-10-22)

### Bug fixes

Fix top prop missing from build output.

## 0.5.0 (2019-10-22)

### Breaking changes

Move from `lang` to `top` prop on document node.

## 0.4.0 (2019-09-10)

### Breaking changes

Adjust to 0.4.0 parse table format.

## 0.3.0 (2019-08-22)

### New features

First numbered release.
