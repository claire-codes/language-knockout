# language-knockout

Knockout language package for Atom editor.

There is currently no special syntac highlighting for some special parts of the KnockoutJs library/framework/mess - it's almost as if no one uses KnockoutJs anymore! 😲

### Notes

This is what we originally had:

```html
<span class="comment block html">
    <span class="punctuation definition comment html">
        &lt;!--
    </span> ko foreach: myItems <span class="punctuation definition comment html">--&gt;</span>
</span>
```

`if` and `for` are keyword control js.

It seems to take the first one it comes across: if I put two patterns for the same symbol in the same cson file, it uses the first one in the file.

```json
{
    'match': '42'
    'name': 'constant.numeric.foo'
}
{
    'match': '42'
    'name': 'constant.numeric.bar'
}
```

will be foo.

Try this as an example too - switch the order

```cson
{
    'match': 'foobar'
    'name': 'constant.string.foo'
}
{
    'match': 'foo'
    'name': 'constant.string.bar'
}
```

cson files are the opposite of CSS stylesheets - they take the first rule they find and stick with it.