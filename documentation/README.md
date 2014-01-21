# Documentation

Table of Contents

* [Features](#Features)
* [Syntax](#Syntax)
* [Getting Started](#GettingStarted)
* [Classes](#Classes)
  * [Standard](#Standard)
  * [Sizes](#Sizes)
  * [Shapes](#Shapes)
  * [Borders](#Borders)
  * [Hover Effects](#Hover Effects)
  * [Colors](#Colors)
  * [Multiple Classes](#MultipleClasses)
* [Adding/Extending Classes](#AddExtendClasses)

#<a name='Features'>Features</a>
* Written in SASS.
* Name spaced with ```tggl-button``` and ```tggl-circle``` classes.
* No external libraries.
* Fully open source.

All actions are written in vanilla JavaScript, which allows the library to remain lightweight an not rely on any external libraries. This also makes customization extremely easy.

If customization is desired, the simplest way to do so is to download the external files and make modifications to the existing JavaScript or CSS. This solution includes the added benefit of being able to work with the origin SASS files, if desired. However, additional actions or styles can still be added if using the hosted solution by adding or overriding styles.

#<a name='Syntax'>Syntax</a>

Syntax is simple -- just use the premade ```tggl-prjct``` classes like you would any other CSS class. Then stack classes onto the default framework to customize.

#<a name='GettingStarted'>Getting Started</a>

Either include external links to the ```tggl.css``` and ```tggl.js``` in your page:

```html
<link rel="stylesheet" type="text/css" href="http://tgolson.github.io/tggl-prjct/stylesheetes/tggl.css">
<script type="text/javascript" src="http://tgolson.github.io/tggl-prjct/js/tggl.js"></script>
```
Or, [download the files directly](https://github.com/TGOlson/tggl-prjct/archive/gh-pages.zip) and use them locally.

Then simply add the correct div classes to your code, for example:

```html
<div class='tggl-button toggled'>
  <div class='tggl-circle border'></div>
</div>
```

#<a name='Classes'>Classes</a>

This is an extensive list of all out-of-the-box classes that come in this library.

With the exception of the Standard class section, which explains some base components, all classes can be used by adding them to the minimal structure shown below.

```html
<div class='tggl-button'>
  <div class='tggl-circle'></div>
</div>
```

###<a name='Standard'>Standard</a>

  **Button Classes**

  The minimal required structure creates an immediately usable toggle button, which can be consider a 'default' class.

  ```toggled``` is automatically appended to all toggled buttons, or can be added manually to create a button in a toggled state.

  ```no-bg-toggle``` removes the background color change when a button is toggled.

  **Circle Classes**
  None

###<a name='Sizes'>Sizes</a>

  **Button Classes**
  Sizing, ranging from 70% to 140% of the default sizing.

  ```tiny``` 70% smaller than the default button size.
  ```small``` 85% smaller than the default button size.
  ```large``` 120% larger than the default button size.
  ```huge``` 145% larger than the default button size.

  **Circle Classes**
  None

###<a name='Shapes'>Shapes</a>
###<a name='Borders'>Borders</a>
###<a name='HoverEffects'>Hover Effects</a>
###<a name='Colors'>Colors</a>
###<a name='MultipleClasses'>Multiple Classes</a>
#<a name='AddExtendClasses'>Adding/Extending Classes</a>
