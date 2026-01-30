import React, { useEffect, useRef } from 'react';
import { Renderer, Camera, Transform, Plane, Program, Mesh, Texture, Vec3 } from 'ogl';
import { renderToStaticMarkup } from 'react-dom/server';
import gsap from 'gsap';
import {
    SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiTypescript,
    SiPostgresql, SiMongodb, SiDocker, SiFigma, SiPython,
    SiJavascript, SiVuedotjs, SiAngular,
    SiRedis, SiGithubactions, SiSupabase, SiRabbitmq,
    SiN8N, SiPytorch, SiDotnet, SiCloudflare
} from 'react-icons/si';
import { FaAws, FaJava } from 'react-icons/fa';

const icons = [
    // Languages
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    { name: "Python", Icon: SiPython, color: "#3776AB" },
    { name: "Java", Icon: FaJava, color: "#007396" },
    { name: "C#", Icon: SiDotnet, color: "#512BD4" },

    // Frontend
    { name: "React", Icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
    { name: "Vue.js", Icon: SiVuedotjs, color: "#4FC08D" },
    { name: "Angular", Icon: SiAngular, color: "#DD0031" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },

    // Backend & Database
    { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },

    { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    { name: "Redis", Icon: SiRedis, color: "#DC382D" },
    { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },

    // Cloud & DevOps
    { name: "AWS", Icon: FaAws, color: "#FF9900" },
    { name: "Docker", Icon: SiDocker, color: "#2496ED" },

    { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
    { name: "RabbitMQ", Icon: SiRabbitmq, color: "#FF6600" },
    { name: "n8n", Icon: SiN8N, color: "#FF6E26" },
    { name: "Cloudflare", Icon: SiCloudflare, color: "#F38020" },

    // AI & Machine Learning

    { name: "PyTorch", Icon: SiPytorch, color: "#EE4C2C" },
];

const vertex = `
    attribute vec3 position;
    attribute vec2 uv;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform float uTime;
    varying vec2 vUv;
    varying vec3 vNormal;

    void main() {
        vUv = uv;
        vec3 pos = position;
        
        // Subtle floating animation
        pos.y += sin(uTime * 2.0 + position.x) * 0.05;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
`;

const fragment = `
    precision highp float;
    uniform sampler2D tMap;
    varying vec2 vUv;
    uniform float uAlpha;

    void main() {
        vec4 tex = texture2D(tMap, vUv);
        // Apply alpha
        gl_FragColor = tex;
        gl_FragColor.a *= uAlpha;
    }
`;

const CircularGallery = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const renderer = new Renderer({ alpha: true, antialias: true, dpr: 2 });
        const gl = renderer.gl;
        container.appendChild(gl.canvas);
        gl.clearColor(0, 0, 0, 0);

        const camera = new Camera(gl, { fov: 45 });
        camera.position.set(0, 0, 20);

        const scene = new Transform();
        const cylinderGroup = new Transform();
        cylinderGroup.setParent(scene);

        // Resize handler
        function resize() {
            renderer.setSize(container.offsetWidth, container.offsetHeight);
            camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
        }
        window.addEventListener('resize', resize);
        resize();

        // Texture generation helper
        const createTexture = (IconComponent, color, name) => {
            const texture = new Texture(gl);
            const image = new Image();

            // Create SVG string representing a "Card"
            // Aspect ratio ~ 2:3 (e.g. 400x600)
            const width = 400;
            const height = 600;

            const svgString = renderToStaticMarkup(
                <div style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'linear-gradient(135deg, #1f1f1f 0%, #121212 100%)',
                    borderRadius: '40px',
                    border: '4px solid rgba(255, 255, 255, 0.1)',
                    boxSizing: 'border-box',
                    gap: '40px'
                }}>
                    <IconComponent size={200} color={color} style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' }} />
                    <div style={{
                        color: 'white',
                        fontSize: '40px',
                        fontFamily: 'sans-serif',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        opacity: 0.9
                    }}>{name}</div>
                </div>
            );

            // Encode SVG
            const base64 = btoa(unescape(encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">` + '<foreignObject width="100%" height="100%">' + '<div xmlns="http://www.w3.org/1999/xhtml">' + svgString + '</div>' + '</foreignObject>' + '</svg>')));

            image.src = `data:image/svg+xml;base64,${base64}`;
            image.onload = () => {
                texture.image = image;
            };
            return texture;
        };

        const radius = 10; // Radius reduced to 10
        const count = icons.length;
        const angleStep = (Math.PI * 2) / count;
        const scale = 2.5; // Scale of the planes

        icons.forEach((item, i) => {
            const angle = i * angleStep;

            // Create mesh
            // Plane aspect ratio 2:3 (matching texture)
            const geometry = new Plane(gl, { width: 1 * scale, height: 1.5 * scale });
            const program = new Program(gl, {
                vertex,
                fragment,
                uniforms: {
                    tMap: { value: createTexture(item.Icon, item.color, item.name) },
                    uTime: { value: 0 },
                    uAlpha: { value: 1 }
                },
                transparent: true,
                cullFace: false,
            });

            const mesh = new Mesh(gl, { geometry, program });
            mesh.setParent(cylinderGroup);

            // Position in circle
            const x = Math.sin(angle) * radius;
            const z = Math.cos(angle) * radius;
            mesh.position.set(x, 0, z);

            // Face slightly outwards/center
            mesh.lookAt(new Vec3(0, 0, 0));
            // Flip 180 because lookAt points -z usually or standard mesh faces +z
            mesh.rotation.y += Math.PI;
        });

        // Animation Loop
        let rotationSpeed = 0.0005; // Slower rotation
        let isDragging = false;
        let startX = 0;
        let startY = 0; // NEW: Track Y for tilt
        let targetRotationY = 0; // Horizontal rotation (around Y axis)
        let targetRotationX = 0; // Vertical tilt (around X axis)
        let currentRotationY = 0;
        let currentRotationX = 0;
        let velocityX = 0; // Velocity for rotation Y (from dragging X)
        let velocityY = 0; // Velocity for rotation X (from dragging Y) - Optional, or direct mapping? User said "move slightly up or down"

        // Interaction
        const onDown = (e) => {
            isDragging = true;
            startX = (e.touches ? e.touches[0].clientX : e.clientX);
            startY = (e.touches ? e.touches[0].clientY : e.clientY);
            velocityX = 0;
        };

        const onMove = (e) => {
            if (!isDragging) return;
            const x = (e.touches ? e.touches[0].clientX : e.clientX);
            const y = (e.touches ? e.touches[0].clientY : e.clientY);

            const deltaX = x - startX;
            const deltaY = y - startY;

            velocityX = deltaX * 0.002;
            targetRotationY += velocityX;

            // Tilt logic: Map Y movement to X rotation
            // Limit tilt to a small range (e.g., -0.2 to 0.2 radians)
            targetRotationX += deltaY * 0.001;
            targetRotationX = Math.max(-0.3, Math.min(0.3, targetRotationX)); // Clamp tilt

            startX = x;
            startY = y;
        };

        const onUp = () => {
            isDragging = false;
        };

        container.addEventListener('mousedown', onDown);
        container.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);
        container.addEventListener('touchstart', onDown);
        container.addEventListener('touchmove', onMove);
        window.addEventListener('touchend', onUp);

        let animationId;
        const update = (t) => {
            animationId = requestAnimationFrame(update);

            // Inertia for horizontal rotation
            if (!isDragging) {
                targetRotationY += velocityX;
                velocityX *= 0.95; // Friction

                // Auto rotate slowly if stopped
                if (Math.abs(velocityX) < 0.0001) {
                    targetRotationY += rotationSpeed; // Constant drift
                }

                // Return tilt to center slowly when released? Or keep it? 
                // "move slightly up or down" implies direct control. Let's let it stay or drift back.
                // Let's drift back to 0 for a nicer "reseting" feel
                targetRotationX *= 0.95;
            }

            // Smooth interpolation
            currentRotationY += (targetRotationY - currentRotationY) * 0.1;
            currentRotationX += (targetRotationX - currentRotationX) * 0.1;

            cylinderGroup.rotation.y = currentRotationY;
            cylinderGroup.rotation.x = currentRotationX;

            // Update time uniforms for floating effect
            cylinderGroup.children.forEach(mesh => {
                if (mesh.program.uniforms.uTime) {
                    mesh.program.uniforms.uTime.value = t * 0.001;
                }
            });

            renderer.render({ scene, camera });
        };
        animationId = requestAnimationFrame(update);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
            container.removeEventListener('mousedown', onDown);
            container.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);
            container.removeEventListener('touchstart', onDown);
            container.removeEventListener('touchmove', onMove);
            window.removeEventListener('touchend', onUp);
            if (gl.canvas.parentNode) {
                gl.canvas.parentNode.removeChild(gl.canvas);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    );
};

export default CircularGallery;
