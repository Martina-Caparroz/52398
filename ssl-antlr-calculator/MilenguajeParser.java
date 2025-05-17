// Generated from c:/Users/MI EQUIPO/ssl-antlr-calculator/Milenguaje.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class MilenguajeParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, LETRA=14, DIGITO=15, SIMBOLO=16, 
		WS=17;
	public static final int
		RULE_prog = 0, RULE_instruccion = 1, RULE_decision = 2, RULE_cadena = 3, 
		RULE_sentencia = 4, RULE_salida = 5, RULE_caracter = 6, RULE_terminar = 7, 
		RULE_condicion = 8;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "instruccion", "decision", "cadena", "sentencia", "salida", "caracter", 
			"terminar", "condicion"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'si'", "'entonces'", "'{'", "'}'", "'sino'", "'\"'", "'imprimir'", 
			"'('", "')'", "';'", "'salir'", "'verdadero'", "'falso'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, "LETRA", "DIGITO", "SIMBOLO", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
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
	public String getGrammarFileName() { return "Milenguaje.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public MilenguajeParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgContext extends ParserRuleContext {
		public List<InstruccionContext> instruccion() {
			return getRuleContexts(InstruccionContext.class);
		}
		public InstruccionContext instruccion(int i) {
			return getRuleContext(InstruccionContext.class,i);
		}
		public TerminarContext terminar() {
			return getRuleContext(TerminarContext.class,0);
		}
		public ProgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prog; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MilenguajeListener ) ((MilenguajeListener)listener).enterProg(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MilenguajeListener ) ((MilenguajeListener)listener).exitProg(this);
		}
	}

	public final ProgContext prog() throws RecognitionException {
		ProgContext _localctx = new ProgContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_prog);
		int _la;
		try {
			setState(24);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
				enterOuterAlt(_localctx, 1);
				{
				setState(19); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(18);
					instruccion();
					}
					}
					setState(21); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==T__0 );
				}
				break;
			case T__10:
				enterOuterAlt(_localctx, 2);
				{
				setState(23);
				terminar();
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

	@SuppressWarnings("CheckReturnValue")
	public static class InstruccionContext extends ParserRuleContext {
		public DecisionContext decision() {
			return getRuleContext(DecisionContext.class,0);
		}
		public InstruccionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instruccion; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MilenguajeListener ) ((MilenguajeListener)listener).enterInstruccion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MilenguajeListener ) ((MilenguajeListener)listener).exitInstruccion(this);
		}
	}

	public final InstruccionContext instruccion() throws RecognitionException {
		InstruccionContext _localctx = new InstruccionContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_instruccion);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(26);
			decision();
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

	@SuppressWarnings("CheckReturnValue")
	public static class DecisionContext extends ParserRuleContext {
		public CondicionContext condicion() {
			return getRuleContext(CondicionContext.class,0);
		}
		public List<SentenciaContext> sentencia() {
			return getRuleContexts(SentenciaContext.class);
		}
		public SentenciaContext sentencia(int i) {
			return getRuleContext(SentenciaContext.class,i);
		}
		public DecisionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_decision; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MilenguajeListener ) ((MilenguajeListener)listener).enterDecision(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MilenguajeListener ) ((MilenguajeListener)listener).exitDecision(this);
		}
	}

	public final DecisionContext decision() throws RecognitionException {
		DecisionContext _localctx = new DecisionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_decision);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(28);
			match(T__0);
			setState(29);
			condicion();
			setState(30);
			match(T__1);
			setState(31);
			match(T__2);
			setState(32);
			sentencia();
			setState(33);
			match(T__3);
			setState(39);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__4) {
				{
				setState(34);
				match(T__4);
				setState(35);
				match(T__2);
				setState(36);
				sentencia();
				setState(37);
				match(T__3);
				}
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

	@SuppressWarnings("CheckReturnValue")
	public static class CadenaContext extends ParserRuleContext {
		public List<CaracterContext> caracter() {
			return getRuleContexts(CaracterContext.class);
		}
		public CaracterContext caracter(int i) {
			return getRuleContext(CaracterContext.class,i);
		}
		public CadenaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cadena; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MilenguajeListener ) ((MilenguajeListener)listener).enterCadena(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MilenguajeListener ) ((MilenguajeListener)listener).exitCadena(this);
		}
	}

	public final CadenaContext cadena() throws RecognitionException {
		CadenaContext _localctx = new CadenaContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_cadena);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(41);
			match(T__5);
			setState(45);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 114688L) != 0)) {
				{
				{
				setState(42);
				caracter();
				}
				}
				setState(47);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(48);
			match(T__5);
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

	@SuppressWarnings("CheckReturnValue")
	public static class SentenciaContext extends ParserRuleContext {
		public List<SalidaContext> salida() {
			return getRuleContexts(SalidaContext.class);
		}
		public SalidaContext salida(int i) {
			return getRuleContext(SalidaContext.class,i);
		}
		public TerminarContext terminar() {
			return getRuleContext(TerminarContext.class,0);
		}
		public SentenciaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sentencia; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MilenguajeListener ) ((MilenguajeListener)listener).enterSentencia(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MilenguajeListener ) ((MilenguajeListener)listener).exitSentencia(this);
		}
	}

	public final SentenciaContext sentencia() throws RecognitionException {
		SentenciaContext _localctx = new SentenciaContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_sentencia);
		int _la;
		try {
			setState(56);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__6:
				enterOuterAlt(_localctx, 1);
				{
				setState(51); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(50);
					salida();
					}
					}
					setState(53); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==T__6 );
				}
				break;
			case T__10:
				enterOuterAlt(_localctx, 2);
				{
				setState(55);
				terminar();
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

	@SuppressWarnings("CheckReturnValue")
	public static class SalidaContext extends ParserRuleContext {
		public CadenaContext cadena() {
			return getRuleContext(CadenaContext.class,0);
		}
		public SalidaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_salida; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MilenguajeListener ) ((MilenguajeListener)listener).enterSalida(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MilenguajeListener ) ((MilenguajeListener)listener).exitSalida(this);
		}
	}

	public final SalidaContext salida() throws RecognitionException {
		SalidaContext _localctx = new SalidaContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_salida);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(58);
			match(T__6);
			setState(59);
			match(T__7);
			setState(60);
			cadena();
			setState(61);
			match(T__8);
			setState(62);
			match(T__9);
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

	@SuppressWarnings("CheckReturnValue")
	public static class CaracterContext extends ParserRuleContext {
		public TerminalNode LETRA() { return getToken(MilenguajeParser.LETRA, 0); }
		public TerminalNode DIGITO() { return getToken(MilenguajeParser.DIGITO, 0); }
		public TerminalNode SIMBOLO() { return getToken(MilenguajeParser.SIMBOLO, 0); }
		public CaracterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_caracter; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MilenguajeListener ) ((MilenguajeListener)listener).enterCaracter(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MilenguajeListener ) ((MilenguajeListener)listener).exitCaracter(this);
		}
	}

	public final CaracterContext caracter() throws RecognitionException {
		CaracterContext _localctx = new CaracterContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_caracter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(64);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 114688L) != 0)) ) {
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

	@SuppressWarnings("CheckReturnValue")
	public static class TerminarContext extends ParserRuleContext {
		public TerminarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_terminar; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MilenguajeListener ) ((MilenguajeListener)listener).enterTerminar(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MilenguajeListener ) ((MilenguajeListener)listener).exitTerminar(this);
		}
	}

	public final TerminarContext terminar() throws RecognitionException {
		TerminarContext _localctx = new TerminarContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_terminar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(66);
			match(T__10);
			setState(67);
			match(T__9);
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

	@SuppressWarnings("CheckReturnValue")
	public static class CondicionContext extends ParserRuleContext {
		public CondicionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condicion; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof MilenguajeListener ) ((MilenguajeListener)listener).enterCondicion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof MilenguajeListener ) ((MilenguajeListener)listener).exitCondicion(this);
		}
	}

	public final CondicionContext condicion() throws RecognitionException {
		CondicionContext _localctx = new CondicionContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_condicion);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(69);
			_la = _input.LA(1);
			if ( !(_la==T__11 || _la==T__12) ) {
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

	public static final String _serializedATN =
		"\u0004\u0001\u0011H\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0001\u0000\u0004\u0000\u0014\b\u0000\u000b\u0000\f\u0000\u0015"+
		"\u0001\u0000\u0003\u0000\u0019\b\u0000\u0001\u0001\u0001\u0001\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002(\b\u0002"+
		"\u0001\u0003\u0001\u0003\u0005\u0003,\b\u0003\n\u0003\f\u0003/\t\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0004\u0004\u00044\b\u0004\u000b\u0004"+
		"\f\u00045\u0001\u0004\u0003\u00049\b\u0004\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0000\u0000\t\u0000"+
		"\u0002\u0004\u0006\b\n\f\u000e\u0010\u0000\u0002\u0001\u0000\u000e\u0010"+
		"\u0001\u0000\f\rD\u0000\u0018\u0001\u0000\u0000\u0000\u0002\u001a\u0001"+
		"\u0000\u0000\u0000\u0004\u001c\u0001\u0000\u0000\u0000\u0006)\u0001\u0000"+
		"\u0000\u0000\b8\u0001\u0000\u0000\u0000\n:\u0001\u0000\u0000\u0000\f@"+
		"\u0001\u0000\u0000\u0000\u000eB\u0001\u0000\u0000\u0000\u0010E\u0001\u0000"+
		"\u0000\u0000\u0012\u0014\u0003\u0002\u0001\u0000\u0013\u0012\u0001\u0000"+
		"\u0000\u0000\u0014\u0015\u0001\u0000\u0000\u0000\u0015\u0013\u0001\u0000"+
		"\u0000\u0000\u0015\u0016\u0001\u0000\u0000\u0000\u0016\u0019\u0001\u0000"+
		"\u0000\u0000\u0017\u0019\u0003\u000e\u0007\u0000\u0018\u0013\u0001\u0000"+
		"\u0000\u0000\u0018\u0017\u0001\u0000\u0000\u0000\u0019\u0001\u0001\u0000"+
		"\u0000\u0000\u001a\u001b\u0003\u0004\u0002\u0000\u001b\u0003\u0001\u0000"+
		"\u0000\u0000\u001c\u001d\u0005\u0001\u0000\u0000\u001d\u001e\u0003\u0010"+
		"\b\u0000\u001e\u001f\u0005\u0002\u0000\u0000\u001f \u0005\u0003\u0000"+
		"\u0000 !\u0003\b\u0004\u0000!\'\u0005\u0004\u0000\u0000\"#\u0005\u0005"+
		"\u0000\u0000#$\u0005\u0003\u0000\u0000$%\u0003\b\u0004\u0000%&\u0005\u0004"+
		"\u0000\u0000&(\u0001\u0000\u0000\u0000\'\"\u0001\u0000\u0000\u0000\'("+
		"\u0001\u0000\u0000\u0000(\u0005\u0001\u0000\u0000\u0000)-\u0005\u0006"+
		"\u0000\u0000*,\u0003\f\u0006\u0000+*\u0001\u0000\u0000\u0000,/\u0001\u0000"+
		"\u0000\u0000-+\u0001\u0000\u0000\u0000-.\u0001\u0000\u0000\u0000.0\u0001"+
		"\u0000\u0000\u0000/-\u0001\u0000\u0000\u000001\u0005\u0006\u0000\u0000"+
		"1\u0007\u0001\u0000\u0000\u000024\u0003\n\u0005\u000032\u0001\u0000\u0000"+
		"\u000045\u0001\u0000\u0000\u000053\u0001\u0000\u0000\u000056\u0001\u0000"+
		"\u0000\u000069\u0001\u0000\u0000\u000079\u0003\u000e\u0007\u000083\u0001"+
		"\u0000\u0000\u000087\u0001\u0000\u0000\u00009\t\u0001\u0000\u0000\u0000"+
		":;\u0005\u0007\u0000\u0000;<\u0005\b\u0000\u0000<=\u0003\u0006\u0003\u0000"+
		"=>\u0005\t\u0000\u0000>?\u0005\n\u0000\u0000?\u000b\u0001\u0000\u0000"+
		"\u0000@A\u0007\u0000\u0000\u0000A\r\u0001\u0000\u0000\u0000BC\u0005\u000b"+
		"\u0000\u0000CD\u0005\n\u0000\u0000D\u000f\u0001\u0000\u0000\u0000EF\u0007"+
		"\u0001\u0000\u0000F\u0011\u0001\u0000\u0000\u0000\u0006\u0015\u0018\'"+
		"-58";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}