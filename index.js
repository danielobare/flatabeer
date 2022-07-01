function commWithServer() {
    fetch('http://localhost:3000/posts')

        .then(result => result.text())
        .then(text => {
            let main = document.getElementById('comm-with-server')
            main.innerHTML = text;
            console.log(text)
        });
}


document.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementById('button1');
    btn.addEventListener('click', () => {
        commWithServer();
    })
})

//Code Challenge Title display using DOM Manipulation 2

function domMan() {
    document.getElementById("title1").innerHTML =
        "The title of this code challenge is: " + document.title;
    console.log("The title of this code challenge is: " + document.title);
}

domMan()