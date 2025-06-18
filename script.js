let first = document.getElementById("inputhere");
let button = document.getElementById("areusure");
let third = document.getElementById("jayajlovekc");
let second = document.getElementById("dontclick");

button.addEventListener("click", function () {
  let something = first.value.trim();

  if (something !== "") {
    let newthing = document.createElement("li");
    newthing.textContent = `${something}`;

    let deleting = document.createElement("button");
    deleting.textContent = "Delete";

    deleting.addEventListener("click", function () {
      third.removeChild(newthing);
    });
    newthing.appendChild(deleting);
    third.appendChild(newthing);

    first.value = "";
  }
});
second.addEventListener("click", function () {
  third.innerHTML = "";
});
first.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    button.click();
  }
});
let search = document.getElementById("searching");
search.addEventListener("input", function () {
  let searchig = search.value.trim().toLowerCase();

  let items = third.getElementsByTagName("li");

  for (let i = 0; i < items.length; i++) {
    let item = items[i].textContent.toLowerCase();
    if (item.includes(searchig)) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
});
let darker = document.getElementById("working");
darker.addEventListener("click", function(){
document.body.classList.toggle("dark-mode");
  
});
