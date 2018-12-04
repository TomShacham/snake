export class Cell {
  constructor(public x: number, public y: number) {}

  moveRight(): Cell {
    return new Cell(this.x + 1, this.y);
  }

  moveLeft() {
    return new Cell(this.x - 1, this.y);
  }

  moveUp() {
    return new Cell(this.x, this.y - 1);
  }

  moveDown() {
    return new Cell(this.x, this.y + 1);
  }
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
  private tail: Cell[];

  constructor(private cells: Cell[], public direction: Direction) {
    this.head = cells[0];
    this.tail = cells.slice(1);
  }

  isSnake(x: number, y: number) {
    if (this.head.y === y && this.head.x === x) {
      return 'head';
    }

    for (let cell of this.tail) {
      if (cell.y === y && cell.x === x) {
        return 'tail';
      }
    }

    return 'none';
  }

  move(): Snake {
    switch (this.direction) {
      case Direction.Right:
        return new Snake(this.cells.map(cell => cell.moveRight()), this.direction);
      case Direction.Left:
        return new Snake(this.cells.map(cell => cell.moveLeft()), this.direction);
      case Direction.Up:
        return new Snake(this.cells.map(cell => cell.moveUp()), this.direction);
      case Direction.Down:
        return new Snake(this.cells.map(cell => cell.moveDown()), this.direction);
      default:
        return this;
    }
  }
}

export function snake(cells: Cell[] = [cell(2, 1), cell(1, 1)], direction: Direction = Direction.Right) {
  return new Snake(cells, direction);
}
