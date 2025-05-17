import MilenguajeVisitor from "./generated/MilenguajeVisitor.js";

export default class CustomMilenguajeVisitor extends MilenguajeVisitor {
    constructor() {
        super();
        this.salir = false;
    }

    visitProg(ctx) {
        for (let instr of ctx.instruccion()) {
            if (this.salir) break;
            this.visit(instr);
        }
        if (ctx.terminar()) {
            this.visit(ctx.terminar());
        }
    }

    visitInstruccion(ctx) {
        return this.visit(ctx.decision());
    }

    visitDecision(ctx) {
        const condicion = ctx.condicion().getText();
        const entonces = ctx.sentencia(0);
        const sino = ctx.sentencia(1);

        if (condicion === "verdadero") {
            this.visit(entonces);
        } else if (sino) {
            this.visit(sino);
        }
    }

    visitSentencia(ctx) {
        if (ctx.salida().length > 0) {
            for (let salida of ctx.salida()) {
                this.visit(salida);
            }
        } else if (ctx.terminar()) {
            this.visit(ctx.terminar());
        }
    }

    visitSalida(ctx) {
        const cadena = this.visit(ctx.cadena());
        console.log(cadena);
    }

    visitCadena(ctx) {
        // Construimos la cadena juntando los caracteres reconocidos
        return ctx.caracter().map(c => c.getText()).join("");
    }

    visitTerminar(ctx) {
        this.salir = true;
        console.log("Programa finalizado.");
    }

    visitCondicion(ctx) {
        return ctx.getText(); // Devuelve "verdadero" o "falso"
    }
}
