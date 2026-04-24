function addTask() {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);

        // ვამატებთ "X" ღილაკს თითოეული დავალებისთვის
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // აქ გამოიყენება backslash (\)
        li.appendChild(span);

        // ინპუტის გასუფთავება დამატების შემდეგ
        inputBox.value = "";
        saveData();
    }
}

// ფუნქცია დავალების წასაშლელად ან მოსანიშნად
const listContainer = document.getElementById("list-container");

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        // თუ დავაჭერთ ტექსტს - მოინიშნება როგორც შესრულებული
        e.target.classList.toggle("checked");
        saveData();
    } 
    else if (e.target.tagName === "SPAN") {
        // თუ დავაჭერთ "X"-ს - დავალება წაიშლება
        e.target.parentElement.remove();
         saveData();
    }
}, false);

function saveData(){
  localStorage.setItem("data" , listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();