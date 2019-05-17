---
date: 2019-05-17T00:00:00-0500
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

I've always been a fan of technical tutorials that default to obfuscating elements of pages that are used in teaching process. It's easier said than done to promise yourself you'll try and solve a problem instead of just copying the code block and moving on with your day. Working through a problem is one of my favorite ways to learn something new, and my hope is to pass that on through this blog. Of course, if that's not something you're interested in, there is always the option to reveal the hidden element. This post will outline how I built the feature for this website.<sup id="a1">[1](#f1)</sup> Here is how it ended up looking:

<div class="spoiler">
  <button class="spoiler__reveal">reveal</button>
  <div class="spoiler__content">

  ```js
    const isThisFeatureCool = true;

    if(isThisFeatureCool) {
      console.log('Woah this is a cool feature! And helpful too!')
    }
  ```

  </div>
</div>

## Adding the Spoiler Blocks

The posts for this blog are backed by markdown files. I wrap elements that I want to be "unspoiled" with a few lines of HTML. It's a little clunky but it ensures that I have full control over which elements I can spoiler out. The HTML looks like this: 

```html
  <div class="spoiler">
    <button class="spoiler__reveal">reveal</button>
    <div class="spoiler__content">
      // Content I'm Hiding. Can be anything: 
      // images, text, code blocks, etc.
    </div>
  </div>
```


