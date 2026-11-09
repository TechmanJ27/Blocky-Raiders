import {Game, registerKeyPresses, renderBackdrop} from './js/index.js';
export const game = new Game();
registerKeyPresses();            
renderBackdrop(game.level, 100/*game.player.getX()*/);
