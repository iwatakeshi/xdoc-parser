"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Core classes
const XDocParser_1 = require("./src/XDocParser");
const XDocASTNode = require("./src/XDocASTNode");
const XDocASTGenerator_1 = require("./src/XDocASTGenerator");
const XDocASTVisitor_1 = require("./src/XDocASTVisitor");
const XDocCommentParser_1 = require("./src/XDocCommentParser");
// Antlr-specific classes
const XDocSyntaxLexer = require("./src/XDocSyntaxLexer");
const XDocSyntaxParser = require("./src/XDocSyntaxParser");
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
function xdoc(source, options) {
    return (new XDocParser_1.default(source, options));
}
// Define namespace 'core' for TypeScript (hack)
(function (xdoc) {
    xdoc.core = {
        XDocParser: XDocParser_1.default,
        XDocASTNode,
        XDocASTGenerator: XDocASTGenerator_1.default,
        XDocASTVisitor: XDocASTVisitor_1.default,
        XDocCommentParser: XDocCommentParser_1.default,
        XDocSyntaxLexer,
        XDocSyntaxParser,
    };
})(xdoc || (xdoc = {}));
// Define namespace 'core' for JavaScript (hack)
xdoc['core'] = {
    XDocParser: XDocParser_1.default,
    XDocASTNode,
    XDocASTGenerator: XDocASTGenerator_1.default,
    XDocASTVisitor: XDocASTVisitor_1.default,
    XDocCommentParser: XDocCommentParser_1.default,
    XDocSyntaxLexer,
    XDocSyntaxParser,
};
// Exports (hack)
exports.default = xdoc;
module.exports = xdoc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGVBQWU7QUFDZixpREFBaUU7QUFDakUsaURBQWlEO0FBQ2pELDZEQUFzRDtBQUN0RCx5REFBa0Q7QUFDbEQsK0RBQXdEO0FBQ3hELHlCQUF5QjtBQUN6Qix5REFBeUQ7QUFDekQsMkRBQTJEO0FBSzNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQkc7QUFDSCxTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBMEI7SUFDOUMsT0FBTyxDQUFDLElBQUksb0JBQVUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQTtBQUMxQyxDQUFDO0FBRUQsZ0RBQWdEO0FBRWhELFdBQVUsSUFBSTtJQUNELFNBQUksR0FBRztRQUNoQixVQUFVLEVBQVYsb0JBQVU7UUFDVixXQUFXO1FBQ1gsZ0JBQWdCLEVBQWhCLDBCQUFnQjtRQUNoQixjQUFjLEVBQWQsd0JBQWM7UUFDZCxpQkFBaUIsRUFBakIsMkJBQWlCO1FBQ2pCLGVBQWU7UUFDZixnQkFBZ0I7S0FDakIsQ0FBQTtBQUNILENBQUMsRUFWUyxJQUFJLEtBQUosSUFBSSxRQVViO0FBRUQsZ0RBQWdEO0FBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRztJQUNiLFVBQVUsRUFBVixvQkFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0IsRUFBaEIsMEJBQWdCO0lBQ2hCLGNBQWMsRUFBZCx3QkFBYztJQUNkLGlCQUFpQixFQUFqQiwyQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtDQUNqQixDQUFBO0FBR0QsaUJBQWlCO0FBQ2pCLGtCQUFlLElBQUksQ0FBQztBQUNwQixNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcmUgY2xhc3Nlc1xuaW1wb3J0IFhEb2NQYXJzZXIsIHsgWERvY1BhcnNlck9wdGlvbnMgfSBmcm9tICcuL3NyYy9YRG9jUGFyc2VyJztcbmltcG9ydCAqIGFzIFhEb2NBU1ROb2RlIGZyb20gJy4vc3JjL1hEb2NBU1ROb2RlJztcbmltcG9ydCBYRG9jQVNUR2VuZXJhdG9yIGZyb20gJy4vc3JjL1hEb2NBU1RHZW5lcmF0b3InO1xuaW1wb3J0IFhEb2NBU1RWaXNpdG9yIGZyb20gJy4vc3JjL1hEb2NBU1RWaXNpdG9yJztcbmltcG9ydCBYRG9jQ29tbWVudFBhcnNlciBmcm9tICcuL3NyYy9YRG9jQ29tbWVudFBhcnNlcic7XG4vLyBBbnRsci1zcGVjaWZpYyBjbGFzc2VzXG5pbXBvcnQgKiBhcyBYRG9jU3ludGF4TGV4ZXIgZnJvbSAnLi9zcmMvWERvY1N5bnRheExleGVyJztcbmltcG9ydCAqIGFzIFhEb2NTeW50YXhQYXJzZXIgZnJvbSAnLi9zcmMvWERvY1N5bnRheFBhcnNlcic7XG4vLyBOb3RlOiBUaGlzIHdvdWxkIG5vdCBhcHBlYXIgaW4gRVM1XG5leHBvcnQgKiBmcm9tICcuL3NyYy9YRG9jU3ludGF4UGFyc2VyTGlzdGVuZXInO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvWERvY1N5bnRheFBhcnNlclZpc2l0b3InXG5cbi8qKlxuICogUmV0dXJucyBhbiBpbnN0YW5jZSBvZiBYRG9jUGFyc2VyLlxuICogXG4gKiAjIEFQSVxuICogXG4gKiBgYGB4ZG9jXG4gKiBAZnVuY3Rpb24geGRvY1xuICogQHBhcmFtIHNvdXJjZTogc3RyaW5nXG4gKiBAcGFyYW0gb3B0aW9uczoge1xuICogIGNvbW1lbnQ6IHtcbiAqICAgIHR5cGU6IHN0cmluZ1xuICogIH1cbiAqICBtYXJrZG93bjoge1xuICogICAgcmVtYXJrOiBhbnksXG4gKiAgICBoZWFkaW5nRGVwdGg6IG51bWJlclxuICogIH1cbiAqICB2aXNpdG9yOiB7XG4gKiAgICBzaG93Tm9kZVRleHQ6IGJvb2xlYW5cbiAqICB9XG4gKiB9XG4gKiBgYGBcbiAqL1xuZnVuY3Rpb24geGRvYyhzb3VyY2UsIG9wdGlvbnM6IFhEb2NQYXJzZXJPcHRpb25zKTogWERvY1BhcnNlciB7XG4gIHJldHVybiAobmV3IFhEb2NQYXJzZXIoc291cmNlLCBvcHRpb25zKSlcbn1cblxuLy8gRGVmaW5lIG5hbWVzcGFjZSAnY29yZScgZm9yIFR5cGVTY3JpcHQgKGhhY2spXG5cbm5hbWVzcGFjZSB4ZG9jIHtcbiAgZXhwb3J0IGxldCBjb3JlID0ge1xuICAgIFhEb2NQYXJzZXIsXG4gICAgWERvY0FTVE5vZGUsXG4gICAgWERvY0FTVEdlbmVyYXRvcixcbiAgICBYRG9jQVNUVmlzaXRvcixcbiAgICBYRG9jQ29tbWVudFBhcnNlcixcbiAgICBYRG9jU3ludGF4TGV4ZXIsXG4gICAgWERvY1N5bnRheFBhcnNlcixcbiAgfVxufVxuXG4vLyBEZWZpbmUgbmFtZXNwYWNlICdjb3JlJyBmb3IgSmF2YVNjcmlwdCAoaGFjaylcbnhkb2NbJ2NvcmUnXSA9IHtcbiAgWERvY1BhcnNlcixcbiAgWERvY0FTVE5vZGUsXG4gIFhEb2NBU1RHZW5lcmF0b3IsXG4gIFhEb2NBU1RWaXNpdG9yLFxuICBYRG9jQ29tbWVudFBhcnNlcixcbiAgWERvY1N5bnRheExleGVyLFxuICBYRG9jU3ludGF4UGFyc2VyLFxufVxuXG5cbi8vIEV4cG9ydHMgKGhhY2spXG5leHBvcnQgZGVmYXVsdCB4ZG9jO1xubW9kdWxlLmV4cG9ydHMgPSB4ZG9jO1xuIl19