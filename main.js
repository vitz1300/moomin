'use strict'
const addButton = document.getElementById('addbutton');
const table = document.getElementById('my_tbody');//テーブル取得
const todos = [];
console.log(todos);

addButton.addEventListener('click', () => {
  const task = {
    comment: document.getElementById('comment').value,
    status: '作業中',
  }    
  todos.push(task);
  console.log(todos);  
  
  table.innerHTML = "";
  const key = Object.keys(todos);
  for(let i = 0; i < key.length; i++){
    const newRow = table.insertRow(-1);
    const cellA = newRow.insertCell(-1);
    const cellB = newRow.insertCell(-1);
    const cellC = newRow.insertCell(-1);
    const cellD = newRow.insertCell(-1);
    cellA.textContent = key[i];
    cellB.textContent = todos[i].comment; 

    const statsBtn = document.createElement('button');
    statsBtn.textContent = task.status;
    const eraceBtn = document.createElement('button');
    eraceBtn.textContent = '削除';
    cellC.appendChild(statsBtn);
    cellD.appendChild(eraceBtn);
    
  }
});