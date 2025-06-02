// Writing Functions For Communicating With Bulb API.

// Step 1 : Import necessary modules Like UDP, Zod, and MCP SDK.

// Importing dgram for UDP communication, This is An Bulid In-Bulid Package And Use For UDP Communication.
import dgram from "node:dgram"; 

// This Is An Client For UDP Communication, It Is Used To Send And Receive Messages Over UDP Protocol.
const client = dgram.createSocket("udp4");

// Step 2 : Get An IP Address And Port Number For The Bulb.

// Replace with your bulb's IP address
const BULB_IP = '192.168.29.235';
const BULB_PORT = 48899;

 
// Step 3 : Writing Function For Sending UDP Messages To The Bulb.


// This Function Will Turn On The Bulb By Sending A UDP Message To The Bulb's IP Address And Port Number.
export async function TurnOnBulb() {
    const client = dgram.createSocket("udp4");
    const message = JSON.stringify({
        // Method For Sending State.
        method: "setState",
        params : {
            // true for on, false for off
            state: true, 
        },

    });

    // Step 4 : Create UDP Client And Send Message To The Bulb.

    client.send(message, BULB_PORT, BULB_IP, (err) => {

        if (err) {
            console.error("Error sending message:", err);
        } else {
            console.log("Message sent successfully");
        }

        client.close();

    });

    


};


// This Function Will Turn Off The Bulb By Sending A UDP Message To The Bulb's IP Address And Port Number.
export async function TurnOffBulb() {
    const client = dgram.createSocket("udp4");
    const message = JSON.stringify({
        // Method For Sending State.
        method: "setState",
        params : {
            // true for on, false for off
            state: false, 
        },

    });

    // Step 4 : Create UDP Client And Send Message To The Bulb.

    client.send(message, BULB_PORT, BULB_IP, (err) => {

        if (err) {
            console.error("Error sending message:", err);
        } else {
            console.log("Message sent successfully");
        }

        client.close();

    });


};


// This Function Will Change The Color Of The Bulb By Sending A UDP Message To The Bulb's IP Address And Port Number.

export async function ChangeColor( {r, g, b, dimming} : { r: number, g: number, b: number, dimming: number }) {
    const client = dgram.createSocket("udp4");
    const message = JSON.stringify({
        // Method For Sending Color.
        method: "setState",
        params : {
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
    client.send(message, BULB_PORT, BULB_IP, (err) =>
        {
        if (err) {
            console.error("Error sending message:", err);
        } else {
            console.log("Message sent successfully");
        }
        client.close();
    });


}




