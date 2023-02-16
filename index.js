const choices = ["Rock", "Paper", "Scissor"]
const output = document.getElementsByClassName("game-output")[0]
const form = document.getElementById("game-form")
form.addEventListener("submit", function (event) {
    event.preventDefault()

    let userChoice
    const inputs = document.getElementsByName("option")
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            userChoice = inputs[i].value
        }
    }

    if (userChoice === undefined) {
        console.error("Select an input before submitting.")
        return
    }

    const computerChoice = choices[Math.floor(Math.random() * choices.length)]

    // Check for winner and display user and computer score

    output.innerHTML = `
    <div>User: ${userChoice}</div>
    <div>Computer: ${computerChoice}</div>`
})