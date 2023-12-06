const addToList = () => {
  const pageForm = document.querySelector("form");
  pageForm.addEventListener("submit", function (e) {
    e.preventDefault();
  });

  const task = document.querySelector("textarea");
  const myList = document.querySelector("ul");
  let newLi = document.createElement("li");
  newLi.innerText = `${task.value}`;
  newLi.addEventListener("click", function () {
    newLi.classList.toggle("completed");
  });
  myList.appendChild(newLi);

  const delButton = document.createElement("button");
  delButton.innerHTML = `<i class="fas fa-trash"></i>`;
  delButton.addEventListener("click", function () {
    newLi.classList.add("deleted");
    delButton.classList.add("deleted");
    newLi.appendChild(delButton);
  });
  newLi.appendChild(delButton);

  task.value = "";
};
