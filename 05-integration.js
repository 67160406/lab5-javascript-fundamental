// ============================================
// Activity 5: Integration - Quiz Application
// ============================================
console.log("🎯🎯 === QUIZ APPLICATION === 🎯🎯\n");
// Quiz data
const quizzes = [
  {
    question: "What is 5 + 3?",
    options: ["8", "7", "6", "9"],
    correctAnswer: 0, // Index of correct option
  },
  {
    question: "What is the capital of Thailand?",
    options: ["Phuket", "Bangkok", "Chiang Mai", "Pattaya"],
    correctAnswer: 1,
  },
  {
    question: "What is the largest planet?",
    options: ["Mars", "Saturn", "Jupiter", "Neptune"],
    correctAnswer: 2,
  },
  {
    question: "What is 2^8?",
    options: ["128", "256", "64", "512"],
    correctAnswer: 1,
  },
  {
    question: "Which is NOT a JavaScript data type?",
    options: ["string", "class", "symbol", "boolean"],
    correctAnswer: 1,
  },
];
// Quiz results
let results = [];
// Process each quiz
quizzes.forEach((quiz, index) => {
  const userAnswer = Math.floor(Math.random() * 4); // จําลองการทํา quiz
  const isCorrect = userAnswer === quiz.correctAnswer;
  results.push({
    questionNum: index + 1,
    question: quiz.question,
    userAnswer: quiz.options[userAnswer],
    correctAnswer: quiz.options[quiz.correctAnswer],
    isCorrect: isCorrect,
  });
});
// Display results
console.log("QUIZ RESULTS:");
console.log("─".repeat(60));
results.forEach((result) => {
  const status = result.isCorrect ? "✅ CORRECT" : "❌ WRONG";
  console.log(`Q${result.questionNum}: ${result.question}`);
  console.log(` Your answer: ${result.userAnswer}`);
  if (!result.isCorrect) {
    console.log(` Correct answer: ${result.correctAnswer}`);
  }
  console.log(` ${status}`);
  console.log();
});
// Calculate score
const correctCount = results.filter((r) => r.isCorrect).length;
const score = (correctCount / results.length) * 100;
console.log("─".repeat(60));
console.log(
  `FINAL SCORE: ${correctCount}/${results.length} (${score.toFixed(1)}%)`
);
// Grade assignment
let grade;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log(`GRADE: ${grade}`);
// Feedback
console.log("\nFEEDBACK:");
if (score === 100) {
  console.log("🌟🌟 Perfect score! Excellent work!");
} else if (score >= 80) {
  console.log("👍👍 Great job! Keep practicing.");
} else if (score >= 60) {
  console.log("📚📚 Good effort. Review the material and try again.");
} else {
  console.log("💪💪 Keep practicing. You'll improve!");
}
// Statistics
console.log("\n📊📊 STATISTICS:");
console.log(`Total questions: ${results.length}`);
console.log(`Correct: ${correctCount}`);
console.log(`Incorrect: ${results.length - correctCount}`);
console.log(`Success rate: ${score.toFixed(1)}%`);
// Category breakdown (if applicable)
const byCorrectness = results.reduce(
  (acc, r) => {
    acc[r.isCorrect ? "correct" : "incorrect"]++;
    return acc;
  },
  { correct: 0, incorrect: 0 }
);
console.log("\nAnswer breakdown:");
console.log(` ✅ Correct: ${byCorrectness.correct}`);
console.log(` ❌ Incorrect: ${byCorrectness.incorrect}`);
console.log("\n✅ All activities completed!");
console.log("━".repeat(60));
