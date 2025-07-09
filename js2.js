const inputField = document.getElementById('item');
const addButton = document.getElementById('itemName');
const myList = document.getElementById('myList');

console.log(inputField);


function updateList() {
    if (inputField.value == "") {
        return null;
    } else {
        const newItemText = inputField.value;
        const delbutton = document.createElement('button');
        delbutton.textContent = "Delete";
        const newListItem = document.createElement('li');
        newListItem.textContent = newItemText + "\t";
        myList.appendChild(newListItem);
        newListItem.appendChild(delbutton);
        delbutton.addEventListener("click", function() {
            newListItem.remove();
            delbutton.remove();
        })
        inputField.value = '';
    }
};
