import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
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
 * This interface defines a complete listener for a parse tree produced by
 * `XDocSyntaxParser`.
 */
export interface XDocSyntaxParserListener extends ParseTreeListener {
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.documentation`.
     * @param ctx the parse tree
     */
    enterDocumentation?: (ctx: DocumentationContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.documentation`.
     * @param ctx the parse tree
     */
    exitDocumentation?: (ctx: DocumentationContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.body`.
     * @param ctx the parse tree
     */
    enterBody?: (ctx: BodyContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.body`.
     * @param ctx the parse tree
     */
    exitBody?: (ctx: BodyContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.whitespace`.
     * @param ctx the parse tree
     */
    enterWhitespace?: (ctx: WhitespaceContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.whitespace`.
     * @param ctx the parse tree
     */
    exitWhitespace?: (ctx: WhitespaceContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.annotations`.
     * @param ctx the parse tree
     */
    enterAnnotations?: (ctx: AnnotationsContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.annotations`.
     * @param ctx the parse tree
     */
    exitAnnotations?: (ctx: AnnotationsContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.tag`.
     * @param ctx the parse tree
     */
    enterTag?: (ctx: TagContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.tag`.
     * @param ctx the parse tree
     */
    exitTag?: (ctx: TagContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.tagName`.
     * @param ctx the parse tree
     */
    enterTagName?: (ctx: TagNameContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.tagName`.
     * @param ctx the parse tree
     */
    exitTagName?: (ctx: TagNameContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.tagIdentifier`.
     * @param ctx the parse tree
     */
    enterTagIdentifier?: (ctx: TagIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.tagIdentifier`.
     * @param ctx the parse tree
     */
    exitTagIdentifier?: (ctx: TagIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.propertyTagIdentifier`.
     * @param ctx the parse tree
     */
    enterPropertyTagIdentifier?: (ctx: PropertyTagIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.propertyTagIdentifier`.
     * @param ctx the parse tree
     */
    exitPropertyTagIdentifier?: (ctx: PropertyTagIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.optionalTagIdentifier`.
     * @param ctx the parse tree
     */
    enterOptionalTagIdentifier?: (ctx: OptionalTagIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.optionalTagIdentifier`.
     * @param ctx the parse tree
     */
    exitOptionalTagIdentifier?: (ctx: OptionalTagIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.optionalTagOrIdentifier`.
     * @param ctx the parse tree
     */
    enterOptionalTagOrIdentifier?: (ctx: OptionalTagOrIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.optionalTagOrIdentifier`.
     * @param ctx the parse tree
     */
    exitOptionalTagOrIdentifier?: (ctx: OptionalTagOrIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.identifier`.
     * @param ctx the parse tree
     */
    enterIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.identifier`.
     * @param ctx the parse tree
     */
    exitIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.optionalIdentifier`.
     * @param ctx the parse tree
     */
    enterOptionalIdentifier?: (ctx: OptionalIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.optionalIdentifier`.
     * @param ctx the parse tree
     */
    exitOptionalIdentifier?: (ctx: OptionalIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.type`.
     * @param ctx the parse tree
     */
    enterType?: (ctx: TypeContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.type`.
     * @param ctx the parse tree
     */
    exitType?: (ctx: TypeContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.lambdaType`.
     * @param ctx the parse tree
     */
    enterLambdaType?: (ctx: LambdaTypeContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.lambdaType`.
     * @param ctx the parse tree
     */
    exitLambdaType?: (ctx: LambdaTypeContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.formalParameterSequence`.
     * @param ctx the parse tree
     */
    enterFormalParameterSequence?: (ctx: FormalParameterSequenceContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.formalParameterSequence`.
     * @param ctx the parse tree
     */
    exitFormalParameterSequence?: (ctx: FormalParameterSequenceContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.parameter`.
     * @param ctx the parse tree
     */
    enterParameter?: (ctx: ParameterContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.parameter`.
     * @param ctx the parse tree
     */
    exitParameter?: (ctx: ParameterContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.tupleType`.
     * @param ctx the parse tree
     */
    enterTupleType?: (ctx: TupleTypeContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.tupleType`.
     * @param ctx the parse tree
     */
    exitTupleType?: (ctx: TupleTypeContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.tupleTypeSequence`.
     * @param ctx the parse tree
     */
    enterTupleTypeSequence?: (ctx: TupleTypeSequenceContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.tupleTypeSequence`.
     * @param ctx the parse tree
     */
    exitTupleTypeSequence?: (ctx: TupleTypeSequenceContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.primaryType`.
     * @param ctx the parse tree
     */
    enterPrimaryType?: (ctx: PrimaryTypeContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.primaryType`.
     * @param ctx the parse tree
     */
    exitPrimaryType?: (ctx: PrimaryTypeContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.identifierOrKeyword`.
     * @param ctx the parse tree
     */
    enterIdentifierOrKeyword?: (ctx: IdentifierOrKeywordContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.identifierOrKeyword`.
     * @param ctx the parse tree
     */
    exitIdentifierOrKeyword?: (ctx: IdentifierOrKeywordContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.keyword`.
     * @param ctx the parse tree
     */
    enterKeyword?: (ctx: KeywordContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.keyword`.
     * @param ctx the parse tree
     */
    exitKeyword?: (ctx: KeywordContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.parenthesizedType`.
     * @param ctx the parse tree
     */
    enterParenthesizedType?: (ctx: ParenthesizedTypeContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.parenthesizedType`.
     * @param ctx the parse tree
     */
    exitParenthesizedType?: (ctx: ParenthesizedTypeContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.unaryType`.
     * @param ctx the parse tree
     */
    enterUnaryType?: (ctx: UnaryTypeContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.unaryType`.
     * @param ctx the parse tree
     */
    exitUnaryType?: (ctx: UnaryTypeContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.objectType`.
     * @param ctx the parse tree
     */
    enterObjectType?: (ctx: ObjectTypeContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.objectType`.
     * @param ctx the parse tree
     */
    exitObjectType?: (ctx: ObjectTypeContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.objectPairSequenceType`.
     * @param ctx the parse tree
     */
    enterObjectPairSequenceType?: (ctx: ObjectPairSequenceTypeContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.objectPairSequenceType`.
     * @param ctx the parse tree
     */
    exitObjectPairSequenceType?: (ctx: ObjectPairSequenceTypeContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.objectPairType`.
     * @param ctx the parse tree
     */
    enterObjectPairType?: (ctx: ObjectPairTypeContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.objectPairType`.
     * @param ctx the parse tree
     */
    exitObjectPairType?: (ctx: ObjectPairTypeContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.arrayType`.
     * @param ctx the parse tree
     */
    enterArrayType?: (ctx: ArrayTypeContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.arrayType`.
     * @param ctx the parse tree
     */
    exitArrayType?: (ctx: ArrayTypeContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.notArrayType`.
     * @param ctx the parse tree
     */
    enterNotArrayType?: (ctx: NotArrayTypeContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.notArrayType`.
     * @param ctx the parse tree
     */
    exitNotArrayType?: (ctx: NotArrayTypeContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.propertyIdentifier`.
     * @param ctx the parse tree
     */
    enterPropertyIdentifier?: (ctx: PropertyIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.propertyIdentifier`.
     * @param ctx the parse tree
     */
    exitPropertyIdentifier?: (ctx: PropertyIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.optionalIdentifierOrIdentifier`.
     * @param ctx the parse tree
     */
    enterOptionalIdentifierOrIdentifier?: (ctx: OptionalIdentifierOrIdentifierContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.optionalIdentifierOrIdentifier`.
     * @param ctx the parse tree
     */
    exitOptionalIdentifierOrIdentifier?: (ctx: OptionalIdentifierOrIdentifierContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.unaryExpression`.
     * @param ctx the parse tree
     */
    enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.unaryExpression`.
     * @param ctx the parse tree
     */
    exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.arrayExpression`.
     * @param ctx the parse tree
     */
    enterArrayExpression?: (ctx: ArrayExpressionContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.arrayExpression`.
     * @param ctx the parse tree
     */
    exitArrayExpression?: (ctx: ArrayExpressionContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.objectExpression`.
     * @param ctx the parse tree
     */
    enterObjectExpression?: (ctx: ObjectExpressionContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.objectExpression`.
     * @param ctx the parse tree
     */
    exitObjectExpression?: (ctx: ObjectExpressionContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.objectPairSequenceExpression`.
     * @param ctx the parse tree
     */
    enterObjectPairSequenceExpression?: (ctx: ObjectPairSequenceExpressionContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.objectPairSequenceExpression`.
     * @param ctx the parse tree
     */
    exitObjectPairSequenceExpression?: (ctx: ObjectPairSequenceExpressionContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.objectPairExpression`.
     * @param ctx the parse tree
     */
    enterObjectPairExpression?: (ctx: ObjectPairExpressionContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.objectPairExpression`.
     * @param ctx the parse tree
     */
    exitObjectPairExpression?: (ctx: ObjectPairExpressionContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.lambdaExpression`.
     * @param ctx the parse tree
     */
    enterLambdaExpression?: (ctx: LambdaExpressionContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.lambdaExpression`.
     * @param ctx the parse tree
     */
    exitLambdaExpression?: (ctx: LambdaExpressionContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.literalExpression`.
     * @param ctx the parse tree
     */
    enterLiteralExpression?: (ctx: LiteralExpressionContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.literalExpression`.
     * @param ctx the parse tree
     */
    exitLiteralExpression?: (ctx: LiteralExpressionContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.parenthesizedExpression`.
     * @param ctx the parse tree
     */
    enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.parenthesizedExpression`.
     * @param ctx the parse tree
     */
    exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.description`.
     * @param ctx the parse tree
     */
    enterDescription?: (ctx: DescriptionContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.description`.
     * @param ctx the parse tree
     */
    exitDescription?: (ctx: DescriptionContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.descriptionLine`.
     * @param ctx the parse tree
     */
    enterDescriptionLine?: (ctx: DescriptionLineContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.descriptionLine`.
     * @param ctx the parse tree
     */
    exitDescriptionLine?: (ctx: DescriptionLineContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.descriptionLineStart`.
     * @param ctx the parse tree
     */
    enterDescriptionLineStart?: (ctx: DescriptionLineStartContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.descriptionLineStart`.
     * @param ctx the parse tree
     */
    exitDescriptionLineStart?: (ctx: DescriptionLineStartContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.descriptionText`.
     * @param ctx the parse tree
     */
    enterDescriptionText?: (ctx: DescriptionTextContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.descriptionText`.
     * @param ctx the parse tree
     */
    exitDescriptionText?: (ctx: DescriptionTextContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.descriptionLineElement`.
     * @param ctx the parse tree
     */
    enterDescriptionLineElement?: (ctx: DescriptionLineElementContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.descriptionLineElement`.
     * @param ctx the parse tree
     */
    exitDescriptionLineElement?: (ctx: DescriptionLineElementContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.descriptionLineText`.
     * @param ctx the parse tree
     */
    enterDescriptionLineText?: (ctx: DescriptionLineTextContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.descriptionLineText`.
     * @param ctx the parse tree
     */
    exitDescriptionLineText?: (ctx: DescriptionLineTextContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.inlineTag`.
     * @param ctx the parse tree
     */
    enterInlineTag?: (ctx: InlineTagContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.inlineTag`.
     * @param ctx the parse tree
     */
    exitInlineTag?: (ctx: InlineTagContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.inlineTagName`.
     * @param ctx the parse tree
     */
    enterInlineTagName?: (ctx: InlineTagNameContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.inlineTagName`.
     * @param ctx the parse tree
     */
    exitInlineTagName?: (ctx: InlineTagNameContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.inlineTagBody`.
     * @param ctx the parse tree
     */
    enterInlineTagBody?: (ctx: InlineTagBodyContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.inlineTagBody`.
     * @param ctx the parse tree
     */
    exitInlineTagBody?: (ctx: InlineTagBodyContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.braceExpression`.
     * @param ctx the parse tree
     */
    enterBraceExpression?: (ctx: BraceExpressionContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.braceExpression`.
     * @param ctx the parse tree
     */
    exitBraceExpression?: (ctx: BraceExpressionContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.braceBody`.
     * @param ctx the parse tree
     */
    enterBraceBody?: (ctx: BraceBodyContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.braceBody`.
     * @param ctx the parse tree
     */
    exitBraceBody?: (ctx: BraceBodyContext) => void;
    /**
     * Enter a parse tree produced by `XDocSyntaxParser.braceText`.
     * @param ctx the parse tree
     */
    enterBraceText?: (ctx: BraceTextContext) => void;
    /**
     * Exit a parse tree produced by `XDocSyntaxParser.braceText`.
     * @param ctx the parse tree
     */
    exitBraceText?: (ctx: BraceTextContext) => void;
}
