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
        toyCard.setAttribute("id", `toy-card-${this.id}`)
        const toyPhoto = document.createElement("img")
        toyPhoto.src = this.photo
        toyPhoto.className = "toy-photo"
        const toyName = document.createElement("h4")
        toyName.innerText = this.name
        const toyBrand = document.createElement("h5")
        toyBrand.innerText = `Brand: ${this.brand}`
        const toyPrice = document.createElement("h5")
        toyPrice.innerText = `Price: ${this.price}`
        const toyURL = document.createElement("h5")
        toyURL.innerHTML = `Website: <a href="${this.url}">${this.url}</a>`
        const toyRating = document.createElement("h5")
        toyRating.innerText = `Rating: ${this.rating}`
        const toyRepair = document.createElement("h5")
        toyRepair.innerText = `Needs Repair?: ${this.needs_repair}`
        const toySqueaker = document.createElement("h5")
        toySqueaker.innerText = `Squeaker?: ${this.squeaker}`
        const toyCrinkle = document.createElement("h5")
        toyCrinkle.innerText = `Crinkle?: ${this.crinkle}`
        const toyTreat = document.createElement("h5")
        toyTreat.innerText = `Hides Treats?: ${this.treat}`
        const toyBoxID = document.createElement("h6")
        toyBoxID.innerText = `${this.toy_box_id}`
        toyBoxID.setAttribute("id", "secret-id")
        const deleteToy = document.createElement("button")
        deleteToy.innerHTML = "&#10006"
        deleteToy.setAttribute("id", "toy-delete")
        deleteToy.setAttribute("data-action", "delete")
        const editToy = document.createElement("button")
        editToy.innerHTML = "&#9999"
        editToy.setAttribute("id", "toy-edit")
        editToy.setAttribute("data-action", "edit")

        toyDiv.appendChild(toyCard)
        toyCard.appendChild(toyPhoto)
        toyCard.appendChild(toyName)
        toyCard.appendChild(toyBrand)
        toyCard.appendChild(toyPrice)
        toyCard.appendChild(toyURL)
        toyCard.appendChild(toyRating)
        toyCard.appendChild(toyRepair)
        toyCard.appendChild(toySqueaker)
        toyCard.appendChild(toyCrinkle)
        toyCard.appendChild(toyTreat)
        toyCard.appendChild(toyBoxID)
        toyCard.appendChild(deleteToy)
        toyCard.appendChild(editToy)
    }
}