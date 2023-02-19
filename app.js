const myWord = 'Mamasita';
function changeValue(wordEntry){
 var lenghtOfWord = wordEntry.length;
    var newWord = '';

    for(var i = 0;i<lenghtOfWord; i ++ ){
        var randomNumber = Math.floor(Math.random()*wordEntry.length);
        var randomLetter = wordEntry[randomNumber];
        newWord += randomLetter;
        wordEntry = wordEntry.substring(0,randomNumber)+ wordEntry.substring(randomNumber+1);
       
    }
    console.log(newWord);
}

changeValue(myWord);

