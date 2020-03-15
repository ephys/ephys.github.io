---
type: project
title: StyleSheet Observer
year: 2016
repository: https://github.com/foobarhq/stylesheer-observer
npm: https://www.npmjs.com/package/stylesheet-observer
active: false
---

During my time at Pictawall, I had to write a masonry wall that had to reload when the style of the page changed,
as the layout would break otherwise.  
The best way to do this at the time (in 2016), was to detect stylesheet changes and cause a re-render.

Detecting such a thing was unsurprisingly extremely inconsistent between browsers at the time (likely still is), so
I decided to write a library that handled just that, which is how [StyleSheet Observer](https://www.npmjs.com/package/stylesheet-observer) was born.


