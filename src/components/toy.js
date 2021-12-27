class Toy {
    constructor({id, name, photo, price, brand, url, rating, needs_repair, squeaker, crinkle, treat, toy_box_id}){
        this.id = id
        this.name = name
        this.photo = photo
        this.price = price
        this.brand = brand
        this.url = url
        this.rating = rating
        this.needs_repair = needs_repair
        this.squeaker = squeaker
        this.crinkle = crinkle
        this.treat = treat
        this.toy_box_id = toy_box_id
    }

    renderToys(){
        const toyDiv = document.getElementById("toy")
        const toyCard = document.createElement("div")
        toyCard.className = "toy-card"
        const toyPhoto = document.createElement("img")
        toyPhoto.src = this.photo
        toyPhoto.className = "toy-photo"
        const toyName = document.createElement("h4")
        toyName.innerText = this.name
        const toyBase = document.createElement("h6")
        const toyBrand = toyBase
        toyBrand.innerText = this.brand
        const toyURL = toyBase
        toyURL.innerHTML = this.url
        const toyRating = toyBase
        toyRating.innerText = this.rating
        const toyRepair = toyBase
        toyRepair.innerText = this.needs_repair
        const toySqueaker = toyBase
        toySqueaker.innerText = this.squeaker
        const toyCrinkle = toyBase
        toyCrinkle.innerText = this.crinkle
        const toyTreat = toyBase
        toyTreat.innerText = this.treat


        toyDiv.appendChild(toyCard)
        toyCard.appendChild(toyPhoto)
        toyCard.appendChild(toyName)
        toyCard.appendChild(toyBrand)
        toyCard.appendChild(toyURL)
        toyCard.appendChild(toyRating)
        toyCard.appendChild(toyRepair)
        toyCard.appendChild(toySqueaker)
        toyCard.appendChild(toyCrinkle)
        toyCard.appendChild(toyTreat)
    }
}