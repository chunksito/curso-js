//nos devuelven un resultado apartir de que se cumpla una condicion (o no )

let valor1 = true;
let valor2 = true;

let resultado1 = valor1 && valor2

let resultado2 = valor1 || valor2

let resultado3 = !valor1

document.write()


// and (&&)

num1 = 12;

num2 = 24;

afirmacion1 = num1 > num2

afirmacion2 = num1 != num2

document.write(afirmacion1 && afirmacion2)

// or (||)

num1 = 12;

num2 = 24;

afirmacion1 = num1 > num2

afirmacion2 = num1 != num2

document.write(afirmacion1 || afirmacion2)

// NOT (!)

num1 = 12;

num2 = 24;

afirmacion1 = num1 > num2

afirmacion2 = num1 == num2

document.write(!afirmacion1)

//mezclar operadores  

num1 = 12;

num2 = 24;

num3 = 92;

num4 = 43;

respuesta = (num1 > num2 || num2 < 3) && (num1 < num2 || num2 > 3)

document.write(!respuesta)