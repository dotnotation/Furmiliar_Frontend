const toyBoxAdapter = new ToyBoxAdapter("http://localhost:3000")
const toyAdapter = new ToyAdapter("http://localhost:3000")
let editMode = false
let toyEditMode = false
let currentToys = false
const toyBoxForm = new ToyBoxForm

document.addEventListener("DOMContentLoaded", () => {
    toyBoxAdapter.fetchToyBoxes()
    toyBoxForm.createToyBoxForm()
    toyBoxForm.listenEvents()
})