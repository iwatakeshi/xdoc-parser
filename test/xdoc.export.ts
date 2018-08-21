import * as chai from 'chai';
const { assert } = chai;

describe('XDoc Exports', () => {
  it('should export a function', () => {
    assert.isFunction(require(`${process.cwd()}/index.js`));
  })

  it('should export the core classes', () => {
    let xdoc = require(`${process.cwd()}/index.js`)
    assert.exists(xdoc.core)
    assert.exists(xdoc.core.XDocParser);
    assert.exists(xdoc.core.XDocASTNode);
    assert.exists(xdoc.core.XDocASTGenerator);
    assert.exists(xdoc.core.XDocASTVisitor);
    assert.exists(xdoc.core.XDocCommentParser);
    assert.exists(xdoc.core.XDocSyntaxLexer);
    assert.exists(xdoc.core.XDocSyntaxParser);
  })

})