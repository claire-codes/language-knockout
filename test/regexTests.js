var expect = require('chai').expect;

describe("Virtual bindings capturing regexes", function() {
    var innerContentsRegex = /(\w+)(: *)(\w+)/;
    
    
    it("is alive", function() {
        expect(innerContentsRegex.exec('foreach: foo')[1]).to.equal('foreach');
    });
    xit("returns null if args are wrong", function() {
      testArray = ['foo','bar'];
      expect(howMany()).to.equal(null);
      expect(howMany(testArray)).to.equal(null);
      expect(howMany('foo')).to.equal(null);
    });

    xit("returns null if arg types aren't array & string/number", function() {
      var anArray = [];
      var anObject = {};
      expect(howMany(anArray, anArray)).to.eq(null);
      expect(howMany(anArray, anObject)).to.eq(null);
      expect(howMany(anObject, anArray)).to.eq(null);
    });
});
