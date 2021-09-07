---
slug: 2-heart-of-arah
title: Heart Of Arah
tags:
    - react
    - gatsby
    - sass

image: "/images/art-site-main.png"
link: "https://heartofarah.art/"
gitLink: "https://github.com/Dwaxy/art-site"
---

# Heart Of Arah

## My Art portfolio and store using Gatsby, React, Graphql Netlify CMS, forms, and hosting

## Features

- Allows me to quickly add items to the store using custom data structures using Netlify's CMS collections
- Optimisation of images are automatically handled thanks to Gatsby Image
- Items are organised within the site automatically based on tags and types
- Responsive UI using CSS Grid
- Implements SSR react Paypal for orders
- Has a commission and order form using Netlifys Form service 
- Crosslinks Archive items that are also Store items and vice versa
- It's built with Gatsby. The entire site is a dynamically generated static site. The site that arrives in the browser as fast as a site can get
- Google analytics
- Automatic sitemap and robot.text file generation on build

## Things to Improve

- SEO image previews for each page that does not cost performance on-site build
- Have the options for multiple images for an item, e.g to show the art framed on a wall
- Page pagination for Archive items based on the item's topic, e.g a series of short stories
- Make index files for components, libs and assets to cut down on imports

## Things I wish I'd done

- Followed a stricter SASS philosophy even with CSS modules
- Made my SASS more component-based
- Maybe kept unique components for pages in separate folders
- Some naming inconsistencies as this project dragged on for a long time
- Been more pedantic about some functions in node.js that were not Do Not Repeat friendly
- Separated Sass variables and base styles from the start
- Documented parameters and functions form the start
- Not wasted all that time trying to send multiple items to PayPal. Their docs still overwhelm me


![Alt text](/images/art-site-1.png "An item on the store")