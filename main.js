'use strict'
const main =`==========================\n現在持っているのタスク一覧\n==========================`;
const tasks = [
  {content: '机を片付ける、', genre:'掃除'},
  {content: '牛乳を買う、', genre:'買い物'},
  {content: '散歩する', genre:'運動'},
];

  function show(){
      console.log(main);
      let id = Object.keys(tasks);
      const contents = tasks.map(item => item.content);
      const genres = tasks.map(item => item.genre);
      for(let i = 0; i < id.length; i++){
        console.log(id[i]+':[内容]'+contents[i]+'[ジャンル]'+genres[i]);  
      }
      };
  show();


function add(){
  const a = prompt('タスクを入力してください');
  const b = prompt('タスクを入力してください');
  tasks.push({content:a,genre:b});
  show();
  alert('新しいタスクを追加しました');
  prompt('「確認、追加、削除、終了」の4つのいずれかを入力してください');
}
add();

