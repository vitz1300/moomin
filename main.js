'use strict'
const main ={
    header: '==========================',
    title: '現在持っているのタスク一覧',
    footer: '==========================',
};
const tasks = ['掃除','買い物','散歩'];


  function show(){
  const heads = Object.values(main);
  heads.forEach((obj) =>{
    console.log(obj);
  })
  for(let i = 0; i < tasks.length; i++){
    console.log(`${i}:${tasks[i]}`);
  };
}
show();

function addShow(){
  const content = prompt();
  tasks.push(content)
  show();
alert('新しいタスクを追加しました');
prompt('「確認、追加、削除、終了」の4つのいずれかを入力してください');
}
addShow();