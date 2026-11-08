export default renderBackdrop(ctx, levelId) {
  const image = new Image();
  
  image.src = `./assets/backdrops/${levelId}.png`;

  image.addEventListener("load", (e) => {
    ctx.drawImage(image, 0, 0);
  });
}
