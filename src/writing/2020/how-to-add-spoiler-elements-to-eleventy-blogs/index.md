---
date: 2020-07-25T00:00:00-0500
title: Adding Spoiler Elements to Eleventy Blogs
type: Tutorial
published: false
tags:
  - tutorial
  - javascript
  - eleventy
  - writing
hasSpoiler: true
---

## Spoiler Blocks

I've always been a fan of technical tutorials that default to hiding elements of pages that are used in the teaching process.

I always promise myself to give tutorial examples a fair shake and an honest effort. Surprise - this doesn't usually happen. I find myself copying the troublesome code block more often than not and moving on with my day.

In the rare times that I do work through a problem I find thqat I take away more from the tutorial than I would have otherwise. Working through a problem is one of my favorite ways to learn something new, and my hope is to pass that on through this blog.

This post will outline how I built a "spoiler" feature for my blog[^1]. Upcoming tutorial posts will have hidden content that adds an extra safeguard for readers who prefer to work through problems themselves.

If that's not something readers are interested in there is always the option to reveal the hidden element. 

Before we start, an example of what I'm talkig about: 

{% spoiler %}

```js
const isThisFeatureCool = true;

if(isThisFeatureCool) {
  console.log('Woah this is a cool feature! And helpful too!')
}
```

{% endspoiler %}




## How I Added the Spoiler Blocks

When I was first playing around with the spoiler blocks I was wrapping the content in my posts with HTML. This was problematic for multiple reasons:
- I could never memorize the exact set of elements and class names I used to create the spoiler blocks. I found myself copying and pasting them over and over.
- Making a change to the blocks would have been a huge pain. I'd have to go through each of my blog posts and replace the HTML elements by hand.

Clearly, this wasn't scaleable!

So what did I do?

I created special flags in my markdown files that delineate content that should be hidden in a spoiler block. I use [Eleventy's transform functionality](https://www.11ty.io/docs/config/#transforms) to replace the two flags with the proper HTML elements. In my case any time Eleventy comes across `SPOILER_START_ESC` and `SPOILER_END_ESC` the transform function will kick in and wrap the content in the proper elements.

In practice my markdown files end up looking like this:

```js
  SPOILER_START_ESC
    // Something I want to wrap in spoiler blocks!
  SPOILER_END_ESC
```

I no longer have to memorize the specific set of elements I use whenever I want to hide some content. If I make a change to the way the spoilers are displayed it will propegate to all of my posts. A huge win by all accounts!

## Hiding Content

At this point the content I want initially hidden automatically gets wrapping in the following HTML:

```html
<div class="spoiler">
  <button class="spoiler__reveal">reveal</button>
  <div class="spoiler__content"> 
    // Something I want to wrap in spoiler blocks! 
  </div>
</div>
```

We're getting somewhere! Without the proper styling though this is just adding needless HTML elements to the DOM. So what does proper styling look like?

In my case I wanted the hidden content to be blurred beyond legibility. Once revealed, the content becomes clear. On desktop, there is an added effect of slightly turning down the blur percentage on hover.

The Sass implemntation of the above functions like this:

```scss
.spoiler {
    &__content {
    transition: 0.1s;
    filter: blur(1rem);

    &--revealed {
      filter: none;
    }
  }

  &:hover {
    .spoiler__content {
      filter: blur(0.5rem);

      &--revealed {
        filter: none;
      }
    }
  }
}
```

By default we add a `filter: blur` to the spoiler blocks and remove the filter (`filter: none`) with a `.spoiler--revealed` class. We'll talk a little more about the `.spoiler--revealed` class in the next section. What's important here is the overall idea that we have varying levels of visibility for our spoiler blocks.

Adding a `filter: blur` to the content is not the only way of achieving a spoiler reveal effect. The spoiler reveal can be anything you can imagine: [a flip card](https://3dtransforms.desandro.com/card-flip), [a slide toggle](https://codepen.io/robbyklein/pen/JFdru), or even [a fade-in](https://codepen.io/ianaya89/pen/qEqWWB).

## Revealing the Spoilers

I want to keep my personal website light. The JavaScript to handle revealing the hidden content is only pulled in on blog posts that have the spoiler blocks in them. If there isn't a spoiler the JavaScript doesn't even get added. The script to reveal the content looks like this: 

```js
var btns = document.querySelectorAll('.spoiler__reveal');
btns.forEach(btn => {
  btn.addEventListener('click', function(event) {
    event.preventDefault();
    var spoilerText = this.parentNode.querySelector('.spoiler__content');
    spoilerText.classList.add('spoiler__content--revealed');
    this.remove();
  });
})
```

There's some ES6 going on in here: 
- I'm finding all of the `.spoiler__reveal` buttons.
- On click, each button adds the `.spoiler__content--revealed` class to the `.spoiler__content` element. 
- The button element itself gets removed because it is no longer needed. For my purposes once content has been revealed it is considered revealed until the page refreshes.

## Working Spoilers!

And there you have it! Working spoilers! This isn't 100% the implementation that I currently use on this site. I noticed pretty quickly that if you happen upon my blog without JavaScript enabled you'd have a hard time reading the gated content. I worked around that by adding the blur effect and the button to reveal **only** if the user has JavaScript enabled.

Please let me know if you end up adding something similar to this to your website. It's a fun little addition that I think packs a powerful punch for your users. Go on, spoiler-ize all the things!

[^1]: The finer details of this post will be <a href="https://www.11ty.io/" target="_blank">Eleventy</a> specific but the overall broad strokes should be applicable to any markdown backed blogs.