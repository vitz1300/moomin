'use strict'
const main =`==========================\n現在持っているのタスク一覧\n==========================`;
const tasks = {
  content: ['机を片付ける、','牛乳を買う、','散歩する、'],
  genre: ['掃除','買い物','運動'],
}

  function show(){
      console.log(main);
      let id = Object.keys(tasks.content);
      for(let i = 0; i < id.length; i++){
        console.log(id[i]+':[内容]'+tasks.content[i]+'[ジャンル]'+tasks.genre[i]);  
      }
      };
  show();


function add(){
  const a = prompt('タスクを入力してください');
  const b = prompt('タスクを入力してください');
  tasks.content.push(a);
  tasks.genre.push(b);
  show();
  alert('新しいタスクを追加しました');
  prompt('「確認、追加、削除、終了」の4つのいずれかを入力してください');
}
add();

