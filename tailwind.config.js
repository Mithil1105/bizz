/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './public/index.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    blue: '#1E3A8A',
                    light: '#2563EB',
                },
            },
        },
    },
    plugins: [],
};
