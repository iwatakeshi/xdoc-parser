import * as Parser from './XDocSyntaxParser';
import './XDocSyntaxParserVisitor';
import { ArrayTypeNode, BodyNode, DescriptionNode, DocumentationNode, ExpressionNode, FormalParameterSequenceNode, IdentifierNode, InlineTagNode, KeywordNode, LambdaExpressionNode, LambdaTypeNode, LiteralExpressionNode, ObjectExpressionNode, ObjectPairExpressionNode, ParameterNode, ParenthesizedExpressionNode, PropertyTagIdentifierNode, TagIdentifierNode, TagNameNode, TagNode, TupleTypeNode, TypeNode, UnaryExpressionNode, PropertyIdentifierNode, ParenthesizedTypeNode, PrimaryTypeNode, UnaryTypeNode, ObjectTypeNode } from './XDocASTNode';
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
    constructor(documentation: Parser.DocumentationContext, options?: Partial<XDocASTVisitorOptions>);
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
    visit: () => Partial<DocumentationNode>;
    visitDocumentation: (context: Parser.DocumentationContext) => Partial<DocumentationNode>;
    visitBody: (context: Parser.BodyContext) => Partial<BodyNode>;
    visitAnnotations: (context: Parser.AnnotationsContext, options: XDocASTVisitorOptions) => Partial<Partial<TagNode>[]> | Partial<undefined[]>;
    visitTag: (context: Parser.TagContext) => Partial<TagNode>;
    visitTagName: (context: Parser.TagNameContext) => Partial<TagNameNode>;
    visitTagIdentifier: (context: Parser.TagIdentifierContext) => Partial<TagIdentifierNode>;
    visitPropertyTagIdentifier: (context: Parser.PropertyTagIdentifierContext) => Partial<PropertyTagIdentifierNode>;
    visitOptionalTagIdentifer: (context: Parser.OptionalTagIdentifierContext) => Partial<IdentifierNode>;
    visitOptionalTagOrIdentifier: (context: Parser.OptionalTagOrIdentifierContext) => Partial<IdentifierNode>;
    visitIdentifier: (context: Parser.IdentifierContext, optional?: boolean) => Partial<IdentifierNode>;
    visitType: (context: Parser.TypeContext | Parser.NotArrayTypeContext, optional?: boolean) => Partial<TypeNode>;
    visitLambdaType: (context: Parser.LambdaTypeContext) => Partial<LambdaTypeNode>;
    visitLambdaFormalParameterSequence: (context: Parser.FormalParameterSequenceContext | Parser.ParameterContext) => Partial<FormalParameterSequenceNode>;
    visitParameters: (contexts: Parser.ParameterContext[]) => Partial<ParameterNode>[];
    visitParameter: (context: Parser.ParameterContext) => Partial<ParameterNode>;
    visitTuple: (context: Parser.TupleTypeContext) => Partial<TupleTypeNode>;
    visitTupleSequenceType: (context: Parser.TupleTypeSequenceContext) => undefined[] | Partial<TypeNode>[];
    visitPrimaryType: (context: Parser.PrimaryTypeContext) => Partial<PrimaryTypeNode>;
    visitIdentifierOrKeyword: (context: Parser.IdentifierOrKeywordContext) => Partial<IdentifierNode> | Partial<KeywordNode>;
    visitKeyword: (context: Parser.KeywordContext) => KeywordNode;
    visitParenthesizedType: (context: Parser.ParenthesizedTypeContext, optional?: boolean) => Partial<ParenthesizedTypeNode>;
    visitUnaryType: (context: Parser.UnaryTypeContext) => Partial<UnaryTypeNode>;
    visitObjectType: (context: Parser.ObjectTypeContext) => Partial<ObjectTypeNode>;
    visitObjectPairSequenceType: (context: Parser.ObjectPairSequenceTypeContext) => Partial<import("../../../../../../Users/takeshi/Documents/GitHub/xdoc-parser/src/XDocASTNode").ObjectPairTypeNode>[];
    visitArrayType: (context: Parser.ArrayTypeContext) => Partial<ArrayTypeNode>;
    visitPropertyIdentifier: (context: Parser.PropertyIdentifierContext) => Partial<PropertyIdentifierNode>;
    visitOptionalIdentifier: (context: Parser.OptionalIdentifierContext) => Partial<IdentifierNode>;
    visitOptionalIdentifierOrIdentifier: (context: Parser.OptionalIdentifierOrIdentifierContext) => Partial<IdentifierNode>;
    visitExpression: (context: Parser.ExpressionContext) => Partial<ExpressionNode>;
    visitUnaryExpression: (context: Parser.UnaryExpressionContext) => Partial<UnaryExpressionNode>;
    visitArrayExpression: (context: Parser.ArrayExpressionContext) => Partial<ExpressionNode>[];
    visitObjectExpression: (context: Parser.ObjectExpressionContext) => Partial<ObjectExpressionNode>;
    visitObjectPairSequenceExpression: (context: Parser.ObjectPairSequenceExpressionContext) => Partial<ObjectPairExpressionNode>[];
    visitLambdaExpression: (context: Parser.LambdaExpressionContext) => Partial<LambdaExpressionNode>;
    visitParenthesizedExpression: (context: Parser.ParenthesizedExpressionContext) => Partial<ParenthesizedExpressionNode>;
    visitLiteralExpression: (context: Parser.LiteralExpressionContext) => Partial<LiteralExpressionNode>;
    visitDescription: (context: Parser.DescriptionContext) => Partial<DescriptionNode>;
    visitDescriptionLine: (context: Parser.DescriptionLineContext) => Partial<InlineTagNode>[];
    visitDescriptionLineElement: (context: Parser.DescriptionLineElementContext[]) => Partial<InlineTagNode>[];
    visitInlineTag: (context: Parser.InlineTagContext) => Partial<InlineTagNode>;
    visitInlineTagBody: (context: Parser.InlineTagBodyContext) => string;
}
