fetch("http://localhost:3000/beers")
    .then(r => r.json())
    .then(json => {
        beerData = json
        beerData.forEach(
            beer => {
                beerImage(beer)
            }
        )

    })

function beerImage(beer) {
    let beerList = document.querySelector("#static-beer-list")
    let favList = document.createElement("li")
    let beerImage = document.createElement("img")
    beerImage.src = beer.image_url;
    beerList.appendChild(beerImage);
    beerList.appendChild(favList);


}