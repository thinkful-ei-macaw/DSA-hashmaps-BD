const HashMap = require("./practice");
function palindrome(str){
  const isPalindrome= new HashMap();
  if(str.length<3){
    return false;
  }
  for(let i = 0; i<str.length;i++){
    let currentLetter=str[i];
    let exists=isPalindrome.has(currentLetter);
    if(exists===true){
    
      let seen= isPalindrome.get(currentLetter);
      isPalindrome.set(currentLetter,seen+1);
    }else
    {
      isPalindrome.set(currentLetter,1);
      
    }
  }
  let unmatched = false
    for(let i =0; i<str.length;i++){
      let currentLetter=str[i];
      let val =isPalindrome.get(currentLetter)%2;
      console.log(val,currentLetter);
      if(val){
      //val is odd
        if(unmatched){
          return false
        }else{
          unmatched=true;
        }
      
      }

    }
    return true;  
  }
 

console.log(palindrome('acdc'));

function duplicate(x){
  const duplicate= new HashMap();
  let newStr='';
  

  for (let i=0;i<x.length;i++){
    let currentLetter = x[i];
    try{let seen = duplicate.get(currentLetter);}
    catch(e){
      duplicate.set(currentLetter,true);
      newStr+=currentLetter;
    }
    

  }
 

  return newStr;
}
// console.log(duplicate("google"));

function main() {
  const lotr = new HashMap();
  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;
  lotr.set("Hobbit", "Bilbo"),
  lotr.set("Hobbit", "Frodo"),
  lotr.set("Wizard", "Gandalf"),
  lotr.set("Human", "Aragorn"),
  lotr.set("Elf", "Legolas"),
  lotr.set("Maiar", "Sauron"),
  lotr.set("RingBearer", "Gollum"),
  lotr.set("LadyOfLight", "Galadriel"),
  lotr.set("HalfElven", "Arwen"),
  lotr.set("Ent", "Treebead"),
  console.log(lotr.get("Maiar"), lotr.get("Hobbit"));
}

const WhatDoesThisDo = function () {
  let str1 = "Hello World.";
  let str2 = "Hello World.";
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};

//WhatDoesThisDo();
// main();

