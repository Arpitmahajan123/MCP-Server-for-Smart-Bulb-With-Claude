// Author : Arpit Mahajan.
// Description : This code is a simple implementation of a Philips Smart Bulb using Model Context Protocol (MCP) SDK.

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { TurnOnBulb, TurnOffBulb, ChangeColor } from "./service";


// Turn Off The Bulb By Sending A UDP Message To The Bulb's IP Address And Port Number.

// TurnOffBulb();

// Turn On The Bulb By Sending A UDP Message To The Bulb's IP Address And Port Number.

// TurnOnBulb();

// Change The Bulb's Color By Sending A UDP Message To The Bulb's IP Address And Port Number.

// ChangeColor({ r : 0, g: 100, b: 0, dimming: 50 });


// Create server instance

const server = new McpServer({
    name: "Philips Smart Bulb",
    version: "1.0.0",
    capabilities: {
        resources: {},
        tools: {},
    },
});


server.tool("turn-on-bulb", "Turn The Bulb On", async () => {
    await TurnOnBulb();
    return { content: [{ type: "text", text: "Bulb Has Been Turned On" }] };

});

server.tool("turn-off-bulb", "Turn The Bulb Off", async () => {
    await TurnOffBulb();
    return { content: [{ type: "text", text: "Bulb Has Been Turned Off" }] };

});

// In This Case Taking Input As RGB Values And Dimming Value To Change The Color Of The Bulb So, 
server.tool("change-bulb-color", "Change The Bulb Color",
    {
        r: z.number().describe("Red Color Value (0-255)"),
        g: z.number().describe("Green Color Value (0-255)"),
        b: z.number().describe("Blue Color Value (0-255)"),
        dimming: z.number().describe("Dimming Value (0-100)"),
    }, async ({ r, g, b, dimming }) => {
        await ChangeColor({
            r,
            g,
            b,
            dimming,
        });
        
        return { content: [{ type: "text", text: "Bulb Has Been Turned On" }] };

    });

// Start the server with Stdio transport.

async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.log("Finally MCP Server Started Successfully!");
    console.log("You can now interact with the Philips Smart Bulb using the MCP SDK.");
}

main();

