const section = document.querySelector(".results")

const spending = parseInt(prompt("Zadejte částku k úhradě"))
const tip = parseInt(prompt("Zadejte spropitné v %"))
const people = parseInt(prompt("Zadejte počet lidí"))

const result = (spending + spending * (tip / 100)) / people;

const newparagraph = document.createElement("p")
newparagraph.textContent = (`Jeden člověk zaplatí ${result}`)
section.append(newparagraph)
