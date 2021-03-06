import { SnakeGame } from "./SnakeGame";
import { Cell, Snake } from "./Snake";

(async function main() {
  const [width, height] = process.argv.splice(2);

  const game = new SnakeGame(Number(height), Number(width), new Snake([new Cell(2, 0), new Cell(1, 0)]));

  process.stdin.resume();
  process.stdin.setRawMode!(true);
  process.stdin.on('data', function (chunk) {
    console.log('received: ', chunk.toString());
    if (chunk.toString() === 'q') process.exit();
  });

  const refreshRate = 1000;
  setInterval(() => console.log(game.print()), refreshRate);
})();