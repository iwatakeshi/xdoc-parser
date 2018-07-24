// Generated from XDocParser.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

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
 * This interface defines a complete listener for a parse tree produced by
 * `XDocParser`.
 */
export interface XDocParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `XDocParser.documentation`.
	 * @param ctx the parse tree
	 */
	enterDocumentation?: (ctx: DocumentationContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.documentation`.
	 * @param ctx the parse tree
	 */
	exitDocumentation?: (ctx: DocumentationContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.body`.
	 * @param ctx the parse tree
	 */
	enterBody?: (ctx: BodyContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.body`.
	 * @param ctx the parse tree
	 */
	exitBody?: (ctx: BodyContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.whitespace`.
	 * @param ctx the parse tree
	 */
	enterWhitespace?: (ctx: WhitespaceContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.whitespace`.
	 * @param ctx the parse tree
	 */
	exitWhitespace?: (ctx: WhitespaceContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.annotations`.
	 * @param ctx the parse tree
	 */
	enterAnnotations?: (ctx: AnnotationsContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.annotations`.
	 * @param ctx the parse tree
	 */
	exitAnnotations?: (ctx: AnnotationsContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.tag`.
	 * @param ctx the parse tree
	 */
	enterTag?: (ctx: TagContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.tag`.
	 * @param ctx the parse tree
	 */
	exitTag?: (ctx: TagContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.tagName`.
	 * @param ctx the parse tree
	 */
	enterTagName?: (ctx: TagNameContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.tagName`.
	 * @param ctx the parse tree
	 */
	exitTagName?: (ctx: TagNameContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.tagID`.
	 * @param ctx the parse tree
	 */
	enterTagID?: (ctx: TagIDContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.tagID`.
	 * @param ctx the parse tree
	 */
	exitTagID?: (ctx: TagIDContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.optionalTagID`.
	 * @param ctx the parse tree
	 */
	enterOptionalTagID?: (ctx: OptionalTagIDContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.optionalTagID`.
	 * @param ctx the parse tree
	 */
	exitOptionalTagID?: (ctx: OptionalTagIDContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.propertyTagID`.
	 * @param ctx the parse tree
	 */
	enterPropertyTagID?: (ctx: PropertyTagIDContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.propertyTagID`.
	 * @param ctx the parse tree
	 */
	exitPropertyTagID?: (ctx: PropertyTagIDContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.optionalTagOrIdentifier`.
	 * @param ctx the parse tree
	 */
	enterOptionalTagOrIdentifier?: (ctx: OptionalTagOrIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.optionalTagOrIdentifier`.
	 * @param ctx the parse tree
	 */
	exitOptionalTagOrIdentifier?: (ctx: OptionalTagOrIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.unaryType`.
	 * @param ctx the parse tree
	 */
	enterUnaryType?: (ctx: UnaryTypeContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.unaryType`.
	 * @param ctx the parse tree
	 */
	exitUnaryType?: (ctx: UnaryTypeContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.tupleType`.
	 * @param ctx the parse tree
	 */
	enterTupleType?: (ctx: TupleTypeContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.tupleType`.
	 * @param ctx the parse tree
	 */
	exitTupleType?: (ctx: TupleTypeContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.tupleTypeList`.
	 * @param ctx the parse tree
	 */
	enterTupleTypeList?: (ctx: TupleTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.tupleTypeList`.
	 * @param ctx the parse tree
	 */
	exitTupleTypeList?: (ctx: TupleTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.primaryType`.
	 * @param ctx the parse tree
	 */
	enterPrimaryType?: (ctx: PrimaryTypeContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.primaryType`.
	 * @param ctx the parse tree
	 */
	exitPrimaryType?: (ctx: PrimaryTypeContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.identifierOrKeyword`.
	 * @param ctx the parse tree
	 */
	enterIdentifierOrKeyword?: (ctx: IdentifierOrKeywordContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.identifierOrKeyword`.
	 * @param ctx the parse tree
	 */
	exitIdentifierOrKeyword?: (ctx: IdentifierOrKeywordContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.parenthesizedType`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedType?: (ctx: ParenthesizedTypeContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.parenthesizedType`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedType?: (ctx: ParenthesizedTypeContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.lambdaType`.
	 * @param ctx the parse tree
	 */
	enterLambdaType?: (ctx: LambdaTypeContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.lambdaType`.
	 * @param ctx the parse tree
	 */
	exitLambdaType?: (ctx: LambdaTypeContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.formalParameterSequence`.
	 * @param ctx the parse tree
	 */
	enterFormalParameterSequence?: (ctx: FormalParameterSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.formalParameterSequence`.
	 * @param ctx the parse tree
	 */
	exitFormalParameterSequence?: (ctx: FormalParameterSequenceContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.arrayType`.
	 * @param ctx the parse tree
	 */
	enterArrayType?: (ctx: ArrayTypeContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.arrayType`.
	 * @param ctx the parse tree
	 */
	exitArrayType?: (ctx: ArrayTypeContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.objectType`.
	 * @param ctx the parse tree
	 */
	enterObjectType?: (ctx: ObjectTypeContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.objectType`.
	 * @param ctx the parse tree
	 */
	exitObjectType?: (ctx: ObjectTypeContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.objectPairTypeList`.
	 * @param ctx the parse tree
	 */
	enterObjectPairTypeList?: (ctx: ObjectPairTypeListContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.objectPairTypeList`.
	 * @param ctx the parse tree
	 */
	exitObjectPairTypeList?: (ctx: ObjectPairTypeListContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.objectPairType`.
	 * @param ctx the parse tree
	 */
	enterObjectPairType?: (ctx: ObjectPairTypeContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.objectPairType`.
	 * @param ctx the parse tree
	 */
	exitObjectPairType?: (ctx: ObjectPairTypeContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.optionalType`.
	 * @param ctx the parse tree
	 */
	enterOptionalType?: (ctx: OptionalTypeContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.optionalType`.
	 * @param ctx the parse tree
	 */
	exitOptionalType?: (ctx: OptionalTypeContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.propertyType`.
	 * @param ctx the parse tree
	 */
	enterPropertyType?: (ctx: PropertyTypeContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.propertyType`.
	 * @param ctx the parse tree
	 */
	exitPropertyType?: (ctx: PropertyTypeContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.optionalTypeOrIdentifer`.
	 * @param ctx the parse tree
	 */
	enterOptionalTypeOrIdentifer?: (ctx: OptionalTypeOrIdentiferContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.optionalTypeOrIdentifer`.
	 * @param ctx the parse tree
	 */
	exitOptionalTypeOrIdentifer?: (ctx: OptionalTypeOrIdentiferContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.arrayExpression`.
	 * @param ctx the parse tree
	 */
	enterArrayExpression?: (ctx: ArrayExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.arrayExpression`.
	 * @param ctx the parse tree
	 */
	exitArrayExpression?: (ctx: ArrayExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.objectExpression`.
	 * @param ctx the parse tree
	 */
	enterObjectExpression?: (ctx: ObjectExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.objectExpression`.
	 * @param ctx the parse tree
	 */
	exitObjectExpression?: (ctx: ObjectExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.objectPairExpressionList`.
	 * @param ctx the parse tree
	 */
	enterObjectPairExpressionList?: (ctx: ObjectPairExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.objectPairExpressionList`.
	 * @param ctx the parse tree
	 */
	exitObjectPairExpressionList?: (ctx: ObjectPairExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.objectPairExpression`.
	 * @param ctx the parse tree
	 */
	enterObjectPairExpression?: (ctx: ObjectPairExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.objectPairExpression`.
	 * @param ctx the parse tree
	 */
	exitObjectPairExpression?: (ctx: ObjectPairExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.lambdaExpression`.
	 * @param ctx the parse tree
	 */
	enterLambdaExpression?: (ctx: LambdaExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.lambdaExpression`.
	 * @param ctx the parse tree
	 */
	exitLambdaExpression?: (ctx: LambdaExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.parenthesizedExpression`.
	 * @param ctx the parse tree
	 */
	enterParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.parenthesizedExpression`.
	 * @param ctx the parse tree
	 */
	exitParenthesizedExpression?: (ctx: ParenthesizedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.description`.
	 * @param ctx the parse tree
	 */
	enterDescription?: (ctx: DescriptionContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.description`.
	 * @param ctx the parse tree
	 */
	exitDescription?: (ctx: DescriptionContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.descriptionLine`.
	 * @param ctx the parse tree
	 */
	enterDescriptionLine?: (ctx: DescriptionLineContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.descriptionLine`.
	 * @param ctx the parse tree
	 */
	exitDescriptionLine?: (ctx: DescriptionLineContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.descriptionLineStart`.
	 * @param ctx the parse tree
	 */
	enterDescriptionLineStart?: (ctx: DescriptionLineStartContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.descriptionLineStart`.
	 * @param ctx the parse tree
	 */
	exitDescriptionLineStart?: (ctx: DescriptionLineStartContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.descriptionText`.
	 * @param ctx the parse tree
	 */
	enterDescriptionText?: (ctx: DescriptionTextContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.descriptionText`.
	 * @param ctx the parse tree
	 */
	exitDescriptionText?: (ctx: DescriptionTextContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.descriptionLineElement`.
	 * @param ctx the parse tree
	 */
	enterDescriptionLineElement?: (ctx: DescriptionLineElementContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.descriptionLineElement`.
	 * @param ctx the parse tree
	 */
	exitDescriptionLineElement?: (ctx: DescriptionLineElementContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.descriptionLineText`.
	 * @param ctx the parse tree
	 */
	enterDescriptionLineText?: (ctx: DescriptionLineTextContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.descriptionLineText`.
	 * @param ctx the parse tree
	 */
	exitDescriptionLineText?: (ctx: DescriptionLineTextContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.inlineTag`.
	 * @param ctx the parse tree
	 */
	enterInlineTag?: (ctx: InlineTagContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.inlineTag`.
	 * @param ctx the parse tree
	 */
	exitInlineTag?: (ctx: InlineTagContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.inlineTagName`.
	 * @param ctx the parse tree
	 */
	enterInlineTagName?: (ctx: InlineTagNameContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.inlineTagName`.
	 * @param ctx the parse tree
	 */
	exitInlineTagName?: (ctx: InlineTagNameContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.inlineTagBody`.
	 * @param ctx the parse tree
	 */
	enterInlineTagBody?: (ctx: InlineTagBodyContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.inlineTagBody`.
	 * @param ctx the parse tree
	 */
	exitInlineTagBody?: (ctx: InlineTagBodyContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.braceExpression`.
	 * @param ctx the parse tree
	 */
	enterBraceExpression?: (ctx: BraceExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.braceExpression`.
	 * @param ctx the parse tree
	 */
	exitBraceExpression?: (ctx: BraceExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.braceBody`.
	 * @param ctx the parse tree
	 */
	enterBraceBody?: (ctx: BraceBodyContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.braceBody`.
	 * @param ctx the parse tree
	 */
	exitBraceBody?: (ctx: BraceBodyContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.braceText`.
	 * @param ctx the parse tree
	 */
	enterBraceText?: (ctx: BraceTextContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.braceText`.
	 * @param ctx the parse tree
	 */
	exitBraceText?: (ctx: BraceTextContext) => void;

	/**
	 * Enter a parse tree produced by `XDocParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `XDocParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
}

