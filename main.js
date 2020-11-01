'use strict'
const start = document.getElementById('start');
const welcome = document.getElementById('welcome')
const button_Click = document.getElementById('button_click')
const contents = document.getElementById('contents');
const genre = document.getElementById('genre');
const level = document.getElementById('level');
const new_answer = document.getElementById('new_answer');
let num = 0;
const correctAnswer =[];

start.addEventListener('click', () => {
  welcome.textContent = '取得中'
  button_Click.textContent = '少々お待ちください'
  start.style.display = 'none';
  quiz();
});

const quiz = () => {
  fetch('https://opentdb.com/api.php?amount=11')
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      const json = jsonData.results
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
          button_Click.textContent = `${this.question}`; 
          new_answer.innerHTML = '';
          
          const correctAnswerBtn = document.createElement('button')
          new_answer.appendChild(correctAnswerBtn);
          correctAnswerBtn.innerHTML = this.correct_answer
          
          correctAnswerBtn.addEventListener('click', () =>{
            correctAnswer.push(this.correct_answer);
            num++
            show();
          })
          for(let i = 0; i < this.incorrect_answer.length; i++){
            const inCorrectAnswerBtn = document.createElement('button')
            new_answer.appendChild(inCorrectAnswerBtn);
            inCorrectAnswerBtn.innerHTML = this.incorrect_answer[i]
            
            inCorrectAnswerBtn.addEventListener('click', () => {
              num++
              show();
            })
            }
            if(num === 10){
              welcome.textContent = `あなたの正解数は${correctAnswer.length}問です`;
              genre.style.display = 'none';
              level.style.display = 'none';
              button_Click.textContent = `再度チャレンジしたい場合は以下をクリック！`;
              new_answer.innerHTML = '';
              const homeButton = document.createElement('button')
              new_answer.appendChild(homeButton);
              homeButton.innerHTML = `ホームに戻る`;

              homeButton.addEventListener('click', () => {
                location.reload();
              })
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
        Questions[num].main(json);
      }   
    })
    .catch(error => {
      console.log(error);
    })
  }