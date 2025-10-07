# My Portfolio

Hey! This is my personal portfolio website showcasing my projects, skills, and blog posts. I wanted something that felt like a retro terminal with a modern twist, so I went with a black and amber color scheme that gives off those vintage computing vibes.

## What's Inside

This portfolio pulls everything directly from my GitHub profile using the GitHub API, so it's always up to date. Here's what you'll find:

### Projects
My top 12 repositories sorted by stars. Each project card is fully clickable and shows the tech stack, star count, and fork count. I'm using a Pinterest-style masonry layout so the cards flow naturally based on their content.

### Skills
These are automatically detected from my repository languages and topics, organized into categories:
- Front-End Development
- Back-End Development
- Tools & Automation
- Cloud & DevOps

### Blog
I write about tech, programming patterns, and whatever I'm learning. All posts are written in Markdown (stored in `_posts/`) and rendered dynamically. Each code snippet has syntax highlighting and a copy button for easy reference.

### Experience & Contact
A summary of my GitHub activity and all the ways to get in touch with me.

## Tech Stack

I kept this simple - no build tools, no complex setup:
- **React 18** (via CDN) for the UI
- **Tailwind CSS** (via CDN) for styling
- **Orbitron** font for that robotic aesthetic
- **Lucide Icons** for clean, modern iconography
- **Highlight.js** for code syntax highlighting
- **Marked.js** for Markdown rendering

Everything runs client-side, which means the site loads fast and deploys easily.

## Writing Blog Posts

I write my blog posts in Markdown. Here's how it works:

1. Create a new file in `_posts/` following the naming convention: `YYYY-MM-DD-title.md`
2. Add frontmatter at the top:
```markdown
---
layout: post
title: "Your Post Title"
date: 2025-10-07
categories: tech programming
image: "https://example.com/image.jpg"
tags: ["JavaScript", "React", "Tutorial"]
excerpt: "A brief description of your post"
---

Your content here...
```

3. The post automatically appears on the site with syntax highlighting, copy buttons on code blocks, and all the styling matching the theme.

Don't forget to also add the post metadata to `api/posts.json` so it shows up on the main page!

## Design Philosophy

I went for a retro-tech terminal aesthetic with these principles:
- **Sharp edges everywhere** - no rounded corners, everything is crisp and geometric
- **Orbitron font** - gives that futuristic, robotic feel
- **Animated grid background** - subtle movement that feels alive
- **Amber/gold color scheme** - reminds me of old CRT monitors
- **Fully responsive** - works great on mobile, tablet, and desktop
- **Clickable cards** - entire project and blog cards are clickable with hover effects

## Running Locally

Just open `index.html` in your browser. That's it! No npm install, no build process, nothing. The site fetches data from GitHub's API in real-time.

## Deployment

The site is hosted on GitHub Pages at [dreygur.js.org](https://dreygur.js.org). Every push to the main branch automatically updates the live site.

## License

Feel free to fork this and use it for your own portfolio! Just update the GitHub username in `index.html` and customize it to your liking.

---

Built by [@dreygur](https://github.com/dreygur) with React, Tailwind, and way too much coffee ☕
