import { SnakeGame } from "./SnakeGame";

(async function main() {
  const [width, height] = process.argv.splice(2);

  const game = new SnakeGame(Number(width), Number(height));

  const refreshRate = 1000;

  setInterval(() => console.log(game.print()), refreshRate);
})();