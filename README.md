# RoamSEO plugins

RoamSEO puts live SEO data inside your AI assistant: keyword and competitor research, site audits, rank tracking (organic and Google Maps), backlinks, Google Search Console and Analytics, and brand visibility in AI answers.

This repository holds the hosted RoamSEO MCP server config plus 13 workflow skills, packaged for several agents.

- MCP endpoint: `https://app.roamseo.com/mcp` (streamable HTTP, OAuth sign-in on first use, no API key)
- Skills: [`plugins/roamseo/skills/`](plugins/roamseo/skills/) (seo-audit, keyword-research, keyword-clustering, competitor-analysis, competitive-landscape, link-prospecting, local-seo, seo-report, seo-coach, seo-project-setup, ai-prompt-research, ai-visibility-audit, eeat-audit)
- You need a RoamSEO account. Plans and pay-as-you-go credits: [roamseo.com/pricing](https://roamseo.com/pricing)

## Install

**Claude Code**

```
/plugin marketplace add roamseo/roamseo-plugins
/plugin install roamseo@roamseo
```

**Gemini CLI**

```
gemini extensions install https://github.com/roamseo/roamseo-plugins
```

**OpenCode**: add the server to `opencode.json` (see [`opencode/opencode.json`](opencode/opencode.json)), run `opencode mcp auth roamseo` to sign in, and add the skills with `npx skills add roamseo/roamseo-plugins -a opencode`.

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "roamseo": { "type": "remote", "url": "https://app.roamseo.com/mcp", "enabled": true }
  }
}
```

**Pi**: `pi install npm:roamseo-pi`

**Any agent with skills support**: `npx skills add roamseo/roamseo-plugins`

**Any other MCP client** (Cline, Kilo Code, Cursor, VS Code, Windsurf, ...): add a remote server with URL `https://app.roamseo.com/mcp` and transport streamable HTTP. Example:

```json
{
  "mcpServers": {
    "roamseo": { "type": "streamableHttp", "url": "https://app.roamseo.com/mcp" }
  }
}
```

The first tool call opens a browser sign-in. To check the connection without spending credits, ask: "Use RoamSEO to check my connection and list my projects."

## Links

- [RoamSEO](https://roamseo.com)
- [MCP documentation](https://roamseo.com/docs/mcp)
- [Privacy policy](https://roamseo.com/privacy)
- [Support](https://roamseo.com/support)

## License

MIT
