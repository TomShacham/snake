export interface Game {
  width: number;
  height: number;
  cells: Array<Array<string>>;
  print(): string;
}

export class SnakeGame implements Game {
  public cells: string[][];

  constructor(public width: number, public height: number) {
    this.cells = [...new Array(height)].map(it => it).map(row => SnakeGame.rowOf(width));
  }

  print(): string {
    const finalLineBreak = '\n';
    return this.cells.map(row => row.join('\n')).join(' ') + finalLineBreak
  }

  private static rowOf(width: number) {
    return [...(' '.repeat(width))]
  }

}

export function createNewGame(width: number, height: number): Game {
  return new SnakeGame(width, height);
}
