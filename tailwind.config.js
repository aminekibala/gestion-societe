import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.jsx', // Si vous utilisez React
        './resources/**/*.vue', // Si vous utilisez Vue
        './resources/**/*.php',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                lightGreen: '#DFF2EB',
                lightBlue: '#B9E5E8',
                mediumBlue: '#7AB2D3',
                darkBlue: '#4A628A',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'), // Pour styliser les formulaires
        require('@tailwindcss/typography'), // Pour les contenus riches (textes, articles)
        require('@tailwindcss/aspect-ratio'), // Pour gérer les ratios d'aspect
    ],
};
