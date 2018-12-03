import {createNewGame} from "./SnakeGame";

(async function main() {

  const [width, height] = process.argv.splice(2);

  const game = createNewGame(Number(width), Number(height));

  game.print();

})();