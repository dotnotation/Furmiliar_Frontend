const toyBoxAdapter = new ToyBoxAdapter("http://localhost:3000")

document.addEventListener("DOMContentLoaded", () => {
    toyBoxAdapter.fetchToyBoxes()

})