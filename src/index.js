const toyBoxAdapter = new ToyBoxAdapter("http://localhost:3000")
let editMode = false
let currentToys = false
// const toyBox = new ToyBox

document.addEventListener("DOMContentLoaded", () => {
    toyBoxAdapter.fetchToyBoxes()
    createToyBoxForm()

})