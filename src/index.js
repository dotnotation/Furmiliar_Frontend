const toyBoxAdapter = new ToyBoxAdapter("http://localhost:3000")
let editMode = false
let currentToys = false

document.addEventListener("DOMContentLoaded", () => {
    toyBoxAdapter.fetchToyBoxes()

})