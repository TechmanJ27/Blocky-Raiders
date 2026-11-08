import {player} from '../intialize/startGame.js';

export default function registerKeyPresses() {
  window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return;
    }
  
    switch (event.key) {
      case "ArrowDown":
        player.move.crouch();
        break;
      case "ArrowUp":
        player.move.jump();
        break;
      case "ArrowLeft":
        player.move.left()
        break;
      case "ArrowRight":
        player.move.right()
        break;
      default:
        return;
    }
  
    event.preventDefault();
  }, true);
}
