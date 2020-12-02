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

        // latest blogs
        blogs: [
            {
                "image": 'photo-1490376840453-5f616fbebe5b-150x150.jpeg',
                "title":  'Our main target is to "Developing yourself as a leader"',
                "date": '- August 9, 2018',
            },
            {
                "image": 'photo-1517520287167-4bbf64a00d66-150x150.jpeg',
                "title":  'Those other college Expense you aren\'t thinking about',
                "date": '- June 3, 2015',
            }
        ]
    },
})