fetch('http://localhost:3000')
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
function createImage(ramen) {
    let ramenMenu = document.querySelector('#ramen-menu')
    let ramenImage = document.createElement('img')
    ramenImage.src = ramen.image
    ramenMenu.appendChild(ramenImage)

}

