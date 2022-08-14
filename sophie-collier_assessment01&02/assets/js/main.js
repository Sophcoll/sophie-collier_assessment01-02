// THIS FUNCTION CREATES LIST ITEMS AFTER A USER TYPES IN THE INPUT BOX AND CLICKS SUBMIT

function formSubmitted() {
  const text = document.querySelector("[data-input]").value; // FINDS THE VALUE OF WHAT WAS WRITTEN IN THE INPUT BOX
  const li = document.createElement("li");  // CREATES A LIST ITEM
  li.innerHTML = text; // ASSIGNS THE VALUE FROM THE INPUT BOX TO THE NEWLY CREATED LIST ITEM
  const ul = document.querySelector("[data-list]"); // FINDS THE UL (PARENT ELEMENT)
  ul.appendChild(li); // ATTACHES THE NEW LIST ITEM THAT HAS THE VALUE FROM THE INPUT BOX (CHILD ELEMENT) AND ATTACHES IT TO THE UL ELEMENT (PARENT)
  document.querySelector("[data-input]").value=""; // THIS CLEARS THE INPUT BOX AFTER USER HAS CLICKED SUBMIT
}
