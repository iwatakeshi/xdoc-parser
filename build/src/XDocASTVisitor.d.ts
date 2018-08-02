import * as Parser from './XDocSyntaxParser';
import './XDocSyntaxParserVisitor';
import { AnnotationsNode, ArrayTypeNode, BodyNode, DescriptionNode, DocumentationNode, ExpressionNode, FormalParameterSequenceNode, IdentifierNode, InlineTagNode, KeywordNode, LambdaExpressionNode, LambdaTypeNode, LiteralExpressionNode, ObjectExpressionNode, ObjectPairExpressionNode, OptionalIdentifierNode, OptionalTagIdentifierNode, ParameterNode, ParenthesizedExpressionNode, PropertyTagIdentifierNode, TagIdentifierNode, TagNameNode, TagNode, TupleTypeNode, TypeNode, UnaryExpressionNode, PropertyIdentifierNode, ParenthesizedTypeNode } from './XDocASTNode';
export interface XDocASTVisitorOptions {
    showNodeText: boolean;
}
/**
 * XDocAST is a class that converts a Antlr parse tree
 * into a Javascript tree object.
 *
 * # API
 *
 * ```
 * @class XDocAST
 * ```
 */
export default class XDocASTVisitor {
    private documentation;
    private options;
    constructor(documentation: Parser.DocumentationContext, options?: XDocASTVisitorOptions);
    /**
     * Converts the Antlr parse tree into a JavaScript tree object.
     *
     * # API
     *
     * ```
     * @method visit
     * @param context: Parser.DocumentationConext
     * @return: {
     *  name?: string,
     *  id?: {},
     *  value?: {},
     *  type?: {},
     *  description?: {}
     * }[]
     * ```
     */
    visit: () => DocumentationNode;
    visitDocumentation: (context: Parser.DocumentationContext) => DocumentationNode;
    visitBody: (context: Parser.BodyContext) => BodyNode;
    visitAnnotations: (context: Parser.AnnotationsContext, options: XDocASTVisitorOptions) => AnnotationsNode;
    visitTag: (context: Parser.TagContext) => TagNode;
    visitTagName: (context: Parser.TagNameContext) => TagNameNode;
    visitTagIdentifier: (context: Parser.TagIdentifierContext) => TagIdentifierNode;
    visitPropertyTagIdentifier: (context: Parser.PropertyTagIdentifierContext) => PropertyTagIdentifierNode;
    visitOptionalTagIdentifer: (context: Parser.OptionalTagIdentifierContext) => OptionalTagIdentifierNode;
    visitOptionalTagOrIdentifier: (context: Parser.OptionalTagOrIdentifierContext) => IdentifierNode | OptionalIdentifierNode;
    visitIdentifier: (context: Parser.IdentifierContext, optional?: boolean) => IdentifierNode;
    visitType: (context: Parser.TypeContext | Parser.NotArrayTypeContext, optional?: boolean) => TypeNode;
    visitLambdaType: (context: Parser.LambdaTypeContext) => LambdaTypeNode;
    visitLambdaFormalParameterSequence: (context: Parser.FormalParameterSequenceContext | Parser.ParameterContext) => FormalParameterSequenceNode;
    visitParameters: (contexts: Parser.ParameterContext[]) => ParameterNode[];
    visitParameter: (context: Parser.ParameterContext) => ParameterNode;
    visitTuple: (context: Parser.TupleTypeContext) => TupleTypeNode;
    visitTupleSequenceType: (context: Parser.TupleTypeSequenceContext) => undefined[] | TypeNode[];
    visitPrimaryType: (context: Parser.PrimaryTypeContext) => import("./XDocASTNode").PrimaryTypeNode;
    visitIdentifierOrKeyword: (context: Parser.IdentifierOrKeywordContext) => IdentifierNode | KeywordNode;
    visitKeyword: (context: Parser.KeywordContext) => KeywordNode;
    visitParenthesizedType: (context: Parser.ParenthesizedTypeContext, optional?: boolean) => ParenthesizedTypeNode;
    visitUnaryType: (context: Parser.UnaryTypeContext) => import("./XDocASTNode").UnaryTypeNode;
    visitObjectType: (context: Parser.ObjectTypeContext) => import("./XDocASTNode").ObjectTypeNode;
    visitObjectPairSequenceType: (context: Parser.ObjectPairSequenceTypeContext) => import("./XDocASTNode").ObjectPairTypeNode[];
    visitArrayType: (context: Parser.ArrayTypeContext) => ArrayTypeNode;
    visitPropertyIdentifier: (context: Parser.PropertyIdentifierContext) => PropertyIdentifierNode;
    visitOptionalIdentifier: (context: Parser.OptionalIdentifierContext) => OptionalIdentifierNode;
    visitOptionalIdentifierOrIdentifier: (context: Parser.OptionalIdentifierOrIdentifierContext) => IdentifierNode | OptionalIdentifierNode;
    visitExpression: (context: Parser.ExpressionContext) => ExpressionNode;
    visitUnaryExpression: (context: Parser.UnaryExpressionContext) => UnaryExpressionNode;
    visitArrayExpression: (context: Parser.ArrayExpressionContext) => ExpressionNode[];
    visitObjectExpression: (context: Parser.ObjectExpressionContext) => ObjectExpressionNode;
    visitObjectPairSequenceExpression: (context: Parser.ObjectPairSequenceExpressionContext) => ObjectPairExpressionNode[];
    visitLambdaExpression: (context: Parser.LambdaExpressionContext) => LambdaExpressionNode;
    visitParenthesizedExpression: (context: Parser.ParenthesizedExpressionContext) => ParenthesizedExpressionNode;
    visitLiteralExpression: (context: Parser.LiteralExpressionContext) => LiteralExpressionNode;
    visitDescription: (context: Parser.DescriptionContext) => DescriptionNode;
    visitDescriptionLine: (context: Parser.DescriptionLineContext) => InlineTagNode[];
    visitDescriptionLineElement: (context: Parser.DescriptionLineElementContext[]) => InlineTagNode[];
    visitInlineTag: (context: Parser.InlineTagContext) => InlineTagNode;
    visitInlineTagBody: (context: Parser.InlineTagBodyContext) => string;
}
