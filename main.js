'use strict'

{
  const head = {
    0: '==========================',
    1: '現在持っているのタスク一覧',
    2: '==========================',
  };
  const tasks = ['掃除','買い物','散歩'];
  const heads = Object.keys(head);
  heads.forEach(key =>{
    console.log(`${head[key]}`);
  });
  for(let i = 0; i < tasks.length; i++){
    console.log(`${i}:${tasks[i]}`);
  };
}


{
const head = {
  0: '==========================',
  1: '現在持っているのタスク一覧',
  2: '==========================',
}

const tasks = ['掃除','買い物','散歩'];
const content = prompt();
const heads = Object.keys(head);
heads.forEach(key =>{
  console.log(`${head[key]}`);
});
tasks.push(content)
for(let i = 0; i < tasks.length; i++){
  console.log(`${i}:${tasks[i]}`);
};
alert('新しいタスクを追加しました');
prompt('「確認、追加、削除、終了」の4つのいずれかを入力してください');
}
