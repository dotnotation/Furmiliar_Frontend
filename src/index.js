const baseURL = "http://localhost:3000"
const toyBoxAdapter = new ToyBoxAdapter(baseURL)
const toyAdapter = new ToyAdapter(baseURL)
let editMode = false
let toyEditMode = false
// let currentToys = false
const toyBoxForm = new ToyBoxForm
const toyForm = new ToyForm

document.addEventListener("DOMContentLoaded", () => {
    toyBoxAdapter.fetchToyBoxes()
    toyBoxForm.createToyBoxForm()
    toyBoxForm.listenEvents()
    toyForm.listenToys()
})

function userComments(){
    const submitBtn = document.getElementById("user-comments-submit")
    // console.log(submitBtn.parentElement.children)
    // console.log(userInput)
    submitBtn.addEventListener("click", handleComments)
    // event listener on submit
    // we need to grab values from form
    // clear the form
}

userComments()

function handleComments(e){
    // debugger
    e.preventDefault()
    console.log("reached handleComments")
    console.log(e.target.parentElement.children)
    const userInput = e.target.parentElement.children[0].value
    const commentDiv = document.getElementById("user-comments-div")
    // debugger
    commentDiv.append(userInput)
    console.log(userInput)
    e.target.parentElement.children[0].value = ""
    commentDiv.innerHTML += `<br>`

}