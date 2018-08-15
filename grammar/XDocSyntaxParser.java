// Generated from /Users/takeshi/Documents/GitHub/xdoc-parser/grammar/XDocSyntaxParser.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class XDocSyntaxParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		NumberLiteral=1, IntegerLiteral=2, FloatingPointLiteral=3, BooleanLiteral=4, 
		CharacterLiteral=5, StringLiteral=6, NullLiteral=7, EXTENDS=8, ID=9, NEWLINE=10, 
		SPACE=11, TEXT_CONTENT=12, AT=13, PLUS=14, MINUS=15, STAR=16, FORWARD_SLASH=17, 
		COLON=18, PERIOD=19, COMMA=20, EQUAL=21, QUESTION=22, AMP=23, PIPE=24, 
		ARROW=25, EXCLAMATION=26, INLINE_TAG_START=27, BRACE_OPEN=28, BRACE_CLOSE=29, 
		PAREN_OPEN=30, PAREN_CLOSE=31, BRACKET_OPEN=32, BRACKET_CLOSE=33, LESSTHAN=34, 
		GREATERTHAN=35;
	public static final int
		RULE_documentation = 0, RULE_body = 1, RULE_whitespace = 2, RULE_annotations = 3, 
		RULE_tag = 4, RULE_tagName = 5, RULE_tagIdentifier = 6, RULE_propertyTagIdentifier = 7, 
		RULE_optionalTagIdentifier = 8, RULE_optionalTagOrIdentifier = 9, RULE_identifier = 10, 
		RULE_optionalIdentifier = 11, RULE_type = 12, RULE_lambdaType = 13, RULE_formalParameterSequence = 14, 
		RULE_parameter = 15, RULE_tupleType = 16, RULE_tupleTypeSequence = 17, 
		RULE_primaryType = 18, RULE_identifierOrKeyword = 19, RULE_keyword = 20, 
		RULE_parenthesizedType = 21, RULE_unaryType = 22, RULE_objectType = 23, 
		RULE_objectPairSequenceType = 24, RULE_objectPairType = 25, RULE_arrayType = 26, 
		RULE_notArrayType = 27, RULE_propertyIdentifier = 28, RULE_optionalIdentifierOrIdentifier = 29, 
		RULE_expression = 30, RULE_unaryExpression = 31, RULE_arrayExpression = 32, 
		RULE_objectExpression = 33, RULE_objectPairSequenceExpression = 34, RULE_objectPairExpression = 35, 
		RULE_lambdaExpression = 36, RULE_literalExpression = 37, RULE_parenthesizedExpression = 38, 
		RULE_description = 39, RULE_descriptionLine = 40, RULE_descriptionLineStart = 41, 
		RULE_descriptionText = 42, RULE_descriptionLineElement = 43, RULE_descriptionLineText = 44, 
		RULE_inlineTag = 45, RULE_inlineTagName = 46, RULE_inlineTagBody = 47, 
		RULE_braceExpression = 48, RULE_braceBody = 49, RULE_braceText = 50;
	public static final String[] ruleNames = {
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
	};

	private static final String[] _LITERAL_NAMES = {
		null, null, null, null, null, null, null, null, "'extends'", null, null, 
		null, null, "'@'", "'+'", "'-'", "'*'", "'/'", "':'", "'.'", "','", "'='", 
		"'?'", "'&'", "'|'", null, "'!'", "'{@'", "'{'", "'}'", "'('", "')'", 
		"'['", "']'", "'<'", "'>'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "NumberLiteral", "IntegerLiteral", "FloatingPointLiteral", "BooleanLiteral", 
		"CharacterLiteral", "StringLiteral", "NullLiteral", "EXTENDS", "ID", "NEWLINE", 
		"SPACE", "TEXT_CONTENT", "AT", "PLUS", "MINUS", "STAR", "FORWARD_SLASH", 
		"COLON", "PERIOD", "COMMA", "EQUAL", "QUESTION", "AMP", "PIPE", "ARROW", 
		"EXCLAMATION", "INLINE_TAG_START", "BRACE_OPEN", "BRACE_CLOSE", "PAREN_OPEN", 
		"PAREN_CLOSE", "BRACKET_OPEN", "BRACKET_CLOSE", "LESSTHAN", "GREATERTHAN"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "XDocSyntaxParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public XDocSyntaxParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class DocumentationContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(XDocSyntaxParser.EOF, 0); }
		public BodyContext body() {
			return getRuleContext(BodyContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(XDocSyntaxParser.NEWLINE, 0); }
		public DocumentationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_documentation; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterDocumentation(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitDocumentation(this);
		}
	}

	public final DocumentationContext documentation() throws RecognitionException {
		DocumentationContext _localctx = new DocumentationContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_documentation);
		int _la;
		try {
			setState(109);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case EOF:
				enterOuterAlt(_localctx, 1);
				{
				setState(102);
				match(EOF);
				}
				break;
			case NEWLINE:
			case SPACE:
			case AT:
				enterOuterAlt(_localctx, 2);
				{
				setState(103);
				body();
				setState(105);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NEWLINE) {
					{
					setState(104);
					match(NEWLINE);
					}
				}

				setState(107);
				match(EOF);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BodyContext extends ParserRuleContext {
		public AnnotationsContext annotations() {
			return getRuleContext(AnnotationsContext.class,0);
		}
		public List<WhitespaceContext> whitespace() {
			return getRuleContexts(WhitespaceContext.class);
		}
		public WhitespaceContext whitespace(int i) {
			return getRuleContext(WhitespaceContext.class,i);
		}
		public BodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_body; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterBody(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitBody(this);
		}
	}

	public final BodyContext body() throws RecognitionException {
		BodyContext _localctx = new BodyContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_body);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(114);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NEWLINE || _la==SPACE) {
				{
				{
				setState(111);
				whitespace();
				}
				}
				setState(116);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(117);
			annotations();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WhitespaceContext extends ParserRuleContext {
		public TerminalNode SPACE() { return getToken(XDocSyntaxParser.SPACE, 0); }
		public TerminalNode NEWLINE() { return getToken(XDocSyntaxParser.NEWLINE, 0); }
		public WhitespaceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whitespace; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterWhitespace(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitWhitespace(this);
		}
	}

	public final WhitespaceContext whitespace() throws RecognitionException {
		WhitespaceContext _localctx = new WhitespaceContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_whitespace);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(119);
			_la = _input.LA(1);
			if ( !(_la==NEWLINE || _la==SPACE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AnnotationsContext extends ParserRuleContext {
		public List<TagContext> tag() {
			return getRuleContexts(TagContext.class);
		}
		public TagContext tag(int i) {
			return getRuleContext(TagContext.class,i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(XDocSyntaxParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(XDocSyntaxParser.NEWLINE, i);
		}
		public AnnotationsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_annotations; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterAnnotations(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitAnnotations(this);
		}
	}

	public final AnnotationsContext annotations() throws RecognitionException {
		AnnotationsContext _localctx = new AnnotationsContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_annotations);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(121);
			tag();
			setState(126);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(122);
					match(NEWLINE);
					setState(123);
					tag();
					}
					} 
				}
				setState(128);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TagContext extends ParserRuleContext {
		public TagNameContext tagName() {
			return getRuleContext(TagNameContext.class,0);
		}
		public List<TerminalNode> SPACE() { return getTokens(XDocSyntaxParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(XDocSyntaxParser.SPACE, i);
		}
		public TerminalNode MINUS() { return getToken(XDocSyntaxParser.MINUS, 0); }
		public DescriptionContext description() {
			return getRuleContext(DescriptionContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(XDocSyntaxParser.NEWLINE, 0); }
		public TagIdentifierContext tagIdentifier() {
			return getRuleContext(TagIdentifierContext.class,0);
		}
		public TerminalNode EQUAL() { return getToken(XDocSyntaxParser.EQUAL, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode COLON() { return getToken(XDocSyntaxParser.COLON, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TagContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tag; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterTag(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitTag(this);
		}
	}

	public final TagContext tag() throws RecognitionException {
		TagContext _localctx = new TagContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_tag);
		int _la;
		try {
			setState(288);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,29,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(129);
				tagName();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(130);
				tagName();
				setState(131);
				match(SPACE);
				setState(133);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NEWLINE) {
					{
					setState(132);
					match(NEWLINE);
					}
				}

				setState(135);
				match(MINUS);
				setState(136);
				match(SPACE);
				setState(137);
				description();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(139);
				tagName();
				setState(140);
				match(SPACE);
				setState(141);
				tagIdentifier();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(143);
				tagName();
				setState(144);
				match(SPACE);
				setState(145);
				tagIdentifier();
				setState(147);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(146);
					match(SPACE);
					}
				}

				setState(149);
				match(EQUAL);
				setState(151);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(150);
					match(SPACE);
					}
				}

				setState(153);
				expression(0);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(155);
				tagName();
				setState(156);
				match(SPACE);
				setState(157);
				tagIdentifier();
				setState(158);
				match(SPACE);
				setState(160);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NEWLINE) {
					{
					setState(159);
					match(NEWLINE);
					}
				}

				setState(162);
				match(MINUS);
				setState(163);
				match(SPACE);
				setState(164);
				description();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(166);
				tagName();
				setState(167);
				match(SPACE);
				setState(168);
				tagIdentifier();
				setState(169);
				match(SPACE);
				setState(170);
				match(EQUAL);
				setState(172);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(171);
					match(SPACE);
					}
				}

				setState(174);
				expression(0);
				setState(175);
				match(SPACE);
				setState(177);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NEWLINE) {
					{
					setState(176);
					match(NEWLINE);
					}
				}

				setState(179);
				match(MINUS);
				setState(180);
				match(SPACE);
				setState(181);
				description();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(183);
				tagName();
				setState(184);
				match(SPACE);
				setState(185);
				tagIdentifier();
				setState(187);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(186);
					match(SPACE);
					}
				}

				setState(189);
				match(COLON);
				setState(191);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(190);
					match(SPACE);
					}
				}

				setState(193);
				type(0);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(195);
				tagName();
				setState(196);
				match(SPACE);
				setState(197);
				tagIdentifier();
				setState(199);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(198);
					match(SPACE);
					}
				}

				setState(201);
				match(COLON);
				setState(203);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(202);
					match(SPACE);
					}
				}

				setState(205);
				type(0);
				setState(207);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(206);
					match(SPACE);
					}
				}

				setState(209);
				match(EQUAL);
				setState(211);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(210);
					match(SPACE);
					}
				}

				setState(213);
				expression(0);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(215);
				tagName();
				setState(216);
				match(SPACE);
				setState(217);
				tagIdentifier();
				setState(219);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(218);
					match(SPACE);
					}
				}

				setState(221);
				match(COLON);
				setState(223);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(222);
					match(SPACE);
					}
				}

				setState(225);
				type(0);
				setState(226);
				match(SPACE);
				setState(228);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NEWLINE) {
					{
					setState(227);
					match(NEWLINE);
					}
				}

				setState(230);
				match(MINUS);
				setState(231);
				match(SPACE);
				setState(232);
				description();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(234);
				tagName();
				setState(235);
				match(SPACE);
				setState(236);
				tagIdentifier();
				setState(238);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(237);
					match(SPACE);
					}
				}

				setState(240);
				match(COLON);
				setState(242);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(241);
					match(SPACE);
					}
				}

				setState(244);
				type(0);
				setState(246);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(245);
					match(SPACE);
					}
				}

				setState(248);
				match(EQUAL);
				setState(250);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(249);
					match(SPACE);
					}
				}

				setState(252);
				expression(0);
				setState(253);
				match(SPACE);
				setState(255);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NEWLINE) {
					{
					setState(254);
					match(NEWLINE);
					}
				}

				setState(257);
				match(MINUS);
				setState(258);
				match(SPACE);
				setState(259);
				description();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(261);
				tagName();
				setState(263);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(262);
					match(SPACE);
					}
				}

				setState(265);
				match(COLON);
				setState(267);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(266);
					match(SPACE);
					}
				}

				setState(269);
				type(0);
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(271);
				tagName();
				setState(273);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(272);
					match(SPACE);
					}
				}

				setState(275);
				match(COLON);
				setState(277);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(276);
					match(SPACE);
					}
				}

				setState(279);
				type(0);
				setState(280);
				match(SPACE);
				setState(282);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NEWLINE) {
					{
					setState(281);
					match(NEWLINE);
					}
				}

				setState(284);
				match(MINUS);
				setState(285);
				match(SPACE);
				setState(286);
				description();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TagNameContext extends ParserRuleContext {
		public TerminalNode AT() { return getToken(XDocSyntaxParser.AT, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TagNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tagName; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterTagName(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitTagName(this);
		}
	}

	public final TagNameContext tagName() throws RecognitionException {
		TagNameContext _localctx = new TagNameContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_tagName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(290);
			match(AT);
			setState(291);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TagIdentifierContext extends ParserRuleContext {
		public PropertyTagIdentifierContext propertyTagIdentifier() {
			return getRuleContext(PropertyTagIdentifierContext.class,0);
		}
		public OptionalTagIdentifierContext optionalTagIdentifier() {
			return getRuleContext(OptionalTagIdentifierContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TagIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tagIdentifier; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterTagIdentifier(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitTagIdentifier(this);
		}
	}

	public final TagIdentifierContext tagIdentifier() throws RecognitionException {
		TagIdentifierContext _localctx = new TagIdentifierContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_tagIdentifier);
		try {
			setState(296);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(293);
				propertyTagIdentifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(294);
				optionalTagIdentifier();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(295);
				identifier();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PropertyTagIdentifierContext extends ParserRuleContext {
		public OptionalTagIdentifierContext optionalTagIdentifier() {
			return getRuleContext(OptionalTagIdentifierContext.class,0);
		}
		public List<TerminalNode> PERIOD() { return getTokens(XDocSyntaxParser.PERIOD); }
		public TerminalNode PERIOD(int i) {
			return getToken(XDocSyntaxParser.PERIOD, i);
		}
		public List<OptionalTagOrIdentifierContext> optionalTagOrIdentifier() {
			return getRuleContexts(OptionalTagOrIdentifierContext.class);
		}
		public OptionalTagOrIdentifierContext optionalTagOrIdentifier(int i) {
			return getRuleContext(OptionalTagOrIdentifierContext.class,i);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public PropertyTagIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_propertyTagIdentifier; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterPropertyTagIdentifier(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitPropertyTagIdentifier(this);
		}
	}

	public final PropertyTagIdentifierContext propertyTagIdentifier() throws RecognitionException {
		PropertyTagIdentifierContext _localctx = new PropertyTagIdentifierContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_propertyTagIdentifier);
		int _la;
		try {
			setState(312);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(298);
				optionalTagIdentifier();
				setState(301); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(299);
					match(PERIOD);
					setState(300);
					optionalTagOrIdentifier();
					}
					}
					setState(303); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==PERIOD );
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(305);
				identifier();
				setState(308); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(306);
					match(PERIOD);
					setState(307);
					optionalTagOrIdentifier();
					}
					}
					setState(310); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==PERIOD );
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OptionalTagIdentifierContext extends ParserRuleContext {
		public OptionalIdentifierContext optionalIdentifier() {
			return getRuleContext(OptionalIdentifierContext.class,0);
		}
		public OptionalTagIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_optionalTagIdentifier; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterOptionalTagIdentifier(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitOptionalTagIdentifier(this);
		}
	}

	public final OptionalTagIdentifierContext optionalTagIdentifier() throws RecognitionException {
		OptionalTagIdentifierContext _localctx = new OptionalTagIdentifierContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_optionalTagIdentifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(314);
			optionalIdentifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OptionalTagOrIdentifierContext extends ParserRuleContext {
		public OptionalTagIdentifierContext optionalTagIdentifier() {
			return getRuleContext(OptionalTagIdentifierContext.class,0);
		}
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public OptionalTagOrIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_optionalTagOrIdentifier; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterOptionalTagOrIdentifier(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitOptionalTagOrIdentifier(this);
		}
	}

	public final OptionalTagOrIdentifierContext optionalTagOrIdentifier() throws RecognitionException {
		OptionalTagOrIdentifierContext _localctx = new OptionalTagOrIdentifierContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_optionalTagOrIdentifier);
		try {
			setState(318);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,34,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(316);
				optionalTagIdentifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(317);
				identifier();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(XDocSyntaxParser.ID, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterIdentifier(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitIdentifier(this);
		}
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(320);
			match(ID);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OptionalIdentifierContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode QUESTION() { return getToken(XDocSyntaxParser.QUESTION, 0); }
		public OptionalIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_optionalIdentifier; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterOptionalIdentifier(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitOptionalIdentifier(this);
		}
	}

	public final OptionalIdentifierContext optionalIdentifier() throws RecognitionException {
		OptionalIdentifierContext _localctx = new OptionalIdentifierContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_optionalIdentifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(322);
			identifier();
			setState(323);
			match(QUESTION);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypeContext extends ParserRuleContext {
		public LambdaTypeContext lambdaType() {
			return getRuleContext(LambdaTypeContext.class,0);
		}
		public TupleTypeContext tupleType() {
			return getRuleContext(TupleTypeContext.class,0);
		}
		public PrimaryTypeContext primaryType() {
			return getRuleContext(PrimaryTypeContext.class,0);
		}
		public ParenthesizedTypeContext parenthesizedType() {
			return getRuleContext(ParenthesizedTypeContext.class,0);
		}
		public UnaryTypeContext unaryType() {
			return getRuleContext(UnaryTypeContext.class,0);
		}
		public ObjectTypeContext objectType() {
			return getRuleContext(ObjectTypeContext.class,0);
		}
		public ArrayTypeContext arrayType() {
			return getRuleContext(ArrayTypeContext.class,0);
		}
		public List<TypeContext> type() {
			return getRuleContexts(TypeContext.class);
		}
		public TypeContext type(int i) {
			return getRuleContext(TypeContext.class,i);
		}
		public TerminalNode PIPE() { return getToken(XDocSyntaxParser.PIPE, 0); }
		public TerminalNode AMP() { return getToken(XDocSyntaxParser.AMP, 0); }
		public List<TerminalNode> SPACE() { return getTokens(XDocSyntaxParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(XDocSyntaxParser.SPACE, i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(XDocSyntaxParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(XDocSyntaxParser.NEWLINE, i);
		}
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitType(this);
		}
	}

	public final TypeContext type() throws RecognitionException {
		return type(0);
	}

	private TypeContext type(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		TypeContext _localctx = new TypeContext(_ctx, _parentState);
		TypeContext _prevctx = _localctx;
		int _startState = 24;
		enterRecursionRule(_localctx, 24, RULE_type, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(333);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,35,_ctx) ) {
			case 1:
				{
				setState(326);
				lambdaType();
				}
				break;
			case 2:
				{
				setState(327);
				tupleType();
				}
				break;
			case 3:
				{
				setState(328);
				primaryType();
				}
				break;
			case 4:
				{
				setState(329);
				parenthesizedType();
				}
				break;
			case 5:
				{
				setState(330);
				unaryType();
				}
				break;
			case 6:
				{
				setState(331);
				objectType();
				}
				break;
			case 7:
				{
				setState(332);
				arrayType();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(358);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,42,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_type);
					setState(335);
					if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
					setState(337);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,36,_ctx) ) {
					case 1:
						{
						setState(336);
						match(SPACE);
						}
						break;
					}
					setState(340);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==NEWLINE) {
						{
						setState(339);
						match(NEWLINE);
						}
					}

					setState(343);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==SPACE) {
						{
						setState(342);
						match(SPACE);
						}
					}

					setState(345);
					_la = _input.LA(1);
					if ( !(_la==AMP || _la==PIPE) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(347);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,39,_ctx) ) {
					case 1:
						{
						setState(346);
						match(SPACE);
						}
						break;
					}
					setState(350);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==NEWLINE) {
						{
						setState(349);
						match(NEWLINE);
						}
					}

					setState(353);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==SPACE) {
						{
						setState(352);
						match(SPACE);
						}
					}

					setState(355);
					type(9);
					}
					} 
				}
				setState(360);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,42,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class LambdaTypeContext extends ParserRuleContext {
		public TerminalNode PAREN_OPEN() { return getToken(XDocSyntaxParser.PAREN_OPEN, 0); }
		public TerminalNode PAREN_CLOSE() { return getToken(XDocSyntaxParser.PAREN_CLOSE, 0); }
		public TerminalNode ARROW() { return getToken(XDocSyntaxParser.ARROW, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public List<TerminalNode> SPACE() { return getTokens(XDocSyntaxParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(XDocSyntaxParser.SPACE, i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(XDocSyntaxParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(XDocSyntaxParser.NEWLINE, i);
		}
		public FormalParameterSequenceContext formalParameterSequence() {
			return getRuleContext(FormalParameterSequenceContext.class,0);
		}
		public TerminalNode QUESTION() { return getToken(XDocSyntaxParser.QUESTION, 0); }
		public ParameterContext parameter() {
			return getRuleContext(ParameterContext.class,0);
		}
		public LambdaTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lambdaType; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterLambdaType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitLambdaType(this);
		}
	}

	public final LambdaTypeContext lambdaType() throws RecognitionException {
		LambdaTypeContext _localctx = new LambdaTypeContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_lambdaType);
		int _la;
		try {
			setState(431);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PAREN_OPEN:
				enterOuterAlt(_localctx, 1);
				{
				setState(361);
				match(PAREN_OPEN);
				setState(363);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,43,_ctx) ) {
				case 1:
					{
					setState(362);
					match(SPACE);
					}
					break;
				}
				setState(366);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,44,_ctx) ) {
				case 1:
					{
					setState(365);
					match(NEWLINE);
					}
					break;
				}
				setState(369);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,45,_ctx) ) {
				case 1:
					{
					setState(368);
					match(SPACE);
					}
					break;
				}
				setState(372);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==ID) {
					{
					setState(371);
					formalParameterSequence();
					}
				}

				setState(375);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,47,_ctx) ) {
				case 1:
					{
					setState(374);
					match(SPACE);
					}
					break;
				}
				setState(378);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NEWLINE) {
					{
					setState(377);
					match(NEWLINE);
					}
				}

				setState(381);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(380);
					match(SPACE);
					}
				}

				setState(383);
				match(PAREN_CLOSE);
				setState(385);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,50,_ctx) ) {
				case 1:
					{
					setState(384);
					match(SPACE);
					}
					break;
				}
				setState(388);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NEWLINE) {
					{
					setState(387);
					match(NEWLINE);
					}
				}

				setState(391);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(390);
					match(SPACE);
					}
				}

				setState(393);
				match(ARROW);
				setState(395);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,53,_ctx) ) {
				case 1:
					{
					setState(394);
					match(SPACE);
					}
					break;
				}
				setState(398);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NEWLINE) {
					{
					setState(397);
					match(NEWLINE);
					}
				}

				setState(401);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(400);
					match(SPACE);
					}
				}

				setState(403);
				type(0);
				setState(405);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,56,_ctx) ) {
				case 1:
					{
					setState(404);
					match(QUESTION);
					}
					break;
				}
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 2);
				{
				setState(407);
				parameter();
				setState(409);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,57,_ctx) ) {
				case 1:
					{
					setState(408);
					match(SPACE);
					}
					break;
				}
				setState(412);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NEWLINE) {
					{
					setState(411);
					match(NEWLINE);
					}
				}

				setState(415);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(414);
					match(SPACE);
					}
				}

				setState(417);
				match(ARROW);
				setState(419);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,60,_ctx) ) {
				case 1:
					{
					setState(418);
					match(SPACE);
					}
					break;
				}
				setState(422);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NEWLINE) {
					{
					setState(421);
					match(NEWLINE);
					}
				}

				setState(425);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(424);
					match(SPACE);
					}
				}

				setState(427);
				type(0);
				setState(429);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,63,_ctx) ) {
				case 1:
					{
					setState(428);
					match(QUESTION);
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FormalParameterSequenceContext extends ParserRuleContext {
		public List<ParameterContext> parameter() {
			return getRuleContexts(ParameterContext.class);
		}
		public ParameterContext parameter(int i) {
			return getRuleContext(ParameterContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(XDocSyntaxParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(XDocSyntaxParser.COMMA, i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(XDocSyntaxParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(XDocSyntaxParser.NEWLINE, i);
		}
		public List<TerminalNode> SPACE() { return getTokens(XDocSyntaxParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(XDocSyntaxParser.SPACE, i);
		}
		public FormalParameterSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_formalParameterSequence; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterFormalParameterSequence(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitFormalParameterSequence(this);
		}
	}

	public final FormalParameterSequenceContext formalParameterSequence() throws RecognitionException {
		FormalParameterSequenceContext _localctx = new FormalParameterSequenceContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_formalParameterSequence);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(433);
			parameter();
			setState(444);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(434);
				match(COMMA);
				setState(436);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NEWLINE) {
					{
					setState(435);
					match(NEWLINE);
					}
				}

				setState(439);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(438);
					match(SPACE);
					}
				}

				setState(441);
				parameter();
				}
				}
				setState(446);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParameterContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode COLON() { return getToken(XDocSyntaxParser.COLON, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public List<TerminalNode> SPACE() { return getTokens(XDocSyntaxParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(XDocSyntaxParser.SPACE, i);
		}
		public ParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameter; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterParameter(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitParameter(this);
		}
	}

	public final ParameterContext parameter() throws RecognitionException {
		ParameterContext _localctx = new ParameterContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_parameter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(447);
			identifier();
			setState(456);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,70,_ctx) ) {
			case 1:
				{
				setState(449);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(448);
					match(SPACE);
					}
				}

				setState(451);
				match(COLON);
				setState(453);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(452);
					match(SPACE);
					}
				}

				setState(455);
				type(0);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TupleTypeContext extends ParserRuleContext {
		public TerminalNode LESSTHAN() { return getToken(XDocSyntaxParser.LESSTHAN, 0); }
		public TupleTypeSequenceContext tupleTypeSequence() {
			return getRuleContext(TupleTypeSequenceContext.class,0);
		}
		public TerminalNode GREATERTHAN() { return getToken(XDocSyntaxParser.GREATERTHAN, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public List<TerminalNode> SPACE() { return getTokens(XDocSyntaxParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(XDocSyntaxParser.SPACE, i);
		}
		public TupleTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tupleType; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterTupleType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitTupleType(this);
		}
	}

	public final TupleTypeContext tupleType() throws RecognitionException {
		TupleTypeContext _localctx = new TupleTypeContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_tupleType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(459);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ID) {
				{
				setState(458);
				identifier();
				}
			}

			setState(461);
			match(LESSTHAN);
			setState(463);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SPACE) {
				{
				setState(462);
				match(SPACE);
				}
			}

			setState(465);
			tupleTypeSequence();
			setState(467);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SPACE) {
				{
				setState(466);
				match(SPACE);
				}
			}

			setState(469);
			match(GREATERTHAN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TupleTypeSequenceContext extends ParserRuleContext {
		public List<PrimaryTypeContext> primaryType() {
			return getRuleContexts(PrimaryTypeContext.class);
		}
		public PrimaryTypeContext primaryType(int i) {
			return getRuleContext(PrimaryTypeContext.class,i);
		}
		public List<TerminalNode> SPACE() { return getTokens(XDocSyntaxParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(XDocSyntaxParser.SPACE, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(XDocSyntaxParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(XDocSyntaxParser.COMMA, i);
		}
		public List<TupleTypeSequenceContext> tupleTypeSequence() {
			return getRuleContexts(TupleTypeSequenceContext.class);
		}
		public TupleTypeSequenceContext tupleTypeSequence(int i) {
			return getRuleContext(TupleTypeSequenceContext.class,i);
		}
		public TerminalNode EXTENDS() { return getToken(XDocSyntaxParser.EXTENDS, 0); }
		public TerminalNode AMP() { return getToken(XDocSyntaxParser.AMP, 0); }
		public TerminalNode PIPE() { return getToken(XDocSyntaxParser.PIPE, 0); }
		public TupleTypeSequenceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tupleTypeSequence; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterTupleTypeSequence(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitTupleTypeSequence(this);
		}
	}

	public final TupleTypeSequenceContext tupleTypeSequence() throws RecognitionException {
		TupleTypeSequenceContext _localctx = new TupleTypeSequenceContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_tupleTypeSequence);
		int _la;
		try {
			int _alt;
			setState(551);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,92,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(471);
				primaryType();
				setState(473);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,74,_ctx) ) {
				case 1:
					{
					setState(472);
					match(SPACE);
					}
					break;
				}
				setState(482);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,76,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(475);
						match(COMMA);
						setState(477);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==SPACE) {
							{
							setState(476);
							match(SPACE);
							}
						}

						setState(479);
						tupleTypeSequence();
						}
						} 
					}
					setState(484);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,76,_ctx);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(485);
				primaryType();
				setState(487);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(486);
					match(SPACE);
					}
				}

				setState(489);
				match(EXTENDS);
				setState(491);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(490);
					match(SPACE);
					}
				}

				setState(493);
				primaryType();
				setState(495);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,79,_ctx) ) {
				case 1:
					{
					setState(494);
					match(SPACE);
					}
					break;
				}
				setState(504);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,81,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(497);
						match(COMMA);
						setState(499);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==SPACE) {
							{
							setState(498);
							match(SPACE);
							}
						}

						setState(501);
						tupleTypeSequence();
						}
						} 
					}
					setState(506);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,81,_ctx);
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(507);
				primaryType();
				setState(509);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(508);
					match(SPACE);
					}
				}

				setState(511);
				match(AMP);
				setState(513);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(512);
					match(SPACE);
					}
				}

				setState(515);
				primaryType();
				setState(517);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,84,_ctx) ) {
				case 1:
					{
					setState(516);
					match(SPACE);
					}
					break;
				}
				setState(526);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,86,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(519);
						match(COMMA);
						setState(521);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==SPACE) {
							{
							setState(520);
							match(SPACE);
							}
						}

						setState(523);
						tupleTypeSequence();
						}
						} 
					}
					setState(528);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,86,_ctx);
				}
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(529);
				primaryType();
				setState(531);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(530);
					match(SPACE);
					}
				}

				setState(533);
				match(PIPE);
				setState(535);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(534);
					match(SPACE);
					}
				}

				setState(537);
				primaryType();
				setState(539);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,89,_ctx) ) {
				case 1:
					{
					setState(538);
					match(SPACE);
					}
					break;
				}
				setState(548);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,91,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(541);
						match(COMMA);
						setState(543);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==SPACE) {
							{
							setState(542);
							match(SPACE);
							}
						}

						setState(545);
						tupleTypeSequence();
						}
						} 
					}
					setState(550);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,91,_ctx);
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrimaryTypeContext extends ParserRuleContext {
		public OptionalIdentifierContext optionalIdentifier() {
			return getRuleContext(OptionalIdentifierContext.class,0);
		}
		public PropertyIdentifierContext propertyIdentifier() {
			return getRuleContext(PropertyIdentifierContext.class,0);
		}
		public IdentifierOrKeywordContext identifierOrKeyword() {
			return getRuleContext(IdentifierOrKeywordContext.class,0);
		}
		public PrimaryTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primaryType; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterPrimaryType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitPrimaryType(this);
		}
	}

	public final PrimaryTypeContext primaryType() throws RecognitionException {
		PrimaryTypeContext _localctx = new PrimaryTypeContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_primaryType);
		try {
			setState(556);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,93,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(553);
				optionalIdentifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(554);
				propertyIdentifier();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(555);
				identifierOrKeyword();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdentifierOrKeywordContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public KeywordContext keyword() {
			return getRuleContext(KeywordContext.class,0);
		}
		public IdentifierOrKeywordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifierOrKeyword; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterIdentifierOrKeyword(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitIdentifierOrKeyword(this);
		}
	}

	public final IdentifierOrKeywordContext identifierOrKeyword() throws RecognitionException {
		IdentifierOrKeywordContext _localctx = new IdentifierOrKeywordContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_identifierOrKeyword);
		try {
			setState(560);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(558);
				identifier();
				}
				break;
			case NullLiteral:
				enterOuterAlt(_localctx, 2);
				{
				setState(559);
				keyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KeywordContext extends ParserRuleContext {
		public TerminalNode NullLiteral() { return getToken(XDocSyntaxParser.NullLiteral, 0); }
		public KeywordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_keyword; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterKeyword(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitKeyword(this);
		}
	}

	public final KeywordContext keyword() throws RecognitionException {
		KeywordContext _localctx = new KeywordContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_keyword);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(562);
			match(NullLiteral);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParenthesizedTypeContext extends ParserRuleContext {
		public TerminalNode PAREN_OPEN() { return getToken(XDocSyntaxParser.PAREN_OPEN, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public TerminalNode PAREN_CLOSE() { return getToken(XDocSyntaxParser.PAREN_CLOSE, 0); }
		public List<TerminalNode> SPACE() { return getTokens(XDocSyntaxParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(XDocSyntaxParser.SPACE, i);
		}
		public ParenthesizedTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parenthesizedType; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterParenthesizedType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitParenthesizedType(this);
		}
	}

	public final ParenthesizedTypeContext parenthesizedType() throws RecognitionException {
		ParenthesizedTypeContext _localctx = new ParenthesizedTypeContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_parenthesizedType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(564);
			match(PAREN_OPEN);
			setState(566);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SPACE) {
				{
				setState(565);
				match(SPACE);
				}
			}

			setState(568);
			type(0);
			setState(570);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SPACE) {
				{
				setState(569);
				match(SPACE);
				}
			}

			setState(572);
			match(PAREN_CLOSE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnaryTypeContext extends ParserRuleContext {
		public PrimaryTypeContext primaryType() {
			return getRuleContext(PrimaryTypeContext.class,0);
		}
		public TerminalNode AMP() { return getToken(XDocSyntaxParser.AMP, 0); }
		public TerminalNode STAR() { return getToken(XDocSyntaxParser.STAR, 0); }
		public UnaryTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unaryType; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterUnaryType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitUnaryType(this);
		}
	}

	public final UnaryTypeContext unaryType() throws RecognitionException {
		UnaryTypeContext _localctx = new UnaryTypeContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_unaryType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(574);
			_la = _input.LA(1);
			if ( !(_la==STAR || _la==AMP) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(575);
			primaryType();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ObjectTypeContext extends ParserRuleContext {
		public TerminalNode BRACE_OPEN() { return getToken(XDocSyntaxParser.BRACE_OPEN, 0); }
		public TerminalNode BRACE_CLOSE() { return getToken(XDocSyntaxParser.BRACE_CLOSE, 0); }
		public List<TerminalNode> SPACE() { return getTokens(XDocSyntaxParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(XDocSyntaxParser.SPACE, i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(XDocSyntaxParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(XDocSyntaxParser.NEWLINE, i);
		}
		public ObjectPairSequenceTypeContext objectPairSequenceType() {
			return getRuleContext(ObjectPairSequenceTypeContext.class,0);
		}
		public ObjectTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectType; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterObjectType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitObjectType(this);
		}
	}

	public final ObjectTypeContext objectType() throws RecognitionException {
		ObjectTypeContext _localctx = new ObjectTypeContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_objectType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(577);
			match(BRACE_OPEN);
			setState(579);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,97,_ctx) ) {
			case 1:
				{
				setState(578);
				match(SPACE);
				}
				break;
			}
			setState(582);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,98,_ctx) ) {
			case 1:
				{
				setState(581);
				match(NEWLINE);
				}
				break;
			}
			setState(585);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,99,_ctx) ) {
			case 1:
				{
				setState(584);
				match(SPACE);
				}
				break;
			}
			setState(588);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NullLiteral) | (1L << ID) | (1L << STAR) | (1L << AMP) | (1L << BRACE_OPEN) | (1L << PAREN_OPEN) | (1L << BRACKET_OPEN) | (1L << LESSTHAN))) != 0)) {
				{
				setState(587);
				objectPairSequenceType();
				}
			}

			setState(591);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,101,_ctx) ) {
			case 1:
				{
				setState(590);
				match(SPACE);
				}
				break;
			}
			setState(594);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==NEWLINE) {
				{
				setState(593);
				match(NEWLINE);
				}
			}

			setState(597);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SPACE) {
				{
				setState(596);
				match(SPACE);
				}
			}

			setState(599);
			match(BRACE_CLOSE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ObjectPairSequenceTypeContext extends ParserRuleContext {
		public List<ObjectPairTypeContext> objectPairType() {
			return getRuleContexts(ObjectPairTypeContext.class);
		}
		public ObjectPairTypeContext objectPairType(int i) {
			return getRuleContext(ObjectPairTypeContext.class,i);
		}
		public List<TerminalNode> SPACE() { return getTokens(XDocSyntaxParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(XDocSyntaxParser.SPACE, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(XDocSyntaxParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(XDocSyntaxParser.COMMA, i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(XDocSyntaxParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(XDocSyntaxParser.NEWLINE, i);
		}
		public ObjectPairSequenceTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectPairSequenceType; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterObjectPairSequenceType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitObjectPairSequenceType(this);
		}
	}

	public final ObjectPairSequenceTypeContext objectPairSequenceType() throws RecognitionException {
		ObjectPairSequenceTypeContext _localctx = new ObjectPairSequenceTypeContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_objectPairSequenceType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(601);
			objectPairType();
			setState(603);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,104,_ctx) ) {
			case 1:
				{
				setState(602);
				match(SPACE);
				}
				break;
			}
			setState(618);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(605);
				match(COMMA);
				setState(607);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,105,_ctx) ) {
				case 1:
					{
					setState(606);
					match(SPACE);
					}
					break;
				}
				setState(610);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NEWLINE) {
					{
					setState(609);
					match(NEWLINE);
					}
				}

				setState(613);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(612);
					match(SPACE);
					}
				}

				setState(615);
				objectPairType();
				}
				}
				setState(620);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ObjectPairTypeContext extends ParserRuleContext {
		public List<TypeContext> type() {
			return getRuleContexts(TypeContext.class);
		}
		public TypeContext type(int i) {
			return getRuleContext(TypeContext.class,i);
		}
		public TerminalNode COLON() { return getToken(XDocSyntaxParser.COLON, 0); }
		public TerminalNode QUESTION() { return getToken(XDocSyntaxParser.QUESTION, 0); }
		public List<TerminalNode> SPACE() { return getTokens(XDocSyntaxParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(XDocSyntaxParser.SPACE, i);
		}
		public ObjectPairTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectPairType; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterObjectPairType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitObjectPairType(this);
		}
	}

	public final ObjectPairTypeContext objectPairType() throws RecognitionException {
		ObjectPairTypeContext _localctx = new ObjectPairTypeContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_objectPairType);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(621);
			type(0);
			setState(623);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==QUESTION) {
				{
				setState(622);
				match(QUESTION);
				}
			}

			setState(626);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SPACE) {
				{
				setState(625);
				match(SPACE);
				}
			}

			setState(628);
			match(COLON);
			setState(630);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SPACE) {
				{
				setState(629);
				match(SPACE);
				}
			}

			setState(632);
			type(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayTypeContext extends ParserRuleContext {
		public List<TerminalNode> BRACKET_OPEN() { return getTokens(XDocSyntaxParser.BRACKET_OPEN); }
		public TerminalNode BRACKET_OPEN(int i) {
			return getToken(XDocSyntaxParser.BRACKET_OPEN, i);
		}
		public List<TerminalNode> BRACKET_CLOSE() { return getTokens(XDocSyntaxParser.BRACKET_CLOSE); }
		public TerminalNode BRACKET_CLOSE(int i) {
			return getToken(XDocSyntaxParser.BRACKET_CLOSE, i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(XDocSyntaxParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(XDocSyntaxParser.NEWLINE, i);
		}
		public List<TerminalNode> SPACE() { return getTokens(XDocSyntaxParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(XDocSyntaxParser.SPACE, i);
		}
		public List<TypeContext> type() {
			return getRuleContexts(TypeContext.class);
		}
		public TypeContext type(int i) {
			return getRuleContext(TypeContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(XDocSyntaxParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(XDocSyntaxParser.COMMA, i);
		}
		public NotArrayTypeContext notArrayType() {
			return getRuleContext(NotArrayTypeContext.class,0);
		}
		public ArrayTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayType; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterArrayType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitArrayType(this);
		}
	}

	public final ArrayTypeContext arrayType() throws RecognitionException {
		ArrayTypeContext _localctx = new ArrayTypeContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_arrayType);
		int _la;
		try {
			int _alt;
			setState(680);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BRACKET_OPEN:
				enterOuterAlt(_localctx, 1);
				{
				setState(634);
				match(BRACKET_OPEN);
				setState(636);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,112,_ctx) ) {
				case 1:
					{
					setState(635);
					match(NEWLINE);
					}
					break;
				}
				setState(639);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,113,_ctx) ) {
				case 1:
					{
					setState(638);
					match(SPACE);
					}
					break;
				}
				setState(642);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,114,_ctx) ) {
				case 1:
					{
					setState(641);
					match(NEWLINE);
					}
					break;
				}
				setState(645);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NullLiteral) | (1L << ID) | (1L << STAR) | (1L << AMP) | (1L << BRACE_OPEN) | (1L << PAREN_OPEN) | (1L << BRACKET_OPEN) | (1L << LESSTHAN))) != 0)) {
					{
					setState(644);
					type(0);
					}
				}

				setState(660);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(647);
					match(COMMA);
					setState(649);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,116,_ctx) ) {
					case 1:
						{
						setState(648);
						match(NEWLINE);
						}
						break;
					}
					setState(652);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==SPACE) {
						{
						setState(651);
						match(SPACE);
						}
					}

					setState(655);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==NEWLINE) {
						{
						setState(654);
						match(NEWLINE);
						}
					}

					setState(657);
					type(0);
					}
					}
					setState(662);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(664);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,120,_ctx) ) {
				case 1:
					{
					setState(663);
					match(NEWLINE);
					}
					break;
				}
				setState(667);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(666);
					match(SPACE);
					}
				}

				setState(670);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NEWLINE) {
					{
					setState(669);
					match(NEWLINE);
					}
				}

				setState(672);
				match(BRACKET_CLOSE);
				}
				break;
			case NullLiteral:
			case ID:
			case STAR:
			case AMP:
			case BRACE_OPEN:
			case PAREN_OPEN:
			case LESSTHAN:
				enterOuterAlt(_localctx, 2);
				{
				setState(673);
				notArrayType(0);
				setState(676); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(674);
						match(BRACKET_OPEN);
						setState(675);
						match(BRACKET_CLOSE);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(678); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,123,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NotArrayTypeContext extends ParserRuleContext {
		public LambdaTypeContext lambdaType() {
			return getRuleContext(LambdaTypeContext.class,0);
		}
		public TupleTypeContext tupleType() {
			return getRuleContext(TupleTypeContext.class,0);
		}
		public PrimaryTypeContext primaryType() {
			return getRuleContext(PrimaryTypeContext.class,0);
		}
		public ParenthesizedTypeContext parenthesizedType() {
			return getRuleContext(ParenthesizedTypeContext.class,0);
		}
		public UnaryTypeContext unaryType() {
			return getRuleContext(UnaryTypeContext.class,0);
		}
		public ObjectTypeContext objectType() {
			return getRuleContext(ObjectTypeContext.class,0);
		}
		public List<NotArrayTypeContext> notArrayType() {
			return getRuleContexts(NotArrayTypeContext.class);
		}
		public NotArrayTypeContext notArrayType(int i) {
			return getRuleContext(NotArrayTypeContext.class,i);
		}
		public TerminalNode PIPE() { return getToken(XDocSyntaxParser.PIPE, 0); }
		public TerminalNode AMP() { return getToken(XDocSyntaxParser.AMP, 0); }
		public List<TerminalNode> SPACE() { return getTokens(XDocSyntaxParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(XDocSyntaxParser.SPACE, i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(XDocSyntaxParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(XDocSyntaxParser.NEWLINE, i);
		}
		public NotArrayTypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_notArrayType; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterNotArrayType(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitNotArrayType(this);
		}
	}

	public final NotArrayTypeContext notArrayType() throws RecognitionException {
		return notArrayType(0);
	}

	private NotArrayTypeContext notArrayType(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		NotArrayTypeContext _localctx = new NotArrayTypeContext(_ctx, _parentState);
		NotArrayTypeContext _prevctx = _localctx;
		int _startState = 54;
		enterRecursionRule(_localctx, 54, RULE_notArrayType, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(689);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,125,_ctx) ) {
			case 1:
				{
				setState(683);
				lambdaType();
				}
				break;
			case 2:
				{
				setState(684);
				tupleType();
				}
				break;
			case 3:
				{
				setState(685);
				primaryType();
				}
				break;
			case 4:
				{
				setState(686);
				parenthesizedType();
				}
				break;
			case 5:
				{
				setState(687);
				unaryType();
				}
				break;
			case 6:
				{
				setState(688);
				objectType();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(714);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,132,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new NotArrayTypeContext(_parentctx, _parentState);
					pushNewRecursionContext(_localctx, _startState, RULE_notArrayType);
					setState(691);
					if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
					setState(693);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,126,_ctx) ) {
					case 1:
						{
						setState(692);
						match(SPACE);
						}
						break;
					}
					setState(696);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==NEWLINE) {
						{
						setState(695);
						match(NEWLINE);
						}
					}

					setState(699);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==SPACE) {
						{
						setState(698);
						match(SPACE);
						}
					}

					setState(701);
					_la = _input.LA(1);
					if ( !(_la==AMP || _la==PIPE) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(703);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,129,_ctx) ) {
					case 1:
						{
						setState(702);
						match(SPACE);
						}
						break;
					}
					setState(706);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==NEWLINE) {
						{
						setState(705);
						match(NEWLINE);
						}
					}

					setState(709);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==SPACE) {
						{
						setState(708);
						match(SPACE);
						}
					}

					setState(711);
					notArrayType(8);
					}
					} 
				}
				setState(716);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,132,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class PropertyIdentifierContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public List<TerminalNode> PERIOD() { return getTokens(XDocSyntaxParser.PERIOD); }
		public TerminalNode PERIOD(int i) {
			return getToken(XDocSyntaxParser.PERIOD, i);
		}
		public List<OptionalIdentifierOrIdentifierContext> optionalIdentifierOrIdentifier() {
			return getRuleContexts(OptionalIdentifierOrIdentifierContext.class);
		}
		public OptionalIdentifierOrIdentifierContext optionalIdentifierOrIdentifier(int i) {
			return getRuleContext(OptionalIdentifierOrIdentifierContext.class,i);
		}
		public OptionalIdentifierContext optionalIdentifier() {
			return getRuleContext(OptionalIdentifierContext.class,0);
		}
		public PropertyIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_propertyIdentifier; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterPropertyIdentifier(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitPropertyIdentifier(this);
		}
	}

	public final PropertyIdentifierContext propertyIdentifier() throws RecognitionException {
		PropertyIdentifierContext _localctx = new PropertyIdentifierContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_propertyIdentifier);
		try {
			int _alt;
			setState(731);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,135,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(717);
				identifier();
				setState(720); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(718);
						match(PERIOD);
						setState(719);
						optionalIdentifierOrIdentifier();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(722); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,133,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(724);
				optionalIdentifier();
				setState(727); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(725);
						match(PERIOD);
						setState(726);
						optionalIdentifierOrIdentifier();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(729); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,134,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OptionalIdentifierOrIdentifierContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public OptionalIdentifierContext optionalIdentifier() {
			return getRuleContext(OptionalIdentifierContext.class,0);
		}
		public OptionalIdentifierOrIdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_optionalIdentifierOrIdentifier; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterOptionalIdentifierOrIdentifier(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitOptionalIdentifierOrIdentifier(this);
		}
	}

	public final OptionalIdentifierOrIdentifierContext optionalIdentifierOrIdentifier() throws RecognitionException {
		OptionalIdentifierOrIdentifierContext _localctx = new OptionalIdentifierOrIdentifierContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_optionalIdentifierOrIdentifier);
		try {
			setState(735);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,136,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(733);
				identifier();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(734);
				optionalIdentifier();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public UnaryExpressionContext unaryExpression() {
			return getRuleContext(UnaryExpressionContext.class,0);
		}
		public ArrayExpressionContext arrayExpression() {
			return getRuleContext(ArrayExpressionContext.class,0);
		}
		public ObjectExpressionContext objectExpression() {
			return getRuleContext(ObjectExpressionContext.class,0);
		}
		public LambdaExpressionContext lambdaExpression() {
			return getRuleContext(LambdaExpressionContext.class,0);
		}
		public LiteralExpressionContext literalExpression() {
			return getRuleContext(LiteralExpressionContext.class,0);
		}
		public ParenthesizedExpressionContext parenthesizedExpression() {
			return getRuleContext(ParenthesizedExpressionContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode STAR() { return getToken(XDocSyntaxParser.STAR, 0); }
		public TerminalNode FORWARD_SLASH() { return getToken(XDocSyntaxParser.FORWARD_SLASH, 0); }
		public List<TerminalNode> SPACE() { return getTokens(XDocSyntaxParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(XDocSyntaxParser.SPACE, i);
		}
		public TerminalNode PLUS() { return getToken(XDocSyntaxParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(XDocSyntaxParser.MINUS, 0); }
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitExpression(this);
		}
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 60;
		enterRecursionRule(_localctx, 60, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(744);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,137,_ctx) ) {
			case 1:
				{
				setState(738);
				unaryExpression();
				}
				break;
			case 2:
				{
				setState(739);
				arrayExpression();
				}
				break;
			case 3:
				{
				setState(740);
				objectExpression();
				}
				break;
			case 4:
				{
				setState(741);
				lambdaExpression();
				}
				break;
			case 5:
				{
				setState(742);
				literalExpression();
				}
				break;
			case 6:
				{
				setState(743);
				parenthesizedExpression();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(766);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,143,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(764);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,142,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(746);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(748);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==SPACE) {
							{
							setState(747);
							match(SPACE);
							}
						}

						setState(750);
						_la = _input.LA(1);
						if ( !(_la==STAR || _la==FORWARD_SLASH) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(752);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==SPACE) {
							{
							setState(751);
							match(SPACE);
							}
						}

						setState(754);
						expression(8);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(755);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(757);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==SPACE) {
							{
							setState(756);
							match(SPACE);
							}
						}

						setState(759);
						_la = _input.LA(1);
						if ( !(_la==PLUS || _la==MINUS) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(761);
						_errHandler.sync(this);
						_la = _input.LA(1);
						if (_la==SPACE) {
							{
							setState(760);
							match(SPACE);
							}
						}

						setState(763);
						expression(7);
						}
						break;
					}
					} 
				}
				setState(768);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,143,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class UnaryExpressionContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode PLUS() { return getToken(XDocSyntaxParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(XDocSyntaxParser.MINUS, 0); }
		public UnaryExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unaryExpression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterUnaryExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitUnaryExpression(this);
		}
	}

	public final UnaryExpressionContext unaryExpression() throws RecognitionException {
		UnaryExpressionContext _localctx = new UnaryExpressionContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_unaryExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(769);
			_la = _input.LA(1);
			if ( !(_la==PLUS || _la==MINUS) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(770);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArrayExpressionContext extends ParserRuleContext {
		public TerminalNode BRACKET_OPEN() { return getToken(XDocSyntaxParser.BRACKET_OPEN, 0); }
		public TerminalNode BRACKET_CLOSE() { return getToken(XDocSyntaxParser.BRACKET_CLOSE, 0); }
		public List<TerminalNode> NEWLINE() { return getTokens(XDocSyntaxParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(XDocSyntaxParser.NEWLINE, i);
		}
		public List<TerminalNode> SPACE() { return getTokens(XDocSyntaxParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(XDocSyntaxParser.SPACE, i);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(XDocSyntaxParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(XDocSyntaxParser.COMMA, i);
		}
		public ArrayExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_arrayExpression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterArrayExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitArrayExpression(this);
		}
	}

	public final ArrayExpressionContext arrayExpression() throws RecognitionException {
		ArrayExpressionContext _localctx = new ArrayExpressionContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_arrayExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(772);
			match(BRACKET_OPEN);
			setState(774);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,144,_ctx) ) {
			case 1:
				{
				setState(773);
				match(NEWLINE);
				}
				break;
			}
			setState(777);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,145,_ctx) ) {
			case 1:
				{
				setState(776);
				match(SPACE);
				}
				break;
			}
			setState(780);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,146,_ctx) ) {
			case 1:
				{
				setState(779);
				match(NEWLINE);
				}
				break;
			}
			setState(783);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NumberLiteral) | (1L << BooleanLiteral) | (1L << CharacterLiteral) | (1L << StringLiteral) | (1L << NullLiteral) | (1L << ID) | (1L << PLUS) | (1L << MINUS) | (1L << BRACE_OPEN) | (1L << PAREN_OPEN) | (1L << BRACKET_OPEN))) != 0)) {
				{
				setState(782);
				expression(0);
				}
			}

			setState(798);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(785);
				match(COMMA);
				setState(787);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,148,_ctx) ) {
				case 1:
					{
					setState(786);
					match(NEWLINE);
					}
					break;
				}
				setState(790);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(789);
					match(SPACE);
					}
				}

				setState(793);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NEWLINE) {
					{
					setState(792);
					match(NEWLINE);
					}
				}

				setState(795);
				expression(0);
				}
				}
				setState(800);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(802);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,152,_ctx) ) {
			case 1:
				{
				setState(801);
				match(NEWLINE);
				}
				break;
			}
			setState(805);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SPACE) {
				{
				setState(804);
				match(SPACE);
				}
			}

			setState(808);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==NEWLINE) {
				{
				setState(807);
				match(NEWLINE);
				}
			}

			setState(810);
			match(BRACKET_CLOSE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ObjectExpressionContext extends ParserRuleContext {
		public TerminalNode BRACE_OPEN() { return getToken(XDocSyntaxParser.BRACE_OPEN, 0); }
		public TerminalNode BRACE_CLOSE() { return getToken(XDocSyntaxParser.BRACE_CLOSE, 0); }
		public List<TerminalNode> SPACE() { return getTokens(XDocSyntaxParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(XDocSyntaxParser.SPACE, i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(XDocSyntaxParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(XDocSyntaxParser.NEWLINE, i);
		}
		public ObjectPairSequenceExpressionContext objectPairSequenceExpression() {
			return getRuleContext(ObjectPairSequenceExpressionContext.class,0);
		}
		public ObjectExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectExpression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterObjectExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitObjectExpression(this);
		}
	}

	public final ObjectExpressionContext objectExpression() throws RecognitionException {
		ObjectExpressionContext _localctx = new ObjectExpressionContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_objectExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(812);
			match(BRACE_OPEN);
			setState(814);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,155,_ctx) ) {
			case 1:
				{
				setState(813);
				match(SPACE);
				}
				break;
			}
			setState(817);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,156,_ctx) ) {
			case 1:
				{
				setState(816);
				match(NEWLINE);
				}
				break;
			}
			setState(820);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,157,_ctx) ) {
			case 1:
				{
				setState(819);
				match(SPACE);
				}
				break;
			}
			setState(823);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NumberLiteral) | (1L << BooleanLiteral) | (1L << CharacterLiteral) | (1L << StringLiteral) | (1L << NullLiteral))) != 0)) {
				{
				setState(822);
				objectPairSequenceExpression();
				}
			}

			setState(826);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,159,_ctx) ) {
			case 1:
				{
				setState(825);
				match(SPACE);
				}
				break;
			}
			setState(829);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==NEWLINE) {
				{
				setState(828);
				match(NEWLINE);
				}
			}

			setState(832);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SPACE) {
				{
				setState(831);
				match(SPACE);
				}
			}

			setState(834);
			match(BRACE_CLOSE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ObjectPairSequenceExpressionContext extends ParserRuleContext {
		public List<ObjectPairExpressionContext> objectPairExpression() {
			return getRuleContexts(ObjectPairExpressionContext.class);
		}
		public ObjectPairExpressionContext objectPairExpression(int i) {
			return getRuleContext(ObjectPairExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(XDocSyntaxParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(XDocSyntaxParser.COMMA, i);
		}
		public List<TerminalNode> SPACE() { return getTokens(XDocSyntaxParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(XDocSyntaxParser.SPACE, i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(XDocSyntaxParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(XDocSyntaxParser.NEWLINE, i);
		}
		public ObjectPairSequenceExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectPairSequenceExpression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterObjectPairSequenceExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitObjectPairSequenceExpression(this);
		}
	}

	public final ObjectPairSequenceExpressionContext objectPairSequenceExpression() throws RecognitionException {
		ObjectPairSequenceExpressionContext _localctx = new ObjectPairSequenceExpressionContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_objectPairSequenceExpression);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(836);
			objectPairExpression();
			setState(853);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,166,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(838);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==SPACE) {
						{
						setState(837);
						match(SPACE);
						}
					}

					setState(840);
					match(COMMA);
					setState(842);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,163,_ctx) ) {
					case 1:
						{
						setState(841);
						match(SPACE);
						}
						break;
					}
					setState(845);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==NEWLINE) {
						{
						setState(844);
						match(NEWLINE);
						}
					}

					setState(848);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==SPACE) {
						{
						setState(847);
						match(SPACE);
						}
					}

					setState(850);
					objectPairExpression();
					}
					} 
				}
				setState(855);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,166,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ObjectPairExpressionContext extends ParserRuleContext {
		public List<LiteralExpressionContext> literalExpression() {
			return getRuleContexts(LiteralExpressionContext.class);
		}
		public LiteralExpressionContext literalExpression(int i) {
			return getRuleContext(LiteralExpressionContext.class,i);
		}
		public TerminalNode COLON() { return getToken(XDocSyntaxParser.COLON, 0); }
		public ObjectExpressionContext objectExpression() {
			return getRuleContext(ObjectExpressionContext.class,0);
		}
		public List<TerminalNode> SPACE() { return getTokens(XDocSyntaxParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(XDocSyntaxParser.SPACE, i);
		}
		public ObjectPairExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_objectPairExpression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterObjectPairExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitObjectPairExpression(this);
		}
	}

	public final ObjectPairExpressionContext objectPairExpression() throws RecognitionException {
		ObjectPairExpressionContext _localctx = new ObjectPairExpressionContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_objectPairExpression);
		int _la;
		try {
			setState(876);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,171,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(856);
				literalExpression();
				setState(858);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(857);
					match(SPACE);
					}
				}

				setState(860);
				match(COLON);
				setState(862);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(861);
					match(SPACE);
					}
				}

				setState(864);
				objectExpression();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(866);
				literalExpression();
				setState(868);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(867);
					match(SPACE);
					}
				}

				setState(870);
				match(COLON);
				setState(872);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(871);
					match(SPACE);
					}
				}

				setState(874);
				literalExpression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LambdaExpressionContext extends ParserRuleContext {
		public TerminalNode PAREN_OPEN() { return getToken(XDocSyntaxParser.PAREN_OPEN, 0); }
		public TerminalNode PAREN_CLOSE() { return getToken(XDocSyntaxParser.PAREN_CLOSE, 0); }
		public TerminalNode ARROW() { return getToken(XDocSyntaxParser.ARROW, 0); }
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public List<TerminalNode> SPACE() { return getTokens(XDocSyntaxParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(XDocSyntaxParser.SPACE, i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(XDocSyntaxParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(XDocSyntaxParser.NEWLINE, i);
		}
		public FormalParameterSequenceContext formalParameterSequence() {
			return getRuleContext(FormalParameterSequenceContext.class,0);
		}
		public TerminalNode QUESTION() { return getToken(XDocSyntaxParser.QUESTION, 0); }
		public ParameterContext parameter() {
			return getRuleContext(ParameterContext.class,0);
		}
		public LambdaExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lambdaExpression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterLambdaExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitLambdaExpression(this);
		}
	}

	public final LambdaExpressionContext lambdaExpression() throws RecognitionException {
		LambdaExpressionContext _localctx = new LambdaExpressionContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_lambdaExpression);
		int _la;
		try {
			setState(948);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PAREN_OPEN:
				enterOuterAlt(_localctx, 1);
				{
				setState(878);
				match(PAREN_OPEN);
				setState(880);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,172,_ctx) ) {
				case 1:
					{
					setState(879);
					match(SPACE);
					}
					break;
				}
				setState(883);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,173,_ctx) ) {
				case 1:
					{
					setState(882);
					match(NEWLINE);
					}
					break;
				}
				setState(886);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,174,_ctx) ) {
				case 1:
					{
					setState(885);
					match(SPACE);
					}
					break;
				}
				setState(889);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==ID) {
					{
					setState(888);
					formalParameterSequence();
					}
				}

				setState(892);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,176,_ctx) ) {
				case 1:
					{
					setState(891);
					match(SPACE);
					}
					break;
				}
				setState(895);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NEWLINE) {
					{
					setState(894);
					match(NEWLINE);
					}
				}

				setState(898);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(897);
					match(SPACE);
					}
				}

				setState(900);
				match(PAREN_CLOSE);
				setState(902);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,179,_ctx) ) {
				case 1:
					{
					setState(901);
					match(SPACE);
					}
					break;
				}
				setState(905);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NEWLINE) {
					{
					setState(904);
					match(NEWLINE);
					}
				}

				setState(908);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(907);
					match(SPACE);
					}
				}

				setState(910);
				match(ARROW);
				setState(912);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,182,_ctx) ) {
				case 1:
					{
					setState(911);
					match(SPACE);
					}
					break;
				}
				setState(915);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NEWLINE) {
					{
					setState(914);
					match(NEWLINE);
					}
				}

				setState(918);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(917);
					match(SPACE);
					}
				}

				setState(920);
				type(0);
				setState(922);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,185,_ctx) ) {
				case 1:
					{
					setState(921);
					match(QUESTION);
					}
					break;
				}
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 2);
				{
				setState(924);
				parameter();
				setState(926);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,186,_ctx) ) {
				case 1:
					{
					setState(925);
					match(SPACE);
					}
					break;
				}
				setState(929);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NEWLINE) {
					{
					setState(928);
					match(NEWLINE);
					}
				}

				setState(932);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(931);
					match(SPACE);
					}
				}

				setState(934);
				match(ARROW);
				setState(936);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,189,_ctx) ) {
				case 1:
					{
					setState(935);
					match(SPACE);
					}
					break;
				}
				setState(939);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NEWLINE) {
					{
					setState(938);
					match(NEWLINE);
					}
				}

				setState(942);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SPACE) {
					{
					setState(941);
					match(SPACE);
					}
				}

				setState(944);
				type(0);
				setState(946);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,192,_ctx) ) {
				case 1:
					{
					setState(945);
					match(QUESTION);
					}
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LiteralExpressionContext extends ParserRuleContext {
		public TerminalNode NumberLiteral() { return getToken(XDocSyntaxParser.NumberLiteral, 0); }
		public TerminalNode BooleanLiteral() { return getToken(XDocSyntaxParser.BooleanLiteral, 0); }
		public TerminalNode CharacterLiteral() { return getToken(XDocSyntaxParser.CharacterLiteral, 0); }
		public TerminalNode StringLiteral() { return getToken(XDocSyntaxParser.StringLiteral, 0); }
		public TerminalNode NullLiteral() { return getToken(XDocSyntaxParser.NullLiteral, 0); }
		public LiteralExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literalExpression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterLiteralExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitLiteralExpression(this);
		}
	}

	public final LiteralExpressionContext literalExpression() throws RecognitionException {
		LiteralExpressionContext _localctx = new LiteralExpressionContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_literalExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(950);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NumberLiteral) | (1L << BooleanLiteral) | (1L << CharacterLiteral) | (1L << StringLiteral) | (1L << NullLiteral))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ParenthesizedExpressionContext extends ParserRuleContext {
		public TerminalNode PAREN_OPEN() { return getToken(XDocSyntaxParser.PAREN_OPEN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode PAREN_CLOSE() { return getToken(XDocSyntaxParser.PAREN_CLOSE, 0); }
		public List<TerminalNode> SPACE() { return getTokens(XDocSyntaxParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(XDocSyntaxParser.SPACE, i);
		}
		public ParenthesizedExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parenthesizedExpression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterParenthesizedExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitParenthesizedExpression(this);
		}
	}

	public final ParenthesizedExpressionContext parenthesizedExpression() throws RecognitionException {
		ParenthesizedExpressionContext _localctx = new ParenthesizedExpressionContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_parenthesizedExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(952);
			match(PAREN_OPEN);
			setState(954);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SPACE) {
				{
				setState(953);
				match(SPACE);
				}
			}

			setState(956);
			expression(0);
			setState(958);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SPACE) {
				{
				setState(957);
				match(SPACE);
				}
			}

			setState(960);
			match(PAREN_CLOSE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DescriptionContext extends ParserRuleContext {
		public DescriptionLineContext descriptionLine() {
			return getRuleContext(DescriptionLineContext.class,0);
		}
		public DescriptionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_description; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterDescription(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitDescription(this);
		}
	}

	public final DescriptionContext description() throws RecognitionException {
		DescriptionContext _localctx = new DescriptionContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_description);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(962);
			descriptionLine();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DescriptionLineContext extends ParserRuleContext {
		public DescriptionLineStartContext descriptionLineStart() {
			return getRuleContext(DescriptionLineStartContext.class,0);
		}
		public List<DescriptionLineElementContext> descriptionLineElement() {
			return getRuleContexts(DescriptionLineElementContext.class);
		}
		public DescriptionLineElementContext descriptionLineElement(int i) {
			return getRuleContext(DescriptionLineElementContext.class,i);
		}
		public InlineTagContext inlineTag() {
			return getRuleContext(InlineTagContext.class,0);
		}
		public DescriptionLineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_descriptionLine; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterDescriptionLine(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitDescriptionLine(this);
		}
	}

	public final DescriptionLineContext descriptionLine() throws RecognitionException {
		DescriptionLineContext _localctx = new DescriptionLineContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_descriptionLine);
		int _la;
		try {
			setState(978);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NumberLiteral:
			case BooleanLiteral:
			case CharacterLiteral:
			case StringLiteral:
			case NullLiteral:
			case ID:
			case SPACE:
			case TEXT_CONTENT:
			case MINUS:
			case FORWARD_SLASH:
			case COLON:
			case PERIOD:
			case BRACE_OPEN:
			case BRACE_CLOSE:
				enterOuterAlt(_localctx, 1);
				{
				setState(964);
				descriptionLineStart();
				setState(968);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NumberLiteral) | (1L << BooleanLiteral) | (1L << CharacterLiteral) | (1L << StringLiteral) | (1L << NullLiteral) | (1L << ID) | (1L << SPACE) | (1L << TEXT_CONTENT) | (1L << AT) | (1L << MINUS) | (1L << FORWARD_SLASH) | (1L << COLON) | (1L << PERIOD) | (1L << INLINE_TAG_START) | (1L << BRACE_OPEN) | (1L << BRACE_CLOSE))) != 0)) {
					{
					{
					setState(965);
					descriptionLineElement();
					}
					}
					setState(970);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case INLINE_TAG_START:
				enterOuterAlt(_localctx, 2);
				{
				setState(971);
				inlineTag();
				setState(975);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << NumberLiteral) | (1L << BooleanLiteral) | (1L << CharacterLiteral) | (1L << StringLiteral) | (1L << NullLiteral) | (1L << ID) | (1L << SPACE) | (1L << TEXT_CONTENT) | (1L << AT) | (1L << MINUS) | (1L << FORWARD_SLASH) | (1L << COLON) | (1L << PERIOD) | (1L << INLINE_TAG_START) | (1L << BRACE_OPEN) | (1L << BRACE_CLOSE))) != 0)) {
					{
					{
					setState(972);
					descriptionLineElement();
					}
					}
					setState(977);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DescriptionLineStartContext extends ParserRuleContext {
		public List<TerminalNode> SPACE() { return getTokens(XDocSyntaxParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(XDocSyntaxParser.SPACE, i);
		}
		public List<DescriptionTextContext> descriptionText() {
			return getRuleContexts(DescriptionTextContext.class);
		}
		public DescriptionTextContext descriptionText(int i) {
			return getRuleContext(DescriptionTextContext.class,i);
		}
		public List<TerminalNode> AT() { return getTokens(XDocSyntaxParser.AT); }
		public TerminalNode AT(int i) {
			return getToken(XDocSyntaxParser.AT, i);
		}
		public DescriptionLineStartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_descriptionLineStart; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterDescriptionLineStart(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitDescriptionLineStart(this);
		}
	}

	public final DescriptionLineStartContext descriptionLineStart() throws RecognitionException {
		DescriptionLineStartContext _localctx = new DescriptionLineStartContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_descriptionLineStart);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(981);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SPACE) {
				{
				setState(980);
				match(SPACE);
				}
			}

			setState(984); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(983);
					descriptionText();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(986); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,200,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(993);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,202,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					setState(991);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case NumberLiteral:
					case BooleanLiteral:
					case CharacterLiteral:
					case StringLiteral:
					case NullLiteral:
					case ID:
					case TEXT_CONTENT:
					case MINUS:
					case FORWARD_SLASH:
					case COLON:
					case PERIOD:
					case BRACE_OPEN:
					case BRACE_CLOSE:
						{
						setState(988);
						descriptionText();
						}
						break;
					case SPACE:
						{
						setState(989);
						match(SPACE);
						}
						break;
					case AT:
						{
						setState(990);
						match(AT);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				setState(995);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,202,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DescriptionTextContext extends ParserRuleContext {
		public TerminalNode TEXT_CONTENT() { return getToken(XDocSyntaxParser.TEXT_CONTENT, 0); }
		public TerminalNode ID() { return getToken(XDocSyntaxParser.ID, 0); }
		public TerminalNode FORWARD_SLASH() { return getToken(XDocSyntaxParser.FORWARD_SLASH, 0); }
		public TerminalNode BRACE_OPEN() { return getToken(XDocSyntaxParser.BRACE_OPEN, 0); }
		public TerminalNode BRACE_CLOSE() { return getToken(XDocSyntaxParser.BRACE_CLOSE, 0); }
		public TerminalNode COLON() { return getToken(XDocSyntaxParser.COLON, 0); }
		public TerminalNode MINUS() { return getToken(XDocSyntaxParser.MINUS, 0); }
		public TerminalNode PERIOD() { return getToken(XDocSyntaxParser.PERIOD, 0); }
		public LiteralExpressionContext literalExpression() {
			return getRuleContext(LiteralExpressionContext.class,0);
		}
		public DescriptionTextContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_descriptionText; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterDescriptionText(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitDescriptionText(this);
		}
	}

	public final DescriptionTextContext descriptionText() throws RecognitionException {
		DescriptionTextContext _localctx = new DescriptionTextContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_descriptionText);
		try {
			setState(1005);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case TEXT_CONTENT:
				enterOuterAlt(_localctx, 1);
				{
				setState(996);
				match(TEXT_CONTENT);
				}
				break;
			case ID:
				enterOuterAlt(_localctx, 2);
				{
				setState(997);
				match(ID);
				}
				break;
			case FORWARD_SLASH:
				enterOuterAlt(_localctx, 3);
				{
				setState(998);
				match(FORWARD_SLASH);
				}
				break;
			case BRACE_OPEN:
				enterOuterAlt(_localctx, 4);
				{
				setState(999);
				match(BRACE_OPEN);
				}
				break;
			case BRACE_CLOSE:
				enterOuterAlt(_localctx, 5);
				{
				setState(1000);
				match(BRACE_CLOSE);
				}
				break;
			case COLON:
				enterOuterAlt(_localctx, 6);
				{
				setState(1001);
				match(COLON);
				}
				break;
			case MINUS:
				enterOuterAlt(_localctx, 7);
				{
				setState(1002);
				match(MINUS);
				}
				break;
			case PERIOD:
				enterOuterAlt(_localctx, 8);
				{
				setState(1003);
				match(PERIOD);
				}
				break;
			case NumberLiteral:
			case BooleanLiteral:
			case CharacterLiteral:
			case StringLiteral:
			case NullLiteral:
				enterOuterAlt(_localctx, 9);
				{
				setState(1004);
				literalExpression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DescriptionLineElementContext extends ParserRuleContext {
		public InlineTagContext inlineTag() {
			return getRuleContext(InlineTagContext.class,0);
		}
		public DescriptionLineTextContext descriptionLineText() {
			return getRuleContext(DescriptionLineTextContext.class,0);
		}
		public DescriptionLineElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_descriptionLineElement; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterDescriptionLineElement(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitDescriptionLineElement(this);
		}
	}

	public final DescriptionLineElementContext descriptionLineElement() throws RecognitionException {
		DescriptionLineElementContext _localctx = new DescriptionLineElementContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_descriptionLineElement);
		try {
			setState(1009);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INLINE_TAG_START:
				enterOuterAlt(_localctx, 1);
				{
				setState(1007);
				inlineTag();
				}
				break;
			case NumberLiteral:
			case BooleanLiteral:
			case CharacterLiteral:
			case StringLiteral:
			case NullLiteral:
			case ID:
			case SPACE:
			case TEXT_CONTENT:
			case AT:
			case MINUS:
			case FORWARD_SLASH:
			case COLON:
			case PERIOD:
			case BRACE_OPEN:
			case BRACE_CLOSE:
				enterOuterAlt(_localctx, 2);
				{
				setState(1008);
				descriptionLineText();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DescriptionLineTextContext extends ParserRuleContext {
		public List<DescriptionTextContext> descriptionText() {
			return getRuleContexts(DescriptionTextContext.class);
		}
		public DescriptionTextContext descriptionText(int i) {
			return getRuleContext(DescriptionTextContext.class,i);
		}
		public List<TerminalNode> SPACE() { return getTokens(XDocSyntaxParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(XDocSyntaxParser.SPACE, i);
		}
		public List<TerminalNode> AT() { return getTokens(XDocSyntaxParser.AT); }
		public TerminalNode AT(int i) {
			return getToken(XDocSyntaxParser.AT, i);
		}
		public DescriptionLineTextContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_descriptionLineText; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterDescriptionLineText(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitDescriptionLineText(this);
		}
	}

	public final DescriptionLineTextContext descriptionLineText() throws RecognitionException {
		DescriptionLineTextContext _localctx = new DescriptionLineTextContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_descriptionLineText);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(1014); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					setState(1014);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case NumberLiteral:
					case BooleanLiteral:
					case CharacterLiteral:
					case StringLiteral:
					case NullLiteral:
					case ID:
					case TEXT_CONTENT:
					case MINUS:
					case FORWARD_SLASH:
					case COLON:
					case PERIOD:
					case BRACE_OPEN:
					case BRACE_CLOSE:
						{
						setState(1011);
						descriptionText();
						}
						break;
					case SPACE:
						{
						setState(1012);
						match(SPACE);
						}
						break;
					case AT:
						{
						setState(1013);
						match(AT);
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
				setState(1016); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,206,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InlineTagContext extends ParserRuleContext {
		public TerminalNode INLINE_TAG_START() { return getToken(XDocSyntaxParser.INLINE_TAG_START, 0); }
		public InlineTagNameContext inlineTagName() {
			return getRuleContext(InlineTagNameContext.class,0);
		}
		public TerminalNode SPACE() { return getToken(XDocSyntaxParser.SPACE, 0); }
		public TerminalNode BRACE_CLOSE() { return getToken(XDocSyntaxParser.BRACE_CLOSE, 0); }
		public InlineTagBodyContext inlineTagBody() {
			return getRuleContext(InlineTagBodyContext.class,0);
		}
		public InlineTagContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inlineTag; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterInlineTag(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitInlineTag(this);
		}
	}

	public final InlineTagContext inlineTag() throws RecognitionException {
		InlineTagContext _localctx = new InlineTagContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_inlineTag);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1018);
			match(INLINE_TAG_START);
			setState(1019);
			inlineTagName();
			setState(1020);
			match(SPACE);
			setState(1022);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ID) | (1L << NEWLINE) | (1L << SPACE) | (1L << TEXT_CONTENT) | (1L << FORWARD_SLASH) | (1L << PERIOD) | (1L << BRACE_OPEN))) != 0)) {
				{
				setState(1021);
				inlineTagBody();
				}
			}

			setState(1024);
			match(BRACE_CLOSE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InlineTagNameContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public InlineTagNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inlineTagName; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterInlineTagName(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitInlineTagName(this);
		}
	}

	public final InlineTagNameContext inlineTagName() throws RecognitionException {
		InlineTagNameContext _localctx = new InlineTagNameContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_inlineTagName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1026);
			identifier();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class InlineTagBodyContext extends ParserRuleContext {
		public List<BraceBodyContext> braceBody() {
			return getRuleContexts(BraceBodyContext.class);
		}
		public BraceBodyContext braceBody(int i) {
			return getRuleContext(BraceBodyContext.class,i);
		}
		public InlineTagBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inlineTagBody; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterInlineTagBody(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitInlineTagBody(this);
		}
	}

	public final InlineTagBodyContext inlineTagBody() throws RecognitionException {
		InlineTagBodyContext _localctx = new InlineTagBodyContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_inlineTagBody);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1029); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(1028);
				braceBody();
				}
				}
				setState(1031); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ID) | (1L << NEWLINE) | (1L << SPACE) | (1L << TEXT_CONTENT) | (1L << FORWARD_SLASH) | (1L << PERIOD) | (1L << BRACE_OPEN))) != 0) );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BraceExpressionContext extends ParserRuleContext {
		public TerminalNode BRACE_OPEN() { return getToken(XDocSyntaxParser.BRACE_OPEN, 0); }
		public TerminalNode BRACE_CLOSE() { return getToken(XDocSyntaxParser.BRACE_CLOSE, 0); }
		public List<BraceBodyContext> braceBody() {
			return getRuleContexts(BraceBodyContext.class);
		}
		public BraceBodyContext braceBody(int i) {
			return getRuleContext(BraceBodyContext.class,i);
		}
		public BraceExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_braceExpression; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterBraceExpression(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitBraceExpression(this);
		}
	}

	public final BraceExpressionContext braceExpression() throws RecognitionException {
		BraceExpressionContext _localctx = new BraceExpressionContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_braceExpression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1033);
			match(BRACE_OPEN);
			setState(1037);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ID) | (1L << NEWLINE) | (1L << SPACE) | (1L << TEXT_CONTENT) | (1L << FORWARD_SLASH) | (1L << PERIOD) | (1L << BRACE_OPEN))) != 0)) {
				{
				{
				setState(1034);
				braceBody();
				}
				}
				setState(1039);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1040);
			match(BRACE_CLOSE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BraceBodyContext extends ParserRuleContext {
		public BraceExpressionContext braceExpression() {
			return getRuleContext(BraceExpressionContext.class,0);
		}
		public List<BraceTextContext> braceText() {
			return getRuleContexts(BraceTextContext.class);
		}
		public BraceTextContext braceText(int i) {
			return getRuleContext(BraceTextContext.class,i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(XDocSyntaxParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(XDocSyntaxParser.NEWLINE, i);
		}
		public BraceBodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_braceBody; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterBraceBody(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitBraceBody(this);
		}
	}

	public final BraceBodyContext braceBody() throws RecognitionException {
		BraceBodyContext _localctx = new BraceBodyContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_braceBody);
		try {
			int _alt;
			setState(1051);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BRACE_OPEN:
				enterOuterAlt(_localctx, 1);
				{
				setState(1042);
				braceExpression();
				}
				break;
			case ID:
			case NEWLINE:
			case SPACE:
			case TEXT_CONTENT:
			case FORWARD_SLASH:
			case PERIOD:
				enterOuterAlt(_localctx, 2);
				{
				setState(1043);
				braceText();
				setState(1048);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,210,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(1044);
						match(NEWLINE);
						setState(1045);
						braceText();
						}
						} 
					}
					setState(1050);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,210,_ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BraceTextContext extends ParserRuleContext {
		public TerminalNode TEXT_CONTENT() { return getToken(XDocSyntaxParser.TEXT_CONTENT, 0); }
		public TerminalNode ID() { return getToken(XDocSyntaxParser.ID, 0); }
		public TerminalNode SPACE() { return getToken(XDocSyntaxParser.SPACE, 0); }
		public TerminalNode FORWARD_SLASH() { return getToken(XDocSyntaxParser.FORWARD_SLASH, 0); }
		public TerminalNode NEWLINE() { return getToken(XDocSyntaxParser.NEWLINE, 0); }
		public TerminalNode PERIOD() { return getToken(XDocSyntaxParser.PERIOD, 0); }
		public BraceTextContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_braceText; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).enterBraceText(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof XDocSyntaxParserListener ) ((XDocSyntaxParserListener)listener).exitBraceText(this);
		}
	}

	public final BraceTextContext braceText() throws RecognitionException {
		BraceTextContext _localctx = new BraceTextContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_braceText);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1053);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ID) | (1L << NEWLINE) | (1L << SPACE) | (1L << TEXT_CONTENT) | (1L << FORWARD_SLASH) | (1L << PERIOD))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 12:
			return type_sempred((TypeContext)_localctx, predIndex);
		case 27:
			return notArrayType_sempred((NotArrayTypeContext)_localctx, predIndex);
		case 30:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean type_sempred(TypeContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 8);
		}
		return true;
	}
	private boolean notArrayType_sempred(NotArrayTypeContext _localctx, int predIndex) {
		switch (predIndex) {
		case 1:
			return precpred(_ctx, 7);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 2:
			return precpred(_ctx, 7);
		case 3:
			return precpred(_ctx, 6);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3%\u0422\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\3\2\3\2\3\2\5\2l\n\2\3\2\3\2\5\2p\n\2\3\3\7\3s\n\3\f\3\16\3v\13\3"+
		"\3\3\3\3\3\4\3\4\3\5\3\5\3\5\7\5\177\n\5\f\5\16\5\u0082\13\5\3\6\3\6\3"+
		"\6\3\6\5\6\u0088\n\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5"+
		"\6\u0096\n\6\3\6\3\6\5\6\u009a\n\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6\u00a3"+
		"\n\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6\u00af\n\6\3\6\3\6\3\6"+
		"\5\6\u00b4\n\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6\u00be\n\6\3\6\3\6\5"+
		"\6\u00c2\n\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6\u00ca\n\6\3\6\3\6\5\6\u00ce\n"+
		"\6\3\6\3\6\5\6\u00d2\n\6\3\6\3\6\5\6\u00d6\n\6\3\6\3\6\3\6\3\6\3\6\3\6"+
		"\5\6\u00de\n\6\3\6\3\6\5\6\u00e2\n\6\3\6\3\6\3\6\5\6\u00e7\n\6\3\6\3\6"+
		"\3\6\3\6\3\6\3\6\3\6\3\6\5\6\u00f1\n\6\3\6\3\6\5\6\u00f5\n\6\3\6\3\6\5"+
		"\6\u00f9\n\6\3\6\3\6\5\6\u00fd\n\6\3\6\3\6\3\6\5\6\u0102\n\6\3\6\3\6\3"+
		"\6\3\6\3\6\3\6\5\6\u010a\n\6\3\6\3\6\5\6\u010e\n\6\3\6\3\6\3\6\3\6\5\6"+
		"\u0114\n\6\3\6\3\6\5\6\u0118\n\6\3\6\3\6\3\6\5\6\u011d\n\6\3\6\3\6\3\6"+
		"\3\6\5\6\u0123\n\6\3\7\3\7\3\7\3\b\3\b\3\b\5\b\u012b\n\b\3\t\3\t\3\t\6"+
		"\t\u0130\n\t\r\t\16\t\u0131\3\t\3\t\3\t\6\t\u0137\n\t\r\t\16\t\u0138\5"+
		"\t\u013b\n\t\3\n\3\n\3\13\3\13\5\13\u0141\n\13\3\f\3\f\3\r\3\r\3\r\3\16"+
		"\3\16\3\16\3\16\3\16\3\16\3\16\3\16\5\16\u0150\n\16\3\16\3\16\5\16\u0154"+
		"\n\16\3\16\5\16\u0157\n\16\3\16\5\16\u015a\n\16\3\16\3\16\5\16\u015e\n"+
		"\16\3\16\5\16\u0161\n\16\3\16\5\16\u0164\n\16\3\16\7\16\u0167\n\16\f\16"+
		"\16\16\u016a\13\16\3\17\3\17\5\17\u016e\n\17\3\17\5\17\u0171\n\17\3\17"+
		"\5\17\u0174\n\17\3\17\5\17\u0177\n\17\3\17\5\17\u017a\n\17\3\17\5\17\u017d"+
		"\n\17\3\17\5\17\u0180\n\17\3\17\3\17\5\17\u0184\n\17\3\17\5\17\u0187\n"+
		"\17\3\17\5\17\u018a\n\17\3\17\3\17\5\17\u018e\n\17\3\17\5\17\u0191\n\17"+
		"\3\17\5\17\u0194\n\17\3\17\3\17\5\17\u0198\n\17\3\17\3\17\5\17\u019c\n"+
		"\17\3\17\5\17\u019f\n\17\3\17\5\17\u01a2\n\17\3\17\3\17\5\17\u01a6\n\17"+
		"\3\17\5\17\u01a9\n\17\3\17\5\17\u01ac\n\17\3\17\3\17\5\17\u01b0\n\17\5"+
		"\17\u01b2\n\17\3\20\3\20\3\20\5\20\u01b7\n\20\3\20\5\20\u01ba\n\20\3\20"+
		"\7\20\u01bd\n\20\f\20\16\20\u01c0\13\20\3\21\3\21\5\21\u01c4\n\21\3\21"+
		"\3\21\5\21\u01c8\n\21\3\21\5\21\u01cb\n\21\3\22\5\22\u01ce\n\22\3\22\3"+
		"\22\5\22\u01d2\n\22\3\22\3\22\5\22\u01d6\n\22\3\22\3\22\3\23\3\23\5\23"+
		"\u01dc\n\23\3\23\3\23\5\23\u01e0\n\23\3\23\7\23\u01e3\n\23\f\23\16\23"+
		"\u01e6\13\23\3\23\3\23\5\23\u01ea\n\23\3\23\3\23\5\23\u01ee\n\23\3\23"+
		"\3\23\5\23\u01f2\n\23\3\23\3\23\5\23\u01f6\n\23\3\23\7\23\u01f9\n\23\f"+
		"\23\16\23\u01fc\13\23\3\23\3\23\5\23\u0200\n\23\3\23\3\23\5\23\u0204\n"+
		"\23\3\23\3\23\5\23\u0208\n\23\3\23\3\23\5\23\u020c\n\23\3\23\7\23\u020f"+
		"\n\23\f\23\16\23\u0212\13\23\3\23\3\23\5\23\u0216\n\23\3\23\3\23\5\23"+
		"\u021a\n\23\3\23\3\23\5\23\u021e\n\23\3\23\3\23\5\23\u0222\n\23\3\23\7"+
		"\23\u0225\n\23\f\23\16\23\u0228\13\23\5\23\u022a\n\23\3\24\3\24\3\24\5"+
		"\24\u022f\n\24\3\25\3\25\5\25\u0233\n\25\3\26\3\26\3\27\3\27\5\27\u0239"+
		"\n\27\3\27\3\27\5\27\u023d\n\27\3\27\3\27\3\30\3\30\3\30\3\31\3\31\5\31"+
		"\u0246\n\31\3\31\5\31\u0249\n\31\3\31\5\31\u024c\n\31\3\31\5\31\u024f"+
		"\n\31\3\31\5\31\u0252\n\31\3\31\5\31\u0255\n\31\3\31\5\31\u0258\n\31\3"+
		"\31\3\31\3\32\3\32\5\32\u025e\n\32\3\32\3\32\5\32\u0262\n\32\3\32\5\32"+
		"\u0265\n\32\3\32\5\32\u0268\n\32\3\32\7\32\u026b\n\32\f\32\16\32\u026e"+
		"\13\32\3\33\3\33\5\33\u0272\n\33\3\33\5\33\u0275\n\33\3\33\3\33\5\33\u0279"+
		"\n\33\3\33\3\33\3\34\3\34\5\34\u027f\n\34\3\34\5\34\u0282\n\34\3\34\5"+
		"\34\u0285\n\34\3\34\5\34\u0288\n\34\3\34\3\34\5\34\u028c\n\34\3\34\5\34"+
		"\u028f\n\34\3\34\5\34\u0292\n\34\3\34\7\34\u0295\n\34\f\34\16\34\u0298"+
		"\13\34\3\34\5\34\u029b\n\34\3\34\5\34\u029e\n\34\3\34\5\34\u02a1\n\34"+
		"\3\34\3\34\3\34\3\34\6\34\u02a7\n\34\r\34\16\34\u02a8\5\34\u02ab\n\34"+
		"\3\35\3\35\3\35\3\35\3\35\3\35\3\35\5\35\u02b4\n\35\3\35\3\35\5\35\u02b8"+
		"\n\35\3\35\5\35\u02bb\n\35\3\35\5\35\u02be\n\35\3\35\3\35\5\35\u02c2\n"+
		"\35\3\35\5\35\u02c5\n\35\3\35\5\35\u02c8\n\35\3\35\7\35\u02cb\n\35\f\35"+
		"\16\35\u02ce\13\35\3\36\3\36\3\36\6\36\u02d3\n\36\r\36\16\36\u02d4\3\36"+
		"\3\36\3\36\6\36\u02da\n\36\r\36\16\36\u02db\5\36\u02de\n\36\3\37\3\37"+
		"\5\37\u02e2\n\37\3 \3 \3 \3 \3 \3 \3 \5 \u02eb\n \3 \3 \5 \u02ef\n \3"+
		" \3 \5 \u02f3\n \3 \3 \3 \5 \u02f8\n \3 \3 \5 \u02fc\n \3 \7 \u02ff\n"+
		" \f \16 \u0302\13 \3!\3!\3!\3\"\3\"\5\"\u0309\n\"\3\"\5\"\u030c\n\"\3"+
		"\"\5\"\u030f\n\"\3\"\5\"\u0312\n\"\3\"\3\"\5\"\u0316\n\"\3\"\5\"\u0319"+
		"\n\"\3\"\5\"\u031c\n\"\3\"\7\"\u031f\n\"\f\"\16\"\u0322\13\"\3\"\5\"\u0325"+
		"\n\"\3\"\5\"\u0328\n\"\3\"\5\"\u032b\n\"\3\"\3\"\3#\3#\5#\u0331\n#\3#"+
		"\5#\u0334\n#\3#\5#\u0337\n#\3#\5#\u033a\n#\3#\5#\u033d\n#\3#\5#\u0340"+
		"\n#\3#\5#\u0343\n#\3#\3#\3$\3$\5$\u0349\n$\3$\3$\5$\u034d\n$\3$\5$\u0350"+
		"\n$\3$\5$\u0353\n$\3$\7$\u0356\n$\f$\16$\u0359\13$\3%\3%\5%\u035d\n%\3"+
		"%\3%\5%\u0361\n%\3%\3%\3%\3%\5%\u0367\n%\3%\3%\5%\u036b\n%\3%\3%\5%\u036f"+
		"\n%\3&\3&\5&\u0373\n&\3&\5&\u0376\n&\3&\5&\u0379\n&\3&\5&\u037c\n&\3&"+
		"\5&\u037f\n&\3&\5&\u0382\n&\3&\5&\u0385\n&\3&\3&\5&\u0389\n&\3&\5&\u038c"+
		"\n&\3&\5&\u038f\n&\3&\3&\5&\u0393\n&\3&\5&\u0396\n&\3&\5&\u0399\n&\3&"+
		"\3&\5&\u039d\n&\3&\3&\5&\u03a1\n&\3&\5&\u03a4\n&\3&\5&\u03a7\n&\3&\3&"+
		"\5&\u03ab\n&\3&\5&\u03ae\n&\3&\5&\u03b1\n&\3&\3&\5&\u03b5\n&\5&\u03b7"+
		"\n&\3\'\3\'\3(\3(\5(\u03bd\n(\3(\3(\5(\u03c1\n(\3(\3(\3)\3)\3*\3*\7*\u03c9"+
		"\n*\f*\16*\u03cc\13*\3*\3*\7*\u03d0\n*\f*\16*\u03d3\13*\5*\u03d5\n*\3"+
		"+\5+\u03d8\n+\3+\6+\u03db\n+\r+\16+\u03dc\3+\3+\3+\7+\u03e2\n+\f+\16+"+
		"\u03e5\13+\3,\3,\3,\3,\3,\3,\3,\3,\3,\5,\u03f0\n,\3-\3-\5-\u03f4\n-\3"+
		".\3.\3.\6.\u03f9\n.\r.\16.\u03fa\3/\3/\3/\3/\5/\u0401\n/\3/\3/\3\60\3"+
		"\60\3\61\6\61\u0408\n\61\r\61\16\61\u0409\3\62\3\62\7\62\u040e\n\62\f"+
		"\62\16\62\u0411\13\62\3\62\3\62\3\63\3\63\3\63\3\63\7\63\u0419\n\63\f"+
		"\63\16\63\u041c\13\63\5\63\u041e\n\63\3\64\3\64\3\64\2\5\328>\65\2\4\6"+
		"\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRT"+
		"VXZ\\^`bdf\2\t\3\2\f\r\3\2\31\32\4\2\22\22\31\31\3\2\22\23\3\2\20\21\4"+
		"\2\3\3\6\t\5\2\13\16\23\23\25\25\2\u04e6\2o\3\2\2\2\4t\3\2\2\2\6y\3\2"+
		"\2\2\b{\3\2\2\2\n\u0122\3\2\2\2\f\u0124\3\2\2\2\16\u012a\3\2\2\2\20\u013a"+
		"\3\2\2\2\22\u013c\3\2\2\2\24\u0140\3\2\2\2\26\u0142\3\2\2\2\30\u0144\3"+
		"\2\2\2\32\u014f\3\2\2\2\34\u01b1\3\2\2\2\36\u01b3\3\2\2\2 \u01c1\3\2\2"+
		"\2\"\u01cd\3\2\2\2$\u0229\3\2\2\2&\u022e\3\2\2\2(\u0232\3\2\2\2*\u0234"+
		"\3\2\2\2,\u0236\3\2\2\2.\u0240\3\2\2\2\60\u0243\3\2\2\2\62\u025b\3\2\2"+
		"\2\64\u026f\3\2\2\2\66\u02aa\3\2\2\28\u02b3\3\2\2\2:\u02dd\3\2\2\2<\u02e1"+
		"\3\2\2\2>\u02ea\3\2\2\2@\u0303\3\2\2\2B\u0306\3\2\2\2D\u032e\3\2\2\2F"+
		"\u0346\3\2\2\2H\u036e\3\2\2\2J\u03b6\3\2\2\2L\u03b8\3\2\2\2N\u03ba\3\2"+
		"\2\2P\u03c4\3\2\2\2R\u03d4\3\2\2\2T\u03d7\3\2\2\2V\u03ef\3\2\2\2X\u03f3"+
		"\3\2\2\2Z\u03f8\3\2\2\2\\\u03fc\3\2\2\2^\u0404\3\2\2\2`\u0407\3\2\2\2"+
		"b\u040b\3\2\2\2d\u041d\3\2\2\2f\u041f\3\2\2\2hp\7\2\2\3ik\5\4\3\2jl\7"+
		"\f\2\2kj\3\2\2\2kl\3\2\2\2lm\3\2\2\2mn\7\2\2\3np\3\2\2\2oh\3\2\2\2oi\3"+
		"\2\2\2p\3\3\2\2\2qs\5\6\4\2rq\3\2\2\2sv\3\2\2\2tr\3\2\2\2tu\3\2\2\2uw"+
		"\3\2\2\2vt\3\2\2\2wx\5\b\5\2x\5\3\2\2\2yz\t\2\2\2z\7\3\2\2\2{\u0080\5"+
		"\n\6\2|}\7\f\2\2}\177\5\n\6\2~|\3\2\2\2\177\u0082\3\2\2\2\u0080~\3\2\2"+
		"\2\u0080\u0081\3\2\2\2\u0081\t\3\2\2\2\u0082\u0080\3\2\2\2\u0083\u0123"+
		"\5\f\7\2\u0084\u0085\5\f\7\2\u0085\u0087\7\r\2\2\u0086\u0088\7\f\2\2\u0087"+
		"\u0086\3\2\2\2\u0087\u0088\3\2\2\2\u0088\u0089\3\2\2\2\u0089\u008a\7\21"+
		"\2\2\u008a\u008b\7\r\2\2\u008b\u008c\5P)\2\u008c\u0123\3\2\2\2\u008d\u008e"+
		"\5\f\7\2\u008e\u008f\7\r\2\2\u008f\u0090\5\16\b\2\u0090\u0123\3\2\2\2"+
		"\u0091\u0092\5\f\7\2\u0092\u0093\7\r\2\2\u0093\u0095\5\16\b\2\u0094\u0096"+
		"\7\r\2\2\u0095\u0094\3\2\2\2\u0095\u0096\3\2\2\2\u0096\u0097\3\2\2\2\u0097"+
		"\u0099\7\27\2\2\u0098\u009a\7\r\2\2\u0099\u0098\3\2\2\2\u0099\u009a\3"+
		"\2\2\2\u009a\u009b\3\2\2\2\u009b\u009c\5> \2\u009c\u0123\3\2\2\2\u009d"+
		"\u009e\5\f\7\2\u009e\u009f\7\r\2\2\u009f\u00a0\5\16\b\2\u00a0\u00a2\7"+
		"\r\2\2\u00a1\u00a3\7\f\2\2\u00a2\u00a1\3\2\2\2\u00a2\u00a3\3\2\2\2\u00a3"+
		"\u00a4\3\2\2\2\u00a4\u00a5\7\21\2\2\u00a5\u00a6\7\r\2\2\u00a6\u00a7\5"+
		"P)\2\u00a7\u0123\3\2\2\2\u00a8\u00a9\5\f\7\2\u00a9\u00aa\7\r\2\2\u00aa"+
		"\u00ab\5\16\b\2\u00ab\u00ac\7\r\2\2\u00ac\u00ae\7\27\2\2\u00ad\u00af\7"+
		"\r\2\2\u00ae\u00ad\3\2\2\2\u00ae\u00af\3\2\2\2\u00af\u00b0\3\2\2\2\u00b0"+
		"\u00b1\5> \2\u00b1\u00b3\7\r\2\2\u00b2\u00b4\7\f\2\2\u00b3\u00b2\3\2\2"+
		"\2\u00b3\u00b4\3\2\2\2\u00b4\u00b5\3\2\2\2\u00b5\u00b6\7\21\2\2\u00b6"+
		"\u00b7\7\r\2\2\u00b7\u00b8\5P)\2\u00b8\u0123\3\2\2\2\u00b9\u00ba\5\f\7"+
		"\2\u00ba\u00bb\7\r\2\2\u00bb\u00bd\5\16\b\2\u00bc\u00be\7\r\2\2\u00bd"+
		"\u00bc\3\2\2\2\u00bd\u00be\3\2\2\2\u00be\u00bf\3\2\2\2\u00bf\u00c1\7\24"+
		"\2\2\u00c0\u00c2\7\r\2\2\u00c1\u00c0\3\2\2\2\u00c1\u00c2\3\2\2\2\u00c2"+
		"\u00c3\3\2\2\2\u00c3\u00c4\5\32\16\2\u00c4\u0123\3\2\2\2\u00c5\u00c6\5"+
		"\f\7\2\u00c6\u00c7\7\r\2\2\u00c7\u00c9\5\16\b\2\u00c8\u00ca\7\r\2\2\u00c9"+
		"\u00c8\3\2\2\2\u00c9\u00ca\3\2\2\2\u00ca\u00cb\3\2\2\2\u00cb\u00cd\7\24"+
		"\2\2\u00cc\u00ce\7\r\2\2\u00cd\u00cc\3\2\2\2\u00cd\u00ce\3\2\2\2\u00ce"+
		"\u00cf\3\2\2\2\u00cf\u00d1\5\32\16\2\u00d0\u00d2\7\r\2\2\u00d1\u00d0\3"+
		"\2\2\2\u00d1\u00d2\3\2\2\2\u00d2\u00d3\3\2\2\2\u00d3\u00d5\7\27\2\2\u00d4"+
		"\u00d6\7\r\2\2\u00d5\u00d4\3\2\2\2\u00d5\u00d6\3\2\2\2\u00d6\u00d7\3\2"+
		"\2\2\u00d7\u00d8\5> \2\u00d8\u0123\3\2\2\2\u00d9\u00da\5\f\7\2\u00da\u00db"+
		"\7\r\2\2\u00db\u00dd\5\16\b\2\u00dc\u00de\7\r\2\2\u00dd\u00dc\3\2\2\2"+
		"\u00dd\u00de\3\2\2\2\u00de\u00df\3\2\2\2\u00df\u00e1\7\24\2\2\u00e0\u00e2"+
		"\7\r\2\2\u00e1\u00e0\3\2\2\2\u00e1\u00e2\3\2\2\2\u00e2\u00e3\3\2\2\2\u00e3"+
		"\u00e4\5\32\16\2\u00e4\u00e6\7\r\2\2\u00e5\u00e7\7\f\2\2\u00e6\u00e5\3"+
		"\2\2\2\u00e6\u00e7\3\2\2\2\u00e7\u00e8\3\2\2\2\u00e8\u00e9\7\21\2\2\u00e9"+
		"\u00ea\7\r\2\2\u00ea\u00eb\5P)\2\u00eb\u0123\3\2\2\2\u00ec\u00ed\5\f\7"+
		"\2\u00ed\u00ee\7\r\2\2\u00ee\u00f0\5\16\b\2\u00ef\u00f1\7\r\2\2\u00f0"+
		"\u00ef\3\2\2\2\u00f0\u00f1\3\2\2\2\u00f1\u00f2\3\2\2\2\u00f2\u00f4\7\24"+
		"\2\2\u00f3\u00f5\7\r\2\2\u00f4\u00f3\3\2\2\2\u00f4\u00f5\3\2\2\2\u00f5"+
		"\u00f6\3\2\2\2\u00f6\u00f8\5\32\16\2\u00f7\u00f9\7\r\2\2\u00f8\u00f7\3"+
		"\2\2\2\u00f8\u00f9\3\2\2\2\u00f9\u00fa\3\2\2\2\u00fa\u00fc\7\27\2\2\u00fb"+
		"\u00fd\7\r\2\2\u00fc\u00fb\3\2\2\2\u00fc\u00fd\3\2\2\2\u00fd\u00fe\3\2"+
		"\2\2\u00fe\u00ff\5> \2\u00ff\u0101\7\r\2\2\u0100\u0102\7\f\2\2\u0101\u0100"+
		"\3\2\2\2\u0101\u0102\3\2\2\2\u0102\u0103\3\2\2\2\u0103\u0104\7\21\2\2"+
		"\u0104\u0105\7\r\2\2\u0105\u0106\5P)\2\u0106\u0123\3\2\2\2\u0107\u0109"+
		"\5\f\7\2\u0108\u010a\7\r\2\2\u0109\u0108\3\2\2\2\u0109\u010a\3\2\2\2\u010a"+
		"\u010b\3\2\2\2\u010b\u010d\7\24\2\2\u010c\u010e\7\r\2\2\u010d\u010c\3"+
		"\2\2\2\u010d\u010e\3\2\2\2\u010e\u010f\3\2\2\2\u010f\u0110\5\32\16\2\u0110"+
		"\u0123\3\2\2\2\u0111\u0113\5\f\7\2\u0112\u0114\7\r\2\2\u0113\u0112\3\2"+
		"\2\2\u0113\u0114\3\2\2\2\u0114\u0115\3\2\2\2\u0115\u0117\7\24\2\2\u0116"+
		"\u0118\7\r\2\2\u0117\u0116\3\2\2\2\u0117\u0118\3\2\2\2\u0118\u0119\3\2"+
		"\2\2\u0119\u011a\5\32\16\2\u011a\u011c\7\r\2\2\u011b\u011d\7\f\2\2\u011c"+
		"\u011b\3\2\2\2\u011c\u011d\3\2\2\2\u011d\u011e\3\2\2\2\u011e\u011f\7\21"+
		"\2\2\u011f\u0120\7\r\2\2\u0120\u0121\5P)\2\u0121\u0123\3\2\2\2\u0122\u0083"+
		"\3\2\2\2\u0122\u0084\3\2\2\2\u0122\u008d\3\2\2\2\u0122\u0091\3\2\2\2\u0122"+
		"\u009d\3\2\2\2\u0122\u00a8\3\2\2\2\u0122\u00b9\3\2\2\2\u0122\u00c5\3\2"+
		"\2\2\u0122\u00d9\3\2\2\2\u0122\u00ec\3\2\2\2\u0122\u0107\3\2\2\2\u0122"+
		"\u0111\3\2\2\2\u0123\13\3\2\2\2\u0124\u0125\7\17\2\2\u0125\u0126\5\26"+
		"\f\2\u0126\r\3\2\2\2\u0127\u012b\5\20\t\2\u0128\u012b\5\22\n\2\u0129\u012b"+
		"\5\26\f\2\u012a\u0127\3\2\2\2\u012a\u0128\3\2\2\2\u012a\u0129\3\2\2\2"+
		"\u012b\17\3\2\2\2\u012c\u012f\5\22\n\2\u012d\u012e\7\25\2\2\u012e\u0130"+
		"\5\24\13\2\u012f\u012d\3\2\2\2\u0130\u0131\3\2\2\2\u0131\u012f\3\2\2\2"+
		"\u0131\u0132\3\2\2\2\u0132\u013b\3\2\2\2\u0133\u0136\5\26\f\2\u0134\u0135"+
		"\7\25\2\2\u0135\u0137\5\24\13\2\u0136\u0134\3\2\2\2\u0137\u0138\3\2\2"+
		"\2\u0138\u0136\3\2\2\2\u0138\u0139\3\2\2\2\u0139\u013b\3\2\2\2\u013a\u012c"+
		"\3\2\2\2\u013a\u0133\3\2\2\2\u013b\21\3\2\2\2\u013c\u013d\5\30\r\2\u013d"+
		"\23\3\2\2\2\u013e\u0141\5\22\n\2\u013f\u0141\5\26\f\2\u0140\u013e\3\2"+
		"\2\2\u0140\u013f\3\2\2\2\u0141\25\3\2\2\2\u0142\u0143\7\13\2\2\u0143\27"+
		"\3\2\2\2\u0144\u0145\5\26\f\2\u0145\u0146\7\30\2\2\u0146\31\3\2\2\2\u0147"+
		"\u0148\b\16\1\2\u0148\u0150\5\34\17\2\u0149\u0150\5\"\22\2\u014a\u0150"+
		"\5&\24\2\u014b\u0150\5,\27\2\u014c\u0150\5.\30\2\u014d\u0150\5\60\31\2"+
		"\u014e\u0150\5\66\34\2\u014f\u0147\3\2\2\2\u014f\u0149\3\2\2\2\u014f\u014a"+
		"\3\2\2\2\u014f\u014b\3\2\2\2\u014f\u014c\3\2\2\2\u014f\u014d\3\2\2\2\u014f"+
		"\u014e\3\2\2\2\u0150\u0168\3\2\2\2\u0151\u0153\f\n\2\2\u0152\u0154\7\r"+
		"\2\2\u0153\u0152\3\2\2\2\u0153\u0154\3\2\2\2\u0154\u0156\3\2\2\2\u0155"+
		"\u0157\7\f\2\2\u0156\u0155\3\2\2\2\u0156\u0157\3\2\2\2\u0157\u0159\3\2"+
		"\2\2\u0158\u015a\7\r\2\2\u0159\u0158\3\2\2\2\u0159\u015a\3\2\2\2\u015a"+
		"\u015b\3\2\2\2\u015b\u015d\t\3\2\2\u015c\u015e\7\r\2\2\u015d\u015c\3\2"+
		"\2\2\u015d\u015e\3\2\2\2\u015e\u0160\3\2\2\2\u015f\u0161\7\f\2\2\u0160"+
		"\u015f\3\2\2\2\u0160\u0161\3\2\2\2\u0161\u0163\3\2\2\2\u0162\u0164\7\r"+
		"\2\2\u0163\u0162\3\2\2\2\u0163\u0164\3\2\2\2\u0164\u0165\3\2\2\2\u0165"+
		"\u0167\5\32\16\13\u0166\u0151\3\2\2\2\u0167\u016a\3\2\2\2\u0168\u0166"+
		"\3\2\2\2\u0168\u0169\3\2\2\2\u0169\33\3\2\2\2\u016a\u0168\3\2\2\2\u016b"+
		"\u016d\7 \2\2\u016c\u016e\7\r\2\2\u016d\u016c\3\2\2\2\u016d\u016e\3\2"+
		"\2\2\u016e\u0170\3\2\2\2\u016f\u0171\7\f\2\2\u0170\u016f\3\2\2\2\u0170"+
		"\u0171\3\2\2\2\u0171\u0173\3\2\2\2\u0172\u0174\7\r\2\2\u0173\u0172\3\2"+
		"\2\2\u0173\u0174\3\2\2\2\u0174\u0176\3\2\2\2\u0175\u0177\5\36\20\2\u0176"+
		"\u0175\3\2\2\2\u0176\u0177\3\2\2\2\u0177\u0179\3\2\2\2\u0178\u017a\7\r"+
		"\2\2\u0179\u0178\3\2\2\2\u0179\u017a\3\2\2\2\u017a\u017c\3\2\2\2\u017b"+
		"\u017d\7\f\2\2\u017c\u017b\3\2\2\2\u017c\u017d\3\2\2\2\u017d\u017f\3\2"+
		"\2\2\u017e\u0180\7\r\2\2\u017f\u017e\3\2\2\2\u017f\u0180\3\2\2\2\u0180"+
		"\u0181\3\2\2\2\u0181\u0183\7!\2\2\u0182\u0184\7\r\2\2\u0183\u0182\3\2"+
		"\2\2\u0183\u0184\3\2\2\2\u0184\u0186\3\2\2\2\u0185\u0187\7\f\2\2\u0186"+
		"\u0185\3\2\2\2\u0186\u0187\3\2\2\2\u0187\u0189\3\2\2\2\u0188\u018a\7\r"+
		"\2\2\u0189\u0188\3\2\2\2\u0189\u018a\3\2\2\2\u018a\u018b\3\2\2\2\u018b"+
		"\u018d\7\33\2\2\u018c\u018e\7\r\2\2\u018d\u018c\3\2\2\2\u018d\u018e\3"+
		"\2\2\2\u018e\u0190\3\2\2\2\u018f\u0191\7\f\2\2\u0190\u018f\3\2\2\2\u0190"+
		"\u0191\3\2\2\2\u0191\u0193\3\2\2\2\u0192\u0194\7\r\2\2\u0193\u0192\3\2"+
		"\2\2\u0193\u0194\3\2\2\2\u0194\u0195\3\2\2\2\u0195\u0197\5\32\16\2\u0196"+
		"\u0198\7\30\2\2\u0197\u0196\3\2\2\2\u0197\u0198\3\2\2\2\u0198\u01b2\3"+
		"\2\2\2\u0199\u019b\5 \21\2\u019a\u019c\7\r\2\2\u019b\u019a\3\2\2\2\u019b"+
		"\u019c\3\2\2\2\u019c\u019e\3\2\2\2\u019d\u019f\7\f\2\2\u019e\u019d\3\2"+
		"\2\2\u019e\u019f\3\2\2\2\u019f\u01a1\3\2\2\2\u01a0\u01a2\7\r\2\2\u01a1"+
		"\u01a0\3\2\2\2\u01a1\u01a2\3\2\2\2\u01a2\u01a3\3\2\2\2\u01a3\u01a5\7\33"+
		"\2\2\u01a4\u01a6\7\r\2\2\u01a5\u01a4\3\2\2\2\u01a5\u01a6\3\2\2\2\u01a6"+
		"\u01a8\3\2\2\2\u01a7\u01a9\7\f\2\2\u01a8\u01a7\3\2\2\2\u01a8\u01a9\3\2"+
		"\2\2\u01a9\u01ab\3\2\2\2\u01aa\u01ac\7\r\2\2\u01ab\u01aa\3\2\2\2\u01ab"+
		"\u01ac\3\2\2\2\u01ac\u01ad\3\2\2\2\u01ad\u01af\5\32\16\2\u01ae\u01b0\7"+
		"\30\2\2\u01af\u01ae\3\2\2\2\u01af\u01b0\3\2\2\2\u01b0\u01b2\3\2\2\2\u01b1"+
		"\u016b\3\2\2\2\u01b1\u0199\3\2\2\2\u01b2\35\3\2\2\2\u01b3\u01be\5 \21"+
		"\2\u01b4\u01b6\7\26\2\2\u01b5\u01b7\7\f\2\2\u01b6\u01b5\3\2\2\2\u01b6"+
		"\u01b7\3\2\2\2\u01b7\u01b9\3\2\2\2\u01b8\u01ba\7\r\2\2\u01b9\u01b8\3\2"+
		"\2\2\u01b9\u01ba\3\2\2\2\u01ba\u01bb\3\2\2\2\u01bb\u01bd\5 \21\2\u01bc"+
		"\u01b4\3\2\2\2\u01bd\u01c0\3\2\2\2\u01be\u01bc\3\2\2\2\u01be\u01bf\3\2"+
		"\2\2\u01bf\37\3\2\2\2\u01c0\u01be\3\2\2\2\u01c1\u01ca\5\26\f\2\u01c2\u01c4"+
		"\7\r\2\2\u01c3\u01c2\3\2\2\2\u01c3\u01c4\3\2\2\2\u01c4\u01c5\3\2\2\2\u01c5"+
		"\u01c7\7\24\2\2\u01c6\u01c8\7\r\2\2\u01c7\u01c6\3\2\2\2\u01c7\u01c8\3"+
		"\2\2\2\u01c8\u01c9\3\2\2\2\u01c9\u01cb\5\32\16\2\u01ca\u01c3\3\2\2\2\u01ca"+
		"\u01cb\3\2\2\2\u01cb!\3\2\2\2\u01cc\u01ce\5\26\f\2\u01cd\u01cc\3\2\2\2"+
		"\u01cd\u01ce\3\2\2\2\u01ce\u01cf\3\2\2\2\u01cf\u01d1\7$\2\2\u01d0\u01d2"+
		"\7\r\2\2\u01d1\u01d0\3\2\2\2\u01d1\u01d2\3\2\2\2\u01d2\u01d3\3\2\2\2\u01d3"+
		"\u01d5\5$\23\2\u01d4\u01d6\7\r\2\2\u01d5\u01d4\3\2\2\2\u01d5\u01d6\3\2"+
		"\2\2\u01d6\u01d7\3\2\2\2\u01d7\u01d8\7%\2\2\u01d8#\3\2\2\2\u01d9\u01db"+
		"\5&\24\2\u01da\u01dc\7\r\2\2\u01db\u01da\3\2\2\2\u01db\u01dc\3\2\2\2\u01dc"+
		"\u01e4\3\2\2\2\u01dd\u01df\7\26\2\2\u01de\u01e0\7\r\2\2\u01df\u01de\3"+
		"\2\2\2\u01df\u01e0\3\2\2\2\u01e0\u01e1\3\2\2\2\u01e1\u01e3\5$\23\2\u01e2"+
		"\u01dd\3\2\2\2\u01e3\u01e6\3\2\2\2\u01e4\u01e2\3\2\2\2\u01e4\u01e5\3\2"+
		"\2\2\u01e5\u022a\3\2\2\2\u01e6\u01e4\3\2\2\2\u01e7\u01e9\5&\24\2\u01e8"+
		"\u01ea\7\r\2\2\u01e9\u01e8\3\2\2\2\u01e9\u01ea\3\2\2\2\u01ea\u01eb\3\2"+
		"\2\2\u01eb\u01ed\7\n\2\2\u01ec\u01ee\7\r\2\2\u01ed\u01ec\3\2\2\2\u01ed"+
		"\u01ee\3\2\2\2\u01ee\u01ef\3\2\2\2\u01ef\u01f1\5&\24\2\u01f0\u01f2\7\r"+
		"\2\2\u01f1\u01f0\3\2\2\2\u01f1\u01f2\3\2\2\2\u01f2\u01fa\3\2\2\2\u01f3"+
		"\u01f5\7\26\2\2\u01f4\u01f6\7\r\2\2\u01f5\u01f4\3\2\2\2\u01f5\u01f6\3"+
		"\2\2\2\u01f6\u01f7\3\2\2\2\u01f7\u01f9\5$\23\2\u01f8\u01f3\3\2\2\2\u01f9"+
		"\u01fc\3\2\2\2\u01fa\u01f8\3\2\2\2\u01fa\u01fb\3\2\2\2\u01fb\u022a\3\2"+
		"\2\2\u01fc\u01fa\3\2\2\2\u01fd\u01ff\5&\24\2\u01fe\u0200\7\r\2\2\u01ff"+
		"\u01fe\3\2\2\2\u01ff\u0200\3\2\2\2\u0200\u0201\3\2\2\2\u0201\u0203\7\31"+
		"\2\2\u0202\u0204\7\r\2\2\u0203\u0202\3\2\2\2\u0203\u0204\3\2\2\2\u0204"+
		"\u0205\3\2\2\2\u0205\u0207\5&\24\2\u0206\u0208\7\r\2\2\u0207\u0206\3\2"+
		"\2\2\u0207\u0208\3\2\2\2\u0208\u0210\3\2\2\2\u0209\u020b\7\26\2\2\u020a"+
		"\u020c\7\r\2\2\u020b\u020a\3\2\2\2\u020b\u020c\3\2\2\2\u020c\u020d\3\2"+
		"\2\2\u020d\u020f\5$\23\2\u020e\u0209\3\2\2\2\u020f\u0212\3\2\2\2\u0210"+
		"\u020e\3\2\2\2\u0210\u0211\3\2\2\2\u0211\u022a\3\2\2\2\u0212\u0210\3\2"+
		"\2\2\u0213\u0215\5&\24\2\u0214\u0216\7\r\2\2\u0215\u0214\3\2\2\2\u0215"+
		"\u0216\3\2\2\2\u0216\u0217\3\2\2\2\u0217\u0219\7\32\2\2\u0218\u021a\7"+
		"\r\2\2\u0219\u0218\3\2\2\2\u0219\u021a\3\2\2\2\u021a\u021b\3\2\2\2\u021b"+
		"\u021d\5&\24\2\u021c\u021e\7\r\2\2\u021d\u021c\3\2\2\2\u021d\u021e\3\2"+
		"\2\2\u021e\u0226\3\2\2\2\u021f\u0221\7\26\2\2\u0220\u0222\7\r\2\2\u0221"+
		"\u0220\3\2\2\2\u0221\u0222\3\2\2\2\u0222\u0223\3\2\2\2\u0223\u0225\5$"+
		"\23\2\u0224\u021f\3\2\2\2\u0225\u0228\3\2\2\2\u0226\u0224\3\2\2\2\u0226"+
		"\u0227\3\2\2\2\u0227\u022a\3\2\2\2\u0228\u0226\3\2\2\2\u0229\u01d9\3\2"+
		"\2\2\u0229\u01e7\3\2\2\2\u0229\u01fd\3\2\2\2\u0229\u0213\3\2\2\2\u022a"+
		"%\3\2\2\2\u022b\u022f\5\30\r\2\u022c\u022f\5:\36\2\u022d\u022f\5(\25\2"+
		"\u022e\u022b\3\2\2\2\u022e\u022c\3\2\2\2\u022e\u022d\3\2\2\2\u022f\'\3"+
		"\2\2\2\u0230\u0233\5\26\f\2\u0231\u0233\5*\26\2\u0232\u0230\3\2\2\2\u0232"+
		"\u0231\3\2\2\2\u0233)\3\2\2\2\u0234\u0235\7\t\2\2\u0235+\3\2\2\2\u0236"+
		"\u0238\7 \2\2\u0237\u0239\7\r\2\2\u0238\u0237\3\2\2\2\u0238\u0239\3\2"+
		"\2\2\u0239\u023a\3\2\2\2\u023a\u023c\5\32\16\2\u023b\u023d\7\r\2\2\u023c"+
		"\u023b\3\2\2\2\u023c\u023d\3\2\2\2\u023d\u023e\3\2\2\2\u023e\u023f\7!"+
		"\2\2\u023f-\3\2\2\2\u0240\u0241\t\4\2\2\u0241\u0242\5&\24\2\u0242/\3\2"+
		"\2\2\u0243\u0245\7\36\2\2\u0244\u0246\7\r\2\2\u0245\u0244\3\2\2\2\u0245"+
		"\u0246\3\2\2\2\u0246\u0248\3\2\2\2\u0247\u0249\7\f\2\2\u0248\u0247\3\2"+
		"\2\2\u0248\u0249\3\2\2\2\u0249\u024b\3\2\2\2\u024a\u024c\7\r\2\2\u024b"+
		"\u024a\3\2\2\2\u024b\u024c\3\2\2\2\u024c\u024e\3\2\2\2\u024d\u024f\5\62"+
		"\32\2\u024e\u024d\3\2\2\2\u024e\u024f\3\2\2\2\u024f\u0251\3\2\2\2\u0250"+
		"\u0252\7\r\2\2\u0251\u0250\3\2\2\2\u0251\u0252\3\2\2\2\u0252\u0254\3\2"+
		"\2\2\u0253\u0255\7\f\2\2\u0254\u0253\3\2\2\2\u0254\u0255\3\2\2\2\u0255"+
		"\u0257\3\2\2\2\u0256\u0258\7\r\2\2\u0257\u0256\3\2\2\2\u0257\u0258\3\2"+
		"\2\2\u0258\u0259\3\2\2\2\u0259\u025a\7\37\2\2\u025a\61\3\2\2\2\u025b\u025d"+
		"\5\64\33\2\u025c\u025e\7\r\2\2\u025d\u025c\3\2\2\2\u025d\u025e\3\2\2\2"+
		"\u025e\u026c\3\2\2\2\u025f\u0261\7\26\2\2\u0260\u0262\7\r\2\2\u0261\u0260"+
		"\3\2\2\2\u0261\u0262\3\2\2\2\u0262\u0264\3\2\2\2\u0263\u0265\7\f\2\2\u0264"+
		"\u0263\3\2\2\2\u0264\u0265\3\2\2\2\u0265\u0267\3\2\2\2\u0266\u0268\7\r"+
		"\2\2\u0267\u0266\3\2\2\2\u0267\u0268\3\2\2\2\u0268\u0269\3\2\2\2\u0269"+
		"\u026b\5\64\33\2\u026a\u025f\3\2\2\2\u026b\u026e\3\2\2\2\u026c\u026a\3"+
		"\2\2\2\u026c\u026d\3\2\2\2\u026d\63\3\2\2\2\u026e\u026c\3\2\2\2\u026f"+
		"\u0271\5\32\16\2\u0270\u0272\7\30\2\2\u0271\u0270\3\2\2\2\u0271\u0272"+
		"\3\2\2\2\u0272\u0274\3\2\2\2\u0273\u0275\7\r\2\2\u0274\u0273\3\2\2\2\u0274"+
		"\u0275\3\2\2\2\u0275\u0276\3\2\2\2\u0276\u0278\7\24\2\2\u0277\u0279\7"+
		"\r\2\2\u0278\u0277\3\2\2\2\u0278\u0279\3\2\2\2\u0279\u027a\3\2\2\2\u027a"+
		"\u027b\5\32\16\2\u027b\65\3\2\2\2\u027c\u027e\7\"\2\2\u027d\u027f\7\f"+
		"\2\2\u027e\u027d\3\2\2\2\u027e\u027f\3\2\2\2\u027f\u0281\3\2\2\2\u0280"+
		"\u0282\7\r\2\2\u0281\u0280\3\2\2\2\u0281\u0282\3\2\2\2\u0282\u0284\3\2"+
		"\2\2\u0283\u0285\7\f\2\2\u0284\u0283\3\2\2\2\u0284\u0285\3\2\2\2\u0285"+
		"\u0287\3\2\2\2\u0286\u0288\5\32\16\2\u0287\u0286\3\2\2\2\u0287\u0288\3"+
		"\2\2\2\u0288\u0296\3\2\2\2\u0289\u028b\7\26\2\2\u028a\u028c\7\f\2\2\u028b"+
		"\u028a\3\2\2\2\u028b\u028c\3\2\2\2\u028c\u028e\3\2\2\2\u028d\u028f\7\r"+
		"\2\2\u028e\u028d\3\2\2\2\u028e\u028f\3\2\2\2\u028f\u0291\3\2\2\2\u0290"+
		"\u0292\7\f\2\2\u0291\u0290\3\2\2\2\u0291\u0292\3\2\2\2\u0292\u0293\3\2"+
		"\2\2\u0293\u0295\5\32\16\2\u0294\u0289\3\2\2\2\u0295\u0298\3\2\2\2\u0296"+
		"\u0294\3\2\2\2\u0296\u0297\3\2\2\2\u0297\u029a\3\2\2\2\u0298\u0296\3\2"+
		"\2\2\u0299\u029b\7\f\2\2\u029a\u0299\3\2\2\2\u029a\u029b\3\2\2\2\u029b"+
		"\u029d\3\2\2\2\u029c\u029e\7\r\2\2\u029d\u029c\3\2\2\2\u029d\u029e\3\2"+
		"\2\2\u029e\u02a0\3\2\2\2\u029f\u02a1\7\f\2\2\u02a0\u029f\3\2\2\2\u02a0"+
		"\u02a1\3\2\2\2\u02a1\u02a2\3\2\2\2\u02a2\u02ab\7#\2\2\u02a3\u02a6\58\35"+
		"\2\u02a4\u02a5\7\"\2\2\u02a5\u02a7\7#\2\2\u02a6\u02a4\3\2\2\2\u02a7\u02a8"+
		"\3\2\2\2\u02a8\u02a6\3\2\2\2\u02a8\u02a9\3\2\2\2\u02a9\u02ab\3\2\2\2\u02aa"+
		"\u027c\3\2\2\2\u02aa\u02a3\3\2\2\2\u02ab\67\3\2\2\2\u02ac\u02ad\b\35\1"+
		"\2\u02ad\u02b4\5\34\17\2\u02ae\u02b4\5\"\22\2\u02af\u02b4\5&\24\2\u02b0"+
		"\u02b4\5,\27\2\u02b1\u02b4\5.\30\2\u02b2\u02b4\5\60\31\2\u02b3\u02ac\3"+
		"\2\2\2\u02b3\u02ae\3\2\2\2\u02b3\u02af\3\2\2\2\u02b3\u02b0\3\2\2\2\u02b3"+
		"\u02b1\3\2\2\2\u02b3\u02b2\3\2\2\2\u02b4\u02cc\3\2\2\2\u02b5\u02b7\f\t"+
		"\2\2\u02b6\u02b8\7\r\2\2\u02b7\u02b6\3\2\2\2\u02b7\u02b8\3\2\2\2\u02b8"+
		"\u02ba\3\2\2\2\u02b9\u02bb\7\f\2\2\u02ba\u02b9\3\2\2\2\u02ba\u02bb\3\2"+
		"\2\2\u02bb\u02bd\3\2\2\2\u02bc\u02be\7\r\2\2\u02bd\u02bc\3\2\2\2\u02bd"+
		"\u02be\3\2\2\2\u02be\u02bf\3\2\2\2\u02bf\u02c1\t\3\2\2\u02c0\u02c2\7\r"+
		"\2\2\u02c1\u02c0\3\2\2\2\u02c1\u02c2\3\2\2\2\u02c2\u02c4\3\2\2\2\u02c3"+
		"\u02c5\7\f\2\2\u02c4\u02c3\3\2\2\2\u02c4\u02c5\3\2\2\2\u02c5\u02c7\3\2"+
		"\2\2\u02c6\u02c8\7\r\2\2\u02c7\u02c6\3\2\2\2\u02c7\u02c8\3\2\2\2\u02c8"+
		"\u02c9\3\2\2\2\u02c9\u02cb\58\35\n\u02ca\u02b5\3\2\2\2\u02cb\u02ce\3\2"+
		"\2\2\u02cc\u02ca\3\2\2\2\u02cc\u02cd\3\2\2\2\u02cd9\3\2\2\2\u02ce\u02cc"+
		"\3\2\2\2\u02cf\u02d2\5\26\f\2\u02d0\u02d1\7\25\2\2\u02d1\u02d3\5<\37\2"+
		"\u02d2\u02d0\3\2\2\2\u02d3\u02d4\3\2\2\2\u02d4\u02d2\3\2\2\2\u02d4\u02d5"+
		"\3\2\2\2\u02d5\u02de\3\2\2\2\u02d6\u02d9\5\30\r\2\u02d7\u02d8\7\25\2\2"+
		"\u02d8\u02da\5<\37\2\u02d9\u02d7\3\2\2\2\u02da\u02db\3\2\2\2\u02db\u02d9"+
		"\3\2\2\2\u02db\u02dc\3\2\2\2\u02dc\u02de\3\2\2\2\u02dd\u02cf\3\2\2\2\u02dd"+
		"\u02d6\3\2\2\2\u02de;\3\2\2\2\u02df\u02e2\5\26\f\2\u02e0\u02e2\5\30\r"+
		"\2\u02e1\u02df\3\2\2\2\u02e1\u02e0\3\2\2\2\u02e2=\3\2\2\2\u02e3\u02e4"+
		"\b \1\2\u02e4\u02eb\5@!\2\u02e5\u02eb\5B\"\2\u02e6\u02eb\5D#\2\u02e7\u02eb"+
		"\5J&\2\u02e8\u02eb\5L\'\2\u02e9\u02eb\5N(\2\u02ea\u02e3\3\2\2\2\u02ea"+
		"\u02e5\3\2\2\2\u02ea\u02e6\3\2\2\2\u02ea\u02e7\3\2\2\2\u02ea\u02e8\3\2"+
		"\2\2\u02ea\u02e9\3\2\2\2\u02eb\u0300\3\2\2\2\u02ec\u02ee\f\t\2\2\u02ed"+
		"\u02ef\7\r\2\2\u02ee\u02ed\3\2\2\2\u02ee\u02ef\3\2\2\2\u02ef\u02f0\3\2"+
		"\2\2\u02f0\u02f2\t\5\2\2\u02f1\u02f3\7\r\2\2\u02f2\u02f1\3\2\2\2\u02f2"+
		"\u02f3\3\2\2\2\u02f3\u02f4\3\2\2\2\u02f4\u02ff\5> \n\u02f5\u02f7\f\b\2"+
		"\2\u02f6\u02f8\7\r\2\2\u02f7\u02f6\3\2\2\2\u02f7\u02f8\3\2\2\2\u02f8\u02f9"+
		"\3\2\2\2\u02f9\u02fb\t\6\2\2\u02fa\u02fc\7\r\2\2\u02fb\u02fa\3\2\2\2\u02fb"+
		"\u02fc\3\2\2\2\u02fc\u02fd\3\2\2\2\u02fd\u02ff\5> \t\u02fe\u02ec\3\2\2"+
		"\2\u02fe\u02f5\3\2\2\2\u02ff\u0302\3\2\2\2\u0300\u02fe\3\2\2\2\u0300\u0301"+
		"\3\2\2\2\u0301?\3\2\2\2\u0302\u0300\3\2\2\2\u0303\u0304\t\6\2\2\u0304"+
		"\u0305\5> \2\u0305A\3\2\2\2\u0306\u0308\7\"\2\2\u0307\u0309\7\f\2\2\u0308"+
		"\u0307\3\2\2\2\u0308\u0309\3\2\2\2\u0309\u030b\3\2\2\2\u030a\u030c\7\r"+
		"\2\2\u030b\u030a\3\2\2\2\u030b\u030c\3\2\2\2\u030c\u030e\3\2\2\2\u030d"+
		"\u030f\7\f\2\2\u030e\u030d\3\2\2\2\u030e\u030f\3\2\2\2\u030f\u0311\3\2"+
		"\2\2\u0310\u0312\5> \2\u0311\u0310\3\2\2\2\u0311\u0312\3\2\2\2\u0312\u0320"+
		"\3\2\2\2\u0313\u0315\7\26\2\2\u0314\u0316\7\f\2\2\u0315\u0314\3\2\2\2"+
		"\u0315\u0316\3\2\2\2\u0316\u0318\3\2\2\2\u0317\u0319\7\r\2\2\u0318\u0317"+
		"\3\2\2\2\u0318\u0319\3\2\2\2\u0319\u031b\3\2\2\2\u031a\u031c\7\f\2\2\u031b"+
		"\u031a\3\2\2\2\u031b\u031c\3\2\2\2\u031c\u031d\3\2\2\2\u031d\u031f\5>"+
		" \2\u031e\u0313\3\2\2\2\u031f\u0322\3\2\2\2\u0320\u031e\3\2\2\2\u0320"+
		"\u0321\3\2\2\2\u0321\u0324\3\2\2\2\u0322\u0320\3\2\2\2\u0323\u0325\7\f"+
		"\2\2\u0324\u0323\3\2\2\2\u0324\u0325\3\2\2\2\u0325\u0327\3\2\2\2\u0326"+
		"\u0328\7\r\2\2\u0327\u0326\3\2\2\2\u0327\u0328\3\2\2\2\u0328\u032a\3\2"+
		"\2\2\u0329\u032b\7\f\2\2\u032a\u0329\3\2\2\2\u032a\u032b\3\2\2\2\u032b"+
		"\u032c\3\2\2\2\u032c\u032d\7#\2\2\u032dC\3\2\2\2\u032e\u0330\7\36\2\2"+
		"\u032f\u0331\7\r\2\2\u0330\u032f\3\2\2\2\u0330\u0331\3\2\2\2\u0331\u0333"+
		"\3\2\2\2\u0332\u0334\7\f\2\2\u0333\u0332\3\2\2\2\u0333\u0334\3\2\2\2\u0334"+
		"\u0336\3\2\2\2\u0335\u0337\7\r\2\2\u0336\u0335\3\2\2\2\u0336\u0337\3\2"+
		"\2\2\u0337\u0339\3\2\2\2\u0338\u033a\5F$\2\u0339\u0338\3\2\2\2\u0339\u033a"+
		"\3\2\2\2\u033a\u033c\3\2\2\2\u033b\u033d\7\r\2\2\u033c\u033b\3\2\2\2\u033c"+
		"\u033d\3\2\2\2\u033d\u033f\3\2\2\2\u033e\u0340\7\f\2\2\u033f\u033e\3\2"+
		"\2\2\u033f\u0340\3\2\2\2\u0340\u0342\3\2\2\2\u0341\u0343\7\r\2\2\u0342"+
		"\u0341\3\2\2\2\u0342\u0343\3\2\2\2\u0343\u0344\3\2\2\2\u0344\u0345\7\37"+
		"\2\2\u0345E\3\2\2\2\u0346\u0357\5H%\2\u0347\u0349\7\r\2\2\u0348\u0347"+
		"\3\2\2\2\u0348\u0349\3\2\2\2\u0349\u034a\3\2\2\2\u034a\u034c\7\26\2\2"+
		"\u034b\u034d\7\r\2\2\u034c\u034b\3\2\2\2\u034c\u034d\3\2\2\2\u034d\u034f"+
		"\3\2\2\2\u034e\u0350\7\f\2\2\u034f\u034e\3\2\2\2\u034f\u0350\3\2\2\2\u0350"+
		"\u0352\3\2\2\2\u0351\u0353\7\r\2\2\u0352\u0351\3\2\2\2\u0352\u0353\3\2"+
		"\2\2\u0353\u0354\3\2\2\2\u0354\u0356\5H%\2\u0355\u0348\3\2\2\2\u0356\u0359"+
		"\3\2\2\2\u0357\u0355\3\2\2\2\u0357\u0358\3\2\2\2\u0358G\3\2\2\2\u0359"+
		"\u0357\3\2\2\2\u035a\u035c\5L\'\2\u035b\u035d\7\r\2\2\u035c\u035b\3\2"+
		"\2\2\u035c\u035d\3\2\2\2\u035d\u035e\3\2\2\2\u035e\u0360\7\24\2\2\u035f"+
		"\u0361\7\r\2\2\u0360\u035f\3\2\2\2\u0360\u0361\3\2\2\2\u0361\u0362\3\2"+
		"\2\2\u0362\u0363\5D#\2\u0363\u036f\3\2\2\2\u0364\u0366\5L\'\2\u0365\u0367"+
		"\7\r\2\2\u0366\u0365\3\2\2\2\u0366\u0367\3\2\2\2\u0367\u0368\3\2\2\2\u0368"+
		"\u036a\7\24\2\2\u0369\u036b\7\r\2\2\u036a\u0369\3\2\2\2\u036a\u036b\3"+
		"\2\2\2\u036b\u036c\3\2\2\2\u036c\u036d\5L\'\2\u036d\u036f\3\2\2\2\u036e"+
		"\u035a\3\2\2\2\u036e\u0364\3\2\2\2\u036fI\3\2\2\2\u0370\u0372\7 \2\2\u0371"+
		"\u0373\7\r\2\2\u0372\u0371\3\2\2\2\u0372\u0373\3\2\2\2\u0373\u0375\3\2"+
		"\2\2\u0374\u0376\7\f\2\2\u0375\u0374\3\2\2\2\u0375\u0376\3\2\2\2\u0376"+
		"\u0378\3\2\2\2\u0377\u0379\7\r\2\2\u0378\u0377\3\2\2\2\u0378\u0379\3\2"+
		"\2\2\u0379\u037b\3\2\2\2\u037a\u037c\5\36\20\2\u037b\u037a\3\2\2\2\u037b"+
		"\u037c\3\2\2\2\u037c\u037e\3\2\2\2\u037d\u037f\7\r\2\2\u037e\u037d\3\2"+
		"\2\2\u037e\u037f\3\2\2\2\u037f\u0381\3\2\2\2\u0380\u0382\7\f\2\2\u0381"+
		"\u0380\3\2\2\2\u0381\u0382\3\2\2\2\u0382\u0384\3\2\2\2\u0383\u0385\7\r"+
		"\2\2\u0384\u0383\3\2\2\2\u0384\u0385\3\2\2\2\u0385\u0386\3\2\2\2\u0386"+
		"\u0388\7!\2\2\u0387\u0389\7\r\2\2\u0388\u0387\3\2\2\2\u0388\u0389\3\2"+
		"\2\2\u0389\u038b\3\2\2\2\u038a\u038c\7\f\2\2\u038b\u038a\3\2\2\2\u038b"+
		"\u038c\3\2\2\2\u038c\u038e\3\2\2\2\u038d\u038f\7\r\2\2\u038e\u038d\3\2"+
		"\2\2\u038e\u038f\3\2\2\2\u038f\u0390\3\2\2\2\u0390\u0392\7\33\2\2\u0391"+
		"\u0393\7\r\2\2\u0392\u0391\3\2\2\2\u0392\u0393\3\2\2\2\u0393\u0395\3\2"+
		"\2\2\u0394\u0396\7\f\2\2\u0395\u0394\3\2\2\2\u0395\u0396\3\2\2\2\u0396"+
		"\u0398\3\2\2\2\u0397\u0399\7\r\2\2\u0398\u0397\3\2\2\2\u0398\u0399\3\2"+
		"\2\2\u0399\u039a\3\2\2\2\u039a\u039c\5\32\16\2\u039b\u039d\7\30\2\2\u039c"+
		"\u039b\3\2\2\2\u039c\u039d\3\2\2\2\u039d\u03b7\3\2\2\2\u039e\u03a0\5 "+
		"\21\2\u039f\u03a1\7\r\2\2\u03a0\u039f\3\2\2\2\u03a0\u03a1\3\2\2\2\u03a1"+
		"\u03a3\3\2\2\2\u03a2\u03a4\7\f\2\2\u03a3\u03a2\3\2\2\2\u03a3\u03a4\3\2"+
		"\2\2\u03a4\u03a6\3\2\2\2\u03a5\u03a7\7\r\2\2\u03a6\u03a5\3\2\2\2\u03a6"+
		"\u03a7\3\2\2\2\u03a7\u03a8\3\2\2\2\u03a8\u03aa\7\33\2\2\u03a9\u03ab\7"+
		"\r\2\2\u03aa\u03a9\3\2\2\2\u03aa\u03ab\3\2\2\2\u03ab\u03ad\3\2\2\2\u03ac"+
		"\u03ae\7\f\2\2\u03ad\u03ac\3\2\2\2\u03ad\u03ae\3\2\2\2\u03ae\u03b0\3\2"+
		"\2\2\u03af\u03b1\7\r\2\2\u03b0\u03af\3\2\2\2\u03b0\u03b1\3\2\2\2\u03b1"+
		"\u03b2\3\2\2\2\u03b2\u03b4\5\32\16\2\u03b3\u03b5\7\30\2\2\u03b4\u03b3"+
		"\3\2\2\2\u03b4\u03b5\3\2\2\2\u03b5\u03b7\3\2\2\2\u03b6\u0370\3\2\2\2\u03b6"+
		"\u039e\3\2\2\2\u03b7K\3\2\2\2\u03b8\u03b9\t\7\2\2\u03b9M\3\2\2\2\u03ba"+
		"\u03bc\7 \2\2\u03bb\u03bd\7\r\2\2\u03bc\u03bb\3\2\2\2\u03bc\u03bd\3\2"+
		"\2\2\u03bd\u03be\3\2\2\2\u03be\u03c0\5> \2\u03bf\u03c1\7\r\2\2\u03c0\u03bf"+
		"\3\2\2\2\u03c0\u03c1\3\2\2\2\u03c1\u03c2\3\2\2\2\u03c2\u03c3\7!\2\2\u03c3"+
		"O\3\2\2\2\u03c4\u03c5\5R*\2\u03c5Q\3\2\2\2\u03c6\u03ca\5T+\2\u03c7\u03c9"+
		"\5X-\2\u03c8\u03c7\3\2\2\2\u03c9\u03cc\3\2\2\2\u03ca\u03c8\3\2\2\2\u03ca"+
		"\u03cb\3\2\2\2\u03cb\u03d5\3\2\2\2\u03cc\u03ca\3\2\2\2\u03cd\u03d1\5\\"+
		"/\2\u03ce\u03d0\5X-\2\u03cf\u03ce\3\2\2\2\u03d0\u03d3\3\2\2\2\u03d1\u03cf"+
		"\3\2\2\2\u03d1\u03d2\3\2\2\2\u03d2\u03d5\3\2\2\2\u03d3\u03d1\3\2\2\2\u03d4"+
		"\u03c6\3\2\2\2\u03d4\u03cd\3\2\2\2\u03d5S\3\2\2\2\u03d6\u03d8\7\r\2\2"+
		"\u03d7\u03d6\3\2\2\2\u03d7\u03d8\3\2\2\2\u03d8\u03da\3\2\2\2\u03d9\u03db"+
		"\5V,\2\u03da\u03d9\3\2\2\2\u03db\u03dc\3\2\2\2\u03dc\u03da\3\2\2\2\u03dc"+
		"\u03dd\3\2\2\2\u03dd\u03e3\3\2\2\2\u03de\u03e2\5V,\2\u03df\u03e2\7\r\2"+
		"\2\u03e0\u03e2\7\17\2\2\u03e1\u03de\3\2\2\2\u03e1\u03df\3\2\2\2\u03e1"+
		"\u03e0\3\2\2\2\u03e2\u03e5\3\2\2\2\u03e3\u03e1\3\2\2\2\u03e3\u03e4\3\2"+
		"\2\2\u03e4U\3\2\2\2\u03e5\u03e3\3\2\2\2\u03e6\u03f0\7\16\2\2\u03e7\u03f0"+
		"\7\13\2\2\u03e8\u03f0\7\23\2\2\u03e9\u03f0\7\36\2\2\u03ea\u03f0\7\37\2"+
		"\2\u03eb\u03f0\7\24\2\2\u03ec\u03f0\7\21\2\2\u03ed\u03f0\7\25\2\2\u03ee"+
		"\u03f0\5L\'\2\u03ef\u03e6\3\2\2\2\u03ef\u03e7\3\2\2\2\u03ef\u03e8\3\2"+
		"\2\2\u03ef\u03e9\3\2\2\2\u03ef\u03ea\3\2\2\2\u03ef\u03eb\3\2\2\2\u03ef"+
		"\u03ec\3\2\2\2\u03ef\u03ed\3\2\2\2\u03ef\u03ee\3\2\2\2\u03f0W\3\2\2\2"+
		"\u03f1\u03f4\5\\/\2\u03f2\u03f4\5Z.\2\u03f3\u03f1\3\2\2\2\u03f3\u03f2"+
		"\3\2\2\2\u03f4Y\3\2\2\2\u03f5\u03f9\5V,\2\u03f6\u03f9\7\r\2\2\u03f7\u03f9"+
		"\7\17\2\2\u03f8\u03f5\3\2\2\2\u03f8\u03f6\3\2\2\2\u03f8\u03f7\3\2\2\2"+
		"\u03f9\u03fa\3\2\2\2\u03fa\u03f8\3\2\2\2\u03fa\u03fb\3\2\2\2\u03fb[\3"+
		"\2\2\2\u03fc\u03fd\7\35\2\2\u03fd\u03fe\5^\60\2\u03fe\u0400\7\r\2\2\u03ff"+
		"\u0401\5`\61\2\u0400\u03ff\3\2\2\2\u0400\u0401\3\2\2\2\u0401\u0402\3\2"+
		"\2\2\u0402\u0403\7\37\2\2\u0403]\3\2\2\2\u0404\u0405\5\26\f\2\u0405_\3"+
		"\2\2\2\u0406\u0408\5d\63\2\u0407\u0406\3\2\2\2\u0408\u0409\3\2\2\2\u0409"+
		"\u0407\3\2\2\2\u0409\u040a\3\2\2\2\u040aa\3\2\2\2\u040b\u040f\7\36\2\2"+
		"\u040c\u040e\5d\63\2\u040d\u040c\3\2\2\2\u040e\u0411\3\2\2\2\u040f\u040d"+
		"\3\2\2\2\u040f\u0410\3\2\2\2\u0410\u0412\3\2\2\2\u0411\u040f\3\2\2\2\u0412"+
		"\u0413\7\37\2\2\u0413c\3\2\2\2\u0414\u041e\5b\62\2\u0415\u041a\5f\64\2"+
		"\u0416\u0417\7\f\2\2\u0417\u0419\5f\64\2\u0418\u0416\3\2\2\2\u0419\u041c"+
		"\3\2\2\2\u041a\u0418\3\2\2\2\u041a\u041b\3\2\2\2\u041b\u041e\3\2\2\2\u041c"+
		"\u041a\3\2\2\2\u041d\u0414\3\2\2\2\u041d\u0415\3\2\2\2\u041ee\3\2\2\2"+
		"\u041f\u0420\t\b\2\2\u0420g\3\2\2\2\u00d6kot\u0080\u0087\u0095\u0099\u00a2"+
		"\u00ae\u00b3\u00bd\u00c1\u00c9\u00cd\u00d1\u00d5\u00dd\u00e1\u00e6\u00f0"+
		"\u00f4\u00f8\u00fc\u0101\u0109\u010d\u0113\u0117\u011c\u0122\u012a\u0131"+
		"\u0138\u013a\u0140\u014f\u0153\u0156\u0159\u015d\u0160\u0163\u0168\u016d"+
		"\u0170\u0173\u0176\u0179\u017c\u017f\u0183\u0186\u0189\u018d\u0190\u0193"+
		"\u0197\u019b\u019e\u01a1\u01a5\u01a8\u01ab\u01af\u01b1\u01b6\u01b9\u01be"+
		"\u01c3\u01c7\u01ca\u01cd\u01d1\u01d5\u01db\u01df\u01e4\u01e9\u01ed\u01f1"+
		"\u01f5\u01fa\u01ff\u0203\u0207\u020b\u0210\u0215\u0219\u021d\u0221\u0226"+
		"\u0229\u022e\u0232\u0238\u023c\u0245\u0248\u024b\u024e\u0251\u0254\u0257"+
		"\u025d\u0261\u0264\u0267\u026c\u0271\u0274\u0278\u027e\u0281\u0284\u0287"+
		"\u028b\u028e\u0291\u0296\u029a\u029d\u02a0\u02a8\u02aa\u02b3\u02b7\u02ba"+
		"\u02bd\u02c1\u02c4\u02c7\u02cc\u02d4\u02db\u02dd\u02e1\u02ea\u02ee\u02f2"+
		"\u02f7\u02fb\u02fe\u0300\u0308\u030b\u030e\u0311\u0315\u0318\u031b\u0320"+
		"\u0324\u0327\u032a\u0330\u0333\u0336\u0339\u033c\u033f\u0342\u0348\u034c"+
		"\u034f\u0352\u0357\u035c\u0360\u0366\u036a\u036e\u0372\u0375\u0378\u037b"+
		"\u037e\u0381\u0384\u0388\u038b\u038e\u0392\u0395\u0398\u039c\u03a0\u03a3"+
		"\u03a6\u03aa\u03ad\u03b0\u03b4\u03b6\u03bc\u03c0\u03ca\u03d1\u03d4\u03d7"+
		"\u03dc\u03e1\u03e3\u03ef\u03f3\u03f8\u03fa\u0400\u0409\u040f\u041a\u041d";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}