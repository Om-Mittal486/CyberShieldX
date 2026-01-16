export const designSystem = {
    colors: {
        background: '#0a0a0f', // deep black-blue
        surface: '#1a1a2e', // elevated cards
        primary: '#00ff41', // matrix green
        danger: '#ff006e', // critical alerts
        warning: '#ffd60a', // medium threats
        success: '#06ffa5',
        text: {
            primary: '#ffffff',
            secondary: '#a0a0b0',
        },
    },
    typography: {
        headings: 'font-mono', // JetBrains Mono
        body: 'font-sans', // Inter
        code: 'font-mono',
    },
    components: {
        card: 'bg-white/5 backdrop-blur-md',
        badge: 'rounded-full px-2 py-0.5',
        button: 'hover:shadow-[0_0_10px_rgba(0,255,65,0.5)] transition-shadow duration-300',
        input: 'bg-transparent border-b border-gray-700 focus:border-[#00ff41] focus:shadow-[0_1px_0_0_#00ff41] outline-none transition-all',
        progressBar: 'bg-gradient-to-r from-[#00ff41] to-[#06ffa5]',
    },
    animations: {
        scanLine: 'animate-scan-line',
        pulse: 'animate-pulse',
        slideIn: 'animate-slide-in',
        fade: 'transition-opacity duration-300',
    },
} as const;
