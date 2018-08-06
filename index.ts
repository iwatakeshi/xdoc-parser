// Core classes
import XDocParser, { XDocParserOptions } from './src/XDocParser';
import * as XDocASTNode from './src/XDocASTNode';
import XDocASTGenerator from './src/XDocASTGenerator';
import XDocASTVisitor from './src/XDocASTVisitor';
import XDocCommentParser from './src/XDocCommentParser';
// Antlr-specific classes
import * as XDocSyntaxLexer from './src/XDocSyntaxLexer';
import * as XDocSyntaxParser from './src/XDocSyntaxParser';
// Note: This would not appear in ES5
export * from './src/XDocSyntaxParserListener';
export * from './src/XDocSyntaxParserVisitor'

/**
 * Returns an instance of XDocParser.
 * 
 * # API
 * 
 * ```xdoc
 * @function xdoc
 * @param source: string
 * @param options: {
 *  comment: {
 *    type: string
 *  }
 *  markdown: {
 *    remark: any,
 *    headingDepth: number
 *  }
 *  visitor: {
 *    showNodeText: boolean
 *  }
 * }
 * ```
 */
function xdoc(source, options: XDocParserOptions): XDocParser {
  return (new XDocParser(source, options))
}

// Define namespace 'core' for TypeScript (hack)

namespace xdoc {
  export let core = {
    XDocParser,
    XDocASTNode,
    XDocASTGenerator,
    XDocASTVisitor,
    XDocCommentParser,
    XDocSyntaxLexer,
    XDocSyntaxParser,
  }
}

// Define namespace 'core' for JavaScript (hack)
xdoc['core'] = {
  XDocParser,
  XDocASTNode,
  XDocASTGenerator,
  XDocASTVisitor,
  XDocCommentParser,
  XDocSyntaxLexer,
  XDocSyntaxParser,
}


// Exports (hack)
export default xdoc;
module.exports = xdoc;
