let names = []
let passwords = []
let loop = true

while(loop){
    let choosedOption = options()
    if(choosedOption === 1) {
        addNamePassword()
    } else if(choosedOption === 2){
        let typeName = prompt("Login: ")
        let typePassword = prompt("Password: ")
        let loginCheck = login(typeName, typePassword)
        console.log(loginCheck)
    } else if(choosedOption === 3){
        let nameDelete = prompt("Name to delete: ")
        deletionOfRegistration(nameDelete)
    } else if(choosedOption === 4){
        loop = false
    } else {
        console.log("Choose one of the right options.")
    }
}

console.log(names)
console.log(passwords)

function options() {
    let option = parseInt(prompt("1-Register, 2-Login, 3-Delete, and 4-End"))
    return option
}

function addNamePassword() {
    let userName = prompt("User name: ")
    let userPassword = prompt("User password: ")
    names.push(userName)
    passwords.push(userPassword)
}

function login(name, password) {
    for(let i = 0; i < names.length; i++) {
        if(name === names[i] && passwords[i] === password) {
            console.log("User log in!")
            return true
        }
    }
    console.log("Nome ou senha incorretos!")
    return false
}

function deletionOfRegistration(name){
    let getIndex = names.indexOf(name)
    let auxNames = []
    let auxPasswords = []
    let auxCont = 0
    for(let i = 0; i < names.length; i++) {
        if(name === names[getIndex]){
            console.log("Name deleted.")
        } else {
            auxNames[auxCont] = names[i]
            auxPasswords[auxCont] = passwords[i]
            auxCont++
        }
    }
    names = auxNames
    passwords = auxPasswords
}