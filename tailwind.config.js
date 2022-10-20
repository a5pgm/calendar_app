const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'default-white': "#F2F2F2",
                'default-black': "#262626",
                'light-green': "#4ED9A6",
                'default-green': "#45BF9D", 
                'dark-green': "#F29BC4",

            },
        },

    },

    plugins: [require('@tailwindcss/forms')],
};
