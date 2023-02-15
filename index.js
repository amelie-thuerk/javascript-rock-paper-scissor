// "use strict"

// let userCounter = 0
// let comCounter = 0

// // use a boolean or remove this line
// let play = 1

// while (play) {
//     let userChoice = prompt("Rock, Paper or Scissor?")
    
//     if (userChoice === "q") {
//         let userQuit = prompt("Do you really want to quit? Yes or No:")
//         if (userQuit.toLowerCase() === "yes") {
//             console.log("Exiting the game...")
//             break
//         }
        
//         if (userQuit.toLowerCase() === "no") {
//             console.log("Continuing the game...")
//             continue
//         }
//     }
    
//     const choices = ["rock", "paper", "scissor"]
    
//     if (!choices.includes(userChoice) || userChoice === "q") {
//         console.log("Invalid option. Try again.")
//         continue
//     }

//     console.log("you: " + userChoice);


//     // instead of having the user type yes or no, use the confirm() function whhcih works similar to prompt
//     let userQuit = ["q", "yes", "no", "Yes", "No"]
    
    
//     let randomIndex = Math.floor(Math.random() * choices.length);
//     let comChoice = choices[randomIndex]

//     console.log("enemy: " + comChoice)
    
//     if (userChoice === comChoice) {
//         console.log("draw")
//     } else if (userChoice === "rock" && comChoice === "scissor") {
//         console.log("you win")
//         userCounter++
//     } else if (userChoice === "paper" && comChoice === "rock") {
//         console.log("you win")
//         userCounter++
//     } else if (userChoice === "scissor" && comChoice === "paper") {
//         console.log("you win")
//         userCounter++
//     } else {
//         console.log("you lose")
//         comCounter++
//     }
    
//     console.log("you - enemy\n" + " " + userCounter + "      " + comCounter)
// }

