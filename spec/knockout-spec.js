describe("Knockout Grammar", function() {
    var grammar = null;

    beforeEach(function() {
        waitsForPromise(function() {
            return atom.packages.activatePackage("language-knockout");
        });
        runs(function() {
            grammar = atom.grammars.grammarForScopeName("source.knockout");
        });
    });

    it("parses the grammar", function() {
        expect(grammar).toBeTruthy();
        expect(grammar.scopeName).toBe("source.knockout");
    });

    it("tokenizes comments in internal subsets correctly", function() {
        var tokens = grammar.tokenizeLine("<!-- ko foreach: floop -->").tokens;

        expect(tokens[0]).toEqual({
            value: "<!-- ",
            scopes: ["source.knockout", "meta.tag.block.knockout", "punctuation.definition.tag.begin.knockout"]
        });
        expect(tokens[1]).toEqual({
            value: "ko",
            scopes: ["source.knockout", "meta.tag.block.knockout", "entity.tag.name.knockout"]
        });
        expect(tokens[2]).toEqual({
            value: " ",
            scopes: ["source.knockout", "meta.tag.block.knockout"]
        });
        expect(tokens[3]).toEqual({
            value: "foreach",
            scopes: ["source.knockout", "meta.tag.block.knockout", "entity.other.attribute-name.knockout"]
        });
        expect(tokens[4]).toEqual({
            value: ": ",
            scopes: ["source.knockout", "meta.tag.block.knockout"]
        });
        expect(tokens[5]).toEqual({
            value: "floop",
            scopes: ["source.knockout", "meta.tag.block.knockout", "variable.language.js"]
        });
        expect(tokens[6]).toEqual({
            value: " ",
            scopes: ["source.knockout", "meta.tag.block.knockout"]
        });
        expect(tokens[7]).toEqual({
            value: "-->",
            scopes: ["source.knockout", "meta.tag.block.knockout", "punctuation.definition.tag.end.knockout"]
        });
    });
});
