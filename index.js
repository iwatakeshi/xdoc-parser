const XDocParser = require('./build/src/').XDocParser;
const XDoc = require('./build/src/');

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
// Namespace 'core'
xdoc['core'] = XDoc;

/* Exports */

// JavaScript
module.exports = xdoc;
// ES6+ and TypeScript (hack)
module.exports['default'] = xdoc;
