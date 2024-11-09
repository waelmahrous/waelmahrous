import { useEffect } from "react";
import { Hterm } from "../../../gotty/js/src/hterm";
import { WebTTY, protocols } from "../../../gotty/js/src/webtty";
import { ConnectionFactory } from "../../../gotty/js/src/websocket";
import { Box } from "@mui/material";

const TerminalComponent = () => {

    useEffect(() => {
        // Get the terminal element after component has mounted
        const elem = document.getElementById("terminal");

        if (elem !== null) {
            // Initialize the terminal
            var term = new Hterm(elem);

            // Set the WebSocket URL for Gotty running locally (on port 8080)
            const url = "ws://localhost:8080/ws";  // Replace with your Gotty WebSocket URL
            const args = "";  // Any additional URL parameters for Gotty can be included here if needed
            const factory = new ConnectionFactory(url, protocols);

            // Create WebTTY connection
            const wt = new WebTTY(term, factory, args, "someauth");
            const closer = wt.open();

            // Close the terminal when the page is unloaded
            window.addEventListener("unload", () => {
                closer();
                term.close();
            });

            // Cleanup the WebTTY connection when the component is unmounted
            return () => {
                closer();
                term.close();
            };
        }
    }, []); // Empty dependency array ensures this effect runs only once, when the component mounts

    return (
        // <div id="terminal" sxstyle="position:relative; width:100%; height:100%"></div>
        <div id="terminal" style={{
            position: "relative",
            height: "100%",
            width: "100%"
        }} />
    );
};

export default TerminalComponent;
