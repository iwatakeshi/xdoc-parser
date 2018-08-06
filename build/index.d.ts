import XDocParser, { XDocParserOptions } from './src/XDocParser';
import * as XDocASTNode from './src/XDocASTNode';
import XDocASTGenerator from './src/XDocASTGenerator';
import XDocASTVisitor from './src/XDocASTVisitor';
import XDocCommentParser from './src/XDocCommentParser';
import * as XDocSyntaxLexer from './src/XDocSyntaxLexer';
import * as XDocSyntaxParser from './src/XDocSyntaxParser';
export * from './src/XDocSyntaxParserListener';
export * from './src/XDocSyntaxParserVisitor';
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
declare function xdoc(source: any, options: XDocParserOptions): XDocParser;
declare namespace xdoc {
    let core: {
        XDocParser: typeof XDocParser;
        XDocASTNode: typeof XDocASTNode;
        XDocASTGenerator: typeof XDocASTGenerator;
        XDocASTVisitor: typeof XDocASTVisitor;
        XDocCommentParser: typeof XDocCommentParser;
        XDocSyntaxLexer: typeof XDocSyntaxLexer;
        XDocSyntaxParser: typeof XDocSyntaxParser;
    };
}
export default xdoc;
