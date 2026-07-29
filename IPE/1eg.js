function f(arr)
{
    let obj={};
    obj[arr[0]]=arr[[arr.length-1]];
    return obj;


}
let arr=f(["a", "b", "c", "d"]);
console.log(arr);