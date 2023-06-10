let dragged = null;
let lists = document.querySelectorAll(".list"); //selected all list items

let target = document.getElementById("droptarget"); //selected dropping area

let dropHighLight = document.getElementById("drop-highlight"); //selected for highlight item  when dragged

lists.forEach((list) => {

  //loop through all list items and add drag start event 

  list.addEventListener("dragstart", (e) => {
    dragged = e.target;
    // console.log("dragstart");
    dragged.classList.add('drop-highlight')  // highlight item when dragged
  });

  list.addEventListener("dragend", () => {
    dropHighLight.classList.remove("drop-highlight"); // remove highlight when dragend
  });

});

// add dragover event on dropping area

target.addEventListener("dragover", (e) => {
  e.preventDefault();
  // console.log("dragovering");
  dropHighLight.classList.add("drop-highlight");
});

//add drop event on dropping area

target.addEventListener("drop", (e) => {
  e.preventDefault();
  dragged.parentNode.removeChild(dragged);  // remove item from draggable area
  e.target.appendChild(dragged);           // add item to the dropping area
  dragged.classList.remove('drop-highlight')
  // console.log("dropped");

// show success message after dropping the item
  setTimeout(() => {
    alert("Item Dropped Successfully...!");
  }, 400);

});

// return all list items back to its original position 
const returnToOriginal = () => {
  location.reload();  // reloads the site
};
