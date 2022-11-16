fetch('http://localhost:3000/favorites')
    .then(r => r.json())
    .then(json => {
        drinkData = json
        drinkData.forEach(
            drink => {
                createImage(drink)
            }
        )
        drinkDetails(drinkData[0])

    })
function createImage(drink) {
    let margs = document.querySelector('#static-drink-list', '.static-drinks')
    let ramenImage =
    ramenImage.src = ramen.image
    ramenMenu.appendChild(ramenImage)

}

