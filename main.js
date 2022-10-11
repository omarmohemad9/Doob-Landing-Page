let NavBtn = document.querySelector(".burger");
let Ul = document.querySelector(".burger +ul");
NavBtn.addEventListener("click", () => {
  Ul.classList.toggle("active");
});
// images section button

let btnShow = document.getElementById("showMore");
let imagesBox = document.querySelector(".images-box");

btnShow.addEventListener("click", () => {
  imagesBox.classList.toggle("active");
});

// images setion drag

let leftBtn = document.querySelector(".leftBtn");
let rightBtn = document.querySelector(".rightBtn");
let collection = document.querySelector(".collection");
let i = 0;
leftBtn.addEventListener("click", () => decrseLeft());

rightBtn.addEventListener("click", () => incrsRight());

let childs = collection.children;
let arrnum = [];
function createNumbers() {
  arrnum = [];

  for (let x = 0; x < childs.length; x++) {
    let val = childs[x].getBoundingClientRect().left - 40;
    // let result = val ;
    arrnum.push(val);
    console.log(arrnum);
  }
}
createNumbers();
// let media = window.matchMedia("(min-width: 1024px)");
let size = arrnum[i];
let mediaSizeLap = window.matchMedia("(max-width:1024px)");
let mediaSizeMobile = window.matchMedia("(max-width:728px)");
console.log(size);
mediaSizeLap.onchange = () => {
  createNumbers();
};
mediaSizeMobile.onchange = () => {
  createNumbers();
};
function decrseLeft() {
  if (i == 0) {
    i = childs.length - 1;
  } else {
    i--;
  }
  size = arrnum[i];

  console.log(i + "  " + size);
  collection.style.left =
    Array.from(size.toString())[0] == "-"
      ? "" + size + "px"
      : "-" + size + "px";
  // if (media.matches) {
  //   console.log(media.matches);
  // }
}

let incrsRight = () => {
  console.log(size);

  // let x = childs[i].getBoundingClientRect().left;

  if (i == childs.length - 1) {
    i = 0;
  } else {
    i++;
  }
  size = arrnum[i];
  collection.style.left =
    Array.from(size.toString())[0] == "-"
      ? "" + size + "px"
      : "-" + size + "px";
  console.log(i);
};
