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
}