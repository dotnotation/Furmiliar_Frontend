class ToyForm {
    constructor(){

    }

    createToyForm(){
        const toyFormContainer = document.getElementById("toy-form")
        toyFormContainer.style.display = "inline-block"
        const toyForm = document.createElement("form")
        toyForm.innerHTML = `<h2>Add a New Toy</h2>
            <input type="text" id="photo-input" placeholder="Photo URL">&emsp;
            <input type="text" id="name-input" placeholder="Name">&emsp;
            <input type="text" id="brand-input" placeholder="Brand">&emsp;
            <input type="text" id="website-input" placeholder="Website URL">&emsp;
            <input type="text" id="rating-input" placeholder="Rating 1-5">&emsp;
            <strong>Needs Repair?</strong> <input type="radio" name="needs-repair" value="true">True
            <input type="radio" name="needs-repair" value="false">False &emsp;
            <strong>Squeaker?</strong> <input type="radio" name="squeaker" value="true">True
            <input type="radio" name="squeaker" value="false">False &emsp;
            <strong>Crinkle?</strong> <input type="radio" name="crinkle" value="true">True
            <input type="radio" name="crinkle" value="false">False &emsp;
            <strong>Hides Treats?</strong> <input type="radio" name="treat" value="true">True
            <input type="radio" name="treat" value="false">False &emsp;
            `
        // const header = document.createElement("h2")
        // header.innerText = "Add a New Toy"
        // const photoInput = document.createElement("input")
        // photoInput.setAttribute("type", "text")
        // photoInput.setAttribute("id", "photo-input")
        // photoInput.setAttribute("placeholder", "Photo URL")
        // const nameInput = document.createElement("input")
        // nameInput.setAttribute("type", "text")
        // nameInput.setAttribute("id", "name-input")
        // nameInput.setAttribute("placeholder", "Name")
        // const brandInput = document.createElement("input")
        // brandInput.setAttribute("type", "text")
        // brandInput.setAttribute("id", "brand-input")
        // brandInput.setAttribute("placeholder", "Brand")
        // const websiteInput = document.createElement("input")
        // websiteInput.setAttribute("type", "text")
        // websiteInput.setAttribute("id", "website-input")
        // websiteInput.setAttribute("placeholder", "Website URL")
        // const ratingInput = document.createElement("input")
        // ratingInput.setAttribute("type", "text")
        // ratingInput.setAttribute("id", "rating-input")
        // ratingInput.setAttribute("placeholder", "Rating 1-5")
        // const repairInput = document.createElement("span")
        // repairInput.innerHTML = `<strong>Needs Repair?</strong> <input type="radio" name="needs-repair" value="true">True
        //     <input type="radio" name="needs-repair" value="false">False &emsp;`
        // const squeakerInput = document.createElement("span")
        // squeakerInput.innerHTML = `<strong>Squeaker?</strong> <input type="radio" name="squeaker" value="true">True
        //     <input type="radio" name="squeaker" value="false">False &emsp;`
        // const crinkleInput = document.createElement("span")
        // crinkleInput.innerHTML = `<strong>Crinkle?</strong> <input type="radio" name="crinkle" value="true">True
        //     <input type="radio" name="crinkle" value="false">False &emsp;`
        // const treatInput = document.createElement("span")
        // treatInput.innerHTML = `<strong>Hides Treats?</strong> <input type="radio" name="treat" value="true">True
        //     <input type="radio" name="treat" value="false">False &emsp;`
        const submit = document.createElement("button")
        submit.setAttribute("id", "toy-submit")
        submit.setAttribute("type", "submit")
        submit.setAttribute("value", "Add Toy")
        submit.innerText = "Add Toy"

        // toyForm.appendChild(header)
        // toyForm.appendChild(photoInput)
        // toyForm.appendChild(nameInput)
        // toyForm.appendChild(brandInput)
        // toyForm.appendChild(websiteInput)
        // toyForm.appendChild(ratingInput)
        // toyForm.appendChild(repairInput)
        // toyForm.appendChild(squeakerInput)
        // toyForm.appendChild(crinkleInput)
        // toyForm.appendChild(treatInput)
        toyForm.appendChild(submit)
        toyFormContainer.append(toyForm)
    }
}