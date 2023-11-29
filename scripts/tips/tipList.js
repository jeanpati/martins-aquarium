import { getTips } from '../database.js'

export const tipList = () => {
    // Invoke the function that you imported from the database module
    const allTips = getTips() 


    // Start building a string filled with HTML syntax
    let htmlString = '<article class="tipList"><h3 id="locations__h3">Fish Care</h3>'

    // Create HTML representations of each fish here
    for (const tip of allTips) {

        // Why is there a backtick used for this string? it is string interpolation so it doesnt have to use the concatenation operator which can be hard to read
        htmlString += `<ul class="tip-card">
            <li class="tip__line">${tip.line}</li>
        </ul>
`
    }
    htmlString += `</article>`

    return htmlString
}