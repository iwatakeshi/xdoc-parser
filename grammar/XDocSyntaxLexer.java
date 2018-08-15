// Generated from /Users/takeshi/Documents/GitHub/xdoc-parser/grammar/XDocSyntaxLexer.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class XDocSyntaxLexer extends Lexer {
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
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"NumberLiteral", "IntegerLiteral", "DecimalIntegerLiteral", "HexIntegerLiteral", 
		"OctalIntegerLiteral", "BinaryIntegerLiteral", "IntegerTypeSuffix", "DecimalNumeral", 
		"Digits", "Digit", "NonZeroDigit", "DigitsAndUnderscores", "DigitOrUnderscore", 
		"Underscores", "HexNumeral", "HexDigits", "HexDigit", "HexDigitsAndUnderscores", 
		"HexDigitOrUnderscore", "OctalNumeral", "OctalDigits", "OctalDigit", "OctalDigitsAndUnderscores", 
		"OctalDigitOrUnderscore", "BinaryNumeral", "BinaryDigits", "BinaryDigit", 
		"BinaryDigitsAndUnderscores", "BinaryDigitOrUnderscore", "FloatingPointLiteral", 
		"DecimalFloatingPointLiteral", "ExponentPart", "ExponentIndicator", "SignedInteger", 
		"Sign", "FloatTypeSuffix", "HexadecimalFloatingPointLiteral", "HexSignificand", 
		"BinaryExponent", "BinaryExponentIndicator", "BooleanLiteral", "CharacterLiteral", 
		"SingleCharacter", "StringLiteral", "StringCharacters", "StringCharacter", 
		"EscapeSequence", "OctalEscape", "ZeroToThree", "UnicodeEscape", "NullLiteral", 
		"EXTENDS", "ID", "NEWLINE", "SPACE", "TEXT_CONTENT", "AT", "PLUS", "MINUS", 
		"STAR", "FORWARD_SLASH", "COLON", "PERIOD", "COMMA", "EQUAL", "QUESTION", 
		"AMP", "PIPE", "ARROW", "EXCLAMATION", "INLINE_TAG_START", "BRACE_OPEN", 
		"BRACE_CLOSE", "PAREN_OPEN", "PAREN_CLOSE", "BRACKET_OPEN", "BRACKET_CLOSE", 
		"LESSTHAN", "GREATERTHAN", "LETTER", "DIGIT"
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


	public XDocSyntaxLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "XDocSyntaxLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	@Override
	public void action(RuleContext _localctx, int ruleIndex, int actionIndex) {
		switch (ruleIndex) {
		case 52:
			ID_action((RuleContext)_localctx, actionIndex);
			break;
		}
	}
	private void ID_action(RuleContext _localctx, int actionIndex) {
		switch (actionIndex) {
		case 0:

			    if (this.text == "true" || this.text == "false") this.type = XDocSyntaxLexer.BooleanLiteral;
			    if (this.text == "null" || this.text == "undefined") this.type = XDocSyntaxLexer.NullLiteral;
					if (this.text == "extends") this.type = XDocSyntaxLexer.EXTENDS;

			  
			break;
		}
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2%\u022f\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\3\2\3\2\5\2"+
		"\u00a8\n\2\3\3\3\3\3\3\3\3\5\3\u00ae\n\3\3\4\3\4\5\4\u00b2\n\4\3\5\3\5"+
		"\5\5\u00b6\n\5\3\6\3\6\5\6\u00ba\n\6\3\7\3\7\5\7\u00be\n\7\3\b\3\b\3\t"+
		"\3\t\3\t\5\t\u00c5\n\t\3\t\3\t\3\t\5\t\u00ca\n\t\5\t\u00cc\n\t\3\n\3\n"+
		"\5\n\u00d0\n\n\3\n\5\n\u00d3\n\n\3\13\3\13\5\13\u00d7\n\13\3\f\3\f\3\r"+
		"\6\r\u00dc\n\r\r\r\16\r\u00dd\3\16\3\16\5\16\u00e2\n\16\3\17\6\17\u00e5"+
		"\n\17\r\17\16\17\u00e6\3\20\3\20\3\20\3\20\3\21\3\21\5\21\u00ef\n\21\3"+
		"\21\5\21\u00f2\n\21\3\22\3\22\3\23\6\23\u00f7\n\23\r\23\16\23\u00f8\3"+
		"\24\3\24\5\24\u00fd\n\24\3\25\3\25\3\25\3\25\3\26\3\26\5\26\u0105\n\26"+
		"\3\26\5\26\u0108\n\26\3\27\3\27\3\30\6\30\u010d\n\30\r\30\16\30\u010e"+
		"\3\31\3\31\5\31\u0113\n\31\3\32\3\32\3\32\3\32\3\33\3\33\5\33\u011b\n"+
		"\33\3\33\5\33\u011e\n\33\3\34\3\34\3\35\6\35\u0123\n\35\r\35\16\35\u0124"+
		"\3\36\3\36\5\36\u0129\n\36\3\37\3\37\5\37\u012d\n\37\3 \3 \3 \5 \u0132"+
		"\n \3 \5 \u0135\n \3 \5 \u0138\n \3 \3 \3 \5 \u013d\n \3 \5 \u0140\n "+
		"\3 \3 \3 \5 \u0145\n \3 \3 \3 \5 \u014a\n \3!\3!\3!\3\"\3\"\3#\5#\u0152"+
		"\n#\3#\3#\3$\3$\3%\3%\3&\3&\3&\5&\u015d\n&\3\'\3\'\5\'\u0161\n\'\3\'\3"+
		"\'\3\'\5\'\u0166\n\'\3\'\3\'\5\'\u016a\n\'\3(\3(\3(\3)\3)\3*\3*\3*\3*"+
		"\3*\3*\3*\3*\3*\5*\u017a\n*\3+\3+\3+\3+\3+\3+\3+\3+\5+\u0184\n+\3,\3,"+
		"\3-\3-\5-\u018a\n-\3-\3-\3-\5-\u018f\n-\3-\5-\u0192\n-\3.\6.\u0195\n."+
		"\r.\16.\u0196\3/\3/\5/\u019b\n/\3\60\3\60\3\60\3\60\5\60\u01a1\n\60\3"+
		"\61\3\61\3\61\3\61\3\61\3\61\3\61\3\61\3\61\3\61\3\61\5\61\u01ae\n\61"+
		"\3\62\3\62\3\63\3\63\6\63\u01b4\n\63\r\63\16\63\u01b5\3\63\3\63\3\63\3"+
		"\63\3\63\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3"+
		"\64\5\64\u01ca\n\64\3\65\3\65\3\65\3\65\3\65\3\65\3\65\3\65\3\66\3\66"+
		"\3\66\3\66\7\66\u01d8\n\66\f\66\16\66\u01db\13\66\3\67\3\67\5\67\u01df"+
		"\n\67\3\67\3\67\3\67\3\67\5\67\u01e5\n\67\3\67\3\67\5\67\u01e9\n\67\5"+
		"\67\u01eb\n\67\38\68\u01ee\n8\r8\168\u01ef\39\69\u01f3\n9\r9\169\u01f4"+
		"\3:\3:\3;\3;\3<\3<\3=\3=\3>\3>\3?\3?\3@\3@\3A\3A\3B\3B\3C\3C\3D\3D\3E"+
		"\3E\3F\3F\3F\3F\3F\3F\5F\u0215\nF\3G\3G\3H\3H\3H\3I\3I\3J\3J\3K\3K\3L"+
		"\3L\3M\3M\3N\3N\3O\3O\3P\3P\3Q\3Q\3R\3R\2\2S\3\3\5\4\7\2\t\2\13\2\r\2"+
		"\17\2\21\2\23\2\25\2\27\2\31\2\33\2\35\2\37\2!\2#\2%\2\'\2)\2+\2-\2/\2"+
		"\61\2\63\2\65\2\67\29\2;\2=\5?\2A\2C\2E\2G\2I\2K\2M\2O\2Q\2S\6U\7W\2Y"+
		"\b[\2]\2_\2a\2c\2e\2g\ti\nk\13m\fo\rq\16s\17u\20w\21y\22{\23}\24\177\25"+
		"\u0081\26\u0083\27\u0085\30\u0087\31\u0089\32\u008b\33\u008d\34\u008f"+
		"\35\u0091\36\u0093\37\u0095 \u0097!\u0099\"\u009b#\u009d$\u009f%\u00a1"+
		"\2\u00a3\2\3\2\26\4\2NNnn\3\2\63;\4\2ZZzz\5\2\62;CHch\4\2QQqq\3\2\629"+
		"\4\2DDdd\3\2\62\63\4\2GGgg\4\2--//\6\2FFHHffhh\4\2RRrr\6\2\f\f\17\17)"+
		")^^\6\2\f\f\17\17$$^^\n\2$$))^^ddhhppttvv\3\2\62\65\4\2\13\13\"\"\n\2"+
		"\13\f\17\17\"$(<>B]]__}\177\4\2C\\c|\3\2\62;\2\u0243\2\3\3\2\2\2\2\5\3"+
		"\2\2\2\2=\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2Y\3\2\2\2\2g\3\2\2\2\2i\3\2\2"+
		"\2\2k\3\2\2\2\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2\2\2s\3\2\2\2\2u\3\2\2\2\2"+
		"w\3\2\2\2\2y\3\2\2\2\2{\3\2\2\2\2}\3\2\2\2\2\177\3\2\2\2\2\u0081\3\2\2"+
		"\2\2\u0083\3\2\2\2\2\u0085\3\2\2\2\2\u0087\3\2\2\2\2\u0089\3\2\2\2\2\u008b"+
		"\3\2\2\2\2\u008d\3\2\2\2\2\u008f\3\2\2\2\2\u0091\3\2\2\2\2\u0093\3\2\2"+
		"\2\2\u0095\3\2\2\2\2\u0097\3\2\2\2\2\u0099\3\2\2\2\2\u009b\3\2\2\2\2\u009d"+
		"\3\2\2\2\2\u009f\3\2\2\2\3\u00a7\3\2\2\2\5\u00ad\3\2\2\2\7\u00af\3\2\2"+
		"\2\t\u00b3\3\2\2\2\13\u00b7\3\2\2\2\r\u00bb\3\2\2\2\17\u00bf\3\2\2\2\21"+
		"\u00cb\3\2\2\2\23\u00cd\3\2\2\2\25\u00d6\3\2\2\2\27\u00d8\3\2\2\2\31\u00db"+
		"\3\2\2\2\33\u00e1\3\2\2\2\35\u00e4\3\2\2\2\37\u00e8\3\2\2\2!\u00ec\3\2"+
		"\2\2#\u00f3\3\2\2\2%\u00f6\3\2\2\2\'\u00fc\3\2\2\2)\u00fe\3\2\2\2+\u0102"+
		"\3\2\2\2-\u0109\3\2\2\2/\u010c\3\2\2\2\61\u0112\3\2\2\2\63\u0114\3\2\2"+
		"\2\65\u0118\3\2\2\2\67\u011f\3\2\2\29\u0122\3\2\2\2;\u0128\3\2\2\2=\u012c"+
		"\3\2\2\2?\u0149\3\2\2\2A\u014b\3\2\2\2C\u014e\3\2\2\2E\u0151\3\2\2\2G"+
		"\u0155\3\2\2\2I\u0157\3\2\2\2K\u0159\3\2\2\2M\u0169\3\2\2\2O\u016b\3\2"+
		"\2\2Q\u016e\3\2\2\2S\u0179\3\2\2\2U\u0183\3\2\2\2W\u0185\3\2\2\2Y\u0191"+
		"\3\2\2\2[\u0194\3\2\2\2]\u019a\3\2\2\2_\u01a0\3\2\2\2a\u01ad\3\2\2\2c"+
		"\u01af\3\2\2\2e\u01b1\3\2\2\2g\u01c9\3\2\2\2i\u01cb\3\2\2\2k\u01d3\3\2"+
		"\2\2m\u01ea\3\2\2\2o\u01ed\3\2\2\2q\u01f2\3\2\2\2s\u01f6\3\2\2\2u\u01f8"+
		"\3\2\2\2w\u01fa\3\2\2\2y\u01fc\3\2\2\2{\u01fe\3\2\2\2}\u0200\3\2\2\2\177"+
		"\u0202\3\2\2\2\u0081\u0204\3\2\2\2\u0083\u0206\3\2\2\2\u0085\u0208\3\2"+
		"\2\2\u0087\u020a\3\2\2\2\u0089\u020c\3\2\2\2\u008b\u0214\3\2\2\2\u008d"+
		"\u0216\3\2\2\2\u008f\u0218\3\2\2\2\u0091\u021b\3\2\2\2\u0093\u021d\3\2"+
		"\2\2\u0095\u021f\3\2\2\2\u0097\u0221\3\2\2\2\u0099\u0223\3\2\2\2\u009b"+
		"\u0225\3\2\2\2\u009d\u0227\3\2\2\2\u009f\u0229\3\2\2\2\u00a1\u022b\3\2"+
		"\2\2\u00a3\u022d\3\2\2\2\u00a5\u00a8\5\5\3\2\u00a6\u00a8\5=\37\2\u00a7"+
		"\u00a5\3\2\2\2\u00a7\u00a6\3\2\2\2\u00a8\4\3\2\2\2\u00a9\u00ae\5\7\4\2"+
		"\u00aa\u00ae\5\t\5\2\u00ab\u00ae\5\13\6\2\u00ac\u00ae\5\r\7\2\u00ad\u00a9"+
		"\3\2\2\2\u00ad\u00aa\3\2\2\2\u00ad\u00ab\3\2\2\2\u00ad\u00ac\3\2\2\2\u00ae"+
		"\6\3\2\2\2\u00af\u00b1\5\21\t\2\u00b0\u00b2\5\17\b\2\u00b1\u00b0\3\2\2"+
		"\2\u00b1\u00b2\3\2\2\2\u00b2\b\3\2\2\2\u00b3\u00b5\5\37\20\2\u00b4\u00b6"+
		"\5\17\b\2\u00b5\u00b4\3\2\2\2\u00b5\u00b6\3\2\2\2\u00b6\n\3\2\2\2\u00b7"+
		"\u00b9\5)\25\2\u00b8\u00ba\5\17\b\2\u00b9\u00b8\3\2\2\2\u00b9\u00ba\3"+
		"\2\2\2\u00ba\f\3\2\2\2\u00bb\u00bd\5\63\32\2\u00bc\u00be\5\17\b\2\u00bd"+
		"\u00bc\3\2\2\2\u00bd\u00be\3\2\2\2\u00be\16\3\2\2\2\u00bf\u00c0\t\2\2"+
		"\2\u00c0\20\3\2\2\2\u00c1\u00cc\7\62\2\2\u00c2\u00c9\5\27\f\2\u00c3\u00c5"+
		"\5\23\n\2\u00c4\u00c3\3\2\2\2\u00c4\u00c5\3\2\2\2\u00c5\u00ca\3\2\2\2"+
		"\u00c6\u00c7\5\35\17\2\u00c7\u00c8\5\23\n\2\u00c8\u00ca\3\2\2\2\u00c9"+
		"\u00c4\3\2\2\2\u00c9\u00c6\3\2\2\2\u00ca\u00cc\3\2\2\2\u00cb\u00c1\3\2"+
		"\2\2\u00cb\u00c2\3\2\2\2\u00cc\22\3\2\2\2\u00cd\u00d2\5\25\13\2\u00ce"+
		"\u00d0\5\31\r\2\u00cf\u00ce\3\2\2\2\u00cf\u00d0\3\2\2\2\u00d0\u00d1\3"+
		"\2\2\2\u00d1\u00d3\5\25\13\2\u00d2\u00cf\3\2\2\2\u00d2\u00d3\3\2\2\2\u00d3"+
		"\24\3\2\2\2\u00d4\u00d7\7\62\2\2\u00d5\u00d7\5\27\f\2\u00d6\u00d4\3\2"+
		"\2\2\u00d6\u00d5\3\2\2\2\u00d7\26\3\2\2\2\u00d8\u00d9\t\3\2\2\u00d9\30"+
		"\3\2\2\2\u00da\u00dc\5\33\16\2\u00db\u00da\3\2\2\2\u00dc\u00dd\3\2\2\2"+
		"\u00dd\u00db\3\2\2\2\u00dd\u00de\3\2\2\2\u00de\32\3\2\2\2\u00df\u00e2"+
		"\5\25\13\2\u00e0\u00e2\7a\2\2\u00e1\u00df\3\2\2\2\u00e1\u00e0\3\2\2\2"+
		"\u00e2\34\3\2\2\2\u00e3\u00e5\7a\2\2\u00e4\u00e3\3\2\2\2\u00e5\u00e6\3"+
		"\2\2\2\u00e6\u00e4\3\2\2\2\u00e6\u00e7\3\2\2\2\u00e7\36\3\2\2\2\u00e8"+
		"\u00e9\7\62\2\2\u00e9\u00ea\t\4\2\2\u00ea\u00eb\5!\21\2\u00eb \3\2\2\2"+
		"\u00ec\u00f1\5#\22\2\u00ed\u00ef\5%\23\2\u00ee\u00ed\3\2\2\2\u00ee\u00ef"+
		"\3\2\2\2\u00ef\u00f0\3\2\2\2\u00f0\u00f2\5#\22\2\u00f1\u00ee\3\2\2\2\u00f1"+
		"\u00f2\3\2\2\2\u00f2\"\3\2\2\2\u00f3\u00f4\t\5\2\2\u00f4$\3\2\2\2\u00f5"+
		"\u00f7\5\'\24\2\u00f6\u00f5\3\2\2\2\u00f7\u00f8\3\2\2\2\u00f8\u00f6\3"+
		"\2\2\2\u00f8\u00f9\3\2\2\2\u00f9&\3\2\2\2\u00fa\u00fd\5#\22\2\u00fb\u00fd"+
		"\7a\2\2\u00fc\u00fa\3\2\2\2\u00fc\u00fb\3\2\2\2\u00fd(\3\2\2\2\u00fe\u00ff"+
		"\7\62\2\2\u00ff\u0100\t\6\2\2\u0100\u0101\5+\26\2\u0101*\3\2\2\2\u0102"+
		"\u0107\5-\27\2\u0103\u0105\5/\30\2\u0104\u0103\3\2\2\2\u0104\u0105\3\2"+
		"\2\2\u0105\u0106\3\2\2\2\u0106\u0108\5-\27\2\u0107\u0104\3\2\2\2\u0107"+
		"\u0108\3\2\2\2\u0108,\3\2\2\2\u0109\u010a\t\7\2\2\u010a.\3\2\2\2\u010b"+
		"\u010d\5\61\31\2\u010c\u010b\3\2\2\2\u010d\u010e\3\2\2\2\u010e\u010c\3"+
		"\2\2\2\u010e\u010f\3\2\2\2\u010f\60\3\2\2\2\u0110\u0113\5-\27\2\u0111"+
		"\u0113\7a\2\2\u0112\u0110\3\2\2\2\u0112\u0111\3\2\2\2\u0113\62\3\2\2\2"+
		"\u0114\u0115\7\62\2\2\u0115\u0116\t\b\2\2\u0116\u0117\5\65\33\2\u0117"+
		"\64\3\2\2\2\u0118\u011d\5\67\34\2\u0119\u011b\59\35\2\u011a\u0119\3\2"+
		"\2\2\u011a\u011b\3\2\2\2\u011b\u011c\3\2\2\2\u011c\u011e\5\67\34\2\u011d"+
		"\u011a\3\2\2\2\u011d\u011e\3\2\2\2\u011e\66\3\2\2\2\u011f\u0120\t\t\2"+
		"\2\u01208\3\2\2\2\u0121\u0123\5;\36\2\u0122\u0121\3\2\2\2\u0123\u0124"+
		"\3\2\2\2\u0124\u0122\3\2\2\2\u0124\u0125\3\2\2\2\u0125:\3\2\2\2\u0126"+
		"\u0129\5\67\34\2\u0127\u0129\7a\2\2\u0128\u0126\3\2\2\2\u0128\u0127\3"+
		"\2\2\2\u0129<\3\2\2\2\u012a\u012d\5? \2\u012b\u012d\5K&\2\u012c\u012a"+
		"\3\2\2\2\u012c\u012b\3\2\2\2\u012d>\3\2\2\2\u012e\u012f\5\23\n\2\u012f"+
		"\u0131\7\60\2\2\u0130\u0132\5\23\n\2\u0131\u0130\3\2\2\2\u0131\u0132\3"+
		"\2\2\2\u0132\u0134\3\2\2\2\u0133\u0135\5A!\2\u0134\u0133\3\2\2\2\u0134"+
		"\u0135\3\2\2\2\u0135\u0137\3\2\2\2\u0136\u0138\5I%\2\u0137\u0136\3\2\2"+
		"\2\u0137\u0138\3\2\2\2\u0138\u014a\3\2\2\2\u0139\u013a\7\60\2\2\u013a"+
		"\u013c\5\23\n\2\u013b\u013d\5A!\2\u013c\u013b\3\2\2\2\u013c\u013d\3\2"+
		"\2\2\u013d\u013f\3\2\2\2\u013e\u0140\5I%\2\u013f\u013e\3\2\2\2\u013f\u0140"+
		"\3\2\2\2\u0140\u014a\3\2\2\2\u0141\u0142\5\23\n\2\u0142\u0144\5A!\2\u0143"+
		"\u0145\5I%\2\u0144\u0143\3\2\2\2\u0144\u0145\3\2\2\2\u0145\u014a\3\2\2"+
		"\2\u0146\u0147\5\23\n\2\u0147\u0148\5I%\2\u0148\u014a\3\2\2\2\u0149\u012e"+
		"\3\2\2\2\u0149\u0139\3\2\2\2\u0149\u0141\3\2\2\2\u0149\u0146\3\2\2\2\u014a"+
		"@\3\2\2\2\u014b\u014c\5C\"\2\u014c\u014d\5E#\2\u014dB\3\2\2\2\u014e\u014f"+
		"\t\n\2\2\u014fD\3\2\2\2\u0150\u0152\5G$\2\u0151\u0150\3\2\2\2\u0151\u0152"+
		"\3\2\2\2\u0152\u0153\3\2\2\2\u0153\u0154\5\23\n\2\u0154F\3\2\2\2\u0155"+
		"\u0156\t\13\2\2\u0156H\3\2\2\2\u0157\u0158\t\f\2\2\u0158J\3\2\2\2\u0159"+
		"\u015a\5M\'\2\u015a\u015c\5O(\2\u015b\u015d\5I%\2\u015c\u015b\3\2\2\2"+
		"\u015c\u015d\3\2\2\2\u015dL\3\2\2\2\u015e\u0160\5\37\20\2\u015f\u0161"+
		"\7\60\2\2\u0160\u015f\3\2\2\2\u0160\u0161\3\2\2\2\u0161\u016a\3\2\2\2"+
		"\u0162\u0163\7\62\2\2\u0163\u0165\t\4\2\2\u0164\u0166\5!\21\2\u0165\u0164"+
		"\3\2\2\2\u0165\u0166\3\2\2\2\u0166\u0167\3\2\2\2\u0167\u0168\7\60\2\2"+
		"\u0168\u016a\5!\21\2\u0169\u015e\3\2\2\2\u0169\u0162\3\2\2\2\u016aN\3"+
		"\2\2\2\u016b\u016c\5Q)\2\u016c\u016d\5E#\2\u016dP\3\2\2\2\u016e\u016f"+
		"\t\r\2\2\u016fR\3\2\2\2\u0170\u0171\7v\2\2\u0171\u0172\7t\2\2\u0172\u0173"+
		"\7w\2\2\u0173\u017a\7g\2\2\u0174\u0175\7h\2\2\u0175\u0176\7c\2\2\u0176"+
		"\u0177\7n\2\2\u0177\u0178\7u\2\2\u0178\u017a\7g\2\2\u0179\u0170\3\2\2"+
		"\2\u0179\u0174\3\2\2\2\u017aT\3\2\2\2\u017b\u017c\7)\2\2\u017c\u017d\5"+
		"W,\2\u017d\u017e\7)\2\2\u017e\u0184\3\2\2\2\u017f\u0180\7)\2\2\u0180\u0181"+
		"\5_\60\2\u0181\u0182\7)\2\2\u0182\u0184\3\2\2\2\u0183\u017b\3\2\2\2\u0183"+
		"\u017f\3\2\2\2\u0184V\3\2\2\2\u0185\u0186\n\16\2\2\u0186X\3\2\2\2\u0187"+
		"\u0189\7$\2\2\u0188\u018a\5[.\2\u0189\u0188\3\2\2\2\u0189\u018a\3\2\2"+
		"\2\u018a\u018b\3\2\2\2\u018b\u0192\7$\2\2\u018c\u018e\7)\2\2\u018d\u018f"+
		"\5[.\2\u018e\u018d\3\2\2\2\u018e\u018f\3\2\2\2\u018f\u0190\3\2\2\2\u0190"+
		"\u0192\7)\2\2\u0191\u0187\3\2\2\2\u0191\u018c\3\2\2\2\u0192Z\3\2\2\2\u0193"+
		"\u0195\5]/\2\u0194\u0193\3\2\2\2\u0195\u0196\3\2\2\2\u0196\u0194\3\2\2"+
		"\2\u0196\u0197\3\2\2\2\u0197\\\3\2\2\2\u0198\u019b\n\17\2\2\u0199\u019b"+
		"\5_\60\2\u019a\u0198\3\2\2\2\u019a\u0199\3\2\2\2\u019b^\3\2\2\2\u019c"+
		"\u019d\7^\2\2\u019d\u01a1\t\20\2\2\u019e\u01a1\5a\61\2\u019f\u01a1\5e"+
		"\63\2\u01a0\u019c\3\2\2\2\u01a0\u019e\3\2\2\2\u01a0\u019f\3\2\2\2\u01a1"+
		"`\3\2\2\2\u01a2\u01a3\7^\2\2\u01a3\u01ae\5-\27\2\u01a4\u01a5\7^\2\2\u01a5"+
		"\u01a6\5-\27\2\u01a6\u01a7\5-\27\2\u01a7\u01ae\3\2\2\2\u01a8\u01a9\7^"+
		"\2\2\u01a9\u01aa\5c\62\2\u01aa\u01ab\5-\27\2\u01ab\u01ac\5-\27\2\u01ac"+
		"\u01ae\3\2\2\2\u01ad\u01a2\3\2\2\2\u01ad\u01a4\3\2\2\2\u01ad\u01a8\3\2"+
		"\2\2\u01aeb\3\2\2\2\u01af\u01b0\t\21\2\2\u01b0d\3\2\2\2\u01b1\u01b3\7"+
		"^\2\2\u01b2\u01b4\7w\2\2\u01b3\u01b2\3\2\2\2\u01b4\u01b5\3\2\2\2\u01b5"+
		"\u01b3\3\2\2\2\u01b5\u01b6\3\2\2\2\u01b6\u01b7\3\2\2\2\u01b7\u01b8\5#"+
		"\22\2\u01b8\u01b9\5#\22\2\u01b9\u01ba\5#\22\2\u01ba\u01bb\5#\22\2\u01bb"+
		"f\3\2\2\2\u01bc\u01bd\7p\2\2\u01bd\u01be\7w\2\2\u01be\u01bf\7n\2\2\u01bf"+
		"\u01ca\7n\2\2\u01c0\u01c1\7w\2\2\u01c1\u01c2\7p\2\2\u01c2\u01c3\7f\2\2"+
		"\u01c3\u01c4\7g\2\2\u01c4\u01c5\7h\2\2\u01c5\u01c6\7k\2\2\u01c6\u01c7"+
		"\7p\2\2\u01c7\u01c8\7g\2\2\u01c8\u01ca\7f\2\2\u01c9\u01bc\3\2\2\2\u01c9"+
		"\u01c0\3\2\2\2\u01cah\3\2\2\2\u01cb\u01cc\7g\2\2\u01cc\u01cd\7z\2\2\u01cd"+
		"\u01ce\7v\2\2\u01ce\u01cf\7g\2\2\u01cf\u01d0\7p\2\2\u01d0\u01d1\7f\2\2"+
		"\u01d1\u01d2\7u\2\2\u01d2j\3\2\2\2\u01d3\u01d4\b\66\2\2\u01d4\u01d9\5"+
		"\u00a1Q\2\u01d5\u01d8\5\u00a1Q\2\u01d6\u01d8\5\u00a3R\2\u01d7\u01d5\3"+
		"\2\2\2\u01d7\u01d6\3\2\2\2\u01d8\u01db\3\2\2\2\u01d9\u01d7\3\2\2\2\u01d9"+
		"\u01da\3\2\2\2\u01dal\3\2\2\2\u01db\u01d9\3\2\2\2\u01dc\u01de\7\f\2\2"+
		"\u01dd\u01df\5o8\2\u01de\u01dd\3\2\2\2\u01de\u01df\3\2\2\2\u01df\u01eb"+
		"\3\2\2\2\u01e0\u01e1\7\17\2\2\u01e1\u01e2\7\f\2\2\u01e2\u01e4\3\2\2\2"+
		"\u01e3\u01e5\5o8\2\u01e4\u01e3\3\2\2\2\u01e4\u01e5\3\2\2\2\u01e5\u01eb"+
		"\3\2\2\2\u01e6\u01e8\7\17\2\2\u01e7\u01e9\5o8\2\u01e8\u01e7\3\2\2\2\u01e8"+
		"\u01e9\3\2\2\2\u01e9\u01eb\3\2\2\2\u01ea\u01dc\3\2\2\2\u01ea\u01e0\3\2"+
		"\2\2\u01ea\u01e6\3\2\2\2\u01ebn\3\2\2\2\u01ec\u01ee\t\22\2\2\u01ed\u01ec"+
		"\3\2\2\2\u01ee\u01ef\3\2\2\2\u01ef\u01ed\3\2\2\2\u01ef\u01f0\3\2\2\2\u01f0"+
		"p\3\2\2\2\u01f1\u01f3\n\23\2\2\u01f2\u01f1\3\2\2\2\u01f3\u01f4\3\2\2\2"+
		"\u01f4\u01f2\3\2\2\2\u01f4\u01f5\3\2\2\2\u01f5r\3\2\2\2\u01f6\u01f7\7"+
		"B\2\2\u01f7t\3\2\2\2\u01f8\u01f9\7-\2\2\u01f9v\3\2\2\2\u01fa\u01fb\7/"+
		"\2\2\u01fbx\3\2\2\2\u01fc\u01fd\7,\2\2\u01fdz\3\2\2\2\u01fe\u01ff\7\61"+
		"\2\2\u01ff|\3\2\2\2\u0200\u0201\7<\2\2\u0201~\3\2\2\2\u0202\u0203\7\60"+
		"\2\2\u0203\u0080\3\2\2\2\u0204\u0205\7.\2\2\u0205\u0082\3\2\2\2\u0206"+
		"\u0207\7?\2\2\u0207\u0084\3\2\2\2\u0208\u0209\7A\2\2\u0209\u0086\3\2\2"+
		"\2\u020a\u020b\7(\2\2\u020b\u0088\3\2\2\2\u020c\u020d\7~\2\2\u020d\u008a"+
		"\3\2\2\2\u020e\u020f\5\u0083B\2\u020f\u0210\5\u009fP\2\u0210\u0215\3\2"+
		"\2\2\u0211\u0212\5w<\2\u0212\u0213\5\u009fP\2\u0213\u0215\3\2\2\2\u0214"+
		"\u020e\3\2\2\2\u0214\u0211\3\2\2\2\u0215\u008c\3\2\2\2\u0216\u0217\7#"+
		"\2\2\u0217\u008e\3\2\2\2\u0218\u0219\7}\2\2\u0219\u021a\7B\2\2\u021a\u0090"+
		"\3\2\2\2\u021b\u021c\7}\2\2\u021c\u0092\3\2\2\2\u021d\u021e\7\177\2\2"+
		"\u021e\u0094\3\2\2\2\u021f\u0220\7*\2\2\u0220\u0096\3\2\2\2\u0221\u0222"+
		"\7+\2\2\u0222\u0098\3\2\2\2\u0223\u0224\7]\2\2\u0224\u009a\3\2\2\2\u0225"+
		"\u0226\7_\2\2\u0226\u009c\3\2\2\2\u0227\u0228\7>\2\2\u0228\u009e\3\2\2"+
		"\2\u0229\u022a\7@\2\2\u022a\u00a0\3\2\2\2\u022b\u022c\t\24\2\2\u022c\u00a2"+
		"\3\2\2\2\u022d\u022e\t\25\2\2\u022e\u00a4\3\2\2\2?\2\u00a7\u00ad\u00b1"+
		"\u00b5\u00b9\u00bd\u00c4\u00c9\u00cb\u00cf\u00d2\u00d6\u00dd\u00e1\u00e6"+
		"\u00ee\u00f1\u00f8\u00fc\u0104\u0107\u010e\u0112\u011a\u011d\u0124\u0128"+
		"\u012c\u0131\u0134\u0137\u013c\u013f\u0144\u0149\u0151\u015c\u0160\u0165"+
		"\u0169\u0179\u0183\u0189\u018e\u0191\u0196\u019a\u01a0\u01ad\u01b5\u01c9"+
		"\u01d7\u01d9\u01de\u01e4\u01e8\u01ea\u01ef\u01f4\u0214\3\3\66\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}