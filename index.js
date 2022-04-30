//Start the search for Pickle Rick
rickAndMorty();

//Gets a character
async function getCharacters(indexCharacter) {
    let character = await fetch(
        `https://rickandmortyapi.com/api/character/${indexCharacter}`
    );
    //Gets the data of characters variable as text
    let data = await character.text();
    //Converts to JSON and returns the result
    return JSON.parse(data);
}

// Get the total character count from API request
async function getCharacterCount() {
    let response = await fetch("https://rickandmortyapi.com/api/character");

    //Gets the data of response variable as text
    let data = await response.text();

    //Converts to JSON and returns the result
    return JSON.parse(data);
}

async function rickAndMorty() {

    //Get the character count data
    var rickAndMortyCharacters = await getCharacterCount();
    
    // Get the characher number as a num
    var characterNumber = rickAndMortyCharacters['info']['count']

    // initialize pickle rick
    var foundPickle = 'a';

    // Loop through all characters and search for pickle rick by name
    for (let index = 1; index <= characterNumber; index++) {
        // Get character by current index
        let character = await getCharacters(index);
        // Get character name from json object
        let characterName = character['name'];

        // Match if character is Pickle Rick
        if (characterName == "Pickle Rick") {
            // Assign character to the initialized pickle variable
            foundPickle = character;
            // Exit the loop
            break;
        }
    }

    // Check if Pickle Rick was found in the loop
    if (foundPickle != 'a') {
        //Show image in index.html
        var image = foundPickle['image'];
        console.log(foundPickle);
        document.getElementById('pickleRick').innerHTML = `<img  src="${image}" alt="Pickle Rick" width="20%" height="auto">`;
        var name = foundPickle['name'];
        document.getElementById('nameP').innerHTML = `<p> ${name}</p>`;
        var type = foundPickle['type'];
        document.getElementById('type').innerHTML = `<p> Type:${type}</p>`;
        var gender = foundPickle['gender'];
        document.getElementById('gender').innerHTML = `<p> Gender:${gender}</p>`;
        var status = foundPickle['status'];
        document.getElementById('status').innerHTML = `<p> Status:${status}</p>`;
        var origin = foundPickle['origin']['name'];
        document.getElementById('origin').innerHTML = `<p> Origin:${origin}</p>`;
        
    }

}