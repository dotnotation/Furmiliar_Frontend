class ToyBox {
    constructor({id, name, photo, toys}){
        this.id = id
        this.name = name
        this. photo = photo
        this.toys = toys.map(t => new Toy(t))
    }
}