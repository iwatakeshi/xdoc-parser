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
// Exports
Object.defineProperty(xdoc, 'core', {
    value: XDoc,
    writable: false
});
module.exports = xdoc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUFpRTtBQUVqRSx5REFBeUQ7QUFDekQsd0NBQXdDO0FBQ3hDLCtCQUErQjtBQUUvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJHO0FBQ0gsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQTBCO0lBQzlDLE9BQU8sQ0FBQyxJQUFJLG9CQUFVLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUE7QUFDMUMsQ0FBQztBQUVELFVBQVU7QUFDVixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDbEMsS0FBSyxFQUFFLElBQUk7SUFDWCxRQUFRLEVBQUUsS0FBSztDQUNoQixDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBYRG9jUGFyc2VyLCB7IFhEb2NQYXJzZXJPcHRpb25zIH0gZnJvbSAnLi9zcmMvWERvY1BhcnNlcic7XG5cbi8vIGNvbnN0IFhEb2NQYXJzZXIgPSByZXF1aXJlKCcuL2J1aWxkL3NyYy8nKS5YRG9jUGFyc2VyO1xuLy8gY29uc3QgWERvYyA9IHJlcXVpcmUoJy4vYnVpbGQvc3JjLycpO1xuaW1wb3J0ICogYXMgWERvYyBmcm9tICcuL3NyYy8nO1xuXG4vKipcbiAqIFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgWERvY1BhcnNlci5cbiAqIFxuICogIyBBUElcbiAqIFxuICogYGBgeGRvY1xuICogQGZ1bmN0aW9uIHhkb2NcbiAqIEBwYXJhbSBzb3VyY2U6IHN0cmluZ1xuICogQHBhcmFtIG9wdGlvbnM6IHtcbiAqICBjb21tZW50OiB7XG4gKiAgICB0eXBlOiBzdHJpbmdcbiAqICB9XG4gKiAgbWFya2Rvd246IHtcbiAqICAgIHJlbWFyazogYW55LFxuICogICAgaGVhZGluZ0RlcHRoOiBudW1iZXJcbiAqICB9XG4gKiAgdmlzaXRvcjoge1xuICogICAgc2hvd05vZGVUZXh0OiBib29sZWFuXG4gKiAgfVxuICogfVxuICogYGBgXG4gKi9cbmZ1bmN0aW9uIHhkb2Moc291cmNlLCBvcHRpb25zOiBYRG9jUGFyc2VyT3B0aW9ucykge1xuICByZXR1cm4gKG5ldyBYRG9jUGFyc2VyKHNvdXJjZSwgb3B0aW9ucykpXG59XG5cbi8vIEV4cG9ydHNcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh4ZG9jLCAnY29yZScsIHtcbiAgdmFsdWU6IFhEb2MsXG4gIHdyaXRhYmxlOiBmYWxzZVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0geGRvYzsiXX0=