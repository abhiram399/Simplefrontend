const addList = () => {
  const input = document.getElementById("todo-input");
  const newInput = input.value.trim();

  if (newInput !== "") {
    const todoList = document.getElementById("todo-list");
    
    const li = document.createElement("li");
    // listItem.appendChild(checkbox);
    li.innerHTML = `<input type="checkbox" id="checkbox " /> <span> ${newInput} </span> <button onclick="removeList(this)"><i class="fa-solid fa-trash fa-xl"style="color: #bd0000;"></i></button>`;
    todoList.appendChild(li);


    const checkbox = li.querySelector("input[type='checkbox']");
    checkbox.addEventListener("change", () => {
      const text = li.querySelector("span");
      text.classList.toggle("done");
    });

    

    input.value = "";
  }
};

const removeList = (button) => {
  const li = button.parentElement;
  li.remove();
};


