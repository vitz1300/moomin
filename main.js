'use strict'
const start = document.getElementById('start');
const welcome = document.getElementById('welcome')
const button_Click = document.getElementById('button_click')
const contents = document.getElementById('contents');
const genre = document.getElementById('genre');
const level = document.getElementById('level');
const new_answer = document.getElementById('new_answer');
let num = 0;
const shuffle = [];
const correct_answer = [];
const url = 'https://opentdb.com/api.php?amount=10';

start.addEventListener('click', () => {
  welcome.textContent = '取得中'
  button_Click.textContent = '少々お待ちください'
  start.style.display = 'none';
  quiz();
});

const quiz = () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      const json = jsonData.results;
      class Question{
        constructor(category, difficulty,question,incorrect_answer,correct_answer){
          this.category = category;
          this.difficulty = difficulty;
          this.question = question;
          this.incorrect_answer = incorrect_answer
          this.correct_answer = correct_answer;
        }
        main(){
          welcome.textContent = `問題${num + 1}`
          genre.textContent = `【ジャンル】${this.category}`;
          level.textContent = `【難易度】${this.difficulty}`;

          const quiz_display = this.question
          const double_quotation = /&quot;/gim;
          const first_time_decode = quiz_display.replace(double_quotation, '"');
          const and = /&amp;/gim;
          const second_time_decode = first_time_decode.replace(and, '&');
          const apostrophe = /&#039;/gim;
          const third_time_decode = second_time_decode.replace(apostrophe, "'");
          
          button_Click.textContent = third_time_decode;
          
          new_answer.innerHTML = '';
          
          for(let i = 0; i < this.incorrect_answer.length; i++){
            shuffle.push(this.incorrect_answer[i])
          }
          shuffle.push(this.correct_answer)

          shuffle.forEach(function(){
            const shuffle_length = shuffle.length;
            const shuffle_number = Math.floor(Math.random() * shuffle_length);
            shuffle.push(shuffle[shuffle_number])
            shuffle.splice(shuffle_number, 1);
          });

          let answer_click = this.correct_answer;

          shuffle.forEach(function(value){
            const answerBtn = document.createElement('button')
            new_answer.appendChild(answerBtn);
            answerBtn.innerHTML = value;
            
            answerBtn.addEventListener('click', () => {
              num++
              if(answerBtn.innerHTML === answer_click){
                correct_answer.push(answer_click);
              };
              exit();
            })
          });

          function exit(){
            if(num === 10){
              welcome.textContent = `あなたの正解数は${correct_answer.length}問です`;
              genre.style.display = 'none';
              level.style.display = 'none';
              button_Click.textContent = `再度チャレンジしたい場合は以下をクリック！`;
              new_answer.innerHTML = '';
              const homeButton = document.createElement('button')
              new_answer.appendChild(homeButton);
              homeButton.innerHTML = `ホームに戻る`;

              homeButton.addEventListener('click', () => {
                location.reload();
              });
            }else{
              show();
            };
          }
          }
      }
      const Questions = [];
      json.forEach((jsons) => {
        const Questionadd =  new Question (jsons.category,jsons.difficulty,jsons.question,jsons.incorrect_answers,jsons.correct_answer)
        Questions.push(Questionadd)
      })
      Questions[0].main();
      function show(){
        shuffle.length = 0;
        Questions[num].main(json);
      }   
    })
    .catch(error => {
      console.log(error);
    })
  }