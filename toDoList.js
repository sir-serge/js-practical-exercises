let buttonAdd=document.getElementById('addTaskButton').addEventListener('click',addTask);
function addTask(){
  let task=document.getElementById('taskInput').value; 
  console.log(task)
  let uList=document.getElementById('todoList')
  let newElement=document.createElement('li')
  newElement.appendChild(document.createTextNode(task));
  let checkBox=document.createElement('input')
  checkBox.setAttribute('type','checkbox')
  newElement.appendChild(checkBox)
  uList.appendChild(newElement)
  // console.log(newElement)
}
