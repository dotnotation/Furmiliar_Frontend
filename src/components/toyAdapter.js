class ToyBoxAdapter {
    
    constructor(baseURL){
        this.baseBoxURL = `${baseURL}/toys`
    }


    editToys(editMode, photoInput, nameInput, priceInput,brandInput, urlInput, ratingInput, needsRepairInput, squeakerInput, crinkleInput, treatInput){
        fetch(`${this.baseBoxURL}/${editMode.dataset.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                photo: photoInput.value,
                name: nameInput.value,
                price: priceInput.value,
                brand: brandInput.value,
                url: urlInput.value,
                rating: ratingInput.value,
                needs_repair: needsRepairInput.value,
                squeaker: squeakerInput.value,
                crinkle: crinkleInput.value,
                treat: treatInput.value
            })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.status === 204){
                console.log("hit toyAdapter editToys")
                console.log(editMode.children[0], data.toy)
                editMode = false
                document.getElementById('toy-box-submit').innerText = "Add Toy"
                photoInput.value = ""
                nameInput.value = ""
                priceInput.value = ""
                brandInput.value = ""
                urlInput.value = ""
                ratingInput.value = ""
                needsRepairInput = ""
                squeakerInput = ""
                crinkleInput = ""
                treatInput = ""

            } else {
                alert(data.errors)
            }

        })
        .catch(err => console.error(err))
    }

    createToy(photoInput, nameInput, priceInput,brandInput, urlInput, ratingInput, needsRepairInput, squeakerInput, crinkleInput, treatInput){
        fetch(this.baseBoxURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                photo: photoInput.value,
                name: nameInput.value,
                price: priceInput.value,
                brand: brandInput.value,
                url: urlInput.value,
                rating: ratingInput.value,
                needs_repair: needsRepairInput.value,
                squeaker: squeakerInput.value,
                crinkle: crinkleInput.value,
                treat: treatInput.value
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
            photoInput.value = ""
            nameInput.value = ""
            priceInput.value = ""
            brandInput.value = ""
            urlInput.value = ""
            ratingInput.value = ""
            needsRepairInput = ""
            squeakerInput = ""
            crinkleInput = ""
            treatInput = ""
        })
        .catch(err => console.error(err))
    }

    deleteToy(div){
        fetch(`${this.baseBoxURL}/${div.dataset.id}`, {
            method: "DELETE"
        })
        .then(resp => {
            console.log(resp)
            return resp.json()
        })
        .then(data => {
            if (data.message === "Successfully deleted"){
                // delete li for DOM
                div.remove()
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
    }
}