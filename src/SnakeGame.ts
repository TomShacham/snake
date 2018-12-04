import { Snake } from "./Snake";



export interface Game {
  nextFrame(): Promise<Game>
  print(): string;
}

export class SnakeGame implements Game {
  private topBottomBorder: string[];

  constructor(
    private width: number,
    private height: number,
    private snake: Snake,
  ) {
    this.topBottomBorder = [' ', ...('-'.repeat(width)), ' '];
  }

  print(): string {
    const lineBreak = '\n';
    return lineBreak +
      this.topBottomBorder.join('') +
      lineBreak +
      this.printArenaOrSnake() +
      this.topBottomBorder.join('') +
      lineBreak
  }

  async nextFrame(): Promise<Game> {
    const newSnake = this.snake.move();
    return new SnakeGame(this.width, this.height, newSnake);
  }

  private printArenaOrSnake() {
    let string = '';
    for (let y=0; y < this.height; y++) {
      string += '|';
      for (let x=0; x < this.width; x++) {
        if (this.snake.isSnake(x, y) === 'head') {
          string += 'Q';
          continue;
        }
        if (this.snake.isSnake(x, y) === 'tail') {
          string += 'o';
          continue;
        }
        string += ' '
      }
      string += '|\n'
    }
    return string;
  }
}

