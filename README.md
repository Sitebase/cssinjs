React: CSS in JS
=================
This repository is created to test out some real life examples and how this would work when using the concept of CSS in JS.
I based this repository on the [React CSS in JS presentation](http://blog.vjeux.com/2014/javascript/react-css-in-js-nationjs.html) by [Christopher Chedeau](https://github.com/vjeux).

How to use
----------
	python -m SimpleHTTPServer

Problems I ran into
-------------------
* Hover states(see branch `feature-hover-state`): There is now way to define `:hover` states in inline CSS. So the solution that I'm thinking of is using a interaction aware mixin that will set a `hover` state property to `true` when a user hovers over the item. Possible problems is that the m() expression will become really big.
* Responsive layouts: media queries
