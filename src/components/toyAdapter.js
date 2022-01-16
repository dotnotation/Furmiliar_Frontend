class ToyAdapter {
    
    constructor(baseURL){
        this.baseToyURL = `${baseURL}/toys`
    }


    editToy(toyEditMode, toyPhotoInput, toyNameInput, toyPriceInput, toyBrandInput, toyUrlInput, toyRatingInput, toyRepairInput, toySqueakerInput, toyCrinkleInput, toyTreatInput, toyBoxIDInput){
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
                toyEditMode.children[0].src = data.photo
                toyEditMode.children[1].innerText = data.name
                toyEditMode.children[2].innerHTML = `Brand: ${data.brand}`
                toyEditMode.children[3].innerHTML = `Price: ${data.price}`
                toyEditMode.children[4].innerHTML = `Website: <a href="${data.url}">${data.url}</a>`
                toyEditMode.children[5].innerHTML = `Rating: ${data.rating}` 
                toyEditMode.children[6].innerHTML = `Needs Repair?: ${data.needs_repair}`
                toyEditMode.children[7].innerHTML = `Squeaker?: ${data.squeaker}`
                toyEditMode.children[8].innerHTML = `Crinkle?: ${data.crinkle}`
                toyEditMode.children[9].innerHTML = `Hides Treats?: ${data.treat}`
                toyEditMode.children[10].innerText = data.toy_box_id
                
                toyEditMode = false
                document.getElementById('toy-submit').innerText = "Add Toy"
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
            const t = new Toy(data)
            t.renderToys()

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
        fetch(`${this.baseToyURL}/${toyDiv.dataset.id}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.message === "Successfully deleted"){
                toyDiv.remove()
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
    }
}