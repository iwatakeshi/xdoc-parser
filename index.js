// Core classes

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
function xdoc(source, options = {}) {
  return (new XDocParser(source, options))
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
module.exports = xdoc;
