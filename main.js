'use strict'
const main =`==========================\n現在持っているのタスク一覧\n==========================`;
const tasks = [
['机を片付ける、','牛乳を買う、','散歩する、'],
['掃除','買い物','運動']
]

function show(){
  console.log(main);
  const content = tasks[0];
  const genre = tasks[1];
  for(let i = 0; i < content.length; i++){
    console.log(`${i}:[内容]${content[i]}[ジャンル]${genre[i]}`);  
  }
  };
show();

function add(){
  const a = prompt('タスクを入力してください');
  tasks[0].push(a);
  const b = prompt('タスクを入力してください');
  tasks[1].push(b);
  show();
  alert('新しいタスクを追加しました');
  prompt('「確認、追加、削除、終了」の4つのいずれかを入力してください');
}
add();

