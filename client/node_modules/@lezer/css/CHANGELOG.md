## 1.0.0 (2022-06-06)

### New features

First stable version.

## 0.16.0 (2022-04-20)

### Breaking changes

Move to 0.16 serialized parser format.

### New features

The parser now includes syntax highlighting information in its node types.

## 0.15.2 (2021-09-24)

### Bug fixes

Distinguish between variable names and other names.

Fix the name of nodes for the `selector` keyword (which by accident was `callee` before).

## 0.15.1 (2021-08-31)

### Bug fixes

Fix parsing of selector arguments to pseudo selectors.

## 0.15.0 (2021-08-11)

### Breaking changes

The module's name changed from `lezer-css` to `@lezer/css`.

Upgrade to the 0.15.0 lezer interfaces.

## 0.13.1 (2020-12-04)

### Bug fixes

Fix versions of lezer packages depended on.

## 0.13.0 (2020-12-04)

## 0.12.0 (2020-10-23)

### Breaking changes

Adjust to changed serialized parser format.

## 0.11.1 (2020-09-26)

### Bug fixes

Fix lezer depencency versions

## 0.11.0 (2020-09-26)

### Breaking changes

Follow change in serialized parser format.

## 0.10.1 (2020-09-02)

### Bug fixes

Fix a conflicting pair of tokens that the generator previously didn't catch.

## 0.10.0 (2020-08-07)

### Breaking changes

Upgrade to 0.10 parser serialization

## 0.9.0 (2020-06-08)

### Breaking changes

Upgrade to 0.9 parser serialization

## 0.8.3 (2020-04-09)

### Bug fixes

Regenerate parser with a fix in lezer-generator so that the top node prop is properly assigned.

## 0.8.2 (2020-04-01)

### Bug fixes

Make the package load as an ES module on node

## 0.8.1 (2020-02-28)

### New features

Provide an ES module file.

## 0.8.0 (2020-02-03)

### New features

Follow 0.8.0 release of the library.

## 0.7.0 (2020-01-20)

### Breaking changes

Use the lezer 0.7.0 parser format.

## 0.5.2 (2020-01-15)

### Bug fixes

Regenerate with lezer-generator 0.5.2 to avoid cyclic forced reductions.

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

Go back to node names, add props, follow changes in grammar syntax.

## 0.2.0 (2019-08-02)

### New Features

First documented release.
