var area = document.querySelector("textarea");
var counter = document.querySelector("#countername");
var circularcounter = document.querySelector("#circularcounter");
var numcountername = document.querySelector("#numcountername");
var image1=document.querySelector("#image1");  
var image2=document.querySelector("#image2");  
var image3=document.querySelector("#image3");  
var change=document.querySelector("#change");  
var count=0;

area.addEventListener("input",function(){
    counter.textContent = `Count:${area.value.length}`
})

circularcounter.addEventListener("click",function(){
    count++
    numcountername.innerHTML=`<div id="numcountername">Click to count :${count}</div>`

})
image1.addEventListener("click",function(){
    change.innerHTML=`<img src="Image 1.png" alt="">`
})
image2.addEventListener("click",function(){
    change.innerHTML=`<img src="Image 2.png" alt="">`
})
image3.addEventListener("click",function(){
    change.innerHTML=`<img src="Image 3.png" alt="">`
})