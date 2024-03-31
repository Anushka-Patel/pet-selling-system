function myfunction()
{
    let navbar=document.getElementsByClassName(".navbar");
    let homeContent=document.getElementsByClassName(".home-content");
    let aboutContent=document.getElementsByClassName(".about-content");
    let shopContent=document.getElementsByClassName(".shop-content");
    let btn=document.getElementsByClassName(".btn");
    let box=document.getElementsByClassName(".box");
    let priceList=document.getElementsByClassName("#price-list");
    let item=document.getElementsByClassName("#item");
    let container=document.getElementsByClassName(".container1");
    let inputBox=document.getElementsByClassName("#input-box");
    let box4=document.getElementsByClassName("#box4");
    let btn3=document.getElementsByClassName(".btn3");
     
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn1 = document.getElementsByClassName("btn1");
    var btn2 = document.getElementsByClassName("btn2");

if(dots.style.display==="none")
{
    dots.style.display = "inline";
    more.style.display ="none";
    btn1.innerHTML = "Read More";
    btn2.innerHTML = "Read More";
   
}else{
    dots.style.display = "none";
    more.style.display ="inline";
    btn1.innerHTML = "Read less";
    btn2.innerHTML = "Read less";
}
}

let popup =document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}




    

