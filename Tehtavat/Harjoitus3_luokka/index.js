// Person-luokka
class Person {
  constructor(firstName, lastName, nickName, birthYear) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._nickName = nickName;
    this._birthYear = birthYear;
  }
  // Henkilö/Person Getters ja Setters
  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  get nickName() {
    return this._nickName;
  }

  set nickName(value) {
    this._nickName = value;
  }

  get birthYear() {
    return this._birthYear;
  }

  set birthYear(value) {
    this._birthYear = value;
  }
}

// Athlete-luokka, joka perii Person-luokan
class Athlete extends Person {
  constructor(
    firstName,
    lastName,
    nickName,
    birthYear,
    imageLink,
    weight,
    sport,
    achievements,
  ) {
    super(firstName, lastName, nickName, birthYear);
    this._imageLink = imageLink;
    this._weight = weight;
    this._sport = sport;
    this._achievements = achievements;
  }

  // Getters and Setters for Athlete
  get imageLink() {
    return this._imageLink;
  }

  set imageLink(value) {
    this._imageLink = value;
  }

  get weight() {
    return this._weight;
  }

  set weight(value) {
    if (value > 0) {
      this._weight = value;
    }
  }

  /*
    set weight(value) {
    if (value > 0) {
      this._weight = value;
    } else {
      console.log("Invalid weight, must be > 0");
      this._weight = 0;
    }
  }
    */

  get sport() {
    return this._sport;
  }

  set sport(value) {
    this._sport = value;
  }

  get achievements() {
    return this._achievements;
  }

  set achievements(value) {
    this._achievements = value;
  }

  // Print metodi. Tulostaa Urheilijan tiedot
  printInfo() {
    console.log("Name: " + this.nickName + " " + this.lastName);
    console.log("Nickname: " + this.nickName);
    console.log("Birth Year: " + this.birthYear);
    console.log("Sport: " + this.sport);
    console.log("Weight: " + this.weight + " kg");
    console.log("Achievements: " + this.achievements);
    console.log("Image: " + this.imageLink);
    console.log("");
  }
}

// Esimerkkejä Urheilijoista
/*
  Athlete constructor parameters
  - firstName
  - lastName
  - nickName
  - birthYear
  - imageLink
  - weight
  - sport
  - achievements
*/
//Unohdin että Anakin Skywalker ei ole urheilija, mutta se ei haittaa.
const athlete1 = new Athlete(
  "Anakin",
  "Skywalker",
  "Ani",
  2079,
  "https://upload.wikimedia.org/wikipedia/fi/5/5c/DVader.jpeg",
  90,
  "Pod Racer",
  "Tattooine Pod Racer Gold Medalist",
);

//Athlete 2, Seppo Räty
const athlete2 = new Athlete(
  "Seppo",
  "Räty",
  "Seppo",
  1962,
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Seppo_R%C3%A4ty_heitt%C3%A4%C3%A4_keih%C3%A4st%C3%A4_Kimpisen_urheilukent%C3%A4ll%C3%A4_Lappeenrannassa_1992.jpg",
  100,
  "Javelin thrower",
  "Olympic silver 1992",
);

// Tulostaa Urhehilijat
athlete1.printInfo();
athlete2.printInfo();

console.log(athlete1.weight);
