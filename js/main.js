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
        ],

        // pages footer 
        pages: [
            'Blog',
            'Home',
            'Shortcodes',
            'Membership',
            'Courses',
            'Typography',   
        ],

        // address
        // contact: [

        //     {
        //         "address": 'USA, California 20, First Avenue, California',
        //         "telephone": '+1 230 203 202',
        //         "fax": '+1 230 203 243',
        //         "email_info": 'info@masterstudy.com',
        //     }           
        // ],

        // contacts
        address: 'USA, California 20, First Avenue, California',
        telephoneInfo: '+1 230 203 202',
        faxInfo: '+1 230 203 243',
        emailInfo: 'info@masterstudy.com',



        // slider students
        indexImage: 0,
        imagesStudents: [
            {
                "image": '2-100x100.jpg',
                "comment": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolor veniam sit alias nihil laboriosam repudiandae, earum enim soluta iste officia debitis voluptas, obcaecati, cum consectetur ducimus? Unde, ad vitae.'
            },
            {
                "image": '1-100x100.jpg',
                "comment": 'borem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolor veniam sit alias nihil laboriosam repudiandae, earum enim soluta iste officia debitis voluptas, obcaecati, cum consectetur ducimus? Unde, ad vitae.'
            },
            {
                "image": '4-100x100.jpg',
                "comment": 'clorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolor veniam sit alias nihil laboriosam repudiandae, earum enim soluta iste officia debitis voluptas, obcaecati, cum consectetur ducimus? Unde, ad vitae.'
            }
        ],




        methods: {
            setImage(index){
                this.indexImage = index;
            },
        },
    },
})