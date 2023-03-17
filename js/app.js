const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const card3 = document.querySelector("#card3");
let myBMW = [
  {
    type: "BMW iX1 xDrive 30 xLine",
    good1: "最高313匹馬力",
    good2: "5.6秒",
    good3: "490-1495公升",
    good4: "222萬元起",
    good5: "同步是電動馬達( 前後軸 )",
  },

  {
    type: "項目: BMW i7 xDrive60",
    good1: "優點一 :最高544匹馬",
    good2: "優點二 :4.7秒",
    good3: "優點三 :500公升",
    good4: "優點四 :655萬元起",
    good5: "優點五 :高達625公里續航里程",
  },
  {
    type: "項目: BMW i4 M50",
    good1: "優點一 :最高544匹馬",
    good2: "優點二 :3.9秒",
    good3: "優點三 :最快僅需10分鐘即可補充140公里純電續航里程",
    good4: "優點四 :315萬元起",
    good5: "優點五 :高達521公里續航里程",
  },
];
console.log(myBMW);

card1.addEventListener("click", () => {
    let BMW = document.createElement("div");
    BMW.classList.add("BMW_Type");
    let good1 = document.createElement("p");
    good1.classList.add("good1");
    let good2 = document.createElement("p");
    good2.classList.add("good1");
    let good3 = document.createElement("p");
    good3.classList.add("good1");
    let good4 = document.createElement("p");
    good4.classList.add("good1");
    let good5 = document.createElement("div");
    good5.classList.add("good1");


});
card2.addEventListener("click", () => {});
card3.addEventListener("click", () => {});
console.log(myBMW[0].type);