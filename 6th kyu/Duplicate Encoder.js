function duplicateEncode(word){
    return word.toLowerCase().split("").map((el,_,ar)=>ar.indexOf(el)===ar.lastIndexOf(el)? "(":")").join("")
}
