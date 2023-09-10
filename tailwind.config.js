/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx}'],
    theme: {
        extend: {
            fontFamily: {
                cinzel: ['Cinzel', 'serif'],
            },
        },
    },
    plugins: [
        require('tailwind-scrollbar'),
        // Other plugins...
    ],
}