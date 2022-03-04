# Ejercicios sobre Arrays
1. Ordena un array que contenga una serie de palabras que vayas añadiendo desde un formulario. El formulario debe tene:
  * un campo de texto (para escribir la palabra)
  * un botón que irá añadiendo la palabra al array y borrará el campo de texto
  * otro botón para mostrar el array ordenado por orden alfabético (lo mostrará en una tabla, cada palabra en una fila)
  * otro botón para mostrar el array ordenado por orden inverso (lo mostrará en un select, con cada palabra como valor de una opción)
---
2. Ordena el siguiente array primero por title y lo muestras en una lista no ordenadada. Después ordénalo por price y lo muestras en una lista ordenada.
```
const productos = [
  {
    "title": "Teclado",
    "price": 150
  },
  {
    "title": "Ratón",
    "price": 49.99
  },
  {
    "title": "Laptop",
    "price": 1234.56
  }
]
```
---
3. Crea un array con 10 elementos que contengan números [aleatorios](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random) del 1 al 100. Crea otro que contenga las [raíces cuadradas](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt) de ese array, utilizando [map](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map). Ordena este último array utilizando [sort](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) y elimina los 3 primeros elementos utilizando [slice](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice). Muestra cada resultado por la consola.
