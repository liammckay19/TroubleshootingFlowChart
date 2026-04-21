# Troubleshooting Flow Chart
### Interactive AV CAD & Troubleshooting Web App

An interactive, searchable flow chart designed for AV engineers to visualize signal paths and troubleshoot system issues. Built to be lightweight, easy to edit, and hosted entirely on GitHub Pages.

## 🚀 Live Demo
View the interactive diagram here: 
[https://liammckay19.github.io/TroubleshootingFlowChart/](https://liammckay19.github.io/TroubleshootingFlowChart/)

## 🛠️ Features
* **Interactive Graph:** Dynamic visualization of nodes (devices) and edges (signal paths) using Cytoscape.js.
* **Intelligent Search:** Search by device name, rack location, or specific details (IP, Serial, etc.) to instantly highlight the signal chain.
* **Signal Path Highlighting:** Automatically "lights up" both upstream (predecessors) and downstream (successors) paths of a selected device.
* **Detailed Metadata:** Click any device to view a dedicated details panel containing rack info, model numbers, and configuration notes.
* **Integrated Editor:** A built-in code generator (`editor.html`) to easily add new hardware or connections without writing JSON by hand.

## 📂 Repository Structure
* `index.html`: Main application interface.
* `editor.html`: CAD Data Editor & Code Generator.
* `data.js`: Central database for devices and connections.

## 🏗️ How to Update Data
To add or modify equipment in the flowchart:
1. Navigate to `https://liammckay19.github.io/TroubleshootingFlowChart/editor.html` in your browser.
2. Use the form to add new **Devices** or **Connections**.
3. Click **"Copy Code"** to copy the generated JavaScript array.
4. Open `data.js` in this repository on GitHub.
5. Paste the copied code, overwriting the existing `avElements` variable.
6. Commit the changes.

## 📋 Current System Profile
The repository is currently configured for a **Logitech Room Kit Pro** solution, including the Codec Pro, Rally Bar, Tap Controller, and associated signal paths.

---
*Built with Cytoscape.js for AV Engineering Troubleshooting.*
