var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('不存在陣列裡時 回傳 -1', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
      assert.equal(1, [1,2,3].indexOf(5566));
    });
  });
});