# Personal Website & Blog

A modern, professional personal website serving as a central hub for my blog, portfolio, CV, and publications. Built with Astro, Tailwind CSS, and TypeScript, featuring markdown-first content management.

> [!NOTE]
> **Full disclosure: this site is vibe coded.** Most of the code here was written by AI coding agents (such as GitHub Copilot's coding agent and Claude Code) rather than by me. I use this repo as a low-consequence playground for trying out modern agentic coding workflows: delegating tasks to agents, reviewing their pull requests, and seeing what works and what doesn't. The content is mine; much of the code is theirs. Expect some rough edges!

now uses GH actions to build and deploy!

## 🚀 Quick Start

### Prerequisites

- **Node.js 22.23.4 or later** (Astro 7 minimum; GitHub Actions builds with Node 22)
- **npm** (comes with Node.js)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/moi-taiga/c-est-moi.git
   cd c-est-moi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321` to see the website.

## 📁 Project Structure

```
/
├── public/                     # Static assets
├── src/
│   ├── components/            # Reusable UI components
│   ├── layouts/               # Base layout templates
│   ├── pages/                 # Route pages (blog, contact, etc.)
│   ├── styles/                # Global styles & Tailwind
│   └── content/               # Content configurations
├── content/                   # MARKDOWN-FIRST CONTENT
│   ├── blog/                  # Blog posts
│   ├── projects/              # Portfolio items
│   └── publications/          # Publications and papers
├── astro.config.mjs          # Astro configuration
└── README.md
```

## 📝 Content Management

This website uses a **markdown-first approach** - all main content is managed through markdown files in the `content/` directory. Simply add or edit `.md` files and push to GitHub for automatic deployment.

### Adding New Content

#### Blog Posts (`content/blog/`)
Create a new file `content/blog/your-post.md` to add a new post to the blog feed.

#### Projects (`content/projects/`)
Create a new file `content/projects/your-project.md` to showcase a new piece of work or tool on the projects page.

#### Publications (`content/publications/`)
Create a new file `content/publications/your-paper.md` to list a new research paper or article.

## 🎨 Styling & Branding

The website's design is managed via **Tailwind CSS**. Colours, typography, and utility classes are configured in `src/styles/global.css` (Tailwind CSS v4 uses CSS-based configuration via `@theme`).

## 🛠️ Development Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |

---

Built with ❤️ using [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and [TypeScript](https://www.typescriptlang.org/).