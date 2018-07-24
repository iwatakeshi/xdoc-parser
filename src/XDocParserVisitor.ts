// Generated from XDocParser.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { DocumentationContext } from './XDocParser';
import { BodyContext } from './XDocParser';
import { WhitespaceContext } from './XDocParser';
import { AnnotationsContext } from './XDocParser';
import { TagContext } from './XDocParser';
import { TagNameContext } from './XDocParser';
import { TagIDContext } from './XDocParser';
import { OptionalTagIDContext } from './XDocParser';
import { PropertyTagIDContext } from './XDocParser';
import { OptionalTagOrIdentifierContext } from './XDocParser';
import { TypeContext } from './XDocParser';
import { UnaryTypeContext } from './XDocParser';
import { TupleTypeContext } from './XDocParser';
import { TupleTypeListContext } from './XDocParser';
import { PrimaryTypeContext } from './XDocParser';
import { IdentifierOrKeywordContext } from './XDocParser';
import { ParenthesizedTypeContext } from './XDocParser';
import { LambdaTypeContext } from './XDocParser';
import { FormalParameterSequenceContext } from './XDocParser';
import { ParameterContext } from './XDocParser';
import { ArrayTypeContext } from './XDocParser';
import { ObjectTypeContext } from './XDocParser';
import { ObjectPairTypeListContext } from './XDocParser';
import { ObjectPairTypeContext } from './XDocParser';
import { OptionalTypeContext } from './XDocParser';
import { PropertyTypeContext } from './XDocParser';
import { OptionalTypeOrIdentiferContext } from './XDocParser';
import { ValueContext } from './XDocParser';
import { ExpressionContext } from './XDocParser';
import { UnaryExpressionContext } from './XDocParser';
import { ArrayExpressionContext } from './XDocParser';
import { ObjectExpressionContext } from './XDocParser';
import { ObjectPairExpressionListContext } from './XDocParser';
import { ObjectPairExpressionContext } from './XDocParser';
import { LambdaExpressionContext } from './XDocParser';
import { LiteralContext } from './XDocParser';
import { ParenthesizedExpressionContext } from './XDocParser';
import { DescriptionContext } from './XDocParser';
import { DescriptionLineContext } from './XDocParser';
import { DescriptionLineStartContext } from './XDocParser';
import { DescriptionTextContext } from './XDocParser';
import { DescriptionLineElementContext } from './XDocParser';
import { DescriptionLineTextContext } from './XDocParser';
import { InlineTagContext } from './XDocParser';
import { InlineTagNameContext } from './XDocParser';
import { InlineTagBodyContext } from './XDocParser';
import { BraceExpressionContext } from './XDocParser';
import { BraceBodyContext } from './XDocParser';
import { BraceTextContext } from './XDocParser';
import { IdentifierContext } from './XDocParser';


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `XDocParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface XDocParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `XDocParser.documentation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDocumentation?: (ctx: DocumentationContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBody?: (ctx: BodyContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.whitespace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhitespace?: (ctx: WhitespaceContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.annotations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotations?: (ctx: AnnotationsContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.tag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTag?: (ctx: TagContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.tagName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagName?: (ctx: TagNameContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.tagID`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTagID?: (ctx: TagIDContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.optionalTagID`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalTagID?: (ctx: OptionalTagIDContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.propertyTagID`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyTagID?: (ctx: PropertyTagIDContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.optionalTagOrIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalTagOrIdentifier?: (ctx: OptionalTagOrIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.unaryType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryType?: (ctx: UnaryTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.tupleType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleType?: (ctx: TupleTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.tupleTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleTypeList?: (ctx: TupleTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.primaryType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryType?: (ctx: PrimaryTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.identifierOrKeyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierOrKeyword?: (ctx: IdentifierOrKeywordContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.parenthesizedType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedType?: (ctx: ParenthesizedTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.lambdaType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaType?: (ctx: LambdaTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.formalParameterSequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterSequence?: (ctx: FormalParameterSequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.arrayType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayType?: (ctx: ArrayTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.objectType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectType?: (ctx: ObjectTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.objectPairTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectPairTypeList?: (ctx: ObjectPairTypeListContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.objectPairType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectPairType?: (ctx: ObjectPairTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.optionalType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalType?: (ctx: OptionalTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.propertyType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyType?: (ctx: PropertyTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.optionalTypeOrIdentifer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionalTypeOrIdentifer?: (ctx: OptionalTypeOrIdentiferContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.unaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.arrayExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayExpression?: (ctx: ArrayExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.objectExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectExpression?: (ctx: ObjectExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.objectPairExpressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectPairExpressionList?: (ctx: ObjectPairExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.objectPairExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjectPairExpression?: (ctx: ObjectPairExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.lambdaExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaExpression?: (ctx: LambdaExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.parenthesizedExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.description`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescription?: (ctx: DescriptionContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.descriptionLine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescriptionLine?: (ctx: DescriptionLineContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.descriptionLineStart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescriptionLineStart?: (ctx: DescriptionLineStartContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.descriptionText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescriptionText?: (ctx: DescriptionTextContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.descriptionLineElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescriptionLineElement?: (ctx: DescriptionLineElementContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.descriptionLineText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDescriptionLineText?: (ctx: DescriptionLineTextContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.inlineTag`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineTag?: (ctx: InlineTagContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.inlineTagName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineTagName?: (ctx: InlineTagNameContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.inlineTagBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineTagBody?: (ctx: InlineTagBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.braceExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBraceExpression?: (ctx: BraceExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.braceBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBraceBody?: (ctx: BraceBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.braceText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBraceText?: (ctx: BraceTextContext) => Result;

	/**
	 * Visit a parse tree produced by `XDocParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
}

