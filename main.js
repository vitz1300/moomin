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
  // const lists = Object.keys(main.list);
  // for(let i = 0; i < main.length; i++){
  //     console.log(`${i}:${lists[i]}`);
  //   };
  // lists.forEach((list) =>{
  //   console.log(list);
  // })
  


  // console.log(main);
  // console.log(main.head);
  // console.log(main.list);
  // const tasks = ['掃除','買い物','散歩'];
  // heads.forEach(() =>{
  //   console.log(`${heads}`);
  // });
  // for(let i = 0; i < tasks.length; i++){
  //   console.log(`${i}:${tasks[i]}`);
  // };


// {
// const head = {
//   0: '==========================',
//   1: '現在持っているのタスク一覧',
//   2: '==========================',
// }

// const tasks = ['掃除','買い物','散歩'];
// const content = prompt();
// const heads = Object.keys(head);
// heads.forEach(key =>{
//   console.log(`${head[key]}`);
// });
// tasks.push(content)
// for(let i = 0; i < tasks.length; i++){
//   console.log(`${i}:${tasks[i]}`);
// };
// alert('新しいタスクを追加しました');
// prompt('「確認、追加、削除、終了」の4つのいずれかを入力してください');
// }
