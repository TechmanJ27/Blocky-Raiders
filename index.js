import {Game, registerKeyPresses, renderBackdrop} from './js/index.js';
export const game = new Game();
registerKeyPresses();            
renderBackdrop(game.getLevel().id, 100/*game.player.getX()*/);
