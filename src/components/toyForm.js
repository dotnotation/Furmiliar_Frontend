class ToyForm {
    constructor(){

    }

    createToyForm(){
        const toyFormContainer = document.getElementById("toy-form")
        const toyForm = document.createElement("form")
        const header = document.createElement("h2")
        header.innerText = "Add a New Toy"
        const photoInput = document.createElement("input")
        photoInput.setAttribute("type", "text")
        photoInput.setAttribute("id", "photo-input")
        photoInput.setAttribute("placeholder", "Photo URL")
        const nameInput = document.createElement("input")
        nameInput.setAttribute("type", "text")
        nameInput.setAttribute("id", "name-input")
        nameInput.setAttribute("placeholder", "Name")
        const brandInput = document.createElement("input")
        brandInput.setAttribute("type", "text")
        brandInput.setAttribute("id", "brand-input")
        brandInput.setAttribute("placeholder", "Brand")
        const websiteInput = document.createElement("input")
        websiteInput.setAttribute("type", "text")
        websiteInput.setAttribute("id", "website-input")
        websiteInput.setAttribute("placeholder", "Website URL")
        const ratingInput = document.createElement("input")
        ratingInput.setAttribute("type", "text")
        ratingInput.setAttribute("id", "rating-input")
        ratingInput.setAttribute("placeholder", "Rating 1-5")
        const repairInput = document.createElement("input")
        brandInput.setAttribute("type", "radio")
        brandInput.setAttribute("id", "needs-repair-input")
        brandInput.setAttribute("label", "Needs Repair?")
        const submit = document.createElement("button")
        submit.setAttribute("id", "toy-submit")
        submit.setAttribute("type", "submit")
        submit.setAttribute("value", "Add Toy")
        submit.innerText = "Add Toy"

        toyForm.appendChild(header)
        toyForm.appendChild(photoInput)
        toyForm.appendChild(nameInput)
        toyForm.appendChild(brandInput)
        toyForm.appendChild(websiteInput)
        toyForm.appendChild(ratingInput)
        toyForm.appendChild(repairInput)
        toyForm.appendChild(submit)
        toyFormContainer.append(toyForm)
    }
}