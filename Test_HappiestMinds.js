const sentence = "Hello my name is Nikhil";


for(let i=0;i<sentence.length;i++){
    if(i===0){
        sentence[i] =  sentence[i].toUpperCase();
    }else if(sentence[i-1] === " " && sentence[i] !== " "){
        sentence[i] = sentence[i].toUpperCase();
    }
}

console.log(sentence)

