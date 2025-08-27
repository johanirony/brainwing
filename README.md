# 3D Model Viewer

A React-based 3D model viewer built with Three.js, React Three Fiber, and Drei, featuring advanced HDRI environment control similar to node-based 3D software.

## Features

- Load and display GLTF/GLB 3D models
- Advanced HDRI environment mapping support (.exr format)
- Interactive HDRI settings panel (strength, blur, resolution, background)
- Interactive camera controls (orbit, zoom, pan)
- Automatic model centering and scaling
- Shadow rendering with HDRI lighting
- Loading progress indicator
- Responsive design
- Professional-grade environment setup

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your HDRI file:**
   - Place your `.exr` HDRI file in the `public/models/` directory
   - Name it `environment.exr` (or update the path in `Scene3D.jsx`)
   - The HDRI will be used as both background and environment lighting

3. **Run the development server:**
   ```bash
   npm run dev
   ```

## File Structure

```
frontend/
├── public/
│   └── models/
│       ├── brainwing.glb          # Your 3D model
│       └── environment.exr        # Your HDRI file (add this)
├── src/
│   ├── components/
│   │   ├── Scene3D.jsx           # Main 3D scene component
│   │   ├── HDRIEnvironment.jsx   # HDRI environment component
│   │   ├── HDRISettings.jsx      # HDRI settings panel
│   │   └── ModelInfo.jsx         # Info overlay
│   ├── App.jsx                   # Main app component
│   └── ...
```

## HDRI Environment Setup

The viewer now includes a professional HDRI environment setup similar to node-based 3D software:

### HDRI Settings Panel
- **Strength**: Control environment lighting intensity (0.1 - 5.0)
- **Blur**: Adjust environment blur for softer reflections (0 - 0.5)
- **Resolution**: Choose HDRI resolution (512, 1024, 2048, 4096)
- **Background**: Toggle HDRI as background

### Technical Features
- **Equirectangular Mapping**: Standard HDRI projection
- **Linear Color Space**: Professional color management
- **ACES Filmic Tone Mapping**: Cinema-grade rendering
- **Environment Maps**: Automatic reflection and lighting
- **High-Quality Textures**: Optimized filtering and mipmaps

## Controls

- **Mouse drag**: Rotate camera around the model
- **Mouse wheel**: Zoom in/out
- **Right mouse drag**: Pan camera
- **Touch gestures**: Supported on mobile devices
- **HDRI Settings**: Click the "HDRI Settings" button to adjust environment

## Customization

### Changing the Model
Update the URL in `Scene3D.jsx`:
```jsx
<Model url="/models/your-model.glb" />
```

### Changing the HDRI
Update the path in `Scene3D.jsx`:
```jsx
<HDRIEnvironment
  hdriPath="/models/your-hdri.exr"
  background={true}
  blur={0.05}
  resolution={2048}
  strength={2.0}
/>
```

### Adjusting Lighting
Modify the lighting setup in `Scene3D.jsx`:
```jsx
<ambientLight intensity={0.1} />
<directionalLight 
  position={[5, 5, 5]} 
  intensity={0.3} 
  castShadow 
/>
```

## Supported Formats

- **3D Models**: GLTF, GLB
- **Environment Maps**: EXR, HDR, JPG, PNG
- **Textures**: JPG, PNG, EXR, HDR

## Performance Tips

- Use compressed GLB files for better loading performance
- Optimize HDRI resolution (2048x1024 is usually sufficient)
- Enable shadows only when necessary
- Use `Suspense` boundaries for better loading experience
- Adjust HDRI strength and blur for optimal performance

## Troubleshooting

### Model not loading
- Check file path and format
- Ensure the model file is in the `public/models/` directory
- Check browser console for errors

### HDRI not working
- Verify the file is in EXR format
- Check file path in `Scene3D.jsx`
- The fallback environment will be used if HDRI fails to load
- Use the HDRI Settings panel to adjust parameters

### Performance issues
- Reduce HDRI resolution in settings
- Simplify the 3D model
- Disable shadows if not needed
- Check browser console for warnings
- Adjust HDRI strength and blur settings

## Advanced Features

### HDRI Environment Control
The viewer now provides professional-grade HDRI control:
- Real-time parameter adjustment
- Professional tone mapping
- Optimized texture handling
- Fallback environments

### Material Enhancement
- Automatic environment map intensity
- Professional material setup
- Optimized shadow casting
- High-quality reflections
