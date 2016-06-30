/*
 * Detecta si dos objetos rectangulares se estan superponiendo
 * @param   {object}  objA    El primer objeto que sea desea evaluar
 * @param   {object}  objB    El objeto que sea desea evaluar
 * @return  {boolean}         Verdado en caso de que se hayan superpuesto
 */
var collision = function(objA, objB) {
  var left = objA.x < (objB.x + objB.width);
  var rigth = (objA.x + objA.width) > objB.x;
  var top = objA.y < (objB.y + objB.height);
  var bottom = (objA.y + objA.height) > objB.y;
  return left && rigth && top && bottom;
};

/*
  La interseccion de dos rectangulos solo se da cuando se cumplen
  las siguientes condiciones:
      * El lado izquierdo de A es menor al lado derecho de B
      * El lado derecho de A es mayor al lado izquiedo de B
      * El lado superior de A es menor al lado inferior de B
      * El lado inferior de A es mayor al lado superior de B

                 B _ _ _ _ _ _ _ _ _ _ _ _ 
                  |                       |
                  | x: 18                 |
                  | y: 20                 |
                  | width: 12             |
                  | height: 10            |
 A _ _ _ _ _ _ _ _|_ _ _ _                |
  |               |       |               |
  | x: 10         |       |               |
  | y: 26         |       |               |
  | width: 12     |_ _ _ _|_ _ _ _ _ _ _ _|
  | height: 10            |
  |                       | objA.x < (objB.x + objB.width)      10 < (18+12)      true
  |                       | (objA.x + objA.width) > objB.x      (10+12) > 18      true
  |                       | objA.y < (objB.y + objB.height)     26 < (20+10)      true
  |                       | (objA.y + objA.height) > objB.y     (26+10) > 20      true
  |_ _ _ _ _ _ _ _ _ _ _ _|

*/
