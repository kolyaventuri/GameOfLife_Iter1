class Game {
  constructor(width, height) {
    this.grid = new Array(height);

    for(let i = 0; i < height; i += 1) {
      this.grid[i] = new Array(width);

      for(let j = 0; j < width; j++) {
        let value = ~~(Math.random() * 2);
        if(value === 2) value = 1;

        this.grid[i][j] = value;
      }
    }

  }
}

module.exports = Game;