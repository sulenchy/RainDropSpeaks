const assert = require('chai').assert;
const myApp = require('../src/main.js');

describe('RainDropSpeak', () => {

  describe('Handle valid input', () => {
    it("should return 'Plong' as input for 28", () => {
      assert.equal(myApp.rainDropSpeak(28), 'Plong');
    });
    it("should return 'Pling' as input for 9", () => {
      assert.equal(myApp.rainDropSpeak(9), 'Pling');
    });
    it("should return 'Pling' as input for 11", () => {
      assert.equal(myApp.rainDropSpeak(11), '11');
    });
    it("should return 'Pling' as input for 1001", () => {
        assert.equal(myApp.rainDropSpeak(1001), 'Plong');
      });
    it("should return '34' as input for 34", () => {
      assert.equal(myApp.rainDropSpeak(34), '34');
    });
    it("should return 'PlingPlang' as input for 1755", () => {
      assert.equal(myApp.rainDropSpeak(1755), 'PlingPlang');
    });

  });


  describe('Handle invalid input', () => {

    it('should return undefined as input for -3', () => {
      assert.equal(myApp.rainDropSpeak(-3), 'undefined');
    });
    it('should return undefined as input for 0', () => {
        assert.equal(myApp.rainDropSpeak(0), 'undefined');
      });

    it("should return undefined as input for '-3'", () => {
      assert.equal(myApp.rainDropSpeak('-3'), 'undefined');
    });

    it("should return undefined as input for 'demo'", () => {
      assert.equal(myApp.rainDropSpeak('demo'), 'undefined');
    });
  });

});
