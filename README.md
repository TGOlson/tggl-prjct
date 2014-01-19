# Slide Toggle Buttons

An open source library of flat UI slide toggle buttons, [check it out](http://tgolson.github.io/tggl-prjct/).

### Why

Nice looking toggle buttons take an un-proportional amount time to make compared to other HTML elements. Some larger libraries and frameworks exist that include toggle buttons, but not in a way that makes it easy to just use as a one-off feature.

### What

That's why I've created this open source library of toggle buttons. This library lets you quickly and simply add a toggle button feature to any website, and aims to make customization just as easy.

### How

Either include external links to the ```tggl.css``` and ```tggl.js``` in your page:
```html
<link rel="stylesheet" type="text/css" href="http://tgolson.github.io/tggl-prjct/css/tggl.css">
```
```html
<script type="text/javascript" src="http://tgolson.github.io/tggl-prjct/js/tggl.js"></script>
```
Or, [download the files directly](https://github.com/TGOlson/tggl-prjct/archive/gh-pages.zip) and use them locally.

Then simply add the correct div classes to your code, for example:

```html
<div class='toggle-button toggled'>
  <div class='toggle-circle border'></div>
</div>
```

This slide toggle library runs on vanilla JavaScript with a non-browser specific implementation, so it is extremely light weight, with no need to worry about additional external libraries.

### Know Issues

* ```toggle-button``` class ```pill``` overwrites any ```expand-hover``` effect (may be good to leave this way due to sizing issues)
* Cannot stack ```tall``` and ```long``` classes, or ```tiny``` ```small``` and ```large``` (use other modifiers instead)

### Examples

[Check out the site](http://tgolson.github.io/tggl-prjct/examples.html)

### Documentation

[Ditto](http://tgolson.github.io/tggl-prjct/documentation.html)

### Upcoming

* ```thick-border``` class to button
* Migration to ```button``` class from ```div```
* SASS and/or LESS support
* On-site customization
* Animation options using CSS3 and/or jQuery plugins