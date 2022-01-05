class ToyAdapter {
    
    constructor(baseURL){
        this.baseBoxURL = `${baseURL}/toys`
    }


    editToys(toyEditMode, toyPhotoInput, toyNameInput, toyPriceInput, toyBrandInput, toyUrlInput, toyRatingInput, toyRepairInput, toySqueakerInput, toyCrinkleInput, toyTreatInput, toyBoxIDInput){
        fetch(`${this.baseBoxURL}/${editMode.dataset.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                photo: toyPhotoInput.value,
                name: toyNameInput.value,
                price: toyPriceInput.value,
                brand: toyBrandInput.value,
                url: toyUrlInput.value,
                rating: toyRatingInput.value,
                needs_repair: toyRepairInput.value,
                squeaker: toySqueakerInput.value,
                crinkle: toyCrinkleInput.value,
                treat: toyTreatInput.value,
                toy_box_ID: toyBoxIDInput.value
            })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.status === 204){
                console.log("hit toyAdapter editToys")
                console.log(toyEditMode.children[0], data.toy)
                editMode = false
                document.getElementById('toy-box-submit').innerText = "Add Toy"
                toyPhotoInput.value = ""
                toyNameInput.value = ""
                toyPriceInput.value = ""
                toyBrandInput.value = ""
                toyUrlInput.value = ""
                toyRatingInput.value = ""
                toyRepairInput = ""
                toySqueakerInput = ""
                toyCrinkleInput = ""
                toyTreatInput = ""
                toyBoxIDInput = ""

            } else {
                alert(data.errors)
            }

        })
        .catch(err => console.error(err))
    }

    createToy(toyPhotoInput, toyNameInput, toyPriceInput,toyBrandInput, toyUrlInput, toyRatingInput, toyRepairInput, toySqueakerInput, toyCrinkleInput, toyTreatInput, toyBoxIDInput){
        fetch(this.baseBoxURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                photo: toyPhotoInput.value,
                name: toyNameInput.value,
                price: toyPriceInput.value,
                brand: toyBrandInput.value,
                url: toyUrlInput.value,
                rating: toyRatingInput.value,
                needs_repair: toyRepairInput.value,
                squeaker: toySqueakerInput.value,
                crinkle: toyCrinkleInput.value,
                treat: toyTreatInput.value,
                toy_box_ID: toyBoxIDInput.value
            })   
        })
        .then(resp => resp.json())
        .then(data => {
            console.log("second then", data.toy)
            if (data.status === 201){
                const t = new Toy(data.toy)
                t.renderToys()
            } else {
                alert(data.errors)
            }
            toyPhotoInput.value = ""
            toyNameInput.value = ""
            toyPriceInput.value = ""
            toyBrandInput.value = ""
            toyUrlInput.value = ""
            toyRatingInput.value = ""
            toyRepairInput = ""
            toySqueakerInput = ""
            toyCrinkleInput = ""
            toyTreatInput = ""
            toyBoxIDInput = ""
        })
        .catch(err => console.error(err))
    }

    deleteToy(toyDiv){
        fetch(`${this.baseBoxURL}/${toyDiv.dataset.id}`, {
            method: "DELETE"
        })
        .then(resp => {
            console.log(resp)
            return resp.json()
        })
        .then(data => {
            if (data.message === "Successfully deleted"){
                // delete li for DOM
                toyDiv.remove()
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
    }
}