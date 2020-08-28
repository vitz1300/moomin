'use strict'
const addButton = document.getElementById('addbutton');
    const state = {
      count:0,
    }
addButton.addEventListener('click', () => {
  const table = document.getElementById('myTable');//テーブル取得
  const newRow = table.insertRow();//行の末に行を追加
    
  const todo = {
      content : document.getElementById('comment'),
      status : document.createElement('input'),
      delete : document.createElement('input'),
    };
    
    const cellId = newRow.insertCell();//セルの追加
    cellId.innerHTML = ++state.count;//IDの追加
    
    const task = todo.content.value;//コメントの内容
    const cellComment = newRow.insertCell();//セルの追加
    cellComment.textContent= task;//コメントの内容表示
    
    const cellStatus = newRow.insertCell();
    todo.status.type='button';
    todo.status.value='作業中';
    cellStatus.appendChild(todo.status);
    
    const cellDelete = newRow.insertCell();
    todo.delete.type='button';
    todo.delete.value='削除';
    cellDelete.appendChild(todo.delete);
  });
  