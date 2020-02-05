let mando
const dataSet = document.querySelector("#character")
fetch ('https://swapi.co/api/people/22/')
.then(response => response.json())
.then(function(data) {
    mando = data

    let nameH = document.createElement('h1')
    nameH.innerText = "Name"
    dataSet.appendChild(nameH)
    
    let name = document.createElement('p')
    name.innerText = mando.name
    dataSet.appendChild(name)

    let dobH = document.createElement('h2')
    dobH.innerText = "Birfday"
    dataSet.appendChild(dobH)

    let dob = document.createElement('p')
    dob.innerText = mando.birth_year
    dataSet.appendChild(dob)

    let genderH = document.createElement('h3')
    genderH.innerText = "Gender I Guess"
    dataSet.appendChild(genderH)

    let gender = document.createElement('p')
    gender.innerText = mando.gender
    dataSet.appendChild(gender)

    let height = document.createElement('p')
    height.innerText = mando.height
    dataSet.appendChild(height)
})
