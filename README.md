# Personal Website & Blog

A modern, professional personal website serving as a central hub for my blog, projects, and CV. Built with Astro, Tailwind CSS, and TypeScript, featuring markdown-first content management. Every push to `main` is built and deployed to GitHub Pages by GitHub Actions.

> [!NOTE]
> **Full disclosure: this site is vibe coded.** Most of the code here was written by AI coding agents (such as GitHub Copilot's coding agent and Claude Code) rather than by me. I use this repo as a low-consequence playground for trying out modern agentic coding workflows: delegating tasks to agents, reviewing their pull requests, and seeing what works and what doesn't. The content is mine; much of the code is theirs. Expect some rough edges!

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
├── public/                    # Static files copied as-is (images, CNAME)
├── src/
│   ├── components/            # Reusable UI components
│   ├── content/               # MARKDOWN-FIRST CONTENT
│   │   ├── blog/              # Blog posts
│   │   └── projects/          # Projects
│   ├── layouts/               # Base page layout
│   ├── pages/                 # Routes (one file per page)
│   ├── styles/                # Global styles and Tailwind theme
│   └── content.config.ts      # Frontmatter schemas for the content collections
├── astro.config.mjs           # Astro configuration
├── eslint.config.js           # ESLint configuration
└── README.md
```

## 📝 Content Management

This website uses a **markdown-first approach**: most content is managed through markdown files in `src/content/`. Add or edit `.md` files and push to GitHub for automatic deployment. The allowed frontmatter fields are defined in `src/content.config.ts`, and the build fails with a clear error if a file doesn't match.

### Adding New Content

#### Blog Posts (`src/content/blog/`)
Create a new file `src/content/blog/your-post.md` to add a new post to the blog feed.

#### Projects (`src/content/projects/`)
Create a new file `src/content/projects/your-project.md` to showcase a new piece of work or tool on the projects page. Link to any paper with `urls.paper` in the frontmatter.

## 🎨 Styling & Branding

The website's design is managed via **Tailwind CSS**. Colours, typography, and utility classes are configured in `src/styles/global.css` (Tailwind CSS v4 uses CSS-based configuration via `@theme`).

## 🛠️ Development Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run check` | Type-check Astro components and content |
| `npm run lint` | Lint JavaScript, TypeScript, and Astro files with ESLint |

CI runs `lint`, `check`, and `build` on every pull request.

---

Built with ❤️ using [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and [TypeScript](https://www.typescriptlang.org/).