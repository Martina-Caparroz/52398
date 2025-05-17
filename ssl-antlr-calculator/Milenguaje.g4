grammar Milenguaje;

// Gramatica
prog: instruccion+ | terminar;

instruccion: decision;

decision: SI condicion ENTONCES LLAVE_IZQ sentencia LLAVE_DER (SINO LLAVE_IZQ sentencia LLAVE_DER)?;

cadena: COMILLAS caracter* COMILLAS;

sentencia: salida+ | terminar;

salida: IMPRIMIR PAREN_IZQ cadena PAREN_DER PUNTOYCOMA;

caracter: LETRA | DIGITO | SIMBOLO;

terminar: SALIR PUNTOYCOMA;

condicion: VERDADERO | FALSO;

// Lexemas con nombres simbólicos
SI           : 'si';
ENTONCES     : 'entonces';
SINO         : 'sino';
IMPRIMIR     : 'imprimir';
SALIR        : 'salir';
VERDADERO    : 'verdadero';
FALSO        : 'falso';
LLAVE_IZQ    : '{';
LLAVE_DER    : '}';
PAREN_IZQ    : '(';
PAREN_DER    : ')';
PUNTOYCOMA   : ';';
COMILLAS     : '"';

LETRA        : [a-zA-Z]+ ;
DIGITO       : [0-9];
SIMBOLO      : [.,!?/:];

WS           : [ \t\r\n]+ -> skip;