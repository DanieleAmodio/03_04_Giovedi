const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
}

const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
}

const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
}

const prices = [34, 5, 32]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = paul//cambia il valore qui per provare se il tuo algoritmo funziona!
let totCarrello = 0
let sconto = 0

let persone = []
persone.push(marco, paul, amy)
console.log(persone)
for (let utenti of persone) {
    console.log(utenti)
    if (utenti.isAmbassador) {
        console.log(utenti.name + utenti.lastName + " è un Ambassador")
    } else { console.log(utenti.name + utenti.lastName + " non è un Ambassador") }
}
let utenteA = []
for (let utenti of persone) {
    if (utenti.isAmbassador) {
        utenteA.push(utenti)
        console.log(utenteA)
    }
}
console.log("l'utente che sta effettuato l acquisto è  " + utenteCheEffettuaLAcquisto.name + utenteCheEffettuaLAcquisto.lastName)
for (i = 0; i < prices.length; i++) { totCarrello += prices[i] }
console.log(totCarrello)
if (totCarrello > 100) {
    console.log("hai superato i 100 nel tuo carrello per te la spedizione e gratis")
    if (utenteCheEffettuaLAcquisto.isAmbassador) {
        sconto = (totCarrello * 30) / 100
        console.log(`Sei un Utente Ambassador hai ottenuto uno sconto del 30% risparmi ${sconto} `)
        totCarrello -= sconto
        console.log(`Il costo totale e ${totCarrello}`)

    } else {
        console.log(`Il costo totale e ${totCarrello}`)
    }
} else if (utenteCheEffettuaLAcquisto.isAmbassador) {
    sconto = (totCarrello * 30) / 100
    console.log(`Sei un Utente Ambassador hai ottenuto uno sconto del 30% risparmi ${sconto} `)
    totCarrello -= sconto
    totCarrello+=shippingCost
    console.log(`Il costo totale compreso di spedizione è di ${totCarrello}`)

} else {
    totCarrello+=shippingCost
    console.log(`Il costo totale compreso di spedizione è di ${totCarrello}`)
}