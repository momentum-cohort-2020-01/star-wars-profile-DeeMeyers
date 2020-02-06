let mando
const dataSet = document.querySelector("#character")
fetch ('https://swapi.co/api/people/22/')
.then(response => response.json())
.then(function(data) {
    mando = data

    let pic = document.createElement('img')
    pic.src = "https://media.moddb.com/cache/images/downloads/1/180/179695/thumb_620x2000/JT4dsJf.jpg"
    dataSet.appendChild(pic)

    let nameH = document.createElement('h1')
    nameH.innerText = "Name"
    dataSet.appendChild(nameH)
    
    let name = document.createElement('p')
    name.innerText = mando.name
    dataSet.appendChild(name)

    let speciesH = document.createElement('h2')
    speciesH.innerText = "Species"
    dataSet.appendChild(speciesH)
   
    
    let dobH = document.createElement('h2')
    dobH.innerText = "Birfday"
    dobH.classList.add("dobHeader")
    dataSet.appendChild(dobH)

    let dob = document.createElement('p')
    dob.innerText = mando.birth_year
    dataSet.appendChild(dob)
    
    let genderH = document.createElement('h2')
    genderH.innerText = "Gender I Guess"
    dataSet.appendChild(genderH)
    
    let gender = document.createElement('p')
    gender.innerText = mando.gender
    dataSet.appendChild(gender)
    
    let heightH = document.createElement('h2')
    heightH.innerText = "Height"
    dataSet.appendChild(heightH)
    
    let height = document.createElement('p')
    height.innerText = mando.height+'cm'
    dataSet.appendChild(height)

    console.log(mando.species)
    return mando.species
})
// console.log(refEl)
.then(name => fetch(name))
.then(response => response.json())
.then(function(data){
    const refEl = document.querySelector('.dobHeader')
    speciesObj = data
    let species = document.createElement('p')
    species.innerText = speciesObj.name
    dataSet.insertBefore(species, refEl)

    })
