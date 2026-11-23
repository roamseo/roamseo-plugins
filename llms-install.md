# Installing the RoamSEO MCP server

RoamSEO is a hosted remote MCP server. There is nothing to clone, build or run locally, and no API key.

1. Add this entry to the MCP settings file (for Cline: `cline_mcp_settings.json`):

```json
{
  "mcpServers": {
    "roamseo": {
      "type": "streamableHttp",
      "url": "https://app.roamseo.com/mcp",
      "disabled": false
    }
  }
}
```

2. Save the file. The client connects and starts an OAuth flow: the user signs in to RoamSEO (or creates an account) in the browser and approves access.
3. Verify by calling the connection check / list projects tool. It costs no credits.

Notes:
- Some research tools spend RoamSEO credits. Tell the user the cost before running large batches.
- Optional workflow skills live in `plugins/roamseo/skills/`; agents with skills support can install them with `npx skills add roamseo/roamseo-plugins`.
- Docs: https://roamseo.com/docs/mcp
