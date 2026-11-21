import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

// Connects Pi's built-in MCP support to the hosted RoamSEO server.
// Sign in once with /mcp. An entry named "roamseo" in mcp.json overrides this.
export default function (pi: ExtensionAPI) {
  pi.registerMcpServer("roamseo", { url: "https://app.roamseo.com/mcp" });
}
