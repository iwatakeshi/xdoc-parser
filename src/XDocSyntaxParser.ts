// Generated from XDocSyntaxParser.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { XDocSyntaxParserListener } from './XDocSyntaxParserListener';
import { XDocSyntaxParserVisitor } from './XDocSyntaxParserVisitor';


export class XDocSyntaxParser extends Parser {
	public static readonly NumberLiteral=1;
	public static readonly IntegerLiteral=2;
	public static readonly FloatingPointLiteral=3;
	public static readonly BooleanLiteral=4;
	public static readonly CharacterLiteral=5;
	public static readonly StringLiteral=6;
	public static readonly NullLiteral=7;
	public static readonly EXTENDS=8;
	public static readonly ID=9;
	public static readonly NEWLINE=10;
	public static readonly SPACE=11;
	public static readonly TEXT_CONTENT=12;
	public static readonly AT=13;
	public static readonly PLUS=14;
	public static readonly MINUS=15;
	public static readonly STAR=16;
	public static readonly FORWARD_SLASH=17;
	public static readonly COLON=18;
	public static readonly PERIOD=19;
	public static readonly COMMA=20;
	public static readonly EQUAL=21;
	public static readonly QUESTION=22;
	public static readonly AMP=23;
	public static readonly PIPE=24;
	public static readonly ARROW=25;
	public static readonly EXCLAMATION=26;
	public static readonly INLINE_TAG_START=27;
	public static readonly BRACE_OPEN=28;
	public static readonly BRACE_CLOSE=29;
	public static readonly PAREN_OPEN=30;
	public static readonly PAREN_CLOSE=31;
	public static readonly BRACKET_OPEN=32;
	public static readonly BRACKET_CLOSE=33;
	public static readonly LESSTHAN=34;
	public static readonly GREATERTHAN=35;
	public static readonly RULE_documentation = 0;
	public static readonly RULE_body = 1;
	public static readonly RULE_whitespace = 2;
	public static readonly RULE_annotations = 3;
	public static readonly RULE_tag = 4;
	public static readonly RULE_tagName = 5;
	public static readonly RULE_tagIdentifier = 6;
	public static readonly RULE_propertyTagIdentifier = 7;
	public static readonly RULE_optionalTagIdentifier = 8;
	public static readonly RULE_optionalTagOrIdentifier = 9;
	public static readonly RULE_identifier = 10;
	public static readonly RULE_optionalIdentifier = 11;
	public static readonly RULE_type = 12;
	public static readonly RULE_lambdaType = 13;
	public static readonly RULE_formalParameterSequence = 14;
	public static readonly RULE_parameter = 15;
	public static readonly RULE_tupleType = 16;
	public static readonly RULE_tupleTypeSequence = 17;
	public static readonly RULE_primaryType = 18;
	public static readonly RULE_identifierOrKeyword = 19;
	public static readonly RULE_keyword = 20;
	public static readonly RULE_parenthesizedType = 21;
	public static readonly RULE_unaryType = 22;
	public static readonly RULE_objectType = 23;
	public static readonly RULE_objectPairSequenceType = 24;
	public static readonly RULE_objectPairType = 25;
	public static readonly RULE_arrayType = 26;
	public static readonly RULE_notArrayType = 27;
	public static readonly RULE_propertyIdentifier = 28;
	public static readonly RULE_optionalIdentifierOrIdentifier = 29;
	public static readonly RULE_expression = 30;
	public static readonly RULE_unaryExpression = 31;
	public static readonly RULE_arrayExpression = 32;
	public static readonly RULE_objectExpression = 33;
	public static readonly RULE_objectPairSequenceExpression = 34;
	public static readonly RULE_objectPairExpression = 35;
	public static readonly RULE_lambdaExpression = 36;
	public static readonly RULE_literalExpression = 37;
	public static readonly RULE_parenthesizedExpression = 38;
	public static readonly RULE_description = 39;
	public static readonly RULE_descriptionLine = 40;
	public static readonly RULE_descriptionLineStart = 41;
	public static readonly RULE_descriptionText = 42;
	public static readonly RULE_descriptionLineElement = 43;
	public static readonly RULE_descriptionLineText = 44;
	public static readonly RULE_inlineTag = 45;
	public static readonly RULE_inlineTagName = 46;
	public static readonly RULE_inlineTagBody = 47;
	public static readonly RULE_braceExpression = 48;
	public static readonly RULE_braceBody = 49;
	public static readonly RULE_braceText = 50;
	public static readonly ruleNames: string[] = [
		"documentation", "body", "whitespace", "annotations", "tag", "tagName", 
		"tagIdentifier", "propertyTagIdentifier", "optionalTagIdentifier", "optionalTagOrIdentifier", 
		"identifier", "optionalIdentifier", "type", "lambdaType", "formalParameterSequence", 
		"parameter", "tupleType", "tupleTypeSequence", "primaryType", "identifierOrKeyword", 
		"keyword", "parenthesizedType", "unaryType", "objectType", "objectPairSequenceType", 
		"objectPairType", "arrayType", "notArrayType", "propertyIdentifier", "optionalIdentifierOrIdentifier", 
		"expression", "unaryExpression", "arrayExpression", "objectExpression", 
		"objectPairSequenceExpression", "objectPairExpression", "lambdaExpression", 
		"literalExpression", "parenthesizedExpression", "description", "descriptionLine", 
		"descriptionLineStart", "descriptionText", "descriptionLineElement", "descriptionLineText", 
		"inlineTag", "inlineTagName", "inlineTagBody", "braceExpression", "braceBody", 
		"braceText"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'extends'", undefined, undefined, undefined, undefined, "'@'", 
		"'+'", "'-'", "'*'", "'/'", "':'", "'.'", "','", "'='", "'?'", "'&'", 
		"'|'", undefined, "'!'", "'{@'", "'{'", "'}'", "'('", "')'", "'['", "']'", 
		"'<'", "'>'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "NumberLiteral", "IntegerLiteral", "FloatingPointLiteral", 
		"BooleanLiteral", "CharacterLiteral", "StringLiteral", "NullLiteral", 
		"EXTENDS", "ID", "NEWLINE", "SPACE", "TEXT_CONTENT", "AT", "PLUS", "MINUS", 
		"STAR", "FORWARD_SLASH", "COLON", "PERIOD", "COMMA", "EQUAL", "QUESTION", 
		"AMP", "PIPE", "ARROW", "EXCLAMATION", "INLINE_TAG_START", "BRACE_OPEN", 
		"BRACE_CLOSE", "PAREN_OPEN", "PAREN_CLOSE", "BRACKET_OPEN", "BRACKET_CLOSE", 
		"LESSTHAN", "GREATERTHAN"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(XDocSyntaxParser._LITERAL_NAMES, XDocSyntaxParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return XDocSyntaxParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "XDocSyntaxParser.g4"; }

	@Override
	public get ruleNames(): string[] { return XDocSyntaxParser.ruleNames; }

	@Override
	public get serializedATN(): string { return XDocSyntaxParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(XDocSyntaxParser._ATN, this);
	}
	
	public documentation(): DocumentationContext {
		let _localctx: DocumentationContext = new DocumentationContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, XDocSyntaxParser.RULE_documentation);
		let _la: number;
		try {
			this.state = 109;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XDocSyntaxParser.EOF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 102;
				this.match(XDocSyntaxParser.EOF);
				}
				break;
			case XDocSyntaxParser.NEWLINE:
			case XDocSyntaxParser.SPACE:
			case XDocSyntaxParser.AT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 103;
				this.body();
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.NEWLINE) {
					{
					this.state = 104;
					this.match(XDocSyntaxParser.NEWLINE);
					}
				}

				this.state = 107;
				this.match(XDocSyntaxParser.EOF);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XDocSyntaxParser.RULE_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===XDocSyntaxParser.NEWLINE || _la===XDocSyntaxParser.SPACE) {
				{
				{
				this.state = 111;
				this.whitespace();
				}
				}
				this.state = 116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 117;
			this.annotations();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public whitespace(): WhitespaceContext {
		let _localctx: WhitespaceContext = new WhitespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, XDocSyntaxParser.RULE_whitespace);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			_la = this._input.LA(1);
			if ( !(_la===XDocSyntaxParser.NEWLINE || _la===XDocSyntaxParser.SPACE) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public annotations(): AnnotationsContext {
		let _localctx: AnnotationsContext = new AnnotationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XDocSyntaxParser.RULE_annotations);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this.tag();
			this.state = 126;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,3,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 122;
					this.match(XDocSyntaxParser.NEWLINE);
					this.state = 123;
					this.tag();
					}
					} 
				}
				this.state = 128;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,3,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public tag(): TagContext {
		let _localctx: TagContext = new TagContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XDocSyntaxParser.RULE_tag);
		let _la: number;
		try {
			this.state = 288;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,29,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 129;
				this.tagName();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 130;
				this.tagName();
				this.state = 131;
				this.match(XDocSyntaxParser.SPACE);
				this.state = 133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.NEWLINE) {
					{
					this.state = 132;
					this.match(XDocSyntaxParser.NEWLINE);
					}
				}

				this.state = 135;
				this.match(XDocSyntaxParser.MINUS);
				this.state = 136;
				this.match(XDocSyntaxParser.SPACE);
				this.state = 137;
				this.description();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 139;
				this.tagName();
				this.state = 140;
				this.match(XDocSyntaxParser.SPACE);
				this.state = 141;
				this.tagIdentifier();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 143;
				this.tagName();
				this.state = 144;
				this.match(XDocSyntaxParser.SPACE);
				this.state = 145;
				this.tagIdentifier();
				this.state = 147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 146;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 149;
				this.match(XDocSyntaxParser.EQUAL);
				this.state = 151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 150;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 153;
				this.expression(0);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 155;
				this.tagName();
				this.state = 156;
				this.match(XDocSyntaxParser.SPACE);
				this.state = 157;
				this.tagIdentifier();
				this.state = 158;
				this.match(XDocSyntaxParser.SPACE);
				this.state = 160;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.NEWLINE) {
					{
					this.state = 159;
					this.match(XDocSyntaxParser.NEWLINE);
					}
				}

				this.state = 162;
				this.match(XDocSyntaxParser.MINUS);
				this.state = 163;
				this.match(XDocSyntaxParser.SPACE);
				this.state = 164;
				this.description();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 166;
				this.tagName();
				this.state = 167;
				this.match(XDocSyntaxParser.SPACE);
				this.state = 168;
				this.tagIdentifier();
				this.state = 169;
				this.match(XDocSyntaxParser.SPACE);
				this.state = 170;
				this.match(XDocSyntaxParser.EQUAL);
				this.state = 172;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 171;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 174;
				this.expression(0);
				this.state = 175;
				this.match(XDocSyntaxParser.SPACE);
				this.state = 177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.NEWLINE) {
					{
					this.state = 176;
					this.match(XDocSyntaxParser.NEWLINE);
					}
				}

				this.state = 179;
				this.match(XDocSyntaxParser.MINUS);
				this.state = 180;
				this.match(XDocSyntaxParser.SPACE);
				this.state = 181;
				this.description();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 183;
				this.tagName();
				this.state = 184;
				this.match(XDocSyntaxParser.SPACE);
				this.state = 185;
				this.tagIdentifier();
				this.state = 187;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 186;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 189;
				this.match(XDocSyntaxParser.COLON);
				this.state = 191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 190;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 193;
				this.type(0);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 195;
				this.tagName();
				this.state = 196;
				this.match(XDocSyntaxParser.SPACE);
				this.state = 197;
				this.tagIdentifier();
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 198;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 201;
				this.match(XDocSyntaxParser.COLON);
				this.state = 203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 202;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 205;
				this.type(0);
				this.state = 207;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 206;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 209;
				this.match(XDocSyntaxParser.EQUAL);
				this.state = 211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 210;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 213;
				this.expression(0);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 215;
				this.tagName();
				this.state = 216;
				this.match(XDocSyntaxParser.SPACE);
				this.state = 217;
				this.tagIdentifier();
				this.state = 219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 218;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 221;
				this.match(XDocSyntaxParser.COLON);
				this.state = 223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 222;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 225;
				this.type(0);
				this.state = 226;
				this.match(XDocSyntaxParser.SPACE);
				this.state = 228;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.NEWLINE) {
					{
					this.state = 227;
					this.match(XDocSyntaxParser.NEWLINE);
					}
				}

				this.state = 230;
				this.match(XDocSyntaxParser.MINUS);
				this.state = 231;
				this.match(XDocSyntaxParser.SPACE);
				this.state = 232;
				this.description();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 234;
				this.tagName();
				this.state = 235;
				this.match(XDocSyntaxParser.SPACE);
				this.state = 236;
				this.tagIdentifier();
				this.state = 238;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 237;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 240;
				this.match(XDocSyntaxParser.COLON);
				this.state = 242;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 241;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 244;
				this.type(0);
				this.state = 246;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 245;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 248;
				this.match(XDocSyntaxParser.EQUAL);
				this.state = 250;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 249;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 252;
				this.expression(0);
				this.state = 253;
				this.match(XDocSyntaxParser.SPACE);
				this.state = 255;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.NEWLINE) {
					{
					this.state = 254;
					this.match(XDocSyntaxParser.NEWLINE);
					}
				}

				this.state = 257;
				this.match(XDocSyntaxParser.MINUS);
				this.state = 258;
				this.match(XDocSyntaxParser.SPACE);
				this.state = 259;
				this.description();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 261;
				this.tagName();
				this.state = 263;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 262;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 265;
				this.match(XDocSyntaxParser.COLON);
				this.state = 267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 266;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 269;
				this.type(0);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 271;
				this.tagName();
				this.state = 273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 272;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 275;
				this.match(XDocSyntaxParser.COLON);
				this.state = 277;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 276;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 279;
				this.type(0);
				this.state = 280;
				this.match(XDocSyntaxParser.SPACE);
				this.state = 282;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.NEWLINE) {
					{
					this.state = 281;
					this.match(XDocSyntaxParser.NEWLINE);
					}
				}

				this.state = 284;
				this.match(XDocSyntaxParser.MINUS);
				this.state = 285;
				this.match(XDocSyntaxParser.SPACE);
				this.state = 286;
				this.description();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public tagName(): TagNameContext {
		let _localctx: TagNameContext = new TagNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XDocSyntaxParser.RULE_tagName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 290;
			this.match(XDocSyntaxParser.AT);
			this.state = 291;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public tagIdentifier(): TagIdentifierContext {
		let _localctx: TagIdentifierContext = new TagIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XDocSyntaxParser.RULE_tagIdentifier);
		try {
			this.state = 296;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,30,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 293;
				this.propertyTagIdentifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 294;
				this.optionalTagIdentifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 295;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public propertyTagIdentifier(): PropertyTagIdentifierContext {
		let _localctx: PropertyTagIdentifierContext = new PropertyTagIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XDocSyntaxParser.RULE_propertyTagIdentifier);
		let _la: number;
		try {
			this.state = 312;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,33,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 298;
				this.optionalTagIdentifier();
				this.state = 301; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 299;
					this.match(XDocSyntaxParser.PERIOD);
					this.state = 300;
					this.optionalTagOrIdentifier();
					}
					}
					this.state = 303; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( _la===XDocSyntaxParser.PERIOD );
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 305;
				this.identifier();
				this.state = 308; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 306;
					this.match(XDocSyntaxParser.PERIOD);
					this.state = 307;
					this.optionalTagOrIdentifier();
					}
					}
					this.state = 310; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( _la===XDocSyntaxParser.PERIOD );
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public optionalTagIdentifier(): OptionalTagIdentifierContext {
		let _localctx: OptionalTagIdentifierContext = new OptionalTagIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XDocSyntaxParser.RULE_optionalTagIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 314;
			this.optionalIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public optionalTagOrIdentifier(): OptionalTagOrIdentifierContext {
		let _localctx: OptionalTagOrIdentifierContext = new OptionalTagOrIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, XDocSyntaxParser.RULE_optionalTagOrIdentifier);
		try {
			this.state = 318;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,34,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 316;
				this.optionalTagIdentifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 317;
				this.identifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XDocSyntaxParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
			this.match(XDocSyntaxParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public optionalIdentifier(): OptionalIdentifierContext {
		let _localctx: OptionalIdentifierContext = new OptionalIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, XDocSyntaxParser.RULE_optionalIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 322;
			this.identifier();
			this.state = 323;
			this.match(XDocSyntaxParser.QUESTION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public type(): TypeContext;
	public type(_p: number): TypeContext;
	
	public type(_p?: number): TypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeContext = new TypeContext(this._ctx, _parentState);
		let _prevctx: TypeContext = _localctx;
		let _startState: number = 24;
		this.enterRecursionRule(_localctx, 24, XDocSyntaxParser.RULE_type, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,35,this._ctx) ) {
			case 1:
				{
				this.state = 326;
				this.lambdaType();
				}
				break;

			case 2:
				{
				this.state = 327;
				this.tupleType();
				}
				break;

			case 3:
				{
				this.state = 328;
				this.primaryType();
				}
				break;

			case 4:
				{
				this.state = 329;
				this.parenthesizedType();
				}
				break;

			case 5:
				{
				this.state = 330;
				this.unaryType();
				}
				break;

			case 6:
				{
				this.state = 331;
				this.objectType();
				}
				break;

			case 7:
				{
				this.state = 332;
				this.arrayType();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 358;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,42,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, XDocSyntaxParser.RULE_type);
					this.state = 335;
					if (!(this.precpred(this._ctx, 8))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
					this.state = 337;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,36,this._ctx) ) {
					case 1:
						{
						this.state = 336;
						this.match(XDocSyntaxParser.SPACE);
						}
						break;
					}
					this.state = 340;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===XDocSyntaxParser.NEWLINE) {
						{
						this.state = 339;
						this.match(XDocSyntaxParser.NEWLINE);
						}
					}

					this.state = 343;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===XDocSyntaxParser.SPACE) {
						{
						this.state = 342;
						this.match(XDocSyntaxParser.SPACE);
						}
					}

					this.state = 345;
					_la = this._input.LA(1);
					if ( !(_la===XDocSyntaxParser.AMP || _la===XDocSyntaxParser.PIPE) ) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 347;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,39,this._ctx) ) {
					case 1:
						{
						this.state = 346;
						this.match(XDocSyntaxParser.SPACE);
						}
						break;
					}
					this.state = 350;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===XDocSyntaxParser.NEWLINE) {
						{
						this.state = 349;
						this.match(XDocSyntaxParser.NEWLINE);
						}
					}

					this.state = 353;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===XDocSyntaxParser.SPACE) {
						{
						this.state = 352;
						this.match(XDocSyntaxParser.SPACE);
						}
					}

					this.state = 355;
					this.type(9);
					}
					} 
				}
				this.state = 360;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,42,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	
	public lambdaType(): LambdaTypeContext {
		let _localctx: LambdaTypeContext = new LambdaTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, XDocSyntaxParser.RULE_lambdaType);
		let _la: number;
		try {
			this.state = 431;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XDocSyntaxParser.PAREN_OPEN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 361;
				this.match(XDocSyntaxParser.PAREN_OPEN);
				this.state = 363;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,43,this._ctx) ) {
				case 1:
					{
					this.state = 362;
					this.match(XDocSyntaxParser.SPACE);
					}
					break;
				}
				this.state = 366;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,44,this._ctx) ) {
				case 1:
					{
					this.state = 365;
					this.match(XDocSyntaxParser.NEWLINE);
					}
					break;
				}
				this.state = 369;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,45,this._ctx) ) {
				case 1:
					{
					this.state = 368;
					this.match(XDocSyntaxParser.SPACE);
					}
					break;
				}
				this.state = 372;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.ID) {
					{
					this.state = 371;
					this.formalParameterSequence();
					}
				}

				this.state = 375;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,47,this._ctx) ) {
				case 1:
					{
					this.state = 374;
					this.match(XDocSyntaxParser.SPACE);
					}
					break;
				}
				this.state = 378;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.NEWLINE) {
					{
					this.state = 377;
					this.match(XDocSyntaxParser.NEWLINE);
					}
				}

				this.state = 381;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 380;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 383;
				this.match(XDocSyntaxParser.PAREN_CLOSE);
				this.state = 385;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,50,this._ctx) ) {
				case 1:
					{
					this.state = 384;
					this.match(XDocSyntaxParser.SPACE);
					}
					break;
				}
				this.state = 388;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.NEWLINE) {
					{
					this.state = 387;
					this.match(XDocSyntaxParser.NEWLINE);
					}
				}

				this.state = 391;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 390;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 393;
				this.match(XDocSyntaxParser.ARROW);
				this.state = 395;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,53,this._ctx) ) {
				case 1:
					{
					this.state = 394;
					this.match(XDocSyntaxParser.SPACE);
					}
					break;
				}
				this.state = 398;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.NEWLINE) {
					{
					this.state = 397;
					this.match(XDocSyntaxParser.NEWLINE);
					}
				}

				this.state = 401;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 400;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 403;
				this.type(0);
				this.state = 405;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,56,this._ctx) ) {
				case 1:
					{
					this.state = 404;
					this.match(XDocSyntaxParser.QUESTION);
					}
					break;
				}
				}
				break;
			case XDocSyntaxParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 407;
				this.parameter();
				this.state = 409;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,57,this._ctx) ) {
				case 1:
					{
					this.state = 408;
					this.match(XDocSyntaxParser.SPACE);
					}
					break;
				}
				this.state = 412;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.NEWLINE) {
					{
					this.state = 411;
					this.match(XDocSyntaxParser.NEWLINE);
					}
				}

				this.state = 415;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 414;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 417;
				this.match(XDocSyntaxParser.ARROW);
				this.state = 419;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,60,this._ctx) ) {
				case 1:
					{
					this.state = 418;
					this.match(XDocSyntaxParser.SPACE);
					}
					break;
				}
				this.state = 422;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.NEWLINE) {
					{
					this.state = 421;
					this.match(XDocSyntaxParser.NEWLINE);
					}
				}

				this.state = 425;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 424;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 427;
				this.type(0);
				this.state = 429;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,63,this._ctx) ) {
				case 1:
					{
					this.state = 428;
					this.match(XDocSyntaxParser.QUESTION);
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public formalParameterSequence(): FormalParameterSequenceContext {
		let _localctx: FormalParameterSequenceContext = new FormalParameterSequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, XDocSyntaxParser.RULE_formalParameterSequence);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 433;
			this.parameter();
			this.state = 444;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===XDocSyntaxParser.COMMA) {
				{
				{
				this.state = 434;
				this.match(XDocSyntaxParser.COMMA);
				this.state = 436;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.NEWLINE) {
					{
					this.state = 435;
					this.match(XDocSyntaxParser.NEWLINE);
					}
				}

				this.state = 439;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 438;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 441;
				this.parameter();
				}
				}
				this.state = 446;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, XDocSyntaxParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 447;
			this.identifier();
			this.state = 456;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,70,this._ctx) ) {
			case 1:
				{
				this.state = 449;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 448;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 451;
				this.match(XDocSyntaxParser.COLON);
				this.state = 453;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 452;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 455;
				this.type(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public tupleType(): TupleTypeContext {
		let _localctx: TupleTypeContext = new TupleTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, XDocSyntaxParser.RULE_tupleType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 459;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===XDocSyntaxParser.ID) {
				{
				this.state = 458;
				this.identifier();
				}
			}

			this.state = 461;
			this.match(XDocSyntaxParser.LESSTHAN);
			this.state = 463;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===XDocSyntaxParser.SPACE) {
				{
				this.state = 462;
				this.match(XDocSyntaxParser.SPACE);
				}
			}

			this.state = 465;
			this.tupleTypeSequence();
			this.state = 467;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===XDocSyntaxParser.SPACE) {
				{
				this.state = 466;
				this.match(XDocSyntaxParser.SPACE);
				}
			}

			this.state = 469;
			this.match(XDocSyntaxParser.GREATERTHAN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public tupleTypeSequence(): TupleTypeSequenceContext {
		let _localctx: TupleTypeSequenceContext = new TupleTypeSequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, XDocSyntaxParser.RULE_tupleTypeSequence);
		let _la: number;
		try {
			let _alt: number;
			this.state = 551;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,92,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 471;
				this.primaryType();
				this.state = 473;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,74,this._ctx) ) {
				case 1:
					{
					this.state = 472;
					this.match(XDocSyntaxParser.SPACE);
					}
					break;
				}
				this.state = 482;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,76,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 475;
						this.match(XDocSyntaxParser.COMMA);
						this.state = 477;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===XDocSyntaxParser.SPACE) {
							{
							this.state = 476;
							this.match(XDocSyntaxParser.SPACE);
							}
						}

						this.state = 479;
						this.tupleTypeSequence();
						}
						} 
					}
					this.state = 484;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,76,this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 485;
				this.primaryType();
				this.state = 487;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 486;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 489;
				this.match(XDocSyntaxParser.EXTENDS);
				this.state = 491;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 490;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 493;
				this.primaryType();
				this.state = 495;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,79,this._ctx) ) {
				case 1:
					{
					this.state = 494;
					this.match(XDocSyntaxParser.SPACE);
					}
					break;
				}
				this.state = 504;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,81,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 497;
						this.match(XDocSyntaxParser.COMMA);
						this.state = 499;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===XDocSyntaxParser.SPACE) {
							{
							this.state = 498;
							this.match(XDocSyntaxParser.SPACE);
							}
						}

						this.state = 501;
						this.tupleTypeSequence();
						}
						} 
					}
					this.state = 506;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,81,this._ctx);
				}
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 507;
				this.primaryType();
				this.state = 509;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 508;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 511;
				this.match(XDocSyntaxParser.AMP);
				this.state = 513;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 512;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 515;
				this.primaryType();
				this.state = 517;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,84,this._ctx) ) {
				case 1:
					{
					this.state = 516;
					this.match(XDocSyntaxParser.SPACE);
					}
					break;
				}
				this.state = 526;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,86,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 519;
						this.match(XDocSyntaxParser.COMMA);
						this.state = 521;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===XDocSyntaxParser.SPACE) {
							{
							this.state = 520;
							this.match(XDocSyntaxParser.SPACE);
							}
						}

						this.state = 523;
						this.tupleTypeSequence();
						}
						} 
					}
					this.state = 528;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,86,this._ctx);
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 529;
				this.primaryType();
				this.state = 531;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 530;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 533;
				this.match(XDocSyntaxParser.PIPE);
				this.state = 535;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 534;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 537;
				this.primaryType();
				this.state = 539;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,89,this._ctx) ) {
				case 1:
					{
					this.state = 538;
					this.match(XDocSyntaxParser.SPACE);
					}
					break;
				}
				this.state = 548;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,91,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 541;
						this.match(XDocSyntaxParser.COMMA);
						this.state = 543;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===XDocSyntaxParser.SPACE) {
							{
							this.state = 542;
							this.match(XDocSyntaxParser.SPACE);
							}
						}

						this.state = 545;
						this.tupleTypeSequence();
						}
						} 
					}
					this.state = 550;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,91,this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public primaryType(): PrimaryTypeContext {
		let _localctx: PrimaryTypeContext = new PrimaryTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, XDocSyntaxParser.RULE_primaryType);
		try {
			this.state = 556;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,93,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 553;
				this.optionalIdentifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 554;
				this.propertyIdentifier();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 555;
				this.identifierOrKeyword();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public identifierOrKeyword(): IdentifierOrKeywordContext {
		let _localctx: IdentifierOrKeywordContext = new IdentifierOrKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, XDocSyntaxParser.RULE_identifierOrKeyword);
		try {
			this.state = 560;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XDocSyntaxParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 558;
				this.identifier();
				}
				break;
			case XDocSyntaxParser.NullLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 559;
				this.keyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public keyword(): KeywordContext {
		let _localctx: KeywordContext = new KeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, XDocSyntaxParser.RULE_keyword);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 562;
			this.match(XDocSyntaxParser.NullLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public parenthesizedType(): ParenthesizedTypeContext {
		let _localctx: ParenthesizedTypeContext = new ParenthesizedTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, XDocSyntaxParser.RULE_parenthesizedType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 564;
			this.match(XDocSyntaxParser.PAREN_OPEN);
			this.state = 566;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===XDocSyntaxParser.SPACE) {
				{
				this.state = 565;
				this.match(XDocSyntaxParser.SPACE);
				}
			}

			this.state = 568;
			this.type(0);
			this.state = 570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===XDocSyntaxParser.SPACE) {
				{
				this.state = 569;
				this.match(XDocSyntaxParser.SPACE);
				}
			}

			this.state = 572;
			this.match(XDocSyntaxParser.PAREN_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public unaryType(): UnaryTypeContext {
		let _localctx: UnaryTypeContext = new UnaryTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, XDocSyntaxParser.RULE_unaryType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 574;
			_la = this._input.LA(1);
			if ( !(_la===XDocSyntaxParser.STAR || _la===XDocSyntaxParser.AMP) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 575;
			this.primaryType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public objectType(): ObjectTypeContext {
		let _localctx: ObjectTypeContext = new ObjectTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, XDocSyntaxParser.RULE_objectType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 577;
			this.match(XDocSyntaxParser.BRACE_OPEN);
			this.state = 579;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,97,this._ctx) ) {
			case 1:
				{
				this.state = 578;
				this.match(XDocSyntaxParser.SPACE);
				}
				break;
			}
			this.state = 582;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,98,this._ctx) ) {
			case 1:
				{
				this.state = 581;
				this.match(XDocSyntaxParser.NEWLINE);
				}
				break;
			}
			this.state = 585;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,99,this._ctx) ) {
			case 1:
				{
				this.state = 584;
				this.match(XDocSyntaxParser.SPACE);
				}
				break;
			}
			this.state = 588;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (XDocSyntaxParser.NullLiteral - 7)) | (1 << (XDocSyntaxParser.ID - 7)) | (1 << (XDocSyntaxParser.STAR - 7)) | (1 << (XDocSyntaxParser.AMP - 7)) | (1 << (XDocSyntaxParser.BRACE_OPEN - 7)) | (1 << (XDocSyntaxParser.PAREN_OPEN - 7)) | (1 << (XDocSyntaxParser.BRACKET_OPEN - 7)) | (1 << (XDocSyntaxParser.LESSTHAN - 7)))) !== 0)) {
				{
				this.state = 587;
				this.objectPairSequenceType();
				}
			}

			this.state = 591;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,101,this._ctx) ) {
			case 1:
				{
				this.state = 590;
				this.match(XDocSyntaxParser.SPACE);
				}
				break;
			}
			this.state = 594;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===XDocSyntaxParser.NEWLINE) {
				{
				this.state = 593;
				this.match(XDocSyntaxParser.NEWLINE);
				}
			}

			this.state = 597;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===XDocSyntaxParser.SPACE) {
				{
				this.state = 596;
				this.match(XDocSyntaxParser.SPACE);
				}
			}

			this.state = 599;
			this.match(XDocSyntaxParser.BRACE_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public objectPairSequenceType(): ObjectPairSequenceTypeContext {
		let _localctx: ObjectPairSequenceTypeContext = new ObjectPairSequenceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, XDocSyntaxParser.RULE_objectPairSequenceType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 601;
			this.objectPairType();
			this.state = 603;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,104,this._ctx) ) {
			case 1:
				{
				this.state = 602;
				this.match(XDocSyntaxParser.SPACE);
				}
				break;
			}
			this.state = 618;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===XDocSyntaxParser.COMMA) {
				{
				{
				this.state = 605;
				this.match(XDocSyntaxParser.COMMA);
				this.state = 607;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,105,this._ctx) ) {
				case 1:
					{
					this.state = 606;
					this.match(XDocSyntaxParser.SPACE);
					}
					break;
				}
				this.state = 610;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.NEWLINE) {
					{
					this.state = 609;
					this.match(XDocSyntaxParser.NEWLINE);
					}
				}

				this.state = 613;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 612;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 615;
				this.objectPairType();
				}
				}
				this.state = 620;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public objectPairType(): ObjectPairTypeContext {
		let _localctx: ObjectPairTypeContext = new ObjectPairTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, XDocSyntaxParser.RULE_objectPairType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 621;
			this.type(0);
			this.state = 623;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===XDocSyntaxParser.QUESTION) {
				{
				this.state = 622;
				this.match(XDocSyntaxParser.QUESTION);
				}
			}

			this.state = 626;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===XDocSyntaxParser.SPACE) {
				{
				this.state = 625;
				this.match(XDocSyntaxParser.SPACE);
				}
			}

			this.state = 628;
			this.match(XDocSyntaxParser.COLON);
			this.state = 630;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===XDocSyntaxParser.SPACE) {
				{
				this.state = 629;
				this.match(XDocSyntaxParser.SPACE);
				}
			}

			this.state = 632;
			this.type(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public arrayType(): ArrayTypeContext {
		let _localctx: ArrayTypeContext = new ArrayTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, XDocSyntaxParser.RULE_arrayType);
		let _la: number;
		try {
			let _alt: number;
			this.state = 680;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XDocSyntaxParser.BRACKET_OPEN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 634;
				this.match(XDocSyntaxParser.BRACKET_OPEN);
				this.state = 636;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,112,this._ctx) ) {
				case 1:
					{
					this.state = 635;
					this.match(XDocSyntaxParser.NEWLINE);
					}
					break;
				}
				this.state = 639;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,113,this._ctx) ) {
				case 1:
					{
					this.state = 638;
					this.match(XDocSyntaxParser.SPACE);
					}
					break;
				}
				this.state = 642;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,114,this._ctx) ) {
				case 1:
					{
					this.state = 641;
					this.match(XDocSyntaxParser.NEWLINE);
					}
					break;
				}
				this.state = 645;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 7)) & ~0x1F) === 0 && ((1 << (_la - 7)) & ((1 << (XDocSyntaxParser.NullLiteral - 7)) | (1 << (XDocSyntaxParser.ID - 7)) | (1 << (XDocSyntaxParser.STAR - 7)) | (1 << (XDocSyntaxParser.AMP - 7)) | (1 << (XDocSyntaxParser.BRACE_OPEN - 7)) | (1 << (XDocSyntaxParser.PAREN_OPEN - 7)) | (1 << (XDocSyntaxParser.BRACKET_OPEN - 7)) | (1 << (XDocSyntaxParser.LESSTHAN - 7)))) !== 0)) {
					{
					this.state = 644;
					this.type(0);
					}
				}

				this.state = 660;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===XDocSyntaxParser.COMMA) {
					{
					{
					this.state = 647;
					this.match(XDocSyntaxParser.COMMA);
					this.state = 649;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,116,this._ctx) ) {
					case 1:
						{
						this.state = 648;
						this.match(XDocSyntaxParser.NEWLINE);
						}
						break;
					}
					this.state = 652;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===XDocSyntaxParser.SPACE) {
						{
						this.state = 651;
						this.match(XDocSyntaxParser.SPACE);
						}
					}

					this.state = 655;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===XDocSyntaxParser.NEWLINE) {
						{
						this.state = 654;
						this.match(XDocSyntaxParser.NEWLINE);
						}
					}

					this.state = 657;
					this.type(0);
					}
					}
					this.state = 662;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 664;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,120,this._ctx) ) {
				case 1:
					{
					this.state = 663;
					this.match(XDocSyntaxParser.NEWLINE);
					}
					break;
				}
				this.state = 667;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 666;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 670;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.NEWLINE) {
					{
					this.state = 669;
					this.match(XDocSyntaxParser.NEWLINE);
					}
				}

				this.state = 672;
				this.match(XDocSyntaxParser.BRACKET_CLOSE);
				}
				break;
			case XDocSyntaxParser.NullLiteral:
			case XDocSyntaxParser.ID:
			case XDocSyntaxParser.STAR:
			case XDocSyntaxParser.AMP:
			case XDocSyntaxParser.BRACE_OPEN:
			case XDocSyntaxParser.PAREN_OPEN:
			case XDocSyntaxParser.LESSTHAN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 673;
				this.notArrayType(0);
				this.state = 676; 
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 674;
						this.match(XDocSyntaxParser.BRACKET_OPEN);
						this.state = 675;
						this.match(XDocSyntaxParser.BRACKET_CLOSE);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 678; 
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,123,this._ctx);
				} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public notArrayType(): NotArrayTypeContext;
	public notArrayType(_p: number): NotArrayTypeContext;
	
	public notArrayType(_p?: number): NotArrayTypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: NotArrayTypeContext = new NotArrayTypeContext(this._ctx, _parentState);
		let _prevctx: NotArrayTypeContext = _localctx;
		let _startState: number = 54;
		this.enterRecursionRule(_localctx, 54, XDocSyntaxParser.RULE_notArrayType, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 689;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,125,this._ctx) ) {
			case 1:
				{
				this.state = 683;
				this.lambdaType();
				}
				break;

			case 2:
				{
				this.state = 684;
				this.tupleType();
				}
				break;

			case 3:
				{
				this.state = 685;
				this.primaryType();
				}
				break;

			case 4:
				{
				this.state = 686;
				this.parenthesizedType();
				}
				break;

			case 5:
				{
				this.state = 687;
				this.unaryType();
				}
				break;

			case 6:
				{
				this.state = 688;
				this.objectType();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 714;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,132,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new NotArrayTypeContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, XDocSyntaxParser.RULE_notArrayType);
					this.state = 691;
					if (!(this.precpred(this._ctx, 7))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
					this.state = 693;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,126,this._ctx) ) {
					case 1:
						{
						this.state = 692;
						this.match(XDocSyntaxParser.SPACE);
						}
						break;
					}
					this.state = 696;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===XDocSyntaxParser.NEWLINE) {
						{
						this.state = 695;
						this.match(XDocSyntaxParser.NEWLINE);
						}
					}

					this.state = 699;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===XDocSyntaxParser.SPACE) {
						{
						this.state = 698;
						this.match(XDocSyntaxParser.SPACE);
						}
					}

					this.state = 701;
					_la = this._input.LA(1);
					if ( !(_la===XDocSyntaxParser.AMP || _la===XDocSyntaxParser.PIPE) ) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 703;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,129,this._ctx) ) {
					case 1:
						{
						this.state = 702;
						this.match(XDocSyntaxParser.SPACE);
						}
						break;
					}
					this.state = 706;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===XDocSyntaxParser.NEWLINE) {
						{
						this.state = 705;
						this.match(XDocSyntaxParser.NEWLINE);
						}
					}

					this.state = 709;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===XDocSyntaxParser.SPACE) {
						{
						this.state = 708;
						this.match(XDocSyntaxParser.SPACE);
						}
					}

					this.state = 711;
					this.notArrayType(8);
					}
					} 
				}
				this.state = 716;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,132,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	
	public propertyIdentifier(): PropertyIdentifierContext {
		let _localctx: PropertyIdentifierContext = new PropertyIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, XDocSyntaxParser.RULE_propertyIdentifier);
		try {
			let _alt: number;
			this.state = 731;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,135,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 717;
				this.identifier();
				this.state = 720; 
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 718;
						this.match(XDocSyntaxParser.PERIOD);
						this.state = 719;
						this.optionalIdentifierOrIdentifier();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 722; 
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,133,this._ctx);
				} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 724;
				this.optionalIdentifier();
				this.state = 727; 
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 725;
						this.match(XDocSyntaxParser.PERIOD);
						this.state = 726;
						this.optionalIdentifierOrIdentifier();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 729; 
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,134,this._ctx);
				} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public optionalIdentifierOrIdentifier(): OptionalIdentifierOrIdentifierContext {
		let _localctx: OptionalIdentifierOrIdentifierContext = new OptionalIdentifierOrIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, XDocSyntaxParser.RULE_optionalIdentifierOrIdentifier);
		try {
			this.state = 735;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,136,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 733;
				this.identifier();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 734;
				this.optionalIdentifier();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 60;
		this.enterRecursionRule(_localctx, 60, XDocSyntaxParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 744;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,137,this._ctx) ) {
			case 1:
				{
				this.state = 738;
				this.unaryExpression();
				}
				break;

			case 2:
				{
				this.state = 739;
				this.arrayExpression();
				}
				break;

			case 3:
				{
				this.state = 740;
				this.objectExpression();
				}
				break;

			case 4:
				{
				this.state = 741;
				this.lambdaExpression();
				}
				break;

			case 5:
				{
				this.state = 742;
				this.literalExpression();
				}
				break;

			case 6:
				{
				this.state = 743;
				this.parenthesizedExpression();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 766;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,143,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 764;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,142,this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, XDocSyntaxParser.RULE_expression);
						this.state = 746;
						if (!(this.precpred(this._ctx, 7))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						this.state = 748;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===XDocSyntaxParser.SPACE) {
							{
							this.state = 747;
							this.match(XDocSyntaxParser.SPACE);
							}
						}

						this.state = 750;
						_la = this._input.LA(1);
						if ( !(_la===XDocSyntaxParser.STAR || _la===XDocSyntaxParser.FORWARD_SLASH) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 752;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===XDocSyntaxParser.SPACE) {
							{
							this.state = 751;
							this.match(XDocSyntaxParser.SPACE);
							}
						}

						this.state = 754;
						this.expression(8);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, XDocSyntaxParser.RULE_expression);
						this.state = 755;
						if (!(this.precpred(this._ctx, 6))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						this.state = 757;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===XDocSyntaxParser.SPACE) {
							{
							this.state = 756;
							this.match(XDocSyntaxParser.SPACE);
							}
						}

						this.state = 759;
						_la = this._input.LA(1);
						if ( !(_la===XDocSyntaxParser.PLUS || _la===XDocSyntaxParser.MINUS) ) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 761;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la===XDocSyntaxParser.SPACE) {
							{
							this.state = 760;
							this.match(XDocSyntaxParser.SPACE);
							}
						}

						this.state = 763;
						this.expression(7);
						}
						break;
					}
					} 
				}
				this.state = 768;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,143,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	
	public unaryExpression(): UnaryExpressionContext {
		let _localctx: UnaryExpressionContext = new UnaryExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, XDocSyntaxParser.RULE_unaryExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 769;
			_la = this._input.LA(1);
			if ( !(_la===XDocSyntaxParser.PLUS || _la===XDocSyntaxParser.MINUS) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 770;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public arrayExpression(): ArrayExpressionContext {
		let _localctx: ArrayExpressionContext = new ArrayExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, XDocSyntaxParser.RULE_arrayExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 772;
			this.match(XDocSyntaxParser.BRACKET_OPEN);
			this.state = 774;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,144,this._ctx) ) {
			case 1:
				{
				this.state = 773;
				this.match(XDocSyntaxParser.NEWLINE);
				}
				break;
			}
			this.state = 777;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,145,this._ctx) ) {
			case 1:
				{
				this.state = 776;
				this.match(XDocSyntaxParser.SPACE);
				}
				break;
			}
			this.state = 780;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,146,this._ctx) ) {
			case 1:
				{
				this.state = 779;
				this.match(XDocSyntaxParser.NEWLINE);
				}
				break;
			}
			this.state = 783;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 1)) & ~0x1F) === 0 && ((1 << (_la - 1)) & ((1 << (XDocSyntaxParser.NumberLiteral - 1)) | (1 << (XDocSyntaxParser.BooleanLiteral - 1)) | (1 << (XDocSyntaxParser.CharacterLiteral - 1)) | (1 << (XDocSyntaxParser.StringLiteral - 1)) | (1 << (XDocSyntaxParser.NullLiteral - 1)) | (1 << (XDocSyntaxParser.ID - 1)) | (1 << (XDocSyntaxParser.PLUS - 1)) | (1 << (XDocSyntaxParser.MINUS - 1)) | (1 << (XDocSyntaxParser.BRACE_OPEN - 1)) | (1 << (XDocSyntaxParser.PAREN_OPEN - 1)) | (1 << (XDocSyntaxParser.BRACKET_OPEN - 1)))) !== 0)) {
				{
				this.state = 782;
				this.expression(0);
				}
			}

			this.state = 798;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===XDocSyntaxParser.COMMA) {
				{
				{
				this.state = 785;
				this.match(XDocSyntaxParser.COMMA);
				this.state = 787;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,148,this._ctx) ) {
				case 1:
					{
					this.state = 786;
					this.match(XDocSyntaxParser.NEWLINE);
					}
					break;
				}
				this.state = 790;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 789;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 793;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.NEWLINE) {
					{
					this.state = 792;
					this.match(XDocSyntaxParser.NEWLINE);
					}
				}

				this.state = 795;
				this.expression(0);
				}
				}
				this.state = 800;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 802;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,152,this._ctx) ) {
			case 1:
				{
				this.state = 801;
				this.match(XDocSyntaxParser.NEWLINE);
				}
				break;
			}
			this.state = 805;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===XDocSyntaxParser.SPACE) {
				{
				this.state = 804;
				this.match(XDocSyntaxParser.SPACE);
				}
			}

			this.state = 808;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===XDocSyntaxParser.NEWLINE) {
				{
				this.state = 807;
				this.match(XDocSyntaxParser.NEWLINE);
				}
			}

			this.state = 810;
			this.match(XDocSyntaxParser.BRACKET_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public objectExpression(): ObjectExpressionContext {
		let _localctx: ObjectExpressionContext = new ObjectExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, XDocSyntaxParser.RULE_objectExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 812;
			this.match(XDocSyntaxParser.BRACE_OPEN);
			this.state = 814;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,155,this._ctx) ) {
			case 1:
				{
				this.state = 813;
				this.match(XDocSyntaxParser.SPACE);
				}
				break;
			}
			this.state = 817;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,156,this._ctx) ) {
			case 1:
				{
				this.state = 816;
				this.match(XDocSyntaxParser.NEWLINE);
				}
				break;
			}
			this.state = 820;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,157,this._ctx) ) {
			case 1:
				{
				this.state = 819;
				this.match(XDocSyntaxParser.SPACE);
				}
				break;
			}
			this.state = 823;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocSyntaxParser.NumberLiteral) | (1 << XDocSyntaxParser.BooleanLiteral) | (1 << XDocSyntaxParser.CharacterLiteral) | (1 << XDocSyntaxParser.StringLiteral) | (1 << XDocSyntaxParser.NullLiteral))) !== 0)) {
				{
				this.state = 822;
				this.objectPairSequenceExpression();
				}
			}

			this.state = 826;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,159,this._ctx) ) {
			case 1:
				{
				this.state = 825;
				this.match(XDocSyntaxParser.SPACE);
				}
				break;
			}
			this.state = 829;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===XDocSyntaxParser.NEWLINE) {
				{
				this.state = 828;
				this.match(XDocSyntaxParser.NEWLINE);
				}
			}

			this.state = 832;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===XDocSyntaxParser.SPACE) {
				{
				this.state = 831;
				this.match(XDocSyntaxParser.SPACE);
				}
			}

			this.state = 834;
			this.match(XDocSyntaxParser.BRACE_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public objectPairSequenceExpression(): ObjectPairSequenceExpressionContext {
		let _localctx: ObjectPairSequenceExpressionContext = new ObjectPairSequenceExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, XDocSyntaxParser.RULE_objectPairSequenceExpression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 836;
			this.objectPairExpression();
			this.state = 853;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,166,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 838;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===XDocSyntaxParser.SPACE) {
						{
						this.state = 837;
						this.match(XDocSyntaxParser.SPACE);
						}
					}

					this.state = 840;
					this.match(XDocSyntaxParser.COMMA);
					this.state = 842;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,163,this._ctx) ) {
					case 1:
						{
						this.state = 841;
						this.match(XDocSyntaxParser.SPACE);
						}
						break;
					}
					this.state = 845;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===XDocSyntaxParser.NEWLINE) {
						{
						this.state = 844;
						this.match(XDocSyntaxParser.NEWLINE);
						}
					}

					this.state = 848;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===XDocSyntaxParser.SPACE) {
						{
						this.state = 847;
						this.match(XDocSyntaxParser.SPACE);
						}
					}

					this.state = 850;
					this.objectPairExpression();
					}
					} 
				}
				this.state = 855;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,166,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public objectPairExpression(): ObjectPairExpressionContext {
		let _localctx: ObjectPairExpressionContext = new ObjectPairExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, XDocSyntaxParser.RULE_objectPairExpression);
		let _la: number;
		try {
			this.state = 876;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,171,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 856;
				this.literalExpression();
				this.state = 858;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 857;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 860;
				this.match(XDocSyntaxParser.COLON);
				this.state = 862;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 861;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 864;
				this.objectExpression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 866;
				this.literalExpression();
				this.state = 868;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 867;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 870;
				this.match(XDocSyntaxParser.COLON);
				this.state = 872;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 871;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 874;
				this.literalExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public lambdaExpression(): LambdaExpressionContext {
		let _localctx: LambdaExpressionContext = new LambdaExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, XDocSyntaxParser.RULE_lambdaExpression);
		let _la: number;
		try {
			this.state = 948;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XDocSyntaxParser.PAREN_OPEN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 878;
				this.match(XDocSyntaxParser.PAREN_OPEN);
				this.state = 880;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,172,this._ctx) ) {
				case 1:
					{
					this.state = 879;
					this.match(XDocSyntaxParser.SPACE);
					}
					break;
				}
				this.state = 883;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,173,this._ctx) ) {
				case 1:
					{
					this.state = 882;
					this.match(XDocSyntaxParser.NEWLINE);
					}
					break;
				}
				this.state = 886;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,174,this._ctx) ) {
				case 1:
					{
					this.state = 885;
					this.match(XDocSyntaxParser.SPACE);
					}
					break;
				}
				this.state = 889;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.ID) {
					{
					this.state = 888;
					this.formalParameterSequence();
					}
				}

				this.state = 892;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,176,this._ctx) ) {
				case 1:
					{
					this.state = 891;
					this.match(XDocSyntaxParser.SPACE);
					}
					break;
				}
				this.state = 895;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.NEWLINE) {
					{
					this.state = 894;
					this.match(XDocSyntaxParser.NEWLINE);
					}
				}

				this.state = 898;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 897;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 900;
				this.match(XDocSyntaxParser.PAREN_CLOSE);
				this.state = 902;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,179,this._ctx) ) {
				case 1:
					{
					this.state = 901;
					this.match(XDocSyntaxParser.SPACE);
					}
					break;
				}
				this.state = 905;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.NEWLINE) {
					{
					this.state = 904;
					this.match(XDocSyntaxParser.NEWLINE);
					}
				}

				this.state = 908;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 907;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 910;
				this.match(XDocSyntaxParser.ARROW);
				this.state = 912;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,182,this._ctx) ) {
				case 1:
					{
					this.state = 911;
					this.match(XDocSyntaxParser.SPACE);
					}
					break;
				}
				this.state = 915;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.NEWLINE) {
					{
					this.state = 914;
					this.match(XDocSyntaxParser.NEWLINE);
					}
				}

				this.state = 918;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 917;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 920;
				this.type(0);
				this.state = 922;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,185,this._ctx) ) {
				case 1:
					{
					this.state = 921;
					this.match(XDocSyntaxParser.QUESTION);
					}
					break;
				}
				}
				break;
			case XDocSyntaxParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 924;
				this.parameter();
				this.state = 926;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,186,this._ctx) ) {
				case 1:
					{
					this.state = 925;
					this.match(XDocSyntaxParser.SPACE);
					}
					break;
				}
				this.state = 929;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.NEWLINE) {
					{
					this.state = 928;
					this.match(XDocSyntaxParser.NEWLINE);
					}
				}

				this.state = 932;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 931;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 934;
				this.match(XDocSyntaxParser.ARROW);
				this.state = 936;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,189,this._ctx) ) {
				case 1:
					{
					this.state = 935;
					this.match(XDocSyntaxParser.SPACE);
					}
					break;
				}
				this.state = 939;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.NEWLINE) {
					{
					this.state = 938;
					this.match(XDocSyntaxParser.NEWLINE);
					}
				}

				this.state = 942;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===XDocSyntaxParser.SPACE) {
					{
					this.state = 941;
					this.match(XDocSyntaxParser.SPACE);
					}
				}

				this.state = 944;
				this.type(0);
				this.state = 946;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,192,this._ctx) ) {
				case 1:
					{
					this.state = 945;
					this.match(XDocSyntaxParser.QUESTION);
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public literalExpression(): LiteralExpressionContext {
		let _localctx: LiteralExpressionContext = new LiteralExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, XDocSyntaxParser.RULE_literalExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 950;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocSyntaxParser.NumberLiteral) | (1 << XDocSyntaxParser.BooleanLiteral) | (1 << XDocSyntaxParser.CharacterLiteral) | (1 << XDocSyntaxParser.StringLiteral) | (1 << XDocSyntaxParser.NullLiteral))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public parenthesizedExpression(): ParenthesizedExpressionContext {
		let _localctx: ParenthesizedExpressionContext = new ParenthesizedExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, XDocSyntaxParser.RULE_parenthesizedExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 952;
			this.match(XDocSyntaxParser.PAREN_OPEN);
			this.state = 954;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===XDocSyntaxParser.SPACE) {
				{
				this.state = 953;
				this.match(XDocSyntaxParser.SPACE);
				}
			}

			this.state = 956;
			this.expression(0);
			this.state = 958;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===XDocSyntaxParser.SPACE) {
				{
				this.state = 957;
				this.match(XDocSyntaxParser.SPACE);
				}
			}

			this.state = 960;
			this.match(XDocSyntaxParser.PAREN_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public description(): DescriptionContext {
		let _localctx: DescriptionContext = new DescriptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, XDocSyntaxParser.RULE_description);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 962;
			this.descriptionLine();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public descriptionLine(): DescriptionLineContext {
		let _localctx: DescriptionLineContext = new DescriptionLineContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, XDocSyntaxParser.RULE_descriptionLine);
		let _la: number;
		try {
			this.state = 978;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XDocSyntaxParser.NumberLiteral:
			case XDocSyntaxParser.BooleanLiteral:
			case XDocSyntaxParser.CharacterLiteral:
			case XDocSyntaxParser.StringLiteral:
			case XDocSyntaxParser.NullLiteral:
			case XDocSyntaxParser.ID:
			case XDocSyntaxParser.SPACE:
			case XDocSyntaxParser.TEXT_CONTENT:
			case XDocSyntaxParser.MINUS:
			case XDocSyntaxParser.FORWARD_SLASH:
			case XDocSyntaxParser.COLON:
			case XDocSyntaxParser.PERIOD:
			case XDocSyntaxParser.BRACE_OPEN:
			case XDocSyntaxParser.BRACE_CLOSE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 964;
				this.descriptionLineStart();
				this.state = 968;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocSyntaxParser.NumberLiteral) | (1 << XDocSyntaxParser.BooleanLiteral) | (1 << XDocSyntaxParser.CharacterLiteral) | (1 << XDocSyntaxParser.StringLiteral) | (1 << XDocSyntaxParser.NullLiteral) | (1 << XDocSyntaxParser.ID) | (1 << XDocSyntaxParser.SPACE) | (1 << XDocSyntaxParser.TEXT_CONTENT) | (1 << XDocSyntaxParser.AT) | (1 << XDocSyntaxParser.MINUS) | (1 << XDocSyntaxParser.FORWARD_SLASH) | (1 << XDocSyntaxParser.COLON) | (1 << XDocSyntaxParser.PERIOD) | (1 << XDocSyntaxParser.INLINE_TAG_START) | (1 << XDocSyntaxParser.BRACE_OPEN) | (1 << XDocSyntaxParser.BRACE_CLOSE))) !== 0)) {
					{
					{
					this.state = 965;
					this.descriptionLineElement();
					}
					}
					this.state = 970;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case XDocSyntaxParser.INLINE_TAG_START:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 971;
				this.inlineTag();
				this.state = 975;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocSyntaxParser.NumberLiteral) | (1 << XDocSyntaxParser.BooleanLiteral) | (1 << XDocSyntaxParser.CharacterLiteral) | (1 << XDocSyntaxParser.StringLiteral) | (1 << XDocSyntaxParser.NullLiteral) | (1 << XDocSyntaxParser.ID) | (1 << XDocSyntaxParser.SPACE) | (1 << XDocSyntaxParser.TEXT_CONTENT) | (1 << XDocSyntaxParser.AT) | (1 << XDocSyntaxParser.MINUS) | (1 << XDocSyntaxParser.FORWARD_SLASH) | (1 << XDocSyntaxParser.COLON) | (1 << XDocSyntaxParser.PERIOD) | (1 << XDocSyntaxParser.INLINE_TAG_START) | (1 << XDocSyntaxParser.BRACE_OPEN) | (1 << XDocSyntaxParser.BRACE_CLOSE))) !== 0)) {
					{
					{
					this.state = 972;
					this.descriptionLineElement();
					}
					}
					this.state = 977;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public descriptionLineStart(): DescriptionLineStartContext {
		let _localctx: DescriptionLineStartContext = new DescriptionLineStartContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, XDocSyntaxParser.RULE_descriptionLineStart);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 981;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===XDocSyntaxParser.SPACE) {
				{
				this.state = 980;
				this.match(XDocSyntaxParser.SPACE);
				}
			}

			this.state = 984; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 983;
					this.descriptionText();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 986; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,200,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			this.state = 993;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,202,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					this.state = 991;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XDocSyntaxParser.NumberLiteral:
					case XDocSyntaxParser.BooleanLiteral:
					case XDocSyntaxParser.CharacterLiteral:
					case XDocSyntaxParser.StringLiteral:
					case XDocSyntaxParser.NullLiteral:
					case XDocSyntaxParser.ID:
					case XDocSyntaxParser.TEXT_CONTENT:
					case XDocSyntaxParser.MINUS:
					case XDocSyntaxParser.FORWARD_SLASH:
					case XDocSyntaxParser.COLON:
					case XDocSyntaxParser.PERIOD:
					case XDocSyntaxParser.BRACE_OPEN:
					case XDocSyntaxParser.BRACE_CLOSE:
						{
						this.state = 988;
						this.descriptionText();
						}
						break;
					case XDocSyntaxParser.SPACE:
						{
						this.state = 989;
						this.match(XDocSyntaxParser.SPACE);
						}
						break;
					case XDocSyntaxParser.AT:
						{
						this.state = 990;
						this.match(XDocSyntaxParser.AT);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				this.state = 995;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,202,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public descriptionText(): DescriptionTextContext {
		let _localctx: DescriptionTextContext = new DescriptionTextContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, XDocSyntaxParser.RULE_descriptionText);
		try {
			this.state = 1005;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XDocSyntaxParser.TEXT_CONTENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 996;
				this.match(XDocSyntaxParser.TEXT_CONTENT);
				}
				break;
			case XDocSyntaxParser.ID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 997;
				this.match(XDocSyntaxParser.ID);
				}
				break;
			case XDocSyntaxParser.FORWARD_SLASH:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 998;
				this.match(XDocSyntaxParser.FORWARD_SLASH);
				}
				break;
			case XDocSyntaxParser.BRACE_OPEN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 999;
				this.match(XDocSyntaxParser.BRACE_OPEN);
				}
				break;
			case XDocSyntaxParser.BRACE_CLOSE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1000;
				this.match(XDocSyntaxParser.BRACE_CLOSE);
				}
				break;
			case XDocSyntaxParser.COLON:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1001;
				this.match(XDocSyntaxParser.COLON);
				}
				break;
			case XDocSyntaxParser.MINUS:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1002;
				this.match(XDocSyntaxParser.MINUS);
				}
				break;
			case XDocSyntaxParser.PERIOD:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1003;
				this.match(XDocSyntaxParser.PERIOD);
				}
				break;
			case XDocSyntaxParser.NumberLiteral:
			case XDocSyntaxParser.BooleanLiteral:
			case XDocSyntaxParser.CharacterLiteral:
			case XDocSyntaxParser.StringLiteral:
			case XDocSyntaxParser.NullLiteral:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1004;
				this.literalExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public descriptionLineElement(): DescriptionLineElementContext {
		let _localctx: DescriptionLineElementContext = new DescriptionLineElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, XDocSyntaxParser.RULE_descriptionLineElement);
		try {
			this.state = 1009;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XDocSyntaxParser.INLINE_TAG_START:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1007;
				this.inlineTag();
				}
				break;
			case XDocSyntaxParser.NumberLiteral:
			case XDocSyntaxParser.BooleanLiteral:
			case XDocSyntaxParser.CharacterLiteral:
			case XDocSyntaxParser.StringLiteral:
			case XDocSyntaxParser.NullLiteral:
			case XDocSyntaxParser.ID:
			case XDocSyntaxParser.SPACE:
			case XDocSyntaxParser.TEXT_CONTENT:
			case XDocSyntaxParser.AT:
			case XDocSyntaxParser.MINUS:
			case XDocSyntaxParser.FORWARD_SLASH:
			case XDocSyntaxParser.COLON:
			case XDocSyntaxParser.PERIOD:
			case XDocSyntaxParser.BRACE_OPEN:
			case XDocSyntaxParser.BRACE_CLOSE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1008;
				this.descriptionLineText();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public descriptionLineText(): DescriptionLineTextContext {
		let _localctx: DescriptionLineTextContext = new DescriptionLineTextContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, XDocSyntaxParser.RULE_descriptionLineText);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1014; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					this.state = 1014;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XDocSyntaxParser.NumberLiteral:
					case XDocSyntaxParser.BooleanLiteral:
					case XDocSyntaxParser.CharacterLiteral:
					case XDocSyntaxParser.StringLiteral:
					case XDocSyntaxParser.NullLiteral:
					case XDocSyntaxParser.ID:
					case XDocSyntaxParser.TEXT_CONTENT:
					case XDocSyntaxParser.MINUS:
					case XDocSyntaxParser.FORWARD_SLASH:
					case XDocSyntaxParser.COLON:
					case XDocSyntaxParser.PERIOD:
					case XDocSyntaxParser.BRACE_OPEN:
					case XDocSyntaxParser.BRACE_CLOSE:
						{
						this.state = 1011;
						this.descriptionText();
						}
						break;
					case XDocSyntaxParser.SPACE:
						{
						this.state = 1012;
						this.match(XDocSyntaxParser.SPACE);
						}
						break;
					case XDocSyntaxParser.AT:
						{
						this.state = 1013;
						this.match(XDocSyntaxParser.AT);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1016; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,206,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public inlineTag(): InlineTagContext {
		let _localctx: InlineTagContext = new InlineTagContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, XDocSyntaxParser.RULE_inlineTag);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1018;
			this.match(XDocSyntaxParser.INLINE_TAG_START);
			this.state = 1019;
			this.inlineTagName();
			this.state = 1020;
			this.match(XDocSyntaxParser.SPACE);
			this.state = 1022;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocSyntaxParser.ID) | (1 << XDocSyntaxParser.NEWLINE) | (1 << XDocSyntaxParser.SPACE) | (1 << XDocSyntaxParser.TEXT_CONTENT) | (1 << XDocSyntaxParser.FORWARD_SLASH) | (1 << XDocSyntaxParser.PERIOD) | (1 << XDocSyntaxParser.BRACE_OPEN))) !== 0)) {
				{
				this.state = 1021;
				this.inlineTagBody();
				}
			}

			this.state = 1024;
			this.match(XDocSyntaxParser.BRACE_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public inlineTagName(): InlineTagNameContext {
		let _localctx: InlineTagNameContext = new InlineTagNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, XDocSyntaxParser.RULE_inlineTagName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1026;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public inlineTagBody(): InlineTagBodyContext {
		let _localctx: InlineTagBodyContext = new InlineTagBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, XDocSyntaxParser.RULE_inlineTagBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1029; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1028;
				this.braceBody();
				}
				}
				this.state = 1031; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( (((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocSyntaxParser.ID) | (1 << XDocSyntaxParser.NEWLINE) | (1 << XDocSyntaxParser.SPACE) | (1 << XDocSyntaxParser.TEXT_CONTENT) | (1 << XDocSyntaxParser.FORWARD_SLASH) | (1 << XDocSyntaxParser.PERIOD) | (1 << XDocSyntaxParser.BRACE_OPEN))) !== 0) );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public braceExpression(): BraceExpressionContext {
		let _localctx: BraceExpressionContext = new BraceExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, XDocSyntaxParser.RULE_braceExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1033;
			this.match(XDocSyntaxParser.BRACE_OPEN);
			this.state = 1037;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocSyntaxParser.ID) | (1 << XDocSyntaxParser.NEWLINE) | (1 << XDocSyntaxParser.SPACE) | (1 << XDocSyntaxParser.TEXT_CONTENT) | (1 << XDocSyntaxParser.FORWARD_SLASH) | (1 << XDocSyntaxParser.PERIOD) | (1 << XDocSyntaxParser.BRACE_OPEN))) !== 0)) {
				{
				{
				this.state = 1034;
				this.braceBody();
				}
				}
				this.state = 1039;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1040;
			this.match(XDocSyntaxParser.BRACE_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public braceBody(): BraceBodyContext {
		let _localctx: BraceBodyContext = new BraceBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, XDocSyntaxParser.RULE_braceBody);
		try {
			let _alt: number;
			this.state = 1051;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XDocSyntaxParser.BRACE_OPEN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1042;
				this.braceExpression();
				}
				break;
			case XDocSyntaxParser.ID:
			case XDocSyntaxParser.NEWLINE:
			case XDocSyntaxParser.SPACE:
			case XDocSyntaxParser.TEXT_CONTENT:
			case XDocSyntaxParser.FORWARD_SLASH:
			case XDocSyntaxParser.PERIOD:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1043;
				this.braceText();
				this.state = 1048;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,210,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 1044;
						this.match(XDocSyntaxParser.NEWLINE);
						this.state = 1045;
						this.braceText();
						}
						} 
					}
					this.state = 1050;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,210,this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	
	public braceText(): BraceTextContext {
		let _localctx: BraceTextContext = new BraceTextContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, XDocSyntaxParser.RULE_braceText);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1053;
			_la = this._input.LA(1);
			if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XDocSyntaxParser.ID) | (1 << XDocSyntaxParser.NEWLINE) | (1 << XDocSyntaxParser.SPACE) | (1 << XDocSyntaxParser.TEXT_CONTENT) | (1 << XDocSyntaxParser.FORWARD_SLASH) | (1 << XDocSyntaxParser.PERIOD))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 12:
			return this.type_sempred(_localctx as TypeContext, predIndex);

		case 27:
			return this.notArrayType_sempred(_localctx as NotArrayTypeContext, predIndex);

		case 30:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 8);
		}
		return true;
	}
	private notArrayType_sempred(_localctx: NotArrayTypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 7);

		case 3:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03%\u0422\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04"+
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04"+
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04"+
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#"+
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+"+
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044"+
		"\t4\x03\x02\x03\x02\x03\x02\x05\x02l\n\x02\x03\x02\x03\x02\x05\x02p\n"+
		"\x02\x03\x03\x07\x03s\n\x03\f\x03\x0E\x03v\v\x03\x03\x03\x03\x03\x03\x04"+
		"\x03\x04\x03\x05\x03\x05\x03\x05\x07\x05\x7F\n\x05\f\x05\x0E\x05\x82\v"+
		"\x05\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\x88\n\x06\x03\x06\x03\x06"+
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06"+
		"\x03\x06\x05\x06\x96\n\x06\x03\x06\x03\x06\x05\x06\x9A\n\x06\x03\x06\x03"+
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xA3\n\x06\x03\x06"+
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06"+
		"\x05\x06\xAF\n\x06\x03\x06\x03\x06\x03\x06\x05\x06\xB4\n\x06\x03\x06\x03"+
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xBE\n\x06"+
		"\x03\x06\x03\x06\x05\x06\xC2\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03"+
		"\x06\x03\x06\x05\x06\xCA\n\x06\x03\x06\x03\x06\x05\x06\xCE\n\x06\x03\x06"+
		"\x03\x06\x05\x06\xD2\n\x06\x03\x06\x03\x06\x05\x06\xD6\n\x06\x03\x06\x03"+
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xDE\n\x06\x03\x06\x03\x06"+
		"\x05\x06\xE2\n\x06\x03\x06\x03\x06\x03\x06\x05\x06\xE7\n\x06\x03\x06\x03"+
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\xF1\n\x06"+
		"\x03\x06\x03\x06\x05\x06\xF5\n\x06\x03\x06\x03\x06\x05\x06\xF9\n\x06\x03"+
		"\x06\x03\x06\x05\x06\xFD\n\x06\x03\x06\x03\x06\x03\x06\x05\x06\u0102\n"+
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u010A\n\x06"+
		"\x03\x06\x03\x06\x05\x06\u010E\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05"+
		"\x06\u0114\n\x06\x03\x06\x03\x06\x05\x06\u0118\n\x06\x03\x06\x03\x06\x03"+
		"\x06\x05\x06\u011D\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06\u0123"+
		"\n\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x05\b\u012B\n\b\x03\t"+
		"\x03\t\x03\t\x06\t\u0130\n\t\r\t\x0E\t\u0131\x03\t\x03\t\x03\t\x06\t\u0137"+
		"\n\t\r\t\x0E\t\u0138\x05\t\u013B\n\t\x03\n\x03\n\x03\v\x03\v\x05\v\u0141"+
		"\n\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03"+
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0150\n\x0E\x03\x0E\x03\x0E\x05\x0E"+
		"\u0154\n\x0E\x03\x0E\x05\x0E\u0157\n\x0E\x03\x0E\x05\x0E\u015A\n\x0E\x03"+
		"\x0E\x03\x0E\x05\x0E\u015E\n\x0E\x03\x0E\x05\x0E\u0161\n\x0E\x03\x0E\x05"+
		"\x0E\u0164\n\x0E\x03\x0E\x07\x0E\u0167\n\x0E\f\x0E\x0E\x0E\u016A\v\x0E"+
		"\x03\x0F\x03\x0F\x05\x0F\u016E\n\x0F\x03\x0F\x05\x0F\u0171\n\x0F\x03\x0F"+
		"\x05\x0F\u0174\n\x0F\x03\x0F\x05\x0F\u0177\n\x0F\x03\x0F\x05\x0F\u017A"+
		"\n\x0F\x03\x0F\x05\x0F\u017D\n\x0F\x03\x0F\x05\x0F\u0180\n\x0F\x03\x0F"+
		"\x03\x0F\x05\x0F\u0184\n\x0F\x03\x0F\x05\x0F\u0187\n\x0F\x03\x0F\x05\x0F"+
		"\u018A\n\x0F\x03\x0F\x03\x0F\x05\x0F\u018E\n\x0F\x03\x0F\x05\x0F\u0191"+
		"\n\x0F\x03\x0F\x05\x0F\u0194\n\x0F\x03\x0F\x03\x0F\x05\x0F\u0198\n\x0F"+
		"\x03\x0F\x03\x0F\x05\x0F\u019C\n\x0F\x03\x0F\x05\x0F\u019F\n\x0F\x03\x0F"+
		"\x05\x0F\u01A2\n\x0F\x03\x0F\x03\x0F\x05\x0F\u01A6\n\x0F\x03\x0F\x05\x0F"+
		"\u01A9\n\x0F\x03\x0F\x05\x0F\u01AC\n\x0F\x03\x0F\x03\x0F\x05\x0F\u01B0"+
		"\n\x0F\x05\x0F\u01B2\n\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u01B7\n\x10"+
		"\x03\x10\x05\x10\u01BA\n\x10\x03\x10\x07\x10\u01BD\n\x10\f\x10\x0E\x10"+
		"\u01C0\v\x10\x03\x11\x03\x11\x05\x11\u01C4\n\x11\x03\x11\x03\x11\x05\x11"+
		"\u01C8\n\x11\x03\x11\x05\x11\u01CB\n\x11\x03\x12\x05\x12\u01CE\n\x12\x03"+
		"\x12\x03\x12\x05\x12\u01D2\n\x12\x03\x12\x03\x12\x05\x12\u01D6\n\x12\x03"+
		"\x12\x03\x12\x03\x13\x03\x13\x05\x13\u01DC\n\x13\x03\x13\x03\x13\x05\x13"+
		"\u01E0\n\x13\x03\x13\x07\x13\u01E3\n\x13\f\x13\x0E\x13\u01E6\v\x13\x03"+
		"\x13\x03\x13\x05\x13\u01EA\n\x13\x03\x13\x03\x13\x05\x13\u01EE\n\x13\x03"+
		"\x13\x03\x13\x05\x13\u01F2\n\x13\x03\x13\x03\x13\x05\x13\u01F6\n\x13\x03"+
		"\x13\x07\x13\u01F9\n\x13\f\x13\x0E\x13\u01FC\v\x13\x03\x13\x03\x13\x05"+
		"\x13\u0200\n\x13\x03\x13\x03\x13\x05\x13\u0204\n\x13\x03\x13\x03\x13\x05"+
		"\x13\u0208\n\x13\x03\x13\x03\x13\x05\x13\u020C\n\x13\x03\x13\x07\x13\u020F"+
		"\n\x13\f\x13\x0E\x13\u0212\v\x13\x03\x13\x03\x13\x05\x13\u0216\n\x13\x03"+
		"\x13\x03\x13\x05\x13\u021A\n\x13\x03\x13\x03\x13\x05\x13\u021E\n\x13\x03"+
		"\x13\x03\x13\x05\x13\u0222\n\x13\x03\x13\x07\x13\u0225\n\x13\f\x13\x0E"+
		"\x13\u0228\v\x13\x05\x13\u022A\n\x13\x03\x14\x03\x14\x03\x14\x05\x14\u022F"+
		"\n\x14\x03\x15\x03\x15\x05\x15\u0233\n\x15\x03\x16\x03\x16\x03\x17\x03"+
		"\x17\x05\x17\u0239\n\x17\x03\x17\x03\x17\x05\x17\u023D\n\x17\x03\x17\x03"+
		"\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x05\x19\u0246\n\x19\x03\x19"+
		"\x05\x19\u0249\n\x19\x03\x19\x05\x19\u024C\n\x19\x03\x19\x05\x19\u024F"+
		"\n\x19\x03\x19\x05\x19\u0252\n\x19\x03\x19\x05\x19\u0255\n\x19\x03\x19"+
		"\x05\x19\u0258\n\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x05\x1A\u025E\n\x1A"+
		"\x03\x1A\x03\x1A\x05\x1A\u0262\n\x1A\x03\x1A\x05\x1A\u0265\n\x1A\x03\x1A"+
		"\x05\x1A\u0268\n\x1A\x03\x1A\x07\x1A\u026B\n\x1A\f\x1A\x0E\x1A\u026E\v"+
		"\x1A\x03\x1B\x03\x1B\x05\x1B\u0272\n\x1B\x03\x1B\x05\x1B\u0275\n\x1B\x03"+
		"\x1B\x03\x1B\x05\x1B\u0279\n\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x05\x1C"+
		"\u027F\n\x1C\x03\x1C\x05\x1C\u0282\n\x1C\x03\x1C\x05\x1C\u0285\n\x1C\x03"+
		"\x1C\x05\x1C\u0288\n\x1C\x03\x1C\x03\x1C\x05\x1C\u028C\n\x1C\x03\x1C\x05"+
		"\x1C\u028F\n\x1C\x03\x1C\x05\x1C\u0292\n\x1C\x03\x1C\x07\x1C\u0295\n\x1C"+
		"\f\x1C\x0E\x1C\u0298\v\x1C\x03\x1C\x05\x1C\u029B\n\x1C\x03\x1C\x05\x1C"+
		"\u029E\n\x1C\x03\x1C\x05\x1C\u02A1\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C"+
		"\x06\x1C\u02A7\n\x1C\r\x1C\x0E\x1C\u02A8\x05\x1C\u02AB\n\x1C\x03\x1D\x03"+
		"\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u02B4\n\x1D\x03\x1D"+
		"\x03\x1D\x05\x1D\u02B8\n\x1D\x03\x1D\x05\x1D\u02BB\n\x1D\x03\x1D\x05\x1D"+
		"\u02BE\n\x1D\x03\x1D\x03\x1D\x05\x1D\u02C2\n\x1D\x03\x1D\x05\x1D\u02C5"+
		"\n\x1D\x03\x1D\x05\x1D\u02C8\n\x1D\x03\x1D\x07\x1D\u02CB\n\x1D\f\x1D\x0E"+
		"\x1D\u02CE\v\x1D\x03\x1E\x03\x1E\x03\x1E\x06\x1E\u02D3\n\x1E\r\x1E\x0E"+
		"\x1E\u02D4\x03\x1E\x03\x1E\x03\x1E\x06\x1E\u02DA\n\x1E\r\x1E\x0E\x1E\u02DB"+
		"\x05\x1E\u02DE\n\x1E\x03\x1F\x03\x1F\x05\x1F\u02E2\n\x1F\x03 \x03 \x03"+
		" \x03 \x03 \x03 \x03 \x05 \u02EB\n \x03 \x03 \x05 \u02EF\n \x03 \x03 "+
		"\x05 \u02F3\n \x03 \x03 \x03 \x05 \u02F8\n \x03 \x03 \x05 \u02FC\n \x03"+
		" \x07 \u02FF\n \f \x0E \u0302\v \x03!\x03!\x03!\x03\"\x03\"\x05\"\u0309"+
		"\n\"\x03\"\x05\"\u030C\n\"\x03\"\x05\"\u030F\n\"\x03\"\x05\"\u0312\n\""+
		"\x03\"\x03\"\x05\"\u0316\n\"\x03\"\x05\"\u0319\n\"\x03\"\x05\"\u031C\n"+
		"\"\x03\"\x07\"\u031F\n\"\f\"\x0E\"\u0322\v\"\x03\"\x05\"\u0325\n\"\x03"+
		"\"\x05\"\u0328\n\"\x03\"\x05\"\u032B\n\"\x03\"\x03\"\x03#\x03#\x05#\u0331"+
		"\n#\x03#\x05#\u0334\n#\x03#\x05#\u0337\n#\x03#\x05#\u033A\n#\x03#\x05"+
		"#\u033D\n#\x03#\x05#\u0340\n#\x03#\x05#\u0343\n#\x03#\x03#\x03$\x03$\x05"+
		"$\u0349\n$\x03$\x03$\x05$\u034D\n$\x03$\x05$\u0350\n$\x03$\x05$\u0353"+
		"\n$\x03$\x07$\u0356\n$\f$\x0E$\u0359\v$\x03%\x03%\x05%\u035D\n%\x03%\x03"+
		"%\x05%\u0361\n%\x03%\x03%\x03%\x03%\x05%\u0367\n%\x03%\x03%\x05%\u036B"+
		"\n%\x03%\x03%\x05%\u036F\n%\x03&\x03&\x05&\u0373\n&\x03&\x05&\u0376\n"+
		"&\x03&\x05&\u0379\n&\x03&\x05&\u037C\n&\x03&\x05&\u037F\n&\x03&\x05&\u0382"+
		"\n&\x03&\x05&\u0385\n&\x03&\x03&\x05&\u0389\n&\x03&\x05&\u038C\n&\x03"+
		"&\x05&\u038F\n&\x03&\x03&\x05&\u0393\n&\x03&\x05&\u0396\n&\x03&\x05&\u0399"+
		"\n&\x03&\x03&\x05&\u039D\n&\x03&\x03&\x05&\u03A1\n&\x03&\x05&\u03A4\n"+
		"&\x03&\x05&\u03A7\n&\x03&\x03&\x05&\u03AB\n&\x03&\x05&\u03AE\n&\x03&\x05"+
		"&\u03B1\n&\x03&\x03&\x05&\u03B5\n&\x05&\u03B7\n&\x03\'\x03\'\x03(\x03"+
		"(\x05(\u03BD\n(\x03(\x03(\x05(\u03C1\n(\x03(\x03(\x03)\x03)\x03*\x03*"+
		"\x07*\u03C9\n*\f*\x0E*\u03CC\v*\x03*\x03*\x07*\u03D0\n*\f*\x0E*\u03D3"+
		"\v*\x05*\u03D5\n*\x03+\x05+\u03D8\n+\x03+\x06+\u03DB\n+\r+\x0E+\u03DC"+
		"\x03+\x03+\x03+\x07+\u03E2\n+\f+\x0E+\u03E5\v+\x03,\x03,\x03,\x03,\x03"+
		",\x03,\x03,\x03,\x03,\x05,\u03F0\n,\x03-\x03-\x05-\u03F4\n-\x03.\x03."+
		"\x03.\x06.\u03F9\n.\r.\x0E.\u03FA\x03/\x03/\x03/\x03/\x05/\u0401\n/\x03"+
		"/\x03/\x030\x030\x031\x061\u0408\n1\r1\x0E1\u0409\x032\x032\x072\u040E"+
		"\n2\f2\x0E2\u0411\v2\x032\x032\x033\x033\x033\x033\x073\u0419\n3\f3\x0E"+
		"3\u041C\v3\x053\u041E\n3\x034\x034\x034\x02\x02\x05\x1A8>5\x02\x02\x04"+
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02"+
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02."+
		"\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02"+
		"J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02"+
		"f\x02\x02\t\x03\x02\f\r\x03\x02\x19\x1A\x04\x02\x12\x12\x19\x19\x03\x02"+
		"\x12\x13\x03\x02\x10\x11\x04\x02\x03\x03\x06\t\x05\x02\v\x0E\x13\x13\x15"+
		"\x15\u04E6\x02o\x03\x02\x02\x02\x04t\x03\x02\x02\x02\x06y\x03\x02\x02"+
		"\x02\b{\x03\x02\x02\x02\n\u0122\x03\x02\x02\x02\f\u0124\x03\x02\x02\x02"+
		"\x0E\u012A\x03\x02\x02\x02\x10\u013A\x03\x02\x02\x02\x12\u013C\x03\x02"+
		"\x02\x02\x14\u0140\x03\x02\x02\x02\x16\u0142\x03\x02\x02\x02\x18\u0144"+
		"\x03\x02\x02\x02\x1A\u014F\x03\x02\x02\x02\x1C\u01B1\x03\x02\x02\x02\x1E"+
		"\u01B3\x03\x02\x02\x02 \u01C1\x03\x02\x02\x02\"\u01CD\x03\x02\x02\x02"+
		"$\u0229\x03\x02\x02\x02&\u022E\x03\x02\x02\x02(\u0232\x03\x02\x02\x02"+
		"*\u0234\x03\x02\x02\x02,\u0236\x03\x02\x02\x02.\u0240\x03\x02\x02\x02"+
		"0\u0243\x03\x02\x02\x022\u025B\x03\x02\x02\x024\u026F\x03\x02\x02\x02"+
		"6\u02AA\x03\x02\x02\x028\u02B3\x03\x02\x02\x02:\u02DD\x03\x02\x02\x02"+
		"<\u02E1\x03\x02\x02\x02>\u02EA\x03\x02\x02\x02@\u0303\x03\x02\x02\x02"+
		"B\u0306\x03\x02\x02\x02D\u032E\x03\x02\x02\x02F\u0346\x03\x02\x02\x02"+
		"H\u036E\x03\x02\x02\x02J\u03B6\x03\x02\x02\x02L\u03B8\x03\x02\x02\x02"+
		"N\u03BA\x03\x02\x02\x02P\u03C4\x03\x02\x02\x02R\u03D4\x03\x02\x02\x02"+
		"T\u03D7\x03\x02\x02\x02V\u03EF\x03\x02\x02\x02X\u03F3\x03\x02\x02\x02"+
		"Z\u03F8\x03\x02\x02\x02\\\u03FC\x03\x02\x02\x02^\u0404\x03\x02\x02\x02"+
		"`\u0407\x03\x02\x02\x02b\u040B\x03\x02\x02\x02d\u041D\x03\x02\x02\x02"+
		"f\u041F\x03\x02\x02\x02hp\x07\x02\x02\x03ik\x05\x04\x03\x02jl\x07\f\x02"+
		"\x02kj\x03\x02\x02\x02kl\x03\x02\x02\x02lm\x03\x02\x02\x02mn\x07\x02\x02"+
		"\x03np\x03\x02\x02\x02oh\x03\x02\x02\x02oi\x03\x02\x02\x02p\x03\x03\x02"+
		"\x02\x02qs\x05\x06\x04\x02rq\x03\x02\x02\x02sv\x03\x02\x02\x02tr\x03\x02"+
		"\x02\x02tu\x03\x02\x02\x02uw\x03\x02\x02\x02vt\x03\x02\x02\x02wx\x05\b"+
		"\x05\x02x\x05\x03\x02\x02\x02yz\t\x02\x02\x02z\x07\x03\x02\x02\x02{\x80"+
		"\x05\n\x06\x02|}\x07\f\x02\x02}\x7F\x05\n\x06\x02~|\x03\x02\x02\x02\x7F"+
		"\x82\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81"+
		"\t\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02\x83\u0123\x05\f\x07\x02\x84"+
		"\x85\x05\f\x07\x02\x85\x87\x07\r\x02\x02\x86\x88\x07\f\x02\x02\x87\x86"+
		"\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8A"+
		"\x07\x11\x02\x02\x8A\x8B\x07\r\x02\x02\x8B\x8C\x05P)\x02\x8C\u0123\x03"+
		"\x02\x02\x02\x8D\x8E\x05\f\x07\x02\x8E\x8F\x07\r\x02\x02\x8F\x90\x05\x0E"+
		"\b\x02\x90\u0123\x03\x02\x02\x02\x91\x92\x05\f\x07\x02\x92\x93\x07\r\x02"+
		"\x02\x93\x95\x05\x0E\b\x02\x94\x96\x07\r\x02\x02\x95\x94\x03\x02\x02\x02"+
		"\x95\x96\x03\x02\x02\x02\x96\x97\x03\x02\x02\x02\x97\x99\x07\x17\x02\x02"+
		"\x98\x9A\x07\r\x02\x02\x99\x98\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02"+
		"\x9A\x9B\x03\x02\x02\x02\x9B\x9C\x05> \x02\x9C\u0123\x03\x02\x02\x02\x9D"+
		"\x9E\x05\f\x07\x02\x9E\x9F\x07\r\x02\x02\x9F\xA0\x05\x0E\b\x02\xA0\xA2"+
		"\x07\r\x02\x02\xA1\xA3\x07\f\x02\x02\xA2\xA1\x03\x02\x02\x02\xA2\xA3\x03"+
		"\x02\x02\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA5\x07\x11\x02\x02\xA5\xA6\x07"+
		"\r\x02\x02\xA6\xA7\x05P)\x02\xA7\u0123\x03\x02\x02\x02\xA8\xA9\x05\f\x07"+
		"\x02\xA9\xAA\x07\r\x02\x02\xAA\xAB\x05\x0E\b\x02\xAB\xAC\x07\r\x02\x02"+
		"\xAC\xAE\x07\x17\x02\x02\xAD\xAF\x07\r\x02\x02\xAE\xAD\x03\x02\x02\x02"+
		"\xAE\xAF\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB1\x05> \x02\xB1"+
		"\xB3\x07\r\x02\x02\xB2\xB4\x07\f\x02\x02\xB3\xB2\x03\x02\x02\x02\xB3\xB4"+
		"\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB6\x07\x11\x02\x02\xB6\xB7"+
		"\x07\r\x02\x02\xB7\xB8\x05P)\x02\xB8\u0123\x03\x02\x02\x02\xB9\xBA\x05"+
		"\f\x07\x02\xBA\xBB\x07\r\x02\x02\xBB\xBD\x05\x0E\b\x02\xBC\xBE\x07\r\x02"+
		"\x02\xBD\xBC\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xBF\x03\x02\x02"+
		"\x02\xBF\xC1\x07\x14\x02\x02\xC0\xC2\x07\r\x02\x02\xC1\xC0\x03\x02\x02"+
		"\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC3\xC4\x05\x1A\x0E"+
		"\x02\xC4\u0123\x03\x02\x02\x02\xC5\xC6\x05\f\x07\x02\xC6\xC7\x07\r\x02"+
		"\x02\xC7\xC9\x05\x0E\b\x02\xC8\xCA\x07\r\x02\x02\xC9\xC8\x03\x02\x02\x02"+
		"\xC9\xCA\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCD\x07\x14\x02\x02"+
		"\xCC\xCE\x07\r\x02\x02\xCD\xCC\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02"+
		"\xCE\xCF\x03\x02\x02\x02\xCF\xD1\x05\x1A\x0E\x02\xD0\xD2\x07\r\x02\x02"+
		"\xD1\xD0\x03\x02\x02\x02\xD1\xD2\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02"+
		"\xD3\xD5\x07\x17\x02\x02\xD4\xD6\x07\r\x02\x02\xD5\xD4\x03\x02\x02\x02"+
		"\xD5\xD6\x03\x02\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD8\x05> \x02\xD8"+
		"\u0123\x03\x02\x02\x02\xD9\xDA\x05\f\x07\x02\xDA\xDB\x07\r\x02\x02\xDB"+
		"\xDD\x05\x0E\b\x02\xDC\xDE\x07\r\x02\x02\xDD\xDC\x03\x02\x02\x02\xDD\xDE"+
		"\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE1\x07\x14\x02\x02\xE0\xE2"+
		"\x07\r\x02\x02\xE1\xE0\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE3"+
		"\x03\x02\x02\x02\xE3\xE4\x05\x1A\x0E\x02\xE4\xE6\x07\r\x02\x02\xE5\xE7"+
		"\x07\f\x02\x02\xE6\xE5\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xE8"+
		"\x03\x02\x02\x02\xE8\xE9\x07\x11\x02\x02\xE9\xEA\x07\r\x02\x02\xEA\xEB"+
		"\x05P)\x02\xEB\u0123\x03\x02\x02\x02\xEC\xED\x05\f\x07\x02\xED\xEE\x07"+
		"\r\x02\x02\xEE\xF0\x05\x0E\b\x02\xEF\xF1\x07\r\x02\x02\xF0\xEF\x03\x02"+
		"\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF4\x07\x14"+
		"\x02\x02\xF3\xF5\x07\r\x02\x02\xF4\xF3\x03\x02\x02\x02\xF4\xF5\x03\x02"+
		"\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF8\x05\x1A\x0E\x02\xF7\xF9\x07\r"+
		"\x02\x02\xF8\xF7\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFA\x03\x02"+
		"\x02\x02\xFA\xFC\x07\x17\x02\x02\xFB\xFD\x07\r\x02\x02\xFC\xFB\x03\x02"+
		"\x02\x02\xFC\xFD\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\xFF\x05>"+
		" \x02\xFF\u0101\x07\r\x02\x02\u0100\u0102\x07\f\x02\x02\u0101\u0100\x03"+
		"\x02\x02\x02\u0101\u0102\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103"+
		"\u0104\x07\x11\x02\x02\u0104\u0105\x07\r\x02\x02\u0105\u0106\x05P)\x02"+
		"\u0106\u0123\x03\x02\x02\x02\u0107\u0109\x05\f\x07\x02\u0108\u010A\x07"+
		"\r\x02\x02\u0109\u0108\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A"+
		"\u010B\x03\x02\x02\x02\u010B\u010D\x07\x14\x02\x02\u010C\u010E\x07\r\x02"+
		"\x02\u010D\u010C\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\u010F"+
		"\x03\x02\x02\x02\u010F\u0110\x05\x1A\x0E\x02\u0110\u0123\x03\x02\x02\x02"+
		"\u0111\u0113\x05\f\x07\x02\u0112\u0114\x07\r\x02\x02\u0113\u0112\x03\x02"+
		"\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115"+
		"\u0117\x07\x14\x02\x02\u0116\u0118\x07\r\x02\x02\u0117\u0116\x03\x02\x02"+
		"\x02\u0117\u0118\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011A"+
		"\x05\x1A\x0E\x02\u011A\u011C\x07\r\x02\x02\u011B\u011D\x07\f\x02\x02\u011C"+
		"\u011B\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u011E\x03\x02"+
		"\x02\x02\u011E\u011F\x07\x11\x02\x02\u011F\u0120\x07\r\x02\x02\u0120\u0121"+
		"\x05P)\x02\u0121\u0123\x03\x02\x02\x02\u0122\x83\x03\x02\x02\x02\u0122"+
		"\x84\x03\x02\x02\x02\u0122\x8D\x03\x02\x02\x02\u0122\x91\x03\x02\x02\x02"+
		"\u0122\x9D\x03\x02\x02\x02\u0122\xA8\x03\x02\x02\x02\u0122\xB9\x03\x02"+
		"\x02\x02\u0122\xC5\x03\x02\x02\x02\u0122\xD9\x03\x02\x02\x02\u0122\xEC"+
		"\x03\x02\x02\x02\u0122\u0107\x03\x02\x02\x02\u0122\u0111\x03\x02\x02\x02"+
		"\u0123\v\x03\x02\x02\x02\u0124\u0125\x07\x0F\x02\x02\u0125\u0126\x05\x16"+
		"\f\x02\u0126\r\x03\x02\x02\x02\u0127\u012B\x05\x10\t\x02\u0128\u012B\x05"+
		"\x12\n\x02\u0129\u012B\x05\x16\f\x02\u012A\u0127\x03\x02\x02\x02\u012A"+
		"\u0128\x03\x02\x02\x02\u012A\u0129\x03\x02\x02\x02\u012B\x0F\x03\x02\x02"+
		"\x02\u012C\u012F\x05\x12\n\x02\u012D\u012E\x07\x15\x02\x02\u012E\u0130"+
		"\x05\x14\v\x02\u012F\u012D\x03\x02\x02\x02\u0130\u0131\x03\x02\x02\x02"+
		"\u0131\u012F\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u013B\x03"+
		"\x02\x02\x02\u0133\u0136\x05\x16\f\x02\u0134\u0135\x07\x15\x02\x02\u0135"+
		"\u0137\x05\x14\v\x02\u0136\u0134\x03\x02\x02\x02\u0137\u0138\x03\x02\x02"+
		"\x02\u0138\u0136\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139\u013B"+
		"\x03\x02\x02\x02\u013A\u012C\x03\x02\x02\x02\u013A\u0133\x03\x02\x02\x02"+
		"\u013B\x11\x03\x02\x02\x02\u013C\u013D\x05\x18\r\x02\u013D\x13\x03\x02"+
		"\x02\x02\u013E\u0141\x05\x12\n\x02\u013F\u0141\x05\x16\f\x02\u0140\u013E"+
		"\x03\x02\x02\x02\u0140\u013F\x03\x02\x02\x02\u0141\x15\x03\x02\x02\x02"+
		"\u0142\u0143\x07\v\x02\x02\u0143\x17\x03\x02\x02\x02\u0144\u0145\x05\x16"+
		"\f\x02\u0145\u0146\x07\x18\x02\x02\u0146\x19\x03\x02\x02\x02\u0147\u0148"+
		"\b\x0E\x01\x02\u0148\u0150\x05\x1C\x0F\x02\u0149\u0150\x05\"\x12\x02\u014A"+
		"\u0150\x05&\x14\x02\u014B\u0150\x05,\x17\x02\u014C\u0150\x05.\x18\x02"+
		"\u014D\u0150\x050\x19\x02\u014E\u0150\x056\x1C\x02\u014F\u0147\x03\x02"+
		"\x02\x02\u014F\u0149\x03\x02\x02\x02\u014F\u014A\x03\x02\x02\x02\u014F"+
		"\u014B\x03\x02\x02\x02\u014F\u014C\x03\x02\x02\x02\u014F\u014D\x03\x02"+
		"\x02\x02\u014F\u014E\x03\x02\x02\x02\u0150\u0168\x03\x02\x02\x02\u0151"+
		"\u0153\f\n\x02\x02\u0152\u0154\x07\r\x02\x02\u0153\u0152\x03\x02\x02\x02"+
		"\u0153\u0154\x03\x02\x02\x02\u0154\u0156\x03\x02\x02\x02\u0155\u0157\x07"+
		"\f\x02\x02\u0156\u0155\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157"+
		"\u0159\x03\x02\x02\x02\u0158\u015A\x07\r\x02\x02\u0159\u0158\x03\x02\x02"+
		"\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B\u015D"+
		"\t\x03\x02\x02\u015C\u015E\x07\r\x02\x02\u015D\u015C\x03\x02\x02\x02\u015D"+
		"\u015E\x03\x02\x02\x02\u015E\u0160\x03\x02\x02\x02\u015F\u0161\x07\f\x02"+
		"\x02\u0160\u015F\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02\u0161\u0163"+
		"\x03\x02\x02\x02\u0162\u0164\x07\r\x02\x02\u0163\u0162\x03\x02\x02\x02"+
		"\u0163\u0164\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0167\x05"+
		"\x1A\x0E\v\u0166\u0151\x03\x02\x02\x02\u0167\u016A\x03\x02\x02\x02\u0168"+
		"\u0166\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\x1B\x03\x02\x02"+
		"\x02\u016A\u0168\x03\x02\x02\x02\u016B\u016D\x07 \x02\x02\u016C\u016E"+
		"\x07\r\x02\x02\u016D\u016C\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02"+
		"\u016E\u0170\x03\x02\x02\x02\u016F\u0171\x07\f\x02\x02\u0170\u016F\x03"+
		"\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171\u0173\x03\x02\x02\x02\u0172"+
		"\u0174\x07\r\x02\x02\u0173\u0172\x03\x02\x02\x02\u0173\u0174\x03\x02\x02"+
		"\x02\u0174\u0176\x03\x02\x02\x02\u0175\u0177\x05\x1E\x10\x02\u0176\u0175"+
		"\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0179\x03\x02\x02\x02"+
		"\u0178\u017A\x07\r\x02\x02\u0179\u0178\x03\x02\x02\x02\u0179\u017A\x03"+
		"\x02\x02\x02\u017A\u017C\x03\x02\x02\x02\u017B\u017D\x07\f\x02\x02\u017C"+
		"\u017B\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02\u017D\u017F\x03\x02"+
		"\x02\x02\u017E\u0180\x07\r\x02\x02\u017F\u017E\x03\x02\x02\x02\u017F\u0180"+
		"\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181\u0183\x07!\x02\x02"+
		"\u0182\u0184\x07\r\x02\x02\u0183\u0182\x03\x02\x02\x02\u0183\u0184\x03"+
		"\x02\x02\x02\u0184\u0186\x03\x02\x02\x02\u0185\u0187\x07\f\x02\x02\u0186"+
		"\u0185\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02\u0187\u0189\x03\x02"+
		"\x02\x02\u0188\u018A\x07\r\x02\x02\u0189\u0188\x03\x02\x02\x02\u0189\u018A"+
		"\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B\u018D\x07\x1B\x02\x02"+
		"\u018C\u018E\x07\r\x02\x02\u018D\u018C\x03\x02\x02\x02\u018D\u018E\x03"+
		"\x02\x02\x02\u018E\u0190";
	private static readonly _serializedATNSegment1: string =
		"\x03\x02\x02\x02\u018F\u0191\x07\f\x02\x02\u0190\u018F\x03\x02\x02\x02"+
		"\u0190\u0191\x03\x02\x02\x02\u0191\u0193\x03\x02\x02\x02\u0192\u0194\x07"+
		"\r\x02\x02\u0193\u0192\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194"+
		"\u0195\x03\x02\x02\x02\u0195\u0197\x05\x1A\x0E\x02\u0196\u0198\x07\x18"+
		"\x02\x02\u0197\u0196\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198"+
		"\u01B2\x03\x02\x02\x02\u0199\u019B\x05 \x11\x02\u019A\u019C\x07\r\x02"+
		"\x02\u019B\u019A\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C\u019E"+
		"\x03\x02\x02\x02\u019D\u019F\x07\f\x02\x02\u019E\u019D\x03\x02\x02\x02"+
		"\u019E\u019F\x03\x02\x02\x02\u019F\u01A1\x03\x02\x02\x02\u01A0\u01A2\x07"+
		"\r\x02\x02\u01A1\u01A0\x03\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2"+
		"\u01A3\x03\x02\x02\x02\u01A3\u01A5\x07\x1B\x02\x02\u01A4\u01A6\x07\r\x02"+
		"\x02\u01A5\u01A4\x03\x02\x02\x02\u01A5\u01A6\x03\x02\x02\x02\u01A6\u01A8"+
		"\x03\x02\x02\x02\u01A7\u01A9\x07\f\x02\x02\u01A8\u01A7\x03\x02\x02\x02"+
		"\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01AB\x03\x02\x02\x02\u01AA\u01AC\x07"+
		"\r\x02\x02\u01AB\u01AA\x03\x02\x02\x02\u01AB\u01AC\x03\x02\x02\x02\u01AC"+
		"\u01AD\x03\x02\x02\x02\u01AD\u01AF\x05\x1A\x0E\x02\u01AE\u01B0\x07\x18"+
		"\x02\x02\u01AF\u01AE\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0"+
		"\u01B2\x03\x02\x02\x02\u01B1\u016B\x03\x02\x02\x02\u01B1\u0199\x03\x02"+
		"\x02\x02\u01B2\x1D\x03\x02\x02\x02\u01B3\u01BE\x05 \x11\x02\u01B4\u01B6"+
		"\x07\x16\x02\x02\u01B5\u01B7\x07\f\x02\x02\u01B6\u01B5\x03\x02\x02\x02"+
		"\u01B6\u01B7\x03\x02\x02\x02\u01B7\u01B9\x03\x02\x02\x02\u01B8\u01BA\x07"+
		"\r\x02\x02\u01B9\u01B8\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA"+
		"\u01BB\x03\x02\x02\x02\u01BB\u01BD\x05 \x11\x02\u01BC\u01B4\x03\x02\x02"+
		"\x02\u01BD\u01C0\x03\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BE\u01BF"+
		"\x03\x02\x02\x02\u01BF\x1F\x03\x02\x02\x02\u01C0\u01BE\x03\x02\x02\x02"+
		"\u01C1\u01CA\x05\x16\f\x02\u01C2\u01C4\x07\r\x02\x02\u01C3\u01C2\x03\x02"+
		"\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5"+
		"\u01C7\x07\x14\x02\x02\u01C6\u01C8\x07\r\x02\x02\u01C7\u01C6\x03\x02\x02"+
		"\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01C9\x03\x02\x02\x02\u01C9\u01CB"+
		"\x05\x1A\x0E\x02\u01CA\u01C3\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02"+
		"\u01CB!\x03\x02\x02\x02\u01CC\u01CE\x05\x16\f\x02\u01CD\u01CC\x03\x02"+
		"\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF"+
		"\u01D1\x07$\x02\x02\u01D0\u01D2\x07\r\x02\x02\u01D1\u01D0\x03\x02\x02"+
		"\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01D5"+
		"\x05$\x13\x02\u01D4\u01D6\x07\r\x02\x02\u01D5\u01D4\x03\x02\x02\x02\u01D5"+
		"\u01D6\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01D8\x07%\x02"+
		"\x02\u01D8#\x03\x02\x02\x02\u01D9\u01DB\x05&\x14\x02\u01DA\u01DC\x07\r"+
		"\x02\x02\u01DB\u01DA\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DC"+
		"\u01E4\x03\x02\x02\x02\u01DD\u01DF\x07\x16\x02\x02\u01DE\u01E0\x07\r\x02"+
		"\x02\u01DF\u01DE\x03\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0\u01E1"+
		"\x03\x02\x02\x02\u01E1\u01E3\x05$\x13\x02\u01E2\u01DD\x03\x02\x02\x02"+
		"\u01E3\u01E6\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E5\x03"+
		"\x02\x02\x02\u01E5\u022A\x03\x02\x02\x02\u01E6\u01E4\x03\x02\x02\x02\u01E7"+
		"\u01E9\x05&\x14\x02\u01E8\u01EA\x07\r\x02\x02\u01E9\u01E8\x03\x02\x02"+
		"\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01ED"+
		"\x07\n\x02\x02\u01EC\u01EE\x07\r\x02\x02\u01ED\u01EC\x03\x02\x02\x02\u01ED"+
		"\u01EE\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF\u01F1\x05&\x14"+
		"\x02\u01F0\u01F2\x07\r\x02\x02\u01F1\u01F0\x03\x02\x02\x02\u01F1\u01F2"+
		"\x03\x02\x02\x02\u01F2\u01FA\x03\x02\x02\x02\u01F3\u01F5\x07\x16\x02\x02"+
		"\u01F4\u01F6\x07\r\x02\x02\u01F5\u01F4\x03\x02\x02\x02\u01F5\u01F6\x03"+
		"\x02\x02\x02\u01F6\u01F7\x03\x02\x02\x02\u01F7\u01F9\x05$\x13\x02\u01F8"+
		"\u01F3\x03\x02\x02\x02\u01F9\u01FC\x03\x02\x02\x02\u01FA\u01F8\x03\x02"+
		"\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u022A\x03\x02\x02\x02\u01FC"+
		"\u01FA\x03\x02\x02\x02\u01FD\u01FF\x05&\x14\x02\u01FE\u0200\x07\r\x02"+
		"\x02\u01FF\u01FE\x03\x02\x02\x02\u01FF\u0200\x03\x02\x02\x02\u0200\u0201"+
		"\x03\x02\x02\x02\u0201\u0203\x07\x19\x02\x02\u0202\u0204\x07\r\x02\x02"+
		"\u0203\u0202\x03\x02\x02\x02\u0203\u0204\x03\x02\x02\x02\u0204\u0205\x03"+
		"\x02\x02\x02\u0205\u0207\x05&\x14\x02\u0206\u0208\x07\r\x02\x02\u0207"+
		"\u0206\x03\x02\x02\x02\u0207\u0208\x03\x02\x02\x02\u0208\u0210\x03\x02"+
		"\x02\x02\u0209\u020B\x07\x16\x02\x02\u020A\u020C\x07\r\x02\x02\u020B\u020A"+
		"\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02"+
		"\u020D\u020F\x05$\x13\x02\u020E\u0209\x03\x02\x02\x02\u020F\u0212\x03"+
		"\x02\x02\x02\u0210\u020E\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211"+
		"\u022A\x03\x02\x02\x02\u0212\u0210\x03\x02\x02\x02\u0213\u0215\x05&\x14"+
		"\x02\u0214\u0216\x07\r\x02\x02\u0215\u0214\x03\x02\x02\x02\u0215\u0216"+
		"\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217\u0219\x07\x1A\x02\x02"+
		"\u0218\u021A\x07\r\x02\x02\u0219\u0218\x03\x02\x02\x02\u0219\u021A\x03"+
		"\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B\u021D\x05&\x14\x02\u021C"+
		"\u021E\x07\r\x02\x02\u021D\u021C\x03\x02\x02\x02\u021D\u021E\x03\x02\x02"+
		"\x02\u021E\u0226\x03\x02\x02\x02\u021F\u0221\x07\x16\x02\x02\u0220\u0222"+
		"\x07\r\x02\x02\u0221\u0220\x03\x02\x02\x02\u0221\u0222\x03\x02\x02\x02"+
		"\u0222\u0223\x03\x02\x02\x02\u0223\u0225\x05$\x13\x02\u0224\u021F\x03"+
		"\x02\x02\x02\u0225\u0228\x03\x02\x02\x02\u0226\u0224\x03\x02\x02\x02\u0226"+
		"\u0227\x03\x02\x02\x02\u0227\u022A\x03\x02\x02\x02\u0228\u0226\x03\x02"+
		"\x02\x02\u0229\u01D9\x03\x02\x02\x02\u0229\u01E7\x03\x02\x02\x02\u0229"+
		"\u01FD\x03\x02\x02\x02\u0229\u0213\x03\x02\x02\x02\u022A%\x03\x02\x02"+
		"\x02\u022B\u022F\x05\x18\r\x02\u022C\u022F\x05:\x1E\x02\u022D\u022F\x05"+
		"(\x15\x02\u022E\u022B\x03\x02\x02\x02\u022E\u022C\x03\x02\x02\x02\u022E"+
		"\u022D\x03\x02\x02\x02\u022F\'\x03\x02\x02\x02\u0230\u0233\x05\x16\f\x02"+
		"\u0231\u0233\x05*\x16\x02\u0232\u0230\x03\x02\x02\x02\u0232\u0231\x03"+
		"\x02\x02\x02\u0233)\x03\x02\x02\x02\u0234\u0235\x07\t\x02\x02\u0235+\x03"+
		"\x02\x02\x02\u0236\u0238\x07 \x02\x02\u0237\u0239\x07\r\x02\x02\u0238"+
		"\u0237\x03\x02\x02\x02\u0238\u0239\x03\x02\x02\x02\u0239\u023A\x03\x02"+
		"\x02\x02\u023A\u023C\x05\x1A\x0E\x02\u023B\u023D\x07\r\x02\x02\u023C\u023B"+
		"\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D\u023E\x03\x02\x02\x02"+
		"\u023E\u023F\x07!\x02\x02\u023F-\x03\x02\x02\x02\u0240\u0241\t\x04\x02"+
		"\x02\u0241\u0242\x05&\x14\x02\u0242/\x03\x02\x02\x02\u0243\u0245\x07\x1E"+
		"\x02\x02\u0244\u0246\x07\r\x02\x02\u0245\u0244\x03\x02\x02\x02\u0245\u0246"+
		"\x03\x02\x02\x02\u0246\u0248\x03\x02\x02\x02\u0247\u0249\x07\f\x02\x02"+
		"\u0248\u0247\x03\x02\x02\x02\u0248\u0249\x03\x02\x02\x02\u0249\u024B\x03"+
		"\x02\x02\x02\u024A\u024C\x07\r\x02\x02\u024B\u024A\x03\x02\x02\x02\u024B"+
		"\u024C\x03\x02\x02\x02\u024C\u024E\x03\x02\x02\x02\u024D\u024F\x052\x1A"+
		"\x02\u024E\u024D\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F\u0251"+
		"\x03\x02\x02\x02\u0250\u0252\x07\r\x02\x02\u0251\u0250\x03\x02\x02\x02"+
		"\u0251\u0252\x03\x02\x02\x02\u0252\u0254\x03\x02\x02\x02\u0253\u0255\x07"+
		"\f\x02\x02\u0254\u0253\x03\x02\x02\x02\u0254\u0255\x03\x02\x02\x02\u0255"+
		"\u0257\x03\x02\x02\x02\u0256\u0258\x07\r\x02\x02\u0257\u0256\x03\x02\x02"+
		"\x02\u0257\u0258\x03\x02\x02\x02\u0258\u0259\x03\x02\x02\x02\u0259\u025A"+
		"\x07\x1F\x02\x02\u025A1\x03\x02\x02\x02\u025B\u025D\x054\x1B\x02\u025C"+
		"\u025E\x07\r\x02\x02\u025D\u025C\x03\x02\x02\x02\u025D\u025E\x03\x02\x02"+
		"\x02\u025E\u026C\x03\x02\x02\x02\u025F\u0261\x07\x16\x02\x02\u0260\u0262"+
		"\x07\r\x02\x02\u0261\u0260\x03\x02\x02\x02\u0261\u0262\x03\x02\x02\x02"+
		"\u0262\u0264\x03\x02\x02\x02\u0263\u0265\x07\f\x02\x02\u0264\u0263\x03"+
		"\x02\x02\x02\u0264\u0265\x03\x02\x02\x02\u0265\u0267\x03\x02\x02\x02\u0266"+
		"\u0268\x07\r\x02\x02\u0267\u0266\x03\x02\x02\x02\u0267\u0268\x03\x02\x02"+
		"\x02\u0268\u0269\x03\x02\x02\x02\u0269\u026B\x054\x1B\x02\u026A\u025F"+
		"\x03\x02\x02\x02\u026B\u026E\x03\x02\x02\x02\u026C\u026A\x03\x02\x02\x02"+
		"\u026C\u026D\x03\x02\x02\x02\u026D3\x03\x02\x02\x02\u026E\u026C\x03\x02"+
		"\x02\x02\u026F\u0271\x05\x1A\x0E\x02\u0270\u0272\x07\x18\x02\x02\u0271"+
		"\u0270\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272\u0274\x03\x02"+
		"\x02\x02\u0273\u0275\x07\r\x02\x02\u0274\u0273\x03\x02\x02\x02\u0274\u0275"+
		"\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276\u0278\x07\x14\x02\x02"+
		"\u0277\u0279\x07\r\x02\x02\u0278\u0277\x03\x02\x02\x02\u0278\u0279\x03"+
		"\x02\x02\x02\u0279\u027A\x03\x02\x02\x02\u027A\u027B\x05\x1A\x0E\x02\u027B"+
		"5\x03\x02\x02\x02\u027C\u027E\x07\"\x02\x02\u027D\u027F\x07\f\x02\x02"+
		"\u027E\u027D\x03\x02\x02\x02\u027E\u027F\x03\x02\x02\x02\u027F\u0281\x03"+
		"\x02\x02\x02\u0280\u0282\x07\r\x02\x02\u0281\u0280\x03\x02\x02\x02\u0281"+
		"\u0282\x03\x02\x02\x02\u0282\u0284\x03\x02\x02\x02\u0283\u0285\x07\f\x02"+
		"\x02\u0284\u0283\x03\x02\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285\u0287"+
		"\x03\x02\x02\x02\u0286\u0288\x05\x1A\x0E\x02\u0287\u0286\x03\x02\x02\x02"+
		"\u0287\u0288\x03\x02\x02\x02\u0288\u0296\x03\x02\x02\x02\u0289\u028B\x07"+
		"\x16\x02\x02\u028A\u028C\x07\f\x02\x02\u028B\u028A\x03\x02\x02\x02\u028B"+
		"\u028C\x03\x02\x02\x02\u028C\u028E\x03\x02\x02\x02\u028D\u028F\x07\r\x02"+
		"\x02\u028E\u028D\x03\x02\x02\x02\u028E\u028F\x03\x02\x02\x02\u028F\u0291"+
		"\x03\x02\x02\x02\u0290\u0292\x07\f\x02\x02\u0291\u0290\x03\x02\x02\x02"+
		"\u0291\u0292\x03\x02\x02\x02\u0292\u0293\x03\x02\x02\x02\u0293\u0295\x05"+
		"\x1A\x0E\x02\u0294\u0289\x03\x02\x02\x02\u0295\u0298\x03\x02\x02\x02\u0296"+
		"\u0294\x03\x02\x02\x02\u0296\u0297\x03\x02\x02\x02\u0297\u029A\x03\x02"+
		"\x02\x02\u0298\u0296\x03\x02\x02\x02\u0299\u029B\x07\f\x02\x02\u029A\u0299"+
		"\x03\x02\x02\x02\u029A\u029B\x03\x02\x02\x02\u029B\u029D\x03\x02\x02\x02"+
		"\u029C\u029E\x07\r\x02\x02\u029D\u029C\x03\x02\x02\x02\u029D\u029E\x03"+
		"\x02\x02\x02\u029E\u02A0\x03\x02\x02\x02\u029F\u02A1\x07\f\x02\x02\u02A0"+
		"\u029F\x03\x02\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1\u02A2\x03\x02"+
		"\x02\x02\u02A2\u02AB\x07#\x02\x02\u02A3\u02A6\x058\x1D\x02\u02A4\u02A5"+
		"\x07\"\x02\x02\u02A5\u02A7\x07#\x02\x02\u02A6\u02A4\x03\x02\x02\x02\u02A7"+
		"\u02A8\x03\x02\x02\x02\u02A8\u02A6\x03\x02\x02\x02\u02A8\u02A9\x03\x02"+
		"\x02\x02\u02A9\u02AB\x03\x02\x02\x02\u02AA\u027C\x03\x02\x02\x02\u02AA"+
		"\u02A3\x03\x02\x02\x02\u02AB7\x03\x02\x02\x02\u02AC\u02AD\b\x1D\x01\x02"+
		"\u02AD\u02B4\x05\x1C\x0F\x02\u02AE\u02B4\x05\"\x12\x02\u02AF\u02B4\x05"+
		"&\x14\x02\u02B0\u02B4\x05,\x17\x02\u02B1\u02B4\x05.\x18\x02\u02B2\u02B4"+
		"\x050\x19\x02\u02B3\u02AC\x03\x02\x02\x02\u02B3\u02AE\x03\x02\x02\x02"+
		"\u02B3\u02AF\x03\x02\x02\x02\u02B3\u02B0\x03\x02\x02\x02\u02B3\u02B1\x03"+
		"\x02\x02\x02\u02B3\u02B2\x03\x02\x02\x02\u02B4\u02CC\x03\x02\x02\x02\u02B5"+
		"\u02B7\f\t\x02\x02\u02B6\u02B8\x07\r\x02\x02\u02B7\u02B6\x03\x02\x02\x02"+
		"\u02B7\u02B8\x03\x02\x02\x02\u02B8\u02BA\x03\x02\x02\x02\u02B9\u02BB\x07"+
		"\f\x02\x02\u02BA\u02B9\x03\x02\x02\x02\u02BA\u02BB\x03\x02\x02\x02\u02BB"+
		"\u02BD\x03\x02\x02\x02\u02BC\u02BE\x07\r\x02\x02\u02BD\u02BC\x03\x02\x02"+
		"\x02\u02BD\u02BE\x03\x02\x02\x02\u02BE\u02BF\x03\x02\x02\x02\u02BF\u02C1"+
		"\t\x03\x02\x02\u02C0\u02C2\x07\r\x02\x02\u02C1\u02C0\x03\x02\x02\x02\u02C1"+
		"\u02C2\x03\x02\x02\x02\u02C2\u02C4\x03\x02\x02\x02\u02C3\u02C5\x07\f\x02"+
		"\x02\u02C4\u02C3\x03\x02\x02\x02\u02C4\u02C5\x03\x02\x02\x02\u02C5\u02C7"+
		"\x03\x02\x02\x02\u02C6\u02C8\x07\r\x02\x02\u02C7\u02C6\x03\x02\x02\x02"+
		"\u02C7\u02C8\x03\x02\x02\x02\u02C8\u02C9\x03\x02\x02\x02\u02C9\u02CB\x05"+
		"8\x1D\n\u02CA\u02B5\x03\x02\x02\x02\u02CB\u02CE\x03\x02\x02\x02\u02CC"+
		"\u02CA\x03\x02\x02\x02\u02CC\u02CD\x03\x02\x02\x02\u02CD9\x03\x02\x02"+
		"\x02\u02CE\u02CC\x03\x02\x02\x02\u02CF\u02D2\x05\x16\f\x02\u02D0\u02D1"+
		"\x07\x15\x02\x02\u02D1\u02D3\x05<\x1F\x02\u02D2\u02D0\x03\x02\x02\x02"+
		"\u02D3\u02D4\x03\x02\x02\x02\u02D4\u02D2\x03\x02\x02\x02\u02D4\u02D5\x03"+
		"\x02\x02\x02\u02D5\u02DE\x03\x02\x02\x02\u02D6\u02D9\x05\x18\r\x02\u02D7"+
		"\u02D8\x07\x15\x02\x02\u02D8\u02DA\x05<\x1F\x02\u02D9\u02D7\x03\x02\x02"+
		"\x02\u02DA\u02DB\x03\x02\x02\x02\u02DB\u02D9\x03\x02\x02\x02\u02DB\u02DC"+
		"\x03\x02\x02\x02\u02DC\u02DE\x03\x02\x02\x02\u02DD\u02CF\x03\x02\x02\x02"+
		"\u02DD\u02D6\x03\x02\x02\x02\u02DE;\x03\x02\x02\x02\u02DF\u02E2\x05\x16"+
		"\f\x02\u02E0\u02E2\x05\x18\r\x02\u02E1\u02DF\x03\x02\x02\x02\u02E1\u02E0"+
		"\x03\x02\x02\x02\u02E2=\x03\x02\x02\x02\u02E3\u02E4\b \x01\x02\u02E4\u02EB"+
		"\x05@!\x02\u02E5\u02EB\x05B\"\x02\u02E6\u02EB\x05D#\x02\u02E7\u02EB\x05"+
		"J&\x02\u02E8\u02EB\x05L\'\x02\u02E9\u02EB\x05N(\x02\u02EA\u02E3\x03\x02"+
		"\x02\x02\u02EA\u02E5\x03\x02\x02\x02\u02EA\u02E6\x03\x02\x02\x02\u02EA"+
		"\u02E7\x03\x02\x02\x02\u02EA\u02E8\x03\x02\x02\x02\u02EA\u02E9\x03\x02"+
		"\x02\x02\u02EB\u0300\x03\x02\x02\x02\u02EC\u02EE\f\t\x02\x02\u02ED\u02EF"+
		"\x07\r\x02\x02\u02EE\u02ED\x03\x02\x02\x02\u02EE\u02EF\x03\x02\x02\x02"+
		"\u02EF\u02F0\x03\x02\x02\x02\u02F0\u02F2\t\x05\x02\x02\u02F1\u02F3\x07"+
		"\r\x02\x02\u02F2\u02F1\x03\x02\x02\x02\u02F2\u02F3\x03\x02\x02\x02\u02F3"+
		"\u02F4\x03\x02\x02\x02\u02F4\u02FF\x05> \n\u02F5\u02F7\f\b\x02\x02\u02F6"+
		"\u02F8\x07\r\x02\x02\u02F7\u02F6\x03\x02\x02\x02\u02F7\u02F8\x03\x02\x02"+
		"\x02\u02F8\u02F9\x03\x02\x02\x02\u02F9\u02FB\t\x06\x02\x02\u02FA\u02FC"+
		"\x07\r\x02\x02\u02FB\u02FA\x03\x02\x02\x02\u02FB\u02FC\x03\x02\x02\x02"+
		"\u02FC\u02FD\x03\x02\x02\x02\u02FD\u02FF\x05> \t\u02FE\u02EC\x03\x02\x02"+
		"\x02\u02FE\u02F5\x03\x02\x02\x02\u02FF\u0302\x03\x02\x02\x02\u0300\u02FE"+
		"\x03\x02\x02\x02\u0300\u0301\x03\x02\x02\x02\u0301?\x03\x02\x02\x02\u0302"+
		"\u0300\x03\x02\x02\x02\u0303\u0304\t\x06\x02\x02\u0304\u0305\x05> \x02"+
		"\u0305A\x03\x02\x02\x02\u0306\u0308\x07\"\x02\x02\u0307\u0309\x07\f\x02"+
		"\x02\u0308\u0307\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309\u030B"+
		"\x03\x02\x02\x02\u030A\u030C\x07\r\x02\x02\u030B\u030A\x03\x02\x02\x02"+
		"\u030B\u030C\x03\x02\x02\x02\u030C\u030E\x03\x02\x02\x02\u030D\u030F\x07"+
		"\f\x02\x02\u030E\u030D\x03\x02\x02\x02\u030E\u030F\x03\x02\x02\x02\u030F"+
		"\u0311\x03\x02\x02\x02\u0310\u0312\x05> \x02\u0311\u0310\x03\x02\x02\x02"+
		"\u0311\u0312\x03\x02\x02\x02\u0312\u0320\x03\x02\x02\x02\u0313\u0315\x07"+
		"\x16\x02\x02\u0314\u0316\x07\f\x02\x02\u0315\u0314\x03\x02\x02\x02\u0315"+
		"\u0316\x03\x02\x02\x02\u0316\u0318\x03\x02\x02\x02\u0317\u0319\x07\r\x02"+
		"\x02\u0318\u0317\x03\x02\x02\x02\u0318\u0319\x03\x02\x02\x02\u0319\u031B"+
		"\x03\x02\x02\x02\u031A\u031C\x07\f\x02\x02\u031B\u031A\x03\x02\x02\x02"+
		"\u031B\u031C\x03\x02\x02\x02\u031C\u031D\x03\x02\x02\x02\u031D\u031F\x05"+
		"> \x02\u031E\u0313\x03\x02\x02\x02\u031F\u0322\x03\x02\x02\x02\u0320\u031E"+
		"\x03\x02\x02\x02\u0320\u0321\x03\x02\x02\x02\u0321\u0324\x03\x02\x02\x02"+
		"\u0322\u0320\x03\x02\x02\x02\u0323\u0325\x07\f\x02\x02\u0324\u0323\x03"+
		"\x02\x02\x02\u0324\u0325\x03\x02\x02\x02\u0325\u0327\x03\x02\x02\x02\u0326"+
		"\u0328\x07\r\x02\x02\u0327\u0326\x03\x02\x02\x02\u0327\u0328\x03\x02\x02"+
		"\x02\u0328\u032A\x03\x02\x02\x02\u0329\u032B\x07\f\x02\x02\u032A\u0329"+
		"\x03\x02\x02\x02\u032A\u032B\x03\x02\x02\x02\u032B\u032C\x03\x02\x02\x02"+
		"\u032C\u032D\x07#\x02\x02\u032DC\x03\x02\x02\x02\u032E\u0330\x07\x1E\x02"+
		"\x02\u032F\u0331\x07\r\x02\x02\u0330\u032F\x03\x02\x02\x02\u0330\u0331"+
		"\x03\x02\x02\x02\u0331\u0333\x03\x02\x02\x02\u0332\u0334\x07\f\x02\x02"+
		"\u0333\u0332\x03\x02\x02\x02\u0333\u0334\x03\x02\x02\x02\u0334\u0336\x03"+
		"\x02\x02\x02\u0335\u0337\x07\r\x02\x02\u0336\u0335\x03\x02\x02\x02\u0336"+
		"\u0337\x03\x02\x02\x02\u0337\u0339\x03\x02\x02\x02\u0338\u033A\x05F$\x02"+
		"\u0339\u0338\x03\x02\x02\x02\u0339\u033A\x03\x02\x02\x02\u033A\u033C\x03"+
		"\x02\x02\x02\u033B\u033D\x07\r\x02\x02\u033C\u033B\x03\x02\x02\x02\u033C"+
		"\u033D\x03\x02\x02\x02\u033D\u033F\x03\x02\x02\x02\u033E\u0340\x07\f\x02"+
		"\x02\u033F\u033E\x03\x02\x02\x02\u033F\u0340\x03\x02\x02\x02\u0340\u0342"+
		"\x03\x02\x02\x02\u0341\u0343\x07\r\x02\x02\u0342\u0341\x03\x02\x02\x02"+
		"\u0342\u0343\x03\x02\x02\x02\u0343\u0344\x03\x02\x02\x02\u0344\u0345\x07"+
		"\x1F\x02\x02\u0345E\x03\x02\x02\x02\u0346\u0357\x05H%\x02\u0347\u0349"+
		"\x07\r\x02\x02\u0348\u0347\x03\x02\x02\x02\u0348\u0349\x03\x02\x02\x02"+
		"\u0349\u034A\x03\x02\x02\x02\u034A\u034C\x07\x16\x02\x02\u034B\u034D\x07"+
		"\r\x02\x02\u034C\u034B\x03\x02\x02\x02\u034C\u034D\x03\x02\x02\x02\u034D"+
		"\u034F\x03\x02\x02\x02\u034E\u0350\x07\f\x02\x02\u034F\u034E\x03\x02\x02"+
		"\x02\u034F\u0350\x03\x02\x02\x02\u0350\u0352\x03\x02\x02\x02\u0351\u0353"+
		"\x07\r\x02\x02\u0352\u0351\x03\x02\x02\x02\u0352\u0353\x03\x02\x02\x02"+
		"\u0353\u0354\x03\x02\x02\x02\u0354\u0356\x05H%\x02\u0355\u0348\x03\x02"+
		"\x02\x02\u0356\u0359\x03\x02\x02\x02\u0357\u0355\x03\x02\x02\x02\u0357"+
		"\u0358\x03\x02\x02\x02\u0358G\x03\x02\x02\x02\u0359\u0357\x03\x02\x02"+
		"\x02\u035A\u035C\x05L\'\x02\u035B\u035D\x07\r\x02\x02\u035C\u035B\x03"+
		"\x02\x02\x02\u035C\u035D\x03\x02\x02\x02\u035D\u035E\x03\x02\x02\x02\u035E"+
		"\u0360\x07\x14\x02\x02\u035F\u0361\x07\r\x02\x02\u0360\u035F\x03\x02\x02"+
		"\x02\u0360\u0361\x03\x02\x02\x02\u0361\u0362\x03\x02\x02\x02\u0362\u0363"+
		"\x05D#\x02\u0363\u036F\x03\x02\x02\x02\u0364\u0366\x05L\'\x02\u0365\u0367"+
		"\x07\r\x02\x02\u0366\u0365\x03\x02\x02\x02\u0366\u0367\x03\x02\x02\x02"+
		"\u0367\u0368\x03\x02\x02\x02\u0368\u036A\x07\x14\x02\x02\u0369\u036B\x07"+
		"\r\x02\x02\u036A\u0369\x03\x02\x02\x02\u036A\u036B\x03\x02\x02\x02\u036B"+
		"\u036C\x03\x02\x02\x02\u036C\u036D\x05L\'\x02\u036D\u036F\x03\x02\x02"+
		"\x02\u036E\u035A\x03\x02\x02\x02\u036E\u0364\x03\x02\x02\x02\u036FI\x03"+
		"\x02\x02\x02\u0370\u0372\x07 \x02\x02\u0371\u0373\x07\r\x02\x02\u0372"+
		"\u0371\x03\x02\x02\x02\u0372\u0373\x03\x02\x02\x02\u0373\u0375\x03\x02"+
		"\x02\x02\u0374\u0376\x07\f\x02\x02\u0375\u0374\x03\x02\x02\x02\u0375\u0376"+
		"\x03\x02\x02\x02\u0376\u0378\x03\x02\x02\x02\u0377\u0379\x07\r\x02\x02"+
		"\u0378\u0377\x03\x02\x02\x02\u0378\u0379\x03\x02\x02\x02\u0379\u037B\x03"+
		"\x02\x02\x02\u037A\u037C\x05\x1E\x10\x02\u037B\u037A\x03\x02\x02\x02\u037B"+
		"\u037C\x03\x02\x02\x02\u037C\u037E\x03\x02\x02\x02\u037D\u037F\x07\r\x02"+
		"\x02\u037E\u037D\x03\x02\x02\x02\u037E\u037F\x03\x02\x02\x02\u037F\u0381"+
		"\x03\x02\x02\x02\u0380\u0382\x07\f\x02\x02\u0381\u0380\x03\x02\x02\x02"+
		"\u0381\u0382\x03\x02\x02\x02\u0382\u0384\x03\x02\x02\x02\u0383\u0385\x07"+
		"\r\x02\x02\u0384\u0383\x03\x02\x02\x02\u0384\u0385\x03\x02\x02\x02\u0385"+
		"\u0386\x03\x02\x02\x02\u0386\u0388\x07!\x02\x02\u0387\u0389\x07\r\x02"+
		"\x02\u0388\u0387\x03\x02\x02\x02\u0388\u0389\x03\x02\x02\x02\u0389\u038B"+
		"\x03\x02\x02\x02\u038A\u038C\x07\f\x02\x02\u038B\u038A\x03\x02\x02\x02"+
		"\u038B\u038C\x03\x02\x02\x02\u038C\u038E\x03\x02\x02\x02\u038D\u038F\x07"+
		"\r\x02\x02\u038E\u038D\x03\x02\x02\x02\u038E\u038F\x03\x02\x02\x02\u038F"+
		"\u0390\x03\x02\x02\x02\u0390\u0392\x07\x1B\x02\x02\u0391\u0393\x07\r\x02"+
		"\x02\u0392\u0391\x03\x02\x02\x02\u0392\u0393\x03\x02\x02\x02\u0393\u0395"+
		"\x03\x02\x02\x02\u0394\u0396\x07\f\x02\x02\u0395\u0394\x03\x02\x02\x02"+
		"\u0395\u0396\x03\x02\x02\x02\u0396\u0398\x03\x02\x02\x02\u0397\u0399\x07"+
		"\r\x02\x02\u0398\u0397\x03\x02\x02\x02\u0398\u0399\x03\x02\x02\x02\u0399"+
		"\u039A\x03\x02\x02\x02\u039A\u039C\x05\x1A\x0E\x02\u039B\u039D\x07\x18"+
		"\x02\x02\u039C\u039B\x03\x02\x02\x02\u039C\u039D\x03\x02\x02\x02\u039D"+
		"\u03B7\x03\x02\x02\x02\u039E\u03A0\x05 \x11\x02\u039F\u03A1\x07\r\x02"+
		"\x02\u03A0\u039F\x03\x02\x02\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1\u03A3"+
		"\x03\x02\x02\x02\u03A2\u03A4\x07\f\x02\x02\u03A3\u03A2\x03\x02\x02\x02"+
		"\u03A3\u03A4\x03\x02\x02\x02\u03A4\u03A6\x03\x02\x02\x02\u03A5\u03A7\x07"+
		"\r\x02\x02\u03A6\u03A5\x03\x02\x02\x02\u03A6\u03A7\x03\x02\x02\x02\u03A7"+
		"\u03A8\x03\x02\x02\x02\u03A8\u03AA\x07\x1B\x02\x02\u03A9\u03AB\x07\r\x02"+
		"\x02\u03AA\u03A9\x03\x02\x02\x02\u03AA\u03AB\x03\x02\x02\x02\u03AB\u03AD"+
		"\x03\x02\x02\x02\u03AC\u03AE\x07\f\x02\x02\u03AD\u03AC\x03\x02\x02\x02"+
		"\u03AD\u03AE\x03\x02\x02\x02\u03AE\u03B0\x03\x02\x02\x02\u03AF\u03B1\x07"+
		"\r\x02\x02\u03B0\u03AF\x03\x02\x02\x02\u03B0\u03B1\x03\x02\x02\x02\u03B1"+
		"\u03B2\x03\x02\x02\x02\u03B2\u03B4\x05\x1A\x0E\x02\u03B3\u03B5\x07\x18"+
		"\x02\x02\u03B4\u03B3\x03\x02\x02\x02\u03B4\u03B5\x03\x02\x02\x02\u03B5"+
		"\u03B7\x03\x02\x02\x02\u03B6\u0370\x03\x02\x02\x02\u03B6\u039E\x03\x02"+
		"\x02\x02\u03B7K\x03\x02\x02\x02\u03B8\u03B9\t\x07\x02\x02\u03B9M\x03\x02"+
		"\x02\x02\u03BA\u03BC\x07 \x02\x02\u03BB\u03BD\x07\r\x02\x02\u03BC\u03BB"+
		"\x03\x02\x02\x02\u03BC\u03BD\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02"+
		"\u03BE\u03C0\x05> \x02\u03BF\u03C1\x07\r\x02\x02\u03C0\u03BF\x03\x02\x02"+
		"\x02\u03C0\u03C1\x03\x02\x02\x02\u03C1\u03C2\x03\x02\x02\x02\u03C2\u03C3"+
		"\x07!\x02\x02\u03C3O\x03\x02\x02\x02\u03C4\u03C5\x05R*\x02\u03C5Q\x03"+
		"\x02\x02\x02\u03C6\u03CA\x05T+\x02\u03C7\u03C9\x05X-\x02\u03C8\u03C7\x03"+
		"\x02\x02\x02\u03C9\u03CC\x03\x02\x02\x02\u03CA\u03C8\x03\x02\x02\x02\u03CA"+
		"\u03CB\x03\x02\x02\x02\u03CB\u03D5\x03\x02\x02\x02\u03CC\u03CA\x03\x02"+
		"\x02\x02\u03CD\u03D1\x05\\/\x02\u03CE\u03D0\x05X-\x02\u03CF\u03CE\x03"+
		"\x02\x02\x02\u03D0\u03D3\x03\x02\x02\x02\u03D1\u03CF\x03\x02\x02\x02\u03D1"+
		"\u03D2\x03\x02\x02\x02\u03D2\u03D5\x03\x02\x02\x02\u03D3\u03D1\x03\x02"+
		"\x02\x02\u03D4\u03C6\x03\x02\x02\x02\u03D4\u03CD\x03\x02\x02\x02\u03D5"+
		"S\x03\x02\x02\x02\u03D6\u03D8\x07\r\x02\x02\u03D7\u03D6\x03\x02\x02\x02"+
		"\u03D7\u03D8\x03\x02\x02\x02\u03D8\u03DA\x03\x02\x02\x02\u03D9\u03DB\x05"+
		"V,\x02\u03DA\u03D9\x03\x02\x02\x02\u03DB\u03DC\x03\x02\x02\x02\u03DC\u03DA"+
		"\x03\x02\x02\x02\u03DC\u03DD\x03\x02\x02\x02\u03DD\u03E3\x03\x02\x02\x02"+
		"\u03DE\u03E2\x05V,\x02\u03DF\u03E2\x07\r\x02\x02\u03E0\u03E2\x07\x0F\x02"+
		"\x02\u03E1\u03DE\x03\x02\x02\x02\u03E1\u03DF\x03\x02\x02\x02\u03E1\u03E0"+
		"\x03\x02\x02\x02\u03E2\u03E5\x03\x02\x02\x02\u03E3\u03E1\x03\x02\x02\x02"+
		"\u03E3\u03E4\x03\x02\x02\x02\u03E4U\x03\x02\x02\x02\u03E5\u03E3\x03\x02"+
		"\x02\x02\u03E6\u03F0\x07\x0E\x02\x02\u03E7\u03F0\x07\v\x02\x02\u03E8\u03F0"+
		"\x07\x13\x02\x02\u03E9\u03F0\x07\x1E\x02\x02\u03EA\u03F0\x07\x1F\x02\x02"+
		"\u03EB\u03F0\x07\x14\x02\x02\u03EC\u03F0\x07\x11\x02\x02\u03ED\u03F0\x07"+
		"\x15\x02\x02\u03EE\u03F0\x05L\'\x02\u03EF\u03E6\x03\x02\x02\x02\u03EF"+
		"\u03E7\x03\x02\x02\x02\u03EF\u03E8\x03\x02\x02\x02\u03EF\u03E9\x03\x02"+
		"\x02\x02\u03EF\u03EA\x03\x02\x02\x02\u03EF\u03EB\x03\x02\x02\x02\u03EF"+
		"\u03EC\x03\x02\x02\x02\u03EF\u03ED\x03\x02\x02\x02\u03EF\u03EE\x03\x02"+
		"\x02\x02\u03F0W\x03\x02\x02\x02\u03F1\u03F4\x05\\/\x02\u03F2\u03F4\x05"+
		"Z.\x02\u03F3\u03F1\x03\x02\x02\x02\u03F3\u03F2\x03\x02\x02\x02\u03F4Y"+
		"\x03\x02\x02\x02\u03F5\u03F9\x05V,\x02\u03F6\u03F9\x07\r\x02\x02\u03F7"+
		"\u03F9\x07\x0F\x02\x02\u03F8\u03F5\x03\x02\x02\x02\u03F8\u03F6\x03\x02"+
		"\x02\x02\u03F8\u03F7\x03\x02\x02\x02\u03F9\u03FA\x03\x02\x02\x02\u03FA"+
		"\u03F8\x03\x02\x02\x02\u03FA\u03FB\x03\x02\x02\x02\u03FB[\x03\x02\x02"+
		"\x02\u03FC\u03FD\x07\x1D\x02\x02\u03FD\u03FE\x05^0\x02\u03FE\u0400\x07"+
		"\r\x02\x02\u03FF\u0401\x05`1\x02\u0400\u03FF\x03\x02\x02\x02\u0400\u0401"+
		"\x03\x02\x02\x02\u0401\u0402\x03\x02\x02\x02\u0402\u0403\x07\x1F\x02\x02"+
		"\u0403]\x03\x02\x02\x02\u0404\u0405\x05\x16\f\x02\u0405_\x03\x02\x02\x02"+
		"\u0406\u0408\x05d3\x02\u0407\u0406\x03\x02\x02\x02\u0408\u0409\x03\x02"+
		"\x02\x02\u0409\u0407\x03\x02\x02\x02\u0409\u040A\x03\x02\x02\x02\u040A"+
		"a\x03\x02\x02\x02\u040B\u040F\x07\x1E\x02\x02\u040C\u040E\x05d3\x02\u040D"+
		"\u040C\x03\x02\x02\x02\u040E\u0411\x03\x02\x02\x02\u040F\u040D\x03\x02"+
		"\x02\x02\u040F\u0410\x03\x02\x02\x02\u0410\u0412\x03\x02\x02\x02\u0411"+
		"\u040F\x03\x02\x02\x02\u0412\u0413\x07\x1F\x02\x02\u0413c\x03\x02\x02"+
		"\x02\u0414\u041E\x05b2\x02\u0415\u041A\x05f4\x02\u0416\u0417\x07\f\x02"+
		"\x02\u0417\u0419\x05f4\x02\u0418\u0416\x03\x02\x02\x02\u0419\u041C\x03"+
		"\x02\x02\x02\u041A\u0418\x03\x02\x02\x02\u041A\u041B\x03\x02\x02\x02\u041B"+
		"\u041E\x03\x02\x02\x02\u041C\u041A\x03\x02\x02\x02\u041D\u0414\x03\x02"+
		"\x02\x02\u041D\u0415\x03\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\x02\u041Ee\x03\x02\x02\x02\u041F\u0420\t\b\x02\x02\u0420g\x03\x02"+
		"\x02\x02\xD6kot\x80\x87\x95\x99\xA2\xAE\xB3\xBD\xC1\xC9\xCD\xD1\xD5\xDD"+
		"\xE1\xE6\xF0\xF4\xF8\xFC\u0101\u0109\u010D\u0113\u0117\u011C\u0122\u012A"+
		"\u0131\u0138\u013A\u0140\u014F\u0153\u0156\u0159\u015D\u0160\u0163\u0168"+
		"\u016D\u0170\u0173\u0176\u0179\u017C\u017F\u0183\u0186\u0189\u018D\u0190"+
		"\u0193\u0197\u019B\u019E\u01A1\u01A5\u01A8\u01AB\u01AF\u01B1\u01B6\u01B9"+
		"\u01BE\u01C3\u01C7\u01CA\u01CD\u01D1\u01D5\u01DB\u01DF\u01E4\u01E9\u01ED"+
		"\u01F1\u01F5\u01FA\u01FF\u0203\u0207\u020B\u0210\u0215\u0219\u021D\u0221"+
		"\u0226\u0229\u022E\u0232\u0238\u023C\u0245\u0248\u024B\u024E\u0251\u0254"+
		"\u0257\u025D\u0261\u0264\u0267\u026C\u0271\u0274\u0278\u027E\u0281\u0284"+
		"\u0287\u028B\u028E\u0291\u0296\u029A\u029D\u02A0\u02A8\u02AA\u02B3\u02B7"+
		"\u02BA\u02BD\u02C1\u02C4\u02C7\u02CC\u02D4\u02DB\u02DD\u02E1\u02EA\u02EE"+
		"\u02F2\u02F7\u02FB\u02FE\u0300\u0308\u030B\u030E\u0311\u0315\u0318\u031B"+
		"\u0320\u0324\u0327\u032A\u0330\u0333\u0336\u0339\u033C\u033F\u0342\u0348"+
		"\u034C\u034F\u0352\u0357\u035C\u0360\u0366\u036A\u036E\u0372\u0375\u0378"+
		"\u037B\u037E\u0381\u0384\u0388\u038B\u038E\u0392\u0395\u0398\u039C\u03A0"+
		"\u03A3\u03A6\u03AA\u03AD\u03B0\u03B4\u03B6\u03BC\u03C0\u03CA\u03D1\u03D4"+
		"\u03D7\u03DC\u03E1\u03E3\u03EF\u03F3\u03F8\u03FA\u0400\u0409\u040F\u041A"+
		"\u041D";
	public static readonly _serializedATN: string = Utils.join(
		[
			XDocSyntaxParser._serializedATNSegment0,
			XDocSyntaxParser._serializedATNSegment1,
			XDocSyntaxParser._serializedATNSegment2
		],
		""
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XDocSyntaxParser.__ATN) {
			XDocSyntaxParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XDocSyntaxParser._serializedATN));
		}

		return XDocSyntaxParser.__ATN;
	}

}

export class DocumentationContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(XDocSyntaxParser.EOF, 0); }
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.NEWLINE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_documentation; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterDocumentation) listener.enterDocumentation(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitDocumentation) listener.exitDocumentation(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitDocumentation) return visitor.visitDocumentation(this);
		else return visitor.visitChildren(this);
	}
}


export class BodyContext extends ParserRuleContext {
	public annotations(): AnnotationsContext {
		return this.getRuleContext(0, AnnotationsContext);
	}
	public whitespace(): WhitespaceContext[];
	public whitespace(i: number): WhitespaceContext;
	public whitespace(i?: number): WhitespaceContext | WhitespaceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WhitespaceContext);
		} else {
			return this.getRuleContext(i, WhitespaceContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_body; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterBody) listener.enterBody(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitBody) listener.exitBody(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitBody) return visitor.visitBody(this);
		else return visitor.visitChildren(this);
	}
}


export class WhitespaceContext extends ParserRuleContext {
	public SPACE(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.SPACE, 0); }
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.NEWLINE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_whitespace; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterWhitespace) listener.enterWhitespace(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitWhitespace) listener.exitWhitespace(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitWhitespace) return visitor.visitWhitespace(this);
		else return visitor.visitChildren(this);
	}
}


export class AnnotationsContext extends ParserRuleContext {
	public tag(): TagContext[];
	public tag(i: number): TagContext;
	public tag(i?: number): TagContext | TagContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagContext);
		} else {
			return this.getRuleContext(i, TagContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.NEWLINE);
		} else {
			return this.getToken(XDocSyntaxParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_annotations; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterAnnotations) listener.enterAnnotations(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitAnnotations) listener.exitAnnotations(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitAnnotations) return visitor.visitAnnotations(this);
		else return visitor.visitChildren(this);
	}
}


export class TagContext extends ParserRuleContext {
	public tagName(): TagNameContext {
		return this.getRuleContext(0, TagNameContext);
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.SPACE);
		} else {
			return this.getToken(XDocSyntaxParser.SPACE, i);
		}
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.MINUS, 0); }
	public description(): DescriptionContext | undefined {
		return this.tryGetRuleContext(0, DescriptionContext);
	}
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.NEWLINE, 0); }
	public tagIdentifier(): TagIdentifierContext | undefined {
		return this.tryGetRuleContext(0, TagIdentifierContext);
	}
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.EQUAL, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.COLON, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_tag; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterTag) listener.enterTag(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitTag) listener.exitTag(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitTag) return visitor.visitTag(this);
		else return visitor.visitChildren(this);
	}
}


export class TagNameContext extends ParserRuleContext {
	public AT(): TerminalNode { return this.getToken(XDocSyntaxParser.AT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_tagName; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterTagName) listener.enterTagName(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitTagName) listener.exitTagName(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitTagName) return visitor.visitTagName(this);
		else return visitor.visitChildren(this);
	}
}


export class TagIdentifierContext extends ParserRuleContext {
	public propertyTagIdentifier(): PropertyTagIdentifierContext | undefined {
		return this.tryGetRuleContext(0, PropertyTagIdentifierContext);
	}
	public optionalTagIdentifier(): OptionalTagIdentifierContext | undefined {
		return this.tryGetRuleContext(0, OptionalTagIdentifierContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_tagIdentifier; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterTagIdentifier) listener.enterTagIdentifier(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitTagIdentifier) listener.exitTagIdentifier(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitTagIdentifier) return visitor.visitTagIdentifier(this);
		else return visitor.visitChildren(this);
	}
}


export class PropertyTagIdentifierContext extends ParserRuleContext {
	public optionalTagIdentifier(): OptionalTagIdentifierContext | undefined {
		return this.tryGetRuleContext(0, OptionalTagIdentifierContext);
	}
	public PERIOD(): TerminalNode[];
	public PERIOD(i: number): TerminalNode;
	public PERIOD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.PERIOD);
		} else {
			return this.getToken(XDocSyntaxParser.PERIOD, i);
		}
	}
	public optionalTagOrIdentifier(): OptionalTagOrIdentifierContext[];
	public optionalTagOrIdentifier(i: number): OptionalTagOrIdentifierContext;
	public optionalTagOrIdentifier(i?: number): OptionalTagOrIdentifierContext | OptionalTagOrIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionalTagOrIdentifierContext);
		} else {
			return this.getRuleContext(i, OptionalTagOrIdentifierContext);
		}
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_propertyTagIdentifier; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterPropertyTagIdentifier) listener.enterPropertyTagIdentifier(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitPropertyTagIdentifier) listener.exitPropertyTagIdentifier(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitPropertyTagIdentifier) return visitor.visitPropertyTagIdentifier(this);
		else return visitor.visitChildren(this);
	}
}


export class OptionalTagIdentifierContext extends ParserRuleContext {
	public optionalIdentifier(): OptionalIdentifierContext {
		return this.getRuleContext(0, OptionalIdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_optionalTagIdentifier; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterOptionalTagIdentifier) listener.enterOptionalTagIdentifier(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitOptionalTagIdentifier) listener.exitOptionalTagIdentifier(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitOptionalTagIdentifier) return visitor.visitOptionalTagIdentifier(this);
		else return visitor.visitChildren(this);
	}
}


export class OptionalTagOrIdentifierContext extends ParserRuleContext {
	public optionalTagIdentifier(): OptionalTagIdentifierContext | undefined {
		return this.tryGetRuleContext(0, OptionalTagIdentifierContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_optionalTagOrIdentifier; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterOptionalTagOrIdentifier) listener.enterOptionalTagOrIdentifier(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitOptionalTagOrIdentifier) listener.exitOptionalTagOrIdentifier(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitOptionalTagOrIdentifier) return visitor.visitOptionalTagOrIdentifier(this);
		else return visitor.visitChildren(this);
	}
}


export class IdentifierContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(XDocSyntaxParser.ID, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_identifier; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterIdentifier) listener.enterIdentifier(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitIdentifier) listener.exitIdentifier(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) return visitor.visitIdentifier(this);
		else return visitor.visitChildren(this);
	}
}


export class OptionalIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public QUESTION(): TerminalNode { return this.getToken(XDocSyntaxParser.QUESTION, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_optionalIdentifier; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterOptionalIdentifier) listener.enterOptionalIdentifier(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitOptionalIdentifier) listener.exitOptionalIdentifier(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitOptionalIdentifier) return visitor.visitOptionalIdentifier(this);
		else return visitor.visitChildren(this);
	}
}


export class TypeContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public PIPE(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.PIPE, 0); }
	public AMP(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.AMP, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.SPACE);
		} else {
			return this.getToken(XDocSyntaxParser.SPACE, i);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.NEWLINE);
		} else {
			return this.getToken(XDocSyntaxParser.NEWLINE, i);
		}
	}
	public lambdaType(): LambdaTypeContext | undefined {
		return this.tryGetRuleContext(0, LambdaTypeContext);
	}
	public tupleType(): TupleTypeContext | undefined {
		return this.tryGetRuleContext(0, TupleTypeContext);
	}
	public primaryType(): PrimaryTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimaryTypeContext);
	}
	public parenthesizedType(): ParenthesizedTypeContext | undefined {
		return this.tryGetRuleContext(0, ParenthesizedTypeContext);
	}
	public unaryType(): UnaryTypeContext | undefined {
		return this.tryGetRuleContext(0, UnaryTypeContext);
	}
	public objectType(): ObjectTypeContext | undefined {
		return this.tryGetRuleContext(0, ObjectTypeContext);
	}
	public arrayType(): ArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, ArrayTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_type; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterType) listener.enterType(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitType) listener.exitType(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitType) return visitor.visitType(this);
		else return visitor.visitChildren(this);
	}
}


export class LambdaTypeContext extends ParserRuleContext {
	public PAREN_OPEN(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.PAREN_OPEN, 0); }
	public PAREN_CLOSE(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.PAREN_CLOSE, 0); }
	public ARROW(): TerminalNode { return this.getToken(XDocSyntaxParser.ARROW, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.SPACE);
		} else {
			return this.getToken(XDocSyntaxParser.SPACE, i);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.NEWLINE);
		} else {
			return this.getToken(XDocSyntaxParser.NEWLINE, i);
		}
	}
	public formalParameterSequence(): FormalParameterSequenceContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterSequenceContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.QUESTION, 0); }
	public parameter(): ParameterContext | undefined {
		return this.tryGetRuleContext(0, ParameterContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_lambdaType; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterLambdaType) listener.enterLambdaType(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitLambdaType) listener.exitLambdaType(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitLambdaType) return visitor.visitLambdaType(this);
		else return visitor.visitChildren(this);
	}
}


export class FormalParameterSequenceContext extends ParserRuleContext {
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.COMMA);
		} else {
			return this.getToken(XDocSyntaxParser.COMMA, i);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.NEWLINE);
		} else {
			return this.getToken(XDocSyntaxParser.NEWLINE, i);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.SPACE);
		} else {
			return this.getToken(XDocSyntaxParser.SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_formalParameterSequence; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterFormalParameterSequence) listener.enterFormalParameterSequence(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitFormalParameterSequence) listener.exitFormalParameterSequence(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitFormalParameterSequence) return visitor.visitFormalParameterSequence(this);
		else return visitor.visitChildren(this);
	}
}


export class ParameterContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.COLON, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.SPACE);
		} else {
			return this.getToken(XDocSyntaxParser.SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_parameter; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterParameter) listener.enterParameter(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitParameter) listener.exitParameter(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitParameter) return visitor.visitParameter(this);
		else return visitor.visitChildren(this);
	}
}


export class TupleTypeContext extends ParserRuleContext {
	public LESSTHAN(): TerminalNode { return this.getToken(XDocSyntaxParser.LESSTHAN, 0); }
	public tupleTypeSequence(): TupleTypeSequenceContext {
		return this.getRuleContext(0, TupleTypeSequenceContext);
	}
	public GREATERTHAN(): TerminalNode { return this.getToken(XDocSyntaxParser.GREATERTHAN, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.SPACE);
		} else {
			return this.getToken(XDocSyntaxParser.SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_tupleType; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterTupleType) listener.enterTupleType(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitTupleType) listener.exitTupleType(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitTupleType) return visitor.visitTupleType(this);
		else return visitor.visitChildren(this);
	}
}


export class TupleTypeSequenceContext extends ParserRuleContext {
	public primaryType(): PrimaryTypeContext[];
	public primaryType(i: number): PrimaryTypeContext;
	public primaryType(i?: number): PrimaryTypeContext | PrimaryTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrimaryTypeContext);
		} else {
			return this.getRuleContext(i, PrimaryTypeContext);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.SPACE);
		} else {
			return this.getToken(XDocSyntaxParser.SPACE, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.COMMA);
		} else {
			return this.getToken(XDocSyntaxParser.COMMA, i);
		}
	}
	public tupleTypeSequence(): TupleTypeSequenceContext[];
	public tupleTypeSequence(i: number): TupleTypeSequenceContext;
	public tupleTypeSequence(i?: number): TupleTypeSequenceContext | TupleTypeSequenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TupleTypeSequenceContext);
		} else {
			return this.getRuleContext(i, TupleTypeSequenceContext);
		}
	}
	public EXTENDS(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.EXTENDS, 0); }
	public AMP(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.AMP, 0); }
	public PIPE(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.PIPE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_tupleTypeSequence; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterTupleTypeSequence) listener.enterTupleTypeSequence(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitTupleTypeSequence) listener.exitTupleTypeSequence(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitTupleTypeSequence) return visitor.visitTupleTypeSequence(this);
		else return visitor.visitChildren(this);
	}
}


export class PrimaryTypeContext extends ParserRuleContext {
	public optionalIdentifier(): OptionalIdentifierContext | undefined {
		return this.tryGetRuleContext(0, OptionalIdentifierContext);
	}
	public propertyIdentifier(): PropertyIdentifierContext | undefined {
		return this.tryGetRuleContext(0, PropertyIdentifierContext);
	}
	public identifierOrKeyword(): IdentifierOrKeywordContext | undefined {
		return this.tryGetRuleContext(0, IdentifierOrKeywordContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_primaryType; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterPrimaryType) listener.enterPrimaryType(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitPrimaryType) listener.exitPrimaryType(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitPrimaryType) return visitor.visitPrimaryType(this);
		else return visitor.visitChildren(this);
	}
}


export class IdentifierOrKeywordContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public keyword(): KeywordContext | undefined {
		return this.tryGetRuleContext(0, KeywordContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_identifierOrKeyword; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterIdentifierOrKeyword) listener.enterIdentifierOrKeyword(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitIdentifierOrKeyword) listener.exitIdentifierOrKeyword(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitIdentifierOrKeyword) return visitor.visitIdentifierOrKeyword(this);
		else return visitor.visitChildren(this);
	}
}


export class KeywordContext extends ParserRuleContext {
	public NullLiteral(): TerminalNode { return this.getToken(XDocSyntaxParser.NullLiteral, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_keyword; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterKeyword) listener.enterKeyword(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitKeyword) listener.exitKeyword(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitKeyword) return visitor.visitKeyword(this);
		else return visitor.visitChildren(this);
	}
}


export class ParenthesizedTypeContext extends ParserRuleContext {
	public PAREN_OPEN(): TerminalNode { return this.getToken(XDocSyntaxParser.PAREN_OPEN, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public PAREN_CLOSE(): TerminalNode { return this.getToken(XDocSyntaxParser.PAREN_CLOSE, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.SPACE);
		} else {
			return this.getToken(XDocSyntaxParser.SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_parenthesizedType; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterParenthesizedType) listener.enterParenthesizedType(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitParenthesizedType) listener.exitParenthesizedType(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitParenthesizedType) return visitor.visitParenthesizedType(this);
		else return visitor.visitChildren(this);
	}
}


export class UnaryTypeContext extends ParserRuleContext {
	public primaryType(): PrimaryTypeContext {
		return this.getRuleContext(0, PrimaryTypeContext);
	}
	public AMP(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.AMP, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.STAR, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_unaryType; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterUnaryType) listener.enterUnaryType(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitUnaryType) listener.exitUnaryType(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitUnaryType) return visitor.visitUnaryType(this);
		else return visitor.visitChildren(this);
	}
}


export class ObjectTypeContext extends ParserRuleContext {
	public BRACE_OPEN(): TerminalNode { return this.getToken(XDocSyntaxParser.BRACE_OPEN, 0); }
	public BRACE_CLOSE(): TerminalNode { return this.getToken(XDocSyntaxParser.BRACE_CLOSE, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.SPACE);
		} else {
			return this.getToken(XDocSyntaxParser.SPACE, i);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.NEWLINE);
		} else {
			return this.getToken(XDocSyntaxParser.NEWLINE, i);
		}
	}
	public objectPairSequenceType(): ObjectPairSequenceTypeContext | undefined {
		return this.tryGetRuleContext(0, ObjectPairSequenceTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_objectType; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterObjectType) listener.enterObjectType(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitObjectType) listener.exitObjectType(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitObjectType) return visitor.visitObjectType(this);
		else return visitor.visitChildren(this);
	}
}


export class ObjectPairSequenceTypeContext extends ParserRuleContext {
	public objectPairType(): ObjectPairTypeContext[];
	public objectPairType(i: number): ObjectPairTypeContext;
	public objectPairType(i?: number): ObjectPairTypeContext | ObjectPairTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectPairTypeContext);
		} else {
			return this.getRuleContext(i, ObjectPairTypeContext);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.SPACE);
		} else {
			return this.getToken(XDocSyntaxParser.SPACE, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.COMMA);
		} else {
			return this.getToken(XDocSyntaxParser.COMMA, i);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.NEWLINE);
		} else {
			return this.getToken(XDocSyntaxParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_objectPairSequenceType; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterObjectPairSequenceType) listener.enterObjectPairSequenceType(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitObjectPairSequenceType) listener.exitObjectPairSequenceType(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitObjectPairSequenceType) return visitor.visitObjectPairSequenceType(this);
		else return visitor.visitChildren(this);
	}
}


export class ObjectPairTypeContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public COLON(): TerminalNode { return this.getToken(XDocSyntaxParser.COLON, 0); }
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.QUESTION, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.SPACE);
		} else {
			return this.getToken(XDocSyntaxParser.SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_objectPairType; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterObjectPairType) listener.enterObjectPairType(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitObjectPairType) listener.exitObjectPairType(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitObjectPairType) return visitor.visitObjectPairType(this);
		else return visitor.visitChildren(this);
	}
}


export class ArrayTypeContext extends ParserRuleContext {
	public BRACKET_OPEN(): TerminalNode[];
	public BRACKET_OPEN(i: number): TerminalNode;
	public BRACKET_OPEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.BRACKET_OPEN);
		} else {
			return this.getToken(XDocSyntaxParser.BRACKET_OPEN, i);
		}
	}
	public BRACKET_CLOSE(): TerminalNode[];
	public BRACKET_CLOSE(i: number): TerminalNode;
	public BRACKET_CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.BRACKET_CLOSE);
		} else {
			return this.getToken(XDocSyntaxParser.BRACKET_CLOSE, i);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.NEWLINE);
		} else {
			return this.getToken(XDocSyntaxParser.NEWLINE, i);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.SPACE);
		} else {
			return this.getToken(XDocSyntaxParser.SPACE, i);
		}
	}
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.COMMA);
		} else {
			return this.getToken(XDocSyntaxParser.COMMA, i);
		}
	}
	public notArrayType(): NotArrayTypeContext | undefined {
		return this.tryGetRuleContext(0, NotArrayTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_arrayType; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterArrayType) listener.enterArrayType(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitArrayType) listener.exitArrayType(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitArrayType) return visitor.visitArrayType(this);
		else return visitor.visitChildren(this);
	}
}


export class NotArrayTypeContext extends ParserRuleContext {
	public notArrayType(): NotArrayTypeContext[];
	public notArrayType(i: number): NotArrayTypeContext;
	public notArrayType(i?: number): NotArrayTypeContext | NotArrayTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NotArrayTypeContext);
		} else {
			return this.getRuleContext(i, NotArrayTypeContext);
		}
	}
	public PIPE(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.PIPE, 0); }
	public AMP(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.AMP, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.SPACE);
		} else {
			return this.getToken(XDocSyntaxParser.SPACE, i);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.NEWLINE);
		} else {
			return this.getToken(XDocSyntaxParser.NEWLINE, i);
		}
	}
	public lambdaType(): LambdaTypeContext | undefined {
		return this.tryGetRuleContext(0, LambdaTypeContext);
	}
	public tupleType(): TupleTypeContext | undefined {
		return this.tryGetRuleContext(0, TupleTypeContext);
	}
	public primaryType(): PrimaryTypeContext | undefined {
		return this.tryGetRuleContext(0, PrimaryTypeContext);
	}
	public parenthesizedType(): ParenthesizedTypeContext | undefined {
		return this.tryGetRuleContext(0, ParenthesizedTypeContext);
	}
	public unaryType(): UnaryTypeContext | undefined {
		return this.tryGetRuleContext(0, UnaryTypeContext);
	}
	public objectType(): ObjectTypeContext | undefined {
		return this.tryGetRuleContext(0, ObjectTypeContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_notArrayType; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterNotArrayType) listener.enterNotArrayType(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitNotArrayType) listener.exitNotArrayType(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitNotArrayType) return visitor.visitNotArrayType(this);
		else return visitor.visitChildren(this);
	}
}


export class PropertyIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public PERIOD(): TerminalNode[];
	public PERIOD(i: number): TerminalNode;
	public PERIOD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.PERIOD);
		} else {
			return this.getToken(XDocSyntaxParser.PERIOD, i);
		}
	}
	public optionalIdentifierOrIdentifier(): OptionalIdentifierOrIdentifierContext[];
	public optionalIdentifierOrIdentifier(i: number): OptionalIdentifierOrIdentifierContext;
	public optionalIdentifierOrIdentifier(i?: number): OptionalIdentifierOrIdentifierContext | OptionalIdentifierOrIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OptionalIdentifierOrIdentifierContext);
		} else {
			return this.getRuleContext(i, OptionalIdentifierOrIdentifierContext);
		}
	}
	public optionalIdentifier(): OptionalIdentifierContext | undefined {
		return this.tryGetRuleContext(0, OptionalIdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_propertyIdentifier; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterPropertyIdentifier) listener.enterPropertyIdentifier(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitPropertyIdentifier) listener.exitPropertyIdentifier(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitPropertyIdentifier) return visitor.visitPropertyIdentifier(this);
		else return visitor.visitChildren(this);
	}
}


export class OptionalIdentifierOrIdentifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public optionalIdentifier(): OptionalIdentifierContext | undefined {
		return this.tryGetRuleContext(0, OptionalIdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_optionalIdentifierOrIdentifier; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterOptionalIdentifierOrIdentifier) listener.enterOptionalIdentifierOrIdentifier(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitOptionalIdentifierOrIdentifier) listener.exitOptionalIdentifierOrIdentifier(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitOptionalIdentifierOrIdentifier) return visitor.visitOptionalIdentifierOrIdentifier(this);
		else return visitor.visitChildren(this);
	}
}


export class ExpressionContext extends ParserRuleContext {
	public unaryExpression(): UnaryExpressionContext | undefined {
		return this.tryGetRuleContext(0, UnaryExpressionContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public STAR(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.STAR, 0); }
	public FORWARD_SLASH(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.FORWARD_SLASH, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.SPACE);
		} else {
			return this.getToken(XDocSyntaxParser.SPACE, i);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.MINUS, 0); }
	public arrayExpression(): ArrayExpressionContext | undefined {
		return this.tryGetRuleContext(0, ArrayExpressionContext);
	}
	public objectExpression(): ObjectExpressionContext | undefined {
		return this.tryGetRuleContext(0, ObjectExpressionContext);
	}
	public lambdaExpression(): LambdaExpressionContext | undefined {
		return this.tryGetRuleContext(0, LambdaExpressionContext);
	}
	public literalExpression(): LiteralExpressionContext | undefined {
		return this.tryGetRuleContext(0, LiteralExpressionContext);
	}
	public parenthesizedExpression(): ParenthesizedExpressionContext | undefined {
		return this.tryGetRuleContext(0, ParenthesizedExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_expression; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterExpression) listener.enterExpression(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitExpression) listener.exitExpression(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitExpression) return visitor.visitExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.MINUS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_unaryExpression; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterUnaryExpression) listener.enterUnaryExpression(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitUnaryExpression) listener.exitUnaryExpression(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) return visitor.visitUnaryExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ArrayExpressionContext extends ParserRuleContext {
	public BRACKET_OPEN(): TerminalNode { return this.getToken(XDocSyntaxParser.BRACKET_OPEN, 0); }
	public BRACKET_CLOSE(): TerminalNode { return this.getToken(XDocSyntaxParser.BRACKET_CLOSE, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.NEWLINE);
		} else {
			return this.getToken(XDocSyntaxParser.NEWLINE, i);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.SPACE);
		} else {
			return this.getToken(XDocSyntaxParser.SPACE, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.COMMA);
		} else {
			return this.getToken(XDocSyntaxParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_arrayExpression; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterArrayExpression) listener.enterArrayExpression(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitArrayExpression) listener.exitArrayExpression(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitArrayExpression) return visitor.visitArrayExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ObjectExpressionContext extends ParserRuleContext {
	public BRACE_OPEN(): TerminalNode { return this.getToken(XDocSyntaxParser.BRACE_OPEN, 0); }
	public BRACE_CLOSE(): TerminalNode { return this.getToken(XDocSyntaxParser.BRACE_CLOSE, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.SPACE);
		} else {
			return this.getToken(XDocSyntaxParser.SPACE, i);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.NEWLINE);
		} else {
			return this.getToken(XDocSyntaxParser.NEWLINE, i);
		}
	}
	public objectPairSequenceExpression(): ObjectPairSequenceExpressionContext | undefined {
		return this.tryGetRuleContext(0, ObjectPairSequenceExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_objectExpression; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterObjectExpression) listener.enterObjectExpression(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitObjectExpression) listener.exitObjectExpression(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitObjectExpression) return visitor.visitObjectExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ObjectPairSequenceExpressionContext extends ParserRuleContext {
	public objectPairExpression(): ObjectPairExpressionContext[];
	public objectPairExpression(i: number): ObjectPairExpressionContext;
	public objectPairExpression(i?: number): ObjectPairExpressionContext | ObjectPairExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectPairExpressionContext);
		} else {
			return this.getRuleContext(i, ObjectPairExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.COMMA);
		} else {
			return this.getToken(XDocSyntaxParser.COMMA, i);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.SPACE);
		} else {
			return this.getToken(XDocSyntaxParser.SPACE, i);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.NEWLINE);
		} else {
			return this.getToken(XDocSyntaxParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_objectPairSequenceExpression; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterObjectPairSequenceExpression) listener.enterObjectPairSequenceExpression(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitObjectPairSequenceExpression) listener.exitObjectPairSequenceExpression(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitObjectPairSequenceExpression) return visitor.visitObjectPairSequenceExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ObjectPairExpressionContext extends ParserRuleContext {
	public literalExpression(): LiteralExpressionContext[];
	public literalExpression(i: number): LiteralExpressionContext;
	public literalExpression(i?: number): LiteralExpressionContext | LiteralExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralExpressionContext);
		} else {
			return this.getRuleContext(i, LiteralExpressionContext);
		}
	}
	public COLON(): TerminalNode { return this.getToken(XDocSyntaxParser.COLON, 0); }
	public objectExpression(): ObjectExpressionContext | undefined {
		return this.tryGetRuleContext(0, ObjectExpressionContext);
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.SPACE);
		} else {
			return this.getToken(XDocSyntaxParser.SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_objectPairExpression; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterObjectPairExpression) listener.enterObjectPairExpression(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitObjectPairExpression) listener.exitObjectPairExpression(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitObjectPairExpression) return visitor.visitObjectPairExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class LambdaExpressionContext extends ParserRuleContext {
	public PAREN_OPEN(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.PAREN_OPEN, 0); }
	public PAREN_CLOSE(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.PAREN_CLOSE, 0); }
	public ARROW(): TerminalNode { return this.getToken(XDocSyntaxParser.ARROW, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.SPACE);
		} else {
			return this.getToken(XDocSyntaxParser.SPACE, i);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.NEWLINE);
		} else {
			return this.getToken(XDocSyntaxParser.NEWLINE, i);
		}
	}
	public formalParameterSequence(): FormalParameterSequenceContext | undefined {
		return this.tryGetRuleContext(0, FormalParameterSequenceContext);
	}
	public QUESTION(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.QUESTION, 0); }
	public parameter(): ParameterContext | undefined {
		return this.tryGetRuleContext(0, ParameterContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_lambdaExpression; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterLambdaExpression) listener.enterLambdaExpression(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitLambdaExpression) listener.exitLambdaExpression(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitLambdaExpression) return visitor.visitLambdaExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class LiteralExpressionContext extends ParserRuleContext {
	public NumberLiteral(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.NumberLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.BooleanLiteral, 0); }
	public CharacterLiteral(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.CharacterLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.StringLiteral, 0); }
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.NullLiteral, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_literalExpression; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterLiteralExpression) listener.enterLiteralExpression(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitLiteralExpression) listener.exitLiteralExpression(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitLiteralExpression) return visitor.visitLiteralExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class ParenthesizedExpressionContext extends ParserRuleContext {
	public PAREN_OPEN(): TerminalNode { return this.getToken(XDocSyntaxParser.PAREN_OPEN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public PAREN_CLOSE(): TerminalNode { return this.getToken(XDocSyntaxParser.PAREN_CLOSE, 0); }
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.SPACE);
		} else {
			return this.getToken(XDocSyntaxParser.SPACE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_parenthesizedExpression; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterParenthesizedExpression) listener.enterParenthesizedExpression(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitParenthesizedExpression) listener.exitParenthesizedExpression(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) return visitor.visitParenthesizedExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class DescriptionContext extends ParserRuleContext {
	public descriptionLine(): DescriptionLineContext {
		return this.getRuleContext(0, DescriptionLineContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_description; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterDescription) listener.enterDescription(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitDescription) listener.exitDescription(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitDescription) return visitor.visitDescription(this);
		else return visitor.visitChildren(this);
	}
}


export class DescriptionLineContext extends ParserRuleContext {
	public descriptionLineStart(): DescriptionLineStartContext | undefined {
		return this.tryGetRuleContext(0, DescriptionLineStartContext);
	}
	public descriptionLineElement(): DescriptionLineElementContext[];
	public descriptionLineElement(i: number): DescriptionLineElementContext;
	public descriptionLineElement(i?: number): DescriptionLineElementContext | DescriptionLineElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DescriptionLineElementContext);
		} else {
			return this.getRuleContext(i, DescriptionLineElementContext);
		}
	}
	public inlineTag(): InlineTagContext | undefined {
		return this.tryGetRuleContext(0, InlineTagContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_descriptionLine; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterDescriptionLine) listener.enterDescriptionLine(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitDescriptionLine) listener.exitDescriptionLine(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitDescriptionLine) return visitor.visitDescriptionLine(this);
		else return visitor.visitChildren(this);
	}
}


export class DescriptionLineStartContext extends ParserRuleContext {
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.SPACE);
		} else {
			return this.getToken(XDocSyntaxParser.SPACE, i);
		}
	}
	public descriptionText(): DescriptionTextContext[];
	public descriptionText(i: number): DescriptionTextContext;
	public descriptionText(i?: number): DescriptionTextContext | DescriptionTextContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DescriptionTextContext);
		} else {
			return this.getRuleContext(i, DescriptionTextContext);
		}
	}
	public AT(): TerminalNode[];
	public AT(i: number): TerminalNode;
	public AT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.AT);
		} else {
			return this.getToken(XDocSyntaxParser.AT, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_descriptionLineStart; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterDescriptionLineStart) listener.enterDescriptionLineStart(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitDescriptionLineStart) listener.exitDescriptionLineStart(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitDescriptionLineStart) return visitor.visitDescriptionLineStart(this);
		else return visitor.visitChildren(this);
	}
}


export class DescriptionTextContext extends ParserRuleContext {
	public TEXT_CONTENT(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.TEXT_CONTENT, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.ID, 0); }
	public FORWARD_SLASH(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.FORWARD_SLASH, 0); }
	public BRACE_OPEN(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.BRACE_OPEN, 0); }
	public BRACE_CLOSE(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.BRACE_CLOSE, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.COLON, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.MINUS, 0); }
	public PERIOD(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.PERIOD, 0); }
	public literalExpression(): LiteralExpressionContext | undefined {
		return this.tryGetRuleContext(0, LiteralExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_descriptionText; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterDescriptionText) listener.enterDescriptionText(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitDescriptionText) listener.exitDescriptionText(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitDescriptionText) return visitor.visitDescriptionText(this);
		else return visitor.visitChildren(this);
	}
}


export class DescriptionLineElementContext extends ParserRuleContext {
	public inlineTag(): InlineTagContext | undefined {
		return this.tryGetRuleContext(0, InlineTagContext);
	}
	public descriptionLineText(): DescriptionLineTextContext | undefined {
		return this.tryGetRuleContext(0, DescriptionLineTextContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_descriptionLineElement; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterDescriptionLineElement) listener.enterDescriptionLineElement(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitDescriptionLineElement) listener.exitDescriptionLineElement(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitDescriptionLineElement) return visitor.visitDescriptionLineElement(this);
		else return visitor.visitChildren(this);
	}
}


export class DescriptionLineTextContext extends ParserRuleContext {
	public descriptionText(): DescriptionTextContext[];
	public descriptionText(i: number): DescriptionTextContext;
	public descriptionText(i?: number): DescriptionTextContext | DescriptionTextContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DescriptionTextContext);
		} else {
			return this.getRuleContext(i, DescriptionTextContext);
		}
	}
	public SPACE(): TerminalNode[];
	public SPACE(i: number): TerminalNode;
	public SPACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.SPACE);
		} else {
			return this.getToken(XDocSyntaxParser.SPACE, i);
		}
	}
	public AT(): TerminalNode[];
	public AT(i: number): TerminalNode;
	public AT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.AT);
		} else {
			return this.getToken(XDocSyntaxParser.AT, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_descriptionLineText; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterDescriptionLineText) listener.enterDescriptionLineText(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitDescriptionLineText) listener.exitDescriptionLineText(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitDescriptionLineText) return visitor.visitDescriptionLineText(this);
		else return visitor.visitChildren(this);
	}
}


export class InlineTagContext extends ParserRuleContext {
	public INLINE_TAG_START(): TerminalNode { return this.getToken(XDocSyntaxParser.INLINE_TAG_START, 0); }
	public inlineTagName(): InlineTagNameContext {
		return this.getRuleContext(0, InlineTagNameContext);
	}
	public SPACE(): TerminalNode { return this.getToken(XDocSyntaxParser.SPACE, 0); }
	public BRACE_CLOSE(): TerminalNode { return this.getToken(XDocSyntaxParser.BRACE_CLOSE, 0); }
	public inlineTagBody(): InlineTagBodyContext | undefined {
		return this.tryGetRuleContext(0, InlineTagBodyContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_inlineTag; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterInlineTag) listener.enterInlineTag(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitInlineTag) listener.exitInlineTag(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitInlineTag) return visitor.visitInlineTag(this);
		else return visitor.visitChildren(this);
	}
}


export class InlineTagNameContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_inlineTagName; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterInlineTagName) listener.enterInlineTagName(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitInlineTagName) listener.exitInlineTagName(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitInlineTagName) return visitor.visitInlineTagName(this);
		else return visitor.visitChildren(this);
	}
}


export class InlineTagBodyContext extends ParserRuleContext {
	public braceBody(): BraceBodyContext[];
	public braceBody(i: number): BraceBodyContext;
	public braceBody(i?: number): BraceBodyContext | BraceBodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BraceBodyContext);
		} else {
			return this.getRuleContext(i, BraceBodyContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_inlineTagBody; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterInlineTagBody) listener.enterInlineTagBody(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitInlineTagBody) listener.exitInlineTagBody(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitInlineTagBody) return visitor.visitInlineTagBody(this);
		else return visitor.visitChildren(this);
	}
}


export class BraceExpressionContext extends ParserRuleContext {
	public BRACE_OPEN(): TerminalNode { return this.getToken(XDocSyntaxParser.BRACE_OPEN, 0); }
	public BRACE_CLOSE(): TerminalNode { return this.getToken(XDocSyntaxParser.BRACE_CLOSE, 0); }
	public braceBody(): BraceBodyContext[];
	public braceBody(i: number): BraceBodyContext;
	public braceBody(i?: number): BraceBodyContext | BraceBodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BraceBodyContext);
		} else {
			return this.getRuleContext(i, BraceBodyContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_braceExpression; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterBraceExpression) listener.enterBraceExpression(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitBraceExpression) listener.exitBraceExpression(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitBraceExpression) return visitor.visitBraceExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class BraceBodyContext extends ParserRuleContext {
	public braceExpression(): BraceExpressionContext | undefined {
		return this.tryGetRuleContext(0, BraceExpressionContext);
	}
	public braceText(): BraceTextContext[];
	public braceText(i: number): BraceTextContext;
	public braceText(i?: number): BraceTextContext | BraceTextContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BraceTextContext);
		} else {
			return this.getRuleContext(i, BraceTextContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XDocSyntaxParser.NEWLINE);
		} else {
			return this.getToken(XDocSyntaxParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_braceBody; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterBraceBody) listener.enterBraceBody(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitBraceBody) listener.exitBraceBody(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitBraceBody) return visitor.visitBraceBody(this);
		else return visitor.visitChildren(this);
	}
}


export class BraceTextContext extends ParserRuleContext {
	public TEXT_CONTENT(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.TEXT_CONTENT, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.ID, 0); }
	public SPACE(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.SPACE, 0); }
	public FORWARD_SLASH(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.FORWARD_SLASH, 0); }
	public NEWLINE(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.NEWLINE, 0); }
	public PERIOD(): TerminalNode | undefined { return this.tryGetToken(XDocSyntaxParser.PERIOD, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return XDocSyntaxParser.RULE_braceText; }
	@Override
	public enterRule(listener: XDocSyntaxParserListener): void {
		if (listener.enterBraceText) listener.enterBraceText(this);
	}
	@Override
	public exitRule(listener: XDocSyntaxParserListener): void {
		if (listener.exitBraceText) listener.exitBraceText(this);
	}
	@Override
	public accept<Result>(visitor: XDocSyntaxParserVisitor<Result>): Result {
		if (visitor.visitBraceText) return visitor.visitBraceText(this);
		else return visitor.visitChildren(this);
	}
}


