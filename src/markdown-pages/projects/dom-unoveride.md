---
type: project
title: dom-unoverride
year: 2018
repository: https://github.com/Ephys/dom-unoverride
npm: https://www.npmjs.com/package/@madkings/dom-unoverride
active: false
---

Did you know that there is a browser quirk that can cause dom properties to become inaccessible?  
For instance, if you were to name an `<input>` tag "className", the `className` DOM property of the form that owns the property
 will start to return the input instead of the actual className. Madness! Gotta love browser quirks.
 
With a little bit of black magic, I wrote this library as the ultimate way to bypass this bug. (But honestly, just rename your input)

I've explained the details of this insanity in more details on [the project page](https://www.npmjs.com/package/@madkings/dom-unoverride)
