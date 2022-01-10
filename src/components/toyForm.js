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
            <strong>Needs Repair?</strong> <input type="radio" id="toy-needs-repair-input-true" name="needs-repair" value="true">True
            <input type="radio" id="toy-needs-repair-input-false" name="needs-repair" value="false">False &emsp;
            <strong>Squeaker?</strong> <input type="radio" id="toy-squeaker-input-true" name="squeaker" value="true">True
            <input type="radio" id="toy-squeaker-input-false" name="squeaker" value="false">False &emsp;
            <strong>Crinkle?</strong> <input type="radio" id="toy-crinkle-input-true" name="crinkle" value="true">True
            <input type="radio" d="toy-crinkle-input-false" name="crinkle" value="false">False &emsp;
            <strong>Hides Treats?</strong> <input type="radio" id="toy-treat-input" name="treat" value="true">True
            <input type="radio" name="treat" value="false">False &emsp;<br><br>`

        const addToyBoxId = document.createElement("input")
        addToyBoxId.setAttribute("type", "hidden")
        addToyBoxId.setAttribute("name", "toy-box-id")
        addToyBoxId.setAttribute("id", "toy-box-id-input")
        addToyBoxId.value = `${toyBoxAssociation}`

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
        e.preventDefault()
        const toyEventForm = e.target
        const toyPhotoInput = toyEventForm[0]
        const toyNameInput = toyEventForm[1]
        const toyBrandInput = toyEventForm[2]
        const toyPriceInput = toyEventForm[3]
        const toyUrlInput = toyEventForm[4]
        const toyRatingInput = toyEventForm[5]
        const toyRepairInput = toyEventForm['needs-repair']
        const toySqueakerInput = toyEventForm['squeaker']
        const toyCrinkleInput = toyEventForm['crinkle']
        const toyTreatInput = toyEventForm['treat']
        const toyBoxIDInput = toyEventForm[14]
        if (toyEditMode){
            toyAdapter.editToy(toyEditMode, toyPhotoInput, toyNameInput, toyPriceInput, toyBrandInput, toyUrlInput, toyRatingInput, toyRepairInput, toySqueakerInput, toyCrinkleInput, toyTreatInput, toyBoxIDInput)
        } else {
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
                toyAdapter.deleteToy(toyDiv)
                break
            
            case "edit":
                toyEditMode = toyDiv
                document.getElementById("toy-submit").innerText = "Edit Toy" 
                document.getElementById("toy-photo-input").value = toyDiv.children[0].src
                document.getElementById("toy-name-input").value = toyDiv.children[1].innerText
                document.getElementById("toy-brand-input").value = toyDiv.children[2].innerText.split(": ")[1]
                document.getElementById("toy-price-input").value = toyDiv.children[3].innerText.split(": ")[1]
                document.getElementById("toy-url-input").value = toyDiv.children[4].innerText.split(": ")[1]
                document.getElementById("toy-rating-input").value = toyDiv.children[5].innerText.split(": ")[1]
                document.getElementById("secret-id").value = toyDiv.children[10].innerText
                
                break
            
            default:
                break
        }
    }
}