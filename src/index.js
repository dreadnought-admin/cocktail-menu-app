fetch("http://localhost:3000/beers")
    .then(r => r.json())
    .then(json => {
        beerData = json.filter(beer => beer.id<3)
        beerData.forEach(
            beer => {
                beerImage(beer)
            }
        )

    })

function beerImage(beer){
    let beerList = document.querySelector("#static-beer-list")
    let favList = document.createElement("li")
    let beerImage = document.createElement("img")
    beerImage.src = beer.image_url;
    beerList.appendChild(favList);
    favList.appendChild(beerImage);

}

// const url = ("https://api.punkapi.com/v2/beers/")
// let currentBeer;
// fetch(url)
//     .then(r => r.json())
//     .then(json => {
//         renderImages(json[0]);
//     });
// function renderImages(beer) {
//     Object.keys(beer).forEach(function (key) {
//         let staticFavs = document.querySelector("#static-beer-list");
//         let staticList = document.createElement("li");
//         staticFavs.appendChild(staticList);
//         let staticImages = document.createElement("img");
//         staticImages.src = beer.image_url;
//         staticList.appendChild(staticImages);
//     });
// }