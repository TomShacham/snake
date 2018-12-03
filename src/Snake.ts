export class Cell {
  constructor(private x: number, private y: number) {}
}

export function cell(x: number, y: number): Cell {
  return new Cell(x, y);
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

  constructor(private cells: Cell[]) {
    this.head = cells[0];
    this.direction = Direction.Right;
  }
}

export function snake(cells: Cell[] = [cell(2, 1), cell(1, 1)]) {
  return new Snake(cells);
}
