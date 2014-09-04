# Markdown Widget Challenge

## Learning Competencies

* Use basic JavaScript - functions, control structures, scope: #p2
* Build a pure JavaScript application: #p2
* Build a pure JavaScript class: #p2
* Write OO JavaScript

## Summary

The goal will be to create a "live" markdown preview widget in JavaScript.
When a user enters Markdown *text* inside a text area, the _rendered_ version
is displayed elsewhere on the page.

The goal is to use object-oriented JavaScript to construct a widget.  Ideally
you should be able to issue the command:

    MarkdownWidget("#source-id", "#preview-div")

## Releases

### Release 0

Set up an object-oriented architecture (possibly [Model View Controller][MVC]
or [Model View Presenter][MVP]) that performs a "[identity transformation][identity]" based on the "keyup" event.  That is, return the
markdown text as the preview text.

### Release 1

Introduce the Markdown converter.  You need not implement the _full_
specification, but you should support `*`, `_`, and `**` for italics, italics,
and bold, respectively.

### Release 2

Swap out the transformation logic from *your* implementation to one provided by
a third party e.g. [markdown-js]

## Optimize your learning

Notice that sometimes it's helpful to delay the building of the algorithm until
later.  An identity transformation confirms that the flow works, but doesn't
hang your development process in the research of specifics.

## Resources

* [MVC][]
* [MVP][]
* [Identity transformation][identity]
* [markdown-js][]

[MVC]: http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller
[MVPresenter]: http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93presenter
[identity]: http://en.wikipedia.org/wiki/Identity_transform
[markdown-js]: https://github.com/evilstreak/markdown-js
