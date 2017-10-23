const assert = require('chai').assert;
const myApp = require('../src/main.js');

describe("RainDropSpeak", function(){

describe("Handle valid input",function(){
    it("should return 'Plong' as input for 28", function(){
    assert.equal(myApp.rainDropSpeak(28),"Plong");
    });
    it("should return 'Pling' as input for 9", function(){
        assert.equal(myApp.rainDropSpeak(9),"Pling");
    });
    it("should return 'Pling' as input for 11", function(){
        assert.equal(myApp.rainDropSpeak(11),"11");
    });
    it("should return '34' as input for 34", function(){
        assert.equal(myApp.rainDropSpeak(34),"34");
    });
    it("should return 'PlingPlang' as input for 1755", function(){
        assert.equal(myApp.rainDropSpeak(1755),"PlingPlang");
    });
 
});


describe("Handle invalid input",function(){
 
 it("should return undefined as input for -3", function(){
  assert.equal(myApp.rainDropSpeak(-3),'undefined');
 });

 it("should return undefined as input for '-3'", function(){
    assert.equal(myApp.rainDropSpeak('-3'),'undefined');
   });
 
 it("should return undefined as input for 'demo'", function(){
    assert.equal(myApp.rainDropSpeak('demo'),'undefined');
   });
});

})