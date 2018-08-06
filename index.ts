import XDocParser, { XDocParserOptions } from './src/XDocParser';

// const XDocParser = require('./build/src/').XDocParser;
// const XDoc = require('./build/src/');
import * as XDoc from './src/';

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
function xdoc(source, options: XDocParserOptions) {
  return (new XDocParser(source, options))
}
namespace xdoc {
  export const core = XDoc;
}

// Exports
module.exports = xdoc;
