const regUrl = `https://it-blog-posts.herokuapp.com/api/people`;
const logUrl = `https://it-blog-posts.herokuapp.com/api/people/login`;

const regSub = document.getElementById("regSub");
const regError = document.getElementById("regError");
const logSub = document.getElementById("logSub");
const logError = document.getElementById("logError");

function registration() {
    const usernameInp = document.getElementById("usernameInp").value;
    const lastnameInp = document.getElementById("lastnameInp").value;
    const emailInp = document.getElementById("emailInp").value;
    const passwordInp = document.getElementById("passwordInp").value;
    let data = {
        "lastname": `${usernameInp}`,
        "username": `${lastnameInp}`,
        "password": `${emailInp}`,
        "email": `${passwordInp}`
    }
    if(usernameInp && lastnameInp && emailInp && passwordInp) {
        fetch(regUrl, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            if(!res.ok) {
                regError.innerHTML = "<i class='fa fa-times-circle'></i> Please make sure the information you entered is correct."
                regError.style.display = "unset";

                throw Error(res.statusText);
            }           
            else window.open("login.html", "_self");
            return res;
        })
        .catch(console.log)
    }
    else {
        console.log(regError.innerHTML);
        regError.innerHTML = "<i class='fa fa-times-circle'></i> Please enter all required fields.";
        regError.style.display = "unset";
    } 
}

function login() {
    const logEmail = document.getElementById("logEmail").value;
    const logPassword = document.getElementById("logPassword").value;
    
    if(logEmail && logPassword) {
        fetch(logUrl, {
            method: "POST",
            body: JSON.stringify({"password": `${logPassword}`,"email": `${logEmail}`}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            if(!res.ok) {
                logError.innerHTML = `<i class='fa fa-times-circle'></i> Failed to log in. Wrong email or password`;
                logError.style.display = "unset";
                throw Error(res.statusText);
            }
            else window.open("workspace.html", "_self");
            return res;
        })
        // .then(data => {
        //     fetch(`https://it-blog-posts.herokuapp.com/api/meetups?access_token=${data.id}`)
        // })
        .catch(console.log)
    }
    else {
        logError.innerHTML = "<i class='fa fa-times-circle'></i> Please enter your email and password.";
        logError.style.display = "unset";
    }
}

if(regSub) {
    regSub.addEventListener("click", registration)
}

if(logSub) {
    logSub.addEventListener("click", login)
}
