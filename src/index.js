const baseURL = "http://localhost:3000"
const toyBoxAdapter = new ToyBoxAdapter(baseURL)
const toyAdapter = new ToyAdapter(baseURL)
let editMode = false
let toyEditMode = false
let currentToys = false
const toyBoxForm = new ToyBoxForm
const toyForm = new ToyForm

document.addEventListener("DOMContentLoaded", () => {
    toyBoxAdapter.fetchToyBoxes()
    toyBoxForm.createToyBoxForm()
    toyBoxForm.listenEvents()
    toyForm.listenToys()
})