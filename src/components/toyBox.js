class ToyBox {

    constructor({id, name, photo, toys}){
        this.id = id
        this.name = name
        this. photo = photo
        this.toys = toys.map(t => new Toy(t))
    }

    addToDom(){
        const toyBoxDiv = document.getElementById("toy-box")
        const toyBoxCard = document.createElement("div")
        toyBoxCard.className = "toy-box-card"
        toyBoxCard.setAttribute("id", `toy-box-${this.id}`)
        const photoBox = document.createElement("img")
        photoBox.src = this.photo
        photoBox.className = "toy-box-photo"
        const toyBoxName = document.createElement("h2")
        toyBoxName.innerText = this.name
        const openToyBox = document.createElement("button")
        openToyBox.innerText = "Open Toy Box" 
        openToyBox.setAttribute("id", `toy-box-button-${this.id}`)
        openToyBox.setAttribute("data-action", "open")
        // openToyBox.addEventListener("click", (e) => {
        //     console.log(this.toys)
        //     console.log(e.target)
        // })

        toyBoxDiv.appendChild(toyBoxCard)
        toyBoxCard.appendChild(photoBox)
        toyBoxCard.appendChild(toyBoxName)
        toyBoxCard.appendChild(openToyBox)

        return toyBoxCard
    }
 
}