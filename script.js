let img1 = document.createElement("img");
img1.src = "./image/image.jpg";
let img2 = document.createElement("img");
img2.src = "./image/image2.jpg";
let img3 = document.createElement("img");
img3.src = "./image/image3.jpg";
let img4 = document.createElement("img");
img4.src = "./image/image4.jpg";
let div = document.querySelector("#div");
let button = document.querySelector("button");

let change = -1;
let arr = [img1, img2, img3, img4];

img3.style.left = "0";
img4.style.left = "0";

button.addEventListener("click", () => {
  if (change >= -1 && change < 3) {
    img1.style.left = "0";
    img2.style.left = "0";
    img3.style.left = "0";
    img4.style.left = "0";
    div.append(arr[++change]);
  }
});
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  if (change <= 3 && change > -1) {
    arr[change--].style.left = "100%";
  }
});
let img = document.querySelector("img");
