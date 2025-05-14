//forloop................


let array = [1,2,3,4,5]

for(let i= 0; i < array.length; i++){
    const element = array[i];
    console.log(element  , i)
    
}
for(let i= array.length - 1; i >= 0; i--){
    const element = array[i];
    console.log(element, "/" , i)
    
}