const letters = 'bici coche balón _playstation bici coche peluche';
console.log(letters);
let value = 0;

let arr = letters.split(' ');
console.log(arr);


function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}

function splitString(){

    for(letter of arr){
        if(containsSpecialChars(letter)){
            console.log(arr[value])
            arr.splice(value,1)
        }
        else{
            console.log("Nothing will be removed")
        }
        value++;
    }
    console.log(arr);
}

function createObject(array){
    const obj = {};
    for (const key of array) {
        obj[key] = arr;
   }
}

splitString();


console.log(containsSpecialChars('hello!')); 