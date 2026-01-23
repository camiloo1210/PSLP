export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                pastel: {
                    peach: '#FFB5A7',
                    coral: '#FF9A76',
                    lavender: '#E6D5F5',
                    mint: '#C8E6C9',
                    blue: '#B3D9E8',
                    cream: '#FEF7F0',
                    pink: '#FFD1DC',
                    yellow: '#FFD700'
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
