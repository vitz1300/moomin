'use strict'

const todos = [];
const addButton = document.getElementById('addbutton');
const table = document.getElementById('myTbody');//テーブル取得
function clear(){
  const clearText = document.getElementById('comment');
  clearText.value = '';
}

addButton.addEventListener('click', () => {
  let task = {comment: document.getElementById('comment').value,status: '作業中',}    
  todos.push(task);
  show();
  clear();
  console.log(todos);
})

function show(){
    table.innerHTML = "";
    todos.forEach(function(value,index){
      const newRow = table.insertRow(-1);
      const cellId = newRow.insertCell(-1);
      const cellComment = newRow.insertCell(-1);
      const cellWork = newRow.insertCell(-1);
      const cellFinishButton = newRow.insertCell(-1);
      const createDeleteBtn = document.createElement('button');
      const statsBtn = document.createElement('button');
      cellId.textContent = index;
      cellComment.textContent = value.comment; 
      statsBtn.textContent = value.status;
      cellWork.appendChild(statsBtn);
      createDeleteBtn.textContent = '削除';
      cellFinishButton.appendChild(createDeleteBtn) 
      
      createDeleteBtn.addEventListener('click', () => {
        todos.splice(index,1);
        console.log(todos);
        show();
      })
    })
  }
