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
        result = "draw"
    } else if (userChoice === inputs[0].value && computerChoice === choices[2]
        || userChoice === inputs[1].value && computerChoice === choices[0]
        || userChoice === inputs[2].value && computerChoice === choices[1]) {
        result = "you win"
        userCounter++
    } else {
        result = "you lose"
        comCounter++
    }
    
    output.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th colspan="2">${result}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>You</td>
                    <td>Enemy</td>
                </tr>
                <tr>
                    <td>${userChoice}</td>
                    <td>${computerChoice}</td>
                </tr>
                <tr>
                    <td>${userCounter}</td>
                    <td>${comCounter}</td>
                </tr>
            </tbody>
        </table>`;
})  