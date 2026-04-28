document.addEventListener("DOMContentLoaded", () => {
  // Haetaan nappi
  const searchButton = document.querySelector('[name="submit"]');

  // napille klikkaus
  searchButton.addEventListener("click", async () => {
    // Haetaan käyttäjän syöttämä nimi input-kentästä
    const searchName = document.getElementById("nimi").value;

    try {
      // Haetaan serveristä dataa (odotetaan)
      const response = await fetch("http://localhost:3000/data");

      // Muutetaan vastaus JSON-muotoon
      const data = await response.json();

      // Muttuja jos ei saada yhteyttä
      let found = false;

      // Käydään kaikki henkilöt läpi
      data.forEach((person) => {
        // Verrataan nimiä (ei huomioida isoja/pieniä kirjaimia)
        if (person.nimi.toLowerCase() === searchName.toLowerCase()) {
          // Jos löytyy, näytetään puhelinnumero input-kentässä
          document.getElementById("puhelin").value = person.puhelin;

          // Jos henkilö löytyi => muuttuja true
          found = true;
        }
      });

      // Jos found on false niin puhelin value on "ei löytynyt"
      if (!found) {
        document.getElementById("puhelin").value = "Ei löytynyt";
      }
    } catch (error) {
      // Jos tapahtuu virhe (esim. serveri ei ole päällä)
      console.error("Virhe:", error);
    }
  });
});
