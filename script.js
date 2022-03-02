let words=()=>{
    let para="Kaldi was a goat herder who discovered coffee after witnessing the vigor that his goats received from eating the cherries. He later brought these cherries to the monastery and shared them with the monks who exclaimed that they were the Devil's work and hurled them into the fire"
    var regex = /[.,\s]/g;
    var result = para.replace(regex, ' ');
    var lower=result.toLowerCase()
    const para1=lower.split(" "); 
    return para1;
    // console.log(para1)
    // let arr=[para1]
    // console.log(arr)
    
}
var wordArray = words();
const wordCountFunction = (wordArray) =>{
    let wordSet = new Set(wordArray)
    console.log(wordSet.size)
    let words = [...wordSet]
    
    
    let wordCount = {}
    words.forEach(item => {
        if(wordCount[item] == null){
            wordCount[item] = 1;
        }
        else{
            wordCount[item] += 1;
        }
    });
    
    return wordCount;
}
console.log(wordCountFunction(wordArray))