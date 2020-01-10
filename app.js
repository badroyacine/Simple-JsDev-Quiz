const correctAnswers = ['C', 'C', 'A', 'B', 'D', 'B', 'B', 'A', 'B', 'C'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  let score = 0;
  const userAnswers = [
    form.q1.value, 
    form.q2.value, 
    form.q3.value, 
    form.q4.value, 
    form.q5.value, 
    form.q6.value, 
    form.q7.value, 
    form.q8.value,
    form.q9.value,
    form.q10.value
  ];
  
  // check the answers
  userAnswers.forEach((answer, index) => {
    answer === correctAnswers[index] ? score += 10 : score
  });

  // go to the top and show the result
  scrollTo(0,0);
  result.classList.remove('d-none');

  let output = 0;

  // create the simple animation 
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    output === score ? clearInterval(timer) : output++;
  },10);

})
