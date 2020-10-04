---
title: The Astronaut Blog
date: 2020-10-04T12:02:17.500Z
description: A Gridsome based personal blog converted from an existing Wordpress site to the JAMstack.
cover_image: /images/www.the-astronaut.com.jpg
project_url: https://the-astronaut.com/
accent: 4
---

## Summary

A static-generated blog powered by [Gridsome](https://gridsome.org).

The site is a customised site based on the Gridsome Blog Starter, with customised styles and a modified layout to allow for persisting header, footer and page transitions.

## Project Background

Before working full-time as a Front-End Developer, I started a Wordpress blog to write about some of my hobbies at the time - sketching, photography and making videos.

The blog has been through a few different iterations over the years; starting with Tumblr, moving through a number of free Wordpress themes and until I settled on the [Tracks theme by Complete Themes](https://www.competethemes.com/tracks/) for a while.

<drop-card>
  <img src="/images/the-astronaut-previous.jpg">
</drop-card>

_Previous designs of The-Astronaut.com_

But as the blog posts slowed down and eventually stopped as work got busier, the site sat for a couple of years without being updated. This was until I caught on to the buzz of Static Site Generators and hosting sites for free on [Netlify](https://netlify.com) (which would save me the money I was paying for Wordpress hosting) so I rebuilt the site with Gridsome.

## Project Setup

- **Static Site Generator: Gridsome**
  - It's powered by Vue.JS and GraphQL - two technologies I wanted to get more experience with
  - Easy file-based routing
  - Out of the box Markdown file support
  - Built-in Image component for support for progressive image loading
- **Content Format: Markdown**
  - It was straight-forward to convert the existing Wordpress posts to Markdown using a Wordpress plugin
  - Markdown files are easy to work with, which made it easy to update the posts to work with Gridsome
  - I can easily back-up and read the posts without having a site to host them on, if I decided to remove the website completely in the future
  - Gridsome supports Markdown files and has a number of Remark plugins to extend the markdown support
- **Hosting: Netlify**
  - Free hosting, which is perfect for a simple blog with about 40 pages
  - Git-based workflow and deployments
