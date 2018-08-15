import { XDocASTVisitorOptions } from "./XDocASTVisitor";
export interface XDocParserOptions {
    comment: {
        type?: 'SINGLE_HASH_COMMENT' | 'SINGLE_STAR_COMMENT' | 'DOUBLE_STAR_COMMENT' | 'DOUBLE_SLASH_COMMENT' | 'TRIPLE_SLASH_COMMENT' | 'TRIPLE_QUOTE_COMMENT';
    };
    markdown: {
        remark?: any;
        headingDepth?: number;
    };
    visitor: XDocASTVisitorOptions | any;
}
export interface RemarkNode {
    type: string;
    depth?: number;
    value?: string;
    lang?: string;
    children: RemarkNode[];
    position: {
        start: number;
        end: number;
    };
}
export default class XDocParser {
    private source_;
    private options;
    constructor(source: string, options?: Partial<XDocParserOptions>);
    readonly source: string;
    /**
     * Parse a single comment.
     *
     * @return: {
     *  markdown: RemarkNode[],
     *  documentation: Partial<DocumentationNode>
     * }
     */
    parse: () => {
        markdown: RemarkNode;
        documentation: Partial<import("../../../../../../Users/takeshi/Documents/GitHub/xdoc-parser/src/XDocASTNode").DocumentationNode>;
    };
    /**
     * Parse multiple comments within a file.
     */
    parseFile: () => {
        markdown: RemarkNode;
        documentation: Partial<import("../../../../../../Users/takeshi/Documents/GitHub/xdoc-parser/src/XDocASTNode").DocumentationNode>;
    }[];
    parseSyntax: () => Partial<import("../../../../../../Users/takeshi/Documents/GitHub/xdoc-parser/src/XDocASTNode").DocumentationNode>;
    private parseMarkdown;
    private isAPI;
    private parseXDoc;
    private filter;
}
