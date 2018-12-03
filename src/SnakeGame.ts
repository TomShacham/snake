import { Snake } from "./Snake";

export interface Game {
  print(): string;
}

export class SnakeGame implements Game {
  private cells: string[][];
  private topBottomBorder: string[];

  constructor(
    private width: number,
    private height: number,
    private snake: Snake,
  ) {
    this.topBottomBorder = [' ', ...('-'.repeat(width)), ' '];
    this.cells = [...new Array(height)].map(it => it).map(row => SnakeGame.rowOf(width));
  }

  print(): string {
    const lineBreak = '\n';
    return lineBreak +
      this.topBottomBorder.join('') +
      lineBreak +
      this.cells.map(row => ['|', ...row, '|'].join('')).join('\n') +
      lineBreak +
      this.topBottomBorder.join('') +
      lineBreak
  }

  private static rowOf(width: number) {
    return [...(' '.repeat(width))]
  }

}

