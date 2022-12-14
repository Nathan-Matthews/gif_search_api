const img = document.querySelector('img');
const generateButton = document.querySelectorAll("button");

generateButton.forEach(item => {
    item.addEventListener('click', getGif)
});

getGif();

async function getGif() {
    const q = document.getElementById('query');
    let searchTerm = q.value;
    console.log(query.value);
    // If no search term is entered, use "nothing"
    if(searchTerm == ""){
        searchTerm = "Nothing";
    }
    img.src = "";
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=KEY_GOES_HERE=' + searchTerm, {mode: 'cors'})
    
    const imgData = await response.json()
    img.src = imgData.data.images.original.url;
    // .catch((error) => {
    //         console.error("Error:", error)
    // });
};

let input = document.getElementById("query");

// Keeps the page from refreshing on "Enter"
// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("myBtn").click();
    }
  }); 


