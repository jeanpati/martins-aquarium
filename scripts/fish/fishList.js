// Import the function that returns a copy of the fish array
// import { getFish } from "../database.js"
import { database } from "../database.js"

export const mostHolyFish = (fishies) => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fishes of fishies) {
        if (fishes.length % 3 === 0) {
            holyFish.push(fishes)
            
        }
    }

    return holyFish
}
const holiest = mostHolyFish(database.fish);
console.log(holiest)


export const soldierFish = (fishies) => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (const fishes of fishies) {
        if (fishes.length % 5 === 0 && fishes.length%3 !== 0) {
            soldiers.push(fishes)
        }
    }

    return soldiers
}
const holySoldiers = soldierFish(database.fish);
console.log(holySoldiers)


export const nonHolyFish = (fishies) => {
    // Any fish not a multiple of 3 or 5
    const regularFish =[]
    for (const fishes of fishies) {
        if (fishes.length % 5 !== 0 && fishes.length % 3 !== 0) {
            regularFish.push(fishes)
        }
    }
    return regularFish
}
const veryRegular = nonHolyFish(database.fish);
console.log(veryRegular)





export const fishList = () => {
    // Invoke the function that you imported from the database module
    // const fishes = getFish()   we are using a new array instead of the one directly from database
    const newOrder = [...holiest,...holySoldiers,...veryRegular]

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTML representations of each fish here
    for (const fish of newOrder) {

        // Why is there a backtick used for this string? it is string interpolation so it doesnt have to use the concatenation operator which can be hard to read
        htmlString += `<section class="fish-card">
            <div><img  class="fish__image" src="${fish.image}" /></div>
            <div class="fish__name">Name: ${fish.name}</div>
            <button class="btn" onclick="hide()">Details</button>
            <div class="fish__species">Species: ${fish.species}</div>
            <div class="fish__length">Length: ${fish.length}</div>
            <div class="fish__location">Harvest Location: ${fish.location}</div>
            <div class="fish__diet">Diet: ${fish.diet}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}



