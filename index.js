//Tek seferlik renk üretme
let theColor = colorGenerator();

//div
document.getElementById("colorful").style.backgroundColor ="#"+theColor;    
//div > h1
document.getElementById("heading").style.color = "#"+contrastGenerator(theColor);

//div > button
document.getElementById("cButton").style.color="#"+theColor;
//div > button >span
document.getElementById("click").style.backgroundColor="#"+contrastGenerator(theColor);

//div > p  (text color)
let upperColor = theColor.toUpperCase();
document.getElementById("script").innerText="#"+upperColor;
// Add contrast to text
document.getElementById("script").style.color="#"+contrastGenerator(theColor);


//Button click listener
document.getElementById("click").addEventListener("click",()=>{
    location.reload();
}
);


//Random Generator
function colorGenerator() {
    
    return Math.floor(Math.random() * 16777215).toString(16);
}
//Zıt renk generator
function contrastGenerator(hex){
    
    return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
}




