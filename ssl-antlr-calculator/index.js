import antlr4, { CharStreams, CommonTokenStream, RecognitionException, ErrorListener } from 'antlr4';
import MilenguajeLexer from './generated/MilenguajeLexer.js';
import MilenguajeParser from './generated/MilenguajeParser.js';
import CustomMilenguajeVisitor from './CustomMilenguajeVisitor.js';
import readline from 'readline';
import fs from 'fs';

class BailErrorListener extends ErrorListener {
  constructor() {
    super();
    this.errors = [];
  }
  
  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    this.errors.push({ line, column, msg });
  }
}

async function main() {
  let input;

  // Intentar leer input.txt, si no, pedir entrada por consola
  try {
    input = fs.readFileSync('input.txt', 'utf8');
  } catch {
    input = await askUser("Ingrese código para Milenguaje:\n");
  }

  // Crear flujo de caracteres y lexer
  const chars = CharStreams.fromString(input);
  const lexer = new MilenguajeLexer(chars);

  // Obtener tokens y mostrar tabla lexema-token
  const tokens = lexer.getAllTokens();

  if (tokens.length === 0) {
    console.error("No se generaron tokens, revise la entrada.");
    return;
  }

  console.log("\nTabla de Tokens y Lexemas:");
  console.log("-------------------------------------");
  console.log("| Lexema           | Token           |");
  console.log("-------------------------------------");

  for (const token of tokens) {
    const tokenType = MilenguajeLexer.symbolicNames[token.type] || `UNKNOWN(${token.type})`;
    console.log(`| ${token.text.padEnd(16)} | ${tokenType.padEnd(15)} |`);
  }
  console.log("-------------------------------------");

  // Para poder parsear, volver a crear lexer y token stream (porque getAllTokens consume)
  const chars2 = CharStreams.fromString(input);
  const lexer2 = new MilenguajeLexer(chars2);
  const tokensStream = new CommonTokenStream(lexer2);
  const parser = new MilenguajeParser(tokensStream);

  // Manejar errores
  const errorListener = new BailErrorListener();
  parser.removeErrorListeners(); // Quitamos el default
  parser.addErrorListener(errorListener);

  // Parsear usando regla prog
  const tree = parser.prog();

  // Verificar errores sintácticos
  if (errorListener.errors.length > 0) {
    console.error("\nErrores de sintaxis detectados:");
    for (const err of errorListener.errors) {
      console.error(`  Línea ${err.line}, Columna ${err.column}: ${err.msg}`);
    }
    return;
  }

  console.log("\nEntrada válida. Árbol sintáctico (texto):");
  console.log(tree.toStringTree(parser.ruleNames));

  // Interpretar con visitor personalizado
  const visitor = new CustomMilenguajeVisitor();
  visitor.visit(tree);
}

function askUser(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(resolve => rl.question(query, ans => {
    rl.close();
    resolve(ans);
  }));
}

main();
