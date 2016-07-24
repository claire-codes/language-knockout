This is what we originally had:

```html
<span class="comment block html">
    <span class="punctuation definition comment html">
        &lt;!--
    </span> ko foreach: myItems <span class="punctuation definition comment html">--&gt;</span>
</span>
```

`if` and `for` are keyword control js.

Can't get it to override existing HTML comments.

It seems to take the first one it comes across: if I put two patterns for the same symbol in the same cson file, it uses the first one in the file.

{
    'match': '42'
    'name': 'constant.numeric.foo'
}
{
    'match': '42'
    'name': 'constant.numeric.bar'
}

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

I think the only way to do this is to copy and paste the HTML in.

SO TRY IT WITH THE INCLUDES HTML AFTER THE CUSTOM?!