---
published: true
date: 2019-03-22T00:00:00-0500
pageTitle: Migrating Away from Gatsby
type: General
tags: 
  - javascript
  - gatsby
  - react
  - eleventy
footnotes:
  - I think this is probably the same for most personal developer blogs. Personally speaking, if I come across a post there's little chance that I'll click around and stay on the site. 9 times out of 10 once I've read the post I close the tab.
  - According to Google's Lighthouse tool. <a href="/img/writing/2019/eleventy-results.png">Eleventy results</a>. <a href="/img/writing/2019/gatsby-results.png">Gatsby results</a>.
---

**Preface:** I think Gatsby is wonderful. It does a ton of fascinating things and it does them well. It might not have been the right tool for my personal website but that doesn't mean you shouldn't use it in your projects.

## Intro

If you're reading this you're probably considering switching away from Gatsby for your personal website. There's a lot of information out there about switching *to* Gatsby from other static site generators, but very little about switching away from Gatsby. I had been considering it for a few months and finally took the plunge not long ago. I played around with a few other generators and eventually landed upon [Eleventy](https://www.11ty.io/). Read on to find out why:

## Goodbye Gatsby

I really like React. It solves a lot of pain points developers run into when they build dynamic web pages.

That being said, my personal site is **not** highly dynamic. It's a singular home page and a link to a blog post or two. I did not need the power of React to create the user experience I was looking for. (See [this tweet](https://twitter.com/markdalgleish/status/1108433814647300097) for a meme that perfectly explains what I'm talking about.)

I was also barely taking advantage of the instantaneous page loads that Gatsby is famous for.

Users coming to my site weren't clicking around afterward. They would land on the homepage or blog post and leave. I wasn't leveraging Gatsby's near instantaneous page loads. If people coming to my site weren't staying around I figured it didn't make sense to ship all that JavaScript to them.

## Hello Eleventy!

There are a few things I've been really enjoying about Eleventy so far:

It currently supports 11 different templating languages out of the box that can be mixed and matched to your heart's content. I've found a good balance of using Markdown for any blog content and Pug for everything else.

Routing is not complicated. Eleventy supports a directory-based file system. For example: create an `index.pug` file in your root directory to represent the home page. Create an `about.pug` file right alongside it to automatically create your "About Me" page. Gatsby also had a similar feature and I'm glad to see it represented here.

Expanding or modifying Eleventy's chosen defaults is well documented and painless. You can do everything from hook into the build process and organize your data however you see fit to create custom filters you can run pull into your pages. I've personally got a few custom functions running that organize my data differently than Eleventy's default.

If that's not enough to convince you, check out this [tweet](https://twitter.com/jensimmons/status/1107377359546736641) thread to see what other developers found great about Eleventy.

## Performance

As I mentioned above, users coming to check out my website are not staying around too long.<sup id="a1">[1](#f1)</sup> Since that was the case, I wanted to optimize my site for first-time users. Switching to shipping HTML/CSS with no JavaScript improved speed metrics across the board:<sup id="a2">[2](#f2)</sup>

|                        | Gatsby <span class="writing__table-unit">(seconds)<span> | 11ty <span class="writing__table-unit">(seconds)<span> | Improvement <span class="writing__table-unit">(percent)<span> |
| ---------------------- | :------------------------------------------------------: | :----------------------------------------------------: | :-----------------------------------------------------------: |
| First Contentful Paint |                           1.4s                           |                          0.8s                          |                             ~43%                              |
| Speed Index            |                           1.5s                           |                          1.0s                          |                             ~33%                              |
| Time to Interactive    |                           2.5s                           |                          1.5s                          |                             ~40%                              |

Another bonus: Post refactor I'm shipping about ~15kb of data total across the wire - a stat I'm super happy about!

## When is Gatsby the Right Choice?

Though Gatsby wasn't ultimately the right choice for me, that does not mean that I think it's a bad tool. Quite the contrary, I can think of several instances where I would recommend Gatsby over a purely static site generator any day of the week:
- You are more productive in React. This should go without saying, but if you're a React specialist then Gatsby is a perfect fit. Work with the tools you are most productive with.
- If the site you are working on needs live React components. I've seen several blogs/tutorials that inline React components to help get a point across. In those situations using Gatsby is easily the best situation. You **can** get React working with Eleventy, but you're probably going to be up and running faster if you use Gatsby.
- If you find that users are browsing your site and not reading a single article at a time. If your users stick around, then the upfront cost of the additional JavaScript and load time might be worth it for the better page load user experience.
- If you need the power of a full SPA in your application. There's a large chance that your project doesn't have the same requirements as my personal site. If your project is leaning more towards the app side of things and away from the site side of things then Gatsby will be an incredible tool for you.

## Outro

For my specific use case, a full-fledged Gatsby application did not make sense. I surveyed a few other static site generators and ended up trying out Eleventy. It's got a ton of features I really like about it and stopped me from shipping unneeded JavaScript to the client. I've seen some performance benefits and haven't lost any features from my old Gatsby site.