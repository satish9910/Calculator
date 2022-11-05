let result = document.getElementById("input");

let calc=(number)=>{
    result.value += number;

}
let equal =()=>{
    try{
    result.value=eval(result.value);
    }
    catch(err){
        alert("Enter the right function");
    }

}
let clr =()=>{
    result.value="";
}