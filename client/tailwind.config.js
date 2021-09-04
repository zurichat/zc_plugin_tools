// tailwind.config.js
module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				fam1: ["Dancing Script", "cursive"],
				fam2: ["Oswald", "sans-serif"],
				fam3: ["Lato", "sans-serif"],
			},
			colors: {
				githubGreen: "#009B69",
				githubGrey: "#C4C4C4",
				githubTextGrey: "#A1A1A1",
				githubBlue: "#3C89FC",

				googledrive: {
					header: "#242424",
					body: "#3A3A3A",
					backg: "#F0EFEF",
					base: "#E5E5E5",
					bdr: "#E7E7E7",
					grn: "#009B69",
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
