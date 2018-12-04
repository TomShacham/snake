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

export class Direction {
  static Up = 'w';
  static Left = 'a';
  static Down = 's';
  static Right = 'd';

  static fromCommand(command: string) {
    switch (command) {
      case 'w':
        return this.Up;
      case 'a':
        return this.Left;
      case 's':
        return this.Down;
      case 'd':
        return this.Right;
    }
  }
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

  move(command: string | undefined = undefined): Snake {
    const newOrPreviousDirection = command ? Direction.fromCommand(command) : this.direction;

    switch (newOrPreviousDirection) {
      case Direction.Right:
        return new Snake(this.cells.map(cell => cell.moveRight()), newOrPreviousDirection);
      case Direction.Left:
        return new Snake(this.cells.map(cell => cell.moveLeft()), newOrPreviousDirection);
      case Direction.Up:
        return new Snake(this.cells.map(cell => cell.moveUp()), newOrPreviousDirection);
      case Direction.Down:
        return new Snake(this.cells.map(cell => cell.moveDown()), newOrPreviousDirection);
      default:
        return this;
    }
  }
}

export function snake(cells: Cell[] = [cell(2, 1), cell(1, 1)], direction: Direction = Direction.Right) {
  return new Snake(cells, direction);
}
