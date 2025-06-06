# Smart Bulb Control via MCP Server With Claude

This project demonstrates how to build an MCP (Machine Control Protocol).
server using Node.js and TypeScript to autonomously control a smart bulb using AI-driven commands. 
It enables seamless, anonymous, and automated smart lighting management through UDP communication and AI interfaces like ChatGPT or Claude.

# Overview

The project showcases:
- Autonomous control of a smart bulb via MCP Server.
- Use of Cursor ID and AI clients to manage lighting.
- UDP communication with the bulb using structured JSON commands.
- Real-time color and brightness adjustments.



# How It Works

### Smart Bulb Communication
- Smart bulbs (e.g., Philips Hue) operate over a UDP server on a predefined port.
- Each bulb connects via a private IP address on your Wi-Fi network.
- JSON-formatted commands (e.g., turn on/off, change RGB) are sent as UDP datagrams.




# Development Tools

-  Node.js: For writing the UDP client.

- TypeScript: Ensures type-safe, scalable code.

- NPM: Package manager for installing dependencies.

- MCP SDK: Official SDK for building MCP servers.

- dgram module: Node’s built-in module for UDP sockets.


# MCP Server Structure
Tool Creation
Each tool maps to a bulb control action (e.g., turn_on, set_color), with schemas defining expected input.

## Bulb Functions

- turnOnBulb(): Sends a UDP command to turn the bulb on.

- turnOffBulb(): Sends a command to turn it off.

- setColor(r, g, b, dimming): Adjusts color and brightness.

Error Handling
Ensures clean connection handling and logs network errors.

Transport Layer
MCP server uses stdio transport to interface with Cursor or other AI platforms for real-time control.


# Features
- Turn bulb on/off via AI or command-line input.

- Set RGB color dynamically.

- Adjust brightness using dimming percentage.

- AI Integration with MCP for automated routines.


# How to Run

- Install dependencies
- pnpm install

- Build the TypeScript project
- pnpm build

- Run the MCP server
- npm start

Ensure your smart bulb is:

 - Connected to the same network.

 - Configured with the correct IP and UDP port.



# Future Ideas

- React lighting to coding activity or weather.

- Add color temperature support.

- Integrate with other IoT devices (e.g., fans, curtains).

- Build a GUI for real-time control visualization.



# Contributions
- Pull requests and feedback are welcome! Let’s build the future of AI-driven smart homes.



- Let me know if you'd like to include command-line examples, setup videos, or API docs in the `README.md`.

---




