// Generated from c:/Users/MI EQUIPO/ssl-antlr-calculator/Milenguaje.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link MilenguajeParser}.
 */
public interface MilenguajeListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link MilenguajeParser#prog}.
	 * @param ctx the parse tree
	 */
	void enterProg(MilenguajeParser.ProgContext ctx);
	/**
	 * Exit a parse tree produced by {@link MilenguajeParser#prog}.
	 * @param ctx the parse tree
	 */
	void exitProg(MilenguajeParser.ProgContext ctx);
	/**
	 * Enter a parse tree produced by {@link MilenguajeParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(MilenguajeParser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link MilenguajeParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(MilenguajeParser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link MilenguajeParser#decision}.
	 * @param ctx the parse tree
	 */
	void enterDecision(MilenguajeParser.DecisionContext ctx);
	/**
	 * Exit a parse tree produced by {@link MilenguajeParser#decision}.
	 * @param ctx the parse tree
	 */
	void exitDecision(MilenguajeParser.DecisionContext ctx);
	/**
	 * Enter a parse tree produced by {@link MilenguajeParser#cadena}.
	 * @param ctx the parse tree
	 */
	void enterCadena(MilenguajeParser.CadenaContext ctx);
	/**
	 * Exit a parse tree produced by {@link MilenguajeParser#cadena}.
	 * @param ctx the parse tree
	 */
	void exitCadena(MilenguajeParser.CadenaContext ctx);
	/**
	 * Enter a parse tree produced by {@link MilenguajeParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void enterSentencia(MilenguajeParser.SentenciaContext ctx);
	/**
	 * Exit a parse tree produced by {@link MilenguajeParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void exitSentencia(MilenguajeParser.SentenciaContext ctx);
	/**
	 * Enter a parse tree produced by {@link MilenguajeParser#salida}.
	 * @param ctx the parse tree
	 */
	void enterSalida(MilenguajeParser.SalidaContext ctx);
	/**
	 * Exit a parse tree produced by {@link MilenguajeParser#salida}.
	 * @param ctx the parse tree
	 */
	void exitSalida(MilenguajeParser.SalidaContext ctx);
	/**
	 * Enter a parse tree produced by {@link MilenguajeParser#caracter}.
	 * @param ctx the parse tree
	 */
	void enterCaracter(MilenguajeParser.CaracterContext ctx);
	/**
	 * Exit a parse tree produced by {@link MilenguajeParser#caracter}.
	 * @param ctx the parse tree
	 */
	void exitCaracter(MilenguajeParser.CaracterContext ctx);
	/**
	 * Enter a parse tree produced by {@link MilenguajeParser#terminar}.
	 * @param ctx the parse tree
	 */
	void enterTerminar(MilenguajeParser.TerminarContext ctx);
	/**
	 * Exit a parse tree produced by {@link MilenguajeParser#terminar}.
	 * @param ctx the parse tree
	 */
	void exitTerminar(MilenguajeParser.TerminarContext ctx);
	/**
	 * Enter a parse tree produced by {@link MilenguajeParser#condicion}.
	 * @param ctx the parse tree
	 */
	void enterCondicion(MilenguajeParser.CondicionContext ctx);
	/**
	 * Exit a parse tree produced by {@link MilenguajeParser#condicion}.
	 * @param ctx the parse tree
	 */
	void exitCondicion(MilenguajeParser.CondicionContext ctx);
}