class ToyBox {

    constructor({id, name, photo, toys}){
        this.id = id
        this.name = name
        this. photo = photo
        this.toys = toys.map(t => new Toy(t))
        this.listenEvents = this.listenEvents.bind(this)
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
        toyBoxDiv.addEventListener("click", this.listenEvents)

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

    listenEvents(e){
        console.log("listenEvents hit", e.target.parentElement)
        const div = e.target.parentElement
        const action = e.target.dataset.action
    
        switch (action) {
            case "open":
                console.log("hit open button")
                console.log("Opening Toy Box", div.dataset.id, this)
                console.log(this.id == div.dataset.id)
                if (this.id == div.dataset.id) this.getToys()
                break

            case "delete":
                console.log("hit delete button")
                break
            
            case "edit":
                console.log("hit edit button")
                break
            
            default:
                break
        }
    }
 
}