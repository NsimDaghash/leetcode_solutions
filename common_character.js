/*
let commonChars = function(words) {
    let arrayIndex=[];
    let commonLetters = words[0].split("");
    for (let i=0; i<words[0].length;i++){
        arrayIndex.push(0);
    }
    for (let i=0; i< words.length;i++) {
        let tmp=words[i].split("");
        console.log(tmp);
        for( j=0 ; j<tmp.length;j++){
            console.log(tmp[j]);
            if (commonLetters.includes(tmp[j])){
                arrayIndex[j]++;
                console.log(arrayIndex[j]);
                console.log(j);
            }
            }
        }
    tmp=[];
    for(let j=0;j<arrayIndex.length;j++){
        if ( arrayIndex[j]==words.length){
        tmp.push(commonLetters[j]);
        }
    }
    return(tmp);
}
*/
let commonChars = function(A) {
let first = A[0].split("").sort();
let sol = [];
if (A.length === 1) return first;
for (let ch of first) {
  let flag = true;
  for (let i = 1; i < A.length; i++) {
    let index = A[i].indexOf(ch);
    if (index === -1) {
      flag = false;
      break;
    } else {
      A[i] = A[i].substr(0, index) + A[i].substr(index + 1);
     // console.log(A[i]);
    }
  }
  if (flag) {
    sol.push(ch);
  }
}
return sol;
}
let words = ["bella","label","roller"]
/*Output: ["e","l","l"]*/
console.log(commonChars(words));