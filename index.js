let userCounter = 0
let comCounter = 0    

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
    
    if (userChoice === computerChoice) {
        output.innerHTML = `<div class="result">draw</div>`
    } else if (userChoice === inputs[0].value && computerChoice === inputs[2].value) {
        output.innerHTML = `<div class="result"> you win</div>`
        userCounter++
    } else if (userChoice === inputs[1].value && computerChoice === inputs[0].value) {
        output.innerHTML = `<div class="result">you win</div>`
        userCounter++
    } else if (userChoice === inputs[2].value && computerChoice === inputs[1].value) {
        output.innerHTML = `<div class="result">you win</div>`
        userCounter++
    } else {
        output.innerHTML = `<div class="result">you lose</div>`
        comCounter++
    }
    
    output.innerHTML += `
        <div class="user">You</div>
        <div class="com">Enemy</div>
        <div class="user-choice">${userChoice}</div>
        <div class="com-choice">${computerChoice}</div>`

    output.innerHTML += `
        <div class="score">${userCounter} ${comCounter}</div>`
})  