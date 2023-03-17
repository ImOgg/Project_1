const card1 =document.querySelector("#card1");
const card2 =document.querySelector("#card2");
const card3 =document.querySelector("#card3");
const box = document.querySelector("#box");

card1.addEventListener("click",()=>
{
    box.classList.toggle('done');
});
card2.addEventListener("click",()=>
{
    box.classList.toggle('done');
});
card3.addEventListener("click",()=>
{
    box.classList.toggle('done');
});