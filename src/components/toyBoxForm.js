class ToyBoxForm{
    constructor(){
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEvents = this.handleEvents.bind(this)
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
        submit.setAttribute("id", "toy-box-submit")
        submit.setAttribute("type", "submit")
        submit.setAttribute("value", "Create Toy Box")
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
        if (editMode){
            console.log("editing")
            toyBoxAdapter.editToyBoxes(editMode, photoInput, nameInput)
        } else {
        console.log(photoInput, nameInput)
        toyBoxAdapter.createToyBox(photoInput, nameInput)
        }
    }

    listenEvents(){
        const toyBoxContainer = document.getElementById("toy-box")
        toyBoxContainer.addEventListener("click", this.handleEvents)
    }

    handleEvents(e){
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
                toyBoxAdapter.deleteToyBox(div)
                break
            
            case "edit":
                console.log("hit edit button")
                editMode = div
                console.log(div)
                document.getElementById("toy-box-submit").innerText = "Edit Toy Box"
                console.log(div.children[0].src)
                document.getElementById("photo-input").value = div.children[0].src
                document.getElementById("name-input").value = div.children[1].innerText
                console.log(div.children[1])
                break
            
            default:
                break
        }
    }
}