# Troubleshooting Flow Chart
### Interactive AV CAD and Troubleshooting Web App

An interactive, searchable flow chart designed for AV engineers to visualize signal paths and troubleshoot system issues. Built to be lightweight, easy to edit, and hosted entirely on GitHub Pages or locally on a corporate machine.

## Live Demo
View the interactive diagram here: 
[https://liammckay19.github.io/TroubleshootingFlowChart/](https://liammckay19.github.io/TroubleshootingFlowChart/)

## Features
* Interactive Graph: Dynamic visualization of nodes (devices) and edges (signal paths) using Cytoscape.js.
* Intelligent Search: Search by device name, rack location, or specific details (IP, Serial, etc.) to instantly highlight the signal chain.
* Signal Path Highlighting: Automatically lights up both upstream (predecessors) and downstream (successors) paths of a selected device.
* Detailed Metadata: Click any device to view a dedicated details panel containing rack info, model numbers, and configuration notes.
* Integrated Visual Editor: Build your system by dragging nodes and "wiring" them together visually.

## How to Run Locally (Corporate Machines)
To use this tool offline or on a secured network:
1. Download the repository files (`index.html`, `editor.html`, and `data.js`) and place them in the same folder.
2. Double-click `index.html` to launch the application in your default web browser.
3. No internet connection or server installation is required.

## How to Use the Editor
The `editor.html` file allows you to modify the system layout without writing code:
1. **Add Devices:** Use the top form to enter an ID, Label, and Details. Click "Add Device."
2. **Organize:** Ensure **Join Mode is OFF** to drag and drop nodes into your preferred layout.
3. **Connect (Wire) Nodes:** * Toggle **Join Mode: ON**.
   * Click the **Source** node (e.g., Laptop), then click the **Target** node (e.g., Codec). 
   * A signal path will be created automatically.
4. **Correct Errors:** Use the **Undo** button to remove the last action or **Right-Click** any node/wire to delete it.

## How to Save Your Changes
Because this is a static web app, the editor cannot save directly to your hard drive. Follow these steps to save your work:
1. In the Editor, click the green **Copy data.js** button.
2. Navigate to your project folder and open `data.js` using **Notepad**, **TextEdit**, or any code editor.
3. Delete all the old text in that file.
4. **Paste** the new code you copied from the editor.
5. **Save** the file.
6. Refresh `index.html` in your browser to see the updated system.

## Repository Structure
* `index.html`: Main application interface for searching and troubleshooting.
* `editor.html`: Visual CAD tool for building and modifying the system.
* `data.js`: The central database file where all hardware and connection data is stored.

## Current System Profile
The repository is currently configured for a Logitech Room Kit Pro solution, including the Codec Pro, Rally Bar, Tap Controller, and associated signal paths.

---
Built with Cytoscape.js for AV Engineering Troubleshooting.
