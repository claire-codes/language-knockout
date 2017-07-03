var expect = require("chai").expect;

/**
  * This is an attempt to document what the regexes in the grammar match
  **/
describe("Virtual bindings capturing regexes", function() {
    // N.B. You don't need to escape the special chars in direct JS but we do in the cson file
    var innerContentsRegex = /(\w+)(: *)(\w+)/;
    var results = [];

    // We want to ignore the first array element as it's just the string,
    // and if the other results are correct the first one will be,
    // therefore we splice(1) the results.
    it("*foreach: foo*", function() {
        results = innerContentsRegex.exec("foreach: foo").splice(1);
        expect(results.length).to.equal(3);
        expect(results).to.eql(["foreach", ": ", "foo"]);
    });

    it("* foreach: foo*", function() {
        results = innerContentsRegex.exec(" foreach: foo").splice(1);
        expect(results.length).to.equal(3);
        expect(results).to.eql(["foreach", ": ", "foo"]);
    });

    it("*foreach:foo*", function() {
        results = innerContentsRegex.exec("foreach:foo").splice(1);
        expect(results.length).to.equal(3);
        expect(results).to.eql(["foreach", ":", "foo"]);
    });

    it("*foreach: foo *", function() {
        results = innerContentsRegex.exec("foreach: foo ").splice(1);
        expect(results.length).to.equal(3);
        expect(results).to.eql(["foreach", ": ", "foo"]);
    });

    it("* foreach: foo *", function() {
        results = innerContentsRegex.exec(" foreach: foo ").splice(1);
        expect(results.length).to.equal(3);
        expect(results).to.eql(["foreach", ": ", "foo"]);
    });

    it("*  foreach:  foo  *", function() {
        results = innerContentsRegex.exec("  foreach:  foo  ").splice(1);
        expect(results.length).to.equal(3);
        expect(results).to.eql(["foreach", ":  ", "foo"]);
    });
});
