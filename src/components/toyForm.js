class ToyForm {
    constructor(){
        this.toySubmit = this.toySubmit.bind(this)
        this.toyEvents = this.toyEvents.bind(this)
    }

    createToyForm(){
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
            <input type="radio" name="treat" value="false">False &emsp;<br><br>
            <input type="hidden" name="toy-box-id"  id="toy-toy-box-id" value="${this.toy_box_id}>`
        // const header = document.createElement("h2")
        // header.innerText = "Add a New Toy"
        // const photoInput = document.createElement("input")
        // photoInput.setAttribute("type", "text")
        // photoInput.setAttribute("id", "photo-input")
        // photoInput.setAttribute("placeholder", "Photo URL")
        // const nameInput = document.createElement("input")
        // nameInput.setAttribute("type", "text")
        // nameInput.setAttribute("id", "name-input")
        // nameInput.setAttribute("placeholder", "Name")
        // const brandInput = document.createElement("input")
        // brandInput.setAttribute("type", "text")
        // brandInput.setAttribute("id", "brand-input")
        // brandInput.setAttribute("placeholder", "Brand")
        // const websiteInput = document.createElement("input")
        // websiteInput.setAttribute("type", "text")
        // websiteInput.setAttribute("id", "website-input")
        // websiteInput.setAttribute("placeholder", "Website URL")
        // const ratingInput = document.createElement("input")
        // ratingInput.setAttribute("type", "text")
        // ratingInput.setAttribute("id", "rating-input")
        // ratingInput.setAttribute("placeholder", "Rating 1-5")
        // const repairInput = document.createElement("span")
        // repairInput.innerHTML = `<strong>Needs Repair?</strong> <input type="radio" name="needs-repair" value="true">True
        //     <input type="radio" name="needs-repair" value="false">False &emsp;`
        // const squeakerInput = document.createElement("span")
        // squeakerInput.innerHTML = `<strong>Squeaker?</strong> <input type="radio" name="squeaker" value="true">True
        //     <input type="radio" name="squeaker" value="false">False &emsp;`
        // const crinkleInput = document.createElement("span")
        // crinkleInput.innerHTML = `<strong>Crinkle?</strong> <input type="radio" name="crinkle" value="true">True
        //     <input type="radio" name="crinkle" value="false">False &emsp;`
        // const treatInput = document.createElement("span")
        // treatInput.innerHTML = `<strong>Hides Treats?</strong> <input type="radio" name="treat" value="true">True
        //     <input type="radio" name="treat" value="false">False &emsp;`
        const submit = document.createElement("button")
        submit.setAttribute("id", "toy-submit")
        submit.setAttribute("type", "submit")
        submit.setAttribute("value", "Add Toy")
        submit.innerText = "Add Toy"

        // toyForm.appendChild(header)
        // toyForm.appendChild(photoInput)
        // toyForm.appendChild(nameInput)
        // toyForm.appendChild(brandInput)
        // toyForm.appendChild(websiteInput)
        // toyForm.appendChild(ratingInput)
        // toyForm.appendChild(repairInput)
        // toyForm.appendChild(squeakerInput)
        // toyForm.appendChild(crinkleInput)
        // toyForm.appendChild(treatInput)
        toyForm.appendChild(submit)
        toyFormContainer.append(toyForm)

        toyForm.addEventListener("submit", this.toySubmit)
    }

    toySubmit(e) {
        console.log("hit toy submit")
        e.preventDefault()
        const toyEventForm = e.target
        //const toyPhotoInput, toyNameInput, toyPriceInput, toyBrandInput, toyUrlInput, toyRatingInput, toyRepairInput, toySqueakerInput, toyCrinkleInput, toyTreatInput
        const toyPhotoInput = toyEventForm[0]
        const toyNameInput = toyEventForm[1]
        const toyBrandInput = toyEventForm[2]
        const toyPriceInput = toyEventForm[3]
        const toyUrlInput = toyEventForm[4]
        const toyRatingInput = toyEventForm[5]
        const toyRepairInput = toyEventForm[6]
        const toySqueakerInput = toyEventForm[7]
        const toyCrinkleInput = toyEventForm[8]
        const toyTreatInput = toyEventForm[9]
        const toyBoxIDInput = toyEventForm[10]
        if (toyEditMode){
            console.log("editing toy")
            toyAdapter.editToy(toyEditMode, toyPhotoInput, toyNameInput, toyPriceInput, toyBrandInput, toyUrlInput, toyRatingInput, toyRepairInput, toySqueakerInput, toyCrinkleInput, toyTreatInput, toyBoxIDInput)
        } else {
            console.log(toyPhotoInput, toyNameInput, toyPriceInput, toyBrandInput, toyUrlInput, toyRatingInput, toyRepairInput, toySqueakerInput, toyCrinkleInput, toyTreatInput, toyBoxIDInput)
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