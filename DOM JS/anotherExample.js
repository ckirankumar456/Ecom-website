const newListItem = document.createElement("li");
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "green";
// document.body.append(newListItem);
// document.body.prepend(newListItem);
// document.getElementById("fruits").append(newListItem);

const banana = document.getElementById("banana");
document.getElementById("fruits").insertBefore(newListItem, orange);
