
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                gsai: {
                    red: '#ea384c',
                    black: '#000000',
                    gold: '#DAA520',
                    gray: {
                        100: '#f3f3f3',
                        300: '#C8C8C9',
                        500: '#8E9196',
                        700: '#555555',
                        900: '#222222'
                    }
                }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                'pulse-glow': {
                    '0%, 100%': { 
                        opacity: '1',
                        boxShadow: '0 0 10px rgba(234, 56, 76, 0.7), 0 0 20px rgba(234, 56, 76, 0.5)' 
                    },
                    '50%': { 
                        opacity: '0.8',
                        boxShadow: '0 0 20px rgba(234, 56, 76, 0.9), 0 0 30px rgba(234, 56, 76, 0.7)' 
                    }
                },
                'rotate-3d': {
                    '0%': { transform: 'rotateY(0deg)' },
                    '100%': { transform: 'rotateY(360deg)' }
                },
                'slide-in-left': {
                    '0%': { transform: 'translateX(-100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' }
                },
                'slide-in-right': {
                    '0%': { transform: 'translateX(100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' }
                },
                'fade-in-up': {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                'rotate-3d': 'rotate-3d 15s linear infinite',
                'slide-in-left': 'slide-in-left 0.8s ease-out forwards',
                'slide-in-right': 'slide-in-right 0.8s ease-out forwards',
                'fade-in-up': 'fade-in-up 0.8s ease-out forwards'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
