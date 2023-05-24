const hero = {
  name: "Wasp",
  health: 30,
  heal() {
    this.health = 100;
  },
};
console.log(hero.health);
hero.heal();
console.log(hero.health);
