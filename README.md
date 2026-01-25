# r3f-hdr-environment

A React Three Fiber project demonstrating cube map environment mapping.

## Features

- Cube map environment mapping using 6-sided cubebox textures
- Interactive camera controls with OrbitControls
- Built with React Three Fiber and Three.js
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
├── public/
│   ├── px.jpg           # Positive X face
│   ├── nx.jpg           # Negative X face
│   ├── py.jpg           # Positive Y face
│   ├── ny.jpg           # Negative Y face
│   ├── pz.jpg           # Positive Z face
│   └── nz.jpg           # Negative Z face
├── src/
│   ├── App.jsx          # Main React Three Fiber scene
│   ├── index.jsx        # Application entry point
│   ├── index.html       # HTML template
│   └── style.css        # Global styles
├── package.json
└── vite.config.js
```

## Usage

The project displays a cube map environment that can be explored using mouse controls:

- **Left Click + Drag**: Rotate camera
- **Right Click + Drag**: Pan camera
- **Scroll**: Zoom in/out

## Cube Map Environment

The project uses 6 cube map images (px.jpg, nx.jpg, py.jpg, ny.jpg, pz.jpg, nz.jpg) located in the `public/` directory. You can replace these with your own cube map textures to create different environments.

Each image represents one face of the cube:
- px/nx: Positive/Negative X axis (right/left)
- py/ny: Positive/Negative Y axis (top/bottom)
- pz/nz: Positive/Negative Z axis (front/back)

## License

Private project
