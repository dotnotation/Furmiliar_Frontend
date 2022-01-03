class ToyBoxForm{
    constructor(){
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    createToyBoxForm(){
        const formContainer = document.getElementById("toy-box-form")
        const form = document.createElement("form")
        const header = document.createElement("h2")
        header.innerText = "Register Your Pet's Toy Box Here"
        const photoInput = document.createElement("input")
        photoInput.setAttribute("type", "text")
        photoInput.setAttribute("id", "photo-input")
        photoInput.setAttribute("placeholder", "Photo URL")
        const nameInput = document.createElement("input")
        nameInput.setAttribute("type", "text")
        nameInput.setAttribute("id", "name-input")
        nameInput.setAttribute("placeholder", "Name")
        const submit = document.createElement("button")
        submit.setAttribute("type", "submit")
        submit.innerText = "Create Toy Box"

        form.appendChild(header)
        form.appendChild(photoInput)
        form.appendChild(nameInput)
        form.appendChild(submit)
        formContainer.append(form)

        form.addEventListener("submit", this.handleSubmit)
    } 

    handleSubmit(e) {
        console.log("hit submit")
        e.preventDefault()
        const photoInput = e.target[0]
        const nameInput = e.target[1]
        console.log(photoInput, nameInput)
        toyBoxAdapter.createToyBox(photoInput, nameInput)
    }
}