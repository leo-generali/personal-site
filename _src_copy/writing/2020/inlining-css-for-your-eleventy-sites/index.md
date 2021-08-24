---
date: 2020-04-14T00:00:00-0500
title: Inlining CSS for your Eleventy Sites
type: Tutorial
published: false
tags:
  - tutorial
  - css
  - eleventy
  - writing
---

Order of Terminal Commands:
1. yarn add @11ty/eleventy -D -> Installs eleventy as a local dependancy
2. yarn add postcss cssnano -D 
3. 

A really great thing you can do for your websites is to inline your critical CSS. What does this means? Inlining CSS means putting your CSS in the Head of your document instead of in an external stylesheet. This is advantageous because users browsing your website will have one less file to download - it will come for free with the HTML. This strategy might not make sense for large websites with many different CSS files. After a certain point you'll be bloating the HTML for no good reason. For smaller websites like a blog though it's a good idea. In this tutorial we will explore how I was able leverage PostCSS and Eleventy to inline all of the CSS used for my site. There will also be a bonus section on using this strategy with TailwindCSS.
​
Lets start fresh and assume your are creating your website from scratch. That might not be the case - my hope is that by outlining each of the steps you will be able to follow along where it makes sense for you.
​
Go ahead and create your eleventy website:
​
`Eleventy instructions here`
​
Within your `_data` folder create a new file called `css.js`. This will be the key piece of data that will your inlined CSS into your pages. 
​
Lets make sure we've got everything working at a base level. In your `css.js` file add the following piece of code:
​
```
module.exports = async () => {
  return `* { background: blue } `
}
```
​
At the moment this function doesn't do much, it returns the following string: `*{background: blue}`. We're going to write some more exiting code in a minute, but lets first make sure that all of our pieces are hooked up correctly.
​
Create an `index.njk` file in the root of your `src` directory. The content of the file doesn't matter too much at this point except for one thing. Create a `head` elemenet in your file and add the following piece of code: 
​
```
<style>{{ css | safe }}</style>
```
​
This file will look in our _data directory and pull in the response of the file that matchs the variabel name we just used. In this case: css will look for `css.js` and run that function. If you go ahead and get eleventy running you should see your body in all of it's glory and that evey element has a blue background. Pretty nice right? Lets see what that looks like. Open up your developer console and check out the Head of your page. Nestled between the two style tags you should see our css that we wrote: `* { background: blue }`. Writiing all of your CSS in the head of your templates probably isn;'t how you want to author your styles. With a few tricks up our sleeve howveer w e can use regular ole `.css` files to get the same effect.
​
Using your favorite package manager, install postcss as a development dependancy
​
Lets modify our CSS.js file to read from our disk:
Somewhere in your site, create some css stylesheets. I like to keep them under a `src/assets/` directory but you might prefer something else. For the sake of this tutorial lets assume theyre in that directory.
​
lets use postcss to process and convert our CSS file to a string.
​
```js
module.exports = async () => {
  const stylesheet = await fs.readFileSync(
​
)
}
​
```
​
​
​
​
​
​
​
​
​
