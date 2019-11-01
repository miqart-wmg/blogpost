const regUrl = `https://it-blog-posts.herokuapp.com/api/people`;
const logUrl = `https://it-blog-posts.herokuapp.com/api/people/login`;

const regSub = document.getElementById("regSub");
const logSub = document.getElementById("logSub");

function registration() {
    const usernameInp = document.getElementById("usernameInp");
    const lastnameInp = document.getElementById("lastnameInp");
    const emailInp = document.getElementById("emailInp");
    const passwordInp = document.getElementById("passwordInp");
    let data = {
        "lastname": `${usernameInp.value}`,
        "username": `${lastnameInp.value}`,
        "password": `${emailInp.value}`,
        "email": `${passwordInp.value}`
    }
    fetch(regUrl, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(() => window.open("login.html", "_self"))
    .catch(error => console.log(error))
}

function login() {
    const logEmail = document.getElementById("logEmail");
    const logPassword = document.getElementById("logPassword");
    let data = {
        "password": `${logPassword.value}`,
        "email": `${logEmail.value}`
    };
    fetch(logUrl, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    // .then(data => {
    //    fetch(`https://it-blog-posts.herokuapp.com/api/meetups?access_token=${data.id}`)
    // })
    .then(() => window.open("workspace.html", "_self"))
    .catch(error => alert(error))
}

if(regSub) {
    regSub.addEventListener("click", registration)
}

if(logSub) {
    logSub.addEventListener("click", login)
}
