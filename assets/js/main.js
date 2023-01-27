let contacts = []

const contactsKey = "contacts"

const updateContact = (index) => {
    const newName = document.getElementById('name').value
    contacts[index] = newName
    localStorage.setItem(contactsKey, JSON.stringify(contacts))
    window.location.reload()
}
const deleteContact = (index) => {
    contacts.splice(index, 1)
    localStorage.setItem(contactsKey, JSON.stringify(contacts))
    window.location.reload()
}

const addContact = (e) => {
    e.preventDefault()
    const name = document.getElementById("name").value
    contacts.push(name)
    localStorage.setItem(contactsKey, JSON.stringify(contacts))
    window.location.reload()

}

const getContacts = () => {
    const contactsListString = localStorage.getItem(contactsKey)

    contacts = JSON.parse(contactsListString)
    

    const namesList = document.getElementById('lista-nombres')

    contacts.forEach((name, index) => {
        const nodeName = document.createElement('p')
        const updateButton = document.createElement('button')
        updateButton.textContent = `Update`
        updateButton.setAttribute('onclick', `updateContact(${index})`)


        const deleteButton = document.createElement('button')
        deleteButton.textContent = `Delete`

        deleteButton.setAttribute('onclick', `deleteContact(${index})`)

        nodeName.textContent = `${index + 1}: ${name}`
        namesList.appendChild(nodeName)
        namesList.appendChild(updateButton)
        namesList.appendChild(deleteButton)

    })
}

// Cargar los datos del localstorage

getContacts()

const addButton = document.getElementById( 'add-button' )

const form = document.getElementById( 'form' )

form.addEventListener( 'submit', addContact )

addButton.addEventListener( 'click', addContact )