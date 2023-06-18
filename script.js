// var body = document.getElementsByTagName('body');
var WorkSpace = document.getElementById('WorkSpace');
var ToDoContainer = document.getElementById('ToDoContainer');
var SinglePage = document.querySelector('.SinglePage')
var NoItem = document.getElementById('NoItem');
var PopUp = document.querySelector('.PopUp');
var Todo_List = document.getElementById("Todo_List");
var Todo_Task = document.getElementById("Todo_Task");
var OpenCardPopUp = document.getElementsByClassName("AddList");
var CloseCardPopUp = document.getElementById("PopUp_Close");
var CreatNewCards = document.getElementById('New_Todo');
var CreateNewSubTask = document.getElementById('New_SubTodo');
var CloseTaskPopUp = document.getElementById('PopUp_SubClose');
var NewCardName = document.getElementById("Todo_Title_Name")
var NewSubTaskName = document.getElementById("Todo_Item_Name")
var NoOfCards = 0;
var Bridge;

OpenCardPopUp[0].addEventListener('click',()=>{
    ShowCardPopUp()
})
  
CloseCardPopUp.addEventListener('click',()=>{
    HidePopUps()
})

CloseTaskPopUp.addEventListener('click',()=>{
    HidePopUps()
})

function ShowCardPopUp(){
  PopUp.style.display = "block";
  Todo_List.style.display = "flex";
  Todo_Task.style.display = "none";
  WorkSpace.style.filter = "blur(3Px)";
}

function HidePopUps(){
  PopUp.style.display = "none";
  WorkSpace.style.filter = "blur(0Px)";
}

function ShowTaskPopUp(){
  Todo_Task.style.display = "flex";
  PopUp.style.display = "block";
  Todo_List.style.display = "none";
  WorkSpace.style.filter = "blur(3Px)";
}

CreatNewCards.addEventListener('click',()=>{
  AddNewCard()
  NoOfCards++;
  msgNoItem()
  HidePopUps()
  SwitchToAllCard()
})

CreateNewSubTask.addEventListener('click',()=>{
  Add_SubTask()
})

function AddNewCard(){
            // Creating Elements of New Cards
  var NewCard = document.createElement('div')
  var Card_Title = document.createElement('div')
  var Add_Items = document.createElement('div')
  var Button_Area = document.createElement('div')
  var Delete_Card = document.createElement('div')
  var New_Task = document.createElement('div')
  
            // Appending the Elements of New Cards 
  ToDoContainer.appendChild(NewCard)
  NewCard.appendChild(Card_Title)
  NewCard.appendChild(Add_Items)
  NewCard.appendChild(Button_Area)
  Button_Area.appendChild(Delete_Card)
  Button_Area.appendChild(New_Task)
    
            // Giving the Class Name to Elements
  NewCard.className = "Todo_Cards"
  Card_Title.className = "Card_Title"
  Add_Items.id = `Add_Items${NoOfCards}`
  Button_Area.className = "Button_Area"
  Delete_Card.className = "fa fa-trash Delete_Card"
  New_Task.className = "fa fa-plus-circle fa-2x New_Task"

  Card_Title.innerText = `${NewCardName.value}`

            // Add Event Listner for SubTask
  New_Task.addEventListener('click',()=>{
    ShowTaskPopUp()
    Bridge = Add_Items.id
  })
            // Add Event Listner for Delete Card
  Delete_Card.addEventListener('click',()=>{
    NewCard.remove()
    NoOfCards--;
    msgNoItem()
  })
            // Add Event Listner for Single card
  Card_Title.addEventListener('click',()=>{
    PageTitle.innerText = Card_Title.innerText
    SinglePage.appendChild(NewCard)
    SwitchToSingleCard()
  })

  LeftSecondPage.addEventListener('click',()=>{
    ToDoContainer.appendChild(NewCard)
    SwitchToAllCard()
  })
  OpenCardPopUp[1].addEventListener('click',()=>{
    ShowCardPopUp()
    ToDoContainer.appendChild(NewCard)
  })
}

function Add_SubTask(){
  // Creating New Sub Task
let ans = document.getElementById(`${Bridge}`)
var NewSub = document.createElement('div')
var Notes = document.createElement('span')
var TaskDone = document.createElement('span')

  // Append Sub Elemenets
ans.appendChild(NewSub)
NewSub.appendChild(Notes)
NewSub.appendChild(TaskDone)

  // Giving the Class Name to Sub Elements
NewSub.className = "NewSubTask"
Notes.className = "Notes"
TaskDone.className = "TaskDone"

Notes.innerText = `${NewSubTaskName.value}`
TaskDone.innerText = `Mark Done`


TaskDone.addEventListener('click',()=>{
TaskDone.style.display = "none"
Notes.style.color = "crimson"
Notes.style.textDecoration = "line-through";
})

HidePopUps()
}

FirstPage = WorkSpace.children[0]
SecondPage = WorkSpace.children[1]
let LeftSecondPage = SecondPage.children[0]
let PageTitle = SecondPage.children[1]
SecondPage.style.display = "none"



function SwitchToSingleCard(){
  FirstPage.style.display = "none"
  SecondPage.style.display = "flex"
  ToDoContainer.style.display = "none"
}

function SwitchToAllCard(){
  FirstPage.style.display = "flex"
  SecondPage.style.display = "none"
  ToDoContainer.style.display = "flex"
}

function msgNoItem(){
  if(NoOfCards > 0){
    NoItem.style.display = "none"
  }
  else{
    NoItem.style.display = "block"
  }
}






// function AddNewCard(){
//   // Creating And Appending New Card
// var NewCard = document.createElement('div')
// NewCard.className = "Todo_Cards"
// NewCard.innerHTML = `<div class="Card_Title">${NewCardName.value}</div>\n
//                    <div id="Add_Items${NoOfCards}"></div>\n
//                    <div class="Button_Area">\n
//                    <div class='fa fa-trash Delete_Card'></div>\n     
//                    <div class='fa fa-plus-circle fa-2x New_Task'></div>\n
//                    </div>`
// ToDoContainer.appendChild(NewCard)

//   // Fetch The New Card Elements for Sub Task
// var Add_Items = document.getElementById(`Add_Items${NoOfCards}`)
// var New_Task = document.getElementsByClassName("New_Task")[NoOfCards]
// var Delete_Card = document.getElementsByClassName("Delete_Card")[NoOfCards]

//   // Add Event Listner for SubTask
// New_Task.addEventListener('click',()=>{
// ShowTaskPopUp()
// Bridge = Add_Items.id
// })

//   // Add Event Listner for Delete Card
// Delete_Card.addEventListener('click',()=>{
// NewCard.remove()
// NoOfCards--;
// msgNoItem()
// })
// }


// window.onclick = function(event) {
  //       if (event.target == PopUp) {
//             PopUp.className = "PopUp is-hidden";
//             body.className = "";
//             workspace.className = "Mainworkspace";
//             workspace.parentElement.className = "";
//         }
//     }
// When the user clicks anywhere outside of the PopUp, close it