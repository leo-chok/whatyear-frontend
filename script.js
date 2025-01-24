fetch('https://whatyear-backend-ten.vercel.app/year')
.then(response => response.json())
.then((data) => {
    console.log(data.now)
    const div = document.querySelector('#year');
    div.textContent = data.year;
})