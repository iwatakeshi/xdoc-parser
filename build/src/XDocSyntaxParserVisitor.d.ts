import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { DocumentationContext } from './XDocSyntaxParser';
import { BodyContext } from './XDocSyntaxParser';
import { WhitespaceContext } from './XDocSyntaxParser';
import { AnnotationsContext } from './XDocSyntaxParser';
import { TagContext } from './XDocSyntaxParser';
import { TagNameContext } from './XDocSyntaxParser';
import { TagIdentifierContext } from './XDocSyntaxParser';
import { PropertyTagIdentifierContext } from './XDocSyntaxParser';
import { OptionalTagIdentifierContext } from './XDocSyntaxParser';
import { OptionalTagOrIdentifierContext } from './XDocSyntaxParser';
import { IdentifierContext } from './XDocSyntaxParser';
import { OptionalIdentifierContext } from './XDocSyntaxParser';
import { TypeContext } from './XDocSyntaxParser';
import { LambdaTypeContext } from './XDocSyntaxParser';
import { FormalParameterSequenceContext } from './XDocSyntaxParser';
import { ParameterContext } from './XDocSyntaxParser';
import { TupleTypeContext } from './XDocSyntaxParser';
import { TupleTypeSequenceContext } from './XDocSyntaxParser';
import { PrimaryTypeContext } from './XDocSyntaxParser';
import { IdentifierOrKeywordContext } from './XDocSyntaxParser';
import { KeywordContext } from './XDocSyntaxParser';
import { ParenthesizedTypeContext } from './XDocSyntaxParser';
import { UnaryTypeContext } from './XDocSyntaxParser';
import { ObjectTypeContext } from './XDocSyntaxParser';
import { ObjectPairSequenceTypeContext } from './XDocSyntaxParser';
import { ObjectPairTypeContext } from './XDocSyntaxParser';
import { ArrayTypeContext } from './XDocSyntaxParser';
import { NotArrayTypeContext } from './XDocSyntaxParser';
import { PropertyIdentifierContext } from './XDocSyntaxParser';
import { OptionalIdentifierOrIdentifierContext } from './XDocSyntaxParser';
import { ExpressionContext } from './XDocSyntaxParser';
import { UnaryExpressionContext } from './XDocSyntaxParser';
import { ArrayExpressionContext } from './XDocSyntaxParser';
import { ObjectExpressionContext } from './XDocSyntaxParser';
import { ObjectPairSequenceExpressionContext } from './XDocSyntaxParser';
import { ObjectPairExpressionContext } from './XDocSyntaxParser';
import { LambdaExpressionContext } from './XDocSyntaxParser';
import { LiteralExpressionContext } from './XDocSyntaxParser';
import { ParenthesizedExpressionContext } from './XDocSyntaxParser';
import { DescriptionContext } from './XDocSyntaxParser';
import { DescriptionLineContext } from './XDocSyntaxParser';
import { DescriptionLineStartContext } from './XDocSyntaxParser';
import { DescriptionTextContext } from './XDocSyntaxParser';
import { DescriptionLineElementContext } from './XDocSyntaxParser';
import { DescriptionLineTextContext } from './XDocSyntaxParser';
import { InlineTagContext } from './XDocSyntaxParser';
import { InlineTagNameContext } from './XDocSyntaxParser';
import { InlineTagBodyContext } from './XDocSyntaxParser';
import { BraceExpressionContext } from './XDocSyntaxParser';
import { BraceBodyContext } from './XDocSyntaxParser';
import { BraceTextContext } from './XDocSyntaxParser';
/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `XDocSyntaxParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface XDocSyntaxParserVisitor<Result> extends ParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.documentation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDocumentation?: (ctx: DocumentationContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.body`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBody?: (ctx: BodyContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.whitespace`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhitespace?: (ctx: WhitespaceContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.annotations`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotations?: (ctx: AnnotationsContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.tag`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTag?: (ctx: TagContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.tagName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTagName?: (ctx: TagNameContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.tagIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTagIdentifier?: (ctx: TagIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.propertyTagIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyTagIdentifier?: (ctx: PropertyTagIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.optionalTagIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptionalTagIdentifier?: (ctx: OptionalTagIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.optionalTagOrIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptionalTagOrIdentifier?: (ctx: OptionalTagOrIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.optionalIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptionalIdentifier?: (ctx: OptionalIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType?: (ctx: TypeContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.lambdaType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLambdaType?: (ctx: LambdaTypeContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.formalParameterSequence`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFormalParameterSequence?: (ctx: FormalParameterSequenceContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.parameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameter?: (ctx: ParameterContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.tupleType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTupleType?: (ctx: TupleTypeContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.tupleTypeSequence`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTupleTypeSequence?: (ctx: TupleTypeSequenceContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.primaryType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimaryType?: (ctx: PrimaryTypeContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.identifierOrKeyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifierOrKeyword?: (ctx: IdentifierOrKeywordContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.keyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKeyword?: (ctx: KeywordContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.parenthesizedType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParenthesizedType?: (ctx: ParenthesizedTypeContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.unaryType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryType?: (ctx: UnaryTypeContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.objectType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectType?: (ctx: ObjectTypeContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.objectPairSequenceType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectPairSequenceType?: (ctx: ObjectPairSequenceTypeContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.objectPairType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectPairType?: (ctx: ObjectPairTypeContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.arrayType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayType?: (ctx: ArrayTypeContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.notArrayType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotArrayType?: (ctx: NotArrayTypeContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.propertyIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPropertyIdentifier?: (ctx: PropertyIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.optionalIdentifierOrIdentifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOptionalIdentifierOrIdentifier?: (ctx: OptionalIdentifierOrIdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.unaryExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.arrayExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayExpression?: (ctx: ArrayExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.objectExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectExpression?: (ctx: ObjectExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.objectPairSequenceExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectPairSequenceExpression?: (ctx: ObjectPairSequenceExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.objectPairExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObjectPairExpression?: (ctx: ObjectPairExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.lambdaExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLambdaExpression?: (ctx: LambdaExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.literalExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteralExpression?: (ctx: LiteralExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.parenthesizedExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.description`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescription?: (ctx: DescriptionContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.descriptionLine`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescriptionLine?: (ctx: DescriptionLineContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.descriptionLineStart`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescriptionLineStart?: (ctx: DescriptionLineStartContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.descriptionText`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescriptionText?: (ctx: DescriptionTextContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.descriptionLineElement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescriptionLineElement?: (ctx: DescriptionLineElementContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.descriptionLineText`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDescriptionLineText?: (ctx: DescriptionLineTextContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.inlineTag`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInlineTag?: (ctx: InlineTagContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.inlineTagName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInlineTagName?: (ctx: InlineTagNameContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.inlineTagBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInlineTagBody?: (ctx: InlineTagBodyContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.braceExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBraceExpression?: (ctx: BraceExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.braceBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBraceBody?: (ctx: BraceBodyContext) => Result;
    /**
     * Visit a parse tree produced by `XDocSyntaxParser.braceText`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBraceText?: (ctx: BraceTextContext) => Result;
}
