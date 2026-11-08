export class Player {
  public spawnX;
  public spawnY;
  
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  this.move = {
      jump: () => {
          console.log(`${this.name} jumped!`);
          return this;
      },
      right: () => {
          console.log(`${this.name} moved right!`);
          return this;
      },
      left: () => {
          console.log(`${this.name} moved left!`);
          return this;
      }
  };

  this.respawn = () => {
      this.clearInventory().exclude(SLOTS.BACKPACK);
      this.x = this.spawnX;
      this.y = this.spawnY;
  };

  this.respawn.clear = () => {
      console.log(`${this.name} jumped!`);
  };

  this.move.right = () => {
      console.log(`${this.name} moved right!`);
  };
}

const SLOTS = Object.freeze({
    HEAD: 0,
    CHEST: 1,
    LEGGINGS: 2,
    BOOTS: 3,
    SHIELD: 4,
    HOTBAR: Object.freeze({
      ONE: 5,
      TWO: 6,
      THREE: 7,
      FOUR: 8,
      FIVE: 9,
      SIX: 10,
    }),
    BACKPACK: Object.freeze({
      ONE: 11,
      TWO: 12,
      THREE: 13,
      FOUR: 14,
      FIVE: 15,
      SIX: 16,
      SEVEN: 17,
      EIGHT: 18,
      NINE: 19
    })
});
