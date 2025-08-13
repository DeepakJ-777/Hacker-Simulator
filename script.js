const terminal = document.getElementById("terminal");
const input = document.getElementById("commandInput");

const fakeLogs = [
    "Accessing mainframe...",
    "Decrypting passwords...",
    "Bypassing firewall...",
    "Injecting malware...",
    "Retrieving bank credentials...",
    "Uploading payload...",
    "Trace detected! Masking IP..."
];

function typeLine(text, delay = 30) {
    return new Promise(resolve => {
        let i = 0;
        let interval = setInterval(() => {
            terminal.innerHTML += text[i];
            i++;
            if (i >= text.length) {
                clearInterval(interval);
                terminal.innerHTML += "\n";
                resolve();
            }
        }, delay);
    });
}

async function runStartup() {
    await typeLine("Initializing Hacker Terminal v1.0...\n");
    await typeLine("Connecting to secure servers...\n");
    await typeLine("Login successful.\n");
    await typeLine("Type 'help' for commands.\n");
    terminal.innerHTML += "\n";
}

runStartup();

function executeCommand(cmd) {
    cmd = cmd.trim().toLowerCase();
    if (cmd === "help") {
        terminal.innerHTML += "Available commands: help, hack, clear\n";
    } else if (cmd === "hack") {
        let log = fakeLogs[Math.floor(Math.random() * fakeLogs.length)];
        terminal.innerHTML += log + "\n";
    } else if (cmd === "clear") {
        terminal.innerHTML = "";
    } else if (cmd) {
        terminal.innerHTML += `Unknown command: ${cmd}\n`;
    }
}

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        let cmd = input.value;
        terminal.innerHTML += `> ${cmd}\n`;
        executeCommand(cmd);
        input.value = "";
    }
});
