export default renderBackdrop(ctx, levelId, playerX) {
  const image = new Image();
  
  image.src = `./assets/backdrops/${levelId}.png`;

  image.addEventListener("load", (e) => {
    ctx.drawImage(image, 0 + playerX * 0.8, 0);
  });
}
