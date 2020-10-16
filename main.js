'use strict'
const todos = [];
const addButton = document.getElementById('addbutton');
const table = document.getElementById('myTbody');
const all = document.getElementById('all');
const go = document.getElementById('go');
const done = document.getElementById('done');
const comment = document.getElementById('comment');
const radio =document.getElementById('radio');

addButton.addEventListener('click', () => {
  const task = {comment: comment.value, status: '作業中',}    
  todos.push(task);
  show();
  switchRadio();
  comment.value = '';
});
radio.addEventListener('change', () => {
  switchRadio()
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
      if(todos[index].status === '作業中'){
        newRow.classList.add('work')
        }else if(todos[index].status === '完了'){
        newRow.classList.add('exit')
        };    
    createDeleteBtn.addEventListener('click', () => {
      deleteShow(index);
      show();
      switchRadio();
    });
    statsBtn.addEventListener('click', () => {
      change(index);
      cellWork.appendChild(statsBtn);
      switchRadio();
    })
    })
  };

  function switchRadio(){
    const todo = document.getElementsByName('todo');
    const completed =todos.filter(toDo => toDo.status === '完了');
    const in_Work =todos.filter(toDo => toDo.status === '作業中');
    const exit = table.getElementsByClassName('exit');
    const work = table.getElementsByClassName('work');
    show();
    if(todo[1].checked){
      for(let i = 0; i < completed.length; i++){
        exit[i].style.display = 'none';
      }
    }else if(todo[2].checked){
      for(let i = 0; i < in_Work.length; i++){
        work[i].style.display = 'none'
      }
    }
  };
  function change(index){
    if(todos[index].status === '作業中'){
      table.querySelector('tr').classList.add('exit');
      table.querySelector('tr').classList.remove('work');
      todos[index].status = '完了';
      document.createElement('button').textContent = todos[index].status;
    }else if(todos[index].status === '完了'){
      table.querySelector('tr').classList.add('work');
      table.querySelector('tr').remove('exit');
      todos[index].status = '作業中';
      document.createElement('button').textContent = todos[index].status;
    }
  }
  function deleteShow(index){
    todos.splice(index, 1);
  }