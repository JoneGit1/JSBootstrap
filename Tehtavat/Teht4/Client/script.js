$(document).ready(() => {
  // Haetaan nappi
  const searchButton = $('[name="submit"]');

  // Search nappi ja sen toiminta
  searchButton.on("click", () => {
    // Haetaan käyttäjän syöttämä nimi input-kentästä
    const searchName = $("#nimi").val();

    // Haetaan serveristä dataa (odotetaan)
    $.getJSON("http://localhost:3000/data", (data) => {
      // Muttuja jos ei saada yhteyttä
      let found = false;

      // Käydään kaikki henkilöt läpi
      $.each(data, (index, person) => {
        // Verrataan nimiä (ei huomioida isoja/pieniä kirjaimia)
        if (person.nimi.toLowerCase() === searchName.toLowerCase()) {
          // Jos löytyy, näytetään puhelinnumero input-kentässä
          $("#puhelin").val(person.puhelin);

          // Jos henkilö löytyi => muuttuja true
          found = true;
        }
      });

      // Jos found on false niin puhelin value on "ei löytynyt"
      if (!found) {
        $("#puhelin").val("Ei löytynyt");
      }
    }).fail((error) => {
      // Jos tapahtuu virhe (esim. serveri ei ole päällä)
      console.error("Virhe:", error);
    });
  });
  // takaisin buttoni
  $("#btnTakaisin").on("click", () => {
    window.location.href = "index.html";
  });
});
