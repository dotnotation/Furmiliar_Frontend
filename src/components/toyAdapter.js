class ToyBoxAdapter {
    
    constructor(baseURL){
        this.baseBoxURL = `${baseURL}/toys`
    }

    fetchToyBoxes(){
        fetch(this.baseBoxURL)
        .then(r => r.json())
        .then(toyBoxes => {
            console.log(toyBoxes)
            toyBoxes.forEach(toyBox => {
                const tb = new ToyBox(toyBox)
                tb.addToDom()
            })
 
        })
        .catch(error => console.error(error))
    }

    editToyBoxes(editMode, photoInput, nameInput){
        fetch(`${this.baseBoxURL}/${editMode.dataset.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                photo: photoInput.value,
                name: nameInput.value
            })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.status === 204){
                console.log("hit toyBoxAdapter editToyBoxes")
                console.log(editMode.children[0], data.toy_box)
                editMode.children[0].src = data.toy_box.photo
                editMode.children[1].innerText = data.toy_box.name
                editMode = false
                document.getElementById('toy-box-submit').innerText = "Create Toy Box"
                photoInput.value = ""
                nameInput.value = ""
            } else {
                alert(data.errors)
            }

        })
        .catch(err => console.error(err))
    }

    createToyBox(photoInput, nameInput){
        fetch(this.baseBoxURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                photo: photoInput.value,
                name: nameInput.value
            })   
        })
        .then(resp => resp.json())
        .then(data => {
            console.log("second then", data.toy_box, data.toy_box.name, data.toy_box.photo)
            if (data.status === 201){
                const tb = new ToyBox(data.toy_box)
                tb.addToDom()
            } else {
                alert(data.errors)
            }
            photoInput.value = ""
            nameInput.value = ""
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