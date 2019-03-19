---
date: 2019-03-19T00:05:00-0500
fullDate: March 15th, 2019
pageTitle: Migrating Away from Gatsby
type: General
---

**Preface:** I think Gatsby is a wonderful tool. It does a ton of really interesting things. Just because it was not the right tool for this specific website does not mean that it's not right for your project.

## Intro

If you're reading this you're probably considering switching away from Gatsby for your personal website. There's a lot of information out there about switching *to* Gatsby from other static site generators, but very little about switching away from Gatsby. I had been considering it for a few months and finally took the plunge not long ago. I played around with a few other generators and eventually landed upon [Eleventy](https://www.11ty.io/). Read on to find out why:

## React Lock-in

I really like React. It solves a lot pain points developers run into when they build dynamic web pages. That being said - my personal site was not highly dynamic. In fact, it wasn't dynamic at all. It was a singular home page and a link to a blog post or two. I did not need the power of React to create the user experience I was looking for.

## Think About the Users

I was also barely taking advantage of the almost instantaneous page loads that Gatsby is famous for. 

Users coming to my site weren't clicking around afterwards. They would land on the homepage or blog post I had written and then leave. I wasn't leveraging Gatsby's near instantaneous page loads. If people coming to my site weren't staying around I figured it didn't make sense to ship all that JavaScript to them. 

**Sidenote:** This might change in the future. If users start sticking around longer and moving from page to page switching back to Gatsby is something I would happily consider.

## Benefits of Eleventy

Moving away from Gatsby and to Eleventy has given me the ability to work with any number of templating languages. Eleventy currently supports 11 different languages out of the box that can be mixed and matched to your hearts content. I've found a good balance in writing my site in Pug and blog content in Markdown.

Routing in Eleventy is super simple. Not unlike PHP Eleventy supports a directory based file system. Create an `index.pug` file in your root directory to represent the home page. Create an `about.pug` file right along side it to automatically create your "About Me" page. Gatsby also had a similiar feature and I'm glad to see it represented here.

In case Eleventy is missing a feature you want to see extending upon your Eleventy's build processs is painless. You can do everything from hook into the build process and organize your data however you see fit to create custom functions you can run on each of your pages. Personally, I've created a function to organize my posts by year in order of newest to latest. This functionality didn't exist in Eleventy out of the box but armed with a Google search or two I was able to add it in. 

In case you really need to juice up your application you have access to the entire Node ecosystem during this custom building scripts. If there's an NPM package that you're hankering to get involved in your site it's a `yarn add` away!

## Performance

Users coming to check out my website are not staying around too long. It's a rare instance when I come across a blog article about a topic I've Google and stayed on that site once I finish up whatever I'm working on. In most instance, the second I'm done I close my tab. Using that logic, I wanted to optimize for first-time users, not necessarily repeat users. Since I switched to HTML/CSS only without shipping any JavaScript (minus one small script tag for analytics) page speed metrics across the improved:

|                        | Gatsby <span class="writing__table-unit">(seconds)<span> | 11ty <span class="writing__table-unit">(seconds)<span> | Improvement <span class="writing__table-unit">(percent)<span> |
| ---------------------- | :------------------------------------------------------: | :----------------------------------------------------: | :-----------------------------------------------------------: |
| First Contentful Paint |                           1.4s                           |                          0.8s                          |                             ~43%                              |
| Speed Index            |                           1.5s                           |                          1.0s                          |                             ~33%                              |
| Time to Interactive    |                           2.5s                           |                          1.5s                          |                             ~40%                              |

Since I didn't have to ship any React across the wire, the total number of KB I was sending to the user also decreased. Post refactor I moved over to only ~15kb of data from easily over ~100kb. Granted this website is pretty small, but I'm happy with those results.

## When is Gatsby the Right Choice?

Though Gatsby wasn't ultimately the right choice for me, that does not mean that I think it's a bad tool. Quite the contrary, I can think of several instances where I would reccomend Gatsby over a pure static site generator any day of the week:
- You are more productive in React. This should go without saying, but if you're a React specialst then Gatsby is a perfect fit. Work with the tools you are most productive with.
- If the site you are working on needs lots of live React components to get your point across using Gatsby and a combination of MDX makes a lot of sense. A tutorial that requires inline React components? Yes absolutely use Gatsby!
- If you find that users are browsing your site and not just reading a single article at a time. If your users stick around, then the upfront cost of the additonal JavaScript and load time might be worth it.
- If you need the power of a full SPA in your applciation. It's very likely that your site might not have the same exact needs that mine did. In addition to a blog you might want a store where users can purchase items and some other cool stuff. Definitly use Gatsby. 

## Outro

For my specific usecase, a full fledged Gatsby application did not seem to make sense.
