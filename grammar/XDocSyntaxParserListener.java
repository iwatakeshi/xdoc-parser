// Generated from /Users/takeshi/Documents/GitHub/xdoc-parser/grammar/XDocSyntaxParser.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link XDocSyntaxParser}.
 */
public interface XDocSyntaxParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#documentation}.
	 * @param ctx the parse tree
	 */
	void enterDocumentation(XDocSyntaxParser.DocumentationContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#documentation}.
	 * @param ctx the parse tree
	 */
	void exitDocumentation(XDocSyntaxParser.DocumentationContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#body}.
	 * @param ctx the parse tree
	 */
	void enterBody(XDocSyntaxParser.BodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#body}.
	 * @param ctx the parse tree
	 */
	void exitBody(XDocSyntaxParser.BodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#whitespace}.
	 * @param ctx the parse tree
	 */
	void enterWhitespace(XDocSyntaxParser.WhitespaceContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#whitespace}.
	 * @param ctx the parse tree
	 */
	void exitWhitespace(XDocSyntaxParser.WhitespaceContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#annotations}.
	 * @param ctx the parse tree
	 */
	void enterAnnotations(XDocSyntaxParser.AnnotationsContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#annotations}.
	 * @param ctx the parse tree
	 */
	void exitAnnotations(XDocSyntaxParser.AnnotationsContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#tag}.
	 * @param ctx the parse tree
	 */
	void enterTag(XDocSyntaxParser.TagContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#tag}.
	 * @param ctx the parse tree
	 */
	void exitTag(XDocSyntaxParser.TagContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#tagName}.
	 * @param ctx the parse tree
	 */
	void enterTagName(XDocSyntaxParser.TagNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#tagName}.
	 * @param ctx the parse tree
	 */
	void exitTagName(XDocSyntaxParser.TagNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#tagIdentifier}.
	 * @param ctx the parse tree
	 */
	void enterTagIdentifier(XDocSyntaxParser.TagIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#tagIdentifier}.
	 * @param ctx the parse tree
	 */
	void exitTagIdentifier(XDocSyntaxParser.TagIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#propertyTagIdentifier}.
	 * @param ctx the parse tree
	 */
	void enterPropertyTagIdentifier(XDocSyntaxParser.PropertyTagIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#propertyTagIdentifier}.
	 * @param ctx the parse tree
	 */
	void exitPropertyTagIdentifier(XDocSyntaxParser.PropertyTagIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#optionalTagIdentifier}.
	 * @param ctx the parse tree
	 */
	void enterOptionalTagIdentifier(XDocSyntaxParser.OptionalTagIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#optionalTagIdentifier}.
	 * @param ctx the parse tree
	 */
	void exitOptionalTagIdentifier(XDocSyntaxParser.OptionalTagIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#optionalTagOrIdentifier}.
	 * @param ctx the parse tree
	 */
	void enterOptionalTagOrIdentifier(XDocSyntaxParser.OptionalTagOrIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#optionalTagOrIdentifier}.
	 * @param ctx the parse tree
	 */
	void exitOptionalTagOrIdentifier(XDocSyntaxParser.OptionalTagOrIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#identifier}.
	 * @param ctx the parse tree
	 */
	void enterIdentifier(XDocSyntaxParser.IdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#identifier}.
	 * @param ctx the parse tree
	 */
	void exitIdentifier(XDocSyntaxParser.IdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#optionalIdentifier}.
	 * @param ctx the parse tree
	 */
	void enterOptionalIdentifier(XDocSyntaxParser.OptionalIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#optionalIdentifier}.
	 * @param ctx the parse tree
	 */
	void exitOptionalIdentifier(XDocSyntaxParser.OptionalIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#type}.
	 * @param ctx the parse tree
	 */
	void enterType(XDocSyntaxParser.TypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#type}.
	 * @param ctx the parse tree
	 */
	void exitType(XDocSyntaxParser.TypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#lambdaType}.
	 * @param ctx the parse tree
	 */
	void enterLambdaType(XDocSyntaxParser.LambdaTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#lambdaType}.
	 * @param ctx the parse tree
	 */
	void exitLambdaType(XDocSyntaxParser.LambdaTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#formalParameterSequence}.
	 * @param ctx the parse tree
	 */
	void enterFormalParameterSequence(XDocSyntaxParser.FormalParameterSequenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#formalParameterSequence}.
	 * @param ctx the parse tree
	 */
	void exitFormalParameterSequence(XDocSyntaxParser.FormalParameterSequenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#parameter}.
	 * @param ctx the parse tree
	 */
	void enterParameter(XDocSyntaxParser.ParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#parameter}.
	 * @param ctx the parse tree
	 */
	void exitParameter(XDocSyntaxParser.ParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#tupleType}.
	 * @param ctx the parse tree
	 */
	void enterTupleType(XDocSyntaxParser.TupleTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#tupleType}.
	 * @param ctx the parse tree
	 */
	void exitTupleType(XDocSyntaxParser.TupleTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#tupleTypeSequence}.
	 * @param ctx the parse tree
	 */
	void enterTupleTypeSequence(XDocSyntaxParser.TupleTypeSequenceContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#tupleTypeSequence}.
	 * @param ctx the parse tree
	 */
	void exitTupleTypeSequence(XDocSyntaxParser.TupleTypeSequenceContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#primaryType}.
	 * @param ctx the parse tree
	 */
	void enterPrimaryType(XDocSyntaxParser.PrimaryTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#primaryType}.
	 * @param ctx the parse tree
	 */
	void exitPrimaryType(XDocSyntaxParser.PrimaryTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#identifierOrKeyword}.
	 * @param ctx the parse tree
	 */
	void enterIdentifierOrKeyword(XDocSyntaxParser.IdentifierOrKeywordContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#identifierOrKeyword}.
	 * @param ctx the parse tree
	 */
	void exitIdentifierOrKeyword(XDocSyntaxParser.IdentifierOrKeywordContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#keyword}.
	 * @param ctx the parse tree
	 */
	void enterKeyword(XDocSyntaxParser.KeywordContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#keyword}.
	 * @param ctx the parse tree
	 */
	void exitKeyword(XDocSyntaxParser.KeywordContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#parenthesizedType}.
	 * @param ctx the parse tree
	 */
	void enterParenthesizedType(XDocSyntaxParser.ParenthesizedTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#parenthesizedType}.
	 * @param ctx the parse tree
	 */
	void exitParenthesizedType(XDocSyntaxParser.ParenthesizedTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#unaryType}.
	 * @param ctx the parse tree
	 */
	void enterUnaryType(XDocSyntaxParser.UnaryTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#unaryType}.
	 * @param ctx the parse tree
	 */
	void exitUnaryType(XDocSyntaxParser.UnaryTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#objectType}.
	 * @param ctx the parse tree
	 */
	void enterObjectType(XDocSyntaxParser.ObjectTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#objectType}.
	 * @param ctx the parse tree
	 */
	void exitObjectType(XDocSyntaxParser.ObjectTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#objectPairSequenceType}.
	 * @param ctx the parse tree
	 */
	void enterObjectPairSequenceType(XDocSyntaxParser.ObjectPairSequenceTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#objectPairSequenceType}.
	 * @param ctx the parse tree
	 */
	void exitObjectPairSequenceType(XDocSyntaxParser.ObjectPairSequenceTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#objectPairType}.
	 * @param ctx the parse tree
	 */
	void enterObjectPairType(XDocSyntaxParser.ObjectPairTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#objectPairType}.
	 * @param ctx the parse tree
	 */
	void exitObjectPairType(XDocSyntaxParser.ObjectPairTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#arrayType}.
	 * @param ctx the parse tree
	 */
	void enterArrayType(XDocSyntaxParser.ArrayTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#arrayType}.
	 * @param ctx the parse tree
	 */
	void exitArrayType(XDocSyntaxParser.ArrayTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#notArrayType}.
	 * @param ctx the parse tree
	 */
	void enterNotArrayType(XDocSyntaxParser.NotArrayTypeContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#notArrayType}.
	 * @param ctx the parse tree
	 */
	void exitNotArrayType(XDocSyntaxParser.NotArrayTypeContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#propertyIdentifier}.
	 * @param ctx the parse tree
	 */
	void enterPropertyIdentifier(XDocSyntaxParser.PropertyIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#propertyIdentifier}.
	 * @param ctx the parse tree
	 */
	void exitPropertyIdentifier(XDocSyntaxParser.PropertyIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#optionalIdentifierOrIdentifier}.
	 * @param ctx the parse tree
	 */
	void enterOptionalIdentifierOrIdentifier(XDocSyntaxParser.OptionalIdentifierOrIdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#optionalIdentifierOrIdentifier}.
	 * @param ctx the parse tree
	 */
	void exitOptionalIdentifierOrIdentifier(XDocSyntaxParser.OptionalIdentifierOrIdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterExpression(XDocSyntaxParser.ExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitExpression(XDocSyntaxParser.ExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#unaryExpression}.
	 * @param ctx the parse tree
	 */
	void enterUnaryExpression(XDocSyntaxParser.UnaryExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#unaryExpression}.
	 * @param ctx the parse tree
	 */
	void exitUnaryExpression(XDocSyntaxParser.UnaryExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#arrayExpression}.
	 * @param ctx the parse tree
	 */
	void enterArrayExpression(XDocSyntaxParser.ArrayExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#arrayExpression}.
	 * @param ctx the parse tree
	 */
	void exitArrayExpression(XDocSyntaxParser.ArrayExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#objectExpression}.
	 * @param ctx the parse tree
	 */
	void enterObjectExpression(XDocSyntaxParser.ObjectExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#objectExpression}.
	 * @param ctx the parse tree
	 */
	void exitObjectExpression(XDocSyntaxParser.ObjectExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#objectPairSequenceExpression}.
	 * @param ctx the parse tree
	 */
	void enterObjectPairSequenceExpression(XDocSyntaxParser.ObjectPairSequenceExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#objectPairSequenceExpression}.
	 * @param ctx the parse tree
	 */
	void exitObjectPairSequenceExpression(XDocSyntaxParser.ObjectPairSequenceExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#objectPairExpression}.
	 * @param ctx the parse tree
	 */
	void enterObjectPairExpression(XDocSyntaxParser.ObjectPairExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#objectPairExpression}.
	 * @param ctx the parse tree
	 */
	void exitObjectPairExpression(XDocSyntaxParser.ObjectPairExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#lambdaExpression}.
	 * @param ctx the parse tree
	 */
	void enterLambdaExpression(XDocSyntaxParser.LambdaExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#lambdaExpression}.
	 * @param ctx the parse tree
	 */
	void exitLambdaExpression(XDocSyntaxParser.LambdaExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#literalExpression}.
	 * @param ctx the parse tree
	 */
	void enterLiteralExpression(XDocSyntaxParser.LiteralExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#literalExpression}.
	 * @param ctx the parse tree
	 */
	void exitLiteralExpression(XDocSyntaxParser.LiteralExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#parenthesizedExpression}.
	 * @param ctx the parse tree
	 */
	void enterParenthesizedExpression(XDocSyntaxParser.ParenthesizedExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#parenthesizedExpression}.
	 * @param ctx the parse tree
	 */
	void exitParenthesizedExpression(XDocSyntaxParser.ParenthesizedExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#description}.
	 * @param ctx the parse tree
	 */
	void enterDescription(XDocSyntaxParser.DescriptionContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#description}.
	 * @param ctx the parse tree
	 */
	void exitDescription(XDocSyntaxParser.DescriptionContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#descriptionLine}.
	 * @param ctx the parse tree
	 */
	void enterDescriptionLine(XDocSyntaxParser.DescriptionLineContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#descriptionLine}.
	 * @param ctx the parse tree
	 */
	void exitDescriptionLine(XDocSyntaxParser.DescriptionLineContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#descriptionLineStart}.
	 * @param ctx the parse tree
	 */
	void enterDescriptionLineStart(XDocSyntaxParser.DescriptionLineStartContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#descriptionLineStart}.
	 * @param ctx the parse tree
	 */
	void exitDescriptionLineStart(XDocSyntaxParser.DescriptionLineStartContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#descriptionText}.
	 * @param ctx the parse tree
	 */
	void enterDescriptionText(XDocSyntaxParser.DescriptionTextContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#descriptionText}.
	 * @param ctx the parse tree
	 */
	void exitDescriptionText(XDocSyntaxParser.DescriptionTextContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#descriptionLineElement}.
	 * @param ctx the parse tree
	 */
	void enterDescriptionLineElement(XDocSyntaxParser.DescriptionLineElementContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#descriptionLineElement}.
	 * @param ctx the parse tree
	 */
	void exitDescriptionLineElement(XDocSyntaxParser.DescriptionLineElementContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#descriptionLineText}.
	 * @param ctx the parse tree
	 */
	void enterDescriptionLineText(XDocSyntaxParser.DescriptionLineTextContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#descriptionLineText}.
	 * @param ctx the parse tree
	 */
	void exitDescriptionLineText(XDocSyntaxParser.DescriptionLineTextContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#inlineTag}.
	 * @param ctx the parse tree
	 */
	void enterInlineTag(XDocSyntaxParser.InlineTagContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#inlineTag}.
	 * @param ctx the parse tree
	 */
	void exitInlineTag(XDocSyntaxParser.InlineTagContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#inlineTagName}.
	 * @param ctx the parse tree
	 */
	void enterInlineTagName(XDocSyntaxParser.InlineTagNameContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#inlineTagName}.
	 * @param ctx the parse tree
	 */
	void exitInlineTagName(XDocSyntaxParser.InlineTagNameContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#inlineTagBody}.
	 * @param ctx the parse tree
	 */
	void enterInlineTagBody(XDocSyntaxParser.InlineTagBodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#inlineTagBody}.
	 * @param ctx the parse tree
	 */
	void exitInlineTagBody(XDocSyntaxParser.InlineTagBodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#braceExpression}.
	 * @param ctx the parse tree
	 */
	void enterBraceExpression(XDocSyntaxParser.BraceExpressionContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#braceExpression}.
	 * @param ctx the parse tree
	 */
	void exitBraceExpression(XDocSyntaxParser.BraceExpressionContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#braceBody}.
	 * @param ctx the parse tree
	 */
	void enterBraceBody(XDocSyntaxParser.BraceBodyContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#braceBody}.
	 * @param ctx the parse tree
	 */
	void exitBraceBody(XDocSyntaxParser.BraceBodyContext ctx);
	/**
	 * Enter a parse tree produced by {@link XDocSyntaxParser#braceText}.
	 * @param ctx the parse tree
	 */
	void enterBraceText(XDocSyntaxParser.BraceTextContext ctx);
	/**
	 * Exit a parse tree produced by {@link XDocSyntaxParser#braceText}.
	 * @param ctx the parse tree
	 */
	void exitBraceText(XDocSyntaxParser.BraceTextContext ctx);
}