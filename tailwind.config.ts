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
					foreground: 'hsl(var(--primary-foreground))',
					hover: 'hsl(var(--primary-hover))'
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
				}
			},
			backgroundImage: {
				'gradient-sky': 'var(--gradient-sky)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)'
			},
			boxShadow: {
				'elegant': 'var(--shadow-elegant)',
				'card': 'var(--shadow-card)',
				'hero': 'var(--shadow-hero)'
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fly1': {
					'0%': { 
						transform: 'translate(0, 80vh) rotate(45deg)', 
						opacity: '0' 
					},
					'10%': { 
						opacity: '1' 
					},
					'50%': { 
						transform: 'translate(50vw, 20vh) rotate(45deg)' 
					},
					'90%': { 
						opacity: '1' 
					},
					'100%': { 
						transform: 'translate(100vw, 10vh) rotate(45deg)', 
						opacity: '0' 
					}
				},
				'fly2': {
					'0%': { 
						transform: 'translate(100vw, 60vh) rotate(-12deg)', 
						opacity: '0' 
					},
					'15%': { 
						opacity: '1' 
					},
					'50%': { 
						transform: 'translate(30vw, 40vh) rotate(-12deg)' 
					},
					'85%': { 
						opacity: '1' 
					},
					'100%': { 
						transform: 'translate(-10vw, 30vh) rotate(-12deg)', 
						opacity: '0' 
					}
				},
				'fly3': {
					'0%': { 
						transform: 'translate(20vw, 100vh) rotate(90deg)', 
						opacity: '0' 
					},
					'20%': { 
						opacity: '1' 
					},
					'50%': { 
						transform: 'translate(70vw, 50vh) rotate(90deg)' 
					},
					'80%': { 
						opacity: '1' 
					},
					'100%': { 
						transform: 'translate(90vw, 0vh) rotate(90deg)', 
						opacity: '0' 
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fly1': 'fly1 20s ease-in-out infinite',
				'fly2': 'fly2 25s ease-in-out infinite',
				'fly3': 'fly3 30s ease-in-out infinite',
				'fade-in': 'fade-in 0.6s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
