---
date: 2019-05-22T00:00:00-0500
pageTitle: How to Add Spoiler Elements to Eleventy Blogs
type: Tutorial
published: false
tags:
  - tutorial
  - javascript
  - eleventy
footnotes:
  - The finer details of this post will be <a href="https://www.11ty.io/" target="_blank">Eleventy</a> specific but the overall broad strokes should be applicable to a majority of websites.
---

SPOILER_START
```js
  const isThisFeatureCool = true;

  if(isThisFeatureCool) {
    console.log('Woah this is a cool feature! And helpful too!')
  }
```
SPOILER_END

```html
  SPOILER_START_ESC
    // Content I want to make spoil-proof
    // Images, text, code blocks
  SPOILER_END_ESC
```

SPOILER_START
```js
  const isThisFeatureCool = true;

  if(isThisFeatureCool) {
    console.log('Woah this is a cool feature! And helpful too!')
  }
```
SPOILER_END

```html
  SPOILER_START_ESC
    // Content I want to make spoil-proof
    // Images, text, code blocks
  SPOILER_END_ESC
```

SPOILER_START
```js
  const isThisFeatureCool = true;

  if(isThisFeatureCool) {
    console.log('Woah this is a cool feature! And helpful too!')
  }
```
SPOILER_END

```html
  SPOILER_START_ESC
    // Content I want to make spoil-proof
    // Images, text, code blocks
  SPOILER_END_ESC
```

