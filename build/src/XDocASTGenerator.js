"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const XDocSyntaxParser_1 = require("./XDocSyntaxParser");
const CommonTokenStream_1 = require("antlr4ts/CommonTokenStream");
const XDocSyntaxLexer_1 = require("./XDocSyntaxLexer");
const ANTLRInputStream_1 = require("antlr4ts/ANTLRInputStream");
/**
 * XDocASTParser is a class that parses the source.
 *
 * # API
 *
 * ```
 * @class XDocASTParser
 * ```
 */
class XDocASTParser {
    /**
     * Creates a XDocASTParser object.
     *
     * # API
     *
     * ```
     * @constructor
     * @param source: string
     * ```
     */
    constructor(source) {
        /**
         * Parses the source and returns an Antlr parse tree.
         *
         * # API
         *
         * ```
         * @method parse
         * ```
         */
        this.generate = () => {
            return this.parser_.documentation();
        };
        this.parser_ = new XDocSyntaxParser_1.XDocSyntaxParser(new CommonTokenStream_1.CommonTokenStream(new XDocSyntaxLexer_1.XDocSyntaxLexer(new ANTLRInputStream_1.ANTLRInputStream(source))));
    }
    /**
     * Returns an instance of XDocSyntaxParser.
     *
     * # API
     *
     * ```
     * @property parser
     * ```
     */
    get parser() {
        return this.parser_;
    }
}
exports.default = XDocASTParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWERvY0FTVEdlbmVyYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9YRG9jQVNUR2VuZXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseURBQTRFO0FBQzVFLGtFQUErRDtBQUMvRCx1REFBb0Q7QUFDcEQsZ0VBQTZEO0FBRTdEOzs7Ozs7OztHQVFHO0FBQ0gsTUFBcUIsYUFBYTtJQUVoQzs7Ozs7Ozs7O09BU0c7SUFDSCxZQUFZLE1BQWM7UUFVMUI7Ozs7Ozs7O1dBUUc7UUFDSSxhQUFRLEdBQUcsR0FBMEIsRUFBRTtZQUM1QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdEMsQ0FBQyxDQUFBO1FBcEJDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxtQ0FBZ0IsQ0FDakMsSUFBSSxxQ0FBaUIsQ0FDbkIsSUFBSSxpQ0FBZSxDQUNqQixJQUFJLG1DQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUM3QixDQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFlRDs7Ozs7Ozs7T0FRRztJQUNILElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0NBRUY7QUFoREQsZ0NBZ0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgWERvY1N5bnRheFBhcnNlciwgRG9jdW1lbnRhdGlvbkNvbnRleHQgfSBmcm9tIFwiLi9YRG9jU3ludGF4UGFyc2VyXCI7XG5pbXBvcnQgeyBDb21tb25Ub2tlblN0cmVhbSB9IGZyb20gXCJhbnRscjR0cy9Db21tb25Ub2tlblN0cmVhbVwiO1xuaW1wb3J0IHsgWERvY1N5bnRheExleGVyIH0gZnJvbSBcIi4vWERvY1N5bnRheExleGVyXCI7XG5pbXBvcnQgeyBBTlRMUklucHV0U3RyZWFtIH0gZnJvbSBcImFudGxyNHRzL0FOVExSSW5wdXRTdHJlYW1cIjtcblxuLyoqXG4gKiBYRG9jQVNUUGFyc2VyIGlzIGEgY2xhc3MgdGhhdCBwYXJzZXMgdGhlIHNvdXJjZS5cbiAqIFxuICogIyBBUElcbiAqIFxuICogYGBgXG4gKiBAY2xhc3MgWERvY0FTVFBhcnNlclxuICogYGBgXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhEb2NBU1RQYXJzZXIge1xuICBwcml2YXRlIHBhcnNlcl86IFhEb2NTeW50YXhQYXJzZXJcbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBYRG9jQVNUUGFyc2VyIG9iamVjdC5cbiAgICogXG4gICAqICMgQVBJXG4gICAqIFxuICAgKiBgYGBcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSBzb3VyY2U6IHN0cmluZ1xuICAgKiBgYGBcbiAgICovXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTogc3RyaW5nKSB7XG4gICAgdGhpcy5wYXJzZXJfID0gbmV3IFhEb2NTeW50YXhQYXJzZXIoXG4gICAgICBuZXcgQ29tbW9uVG9rZW5TdHJlYW0oXG4gICAgICAgIG5ldyBYRG9jU3ludGF4TGV4ZXIoXG4gICAgICAgICAgbmV3IEFOVExSSW5wdXRTdHJlYW0oc291cmNlKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgdGhlIHNvdXJjZSBhbmQgcmV0dXJucyBhbiBBbnRsciBwYXJzZSB0cmVlLlxuICAgKiBcbiAgICogIyBBUElcbiAgICogXG4gICAqIGBgYFxuICAgKiBAbWV0aG9kIHBhcnNlXG4gICAqIGBgYFxuICAgKi9cbiAgcHVibGljIGdlbmVyYXRlID0gKCkgOiBEb2N1bWVudGF0aW9uQ29udGV4dCA9PiB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyXy5kb2N1bWVudGF0aW9uKCk7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIFhEb2NTeW50YXhQYXJzZXIuXG4gICAqIFxuICAgKiAjIEFQSVxuICAgKiBcbiAgICogYGBgXG4gICAqIEBwcm9wZXJ0eSBwYXJzZXJcbiAgICogYGBgXG4gICAqL1xuICBwdWJsaWMgZ2V0IHBhcnNlcigpIDogWERvY1N5bnRheFBhcnNlciB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyXztcbiAgfVxuICBcbn0iXX0=