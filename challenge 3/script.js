const stringTrue1 = "bici coche (balón) bici coche peluche"; // ✅
const stringTrue2 = "(muñeca) consola bici"; // ✅

const stringFalse1 = "peluche (bici [coche) bici coche balón"; // -> ❌
const stringFalse2 = "(peluche {) bici"; // -> ❌
const stringFalse3 = "() bici"; // -> ❌


/*Convert strings on arrays*/
/*Iterate each element on the array*/

function verificarString(cadena) {
  const array = cadena.split(' ');
  let firstBracket = false;
  let secondBracket = false;
  let specialElement = false;
  let validGift = false;
  //itarate
  array.forEach(string => {
    //find

    if (string[0] == "(") {
      firstBracket = true;
      console.log("FirstBracket = " + firstBracket);
    }

    if (string[0] == "{" || string[0] == "[") {
      specialElement = true;
      console.log("SpecialElement = " + specialElement);
    }

    if (string[string.length - 1] == ")") {
      secondBracket = true;
      console.log("SecondBracket = " + secondBracket);
    }

    if (string == "()") {
      specialElement = true;
    }

  });

  if (specialElement == false && firstBracket == true && secondBracket == true) {
    validGift = true;
  }
  console.log(cadena)
  return validGift;
}

console.log(verificarString(stringFalse1));