import { ATN } from 'antlr4ts/atn/ATN';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { RuleContext } from 'antlr4ts/RuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { XDocSyntaxParserListener } from './XDocSyntaxParserListener';
import { XDocSyntaxParserVisitor } from './XDocSyntaxParserVisitor';
export declare class XDocSyntaxParser extends Parser {
    static readonly NumberLiteral: number;
    static readonly IntegerLiteral: number;
    static readonly FloatingPointLiteral: number;
    static readonly BooleanLiteral: number;
    static readonly CharacterLiteral: number;
    static readonly StringLiteral: number;
    static readonly NullLiteral: number;
    static readonly EXTENDS: number;
    static readonly ID: number;
    static readonly NEWLINE: number;
    static readonly SPACE: number;
    static readonly TEXT_CONTENT: number;
    static readonly AT: number;
    static readonly PLUS: number;
    static readonly MINUS: number;
    static readonly STAR: number;
    static readonly FORWARD_SLASH: number;
    static readonly COLON: number;
    static readonly PERIOD: number;
    static readonly COMMA: number;
    static readonly EQUAL: number;
    static readonly QUESTION: number;
    static readonly AMP: number;
    static readonly PIPE: number;
    static readonly ARROW: number;
    static readonly EXCLAMATION: number;
    static readonly INLINE_TAG_START: number;
    static readonly BRACE_OPEN: number;
    static readonly BRACE_CLOSE: number;
    static readonly PAREN_OPEN: number;
    static readonly PAREN_CLOSE: number;
    static readonly BRACKET_OPEN: number;
    static readonly BRACKET_CLOSE: number;
    static readonly LESSTHAN: number;
    static readonly GREATERTHAN: number;
    static readonly RULE_documentation: number;
    static readonly RULE_body: number;
    static readonly RULE_whitespace: number;
    static readonly RULE_annotations: number;
    static readonly RULE_tag: number;
    static readonly RULE_tagName: number;
    static readonly RULE_tagIdentifier: number;
    static readonly RULE_propertyTagIdentifier: number;
    static readonly RULE_optionalTagIdentifier: number;
    static readonly RULE_optionalTagOrIdentifier: number;
    static readonly RULE_identifier: number;
    static readonly RULE_optionalIdentifier: number;
    static readonly RULE_type: number;
    static readonly RULE_lambdaType: number;
    static readonly RULE_formalParameterSequence: number;
    static readonly RULE_parameter: number;
    static readonly RULE_tupleType: number;
    static readonly RULE_tupleTypeSequence: number;
    static readonly RULE_primaryType: number;
    static readonly RULE_identifierOrKeyword: number;
    static readonly RULE_keyword: number;
    static readonly RULE_parenthesizedType: number;
    static readonly RULE_unaryType: number;
    static readonly RULE_objectType: number;
    static readonly RULE_objectPairSequenceType: number;
    static readonly RULE_objectPairType: number;
    static readonly RULE_arrayType: number;
    static readonly RULE_notArrayType: number;
    static readonly RULE_propertyIdentifier: number;
    static readonly RULE_optionalIdentifierOrIdentifier: number;
    static readonly RULE_expression: number;
    static readonly RULE_unaryExpression: number;
    static readonly RULE_arrayExpression: number;
    static readonly RULE_objectExpression: number;
    static readonly RULE_objectPairSequenceExpression: number;
    static readonly RULE_objectPairExpression: number;
    static readonly RULE_lambdaExpression: number;
    static readonly RULE_literalExpression: number;
    static readonly RULE_parenthesizedExpression: number;
    static readonly RULE_description: number;
    static readonly RULE_descriptionLine: number;
    static readonly RULE_descriptionLineStart: number;
    static readonly RULE_descriptionText: number;
    static readonly RULE_descriptionLineElement: number;
    static readonly RULE_descriptionLineText: number;
    static readonly RULE_inlineTag: number;
    static readonly RULE_inlineTagName: number;
    static readonly RULE_inlineTagBody: number;
    static readonly RULE_braceExpression: number;
    static readonly RULE_braceBody: number;
    static readonly RULE_braceText: number;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    readonly vocabulary: Vocabulary;
    readonly grammarFileName: string;
    readonly ruleNames: string[];
    readonly serializedATN: string;
    constructor(input: TokenStream);
    documentation(): DocumentationContext;
    body(): BodyContext;
    whitespace(): WhitespaceContext;
    annotations(): AnnotationsContext;
    tag(): TagContext;
    tagName(): TagNameContext;
    tagIdentifier(): TagIdentifierContext;
    propertyTagIdentifier(): PropertyTagIdentifierContext;
    optionalTagIdentifier(): OptionalTagIdentifierContext;
    optionalTagOrIdentifier(): OptionalTagOrIdentifierContext;
    identifier(): IdentifierContext;
    optionalIdentifier(): OptionalIdentifierContext;
    type(): TypeContext;
    type(_p: number): TypeContext;
    lambdaType(): LambdaTypeContext;
    formalParameterSequence(): FormalParameterSequenceContext;
    parameter(): ParameterContext;
    tupleType(): TupleTypeContext;
    tupleTypeSequence(): TupleTypeSequenceContext;
    primaryType(): PrimaryTypeContext;
    identifierOrKeyword(): IdentifierOrKeywordContext;
    keyword(): KeywordContext;
    parenthesizedType(): ParenthesizedTypeContext;
    unaryType(): UnaryTypeContext;
    objectType(): ObjectTypeContext;
    objectPairSequenceType(): ObjectPairSequenceTypeContext;
    objectPairType(): ObjectPairTypeContext;
    arrayType(): ArrayTypeContext;
    notArrayType(): NotArrayTypeContext;
    notArrayType(_p: number): NotArrayTypeContext;
    propertyIdentifier(): PropertyIdentifierContext;
    optionalIdentifierOrIdentifier(): OptionalIdentifierOrIdentifierContext;
    expression(): ExpressionContext;
    expression(_p: number): ExpressionContext;
    unaryExpression(): UnaryExpressionContext;
    arrayExpression(): ArrayExpressionContext;
    objectExpression(): ObjectExpressionContext;
    objectPairSequenceExpression(): ObjectPairSequenceExpressionContext;
    objectPairExpression(): ObjectPairExpressionContext;
    lambdaExpression(): LambdaExpressionContext;
    literalExpression(): LiteralExpressionContext;
    parenthesizedExpression(): ParenthesizedExpressionContext;
    description(): DescriptionContext;
    descriptionLine(): DescriptionLineContext;
    descriptionLineStart(): DescriptionLineStartContext;
    descriptionText(): DescriptionTextContext;
    descriptionLineElement(): DescriptionLineElementContext;
    descriptionLineText(): DescriptionLineTextContext;
    inlineTag(): InlineTagContext;
    inlineTagName(): InlineTagNameContext;
    inlineTagBody(): InlineTagBodyContext;
    braceExpression(): BraceExpressionContext;
    braceBody(): BraceBodyContext;
    braceText(): BraceTextContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private type_sempred;
    private notArrayType_sempred;
    private expression_sempred;
    private static readonly _serializedATNSegments;
    private static readonly _serializedATNSegment0;
    private static readonly _serializedATNSegment1;
    private static readonly _serializedATNSegment2;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static readonly _ATN: ATN;
}
export declare class DocumentationContext extends ParserRuleContext {
    EOF(): TerminalNode;
    body(): BodyContext | undefined;
    NEWLINE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class BodyContext extends ParserRuleContext {
    annotations(): AnnotationsContext;
    whitespace(): WhitespaceContext[];
    whitespace(i: number): WhitespaceContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class WhitespaceContext extends ParserRuleContext {
    SPACE(): TerminalNode | undefined;
    NEWLINE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class AnnotationsContext extends ParserRuleContext {
    tag(): TagContext[];
    tag(i: number): TagContext;
    NEWLINE(): TerminalNode[];
    NEWLINE(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class TagContext extends ParserRuleContext {
    tagName(): TagNameContext;
    SPACE(): TerminalNode[];
    SPACE(i: number): TerminalNode;
    MINUS(): TerminalNode | undefined;
    description(): DescriptionContext | undefined;
    NEWLINE(): TerminalNode | undefined;
    tagIdentifier(): TagIdentifierContext | undefined;
    EQUAL(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    COLON(): TerminalNode | undefined;
    type(): TypeContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class TagNameContext extends ParserRuleContext {
    AT(): TerminalNode;
    identifier(): IdentifierContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class TagIdentifierContext extends ParserRuleContext {
    propertyTagIdentifier(): PropertyTagIdentifierContext | undefined;
    optionalTagIdentifier(): OptionalTagIdentifierContext | undefined;
    identifier(): IdentifierContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class PropertyTagIdentifierContext extends ParserRuleContext {
    optionalTagIdentifier(): OptionalTagIdentifierContext | undefined;
    PERIOD(): TerminalNode[];
    PERIOD(i: number): TerminalNode;
    optionalTagOrIdentifier(): OptionalTagOrIdentifierContext[];
    optionalTagOrIdentifier(i: number): OptionalTagOrIdentifierContext;
    identifier(): IdentifierContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class OptionalTagIdentifierContext extends ParserRuleContext {
    optionalIdentifier(): OptionalIdentifierContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class OptionalTagOrIdentifierContext extends ParserRuleContext {
    optionalTagIdentifier(): OptionalTagIdentifierContext | undefined;
    identifier(): IdentifierContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class IdentifierContext extends ParserRuleContext {
    ID(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class OptionalIdentifierContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    QUESTION(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class TypeContext extends ParserRuleContext {
    type(): TypeContext[];
    type(i: number): TypeContext;
    PIPE(): TerminalNode | undefined;
    AMP(): TerminalNode | undefined;
    SPACE(): TerminalNode[];
    SPACE(i: number): TerminalNode;
    NEWLINE(): TerminalNode[];
    NEWLINE(i: number): TerminalNode;
    lambdaType(): LambdaTypeContext | undefined;
    tupleType(): TupleTypeContext | undefined;
    primaryType(): PrimaryTypeContext | undefined;
    parenthesizedType(): ParenthesizedTypeContext | undefined;
    unaryType(): UnaryTypeContext | undefined;
    objectType(): ObjectTypeContext | undefined;
    arrayType(): ArrayTypeContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class LambdaTypeContext extends ParserRuleContext {
    PAREN_OPEN(): TerminalNode | undefined;
    PAREN_CLOSE(): TerminalNode | undefined;
    ARROW(): TerminalNode;
    type(): TypeContext;
    SPACE(): TerminalNode[];
    SPACE(i: number): TerminalNode;
    NEWLINE(): TerminalNode[];
    NEWLINE(i: number): TerminalNode;
    formalParameterSequence(): FormalParameterSequenceContext | undefined;
    QUESTION(): TerminalNode | undefined;
    parameter(): ParameterContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class FormalParameterSequenceContext extends ParserRuleContext {
    parameter(): ParameterContext[];
    parameter(i: number): ParameterContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    NEWLINE(): TerminalNode[];
    NEWLINE(i: number): TerminalNode;
    SPACE(): TerminalNode[];
    SPACE(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class ParameterContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    COLON(): TerminalNode | undefined;
    type(): TypeContext | undefined;
    SPACE(): TerminalNode[];
    SPACE(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class TupleTypeContext extends ParserRuleContext {
    LESSTHAN(): TerminalNode;
    tupleTypeSequence(): TupleTypeSequenceContext;
    GREATERTHAN(): TerminalNode;
    identifier(): IdentifierContext | undefined;
    SPACE(): TerminalNode[];
    SPACE(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class TupleTypeSequenceContext extends ParserRuleContext {
    primaryType(): PrimaryTypeContext[];
    primaryType(i: number): PrimaryTypeContext;
    SPACE(): TerminalNode[];
    SPACE(i: number): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    tupleTypeSequence(): TupleTypeSequenceContext[];
    tupleTypeSequence(i: number): TupleTypeSequenceContext;
    EXTENDS(): TerminalNode | undefined;
    AMP(): TerminalNode | undefined;
    PIPE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class PrimaryTypeContext extends ParserRuleContext {
    optionalIdentifier(): OptionalIdentifierContext | undefined;
    propertyIdentifier(): PropertyIdentifierContext | undefined;
    identifierOrKeyword(): IdentifierOrKeywordContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class IdentifierOrKeywordContext extends ParserRuleContext {
    identifier(): IdentifierContext | undefined;
    keyword(): KeywordContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class KeywordContext extends ParserRuleContext {
    NullLiteral(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class ParenthesizedTypeContext extends ParserRuleContext {
    PAREN_OPEN(): TerminalNode;
    type(): TypeContext;
    PAREN_CLOSE(): TerminalNode;
    SPACE(): TerminalNode[];
    SPACE(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class UnaryTypeContext extends ParserRuleContext {
    primaryType(): PrimaryTypeContext;
    AMP(): TerminalNode | undefined;
    STAR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class ObjectTypeContext extends ParserRuleContext {
    BRACE_OPEN(): TerminalNode;
    BRACE_CLOSE(): TerminalNode;
    SPACE(): TerminalNode[];
    SPACE(i: number): TerminalNode;
    NEWLINE(): TerminalNode[];
    NEWLINE(i: number): TerminalNode;
    objectPairSequenceType(): ObjectPairSequenceTypeContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class ObjectPairSequenceTypeContext extends ParserRuleContext {
    objectPairType(): ObjectPairTypeContext[];
    objectPairType(i: number): ObjectPairTypeContext;
    SPACE(): TerminalNode[];
    SPACE(i: number): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    NEWLINE(): TerminalNode[];
    NEWLINE(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class ObjectPairTypeContext extends ParserRuleContext {
    type(): TypeContext[];
    type(i: number): TypeContext;
    COLON(): TerminalNode;
    QUESTION(): TerminalNode | undefined;
    SPACE(): TerminalNode[];
    SPACE(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class ArrayTypeContext extends ParserRuleContext {
    BRACKET_OPEN(): TerminalNode[];
    BRACKET_OPEN(i: number): TerminalNode;
    BRACKET_CLOSE(): TerminalNode[];
    BRACKET_CLOSE(i: number): TerminalNode;
    NEWLINE(): TerminalNode[];
    NEWLINE(i: number): TerminalNode;
    SPACE(): TerminalNode[];
    SPACE(i: number): TerminalNode;
    type(): TypeContext[];
    type(i: number): TypeContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    notArrayType(): NotArrayTypeContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class NotArrayTypeContext extends ParserRuleContext {
    notArrayType(): NotArrayTypeContext[];
    notArrayType(i: number): NotArrayTypeContext;
    PIPE(): TerminalNode | undefined;
    AMP(): TerminalNode | undefined;
    SPACE(): TerminalNode[];
    SPACE(i: number): TerminalNode;
    NEWLINE(): TerminalNode[];
    NEWLINE(i: number): TerminalNode;
    lambdaType(): LambdaTypeContext | undefined;
    tupleType(): TupleTypeContext | undefined;
    primaryType(): PrimaryTypeContext | undefined;
    parenthesizedType(): ParenthesizedTypeContext | undefined;
    unaryType(): UnaryTypeContext | undefined;
    objectType(): ObjectTypeContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class PropertyIdentifierContext extends ParserRuleContext {
    identifier(): IdentifierContext | undefined;
    PERIOD(): TerminalNode[];
    PERIOD(i: number): TerminalNode;
    optionalIdentifierOrIdentifier(): OptionalIdentifierOrIdentifierContext[];
    optionalIdentifierOrIdentifier(i: number): OptionalIdentifierOrIdentifierContext;
    optionalIdentifier(): OptionalIdentifierContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class OptionalIdentifierOrIdentifierContext extends ParserRuleContext {
    identifier(): IdentifierContext | undefined;
    optionalIdentifier(): OptionalIdentifierContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class ExpressionContext extends ParserRuleContext {
    unaryExpression(): UnaryExpressionContext | undefined;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    STAR(): TerminalNode | undefined;
    FORWARD_SLASH(): TerminalNode | undefined;
    SPACE(): TerminalNode[];
    SPACE(i: number): TerminalNode;
    PLUS(): TerminalNode | undefined;
    MINUS(): TerminalNode | undefined;
    arrayExpression(): ArrayExpressionContext | undefined;
    objectExpression(): ObjectExpressionContext | undefined;
    lambdaExpression(): LambdaExpressionContext | undefined;
    literalExpression(): LiteralExpressionContext | undefined;
    parenthesizedExpression(): ParenthesizedExpressionContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class UnaryExpressionContext extends ParserRuleContext {
    expression(): ExpressionContext;
    PLUS(): TerminalNode | undefined;
    MINUS(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class ArrayExpressionContext extends ParserRuleContext {
    BRACKET_OPEN(): TerminalNode;
    BRACKET_CLOSE(): TerminalNode;
    NEWLINE(): TerminalNode[];
    NEWLINE(i: number): TerminalNode;
    SPACE(): TerminalNode[];
    SPACE(i: number): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class ObjectExpressionContext extends ParserRuleContext {
    BRACE_OPEN(): TerminalNode;
    BRACE_CLOSE(): TerminalNode;
    SPACE(): TerminalNode[];
    SPACE(i: number): TerminalNode;
    NEWLINE(): TerminalNode[];
    NEWLINE(i: number): TerminalNode;
    objectPairSequenceExpression(): ObjectPairSequenceExpressionContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class ObjectPairSequenceExpressionContext extends ParserRuleContext {
    objectPairExpression(): ObjectPairExpressionContext[];
    objectPairExpression(i: number): ObjectPairExpressionContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    SPACE(): TerminalNode[];
    SPACE(i: number): TerminalNode;
    NEWLINE(): TerminalNode[];
    NEWLINE(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class ObjectPairExpressionContext extends ParserRuleContext {
    literalExpression(): LiteralExpressionContext[];
    literalExpression(i: number): LiteralExpressionContext;
    COLON(): TerminalNode;
    objectExpression(): ObjectExpressionContext | undefined;
    SPACE(): TerminalNode[];
    SPACE(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class LambdaExpressionContext extends ParserRuleContext {
    PAREN_OPEN(): TerminalNode | undefined;
    PAREN_CLOSE(): TerminalNode | undefined;
    ARROW(): TerminalNode;
    type(): TypeContext;
    SPACE(): TerminalNode[];
    SPACE(i: number): TerminalNode;
    NEWLINE(): TerminalNode[];
    NEWLINE(i: number): TerminalNode;
    formalParameterSequence(): FormalParameterSequenceContext | undefined;
    QUESTION(): TerminalNode | undefined;
    parameter(): ParameterContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class LiteralExpressionContext extends ParserRuleContext {
    NumberLiteral(): TerminalNode | undefined;
    BooleanLiteral(): TerminalNode | undefined;
    CharacterLiteral(): TerminalNode | undefined;
    StringLiteral(): TerminalNode | undefined;
    NullLiteral(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class ParenthesizedExpressionContext extends ParserRuleContext {
    PAREN_OPEN(): TerminalNode;
    expression(): ExpressionContext;
    PAREN_CLOSE(): TerminalNode;
    SPACE(): TerminalNode[];
    SPACE(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class DescriptionContext extends ParserRuleContext {
    descriptionLine(): DescriptionLineContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class DescriptionLineContext extends ParserRuleContext {
    descriptionLineStart(): DescriptionLineStartContext | undefined;
    descriptionLineElement(): DescriptionLineElementContext[];
    descriptionLineElement(i: number): DescriptionLineElementContext;
    inlineTag(): InlineTagContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class DescriptionLineStartContext extends ParserRuleContext {
    SPACE(): TerminalNode[];
    SPACE(i: number): TerminalNode;
    descriptionText(): DescriptionTextContext[];
    descriptionText(i: number): DescriptionTextContext;
    AT(): TerminalNode[];
    AT(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class DescriptionTextContext extends ParserRuleContext {
    TEXT_CONTENT(): TerminalNode | undefined;
    ID(): TerminalNode | undefined;
    FORWARD_SLASH(): TerminalNode | undefined;
    BRACE_OPEN(): TerminalNode | undefined;
    BRACE_CLOSE(): TerminalNode | undefined;
    COLON(): TerminalNode | undefined;
    MINUS(): TerminalNode | undefined;
    PERIOD(): TerminalNode | undefined;
    literalExpression(): LiteralExpressionContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class DescriptionLineElementContext extends ParserRuleContext {
    inlineTag(): InlineTagContext | undefined;
    descriptionLineText(): DescriptionLineTextContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class DescriptionLineTextContext extends ParserRuleContext {
    descriptionText(): DescriptionTextContext[];
    descriptionText(i: number): DescriptionTextContext;
    SPACE(): TerminalNode[];
    SPACE(i: number): TerminalNode;
    AT(): TerminalNode[];
    AT(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class InlineTagContext extends ParserRuleContext {
    INLINE_TAG_START(): TerminalNode;
    inlineTagName(): InlineTagNameContext;
    SPACE(): TerminalNode;
    BRACE_CLOSE(): TerminalNode;
    inlineTagBody(): InlineTagBodyContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class InlineTagNameContext extends ParserRuleContext {
    identifier(): IdentifierContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class InlineTagBodyContext extends ParserRuleContext {
    braceBody(): BraceBodyContext[];
    braceBody(i: number): BraceBodyContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class BraceExpressionContext extends ParserRuleContext {
    BRACE_OPEN(): TerminalNode;
    BRACE_CLOSE(): TerminalNode;
    braceBody(): BraceBodyContext[];
    braceBody(i: number): BraceBodyContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class BraceBodyContext extends ParserRuleContext {
    braceExpression(): BraceExpressionContext | undefined;
    braceText(): BraceTextContext[];
    braceText(i: number): BraceTextContext;
    NEWLINE(): TerminalNode[];
    NEWLINE(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
export declare class BraceTextContext extends ParserRuleContext {
    TEXT_CONTENT(): TerminalNode | undefined;
    ID(): TerminalNode | undefined;
    SPACE(): TerminalNode | undefined;
    FORWARD_SLASH(): TerminalNode | undefined;
    NEWLINE(): TerminalNode | undefined;
    PERIOD(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: XDocSyntaxParserListener): void;
    exitRule(listener: XDocSyntaxParserListener): void;
    accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result;
}
