import {SnakeGame} from "./SnakeGame";
import {Cell, Direction, Snake} from "./Snake";

(async function main() {
  const [width, height] = process.argv.splice(2);

  let game = new SnakeGame(
    Number(width),
    Number(height),
    new Snake([new Cell(0, 2), new Cell(0, 1)], Direction.Right));

  let commandStack: string[] = [];

  process.stdin.resume();
  process.stdin.setRawMode!(true);
  process.stdin.on('data', function (chunk) {
    commandStack.push(chunk.toString());
    if (chunk.toString() === 'q') process.exit();
  });

  const refreshRate = 1000;

  setInterval(async () => {
    const command = commandStack.pop();
    commandStack = [];
    const newGame = await game.nextFrame(command);
    console.log(newGame.print());
    game = newGame;
  }, refreshRate);
})();