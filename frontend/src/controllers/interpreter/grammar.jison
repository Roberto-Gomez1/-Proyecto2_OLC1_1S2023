
%lex

%options case-insensitive
%x string

%%


";"                 return 'PTCOMA';
"("                 return 'PARIZQ';
")"                 return 'PARDER';
"."                 return 'PUNTO';
":"                 return 'DOSPUNTOS';
","                 return 'COMA';
"["                 return 'CORIZR';
"]"                 return 'CORDER';
"{"                 return 'LLAVEIZQ';
"}"                 return "LLAVEDER";
"?"                 return 'KLEENE';
"="                 return 'IGUAL';

"print"             return 'RPRIN';   // funcion de imprimir
"true"              return 'TRUE';
"false"             return 'FALSE';
"for"               return 'RFOR';
"if"                return 'RIF';
"else"              return 'RELSE';


"+"                 return 'MAS';
"-"                 return 'MENOS';
"*"                 return 'POR';
"/"                 return 'DIVISION';
"^"                 return 'POTENCIA';
"%"                 return 'MODULO';
"<"                 return 'MENORQUE';
">"                 return 'MAYORQUE';



"int"               return 'RENTERO';
"string"               return 'RSTRING';
"char"               return 'RCHAR';
"boolean"               return 'RBOOLEAN';
"double"               return 'RDOUBLE';



[ \r\t]+            {}                      // espacio en blanco
\n                  {}                      // salto
(\/\/).*                             {}     // comentario linea
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/]  {}     // comentario multilinea

[a-zA-Z][a-zA-Z0-9_]*   return 'ID';
[0-9]+("."[0-9]+)\b     return 'DECIMAL';
[0-9]+\b                return 'ENTERO';
\'((\\\')|[^\n\'])*\'	{ yytext = yytext.substr(1,yyleng-2); return 'CARACTER'; }
["]                             {cadena="";this.begin("string");}
<string>[^"\\]+                 {cadena+=yytext;}
<string>"\\\""                  {cadena+="\"";}
<string>"\\n"                   {cadena+="\n";}
<string>"\\t"                   {cadena+="\t";}
<string>"\\\\"                  {cadena+="\\";}
<string>"\\\'"                  {cadena+="\'";}
<string>["]                     {yytext=cadena; this.popState(); return 'CADENA';}



<<EOF>>                 return 'EOF';

.                       { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);}
/lex

%{
  const {Type} = require('./abstract/Return');
  const {TipoAritmetica} = require('./utils/TipoAritmetica');
  const {TipoRelacional} = require('./utils/TipoRelacional');
  const {Primitivo} = require('./expression/Primitivo');
  const {Print} = require('./instruction/Print');
  const {Declarar} = require('./instruction/Declarar');
  const {Acceso} = require('./expression/Acceso');
  const {Aritmetica} = require('./expression/Aritmetica');
  const {Statement} = require('./instruction/Statement');
  const {Funcion} = require('./instruction/Funcion');
  const {Parametros} = require('./expression/Parametros');
  const {LlamadaFuncion} = require('./expression/LlamadaFuncion');
  const {Relacional} = require('./expression/Relacional');
  const {OperacionesUnarios} = require('./expression/OperacionesUnarios');
  const {For} = require('./instruction/For');
  const {If} = require('./instruction/If');


%}


%left 'MENORQUE' 'MAYORQUE'
%left 'MAS' 'MENOS'
%left 'POR' 'DIVISION' 'MODULO'
%right 'UMENOS '

%start INICIO

%%

INICIO
	: INSTRUCCIONES EOF {return $1;}
;

INSTRUCCIONES
	: INSTRUCCIONES INSTRUCCION     { $1.push($2); $$ = $1; }
	| INSTRUCCION                   { $$ = [$1]; }
;

INSTRUCCION
	: DEFPRINT          { $$ = $1; }
  | DECLARAR PTCOMA          { $$ = $1; }
  | LLAMADAFUNCION PTCOMA    { $$ = $1; } 
  | GUARDARFUNCION         { $$ = $1; }
  | FOR   { $$ = $1; }
  | CONTROLIF    { $$ = $1; }
	| error PTCOMA
  {   console.error('Este es un error sintáctico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column);}
;

DEFPRINT
    : RPRIN PARIZQ EXPRESION PARDER PTCOMA  { $$ = new Print(@1.first_line, @1.first_column,$3); }
;

DECLARAR
    : TIPO ID   { $$ = new Declarar($2,$1,null,@1.first_line, @1.first_column ); }
    | TIPO ID IGUAL EXPRESION   { $$ = new Declarar($2,$1,$4,@1.first_line, @1.first_column ); }
;


GUARDARFUNCION
  : TIPO ID PARIZQ PARDER STATEMENT  { $$ = new Funcion($1,$2,[],$5,@1.first_line, @1.first_column ); }
  | TIPO ID PARIZQ PARAMETROS PARDER STATEMENT  { $$ = new Funcion($1,$2,$4,$6,@1.first_line, @1.first_column ); }
;

STATEMENT
  : LLAVEIZQ INSTRUCCIONES LLAVEDER   { $$ = new Statement($2,@1.first_line, @1.first_column); }
;


PARAMETROS
  : PARAMETROS COMA PARAMETRO   { $1.push($3); $$ = $1; }
  | PARAMETRO                   { $$ = [$1]; }
;

PARAMETRO
  : TIPO ID  {$$ = new Parametros($1,$2,@1.first_line, @1.first_column);}
;


FOR
  : RFOR PARIZQ DECLARAR PTCOMA EXPRESION PTCOMA OPERACIONESUNARIOS PARDER STATEMENT  { $$ = new For($3,$5,$7,$9,@1.first_line, @1.first_column); }
;

OPERACIONESUNARIOS
  :ID MAS MAS  { $$ = new OperacionesUnarios($1,TipoAritmetica.INCREMENTO,@1.first_line, @1.first_column); }
;

CONTROLIF 
  : RIF PARIZQ EXPRESION PARDER STATEMENT CONTROLELSE { $$ = new If($3,$5,$6,@1.first_line, @1.first_column); }
;

CONTROLELSE
  : RELSE STATEMENT { $$ = $2; }
  | RELSE CONTROLIF { $$ = $2; }
  | { $$ = null; }
;

EXPRESION
  : PRIMITIVO       { $$ = $1; }
  | ACCEDERVAR      { $$ = $1; }
  | ARITMETICA      { $$ = $1; }
  | RELACIONALES  { $$ = $1; }

;

LLAMADAFUNCION
  : ID PARIZQ PARDER { $$ = new LlamadaFuncion($1,[],@1.first_line, @1.first_column); }
  | ID PARIZQ ARGUMENTOS PARDER { $$ = new LlamadaFuncion($1,$3,@1.first_line, @1.first_column); }
;

ARGUMENTOS
  : ARGUMENTOS COMA EXPRESION { $1.push($3); $$ = $1;}
  | EXPRESION { $$ = [$1];}
;


ARITMETICA
  : EXPRESION MAS EXPRESION     { $$ = new Aritmetica($1,$3,TipoAritmetica.SUMA,@1.first_line, @1.first_column); }
  | EXPRESION MENOS EXPRESION   { $$ = new Aritmetica($1,$3,TipoAritmetica.RESTA,@1.first_line, @1.first_column); }
  | MENOS EXPRESION %prec UMENOS { $$ = new Aritmetica($2,$2,TipoAritmetica.UMENOS,@1.first_line, @1.first_column); }  
;

RELACIONALES
  : EXPRESION MENORQUE EXPRESION     { $$ = new Relacional($1,$3,TipoRelacional.MENORQUE,@1.first_line, @1.first_column); }
  | EXPRESION MAYORQUE EXPRESION     { $$ = new Relacional($1,$3,TipoRelacional.MAYORQUE,@1.first_line, @1.first_column); }
;

ACCEDERVAR
  : ID              { $$ = new Acceso($1,@1.first_line, @1.first_column); }
;

PRIMITIVO
  : ENTERO          { $$ = new Primitivo(@1.first_line, @1.first_column,$1,Type.INT); }
  | DECIMAL         { $$ = new Primitivo(@1.first_line, @1.first_column,$1,Type.DOUBLE); }
  | CADENA          { $$ = new Primitivo(@1.first_line, @1.first_column,$1,Type.STRING);}
  | CARACTER        { $$ = new Primitivo(@1.first_line, @1.first_column,$1,Type.CHAR); }
  | TRUE            { $$ = new Primitivo(@1.first_line, @1.first_column,$1,Type.BOOLEAN); }
  | FALSE           { $$ = new Primitivo(@1.first_line, @1.first_column,$1,Type.BOOLEAN); }
;


TIPO
  : RENTERO         { $$ = Type.INT; }
  | RDOUBLE         { $$ = Type.DOUBLE; }
  | RSTRING         { $$ = Type.STRING; }
  | RCHAR           { $$ = Type.CHAR; }
  | RBOOLEAN        { $$ = Type.BOOLEAN; }
;