# xdoc-parser

[![NPM](https://img.shields.io/npm/v/xdoc-parser.svg)](https://npmjs.com/package/xdoc-parser)
[![Build Status](https://travis-ci.org/iwatakeshi/xdoc-parser.svg?branch=master)](https://travis-ci.org/iwatakeshi/xdoc-parser)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fiwatakeshi%2Fxdoc-parser.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fiwatakeshi%2Fxdoc-parser?ref=badge_shield)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Open Source Helpers](https://www.codetriage.com/iwatakeshi/xdoc-parser/badges/users.svg)](https://www.codetriage.com/iwatakeshi/xdoc-parser)

An XDoc comment parser.

## Introduction

XDoc is an alternative to JSDoc's syntax and heavily inspired by Rust's documentation style. By looking at JSDoc's documentation page, there really isn't a grammar for it. Thus, writing documentation and then trying to parse it makes things a bit diffcult. XDoc is sort of an answer to this problem. 

XDoc is based on  an actual grammar (using ANTLR4) and those who use languages such as TypeScript, Rust, or Swift should be familiar with the syntax. Here's an example that shows how you can write confusing syntaxes in a more familiar form:

```
JSDoc                           XDoc
============================    ===================================================
@param {Array.<string>} names   → @param names: string[]
@param {*} name                 → @param name: any
@param {(any|string)} name      → @param name: any | string
@param {string} [name]          → @param name?: string
@param {???} [name = "Joe"]     → @param somebody: any | (string & number) = "Joe"
```

Bear in mind that XDoc doesn't understand what `@param` really means. Since it is only a parser, it will just give you an AST. To fully grasp XDoc, I recommend you to check out the [ANTLR grammar](./grammar/XDocSyntaxParser.g4).

## Example

A basic example would look like the following:

Example file:
```
/**
 * Description
 *
 * # API
 * 
 * ```
 * @param tag id - description.
 * ```
 */

 ...
```

Example program:
```js
// ...
const xdoc = require('xdoc-parser');
const ast = xdoc(fs.readFileSync('...')).parseFile();
console.log(JSON.stringify(ast, null, 2));
// ...
```

In the example above, `xdoc()` will return an array containing an object with `markdown` and `documentation`:
```ts
[{
  markdown: RemarkNode,
  documentation: Partial<DocumentationNode>
}]
```

If you are parsing a single comment, then use the `parse` method as shown below:

Example program:
```js
// ...
const xdoc = require('xdoc-parser');
const ast = xdoc(fs.readFileSync('...')).parse();
console.log(JSON.stringify(ast, null, 2));
// ...
```

**Note**: If you pass a file with multiple comments, `parse()` will only parse the first comment in the file.

Finally, to parse only the syntax and not the Markdown comments, use the `parseSyntax` method as shown below:

```js
const xdoc = require('xdoc-parser');
const ast = xdoc('@tag id: type').parse();
console.log(JSON.stringify(ast, null, 2));
```

You may also access the core parser class (or other classes) and simply parse the XDoc syntax if that's all you care for. For example:

```js
const xdoc = require('xdoc-parser')
const XDocASTGenerator = xdoc.core.XDocASTGenerator;
const XDocASTVisitor = xdoc.core.XDocASTVisitor;

const generate = (source) => new XDocASTGenerator(source).generate();
const parse = (source) => new XDocASTVisitor(generate(source)).visit();
const ast = parse('@tag id: type - description {@inline description}');
console.log(JSON.stringify(ast, null, 2));
```

**Note**: `xdoc-parser` is written in Typescript. Thus, you may easily import it as follows:

```ts
import xdoc from 'xdoc-parser'
```

## Documentation Style

There are two ways that you can write your documentations. The first way is to write in JSDoc-style
and the second way is to write in XDoc-style:

### JSDoc-style
```js
/**
 * Description
 * @tag id: string
 */
```

### XDoc-style

```js
/**
 * Description
 * 
 * # API
 * 
 * ```
 * @tag id: string
 * ```
 */
```

**Note**: Regardless of style used, `xdoc()` will parse only the annotations within a comment. Also, the type of comment does not matter. For example, `# comment` or `""" comment """` should work.


## Documentation

To be added...once [mr-doc v4](https://github.com/mr-doc/mr-doc) is complete.

## Contribution

There are two main classes in the codebase that make up the XDoc parser and you are free to modify them to enhance XDoc. The requirements are:

* [ANTLR4](https://github.com/antlr/antlr4) (Just in case)
* [antlrts](https://github.com/tunnelvisionlabs/antlr4ts)
* mocha

First, the grammar file can be modified to add or remove features. If you modify the grammar, you will need to run the build script `npm run-script build` and reflect the changes
in `XDocASTVisitor.ts`.

Second, `XDocCommentParser.ts` strips out anything within a comment block. At the moment, the parser is handwritten and quite limited. It cannot parser triple-slash comments continuously like in Rustdoc. For example:

```rust
///
///...
///
...
```

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fiwatakeshi%2Fxdoc-parser.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fiwatakeshi%2Fxdoc-parser?ref=badge_large)