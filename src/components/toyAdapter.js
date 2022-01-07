class ToyAdapter {
    
    constructor(baseURL){
        this.baseToyURL = `${baseURL}/toys`
    }


    editToy(toyEditMode, toyPhotoInput, toyNameInput, toyPriceInput, toyBrandInput, toyUrlInput, toyRatingInput, toyRepairInput, toySqueakerInput, toyCrinkleInput, toyTreatInput, toyBoxIDInput){
        debugger
        fetch(`${this.baseToyURL}/${toyEditMode.dataset.id}`, {
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
                toy_box_id: toyBoxIDInput.value
            })
        })
        .then(resp => resp.json())
        .then(data => {
                console.log("hit toyAdapter editToys")
                console.log(data)
                debugger
                toyEditMode.children[0].src = data.photo
                toyEditMode.children[1].innerText = data.name
                toyEditMode.children[2].innerText.split(": ")[1] = data.brand
                toyEditMode.children[3].innerText.split(": ")[1] = data.price
                toyEditMode.children[4].innerText.split(": ")[1] = data.url 
                toyEditMode.children[5].innerText.split(": ")[1] = data.rating 
                toyEditMode.children[6].innerText.split(": ")[1] = data.needs_repair
                toyEditMode.children[7].innerText.split(": ")[1] = data.squeaker
                toyEditMode.children[8].innerText.split(": ")[1] = data.crinkle
                toyEditMode.children[9].innerText.split(": ")[1] = data.treat
                toyEditMode.children[10].innerText = data.toy_box_id

                
                toyEditMode = false
                document.getElementById('toy-box-submit').innerText = "Add Toy"
                toyPhotoInput.value = ""
                toyNameInput.value = ""
                toyPriceInput.value = ""
                toyBrandInput.value = ""
                toyUrlInput.value = ""
                toyRatingInput.value = ""
                document.querySelector('input[name="needs-repair"]:checked').checked = false
                document.querySelector('input[name="squeaker"]:checked').checked = false
                document.querySelector('input[name="crinkle"]:checked').checked = false
                document.querySelector('input[name="treat"]:checked').checked = false
                toyBoxIDInput = ""
            })
        .catch(err => console.error(err))
    }

    createToy(toyPhotoInput, toyNameInput, toyPriceInput,toyBrandInput, toyUrlInput, toyRatingInput, toyRepairInput, toySqueakerInput, toyCrinkleInput, toyTreatInput, toyBoxIDInput){
        fetch(this.baseToyURL, {
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
                toy_box_id: toyBoxIDInput.value
            })   
        })
        .then(resp => resp.json())
        .then(data => {
            //debugger
            console.log("second then", data)
                const t = new Toy(data)
                t.renderToys()
            //debugger
            toyPhotoInput.value = ""
            toyNameInput.value = ""
            toyPriceInput.value = ""
            toyBrandInput.value = ""
            toyUrlInput.value = ""
            toyRatingInput.value = ""
            document.querySelector('input[name="needs-repair"]:checked').checked = false
            document.querySelector('input[name="squeaker"]:checked').checked = false
            document.querySelector('input[name="crinkle"]:checked').checked = false
            document.querySelector('input[name="treat"]:checked').checked = false
            toyBoxIDInput.value = ""
        })
        .catch(err => console.error(err))
    }

    deleteToy(toyDiv){
        console.log(toyDiv, toyDiv.dataset.id)
        debugger
        fetch(`${this.baseToyURL}/${toyDiv.dataset.id}`, {
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