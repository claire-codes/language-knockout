describe "Knockout grammar", ->
  grammar = null

  beforeEach ->
    waitsForPromise ->
      atom.packages.activatePackage("language-knockout")

    runs ->
      grammar = atom.grammars.grammarForScopeName("source.knockout")

  it "parses the grammar", ->
    expect(grammar).toBeTruthy()
    expect(grammar.scopeName).toBe "source.knockout"

  it "tokenizes comments in internal subsets correctly", ->
    {tokens} = grammar.tokenizeLine('<!-- ko: foreach floop -->')
    
    console.log tokens

    expect(tokens[0]).toEqual value: '<!--', scopes: []
    expect(tokens[0]).toEqual value: '<',   scopes: ['text.xml', 'meta.tag.no-content.xml', 'punctuation.definition.tag.xml']
    expect(tokens[1]).toEqual value: 'n',   scopes: ['text.xml', 'meta.tag.no-content.xml', 'entity.name.tag.xml', 'entity.name.tag.localname.xml']
    expect(tokens[2]).toEqual value: '>',   scopes: ['text.xml', 'meta.tag.no-content.xml', 'punctuation.definition.tag.xml']
    expect(tokens[3]).toEqual value: '</',  scopes: ['text.xml', 'meta.tag.no-content.xml', 'punctuation.definition.tag.xml']
    expect(tokens[4]).toEqual value: 'n',   scopes: ['text.xml', 'meta.tag.no-content.xml', 'entity.name.tag.xml', 'entity.name.tag.localname.xml']
    expect(tokens[5]).toEqual value: '>',   scopes: ['text.xml', 'meta.tag.no-content.xml', 'punctuation.definition.tag.xml']
