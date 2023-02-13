let userCounter = 0;
let comCounter = 0;

while (true) {
    let userChoice = prompt("Rock, Paper or Scissor?");
    const choices = ["rock", "paper", "scissor"];
    
    if (!choices.includes(userChoice)) {
        console.log("Invalid option. Try again.");
        continue;
    }

    let userQuit = ["q", "yes", "no", "Yes", "No"];

    if (userChoice === "q") {
        userQuit = prompt("Do you really quit? Yes or No:");
        if (userQuit === "Yes" || userQuit === "yes") {
            console.log("Exiting the game...");
            break;
        }

        if (userQuit === "No" && userQuit === "no") {
            console.log("Continuing the game...");
            continue;
        }
    }

    let randomIndex = Math.floor(Math.random() * choices.length);
    let comChoice = choices[randomIndex];
    
    if (userChoice === comChoice) {
        console.log("draw");
    }
    if (userChoice === "rock" && comChoice === "scissor") {
        console.log("you win");
        userCounter++;
    } else if (userChoice === "paper" && comChoice === "rock") {
        console.log("you win");
        userCounter++;
    } else if (userChoice === "scissor" && comChoice === "paper") {
        console.log("you win");
        userCounter++;
    } else {
        console.log("you lose");
        comCounter++;
    }

    console.log("you - enemy\n" + userCounter + "\t" + comCounter);
}