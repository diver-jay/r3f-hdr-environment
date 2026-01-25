# r3f-hdr-environment

A React Three Fiber project demonstrating HDR environment mapping with an underwater scene.

## Features

- HDR environment mapping using .hdr files
- Interactive camera controls with OrbitControls
- Built with React Three Fiber and Three.js
- Performance monitoring with r3f-perf
- Debug GUI with lil-gui
- Fast development with Vite

## Tech Stack

- **React** 19.0.0
- **Three.js** 0.174.0
- **React Three Fiber** 9.5.0
- **@react-three/drei** 10.7.7
- **Vite** 6.2.2

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open your browser and navigate to the local development URL shown in the terminal.

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
r3f-hdr-environment/
├── src/
│   ├── App.jsx          # Main React Three Fiber scene
│   ├── index.jsx        # Application entry point
│   ├── index.html       # HTML template
│   └── style.css        # Global styles
├── static/
│   └── underwater.hdr   # HDR environment map
├── package.json
└── vite.config.js
```

## Usage

The project displays an underwater HDR environment that can be explored using mouse controls:

- **Left Click + Drag**: Rotate camera
- **Right Click + Drag**: Pan camera
- **Scroll**: Zoom in/out

## HDR Environment

The project uses the `underwater.hdr` file located in the `static/` directory. You can replace this with your own HDR files to create different environments.

## License

Private project
