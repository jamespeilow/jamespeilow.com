---
title: Setting up Netlify CMS with Nuxt Content
date: 2020-09-11T17:57:03.066Z
---

I've recently moved my blog over to using Nuxt, so I've set up Netlify CMS to make it easier to manage the content, particularly using JSON, as recommended by the[ Netlify CMS Nuxt docs](https://www.netlifycms.org/docs/nuxt/#using-nuxtcontent). Here's a few things I leant.

## What is @nuxt/content

Nuxt content is a module for Nuxt that enables powerful features for managing your content as a Git-based CMS.

This allows you to write content in Markdown files, JSON, CSV, YAML and XML and has a useful API for querying the data.

<drop-card>
  <img src="https://source.unsplash.com/random/640x480/">
</drop-card>

```markdown
## What is @nuxt/content

Nuxt content is a module for Nuxt that enables powerful features for managing
your content as a Git-based CMS.

This allows you to write content in Markdown files, JSON, CSV, YAML and XML and
has a useful API for querying the data.

<drop-card>
  <img src="https://source.unsplash.com/random/640x480/">
</drop-card>
```

```js
const wes = {
  first: 'Wes',
  last: 'Bos',
  links: {
    social: {
      twitter: 'https://twitter.com/wesbos',
      facebook: 'https://facebook.com/wesbos.developer',
    },
    web: {
      blog: 'https://wesbos.com',
    },
  },
}

export default {
  async asyncData({ $content, params, error }) {
    // const slug = 'blog/setting-up-netlify-cms-with-nuxt-content'
    const slug = 'homepage'
    const page = await $content(slug)
      .fetch()
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
        error({ statusCode: 404, message: 'Content not found' })
      })
    return {
      page,
    }
  },
}
```

```css{}[prism-styles.css]
:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  background: #3d4a5c;
}

/* Inline code */
:not(pre) > code[class*='language-'] {
  padding: 0.1em;
  border-radius: 0.5em;
  white-space: normal; !important
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #6272a4;
}
```

Urna felis dui `interdum` neque adipiscing suspendisse potenti non vehicula dignissim netus risus fringilla cursus, ornare sagittis aptent auctor aliquam porta nunc amet bibendum dapibus sem taciti lectus. Condimentum eleifend dolor augue ligula praesent viverra lorem tempor ultrices mus euismod mauris semper dapibus cras, inceptos dis malesuada urna risus ad ipsum per placerat volutpat posuere nibh cum faucibus. Conubia habitasse non luctus pharetra curabitur justo varius viverra ornare, ante eu metus per bibendum dapibus nostra fames, senectus vitae cras primis tortor arcu semper augue. Posuere duis malesuada ultricies ipsum fermentum cursus et, sodales elementum dictumst per sagittis aliquam euismod porttitor, placerat penatibus in dis tempus lorem. Lacus suspendisse ad hac faucibus fringilla torquent gravida tempus ridiculus facilisi a quam bibendum est, eget commodo id potenti porta vulputate eleifend nam tempor congue sagittis nullam. Lorem vitae ullamcorper faucibus imperdiet nullam magnis, nascetur consequat sociis sociosqu nostra, etiam sapien donec volutpat magna. Risus malesuada dignissim mollis euismod nam curae, proin donec suscipit fusce commodo consectetur, vulputate fringilla turpis leo vel. Per conubia quam sem nulla mus augue sit fringilla, torquent nec nunc eget curae ut natoque lobortis venenatis, in sagittis velit nullam integer adipiscing tempor.

```js{}[nuxt.config.js]
content: {
  liveEdit: true,
  markdown: {
    prism: {
      theme: 'prism-themes/themes/prism-dracula.css',
    },
  },
},
```

Tellus velit ridiculus metus vehicula consequat varius, iaculis pellentesque purus pulvinar pretium, arcu dictum a est sociosqu. Mauris sociosqu id pulvinar potenti quisque odio velit sapien congue montes, arcu scelerisque parturient risus nibh primis ac in. Condimentum conubia risus potenti vulputate netus mattis ante pretium mauris duis, vestibulum imperdiet sagittis sit et ac mollis urna lacus integer, etiam class litora tempor congue bibendum velit pharetra porttitor. Et nascetur in pulvinar metus proin lobortis nec vel habitant, velit praesent quis blandit ligula habitasse curabitur porta integer, fames faucibus volutpat interdum tempor massa commodo dictum.
