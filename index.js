import * as 'GameModule' from './js/index.js';
export const game = new Game();
registerKeyPresses();
renderBackdrop(game.getLevel().id, game.player.getX());
