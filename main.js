'use strict'
const todos = [];
const addButton = document.getElementById('addbutton');
const table = document.getElementById('myTbody');//テーブル取得
const all = document.getElementById('all');
const go = document.getElementById('go');
const done = document.getElementById('done');
function clear(){
  const clearText = document.getElementById('comment');
  clearText.value = '';
}
const A = table.getElementsByClassName('exit')
const B = table.getElementsByClassName('work')

addButton.addEventListener('click', () => {
  let task = {comment: document.getElementById('comment').value,status: '作業中',}    
  todos.push(task);
  radioSwitch()
  clear();
  console.log(todos);
})

function radioSwitch(){
  const todo = document.getElementsByName('todo');
  const completed =todos.filter(go => go.status === '完了')
  const in_work =todos.filter(to => to.status === '作業中')
    if(todo[0].checked){
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
      cellFinishButton.appendChild(createDeleteBtn);
    if(todos[index].status === '作業中'){
    newRow.classList.add('work')
    }else if(todos[index].status === '完了'){
    newRow.classList.add('exit')
    }
  createDeleteBtn.addEventListener('click', () => {
    todos.splice(index,1);
  })
  statsBtn.addEventListener('click', () => {
  if(todos[index].status === '作業中'){
    newRow.classList.add('exit')
    newRow.classList.remove('work')
    todos[index].status = '完了';
    statsBtn.textContent = todos[index].status;
    cellWork.appendChild(statsBtn);
  }else if(todos[index].status === '完了'){
    newRow.classList.add('work')
    newRow.classList.remove('exit')
    todos[index].status = '作業中';
    statsBtn.textContent = todos[index].status;
    cellWork.appendChild(statsBtn);
    }
  });
  })
  }else if(todo[1].checked){
    for(let i = 0; i < completed.length; i++){
      A[i].style.display = 'none'
    }
    console.log(completed)
  }else if(todo[2].checked){
    for(let i = 0; i < in_work.length; i++){
      B[i].style.display = 'none'    
    }
    console.log(in_work)
    }
}