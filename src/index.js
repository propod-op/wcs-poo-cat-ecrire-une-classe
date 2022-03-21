class Cat {
  contructor(nom, race, age, specificite, miaulement) {
    this.nom = nom;
    this.race = race;
    this.age = age;
    this.specificite = specificite;
    this.miaulement = miaulement;
  }

  miaule() {
    return `Je miaule comme çà : ${this.miaulement}`;
  }

  decritToi() {
    return `Je m'apelle ${this.nom} et je suis un ${this.race}, j'ai ${this.age} ans.`;
  }
}

const british = new Cat(
  "Spooky",
  "british shorthair",
  "1",
  "raleur",
  "Miaaahh!!!"
);
const black = new Cat("bubulle", "gouttiere noir", "1", "peureux", "miiiou...");
const rouquin = new Cat("Rooky", "gouttiere roux", "1", "calin", "Miaaaow...!");

console.log(british.miaule());
console.log(british.decritToi());

console.log(black.miaule());
console.log(black.decritToi());
