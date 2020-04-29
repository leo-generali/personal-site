---
date: 2020-07-25T00:00:00-0500
title: Creating a Fade In Effect with CSS Variables
type: Tutorial
published: false
tags:
  - tutorial
  - css
  - writing
---

A design touch I've always enjoyed is a cascading fade-in animation of various elements on a web page. You can see it in action on my homepage. I think it's a slick way of introducing a user to your site.

There are many different ways of achieving this effect. I want to discuss the way I ended up doing it on my website because I think it uses a clever solution.

The first version I had going was probably what you'd expect it to be: a css class that applies all the different styles related to the animation. Each of the delays was it's own seperate class:

```css
.reveal {
  animation-name: reveal;
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-fill-mode: both;
}

.reveal--delay-fast {
  animation-delay: 0.1s;
}

.reveal--delay-med {
  animation-delay: 0.2s;
}

.reveal--delay-slow {
  animation-delay: 0.4s;
}
```

This was nice: I could apply each of these classes to elements and tada - they'd fade-in accordingly.

However, I was limited to the three delay selectors. If I wanted an element to have a different delay time I'd have to create another class. Maybe not the biggest pain in the world, but I knew there had to be a better way. 

Enter: CSS custom properties

Using the native features of CSS I can now dynamically add a delay on a per element level. Lets see what that looks like: 

Every element that previously had the reveal utility classes now gets an inline with a variable named `--animation-delay`. In the following example, I've set the value of `--animation-delay` to 1/10th of a second:

```html
<h1 class="reveal" style='--animation-delay: 0.1s;'>Hey there!</h1>
```

The `.reveal` also got a small rewrite:

```css
.reveal {
  animation-name: reveal;
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-delay: var(--animation-delay);
  animation-fill-mode: both;
}
```

You can see on the highlighted line (5th line) that I am now using the custom property passed in directly from the HTML element. I no longer have to worry about maintaing different classes for all the different delays I want. 

BONUS:
I think this fits in nicely with Tailwind's philosophy of atomic classes. The element itself is now more responsioble for it's display. 

This was nice for a few months, but I decided I wanted to have the main hello come in from the top instead of the bottom. CSS custom properties to the rescue again. This time I added custom property that holds the value for where the element show come in from. In this case: -1rem:

```html
<h1 class="reveal" style='--animation-delay: 0.1s; --animation-reveal-start-pos: -1rem'>Hey there!</h1>
```

With a little modification to our animation keyframes we can pull in the variable and use that instead: 

```css
@keyframes reveal {
  0% {
    opacity: 0;
    transform: translateY(var(--animation-reveal-start-pos));
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
```

I was able to take it one step even further and add a fallback property of `1rem`. If an element doesn't have a specific `--animation-reveal-start-pos` variable set then the transform will begin at 1rem:


```css
@keyframes reveal {
  0% {
    opacity: 0;
    transform: translateY(var(--animation-reveal-start-pos, 1rem));
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
```
