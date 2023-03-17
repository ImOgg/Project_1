const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const card3 = document.querySelector("#card3");
const box = document.querySelector(".box");
const box_info = document.querySelector(".box_info");
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

card1.addEventListener("click", (e) => {
  e.preventDefault();
  box.classList.toggle("show");
  let close = document.createElement("button");
  close.classList.add("close_button");
  close.innerText = "關閉";
  box_info.appendChild(close);
  close.addEventListener("click", () => {
    box.classList.toggle("show");
    box_info.removeChild(close);
    box_info.removeChild(BMW);
  });

  let BMW = document.createElement("h2");
  BMW.classList.add("BMW_Type");
  BMW.innerText = myBMW[0].type;
  box_info.appendChild(BMW);
});
card2.addEventListener("click", () => {});
card3.addEventListener("click", () => {});
