const readlineSync = require("readline-sync");

// puhelinluettelo lista
let phonebook = [];

phonebook.push({ name: "alias", phone: "123456" });
phonebook.push({ name: "chuck", phone: "988765" });

/*
function getPhoneNumber(list, name) {
  const person = list.find((p) => p.name.toLowerCase() === name.toLowerCase());
  return person ? person.phone : null;
}
*/

// funktio jolla haetaan puhelinumeroa nimen perusteella
function getPhoneNumber(list, name) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].name.toLowerCase() === name.toLowerCase()) {
      return list[i].phone;
    }
  }
  return null;
}

//funktio joka antaa truen jos henkilö on jo listassa
function nameExists(list, name) {
  for (const person of list) {
    if (person.name.toLowerCase() === name.toLowerCase()) {
      return true;
    }
  }
  return false;
}

// päävalikko
while (true) {
  console.log("\n1 = Lisää henkilö");
  console.log("2 = Hae puhelinnumero nimen perusteella");
  console.log("3 = Lopeta");

  const choice = readlineSync.question("Valitse toiminto (1,2,3): ");

  // henkilötietojen lisääminen listaan
  if (choice === "1") {
    const name = readlineSync.question("Anna nimi: ");

    //tarkastetaan onko henkilön nimi listassa
    if (nameExists(phonebook, name)) {
      console.log("Henkilö on jo olemassa puhelinluettelossa.");
      continue;

      //Ohjelma jatkuu jos nimi ei ollut jo listassa
    } else {
      const phone = readlineSync.question("Anna puhelinnumero: ");

      // lisätään puhelinluetteloon
      phonebook.push({ name: name, phone: phone });
      console.log("Henkilö lisätty.");
    }

    console.log("Henkilö lisätty.");

    //Haetaan henkilöä nimen perusteella
  } else if (choice === "2") {
    const name = readlineSync.question("Anna haettavan henkilön nimi. ");
    const phoneNumber = getPhoneNumber(phonebook, name);

    if (phoneNumber) {
      console.log("Puhelinnumero:", phoneNumber);
    } else {
      console.log("Henkilöä ei löytynyt.");
    }

    // lopetaan ohjelma
  } else if (choice === "3") {
    console.log("Ohjelma lopetetaan.");
    break;
    //virheellinen syöte output
  } else {
    console.log("Virheellinen valinta.");
  }
}
