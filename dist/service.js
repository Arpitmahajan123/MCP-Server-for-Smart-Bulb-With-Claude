"use strict";
// Writing Functions For Communicating With Bulb API.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurnOnBulb = TurnOnBulb;
exports.TurnOffBulb = TurnOffBulb;
exports.ChangeColor = ChangeColor;
// Step 1 : Import necessary modules Like UDP, Zod, and MCP SDK.
// Importing dgram for UDP communication, This is An Bulid In-Bulid Package And Use For UDP Communication.
const node_dgram_1 = __importDefault(require("node:dgram"));
// This Is An Client For UDP Communication, It Is Used To Send And Receive Messages Over UDP Protocol.
const client = node_dgram_1.default.createSocket("udp4");
// Step 2 : Get An IP Address And Port Number For The Bulb.
// Replace with your bulb's IP address
const BULB_IP = '192.168.29.235';
const BULB_PORT = 48899;
// Step 3 : Writing Function For Sending UDP Messages To The Bulb.
// This Function Will Turn On The Bulb By Sending A UDP Message To The Bulb's IP Address And Port Number.
function TurnOnBulb() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = node_dgram_1.default.createSocket("udp4");
        const message = JSON.stringify({
            // Method For Sending State.
            method: "setState",
            params: {
                // true for on, false for off
                state: true,
            },
        });
        // Step 4 : Create UDP Client And Send Message To The Bulb.
        client.send(message, BULB_PORT, BULB_IP, (err) => {
            if (err) {
                console.error("Error sending message:", err);
            }
            else {
                console.log("Message sent successfully");
            }
            client.close();
        });
    });
}
;
// This Function Will Turn Off The Bulb By Sending A UDP Message To The Bulb's IP Address And Port Number.
function TurnOffBulb() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = node_dgram_1.default.createSocket("udp4");
        const message = JSON.stringify({
            // Method For Sending State.
            method: "setState",
            params: {
                // true for on, false for off
                state: false,
            },
        });
        // Step 4 : Create UDP Client And Send Message To The Bulb.
        client.send(message, BULB_PORT, BULB_IP, (err) => {
            if (err) {
                console.error("Error sending message:", err);
            }
            else {
                console.log("Message sent successfully");
            }
            client.close();
        });
    });
}
;
// This Function Will Change The Color Of The Bulb By Sending A UDP Message To The Bulb's IP Address And Port Number.
function ChangeColor(_a) {
    return __awaiter(this, arguments, void 0, function* ({ r, g, b, dimming }) {
        const client = node_dgram_1.default.createSocket("udp4");
        const message = JSON.stringify({
            // Method For Sending Color.
            method: "setState",
            params: {
                state: true,
                // RGB Color Values
                color: {
                    dimming: dimming,
                    r: r,
                    g: g,
                    b: b
                },
            },
        });
        // Step 4 : Create UDP Client And Send Message To The Bulb.
        client.send(message, BULB_PORT, BULB_IP, (err) => {
            if (err) {
                console.error("Error sending message:", err);
            }
            else {
                console.log("Message sent successfully");
            }
            client.close();
        });
    });
}
