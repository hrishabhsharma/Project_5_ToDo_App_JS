// var body = document.getElementsByTagName('body');

var WorkSpace = document.getElementById('WorkSpace');
var PopUp = document.querySelector('.PopUp');
var Todo_List = document.getElementById("Todo_List");
var Todo_Task = document.getElementById("Todo_Task");
var ListOpen = document.getElementById("AddList");
var ListClose = document.getElementById("PopUp_Close");
var New_Todo = document.getElementById('New_Todo');

var NoItem = document.getElementById('NoItem');
var ToDoContainer = document.getElementById('ToDoContainer');

var New_SubTodo = document.getElementById('New_SubTodo');
var PopUp_SubClose = document.getElementById('PopUp_SubClose');



ListOpen.addEventListener('click',()=>{
    showPopUpList()
  })
  
ListClose.addEventListener('click',()=>{
    hidePopUp()
})

PopUp_SubClose.addEventListener('click',()=>{
  hidePopUp()
})

function showPopUpList(){
  PopUp.style.display = "block";
  Todo_List.style.display = "flex";
  Todo_Task.style.display = "none";
  WorkSpace.style.filter = "blur(3Px)";
}

function hidePopUp(){
  PopUp.style.display = "none";
  WorkSpace.style.filter = "blur(0Px)";
}

function showPopUpTask(){
  Todo_Task.style.display = "flex";
  PopUp.style.display = "block";
  Todo_List.style.display = "none";
  WorkSpace.style.filter = "blur(3Px)";
}

let count = 0;
function AddNewCard(){
  
  
  var Todo_Title_Name = document.getElementById("Todo_Title_Name").value

  var NewCard = document.createElement('div')
  NewCard.className = "Todo_Cards"
  NewCard.innerHTML = `
  <div class="Card_Title">${Todo_Title_Name}</div>\n
  <div class="Add_Items"></div>\n
  <div class="Button_Area">\n
  <i class='fa fa-trash Delete_Card'></i>\n     
  <i class='fa fa-plus-circle fa-2x New_Task'></i>\n
  </div>\n
  </div>`
  
  ToDoContainer.appendChild(NewCard)

  
  // let Add_Items = document.getElementsByClassName("Add_Items")[count]
  
  let Todo_Cards = document.getElementsByClassName("Todo_Cards")[count]

  let Add_Items = Todo_Cards.children[1]
  
  let Delete_Card = document.getElementsByClassName("Delete_Card")[count]
  
  Delete_Card.addEventListener('click', ()=>{
    Todo_Cards.remove()
    count--;
  })  
  
  let New_Task = document.getElementsByClassName("New_Task")[count]
  
  New_Task.addEventListener('click' , ()=>{
    showPopUpTask()
  })
  
 
  
  function Addkeep(){
    
    var newKeep = document.createElement('div')
    newKeep.className = "Notes"

    let Todo_Item_Name = document.getElementById("Todo_Item_Name").value

    newKeep.innerText = Todo_Item_Name  

    Add_Items.appendChild(newKeep)

  }

  New_SubTodo.addEventListener('click', ()=>{
    Addkeep()
    hidePopUp()
    console.log(Todo_Cards)
  })


  count++;
}





New_Todo.addEventListener('click',()=>{
  
  NoItem.remove()
  AddNewCard()
  hidePopUp()
  


  // if(count > 0){
  //   NoItem.style.display = "none"
  // }
  // else{
  //   NoItem.style.display = "block"
  // }

})
  

  // let innerItem_del = document.querySelector('.icon_delete')

  // innerItem_del.addEventListener('click',()=>{
    
    // })  
    // console.log(document.getElementsByClassName('cardItem'))
    
    
    
    // let innerItem = document.querySelector('.cardItem${count} .card_icon .icon_add')
    
    // innerItem.addEventListener('click', ()=>{
      
    //   let AddNote = document.getElementById("addTodo")
      
    //   let addList = document.createElement('div')
      
    //   addList.innerHTML = '<h3> This is first todo</h3>'
      
    //   addList.style.color = "black"
      
    //   AddNote.appendChild(addList)
    // })
    
    
    
    // count++;
  
  
  
  



  // var toDo = document.getElementById('addTodo')
  
  // var addClick  = document.getElementById('clickAdd')
  
  // let i=1
  
  // addClick.addEventListener('click' , ()=>{
    //   let keep = document.createElement('div')
    
    //   keep.innerHTML = `<h2>This is todo ${i}<\h2>`
    //   i++
    //   toDo.appendChild(keep)
    // })
    // When the user clicks anywhere outside of the PopUp, close it
    // window.onclick = function(event) {
    //       if (event.target == PopUp) {
      //             PopUp.className = "PopUp is-hidden";
      //             body.className = "";
      //             workspace.className = "Mainworkspace";
    //             workspace.parentElement.className = "";
    //         }
    //     }