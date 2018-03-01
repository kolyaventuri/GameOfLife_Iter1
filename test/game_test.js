const assert = require('assert');
const Game = require('../lib/game');
const pry = require('pryjs');

const game = new Game(3, 3);

describe('game', () => {

  describe('Grid', () => {
    it('should be an instance of an Array', () => {
      assert(game.grid instanceof Array);
    });

    it('should return an array of arrays', () => {
      assert(game.grid.length > 0);
      for(let row of game.grid) {
          assert(row instanceof Array);
      }
    });

    it('should be a 3x3 grid', () => {
      assert(game.grid.length == 3);
      for(let row of game.grid) {
          assert(row.length == 3);
      }
    });

    it('should start with cells', () => {
      for(let row of game.grid) {
        for(let cell of row) {
          assert(cell == 0 || cell == 1);
        }
      }
    });
  });
});