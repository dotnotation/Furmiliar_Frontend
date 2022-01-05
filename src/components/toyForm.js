class ToyForm {
    constructor(){
        this.toySubmit = this.toySubmit.bind(this)
        this.toyEvents = this.toyEvents.bind(this)
    }

    createToyForm(toyBoxAssociation){
        const toyFormContainer = document.getElementById("toy-form")
        toyFormContainer.innerHTML = ""
        toyFormContainer.style.display = "inline-block"
        const toyForm = document.createElement("form")
        toyForm.innerHTML = `<h2>Add a New Toy</h2>
            <input type="text" id="toy-photo-input" placeholder="Photo URL">&emsp;
            <input type="text" id="toy-name-input" placeholder="Name">&emsp;
            <input type="text" id="toy-brand-input" placeholder="Brand">&emsp;
            <input type="text" id="toy-price-input" placeholder="Price">&emsp;
            <input type="text" id="toy-url-input" placeholder="Website URL">&emsp;
            <input type="text" id="toy-rating-input" placeholder="Rating 1-5">&emsp;<br><br>
            <strong>Needs Repair?</strong> <input type="radio" id="toy-needs-repair-input" name="needs-repair" value="true">True
            <input type="radio" name="needs-repair" value="false">False &emsp;
            <strong>Squeaker?</strong> <input type="radio" id="toy-squeaker-input" name="squeaker" value="true">True
            <input type="radio" name="squeaker" value="false">False &emsp;
            <strong>Crinkle?</strong> <input type="radio" id="toy-crinkle-input" name="crinkle" value="true">True
            <input type="radio" name="crinkle" value="false">False &emsp;
            <strong>Hides Treats?</strong> <input type="radio" id="toy-treat-input" name="treat" value="true">True
            <input type="radio" name="treat" value="false">False &emsp;<br><br>`

        const addToyBoxId = document.createElement("input")
        addToyBoxId.setAttribute("type", "hidden")
        addToyBoxId.setAttribute("name", "toy-box-id")
        addToyBoxId.setAttribute("id", "toy-box-id-input")
        addToyBoxId.value = `${toyBoxAssociation}`
        console.log(toyBoxAssociation)

        const submit = document.createElement("button")
        submit.setAttribute("id", "toy-submit")
        submit.setAttribute("type", "submit")
        submit.setAttribute("value", "Add Toy")
        submit.innerText = "Add Toy"

        toyForm.appendChild(addToyBoxId)
        toyForm.appendChild(submit)
        toyFormContainer.append(toyForm)

        toyForm.addEventListener("submit", this.toySubmit)
    }

    toySubmit(e) {
        console.log("hit toy submit")
        e.preventDefault()
        const toyEventForm = e.target
        const toyPhotoInput = toyEventForm[0]
        const toyNameInput = toyEventForm[1]
        const toyBrandInput = toyEventForm[2]
        const toyPriceInput = toyEventForm[3]
        const toyUrlInput = toyEventForm[4]
        const toyRatingInput = toyEventForm[5]
        const toyRepairInput = toyEventForm[6] || toyEventForm[7]
        const toySqueakerInput = toyEventForm[8] || toyEventForm[9]
        const toyCrinkleInput = toyEventForm[10] || toyEventForm[11]
        const toyTreatInput = toyEventForm[12] || toyEventForm[13]
        const toyBoxIDInput = toyEventForm[14]
        if (toyEditMode){
            console.log("editing toy")
            debugger
            toyAdapter.editToy(toyEditMode, toyPhotoInput, toyNameInput, toyPriceInput, toyBrandInput, toyUrlInput, toyRatingInput, toyRepairInput, toySqueakerInput, toyCrinkleInput, toyTreatInput, toyBoxIDInput)
        } else {
            console.log(toyPhotoInput.value, toyNameInput.value, toyPriceInput.value, toyBrandInput.value, toyUrlInput.value, toyRatingInput.value, toyRepairInput.value, toySqueakerInput.value, toyCrinkleInput.value, toyTreatInput.value, toyBoxIDInput.value)
            debugger
            toyAdapter.createToy(toyPhotoInput, toyNameInput, toyPriceInput, toyBrandInput, toyUrlInput, toyRatingInput, toyRepairInput, toySqueakerInput, toyCrinkleInput, toyTreatInput, toyBoxIDInput)
        }
    }

    listenToys(){
        const toyContainer = document.getElementById("toy")
        toyContainer.addEventListener("click", this.toyEvents)
    }

    toyEvents(e){
        const toyDiv = e.target.parentElement
        const toyAction = e.target.dataset.action
    
        switch (toyAction) {
            case "delete":
                console.log("hit toy delete button")
                toyAdapter.deleteToy(toyDiv)
                break
            
            case "edit":
                console.log("hit toy edit button")
                toyEditMode = toyDiv
                console.log(toyDiv)
                document.getElementById("toy-submit").innerText = "Edit Toy"
                console.log(toyDiv.children[0].src)
                document.getElementById("toy-photo-input").value = toyDiv.children[0].src
                document.getElementById("toy-name-input").value = toyDiv.children[1].innerText
                console.log(toyDiv.children[1])
                break
            
            default:
                break
        }
    }
}