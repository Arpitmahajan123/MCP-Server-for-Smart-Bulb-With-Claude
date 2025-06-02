"use strict";
// Author : Arpit Mahajan.
// Description : This code is a simple implementation of a Philips Smart Bulb using Model Context Protocol (MCP) SDK.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mcp_js_1 = require("@modelcontextprotocol/sdk/server/mcp.js");
const stdio_js_1 = require("@modelcontextprotocol/sdk/server/stdio.js");
const zod_1 = require("zod");
const service_1 = require("./service");
// Turn Off The Bulb By Sending A UDP Message To The Bulb's IP Address And Port Number.
// TurnOffBulb();
// Turn On The Bulb By Sending A UDP Message To The Bulb's IP Address And Port Number.
// TurnOnBulb();
// Change The Bulb's Color By Sending A UDP Message To The Bulb's IP Address And Port Number.
// ChangeColor({ r : 0, g: 100, b: 0, dimming: 50 });
// Create server instance
const server = new mcp_js_1.McpServer({
    name: "Philips Smart Bulb",
    version: "1.0.0",
    capabilities: {
        resources: {},
        tools: {},
    },
});
server.tool("turn-on-bulb", "Turn The Bulb On", () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, service_1.TurnOnBulb)();
    return { content: [{ type: "text", text: "Bulb Has Been Turned On" }] };
}));
server.tool("turn-off-bulb", "Turn The Bulb Off", () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, service_1.TurnOffBulb)();
    return { content: [{ type: "text", text: "Bulb Has Been Turned Off" }] };
}));
// In This Case Taking Input As RGB Values And Dimming Value To Change The Color Of The Bulb So, 
server.tool("change-bulb-color", "Change The Bulb Color", {
    r: zod_1.z.number().describe("Red Color Value (0-255)"),
    g: zod_1.z.number().describe("Green Color Value (0-255)"),
    b: zod_1.z.number().describe("Blue Color Value (0-255)"),
    dimming: zod_1.z.number().describe("Dimming Value (0-100)"),
}, (_a) => __awaiter(void 0, [_a], void 0, function* ({ r, g, b, dimming }) {
    yield (0, service_1.ChangeColor)({
        r,
        g,
        b,
        dimming,
    });
    return { content: [{ type: "text", text: "Bulb Has Been Turned On" }] };
}));
// Start the server with Stdio transport.
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const transport = new stdio_js_1.StdioServerTransport();
        yield server.connect(transport);
        console.log("Finally MCP Server Started Successfully!");
        console.log("You can now interact with the Philips Smart Bulb using the MCP SDK.");
    });
}
main();
