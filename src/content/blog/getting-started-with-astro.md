---
title: "Getting Started with Astro: A Beginner's Guide"
excerpt: "Learn the basics of Astro, a modern static site generator that delivers lightning-fast performance with a developer-friendly experience."
publishDate: 2023-11-15
coverImage: "https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
tags: ["Web Development", "Astro", "JavaScript", "Tutorial"]
readingTime: "8 min read"
---

# Getting Started with Astro: A Beginner's Guide

Astro has been gaining popularity as a modern static site generator that offers the best of both worlds: the development experience of a modern JavaScript framework with the performance benefits of static HTML. In this guide, we'll explore what makes Astro special and how to get started with your first Astro project.

## What is Astro?

Astro is a static site generator that allows you to build faster websites with less client-side JavaScript. It features:

- **Component Islands**: Write components in your favorite UI framework (React, Vue, Svelte, etc.) and Astro will automatically render them to HTML at build time.
- **Zero JS by default**: Astro automatically strips out unnecessary JavaScript, sending only the minimal amount needed.
- **Edge-ready**: Deploy anywhere, including global edge runtimes like Deno Deploy or Cloudflare Workers.
- **Customizable**: Extend Astro with your favorite tools and frameworks.

## Setting Up Your First Astro Project

Let's walk through the process of creating a basic Astro site from scratch.

### Prerequisites

Before we begin, make sure you have:

- Node.js (version 14.18.0 or higher)
- npm, yarn, or pnpm for package management

### Creating a New Project

The easiest way to create a new Astro project is to use the create-astro command:

```bash
# Using npm
npm create astro@latest

# Using yarn
yarn create astro

# Using pnpm
pnpm create astro
```

This will guide you through a series of prompts to set up your project. For a basic starter, you can select the "Empty" template.

### Project Structure

After creating your project, you'll see a folder structure like this:

```
my-astro-project/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

The key directories are:

- **src/pages/**: Each .astro file in this directory becomes a route in your site.
- **src/components/**: Reusable UI components for your site.
- **src/layouts/**: Layout components that define the structure of your pages.
- **public/**: Static assets like images and fonts.

### Your First Astro Component

Astro components use a .astro file extension and have a template syntax similar to HTML with some special features. Let's look at a simple component:

```astro
---
// Component Script (JavaScript or TypeScript)
const greeting = "Hello, World!";
---

<!-- Component Template (HTML) -->
<div>
  <h1>{greeting}</h1>
  <p>Welcome to Astro!</p>
</div>

<style>
  /* Component Styles (CSS) */
  h1 {
    color: purple;
    font-family: system-ui;
  }
</style>
```

An Astro component has three main parts:

1. **Component Script**: JavaScript/TypeScript code between the `---` fences
2. **Component Template**: HTML-like syntax with expressions in curly braces
3. **Component Styles**: Scoped CSS that only applies to this component

### Creating a Page

In Astro, creating a new page is as simple as adding a .astro file to the pages directory. Let's create a simple about page:

```astro
---
// src/pages/about.astro
import Layout from '../layouts/Layout.astro';

const pageTitle = "About Me";
const skills = ["HTML", "CSS", "JavaScript", "React", "Astro", "Technical Writing"];
---

<Layout title={pageTitle}>
  <main>
    <h1>{pageTitle}</h1>
    <p>Here's a little information about me and my background.</p>
    
    <h2>My Skills</h2>
    <ul>
      {skills.map((skill) => <li>{skill}</li>)}
    </ul>
  </main>
</Layout>
```

This creates a page at `/about` with a list of skills dynamically generated from an array.

## Using Layouts

Layouts are special components that wrap your content in a consistent structure. Here's a simple layout:

```astro
---
// src/layouts/Layout.astro
export interface Props {
  title: string;
}

const { title } = Astro.props;
---

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>{title}</title>
  </head>
  <body>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/blog">Blog</a>
    </nav>
    <slot />
    <footer>
      &copy; {new Date().getFullYear()} My Astro Site
    </footer>
  </body>
</html>
```

The `<slot />` element is where your page content will be inserted.

## Working with Data

Astro provides several ways to fetch and use data in your components. Here's how to fetch data at build time:

```astro
---
// src/pages/blog.astro
import Layout from '../layouts/Layout.astro';

// Fetch data at build time
const response = await fetch('https://api.example.com/posts');
const posts = await response.json();
---

<Layout title="Blog">
  <main>
    <h1>Recent Posts</h1>
    <ul>
      {posts.map((post) => (
        <li>
          <a href={`/blog/${post.slug}`}>{post.title}</a>
          <p>{post.excerpt}</p>
        </li>
      ))}
    </ul>
  </main>
</Layout>
```

## Deploying Your Astro Site

Astro sites can be deployed to any static hosting provider. After building your site with `npm run build`, the `dist` directory will contain your complete static site ready for deployment.

Popular hosting options include:

- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- AWS Amplify

Many of these platforms can be connected directly to your Git repository for automatic deployments when you push changes.

## Conclusion

Astro offers a refreshing approach to building websites, prioritizing performance while maintaining an excellent developer experience. By generating static HTML by default and only shipping JavaScript when necessary, Astro helps create sites that are fast, accessible, and SEO-friendly.

This guide has only scratched the surface of what Astro can do. As you become more comfortable with the basics, you can explore advanced features like:

- Integrating React, Vue, or Svelte components
- Content Collections for managing structured content
- Middleware for processing requests
- Server-side rendering (SSR) options
- Astro Islands for progressive enhancement

Happy building with Astro!