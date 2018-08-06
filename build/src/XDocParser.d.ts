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
    parse: () => RemarkNode[];
    private parseMarkdown;
    private isAPI;
    private parseXDoc;
    private filter;
}
