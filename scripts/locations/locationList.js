import { getLocations } from '../database.js'

export const locationList = () => {
    // Invoke the function that you imported from the database module
    const locations = getLocations() 


    // Start building a string filled with HTML syntax
    let htmlString = '<article class="locationList"><h3 id="locations__h3">Harvest Locations</h3>'

    // Create HTML representations of each fish here
    for (const location of locations) {

        // Why is there a backtick used for this string? it is string interpolation so it doesnt have to use the concatenation operator which can be hard to read
        htmlString += `<ul class="location card">
            <li class="location">Body of Water: ${location.bodyOfWater}
            <br>City: ${location.city}
            <br>Country: ${location.country}
            </li>
        
        </ul>
`
    }
    htmlString += `</article>`

    return htmlString
}