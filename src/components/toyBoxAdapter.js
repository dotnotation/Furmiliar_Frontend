class ToyBoxAdapter {
    
    constructor(baseURL){
        this.baseBoxURL = `${baseURL}/toy_boxes`
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
                console.log(editMode.children[0], data)
                editMode.children[0].src = data.photo
                editMode.children[1].innerText = data.name
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
        // debugger
        fetch(this.baseBoxURL, {
            crossDomain: true,
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
            debugger
            //console.log("second then", data.toy_box, data.toy_box.name, data.toy_box.photo)
            //debugger
            // if (data.status === 201){
            //     const tb = new ToyBox(data.toy_box)
            //     tb.addToDom()
            // } else {
            //     alert(data.errors)
            // }
            const tb = new ToyBox(data)
            tb.addToDom()
            photoInput.value = ""
            nameInput.value = ""
        })
        .catch(err => console.error(err))
    }

    deleteToyBox(div){
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