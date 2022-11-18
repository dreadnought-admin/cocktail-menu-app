const url = ("https://api.punkapi.com/v2/beers/")
let currentBeer;
let beerName = document.querySelector("#beer-pop");

fetch(url)
.then(r => r.json())
.then(json => {
    //renderImages(json[5]);
    beerImage(json);
    renderFeature(json[11]);
    renderLogo();
    favCounter();
    comments();
});


function renderLogo() {
    let logo = document.getElementById("logo");
    let siteLogo = document.createElement("img");
    siteLogo.id="site-logo";
    siteLogo.src="/images/hehe_thumbnail.png";
    logo.appendChild(siteLogo);
}

function beerImage(beer) {
    let beerData = beer.filter(beer => beer.id < 4)
    beerData.forEach(beer => {
        let beerList = document.querySelector("#static-beer-list")
        let favList = document.createElement("li")
        let beerImage = document.createElement("img")
        beerImage.src = beer.image_url;
        beerList.appendChild(favList);
        favList.appendChild(beerImage);

        beerImage.addEventListener("mouseover", e => {
            beerDetails(beer)
        })
    });
}

/*
function renderImages(beer) {
    Object.keys(beer).forEach(function(key) {
        let staticFavs = document.querySelector("#static-beer-list");
        let staticList = document.createElement("li");
        staticFavs.appendChild(staticList);
        let staticImages = document.createElement("img");
        staticImages.src = beer.image_url;
        staticList.appendChild(staticImages);     
    });
}
*/

function renderFeature(beer) {
    Object.keys(beer).forEach(function(key) {
        let featuredBeerImg = document.querySelector("#beer-display-image");
        let pairingOne = document.querySelector("#pairing-one");
        let pairingTwo = document.querySelector("#pairing-two");
        let pairingThree = document.querySelector("#pairing-three")
        let brewersInstructions = document.querySelector("#instructions-text");
        featuredBeerImg.src = beer.image_url;
        pairingOne.textContent = beer.food_pairing[0]
        pairingTwo.textContent = beer.food_pairing[1];
        pairingThree.textContent = beer.food_pairing[2];
        brewersInstructions.textContent = beer.description;
    
    });
}

///

/* configure this to appear in the div block created. use as normal function, rather than invoking internally

function beerDetails(beer) {
    let beerName = document.querySelector("#popup");
    beerName.textContent = `${beer.name}, ${beer.tagline} First brewed: ${beer.first_brewed}, ${beer.description}, ABV:${beer.abv}`;
    
    beerName.onmouseover = function () {
        document.getElementById("popup").style.display = "block";
    }
    beerName.onmouseout = function () {
        document.getElementById("popup").style.display = "none";
    }
}
*/
  


function favCounter() {
    let initFavCount = 0;
    let favButton = document.querySelector("#beer-favorites-btn");
    
    favButton.addEventListener('click', (e) => {
        e.preventDefault();

        let favCount = initFavCount++;
        favButton.textContent = `Favorited by ${favCount} People!`;
    });
}


function comments() {
    let newComment = document.querySelector("#comment-form");
    
    newComment.addEventListener('submit', (e) => {
        e.preventDefault();

        const newComment = e.target["user-comment"].value;
        const commentList = document.createElement("ul");

        const commentSubmit = document.createElement("p");
        const commentSection = document.querySelector("#comments-section")

        commentSubmit.textContent = newComment;
        commentSection.appendChild(commentSubmit);

    });
}





    