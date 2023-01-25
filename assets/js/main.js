let contacts = []

const contactsKey = "contacts"

const addContact = (e) => {
    e.preventDefault()
    const name = document.getElementById("name").value
    contacts.push(name)
    localStorage.setItem(contactsKey, JSON.stringify(contacts))
    
}

const getContacts = () => {
    const contactListString =
        localStorage.getItem(contactsKey)
    contacts = JSON.parse(contactListString)
    console.log(contacts);
}

const nameList = document.getElementById("lista-nombres")

contacts.forEach((name,index) => {
    const nodeName = document.createElement("p")
    const updateButton = document.createElement("button")
    updateButton
    nodeName.textContent = "${index + 1}:${name}"
    nameList.appendChild(nodeName)
    nameList.appendChild(updateButton)
    nameList.appendChild(deleteButton)
})

const updateContact = (id, name) => { }

const deleteContact = (index) => {
    contacts.splice(index, 1)
}

getContacts()

const addButton = document.getElementById('add-button')

const form = document.getElementById("form")

const name = document.getElementById("name")

form.addEventListener("submit", addContact)

addButton.addEventListener('click', addContact)