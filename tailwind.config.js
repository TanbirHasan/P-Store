/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				custom: 'inset 0px 4px 4px rgba(255, 188, 15, 0.4)',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
