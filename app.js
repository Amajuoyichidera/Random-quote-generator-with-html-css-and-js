document.addEventListener('DOMContentLoaded', function () {
    const quote = document.getElementById('quote');
    const newQuote = document.getElementById('new-quote');
    const author = document.getElementById('author');


    async function fetchAndDisplayQuote() {
        try {
            const responds = await fetch('https://api.quotable.io/random');
            const data = await responds.json();
            quote.textContent = `${data.content}`;
            author.textContent = `${data.author ? data.author : 'Unknown'}`
        } catch (error) {
            console.error(error);
            quote.textContent = 'Error Fetching Quotes';
            author.textContent = '';
        }
    }

    newQuote.addEventListener('click', function() {
        fetchAndDisplayQuote();
    })

    setInterval(fetchAndDisplayQuote, 5000);
    
    fetchAndDisplayQuote()


})



