import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgCyanBright("Welcome to the Dungeon!"));
console.log(chalk.greenBright("--------------------------------"));
console.log(chalk.bgRedBright(" #Skeleton has appeared! #"));
let userHp = 100;
let skeletonHp = 75;
let Assasinhp = 45;
let Warriorhp = 35;
async function getAnswers() {
    const answer = await inquirer.prompt([
        {
            name: "mainquestion",
            type: "list",
            message: "What would you like to do now?",
            choices: ["1. Attack", "2. Drink Health potion", "3. Run!"],
        }
    ]);
    return answer.mainquestion; // Return the selected choice
}
async function main() {
    const selectedAction = await getAnswers();
    if (selectedAction === "1. Attack") {
        console.log("You strike the skeleton for 13 damage. \n  You receive 5 in retaliation !");
        userHp -= 5;
        skeletonHp -= 13;
    }
    console.log(`Your HP: ${userHp}`);
    console.log(`Skeleton's HP: ${skeletonHp}`);
    const selectedAction2 = await getAnswers();
    if (selectedAction2 === "1. Attack") {
        console.log("You strike the skeleton for 33 damage. \n  You receive 19 in retaliation !");
        userHp -= 19;
        skeletonHp -= 33;
        console.log(`Your Hp ${userHp}`);
        console.log(`Skeleton's Hp ${skeletonHp}`);
    }
    const selectedAction3 = await getAnswers();
    if (selectedAction3 === "1. Attack") {
        console.log("You strike the skeleton for 26 damage. \n  You receive 22 in retaliation !");
        userHp -= 22;
        skeletonHp -= 26;
        console.log(`Your Hp : ${userHp}`);
        console.log(`Skeleton's Hp : ${skeletonHp}`);
    }
    //New Enemy attack
    let hp3 = await inquirer.prompt([
        {
            name: "userhpdamage",
            message: chalk.yellowBright(" ------------------------- \n # Skeleton was defeated ! # . \n  You have 54 Hp left  \n ---------------------------"),
        }
    ]);
    let announcement = await inquirer.prompt([
        {
            name: "nextenemy",
            type: "list",
            message: "What would you like to do now ?",
            choices: ["Continue fighting", " Exit dungeon"],
        },
        {
            name: "announcement",
            message: chalk.redBright("You continue on your adventure!  \n  ---------------------------------  \n  # Assassin has appeared ! #  \n Your Hp : 54  \n Assassin's Hp : 45")
        }
    ]);
    let selectedaction4 = await getAnswers();
    if (selectedaction4 === "2. Drink Health potion") {
        console.log("You drink a health potion, Healing yourself for 30. \n You have 2 health potions left.");
        userHp += 30;
        console.log(`Your Hp : ${userHp}`);
        console.log(`Assassin Hp : ${Assasinhp}`);
    }
    let selectedaction5 = await getAnswers();
    if (selectedaction5 === "2. Drink Health potion") {
        console.log("You drink a health potion, Healing yourself for 30. \n You have 0 health potions left.");
        userHp += 30;
        console.log(`Your Hp : ${userHp}`);
        console.log(`Assassin Hp: ${Assasinhp}`);
    }
    let selectedAction6 = await getAnswers();
    if (selectedAction6 === "2. Drink Health potion") {
        console.log("You have no health potions left !  Defeat enemies for a chance to get one! ");
        console.log(`Your Hp : ${userHp}`);
        console.log(`Assassin Hp: ${Assasinhp}`);
    }
    let selectedAction7 = await getAnswers();
    if (selectedAction7 === "3. Run!") {
        console.log("You run away from the Assassin! \n  ------------------------- \n # Assassin has appeared! #");
        Assasinhp -= 20;
        console.log(`Your Hp : ${userHp}`);
        console.log(` Assassin's Hp : ${Assasinhp}`);
    }
    let selectedAction8 = await getAnswers();
    if (selectedAction8 === "1. Attack") {
        console.log("You strike the assassin for 17 damage. \n You recieve 9 in retaliation !");
        userHp -= 9;
        Assasinhp -= 17;
        console.log(`Your Hp:  ${userHp}`);
        console.log(` Assassin's Hp : ${Assasinhp}`);
    }
    let selectedAction9 = await getAnswers();
    if (selectedAction9 === "1. Attack") {
        console.log((chalk.yellowBright("You strike the assassin for 28 damage. \n You recieve 4 in retaliation ! \n  ------------------------- \n # Assasin was defeated! #   \n -------------------------")));
        userHp -= 4;
        Assasinhp -= 28;
        console.log(`You have now  ${userHp} left `);
    }
    let announcement2 = await inquirer.prompt([
        {
            name: "nextenemy",
            type: "list",
            message: "What would you like to do now ?",
            choices: ["Continue fighting", " Exit dungeon"],
        },
        {
            name: "announcement",
            message: chalk.redBright("You continue on your adventure!  \n  ---------------------------------  \n  # Warrior has appeared ! # "),
        },
    ]);
    //newenemy
    let selectedAction10 = await getAnswers();
    if (selectedAction10 === "1. Attack") {
        console.log("You strike the Warrior for 5 damage. \n You recieve 24 in retaliation !");
    }
    userHp -= 24;
    Warriorhp -= 5;
    console.log(`Your Hp : ${userHp}`);
    console.log(`Warrior Hp : ${Warriorhp}`);
    let selectedAction11 = await getAnswers();
    if (selectedAction11 === "1. Attack") {
        console.log("You strike the Warrior for 27 damage. \n You recieve 27 in retaliation ! \n ---------------------------  \n # Warrior was defeated! #  \n ----------------------");
        userHp -= 27;
        Warriorhp -= 27;
        console.log(`Your Hp : ${userHp}`);
        console.log(`Warrior's Hp : ${Warriorhp}`);
        console.log(chalk.yellowBright(" # You have taken too much damage, you are weak to go on ! #  \n # You limp out of dungeon , weak from battle  #! \n ###########################  \n ! Thanks from playing ! \n ########################### "));
    }
}
main();
