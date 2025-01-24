fetch('http://localhost:3000/year')
.then(response => response.json())
.then((data) => {
    console.log(data.now)
    const div = document.querySelector('#year');
    div.textContent = data.now;
})