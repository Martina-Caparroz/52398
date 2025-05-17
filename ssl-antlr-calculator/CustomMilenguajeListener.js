import MilenguajeListener from "./generated/MilenguajeListener.js";

export default class CustomMilenguajeListener extends MilenguajeListener {
  enterDecision(ctx) {
    console.log("Entrando en una instrucción condicional (si)... ");
  }

  enterSalida(ctx) {
    // Mostrar la cadena que se va a imprimir (sin comillas)
    const texto = ctx.cadena().caracter().map(c => c.getText()).join("");
    console.log(`Se ejecutará imprimir con texto: "${texto}"`);
  }

  enterTerminar(ctx) {
    console.log("Se detectó la instrucción salir; - el programa terminará.");
  }
}
