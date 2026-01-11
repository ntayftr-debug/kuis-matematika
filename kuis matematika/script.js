let currentAnswer;
let score = 0;

function generateQuestion() {
    // Menghasilkan angka acak 1-10
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', 'x'];
    const op = operators[Math.floor(Math.random() * operators.length)];

    let questionText = "";

    if (op === '+') {
        questionText = `${num1} + ${num2}`;
        currentAnswer = num1 + num2;
    } else if (op === '-') {
        // Memastikan hasil tidak negatif untuk level SD
        const n1 = Math.max(num1, num2);
        const n2 = Math.min(num1, num2);
        questionText = `${n1} - ${n2}`;
        currentAnswer = n1 - n2;
    } else {
        questionText = `${num1} x ${num2}`;
        currentAnswer = num1 * num2;
    }

    document.getElementById('question').innerText = questionText;
    document.getElementById('feedback').innerText = "";
    document.getElementById('answer').value = "";
    document.getElementById('answer').focus();
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const feedback = document.getElementById('feedback');

    if (userAnswer === currentAnswer) {
        feedback.innerText = "✅ Hebat! Benar!";
        feedback.style.color = "green";
        score += 10;
        document.getElementById('score').innerText = score;
        // Tunggu 1 detik lalu ganti soal otomatis
        setTimeout(generateQuestion, 1200);
    } else {
        feedback.innerText = "❌ Coba lagi ya...";
        feedback.style.color = "red";
    }
}

// Menjalankan soal pertama kali saat halaman dibuka
window.onload = generateQuestion;

// Memungkinkan tekan "Enter" untuk kirim jawaban
document.getElementById('answer').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});