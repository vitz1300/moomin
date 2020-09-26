'use strict'
const todos = [];
const addButton = document.getElementById('addbutton');
const table = document.getElementById('myTbody');//テーブル取得
function clear(){
  const clearText = document.getElementById('comment');
  clearText.value = '';
}
console.log(todos);

addButton.addEventListener('click', () => {
  let task = {comment: document.getElementById('comment').value,status: '作業中',}    
  todos.push(task);
  show();
  clear();
})

function show(){
  const key = Object.keys(todos);
    table.innerHTML = "";
    for(let i = 0; i < key.length; i++){ 
      const newRow = table.insertRow(-1);
      const cellId = newRow.insertCell(-1);
      const cellComment = newRow.insertCell(-1);
      const cellWork = newRow.insertCell(-1);
      const cellFinishButton = newRow.insertCell(-1);
      const eraceBtn = document.createElement('button');
      const statsBtn = document.createElement('button');
  
      cellId.textContent = key[i];
      cellComment.textContent = todos[i].comment; 
        statsBtn.textContent = todos[i].status;
        cellWork.appendChild(statsBtn);
        eraceBtn.textContent = '削除';
        cellFinishButton.appendChild(eraceBtn)

      eraceBtn.addEventListener('click',()=>{
        todos.splice(i,1);
        console.log(todos);
        return show();
      })
    }
}