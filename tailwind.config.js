export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                kiroku: {
                    primary: '#F970A2',   // Cherry Blossom
                    secondary: '#B65691', // Evening Sky
                    action: '#DDA15E',    // Sun Gold
                    contrast: '#2D1B33',  // Deep Trunk
                    background: '#FCE4D6',// Soft Horizon
                    accent: '#7A4495',    // Twilight Purple
                }
            },
            fontFamily: {
                sans: ['Inter', 'SF Pro Display', 'sans-serif']
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
