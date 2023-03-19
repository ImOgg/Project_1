// setInterval(() => {
//   let topBackground = document.querySelector("section.background-img");
//   if (
//     topBackground.style.backgroundImage == 'url("../images/bmw.jpg")'
//   ) {
//     topBackground.style.backgroundImage = 'url("../images/bmw2.jpg")';
//   } else if (
//     topBackground.style.backgroundImage == 'url("../images/bmw2.jpg")'
//   ) {
//     topBackground.style.backgroundImage = 'url("../images/bmw3.jpg")';
//   } else {
//     topBackground.style.backgroundImage = 'url("../images/bmw.jpg")';
//   }
// }, 3000);


// const card1 = document.querySelector("#card1");
// const card2 = document.querySelector("#card2");
// const card3 = document.querySelector("#card3");
// const box = document.querySelector(".box");
// const box_info = document.querySelector(".box_info");
// let myBMW = [
//   {
//     type: "BMW iX1 xDrive 30 xLine",
//     good1: "優點一 :最高313匹馬力",
//     good2: "優點二 :5.6秒",
//     good3: "優點三 :490-1495公升",
//     good4: "優點四 :222萬元起",
//     good5: "優點五 :同步是電動馬達( 前後軸 )",
//   },

//   {
//     type: "BMW i7 xDrive60",
//     good1: "優點一 :最高544匹馬",
//     good2: "優點二 :4.7秒",
//     good3: "優點三 :500公升",
//     good4: "優點四 :655萬元起",
//     good5: "優點五 :高達625公里續航里程",
//   },
//   {
//     type: "BMW i4 M50",
//     good1: "優點一 :最高544匹馬",
//     good2: "優點二 :3.9秒",
//     good3: "優點三 :最快僅需10分鐘即可補充140公里純電續航里程",
//     good4: "優點四 :315萬元起",
//     good5: "優點五 :高達521公里續航里程",
//   },
// ];

// card1.addEventListener("click", (e) => {
//   e.preventDefault();
//   box.classList.toggle("show");
//   let close = document.createElement("button");
//   close.classList.add("close_button");
//   close.innerText = "閱讀完畢";
//   box_info.appendChild(close);
//   close.addEventListener("click", () => {
//     box.classList.toggle("show");
//     box_info.removeChild(close);
//     box_info.removeChild(BMW);
//     box_info.removeChild(good1);
//     box_info.removeChild(good2);
//     box_info.removeChild(good3);
//     box_info.removeChild(good4);
//     box_info.removeChild(good5);
//   });

//   let BMW = document.createElement("h2");
//   BMW.classList.add("BMW_Type");
//   BMW.innerText = myBMW[0].type;
//   box_info.appendChild(BMW);

//   let good1 = document.createElement("p");
//   good1.classList.add("good");
//   good1.innerText = myBMW[0].good1;
//   box_info.appendChild(good1);

//   let good2 = document.createElement("p");
//   good2.classList.add("good");
//   good2.innerText = myBMW[0].good2;
//   box_info.appendChild(good2);

//   let good3 = document.createElement("p");
//   good3.classList.add("good");
//   good3.innerText = myBMW[0].good3;
//   box_info.appendChild(good3);

//   let good4 = document.createElement("p");
//   good4.classList.add("good");
//   good4.innerText = myBMW[0].good4;
//   box_info.appendChild(good4);

//   let good5 = document.createElement("p");
//   good5.classList.add("good");
//   good5.innerText = myBMW[0].good5;
//   box_info.appendChild(good5);
// });

// card2.addEventListener("click", (e) => {
//   e.preventDefault();
//   box.classList.toggle("show");
//   let close = document.createElement("button");
//   close.classList.add("close_button");
//   close.innerText = "閱讀完畢";
//   box_info.appendChild(close);
//   close.addEventListener("click", () => {
//     box.classList.toggle("show");
//     box_info.removeChild(close);
//     box_info.removeChild(BMW);
//     box_info.removeChild(good1);
//     box_info.removeChild(good2);
//     box_info.removeChild(good3);
//     box_info.removeChild(good4);
//     box_info.removeChild(good5);
//   });
//   let BMW = document.createElement("h2");
//   BMW.classList.add("BMW_Type");
//   BMW.innerText = myBMW[1].type;
//   box_info.appendChild(BMW);

//   let good1 = document.createElement("p");
//   good1.classList.add("good");
//   good1.innerText = myBMW[1].good1;
//   box_info.appendChild(good1);

//   let good2 = document.createElement("p");
//   good2.classList.add("good");
//   good2.innerText = myBMW[1].good2;
//   box_info.appendChild(good2);

//   let good3 = document.createElement("p");
//   good3.classList.add("good");
//   good3.innerText = myBMW[1].good3;
//   box_info.appendChild(good3);

//   let good4 = document.createElement("p");
//   good4.classList.add("good");
//   good4.innerText = myBMW[1].good4;
//   box_info.appendChild(good4);

//   let good5 = document.createElement("p");
//   good5.classList.add("good");
//   good5.innerText = myBMW[1].good5;
//   box_info.appendChild(good5);
// });

// card3.addEventListener("click", (e) => {
//   e.preventDefault();
//   box.classList.toggle("show");
//   let close = document.createElement("button");
//   close.classList.add("close_button");
//   close.innerText = "閱讀完畢";
//   box_info.appendChild(close);
//   close.addEventListener("click", () => {
//     box.classList.toggle("show");
//     box_info.removeChild(close);
//     box_info.removeChild(BMW);
//     box_info.removeChild(good1);
//     box_info.removeChild(good2);
//     box_info.removeChild(good3);
//     box_info.removeChild(good4);
//     box_info.removeChild(good5);
//   });
//   let BMW = document.createElement("h2");
//   BMW.classList.add("BMW_Type");
//   BMW.innerText = myBMW[2].type;
//   box_info.appendChild(BMW);

//   let good1 = document.createElement("p");
//   good1.classList.add("good");
//   good1.innerText = myBMW[2].good1;
//   box_info.appendChild(good1);

//   let good2 = document.createElement("p");
//   good2.classList.add("good");
//   good2.innerText = myBMW[2].good2;
//   box_info.appendChild(good2);

//   let good3 = document.createElement("p");
//   good3.classList.add("good");
//   good3.innerText = myBMW[2].good3;
//   box_info.appendChild(good3);

//   let good4 = document.createElement("p");
//   good4.classList.add("good");
//   good4.innerText = myBMW[2].good4;
//   box_info.appendChild(good4);

//   let good5 = document.createElement("p");
//   good5.classList.add("good");
//   good5.innerText = myBMW[2].good5;
//   box_info.appendChild(good5);
// });
let index = 0;
function refresh() {
  if (index < 0) {
    index = 2;
  } else if (index > 2) {
    index = 0;
  }
  // 獲取輪播框
  let carousel = document.querySelector(".carousel");
  //得到寬度
  let width = getComputedStyle(carousel).width;
  width = Number(width.slice(0, -2));
  carousel.querySelector(".container").style.left =
    index * width * -1 + "px";
}

setInterval(() => {
  index++;
  refresh();
}, 2000);