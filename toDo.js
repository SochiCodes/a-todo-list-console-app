// Welcomes User--------------------------
console.log("Hi! Welcome to your ToDo App.\n\n")

let message = " ";
const todoItems = [];



//Lists Todo Items with a message
let items;
function listItem(){
    message = "Here are your ToDo list.\n"
    console.log(message)
    for (let x in todoItems) {
        items = todoItems[x]
        console.log(items)
    }
}

//Tells user to add Todo item if todo is empty
if (todoItems.length == 0){
    message = "---Your ToDo list is empty---\n\n"
    console.log(message)
}else{
    //displays the list if it's not empty
    message = "Here is your ToDo.";
    console.log(message)
    listItem()
}

//User can Choose a Command
const commandInp = Number(prompt("[0]Exit [1]Add Item"))

function actionEx(commandInp){
    //User can Add Item
    function addItem(){
        let task = prompt("Add your ToDo separated with comma")
        let taskArr = task.split(",")
        for(let i=0; i < taskArr.length; i++){
            todoItems.push(taskArr[i].trim())
        }

        console.log(listItem())
    }

    function editItem(){
        //User can Edit Added Item
        let oldItem = prompt("Type the Item you want to EDIT or CHANGE")
        let newItem = prompt("Type your new Item")
        var status = `${oldItem} is not in your ToDo list.\n\n`
        for (var i=0; i<todoItems.length; i++){
            var name = todoItems[i];
            if (name === oldItem){
                const oldItemIndex = todoItems.indexOf(oldItem) 
                todoItems[oldItemIndex] = newItem
                status = `You successully changed -${oldItem} to +${newItem}.\n\n`;
                break;
            }
        }
        console.log(status) 
        console.log(listItem())
    }

    //Users can Delete Added Item
    function deleteItem(){
        let oldItem = prompt("Enter the Item you want to DELETE")
        var status = `${oldItem} is not in your ToDo list.`
        let newTodoItems;
        
        for (var i=0; i<todoItems.length; i++){
            var name = todoItems[i];
            if (name === oldItem){
                newTodoItems = []
                for (let i = 0; i < todoItems.length; i++){
                    if (todoItems[i] !== name){
                        newTodoItems.push(todoItems[i])
                    }
                }
                status = `-${oldItem} has been deleted successully.\n\nHere is your updated ToDo list.`;
                break;
            }
        }
        console.log(status) 
        for (let x in newTodoItems) {
            console.log(newTodoItems[x])
        } 
    }
    
    switch(commandInp){
        case 0:
            console.log("You have EXITED successfully.")
            break;
        case 1:
            addItem()
            break;
        case 2:
            editItem()
            break;
        case 3:
            deleteItem()
            break;
        default:
            console.log("Invalid Selection.")
    }
}
actionEx(commandInp)

const commandInp2 = Number(prompt("[0]Exit [1]Add Item [2]Edit Item [3]Delete Item"))
actionEx(commandInp2)
