import { XDocSyntaxParser, DocumentationContext } from "./XDocSyntaxParser";
/**
 * XDocASTParser is a class that parses the source.
 *
 * # API
 *
 * ```
 * @class XDocASTParser
 * ```
 */
export default class XDocASTParser {
    private parser_;
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
    constructor(source: string);
    /**
     * Parses the source and returns an Antlr parse tree.
     *
     * # API
     *
     * ```
     * @method parse
     * ```
     */
    generate: () => DocumentationContext;
    /**
     * Returns an instance of XDocSyntaxParser.
     *
     * # API
     *
     * ```
     * @property parser
     * ```
     */
    readonly parser: XDocSyntaxParser;
}
