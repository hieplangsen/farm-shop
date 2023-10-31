/** @type {import('tailwindcss').Config} */
export default {
	theme: {
		boxShadow: {
			custom: " 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
		},
		fontSize: {
			xs: "0.75rem",
			sm: "0.875rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
			"6xl": "4rem"
		},
		extend: {
			backgroundImage: {
				faded: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 40.73%)",
				primary: "#7ED957"
			},
			spacing: {},
			flex: {},
			width: {},
			height: {},
			maxHeight: {},
			fontFamily: {
				inter: "'Inter'"
			},
			boxShadow: {
				"3xl": "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
			},
			maxWidth: {},
			zIndex: {},
			colors: {
				primary: "#7ED957",
				border: "#545454"
			},
			animation: {}
		},
		screens: {}
	},
	plugins: [],
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"]
};
