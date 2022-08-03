function addNote(height){
    let tree = "*";
 let underscore = "_";
 let trunk = "#";
 //_ Comienza en 0 y a medida que va subiendo aumenta en 1 osea el resultado seria height - 1
 totalHeight = height -1;
 let value = height - 1;

 for(i = 1;i <= height;i++){
   Score = underscore.repeat(value);
   console.log(Score + tree + Score);
   value--;
   tree+= "**";
 }
 Score = underscore.repeat(height - 1);
 console.log(Score + trunk + Score);
 console.log(Score + trunk + Score);

}

addNote(3);