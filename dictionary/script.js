let input = document.querySelector('input');
let textarea = document.querySelector('textarea');
let dictionary;


input.addEventListener('change', () => {
    let files = input.files;
 
    if(files.length == 0) return;
 
    const file = files[0];
 
    let reader = new FileReader();
 
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        dictionary = lines.join('\n');
        
        //---------------------CODE GOES HERE--------------------------------------------

        dictToConsole();
        let word = prompt("Enter a word");
        //Regex
        var regexp = new RegExp(word, "i");
        let indexOfWord = dictionary.search(regexp, word);
        
        let wordString = "";
        
        if(indexOfWord === -1){
            console.log("Word Not Found");
        } else {
            for(let i = indexOfWord; i < indexOfWord+200; i++){
                if(dictionary[i] === "\n"){
                    break;
                }
                else{
                    wordString += dictionary[i];
                }
            }
        }
        
        console.log(wordString);
        
        let wordInfo = {
            word: word.toUpperCase,
            pronounce: 
        };
        
        console.log(wordInfo);
        
    };
    reader.onerror = (e) => alert(e.target.error.name);
 
    reader.readAsText(file); 
});


function dictToConsole() {
    console.log(dictionary);
}
