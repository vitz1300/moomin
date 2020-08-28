'use strict'
const button = document.getElementById('add');
const state = {count:0};
button.addEventListener('click',()=>{
    const table = document.getElementById('myTable');//テーブル取得
    const newRow = table.insertRow();//行の末に行を追加
    
    const cell1 = newRow.insertCell();//セルの追加
    cell1.innerHTML = ++state.count;//IDの追加
    
    const comment = document.getElementById('comment');//コメント取得
    const task = comment.value;//コメントの内容
    const cell2 = newRow.insertCell();//セルの追加
    cell2.textContent= task;//コメントの内容表示
    
    const cell3 = newRow.insertCell();
    const addbutton1 = document.createElement('input');
    addbutton1.type='button';
    addbutton1.value='作業中';
    cell3.appendChild(addbutton1);

    const cell4 = newRow.insertCell();
    const addbutton2 = document.createElement('input');
    addbutton2.type='button';
    addbutton2.value='削除';
    cell4.appendChild(addbutton2);
  });


    // const countUpValue=0;
    // function countUp(){
    //   countUpValue++;
    //   document.getElementById('count').innerHTML=countUpValue;
    // }
    // countUp();

    

  
  
  // const cell2 = newRow.insertCell(-1);
  // const cell3 = newRow.insertCell(-1);

  // cell1.innerHTML='1'+(table.rows.length -1)
  // cell2.innerHTML='2'+(table.rows.length -1)
  // cell3.innerHTML='3'+(table.rows.length -1)