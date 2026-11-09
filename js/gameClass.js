export default class Game {
  level = "tutorial-word";
  player = new Player();
  
  constructor() {
    
  }

  getLevel() {
    return this.level;
  }
}
