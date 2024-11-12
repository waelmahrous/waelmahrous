import { useEffect, useState } from "react";
import { Hterm } from "../../../gotty/js/src/hterm";
import { WebTTY, protocols } from "../../../gotty/js/src/webtty";
import { ConnectionFactory } from "../../../gotty/js/src/websocket";
import { Box } from "@mui/material";
import { defaultColors } from "../../theme/theme";
import { auth, url } from "../../auth";

const TerminalComponent = () => {
    const [ready, setReady] = useState(false)

    useEffect(() => {
        const elem = document.getElementById("terminal");

        if (elem !== null) {
            var term = new Hterm(elem);

            const args = "";
            const factory = new ConnectionFactory(url, protocols);

            const wt = new WebTTY(term, factory, args, auth);
            const closer = wt.open();

            term.term.prefs_.set('font-family', '"Courier Bold", "Lucida Console", "Courier New", "Roboto Mono", monospace');
            term.term.prefs_.set('font-size', 20);
            term.term.prefs_.set('foreground-color', '#33FF33');
            term.term.prefs_.set('background-color', defaultColors.background);
            term.term.prefs_.set('font-smoothing', 'antialiased');
            term.term.prefs_.set('scroll-on-output', false);
            term.term.prefs_.set('scroll-on-keystroke', false);
            term.term.prefs_.set('scrollbar-visible', false);

            window.addEventListener("unload", () => {
                closer();
                term.close();
            });

            term.term.scrollOnKeystroke_ = false

            term.term.onTerminalReady = () => {
                setReady(true)
            }

            return () => {
                closer();
                term.close();
            };
        }
    }, []);

    return (
        <Box flex={1} id="terminal" sx={{
            position: "relative",
            height: "100%",
            width: "100%",
            pointerEvents: "none",

            opacity: ready ? "100%" : "0%"
        }} />
    );
};

export default TerminalComponent;
