const app = new Vue ({
    el:'#app',

    data: {

        // link list header
        links: [
            'Courses',
            'Course Formats',
            'Add Course',
            'Pages',
            'Demos'
        ],

        // social list icons
        socials: [
            // linkedin
            {
                "links": 'fab fa-linkedin social-info',
            },
            // instagram
            {
                "links": 'fab fa-instagram social-info',
            },
            // facebook
            {
                "links": 'fab fa-facebook social-info',
            },
            // twitter
            {
                "links": 'fab fa-twitter social-info',
            },            
        ],
    },
})