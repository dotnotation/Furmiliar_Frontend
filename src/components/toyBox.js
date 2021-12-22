class ToyBox {
    constructor({id, name, photo, toys}){
        this.id = id
        this.name = name
        this. photo = photo
        //this.toys = toys.map(t => new Toy(t))
    }

    addToDom(){
        const toyBoxCard = document.getElementById("toy-box")
        const photoBox = document.createElement("img")
        photoBox.src = this.photo
        const toyBoxName = document.createElement("h2")
        toyBoxName.innerText = this.name

        toyBoxCard.appendChild(photoBox)
        toyBoxCard.appendChild(toyBoxName)

        return toyBoxCard
    }
}