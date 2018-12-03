export interface Game {
  width: number;
  height: number;
  cells: Array<Array<string>>;
  print(): string;
}

export class SnakeGame implements Game {
  public cells: string[][];
  private topBottomBorder: string[];

  constructor(public height: number, public width: number) {
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

export function createNewGame(width: number, height: number): Game {
  return new SnakeGame(width, height);
}
