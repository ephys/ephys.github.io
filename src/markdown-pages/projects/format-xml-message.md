---
type: project
title: react-intl-formatted-xml-message
year: 2018
repository: https://github.com/Ephys/react-intl-formatted-xml-message
npm: https://www.npmjs.com/package/react-intl-formatted-xml-message
active: false
---

*This project is now inactive as it has been included natively in react-intl 🎉🎉*

My biggest issue with react-intl ~~is~~ <ins>was</ins> how complex it ~~is~~ <ins>was</ins> to insert tags in one of their formatted message. Especially when they become nested.
To solve this issue, I wrote a library that **replaces XML tags, found inside the formatted message, with React components** or elements.
It does so before any user variable is injected into the formatted message, to avoid XSS.
