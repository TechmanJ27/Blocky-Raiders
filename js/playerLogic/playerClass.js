export default class Player {
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
      this.inventory.clearBackpack();
      this.x = this.spawnX;
      this.y = this.spawnY;
  };

  this.respawn.clear = () => {
      this.inventory.clear();
  };

  
}
