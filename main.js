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
  table.innerHTML = "";
  console.log(todos);  

  for(let i = 0; i < todos.length; i++){
    table.innerHTML = todos.length;
    table.innerHTML = todos[comment];
    const statsBtn = document.createElement('button');
    statsBtn.textContent = task.status;
    table.appendChild(statsBtn);
    const eraceBtn = document.createElement('button');
    eraceBtn.textContent = '削除';
    table.appendChild(eraceBtn);
    }
});
// const A = table.textContent = comment.value
// const B = table.appendChild(aButton)
// aButton.value = '作業中';
// aButton.type = 'button';
// const C = table.appendChild(dButton)
// dButton.type = 'button';
// dButton.value = '削除';
//const aButton = document.createElement('input');
//const dButton = document.createElement('input');
//const tasks = Object.keys(task) 
//const comment = document.getElementById('comment');//input取得