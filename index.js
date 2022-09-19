
const myFunc = ()=>{
    let a = document.getElementById("text1").value;
console.log(a)
    
    const newArr = [];
    for(let i = 0; i < a.length; i++){
        for(let j = i + 1; j <a.length + 1; j++){
            newArr.push(a.slice(i,j));
        }
    }
    document.getElementById("output").innerHTML = newArr;
    return newArr;
    
}