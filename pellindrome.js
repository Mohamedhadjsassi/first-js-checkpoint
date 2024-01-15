let word = prompt("Please enter your name" );

console.log(word);
var i = 0;
var x=true;
//console.log(i);
while ( i < word.length ) {
    var j=word.length -1 -i ;
 
      if (word[i]=== word[j] ){
        i += 1;
        x=true ; 
      } 
      else {
          x=false ;
          break;
        }  
}

if (x ===true){
  console.log("this word is palindrome");
}
else{
console.log("this word is not palindrome");
}