module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                red: {
                    300: '#EA8979',
                    400: '#EE735D',
                    500: '#DC3E22',
                    600: '#B7280F'
                },
                gray: {
                    100: '#F4F4F4',
                    200: '#ECECEC',
                    300: '#999999',
                    400: '#C4C4C4',
                    500: '#333333'
                },
                black: '#333',
                green: '#A8B64F',
                darkgreen: '#899441',
                yellow: {
                    200: '#FFDDA9'
                },
                purple: {
                    200: '#DFDCFE',
                },
                blue: {
                    200: '#C5F1FF',
                },
            },
            fontSize: {
                '10xl': '9.375rem'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
