## GPT-5 vs Claude Opus 4.1 - Practical Dev Comparison

Built with [Rube MCP](https://rube.composio.dev) by [Composio](https://composio.dev)

### What this is
Side-by-side comparison of OpenAI GPT-5 and Anthropic Claude Opus 4.1 on developer tasks, run in Cursor with Rube MCP. Full narrative and screenshots live in [blog.md](https://composio.dev/blog/gpt-5-vs-opus-4-1-code-comparison).

### TL;DR results
- **Algorithms (Median of Two Sorted Arrays, Java)**
  - **GPT-5**: 8,253 tokens, ~13s; clean `O(log(min(m,n)))` binary-search solution
  - **Opus 4.1**: 78,920 tokens, ~34s; similar solution with more commentary
  - **Call**: GPT-5 wins on speed and token efficiency
- **Web dev (Figma clone via Rube MCP Figma toolkit, Next.js + TS)**
  - **GPT-5**: 906,485 tokens, ~10m; working app, lower visual fidelity
  - **Opus 4.1**: 1.4M+ tokens; needed Tailwind v4 config fix; much closer to pixel-perfect
  - **Call**: Opus 4.1 wins on design accuracy; GPT-5 wins on cost
- **Overall**: GPT-5 is practical and cost-effective; Opus 4.1 shines when visual fidelity matters and budget allows.

### Method (brief)
- Same prompts; languages: Java, TypeScript/React
- Tasks: Competitive programming and web development
- Environment: Cursor IDE with Rube MCP
- Metrics: Token usage, time, code quality, and working results

### Read more
- Full write-up: [blog.md](https://composio.dev/blog/gpt-5-vs-opus-4-1-code-comparison)
- Composio toolkits: [docs.composio.dev/toolkits](https://docs.composio.dev/toolkits/introduction)
- Rube MCP setup: [rube.composio.dev](https://rube.composio.dev/)
