fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');

        jokeElement.innerHTML = jokeText;
    })

/*
Some info which we use to get the data:--
here fetch is the api which is used to fetch the data from the server

In manifest.json:-

We use this to get the extenxion in our chrome

*/