export class Cell {
  constructor(public x: number, public y: number) {}
}

export enum Direction {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right',
}

export class Snake {
  head: Cell;
  direction: Direction;
  private tail: Cell[];

  constructor(private cells: Cell[]) {
    this.head = cells[0];
    this.tail = cells.slice(1);
    this.direction = Direction.Right;
  }

  isSnake(x: number, y: number) {
    if (this.head.x === x && this.head.y === y) {
      return 'head';
    }

    for (let cell of this.tail) {
      if (cell.x === x && cell.y === y) {
        return 'tail';
      }
    }

    return 'none';
  }
}

export function snake(cells: Cell[] = [new Cell(1, 2), new Cell(1, 1)]) {
  return new Snake(cells);
}
