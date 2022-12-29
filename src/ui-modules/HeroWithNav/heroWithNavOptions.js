const heroWithNavOptions = {
    img: {
        src: './src/ui-modules/Hero/img/heroPlaceholder.jpg',
        styleOverrides: {
            height: '100vh'
        }
    },
    nav: {
        items: [
            {name: 'Software', page: 'home.html'}, 
            {name: 'Products', page: 'about.html'}, 
            {name: 'Places', page: 'contact.html'}
        ],
        styleOverrides: {
            itemTextColor: 'white',
            itemTextHoverColor: 'white',
            itemBackgroundColor: 'darkGray',
            itemBackgroundColorHover: 'black'
        }
    }
}

export default heroWithNavOptions;