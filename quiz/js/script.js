const question= document.getElementById("question")
const questions = [
    {
      quest: "What is the capital of France?",
      opt: ["Paris", "Berlin", "London", "Madrid"],
      correct: "Paris"
    },
    {
      quest: "Which planet is known as the Red Planet?",
      opt: ["Earth", "Mars", "Jupiter", "Venus"],
      correct: "Mars"
    },
    {
      quest: "What is the largest mammal on Earth?",
      opt: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correct: "Blue Whale"
    }
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    question.textContent = currentQuestion.quest;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    currentQuestion.opt.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => selectOption(option);
      optionsContainer.appendChild(button);
    });
  }

  function selectOption(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.correct) {
      score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }

  function displayResult() {
    const resultContainer = document.getElementById("result");
    resultContainer.textContent = `Your score: ${score} out of ${questions.length}`;
  }

  // Initial display
  displayQuestion();

  function checkAnswer() {
    const selectedOption = document.querySelector(".options button:active").textContent;
    selectOption(selectedOption);
  }