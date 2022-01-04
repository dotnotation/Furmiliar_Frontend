class ToyBox {

    constructor({id, name, photo, toys}){
        this.id = id
        this.name = name
        this.photo = photo
        this.toys = toys.map(t => new Toy(t))
    }

    addToDom(){
        const toyBoxDiv = document.getElementById("toy-box")
        const toyBoxCard = document.createElement("div")
        toyBoxCard.className = "toy-box-card"
        toyBoxCard.setAttribute("data-id", `${this.id}`)
        const photoBox = document.createElement("img")
        photoBox.src = this.photo
        photoBox.className = "toy-box-photo"
        const toyBoxName = document.createElement("h2")
        toyBoxName.innerText = this.name
        const openToyBox = document.createElement("button")
        openToyBox.innerText = "Open Toy Box" 
        openToyBox.setAttribute("id", `toy-box-button-${this.id}`)
        openToyBox.setAttribute("data-action", "open")
        const deleteToyBox = document.createElement("button")
        deleteToyBox.innerHTML = "&#10006"
        deleteToyBox.setAttribute("id", "toy-box-delete")
        deleteToyBox.setAttribute("data-action", "delete")
        const editToyBox = document.createElement("button")
        editToyBox.innerHTML = "&#9999"
        editToyBox.setAttribute("id", "toy-box-edit")
        editToyBox.setAttribute("data-action", "edit")

        toyBoxDiv.appendChild(toyBoxCard)
        toyBoxCard.appendChild(photoBox)
        toyBoxCard.appendChild(toyBoxName)
        toyBoxCard.appendChild(openToyBox)
        toyBoxCard.appendChild(deleteToyBox)
        toyBoxCard.appendChild(editToyBox)
    }

    getToys(){
        console.log(this.toys)
        const toyContainer = document.getElementById("toy")
        toyContainer.innerHTML = ""
        const toyBoxName = document.createElement("h3")
        toyBoxName.innerHTML = `${this.name}'s Toys`
        toyContainer.appendChild(toyBoxName)
        this.toys.forEach(t => t.renderToys())
    }
 
}