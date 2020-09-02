'use strict'
const addButton = document.getElementById('addbutton');//ボタン取得
addButton.addEventListener('click', () => {
  const table = document.getElementById('myTable');//テーブル取得
  const newRow = table.insertRow(-1);//行の末に行を追加
  const cellA = newRow.insertCell(-1);//セルの追加
  const cellB = newRow.insertCell(-1);//セルの追加
  const cellC = newRow.insertCell(-1);//セルの追加
  const cellD = newRow.insertCell(-1);//セルの追加
  
  const countUp = () =>{  //ID番号
    const row = myTable.rows.length -1;
    cellA.innerHTML = row;
  };

  const content = () =>{
    const comment = document.getElementById('comment');//input取得
    const commentValue = comment.value;//inputの文字列を取得
    cellB.innerHTML = commentValue;
  };
  
  const work = () =>{//作業中ボタンの関数
    cellC.innerHTML = '<input type="button" value="作業中"> '
  }; 
  const erase = () => {//削除ボタンの関数
    cellD.innerHTML = '<input type="button" value="削除"> '
  };
  const todos = [];
  const todo = {
    id: countUp(),
    comment: content(),
    work: work(),
    erace: erase(),
  }
  todo.push = todos;
});