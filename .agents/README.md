# Agents

Shared instructions and skills for AI coding agents working on this repo (GitHub Copilot, Claude Code, and others).

```
.agents/
├── instructions/          # Rules agents should always follow
│   ├── british-english.md
│   └── contact-form.md
└── skills/                # Reusable task instructions (add as needed)
```

The root [`AGENTS.md`](../AGENTS.md) is the entry point that agents read automatically. It links to the files here. [`CLAUDE.md`](../CLAUDE.md) imports `AGENTS.md` so Claude Code gets the same instructions.

## Adding something new

- **Instruction** (a rule that always applies): add a markdown file to `instructions/` and link to it from `AGENTS.md`.
- **Skill** (instructions for a specific task, such as writing a blog post): add a folder to `skills/` with a `SKILL.md` inside, and link to it from `AGENTS.md`.
