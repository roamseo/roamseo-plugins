# RoamSEO for Pi

Ask Pi SEO questions and get answers built on real search data instead of guesses. This package wires Pi's built-in MCP client to [RoamSEO](https://roamseo.com) and ships a dozen skills that tell the agent how to work through common SEO jobs step by step.

## Install

```bash
pi install npm:roamseo-pi
```

Then start Pi, run `/mcp`, pick **roamseo** and sign in. A browser tab opens; approve access and you're done. A free RoamSEO account works for trying it out.

No browser on the machine? Create a key under Settings → API keys in the RoamSEO app and add this to `~/.pi/agent/mcp.json` instead (it takes precedence over the package's entry):

```json
{
  "mcpServers": {
    "roamseo": {
      "url": "https://app.roamseo.com/mcp",
      "headers": { "Authorization": "Bearer ${ROAMSEO_API_KEY}" }
    }
  }
}
```

## Things to ask

- "Find 30 low-difficulty keywords around self-hosted analytics and save the best ten to my project."
- "Who outranks us for 'invoice software for freelancers', and what do their pages have that ours lacks?"
- "Run an audit on example.com and give me the five fixes worth doing first."
- "Which sites link to our two biggest competitors but not to us?"
- "When people ask ChatGPT for a CRM recommendation, is our brand mentioned? Which sources get cited?"
- "Track these 15 keywords weekly and tell me what moved."

## What's inside

**Skills** (in `skills/`): project setup, SEO coach, keyword research, keyword clustering, competitive landscape, competitor analysis, link prospecting, site audit, local SEO, AI prompt research, AI visibility audit and reporting. Pi loads them on demand when a request matches.

**Extension** (`extensions/roamseo.ts`): a few lines that register `https://app.roamseo.com/mcp` with Pi, so there's nothing to copy into config files.

The server offers about 85 tools: keyword metrics and suggestions, live Google results, domain and backlink overviews, rank trackers, site audits with Lighthouse data, Google Business Profile and map-grid checks, Search Console and GA4 reads, and AI answer tracking across chatbots. The full reference lives in the [MCP docs](https://roamseo.com/docs/mcp).

## Cost

Reading your own projects, audits and saved data is free. Calls that pull fresh data spend account credits, and the agent can ask for a cost estimate first. Plans and credit packs are on the [pricing page](https://roamseo.com/pricing).

## Help

Email contact@roamseo.com or open an issue in this repository.
