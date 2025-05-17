Caparroz Rey, Martina
Legajo: 52398

# Analizador de Milenguaje

Este proyecto implementa un analizador léxico, sintáctico e intérprete para el lenguaje  llamado **Milenguaje.g4**, utilizando ANTLR4 y Node.js. El programa es capaz de:

- Validar sintaxis y mostrar errores con línea y columna.
- Generar una tabla de lexemas y tokens.
- Mostrar el árbol sintáctico en formato texto.
- Interpretar el código como un programa real (traducción y ejecución en JavaScript).

## ACLARACIÓN:
Para evitar errores al ejecutar la gramática, se modificó la regla principal:
prog: instruccion+ | terminar;

## Requisitos previos

Antes de ejecutar el programa, se necesita necesita:
- Node.js instalado
- ANTLR4 instalado

## INSTRUCCIONES DE EJECUCIÓN
- Clonar este repositorio en su computadora

- Abrir la carpeta con VS Code.

- Asegurarse de que los siguientes archivos estén en el mismo directorio:
 index.js (programa principal)
 Milenguaje.g4 (gramática)
 CustomMilenguajeVisitor.js (intérprete)
 CustomMilenguajeListener.js 
 /generated/ (carpeta con los archivos generados por ANTLR)
 input.txt (archivo de entrada con código Milenguaje)

- Escribir un código en input.txt, ejemplo: 
si verdadero entonces {
  imprimir("Hola mundo");
} sino {
  imprimir("Esto no se verá");
}
salir;

- Ejecutar el analizador con Node.js

- Ejecutar la tabla de lexemas y tokens desde los comandos como: npm start

## ¿Qué muestra el analizador?

✅ Una tabla con los lexemas y tokens reconocidos.
Muestra todos los lexemas reconocidos junto con su token.

✅ Un mensaje de error si la sintaxis no es válida, con línea y columna.
Si existen errores, se informan con línea, columna y descripción.

✅ El árbol sintáctico
Se imprime, además, en consola en formato textual

✅ La ejecución del programa, como si fuera código JavaScript.
Imprime mensajes.
Ejecuta condiciones con si, entonces, sino.
Finaliza con salir;
