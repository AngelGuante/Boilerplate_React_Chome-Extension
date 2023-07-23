if (window.location['hostname'] === 'www.google.com') {
    const googlePage = (document.getElementsByClassName('L3eUgb'))[0]
    const googleLogo = googlePage.children[1]

    const elementToAdd = document.createElement('p')
    elementToAdd.classList.add("color-secondary-text", "type--caption")
    elementToAdd.style.textAlign = "center"
    elementToAdd.textContent = `🤗🥳 Plugin boilerplate is working!!`
    googleLogo.insertAdjacentElement("afterend", elementToAdd)
}