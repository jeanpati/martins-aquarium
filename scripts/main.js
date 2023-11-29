import { getFish } from './database.js'
import { getTips } from './database.js'
import { getLocations } from './database.js'


// Import the FishList function from the correct module
import { fishList } from './fish/fishList.js'
import { tipList } from './tips/tipList.js'
import { locationList } from './locations/locationList.js'


/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".fishDisplay")
const locationHTMLElement = document.querySelector(".locationDisplay")
const tipHTMLElement = document.querySelector(".tipDisplay")


parentHTMLElement.innerHTML = fishList()
tipHTMLElement.innerHTML = tipList()
locationHTMLElement.innerHTML = locationList()



const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}


const allTips = getTips()

for (const tip of allTips) {
    console.log(tip)
}

const allLocations = getLocations()

for (const location of allLocations) {
    console.log(location)
}