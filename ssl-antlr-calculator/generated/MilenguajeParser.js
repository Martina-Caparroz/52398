// Generated from c:/Users/MI EQUIPO/ssl-antlr-calculator/Milenguaje.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import MilenguajeListener from './MilenguajeListener.js';
import MilenguajeVisitor from './MilenguajeVisitor.js';

const serializedATN = [4,1,17,72,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,0,3,0,25,8,
0,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,40,8,2,1,3,1,3,
5,3,44,8,3,10,3,12,3,47,9,3,1,3,1,3,1,4,4,4,52,8,4,11,4,12,4,53,1,4,3,4,
57,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,0,0,9,0,2,
4,6,8,10,12,14,16,0,2,1,0,14,16,1,0,6,7,68,0,24,1,0,0,0,2,26,1,0,0,0,4,28,
1,0,0,0,6,41,1,0,0,0,8,56,1,0,0,0,10,58,1,0,0,0,12,64,1,0,0,0,14,66,1,0,
0,0,16,69,1,0,0,0,18,20,3,2,1,0,19,18,1,0,0,0,20,21,1,0,0,0,21,19,1,0,0,
0,21,22,1,0,0,0,22,25,1,0,0,0,23,25,3,14,7,0,24,19,1,0,0,0,24,23,1,0,0,0,
25,1,1,0,0,0,26,27,3,4,2,0,27,3,1,0,0,0,28,29,5,1,0,0,29,30,3,16,8,0,30,
31,5,2,0,0,31,32,5,8,0,0,32,33,3,8,4,0,33,39,5,9,0,0,34,35,5,3,0,0,35,36,
5,8,0,0,36,37,3,8,4,0,37,38,5,9,0,0,38,40,1,0,0,0,39,34,1,0,0,0,39,40,1,
0,0,0,40,5,1,0,0,0,41,45,5,13,0,0,42,44,3,12,6,0,43,42,1,0,0,0,44,47,1,0,
0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,48,1,0,0,0,47,45,1,0,0,0,48,49,5,13,0,
0,49,7,1,0,0,0,50,52,3,10,5,0,51,50,1,0,0,0,52,53,1,0,0,0,53,51,1,0,0,0,
53,54,1,0,0,0,54,57,1,0,0,0,55,57,3,14,7,0,56,51,1,0,0,0,56,55,1,0,0,0,57,
9,1,0,0,0,58,59,5,4,0,0,59,60,5,10,0,0,60,61,3,6,3,0,61,62,5,11,0,0,62,63,
5,12,0,0,63,11,1,0,0,0,64,65,7,0,0,0,65,13,1,0,0,0,66,67,5,5,0,0,67,68,5,
12,0,0,68,15,1,0,0,0,69,70,7,1,0,0,70,17,1,0,0,0,6,21,24,39,45,53,56];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MilenguajeParser extends antlr4.Parser {

    static grammarFileName = "Milenguaje.g4";
    static literalNames = [ null, "'si'", "'entonces'", "'sino'", "'imprimir'", 
                            "'salir'", "'verdadero'", "'falso'", "'{'", 
                            "'}'", "'('", "')'", "';'", "'\"'" ];
    static symbolicNames = [ null, "SI", "ENTONCES", "SINO", "IMPRIMIR", 
                             "SALIR", "VERDADERO", "FALSO", "LLAVE_IZQ", 
                             "LLAVE_DER", "PAREN_IZQ", "PAREN_DER", "PUNTOYCOMA", 
                             "COMILLAS", "LETRA", "DIGITO", "SIMBOLO", "WS" ];
    static ruleNames = [ "prog", "instruccion", "decision", "cadena", "sentencia", 
                         "salida", "caracter", "terminar", "condicion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MilenguajeParser.ruleNames;
        this.literalNames = MilenguajeParser.literalNames;
        this.symbolicNames = MilenguajeParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MilenguajeParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.state = 24;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 19; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 18;
	                this.instruccion();
	                this.state = 21; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===1);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 23;
	            this.terminar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MilenguajeParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.decision();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	decision() {
	    let localctx = new DecisionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MilenguajeParser.RULE_decision);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(MilenguajeParser.SI);
	        this.state = 29;
	        this.condicion();
	        this.state = 30;
	        this.match(MilenguajeParser.ENTONCES);
	        this.state = 31;
	        this.match(MilenguajeParser.LLAVE_IZQ);
	        this.state = 32;
	        this.sentencia();
	        this.state = 33;
	        this.match(MilenguajeParser.LLAVE_DER);
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 34;
	            this.match(MilenguajeParser.SINO);
	            this.state = 35;
	            this.match(MilenguajeParser.LLAVE_IZQ);
	            this.state = 36;
	            this.sentencia();
	            this.state = 37;
	            this.match(MilenguajeParser.LLAVE_DER);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MilenguajeParser.RULE_cadena);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.match(MilenguajeParser.COMILLAS);
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 114688) !== 0)) {
	            this.state = 42;
	            this.caracter();
	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 48;
	        this.match(MilenguajeParser.COMILLAS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MilenguajeParser.RULE_sentencia);
	    var _la = 0;
	    try {
	        this.state = 56;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 51; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 50;
	                this.salida();
	                this.state = 53; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===4);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 55;
	            this.terminar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MilenguajeParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(MilenguajeParser.IMPRIMIR);
	        this.state = 59;
	        this.match(MilenguajeParser.PAREN_IZQ);
	        this.state = 60;
	        this.cadena();
	        this.state = 61;
	        this.match(MilenguajeParser.PAREN_DER);
	        this.state = 62;
	        this.match(MilenguajeParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MilenguajeParser.RULE_caracter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 114688) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MilenguajeParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(MilenguajeParser.SALIR);
	        this.state = 67;
	        this.match(MilenguajeParser.PUNTOYCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MilenguajeParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        _la = this._input.LA(1);
	        if(!(_la===6 || _la===7)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MilenguajeParser.EOF = antlr4.Token.EOF;
MilenguajeParser.SI = 1;
MilenguajeParser.ENTONCES = 2;
MilenguajeParser.SINO = 3;
MilenguajeParser.IMPRIMIR = 4;
MilenguajeParser.SALIR = 5;
MilenguajeParser.VERDADERO = 6;
MilenguajeParser.FALSO = 7;
MilenguajeParser.LLAVE_IZQ = 8;
MilenguajeParser.LLAVE_DER = 9;
MilenguajeParser.PAREN_IZQ = 10;
MilenguajeParser.PAREN_DER = 11;
MilenguajeParser.PUNTOYCOMA = 12;
MilenguajeParser.COMILLAS = 13;
MilenguajeParser.LETRA = 14;
MilenguajeParser.DIGITO = 15;
MilenguajeParser.SIMBOLO = 16;
MilenguajeParser.WS = 17;

MilenguajeParser.RULE_prog = 0;
MilenguajeParser.RULE_instruccion = 1;
MilenguajeParser.RULE_decision = 2;
MilenguajeParser.RULE_cadena = 3;
MilenguajeParser.RULE_sentencia = 4;
MilenguajeParser.RULE_salida = 5;
MilenguajeParser.RULE_caracter = 6;
MilenguajeParser.RULE_terminar = 7;
MilenguajeParser.RULE_condicion = 8;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MilenguajeParser.RULE_prog;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MilenguajeListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MilenguajeListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MilenguajeVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MilenguajeParser.RULE_instruccion;
    }

	decision() {
	    return this.getTypedRuleContext(DecisionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MilenguajeListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MilenguajeListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MilenguajeVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DecisionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MilenguajeParser.RULE_decision;
    }

	SI() {
	    return this.getToken(MilenguajeParser.SI, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	ENTONCES() {
	    return this.getToken(MilenguajeParser.ENTONCES, 0);
	};

	LLAVE_IZQ = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MilenguajeParser.LLAVE_IZQ);
	    } else {
	        return this.getToken(MilenguajeParser.LLAVE_IZQ, i);
	    }
	};


	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	LLAVE_DER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MilenguajeParser.LLAVE_DER);
	    } else {
	        return this.getToken(MilenguajeParser.LLAVE_DER, i);
	    }
	};


	SINO() {
	    return this.getToken(MilenguajeParser.SINO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MilenguajeListener ) {
	        listener.enterDecision(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MilenguajeListener ) {
	        listener.exitDecision(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MilenguajeVisitor ) {
	        return visitor.visitDecision(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MilenguajeParser.RULE_cadena;
    }

	COMILLAS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MilenguajeParser.COMILLAS);
	    } else {
	        return this.getToken(MilenguajeParser.COMILLAS, i);
	    }
	};


	caracter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaracterContext);
	    } else {
	        return this.getTypedRuleContext(CaracterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof MilenguajeListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MilenguajeListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MilenguajeVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MilenguajeParser.RULE_sentencia;
    }

	salida = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SalidaContext);
	    } else {
	        return this.getTypedRuleContext(SalidaContext,i);
	    }
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MilenguajeListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MilenguajeListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MilenguajeVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MilenguajeParser.RULE_salida;
    }

	IMPRIMIR() {
	    return this.getToken(MilenguajeParser.IMPRIMIR, 0);
	};

	PAREN_IZQ() {
	    return this.getToken(MilenguajeParser.PAREN_IZQ, 0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	PAREN_DER() {
	    return this.getToken(MilenguajeParser.PAREN_DER, 0);
	};

	PUNTOYCOMA() {
	    return this.getToken(MilenguajeParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MilenguajeListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MilenguajeListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MilenguajeVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MilenguajeParser.RULE_caracter;
    }

	LETRA() {
	    return this.getToken(MilenguajeParser.LETRA, 0);
	};

	DIGITO() {
	    return this.getToken(MilenguajeParser.DIGITO, 0);
	};

	SIMBOLO() {
	    return this.getToken(MilenguajeParser.SIMBOLO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MilenguajeListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MilenguajeListener ) {
	        listener.exitCaracter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MilenguajeVisitor ) {
	        return visitor.visitCaracter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MilenguajeParser.RULE_terminar;
    }

	SALIR() {
	    return this.getToken(MilenguajeParser.SALIR, 0);
	};

	PUNTOYCOMA() {
	    return this.getToken(MilenguajeParser.PUNTOYCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MilenguajeListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MilenguajeListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MilenguajeVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MilenguajeParser.RULE_condicion;
    }

	VERDADERO() {
	    return this.getToken(MilenguajeParser.VERDADERO, 0);
	};

	FALSO() {
	    return this.getToken(MilenguajeParser.FALSO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MilenguajeListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MilenguajeListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MilenguajeVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MilenguajeParser.ProgContext = ProgContext; 
MilenguajeParser.InstruccionContext = InstruccionContext; 
MilenguajeParser.DecisionContext = DecisionContext; 
MilenguajeParser.CadenaContext = CadenaContext; 
MilenguajeParser.SentenciaContext = SentenciaContext; 
MilenguajeParser.SalidaContext = SalidaContext; 
MilenguajeParser.CaracterContext = CaracterContext; 
MilenguajeParser.TerminarContext = TerminarContext; 
MilenguajeParser.CondicionContext = CondicionContext; 
