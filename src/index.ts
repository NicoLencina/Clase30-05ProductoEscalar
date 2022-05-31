//declaro las variables
let dimensionArreglo: number = 0;
let dato1: number[] = new Array(dimensionArreglo);
let dato2: number[] = new Array(dimensionArreglo);
let escalar: number = 0;

//la funcion para guardar los arreglos ingresados
function guardaArray(dato: number[], dimensionArreglo: number) {
  for (let x = 0; x < dimensionArreglo; x++) {
    dato[x] = Number(
      prompt("Ingrese el numero que quiere poner en el lugar " + x + ": ")
    );
  }
}

//la funcion que calcula el producto escalar de los arreglos ingresados
function productoEscalar(
  dato1: number[],
  dato2: number[],
  dimensionArreglo: number
) {
  let numA: number = 0;
  for (let index = 0; index <= dimensionArreglo - 1; index++) {
    numA = dato1[index] * dato2[index];
    escalar = escalar + numA;
  }
  console.log(escalar);
}

//pido la dimension de los array
dimensionArreglo = Number(prompt("Ingrese la dimensión del arreglo:"));
//llamo a la funcion guardar array y le mando dato donde se guarda el primer arreglo y la dimension
guardaArray(dato1, dimensionArreglo);
console.log(dato1);
//repito con el segundo arreglo
guardaArray(dato2, dimensionArreglo);
console.log(dato2);
//llamo a la funcion producto escalar y le mando los datos y retorna el escalar.
productoEscalar(dato1, dato2, dimensionArreglo);
