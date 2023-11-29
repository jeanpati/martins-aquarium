/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
export const database = {
    fish: [
        {    
            name: "Wonka",
            species: "wackyfish",
            length: 40,
            diet: "bugs",
            location: "Percy Priest Lake - Nashville, TN",
            image: "https://3.bp.blogspot.com/-2sY9YQiSMjM/XCwQ8EaNKXI/AAAAAAAANkE/Q6z3OUdjrmwDoYW7vIzzX_-vWh61t5WggCLcBGAs/s1600/pufferfish.png"
            
        },
        {
            name: "Marlon",
            species: "mudfish",
            length: 25,
            diet: "bugs",
            location: "Percy Priest Lake - Nashville, TN",
            image: "https://i.pinimg.com/originals/bf/6e/0e/bf6e0e2efe870e83e231db1b2146c669.jpg"
        },
        {
            name: "Droopy",
            species: "dingusfish",
            length: 30,
            diet: "small fish",
            location: "Percy Priest Lake - Nashville, TN",
            image: "https://eskipaper.com/images/cute-fish-wallpaper-1.jpg"
        },
        {
            name: "Butter",
            species: "milkfish",
            length: 3,
            diet: "algae",
            location: "Percy Priest Lake - Nashville, TN",
            image: "http://www.fishwallpapers.com/wallpapers/milkfish-in-ocean-pic.jpg"
        },
        {
            name: "Potato",
            species: "mashfish",
            length: 300,
            diet: "fries",
            location: "Percy Priest Lake - Nashville, TN",
            image: "https://africageographic.com/wp-content/uploads/2016/06/bass-6-2.jpg"
        },
        {
            name: "Bork",
            species: "porkfish",
            length: 100,
            diet: "vegetables",
            location: "Percy Priest Lake - Nashville, TN",
            image: "https://www.theonlinezoo.com/img/16/toz16769l.jpg"
        },
        {
            name: "Duke",
            species: "kingfish",
            length: 7,
            diet: "caviar",
            location: "Percy Priest Lake - Nashville, TN",
            image: "https://i.pinimg.com/736x/b1/14/cb/b114cb88a0c042b8f87fb8596f516147--marine-aquarium-aquarium-saltwater.jpg"
        },
        {
            name: "Kewpie",
            species: "mayofish",
            length: 13,
            diet: "mayonnaise",
            location: "Percy Priest Lake - Nashville, TN",
            image: "https://i.pinimg.com/originals/4c/a5/1d/4ca51d49f3911c9d5fc9a2073598955b.png"
        }
    ],
    tips: [
        {    
            line: "Clean the tank"
        },
        {
            line: "Install heaters"
        },
        {
            line: "Salt the water"
        },
        {
            line: "Lots of butter"
        },
        {
            line: "Separate the mean fish"
        },
        {
            line: "Praise the Holy Fish Jutz'kar!!"
        }
    ],
    locations: [
        {    
            bodyOfWater: "Percy Priest Lake",
            city: "Nashville, TN",
            country: "USA"
        },
        {    
            bodyOfWater: "creek behind wendy's",
            city: "Knoxville, TN",
            country: "USA"
        },
        {    
            bodyOfWater: "Hudson River",
            city: "New York City, New York",
            country: "USA"
        },
        {    
            bodyOfWater: "Lake Ontario",
            city: "Toronto, Ontario",
            country: "Canada"
        },
    ]
}



export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTips = () => {
    return database.tips.map(tips => ({...tips}))
}

export const getLocations = () => {
    return database.locations.map(locations => ({...locations}))
}