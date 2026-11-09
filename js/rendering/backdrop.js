export default renderBackdrop(levelId, playerX) {
  const image = new Image();
  
  image.src = `./assets/backdrops/${levelId}.png`;

  const canvas = document.getElementById("canvas");

  const ctx = canvas.getContext();

  image.addEventListener("load", (e) => {
    ctx.drawImage(image, 0 + playerX * 0.8, 0);
  });
}
