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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWERvY0FTVEdlbmVyYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9YRG9jQVNUR2VuZXJhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseURBQTRFO0FBQzVFLGtFQUErRDtBQUMvRCx1REFBb0Q7QUFDcEQsZ0VBQTZEO0FBRTdEOzs7Ozs7OztHQVFHO0FBQ0g7SUFFRTs7Ozs7Ozs7O09BU0c7SUFDSCxZQUFZLE1BQWM7UUFVMUI7Ozs7Ozs7O1dBUUc7UUFDSSxhQUFRLEdBQUcsR0FBMEIsRUFBRTtZQUM1QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdEMsQ0FBQyxDQUFBO1FBcEJDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxtQ0FBZ0IsQ0FDakMsSUFBSSxxQ0FBaUIsQ0FDbkIsSUFBSSxpQ0FBZSxDQUNqQixJQUFJLG1DQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUM3QixDQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFlRDs7Ozs7Ozs7T0FRRztJQUNILElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0NBRUY7QUFoREQsbUNBZ0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgWERvY1N5bnRheFBhcnNlciwgRG9jdW1lbnRhdGlvbkNvbnRleHQgfSBmcm9tIFwiLi9YRG9jU3ludGF4UGFyc2VyXCI7XHJcbmltcG9ydCB7IENvbW1vblRva2VuU3RyZWFtIH0gZnJvbSBcImFudGxyNHRzL0NvbW1vblRva2VuU3RyZWFtXCI7XHJcbmltcG9ydCB7IFhEb2NTeW50YXhMZXhlciB9IGZyb20gXCIuL1hEb2NTeW50YXhMZXhlclwiO1xyXG5pbXBvcnQgeyBBTlRMUklucHV0U3RyZWFtIH0gZnJvbSBcImFudGxyNHRzL0FOVExSSW5wdXRTdHJlYW1cIjtcclxuXHJcbi8qKlxyXG4gKiBYRG9jQVNUUGFyc2VyIGlzIGEgY2xhc3MgdGhhdCBwYXJzZXMgdGhlIHNvdXJjZS5cclxuICogXHJcbiAqICMgQVBJXHJcbiAqIFxyXG4gKiBgYGBcclxuICogQGNsYXNzIFhEb2NBU1RQYXJzZXJcclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBYRG9jQVNUR2VuZXJhdG9yIHtcclxuICBwcml2YXRlIHBhcnNlcl86IFhEb2NTeW50YXhQYXJzZXJcclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgWERvY0FTVFBhcnNlciBvYmplY3QuXHJcbiAgICogXHJcbiAgICogIyBBUElcclxuICAgKiBcclxuICAgKiBgYGBcclxuICAgKiBAY29uc3RydWN0b3JcclxuICAgKiBAcGFyYW0gc291cmNlOiBzdHJpbmdcclxuICAgKiBgYGBcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6IHN0cmluZykge1xyXG4gICAgdGhpcy5wYXJzZXJfID0gbmV3IFhEb2NTeW50YXhQYXJzZXIoXHJcbiAgICAgIG5ldyBDb21tb25Ub2tlblN0cmVhbShcclxuICAgICAgICBuZXcgWERvY1N5bnRheExleGVyKFxyXG4gICAgICAgICAgbmV3IEFOVExSSW5wdXRTdHJlYW0oc291cmNlKVxyXG4gICAgICAgIClcclxuICAgICAgKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhcnNlcyB0aGUgc291cmNlIGFuZCByZXR1cm5zIGFuIEFudGxyIHBhcnNlIHRyZWUuXHJcbiAgICogXHJcbiAgICogIyBBUElcclxuICAgKiBcclxuICAgKiBgYGBcclxuICAgKiBAbWV0aG9kIHBhcnNlXHJcbiAgICogYGBgXHJcbiAgICovXHJcbiAgcHVibGljIGdlbmVyYXRlID0gKCkgOiBEb2N1bWVudGF0aW9uQ29udGV4dCA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJzZXJfLmRvY3VtZW50YXRpb24oKTtcclxuICB9XHJcbiAgXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhbiBpbnN0YW5jZSBvZiBYRG9jU3ludGF4UGFyc2VyLlxyXG4gICAqIFxyXG4gICAqICMgQVBJXHJcbiAgICogXHJcbiAgICogYGBgXHJcbiAgICogQHByb3BlcnR5IHBhcnNlclxyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgcGFyc2VyKCkgOiBYRG9jU3ludGF4UGFyc2VyIHtcclxuICAgIHJldHVybiB0aGlzLnBhcnNlcl87XHJcbiAgfVxyXG4gIFxyXG59Il19