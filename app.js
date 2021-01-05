// INIT GITHUB FROM GITHUB.JS
const github = new Github;

// SEARCH INPUT
const searchUser = document.getElementById('searchUser');

// SEARCH INPUT EVENT LISTENER
searchUser.addEventListener('keyup', (e) => {
    // Get Input Text
    const userText = e.target.value;

    if (userText !== '') {
        // Make http call
        github.getUser(userText)
            .then(data => {
                console.log(data)
            })
    }
})