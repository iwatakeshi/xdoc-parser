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
class XDocASTGenerator {
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
exports.default = XDocASTGenerator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWERvY0FTVEdlbmVyYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9YRG9jQVNUR2VuZXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseURBQTRFO0FBQzVFLGtFQUErRDtBQUMvRCx1REFBb0Q7QUFDcEQsZ0VBQTZEO0FBRTdEOzs7Ozs7OztHQVFHO0FBQ0gsTUFBcUIsZ0JBQWdCO0lBRW5DOzs7Ozs7Ozs7T0FTRztJQUNILFlBQVksTUFBYztRQVUxQjs7Ozs7Ozs7V0FRRztRQUNJLGFBQVEsR0FBRyxHQUEwQixFQUFFO1lBQzVDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN0QyxDQUFDLENBQUE7UUFwQkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLG1DQUFnQixDQUNqQyxJQUFJLHFDQUFpQixDQUNuQixJQUFJLGlDQUFlLENBQ2pCLElBQUksbUNBQWdCLENBQUMsTUFBTSxDQUFDLENBQzdCLENBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQWVEOzs7Ozs7OztPQVFHO0lBQ0gsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Q0FFRjtBQWhERCxtQ0FnREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBYRG9jU3ludGF4UGFyc2VyLCBEb2N1bWVudGF0aW9uQ29udGV4dCB9IGZyb20gXCIuL1hEb2NTeW50YXhQYXJzZXJcIjtcbmltcG9ydCB7IENvbW1vblRva2VuU3RyZWFtIH0gZnJvbSBcImFudGxyNHRzL0NvbW1vblRva2VuU3RyZWFtXCI7XG5pbXBvcnQgeyBYRG9jU3ludGF4TGV4ZXIgfSBmcm9tIFwiLi9YRG9jU3ludGF4TGV4ZXJcIjtcbmltcG9ydCB7IEFOVExSSW5wdXRTdHJlYW0gfSBmcm9tIFwiYW50bHI0dHMvQU5UTFJJbnB1dFN0cmVhbVwiO1xuXG4vKipcbiAqIFhEb2NBU1RQYXJzZXIgaXMgYSBjbGFzcyB0aGF0IHBhcnNlcyB0aGUgc291cmNlLlxuICogXG4gKiAjIEFQSVxuICogXG4gKiBgYGBcbiAqIEBjbGFzcyBYRG9jQVNUUGFyc2VyXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWERvY0FTVEdlbmVyYXRvciB7XG4gIHByaXZhdGUgcGFyc2VyXzogWERvY1N5bnRheFBhcnNlclxuICAvKipcbiAgICogQ3JlYXRlcyBhIFhEb2NBU1RQYXJzZXIgb2JqZWN0LlxuICAgKiBcbiAgICogIyBBUElcbiAgICogXG4gICAqIGBgYFxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHNvdXJjZTogc3RyaW5nXG4gICAqIGBgYFxuICAgKi9cbiAgY29uc3RydWN0b3Ioc291cmNlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBhcnNlcl8gPSBuZXcgWERvY1N5bnRheFBhcnNlcihcbiAgICAgIG5ldyBDb21tb25Ub2tlblN0cmVhbShcbiAgICAgICAgbmV3IFhEb2NTeW50YXhMZXhlcihcbiAgICAgICAgICBuZXcgQU5UTFJJbnB1dFN0cmVhbShzb3VyY2UpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyB0aGUgc291cmNlIGFuZCByZXR1cm5zIGFuIEFudGxyIHBhcnNlIHRyZWUuXG4gICAqIFxuICAgKiAjIEFQSVxuICAgKiBcbiAgICogYGBgXG4gICAqIEBtZXRob2QgcGFyc2VcbiAgICogYGBgXG4gICAqL1xuICBwdWJsaWMgZ2VuZXJhdGUgPSAoKSA6IERvY3VtZW50YXRpb25Db250ZXh0ID0+IHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZXJfLmRvY3VtZW50YXRpb24oKTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgWERvY1N5bnRheFBhcnNlci5cbiAgICogXG4gICAqICMgQVBJXG4gICAqIFxuICAgKiBgYGBcbiAgICogQHByb3BlcnR5IHBhcnNlclxuICAgKiBgYGBcbiAgICovXG4gIHB1YmxpYyBnZXQgcGFyc2VyKCkgOiBYRG9jU3ludGF4UGFyc2VyIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZXJfO1xuICB9XG4gIFxufSJdfQ==