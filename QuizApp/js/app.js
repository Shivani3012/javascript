const questions =[
    {
        'que' : 'Which of the following is the markup language?',
        'a' : 'HTML',
        'b' : 'CSS',
        'c' : 'Javascript',
        'd' : 'PHP',
        'correct' : 'a'
    },
    {
        'que' : 'What does CSS stands for?',
        'a' : 'Call back Stykle sheet',
        'b' : 'color selector style',
        'c' : 'Cascading Style Sheet',
        'd' : 'PHP',
        'correct' : 'c'
    },
    {
        'que' : 'Which year JS launched?',
        'a' : '1999',
        'b' : '1995',
        'c' : '1993',
        'd' : '2000',
        'correct' : 'b'
    }
]

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const queBox = document.getElementById('queBox');
const optInput = document.querySelectorAll(".options");

const submitQuiz = () => {
    const ans = getAnswer();
    if (ans == questions.correct ){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return ;
}

const loadQuestion = () => {
    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    queBox.innerText = `${index+1}) ${data.que}`;
    optInput[0].nextElementSibling.innerText = data.a;
    optInput[1].nextElementSibling.innerText = data.b;
    optInput[2].nextElementSibling.innerText = data.c;
    optInput[3].nextElementSibling.innerText = data.d;
}





const getAnswer = () => {
    let answer;
    optInput.forEach(
        (input) => {
            if(input.checked){
                //console.log('yes')
               answer =  input.value ;
                //console.log(input.value);
            }
        }
    )
    return answer;
}

const reset = () =>{
    optInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById('box').innerHTML = `
        <h3> Thankyou for playing the quiz </h3>
        <h2>${right}/${total} are correct</h2>`
}
//initial call
loadQuestion();