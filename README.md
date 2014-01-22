# ```<tggl-prjct>```

An open source library of flat UI slide toggle buttons.

[View the site](http://tgolson.github.io/tggl-prjct/) for examples, features, and other info.

[Documentation](https://github.com/TGOlson/tggl-prjct/blob/gh-pages/documentation/README.md)

### Overview

Overview
The goal of the ```<tggl-prjct>``` is to create an extremely light-weight solution for adding toggle buttons to a project, while also keeping it flexible and as feature rich as possible.

Nice looking toggle buttons take an un-proportional amount time to make compared to other HTML elements. Some larger libraries and frameworks exist that include toggle buttons, but not in a way that makes it easy to just use as a one-off feature.

That's why the ```<tggl-prjct>``` was created. This open source library of toggle buttons lets you quickly and simply add a toggle button feature to any website, and aims to make customization just as easy.

### Get Started

Either include external links to the ```tggl.css``` and ```tggl.js``` files in your page:

```html
<link rel="stylesheet" type="text/css" href="http://tgolson.github.io/tggl-prjct/stylesheets/tggl.css">
<script type="text/javascript" src="http://tgolson.github.io/tggl-prjct/js/tggl.js"></script>
```
Or, [download the files directly](https://github.com/TGOlson/tggl-prjct/archive/gh-pages.zip) and use them locally.

Then simply add the correct div classes to your code, for example:

```html
<div class='tggl-button toggled'>
  <div class='tggl-circle border'></div>
</div>
```

### Known Issues

* ```tggl-circle``` class ```pill``` overwrites any ```expand-hover``` effect (may be good to leave this way due to sizing issues)
* Cannot stack ```tall``` and ```long``` classes, or ```tiny``` ```small``` and ```large``` (use other modifiers instead)
* Borders break with frameworks that default to ```border-box``` for the ```box-sizing``` attribute.
  * This should be fixed in most instances, but if error persists try over-riding the styles with ```content-box``` as shown below:

```css
.tggl-button{
  box-sizing: content-box;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
}
```

### Upcoming

* Add ```thick-border``` class to button
* Simple JS action plugins
* FontAwesome Icon Support
* SASS and/or LESS support
* On-site customization
* More circle class support, for example colors for circle.
* Animation options using CSS3 and/or jQuery plugins

### How to Contribute

Contribution to the ```<tggl-prjct>``` is greatly needed and greatly appreciated.

To contribute please fork this repo GitHub, then issue a pull request for any changes made. Check for any know issues in the repository, or lend a hand and help create something that would be cool or useful.

Also note, this site is created using [Foundation](http://foundation.zurb.com/). It may be useful to review their documents, including using [Bower](http://bower.io/) for dependency management, if you are having any troubles.

[Compass](http://compass-style.org/) is recommended to be used for compiling SASS to CSS. With compass installed, navigate to the root project folder and run ```compass watch```.

In most cases, this sequence will work if starting from scratch:

```gem install foundation```

```npm install -g bower grunt-cli```

*note: node needs to be installed*

```gem install compass```

Navigate to root project directory.

```foundation update```

```compass watch```