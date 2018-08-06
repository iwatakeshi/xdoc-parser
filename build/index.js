"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XDocParser_1 = require("./src/XDocParser");
// const XDocParser = require('./build/src/').XDocParser;
// const XDoc = require('./build/src/');
const XDoc = require("./src/");
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
(function (xdoc) {
    xdoc.core = XDoc;
})(xdoc || (xdoc = {}));
// Exports
module.exports = xdoc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRTtBQUVqRSx5REFBeUQ7QUFDekQsd0NBQXdDO0FBQ3hDLCtCQUErQjtBQUUvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJHO0FBQ0gsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQTBCO0lBQzlDLE9BQU8sQ0FBQyxJQUFJLG9CQUFVLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUE7QUFDMUMsQ0FBQztBQUNELFdBQVUsSUFBSTtJQUNDLFNBQUksR0FBRyxJQUFJLENBQUM7QUFDM0IsQ0FBQyxFQUZTLElBQUksS0FBSixJQUFJLFFBRWI7QUFFRCxVQUFVO0FBQ1YsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgWERvY1BhcnNlciwgeyBYRG9jUGFyc2VyT3B0aW9ucyB9IGZyb20gJy4vc3JjL1hEb2NQYXJzZXInO1xuXG4vLyBjb25zdCBYRG9jUGFyc2VyID0gcmVxdWlyZSgnLi9idWlsZC9zcmMvJykuWERvY1BhcnNlcjtcbi8vIGNvbnN0IFhEb2MgPSByZXF1aXJlKCcuL2J1aWxkL3NyYy8nKTtcbmltcG9ydCAqIGFzIFhEb2MgZnJvbSAnLi9zcmMvJztcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIFhEb2NQYXJzZXIuXG4gKiBcbiAqICMgQVBJXG4gKiBcbiAqIGBgYHhkb2NcbiAqIEBmdW5jdGlvbiB4ZG9jXG4gKiBAcGFyYW0gc291cmNlOiBzdHJpbmdcbiAqIEBwYXJhbSBvcHRpb25zOiB7XG4gKiAgY29tbWVudDoge1xuICogICAgdHlwZTogc3RyaW5nXG4gKiAgfVxuICogIG1hcmtkb3duOiB7XG4gKiAgICByZW1hcms6IGFueSxcbiAqICAgIGhlYWRpbmdEZXB0aDogbnVtYmVyXG4gKiAgfVxuICogIHZpc2l0b3I6IHtcbiAqICAgIHNob3dOb2RlVGV4dDogYm9vbGVhblxuICogIH1cbiAqIH1cbiAqIGBgYFxuICovXG5mdW5jdGlvbiB4ZG9jKHNvdXJjZSwgb3B0aW9uczogWERvY1BhcnNlck9wdGlvbnMpIHtcbiAgcmV0dXJuIChuZXcgWERvY1BhcnNlcihzb3VyY2UsIG9wdGlvbnMpKVxufVxubmFtZXNwYWNlIHhkb2Mge1xuICBleHBvcnQgY29uc3QgY29yZSA9IFhEb2M7XG59XG5cbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0geGRvYztcbiJdfQ==