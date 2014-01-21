# Slide Toggle Buttons

An open source library of flat UI slide toggle buttons, [check it out](http://tgolson.github.io/tggl-prjct/).

### Overview

Overview
The goal of the ```<tggl-prjct>``` is to create an extremely light-weight solution for adding toggle buttons to a project, while also keeping it flexible and as feature rich as possible.

Nice looking toggle buttons take an un-proportional amount time to make compared to other HTML elements. Some larger libraries and frameworks exist that include toggle buttons, but not in a way that makes it easy to just use as a one-off feature.

That's why the ```<tggl-prjct>``` was created. This open source library of toggle buttons lets you quickly and simply add a toggle button feature to any website, and aims to make customization just as easy.

### Get Started

Either include external links to the ```tggl.css``` and ```tggl.js``` in your page:

```html
<link rel="stylesheet" type="text/css" href="http://tgolson.github.io/tggl-prjct/css/tggl.css">
<script type="text/javascript" src="http://tgolson.github.io/tggl-prjct/js/tggl.js"></script>
```
Or, [download the files directly](https://github.com/TGOlson/tggl-prjct/archive/gh-pages.zip) and use them locally.

Then simply add the correct div classes to your code, for example:

```html
<div class='toggle-button toggled'>
  <div class='toggle-circle border'></div>
</div>
```

### Known Issues

* ```toggle-button``` class ```pill``` overwrites any ```expand-hover``` effect (may be good to leave this way due to sizing issues)
* Cannot stack ```tall``` and ```long``` classes, or ```tiny``` ```small``` and ```large``` (use other modifiers instead)

### Documentation

[Ditto](http://tgolson.github.io/tggl-prjct/documentation.html)

### How to Contribute

Contribution to the ```<tggl-prjct>``` is greatly needed and greatly appreciated.

To contribute please fork this repo GitHub, then issue a pull request for any changes made.

Check for any know issues in the repository, or lend a hand and help create something that would be cool or useful.

Also note, this site is created using [Foundation](http://foundation.zurb.com/). It may be useful to review their documents is you are having any trouble getting the site to run locally.

[Compass](http://compass-style.org/) is recommended to be used for compiling SASS to CSS. With compass installed, navigate to the root project folder and run:

```compass watch```

### Upcoming

* ```thick-border``` class to button
* Simple JS action plugins
* Migration to ```button``` class from ```div```
* SASS and/or LESS support
* On-site customization
* Animation options using CSS3 and/or jQuery plugins