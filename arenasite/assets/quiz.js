const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const startTitle = document.getElementById('start-title')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const questionImage = document.getElementById('question-image')
const answerButtonsElement = document.getElementById('answer-buttons')
const resultButton = document.getElementById('result-btn')

let questionsList, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    startTitle.classList.add('hide')
    questionsList = questions
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(questionsList[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    const img = document.createElement('img')
    img.src = question.image
    img.classList.add('questionImage')
    questionImage.appendChild(img);
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (questionImage.firstChild) {
        questionImage.removeChild(questionImage.firstChild)
    }
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (questionsList.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        resultButton.innerText = 'Show Your Results'
        resultButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: '1. What months are spring in New York?',
        image: '../assets/QUESTION\ 1.jpeg',
        answers: [
            { text: 'a: Early of April - Early of June', correct: true },
            { text: 'b: Middle of March - Middle of June', correct: true },
            { text: 'c: Early of April - Middle of June', correct: true },
            { text: 'd: End of March - End of June', correct: true }
        ]
    },
    {
        question: '2. Do you have a big black puffer jacket?',
        image: '../assets/QUESTION\ 2.jpeg',
        answers: [
            { text: 'a: Yes', correct: true },
            { text: 'b: No', correct: true },
            { text: 'c: Puffer jackets are ugly.', correct: true },
        ]
    },
    {
        question: '3. How do you feel about wearing open toe shoes in the city?',
        image: '../assets/QUESTION\ 3.png',
        answers: [
            { text: 'a: ABSOLUTELY NOT.', correct: true },
            { text: 'b: I don’t mind it. Sounds nice in the summer!', correct: true },
            { text: 'c: What’s there to hate about?', correct: true },
        ]
    },
    {
        question: '4. You’re in the middle of a cold winter night in NYC. It’s a blizzard outside but you NEED groceries. It’s also extremely likely for you to bump into your hot ex who lives a block away. What do you wear?',
        image: '../assets/QUESTION\ 4.jpeg',
        answers: [
            { text: 'a: No questions asked. I’m picking out my best outfit..', correct: true },
            { text: 'b: My ex? Ew. Actually i’ll maybe just throw on something nice but not too much.. You know just in case..', correct: true },
            { text: 'c: I honestly don’t have the time to impress anyone. I’m going to throw on 10 layers, stay cozy and mind my own business', correct: true },
        ]
    },
    {
        question: '5. How often do you check the weather?',
        image: '../assets/QUESTION\ 5.png',
        answers: [
            { text: 'a: Every time before I go outside', correct: true },
            { text: 'b: I usually just look out the window', correct: true },
            { text: 'c: Rarely. I like to live dangerously', correct: true },
        ]
    },
    {
        question: '6. When is the best time to visit NYC?',
        image: '../assets/QUESTION\ 6.jpeg',
        answers: [
            { text: 'a: Winter', correct: true },
            { text: 'b: Spring', correct: true },
            { text: 'c: Summer', correct: true },
            { text: 'd: Fall', correct: true },
        ]
    },
    {
        question: '7. Which drink looks the best?',
        image: '../assets/QUESTION\ 7.png',
        answers: [
            { text: 'a: A', correct: true },
            { text: 'b: B', correct: true },
            { text: 'c: C', correct: true },
            { text: 'd: D', correct: true },
        ]
    },
    {
        question: '8. When checking the weather, do you ever pay attention to the feels-like temperature?',
        image: '../assets/QUESTION\ 8.jpeg',
        answers: [
            { text: 'a: Duh..', correct: true },
            { text: 'b: No', correct: true },
            { text: 'c: What is that?', correct: true },
        ]
    },
    {
        question: '9. Do you always carry a pair of sunglasses with you?',
        image: '../assets/QUESTION\ 9.png',
        answers: [
            { text: 'a: Of course. I can’t risk getting wrinkles even when it’s cloudy out', correct: true },
            { text: 'b: Only in the summer', correct: true },
            { text: 'c: No', correct: true },
        ]
    },
]
