// Export core classes
import * as XDocASTNode from './XDocASTNode';
import XDocParser from './XDocParser';
import XDocASTGenerator from './XDocASTGenerator';
import XDocASTVisitor from './XDocASTVisitor';
import XDocCommentParser from './XDocCommentParser';
// Export antlr-specific classes
import * as XDocSyntaxLexer from './XDocSyntaxLexer';
import * as XDocSyntaxParser from './XDocSyntaxParser';
// Note: This would not appear in ES5
export * from './XDocSyntaxParserListener';
export * from './XDocSyntaxParserVisitor'

export {
  XDocParser,
  XDocASTNode,
  XDocASTGenerator,
  XDocASTVisitor,
  XDocCommentParser,
  XDocSyntaxLexer,
  XDocSyntaxParser,
}