document.addEventListener('DOMContentLoaded', generateQuote);

const quotes = [
    { author: 'Mahatma Gandhi', quote: 'You must be the change you wish to see in the world.' },
    { author: 'Mother Teresa', quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.' },
    { author: 'Franklin D. Roosevelt', quote: 'The only thing we have to fear is fear itself.'},
    { author: 'Martin Luther King Jr.', quote: 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.'},
    { author: 'Eleanor Roosevelt', quote: 'Do one thing every day that scares you.'},
    { author: 'Benjamin Franklin', quote: 'Well done is better than well said.'},
    { author: 'Helen Keller', quote: 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.'},
    { author: 'Aristotle', quote: 'It is during our darkest moments that we must focus to see the light.'}
];

function generateQuote() {
    const quoteContainer = document.getElementById('quoteContainer');
    const quoteText = document.getElementById('quoteText');
    const quoteAuthor = document.getElementById('quoteAuthor');
    const loader = document.getElementById('loader');
    const dateElement = document.getElementById('date');

    loader.style.display = 'block';

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        quoteText.textContent = randomQuote.quote;
        quoteAuthor.textContent = "-"+randomQuote.author;

        loader.style.display = 'none';
    }, 1000);

    const currentDate = new Date();
    dateElement.textContent = `Generated on: ${currentDate.toDateString()}`;
}
