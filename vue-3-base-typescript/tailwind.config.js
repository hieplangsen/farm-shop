/** @type {import('tailwindcss').Config} */
export default {
	theme: {
		boxShadow: {
			custom: " 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
		},
		extend: {
			backgroundImage: {
				faded: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 40.73%)",
				primary: "#7ED957"
			},
			spacing: {},
			flex: {},
			height: {},
			maxHeight: {},
			fontFamily: {
				inter: "'Inter'"
			},
			boxShadow: {
				"3xl": "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
			},
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
