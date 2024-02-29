import React from 'react'
import { Icon } from '@iconify/react';

export const topbar = [
    {
        path: '/',
        icon: <Icon icon="fa-solid:phone" />,
        phone: '0113 204 2900',
        links: [
            {
                path: '/carrers',
                title: 'tenants',
            },
            {
                path: '/knowledge-bank',
                title: 'landlords',
            },
            {
                path: '/news',
                title: 'news & blogs',
            },
            {
                path: '/about',
                title: 'about us',
            },
            // {
            //     path: '/instant-valuation',
            //     title: 'Instant Valuation',
            // },
            {
                path: '/contact',
                title: 'contact us',
            },
            {
                path: '/report',
                title: 'report a repair',
            },
        ],
    },
];

export const navbar = [ 
    {
        icon: <Icon icon="uiw:home" />,
        link: "/",
        title: "Home",
        lists: [
            {
                link: "/",
                title: "Lettings",
                type: "select",
                options: [
                    {
                        title: "Professionals",
                        link: "/professionals",
                        icon: <Icon icon="healthicons:city-worker-outline" />,
                    },
                    {
                        title: "Students",
                        link: "/students",
                        icon: <Icon icon="mdi:account-student-outline" />,
                    },
                    {
                        title: "Landlords",
                        link: "/landlords",
                        icon: <Icon icon="healthicons:city-worker-outline" />,
                    },
                    {
                        title: "Let OR Sell",
                        link: "/let-or-sell",
                        icon: <Icon icon="pepicons-pencil:key" />,
                    },
                    {
                        title: "Refer A Friend",
                        link: "/refer-a-friend",
                        icon: <Icon icon="fluent:chat-32-regular" />,
                    }
                ]
            },
            {
                link: "/",
                title: "Nightly Lets",
                type: "select",
                options: [
                    {
                        title: "Professionals",
                        link: "/professionals",
                        icon: <Icon icon="healthicons:city-worker-outline" />,
                    },
                    {
                        title: "Students",
                        link: "/students",
                        icon: <Icon icon="mdi:account-student-outline" />,
                    },
                    {
                        title: "Landlords",
                        link: "/landlords",
                        icon: <Icon icon="healthicons:city-worker-outline" />,
                    },
                ]
            },
            {
                link: "/",
                title: "Sales",
                type: "select",
                options: [
                    {
                        title: "Investment Sales",
                        link: "/investments-sales",
                        icon: <Icon icon="gis:home" />,
                    },
                    {
                        title: "Buy A BTL",
                        link: "/buy-a-btl",
                        icon: <Icon icon="gis:home" />,
                    },
                    {
                        title: "Mortgages",
                        link: "/mortgages",
                        icon: <Icon icon="pepicons-pencil:key" />,
                    },
                    {
                        title: "Auctions",
                        link: "/auction",
                        icon: <Icon icon="mingcute:auction-line" />,
                    },
                    {
                        title: "Value My Property",
                        link: "/value-my-property",
                        icon: <Icon icon="teenyicons:search-property-solid" />,
                    },
                ]
            },
            {
                link: "/",
                title: "Refurbishments",
                type: "select",
                 options: [
                    {
                        title: "Refubs",
                        link: "/invest-refubs",
                        icon: <Icon icon="solar:paint-roller-line-duotone" />,
                    },
                    {
                        title: "Overview",
                        link: "/invest-overview",
                        icon: <Icon icon="bi:piggy-bank" />,
                    },
                    {
                        title: "Sourcing",
                        link: "/invest-sourcing",
                        icon: <Icon icon="cil:search" />,
                    },
                    // {
                    //     title: "Developments",
                    //     link: "/invest-development",
                    //     icon: <Icon icon="et:tools" />,
                    // },
                    {
                        title: "Invest In Leeds",
                        link: "/invest-in-leeds",
                        icon: <Icon icon="lets-icons:dimond-alt-light" />,
                    },
                    {
                        title: "Investment Sales",
                        link: "/invest-sales",
                        icon: <Icon icon="uiw:home" />,
                    },
                    {
                        title: "Danhamz Investor Club",
                        link: "/invest-investor-club",
                        icon: <Icon icon="uiw:home" />,
                    }
                ]
            },
            {
                link: "/",
                title: "Block Management",
                type: "select",
                options: [
                    {
                        title: "Block management",
                        link: "/",
                        icon: <Icon icon="mingcute:building-3-line" />,
                    },
                    {
                        title: "Case Studies",
                        link: "/",
                        icon: <Icon icon="octicon:pencil-24" />,
                    },
                    {
                        title: "Referral Scheme",
                        link: "/",
                        icon: <Icon icon="fluent:chat-32-regular" />,
                    }
                ]
            },
            {
                link: "/",
                title: "Maintenance",
                type: "select",
                options: [
                    {
                        title: "Developments & Maintainance",
                        link: "/invest-development",
                        icon: <Icon icon="et:tools" />,
                    },
                ]
            }
        ]
    }
]

// home page content

export const rentContainer = [
    {
        noOfbeds: 'How many bedrooms do you need?', name: 'bedrooms',
        quantity:[
            {count: "1", value: "1"},
            {count: "2", value: "2"},
            {count: "3", value: "3"},
            {count: "4", value: "4"},
            {count: "5", value: "5"},
            {count: "6", value: "6"},
            {count: "7", value: "7"},
            {count: "8", value: "8"},
            {count: "9", value: "9"},
            {count: "10", value: "10"},
        ],
        container: [
            {
                title: "What is your budget?",
                type: "select", name: 'maxPrice',
                options: [
                    {
                        title: "No Preferences", value: null
                    }, 
                    {
                        title: "Less than $1000", value: 1000
                    }, {
                        title: "$1000 - $2000", value: 2500
                    },{
                        title: "$2000 - $3000", value: 3000
                    }
                ]
            },
            {
                title: "Location (tick all that apply)",
                type: "checkbox",
                options: [
                    { title: "No Preferences", value: "no Preferences"}, 
                    {  title: "Armley", value: "Armley" },
                    {  title: "Beeston", value: "Beeston" },
                    {  title: "Bradford", value: "Bradford" },
                    {  title: "Bramley", value: "Bramley" },
                    {  title: "City Center", value: "City Center" },
                    {  title: "East End Park", value: "East End Park" },
                    {  title: "Farsley", value: "Farsley" },
                    {  title: "Gildersome", value: "Gildersome" },
                    {  title: "Horsforth", value: "Horsforth" },
                    {  title: "Leeds", value: "Leeds" },
                    {  title: "Meanwood", value: "Meanwood" },
                    {  title: "Morley", value: "Morley" },
                    {  title: "Northgate House", value: "Northgate House" },
                    {  title: "Pudsey", value: "Pudsey" },
                    {  title: "Stanningley", value: "Stanningley" },
                    {  title: "Wortley", value: "Wortley" },
                    {  title: "Wyke", value: "Wyke" },
                ]
            },
        ]
    }
]

export const buyContainer = [
    {
        price: [
            {
                type: "select", name: "minPrice",
                options: [
                    {
                        title: "Min Price",
                    }, 
                    {
                        title: "$100000", value: 100000,
                    }, {
                        title: "$200000", value: 200000,
                    },
                    {
                        title: "$300000", value: 300000,
                    },
                    {
                        title: "$400000", value: 400000,
                    },
                    {
                        title: "$600000", value: 600000,
                    },
                ]
            },
            {
                type: "select",name: "maxPrice",
                options: [
                    {
                        title: "Max Price",
                    }, 
                    {
                        title: "$300000", value: 300000,
                    }, {
                        title: "$500000", value: 500000,
                    },
                    {
                        title: "$700000", value: 700000,
                    },
                    {
                        title: "$900000", value: 900000,
                    },
                    {
                        title: "$1200000", value: 1200000,
                    },
                ]
            }
        ],
        beds: [
            {
                type: "select",name: "minBedrooms",
                options: [
                    {count: "Min beds", value: null},
                    {count: "1", value: 1},
                    {count: "2", value: 2},
                    {count: "3", value: 3},
                    {count: "4", value: 4},
                    {count: "5", value: 5},
                    {count: "6", value: 6},
                    {count: "7", value: 7},
                    {count: "8", value: 8},
                    {count: "9", value: 9},
                ]
            },
            {
                type: "select", name: "maxBedrooms",
                options: [
                    {count: "Max beds", value: null},
                    {count: "1", value: 1},
                    {count: "2", value: 2},
                    {count: "3", value: 3},
                    {count: "4", value: 4},
                    {count: "5", value: 5},
                    {count: "6", value: 6},
                    {count: "7", value: 7},
                    {count: "8", value: 8},
                    {count: "9", value: 9},
                    {count: "10", value: 10},
                ]
            }
        ],
        Type: [
            {
                type: "select", name: "location",
                options: [
                    {title: "City Center", value: "City Center",}, 
                    {title: "Organization", value: "Organization"},
                    {title: "Parley", value: "Parley"},
                    {title: "Armley", value: "Armley"},
                ]
            },
            {
                type: "select", name: "propertyType",
                options: [
                    {title: "Home", value: "Home",},
                    {title: "Appartment", value: "Appartment"},
                    {title: "Bungalow", value: "Bunglow"},
                    {title: "Cater", value: "Cater"},
                    {title: "Combined", value: "Combined"},
                ]
            }
        ]
    }
]

export const banner = [
    {
        title: "Your one-stop destination for comprehensive property solutions. Whether you're looking to rent, buy, refurbish, maintain, or manage your property, we have the expertise and dedication to meet all your property needs. ",
        info: "Previously known as Let Leeds, you can now call us Danhamz. Whether you’re a buyer, seller, tenant, landlord, investor or developer, our friendly team is here to help. We offer a range of property services that include Lettings, Sales & Block Management all under one roof.",
        para: "Couples, families, investors, buyers, and sellers all know they can depend on our highly experienced team to protect their best interests while finding the property that is just right for them. We are also big believers in value and specialise in helping our clients get the most from every pound they spend.",
    }
]

export const home_services = [
    {
        title: "Lettings",
        img: '/images/Lettings.jpg',
        height: false,
        para: "Looking for the perfect rental property? Our extensive portfolio features a wide range of homes, apartments, and commercial spaces. Our team is committed to finding the ideal property that suits your lifestyle and budget"
        // number: 1,
        // icon: <Icon icon="map:furniture-store" />,
},
{
    title: "Nightly Lettings",
    img: '/images/Nightlets.jpg',
    height: false,
    para: "Experience the convenience and comfort of nightly lettings with us. Whether you're a traveller in search of a short-term stay or a property owner looking to maximize returns, our nightly letting services cater to your needs."
    // number: 6,
    // icon: <Icon icon="eos-icons:subscription-management" />,
},
{
    title: "Sales",
    img: '/images/Sales.jpg',
    height: false,
    para: "Ready to make a move? Our experienced sales team will guide you through the process, ensuring a smooth and successful transaction. Whether you're selling your home or looking to invest, we're here to make the journey seamless."
    // number: 2,
    // icon: <Icon icon="lucide:home" />,
},
{
    title: "Refurbishment",
    height: false,
    img: '/images/Refurbishments.jpg',
    para: "Enhance the appeal and value of your property with our refurbishment services. Our skilled team of professionals specializes in transforming spaces, creating modern and stylish interiors that reflect your taste and preferences."
    // number: 3,
    // icon: <Icon icon="solar:paint-roller-outline" />,
},
{
    title: "Maintenance",
    img: '/images/Maintenance.jpg',
    height: false,
    para: "Your property deserves the best care. Our maintenance services cover everything from routine repairs to emergency fixes. We prioritize the longevity and functionality of your property, ensuring it remains a comfortable and secure space"
    // number: 4,
    // icon: <Icon icon="ic:round-home-repair-service" />,
},
{
    title: "Block Management",
    img: '/images/Block.jpg',
    height: false,
    para: "For property owners and landlords with multiple units, our block management services streamline operations, ensuring the smooth running of communal spaces. From financial management to maintenance coordination, we've got it all covered."
    // number: 5,
    // icon: <Icon icon="fluent-mdl2:account-management" />,
},

]

export const categories = [
    {
        img: "/images/Leeds.jpg",
        title: "Leeds",
        url: "/",
    },
    {
        img: "/images/Liverpool.jpg",
        title: "Liverpool",
        url: "/",
    },
    {
        img: "/images/Halifax.jpg",
        title: "Halifax",
        url: "/",
    },
    {
        img: "/images/Huddersfield.jpg",
        title: "Huddersfield",
        url: "/",
    },
    {
        img: "/images/Bradford.jpg",
        title: "Bradford",
        url: "/",
    },
    {
        img: "/images/London.jpg",
        title: "London",
        url: "/",
    },
    {
        img: "/images/Manchester.jpg",
        title: "Manchester",
        url: "/",
    },
    {
        img: "/images/Nottingham.jpg",
        title: "Nottingham",
        url: "/",
    },
    {
        img: "/images/Wakefield.jpg",
        title: "Wakefield",
        url: "/",
    },

]

export const approach = [
    {
        title: "A fresh approach to sales",
        info: "If you are looking to sell a property in Leeds, then we’re here to make the whole process as smooth and stress-free as possible.",
        para: "Whether you are selling your home, or an investment property, our friendly team at Danhamz will be with you every step of the way, from initial valuation through to final completion.",
        video: "https://www.youtube.com/watch?v=lbqll5HUPog&pp=ygUMaG91c2UgZGVzaWdu",
    }
]

export const properties = [
            {
                img: "/images/img1.jpg",
                tag: "Solt TCS",
                price: "$1000",
                location: "London Lovel park Heels 109",
                pics: [
                    {
                        icon: <Icon icon="ion:camera-outline" />,
                        quantity: "1",
                    }
                ],
                bed_rooms: "1 bedrooms",
                icon: <Icon icon="uil:bed" />,

            },
            {
                img: "/images/img2.jpg",
                tag: "Solt TCS",
                price: "$1000",
                location: "London Lovel park Heels 109",
                pics: [
                    {
                        icon: <Icon icon="ion:camera-outline" />,
                        quantity: "1",
                    }
                ],
                bed_rooms: "2 bedrooms",
                icon: <Icon icon="uil:bed" />,

            },
            {
                img: "/images/img3.jpg",
                tag: "Solt TCS",
                price: "$1000",
                location: "London Lovel park Heels 109",
                pics: [
                    {
                        icon: <Icon icon="ion:camera-outline" />,
                        quantity: "4",
                    }
                ],
                bed_rooms: "6 bedrooms",
                icon: <Icon icon="uil:bed" />,

            },
            {
                img: "/images/img5.jpg",
                tag: "Solt TCS",
                price: "$1000",
                location: "London Lovel park Heels 109",
                pics: [
                    {
                        icon: <Icon icon="ion:camera-outline" />,
                        quantity: "1",
                    }
                ],
                bed_rooms: "1 bedrooms",
                icon: <Icon icon="uil:bed" />,

            },
]

export const ratings = [
    {
        icon: <Icon icon="uis:star" />,
        para: "Danhamz limited are an amazing housing agency. They are very kind and understanding towards their tenants and also very quick to attend to any problem. I will highly recommend their agency to anyone who is looking for a warm and comfortable house to live in that is ran by friendly, approacable people",
        name: "Mary O."
    },
    {
        icon: <Icon icon="uis:star" />,
        para: "Had a very pleasant experience when dealing with Danhamz, especially when I required short notice accomodation. Very easy to deal with, lovely team, happy to sort out any issues. Well deserved 5 star rating, keep up the good work!",
        name: "andreeatoma91"
    },
    {
        icon: <Icon icon="uis:star" />,
        para: "For over two years, I rented my current property with Danhamz Ltd. This is the second time I rented property from them. It was because I had pleasant experience in the first instant that made me to choose Danhamz Ltd again. Danhamz is a good renting agent. They promptly attend to issues when informed regardless of time.",
        name: "Lawrence Onyeji"
    },
    {
        icon: <Icon icon="uis:star" />,
        para: "Lived in their property it was a great experience to be a guest of danhamz management is really compromising and understanding especially Mos & Irena they both were very polite to me & their all tenants",
        name: "Asad Ali"
    },
    {
        icon: <Icon icon="uis:star" />,
        para: "This company offered me a house when there was nothing left available anywhere else, the renting process was smooth and easy, staff was always nice and helpful, especially Irena who's always happy to help ☺️ Been living in two properties offered by danhamz and never had any issues. Deposit was returned at short time after the check out inspection. Highly recommend them.",
        name: "Mihai Neagu"
    },
    {
        icon: <Icon icon="uis:star" />,
        para: "Was looking to for a place to rent in Leeds and I was advised to go with Danhamz from a friend. The process was quick and easy and now I have my dream home. The staff were lovely in particular Melissa my letting agent, who was helpful every step of the way and provided me with some excellent advice. Can’t fault them.",
        name: "Kurtis Shipley"
    },
    {
        icon: <Icon icon="uis:star" />,
        para: "I recently came from London to study at Leeds university and I was looking to rent a house near my cousin house, I couldn't find any good estate rental agency that would rent me a house near them so I asked my friend to find me one. So my friend told me about you guys and I was very pleased with the service that I was given. The staff was very friendly and helpful to me.",
        name: "Mirza"
    },
    {
        icon: <Icon icon="uis:star" />,
        para: "Great service very professional highly recommended 👍🏽😊",
        name: "Tahi Noor"
    },
    {
        icon: <Icon icon="uis:star" />,
        para: "Exceptional company with top-notch services and outstanding management.  Highly recommended.",
        name: "Arbaz balouch"
    },{
        icon: <Icon icon="uis:star" />,
        para: "",
        name: "Patrik"
    },
]

export const investors = [
    {
        title: "Investors in People",
        info: "In our industry, it’s the people that really make the difference. That’s why we firmly believe in supporting our staff to be the best they can be. Danhamz is a proud holder of the globally recognised Investors In People accreditation",
        img: "/images/investor_logo.png",
    }
]

export const studentHomes = [
    {
        // bg_color, title, info, img, title_color, info_color, button, btn_text, btn_bg, url, icon
        icon: <Icon icon="mdi:lightbulb-on-30" />,
        title: "Why choose Danhamz? ",
        img: "/images/img_focus.jpg",
        title_color: "text-yellow-600",
        lists:['Expertise: Our team comprises seasoned professionals with in-depth knowledge of the real estate industry. We stay updated on market trends and legalities to provide you with the best advice. ', 'Client-Centric Approach: Your satisfaction is our priority. We take the time to understand your unique requirements, tailoring our services to meet your specific needs. ', "Transparent Communication: We believe in open and transparent communication. You'll be kept informed at every step of the process, ensuring a hassle-free experience. ", "Comprehensive Solutions: Whether you're a tenant, buyer, seller, or property owner, we offer a complete range of services under one roof, making us your go-to partner for all things property-related. ", ],
        info_color: "text-gray-900",
        lists_style: false,
        url: "/",
        lists_color: "text-gray-900",
        // button:"Find out more",
        btn_bg: "bg-[#152347]",
        btn_text: "text-white",
        bg_color : 'bg-white'


    }
]

export const wwe = [
    {
        title: "Why invest in Leeds?",
        img: "/images/overview2.png",
        lists: ['These are great times for Leeds. The city regularly features on the ‘hottest place to invest’ lists and it’s not hard to see why. Its extensive student and professional population create an incredibly buoyant rental market, and it continues to be a popular choice for big businesses due to its brilliant location, connectivity and talent pool.', 'For investors, there’s an opportunity to get more ‘bang for their buck’ as house prices are more affordable than in many other major cities. Add this to the considerable appetite for rental homes and the generous yields, and it’s no surprise that more and more investors are choosing to tap in to the Leeds market, particularly those based in London or abroad.'],
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        lists_style: false,
        url: "/",
        lists_color: "text-gray-900",
        button:"Find out more",
        btn_bg: "bg-[#152347]",
        btn_text: "text-white",
        bg_color : 'bg-white'
    }
]
export const lettingProperties = [
    // icon, quantity, weekPrice, location, monthPrice, bedRooms, img, bed_icon, available, furnished_icon,furnished,bill_icon, bills, date
    {
        icon: <Icon icon="uil:bed" />,
        quantity: "1",
        weekPrice: "$1000",
        location: "London Lovel park Heels 109",
        monthPrice: "$1000",
        bedRooms: "1 bedrooms",
        img: "/images/img1.jpg",
        bed_icon: <Icon icon="uil:bed" />,
        available: "Available",
        furnished_icon: <Icon icon="la:couch" />,
        furnished: "Furnished",
        bill_icon: <Icon icon="mdi:lightbulb-on-30" />,
        bills: "Bills Included",
        date: "01 Jul",
    },
    {
        icon: <Icon icon="uil:bed" />,
        quantity: "1",
        weekPrice: "$1000",
        location: "London Lovel park Heels 109",
        monthPrice: "$1000",
        bedRooms: "1 bedrooms",
        img: "/images/img4.jpg",
        bed_icon: <Icon icon="uil:bed" />,
        available: "Available",
        furnished_icon: <Icon icon="la:couch" />,
        furnished: "Furnished",
        date: "01 Jul",
    },
    {
        icon: <Icon icon="uil:bed" />,
        quantity: "1",
        weekPrice: "$1000",
        location: "London Lovel park Heels 109",
        monthPrice: "$1000",
        bedRooms: "1 bedrooms",
        img: "/images/img3.jpg",
        bed_icon: <Icon icon="uil:bed" />,
        available: "Available",
        furnished_icon: <Icon icon="la:couch" />,
        furnished: "Furnished",
        bill_icon: <Icon icon="mdi:lightbulb-on-30" />,
        bills: "Bills Included",
        date: "01 Jul",
    },
    {
        icon: <Icon icon="uil:bed" />,
        quantity: "1",
        weekPrice: "$1000",
        location: "London Lovel park Heels 109",
        monthPrice: "$1000",
        bedRooms: "1 bedrooms",
        img: "/images/img1.jpg",
        bed_icon: <Icon icon="uil:bed" />,
        available: "Available",
        furnished_icon: <Icon icon="la:couch" />,
        furnished: "Furnished",
        date: "01 Jul",
    },

]


export const welcome = [
    {
        title: "Welcome to the Home of Property",
        info: "The housing stock in Leeds is large and varied. You will find homes to buy, let or buy-to-let here from every historical period of the last 200 years. Whether you’re looking for a terraced house, an interwar semi-detached home or a new postmodern detached house, Leeds is the place for you.",
        para: "Of course, finding the best properties to buy, let or invest in means partnering with estate agents that know the local market inside and out. That’s Danhamz to a T!",
        video: "https://www.youtube.com/watch?v=0Dg6VM6Lal8&pp=ygUFaG9tZXM%3D",
    }
]


export const toggleInfo = [
    {
        title: "Full range of property services",
        info: "We provide a full range of property services to landlords, tenants, buyers and sellers in Leeds. Our highly experienced team can help you to buy, sell, let or rent a property anywhere in the city and with our award-winning customer service, you know you are going to get the best deal possible whatever your needs may be.Rather than becoming fixated on churn, that is closing the deal regardless of the quality of the match, we take a more patient approach. We don’t try to force square pegs into round holes. We know that it’s better for everyone involved, including us and our reputation, if we take a little extra time and exert a little extra effort to make the ideal match. If you would like to take advantage of any of our property services in Leeds, get in touch with us today."
    },
    {
        title: "The best Letting Agent in Leeds",
        info: "We provide a full range of property services to landlords, tenants, buyers and sellers in Leeds. Our highly experienced team can help you to buy, sell, let or rent a property anywhere in the city and with our award-winning customer service, you know you are going to get the best deal possible whatever your needs may be.Rather than becoming fixated on churn, that is closing the deal regardless of the quality of the match, we take a more patient approach. We don’t try to force square pegs into round holes. We know that it’s better for everyone involved, including us and our reputation, if we take a little extra time and exert a little extra effort to make the ideal match. If you would like to take advantage of any of our property services in Leeds, get in touch with us today."
    },
    {
        title: "The besyt Estate Agent in Leeds",
        info: "We provide a full range of property services to landlords, tenants, buyers and sellers in Leeds. Our highly experienced team can help you to buy, sell, let or rent a property anywhere in the city and with our award-winning customer service, you know you are going to get the best deal possible whatever your needs may be.Rather than becoming fixated on churn, that is closing the deal regardless of the quality of the match, we take a more patient approach. We don’t try to force square pegs into round holes. We know that it’s better for everyone involved, including us and our reputation, if we take a little extra time and exert a little extra effort to make the ideal match. If you would like to take advantage of any of our property services in Leeds, get in touch with us today."
    },
    {
        title: "Block Management",
        info: "We provide a full range of property services to landlords, tenants, buyers and sellers in Leeds. Our highly experienced team can help you to buy, sell, let or rent a property anywhere in the city and with our award-winning customer service, you know you are going to get the best deal possible whatever your needs may be.Rather than becoming fixated on churn, that is closing the deal regardless of the quality of the match, we take a more patient approach. We don’t try to force square pegs into round holes. We know that it’s better for everyone involved, including us and our reputation, if we take a little extra time and exert a little extra effort to make the ideal match. If you would like to take advantage of any of our property services in Leeds, get in touch with us today."
    },
    {
        title: "Comprehensive property management",
        info: "We provide a full range of property services to landlords, tenants, buyers and sellers in Leeds. Our highly experienced team can help you to buy, sell, let or rent a property anywhere in the city and with our award-winning customer service, you know you are going to get the best deal possible whatever your needs may be.Rather than becoming fixated on churn, that is closing the deal regardless of the quality of the match, we take a more patient approach. We don’t try to force square pegs into round holes. We know that it’s better for everyone involved, including us and our reputation, if we take a little extra time and exert a little extra effort to make the ideal match. If you would like to take advantage of any of our property services in Leeds, get in touch with us today."
    },
]


export const news= [
    {
        img:"/images/stu_img3.jpg",
        investment: "Investment",
        news: "Landlord News",
        date: '2017-12-3',
        title: "National Landlord News Summary Show and Description",
    },
    {
        img:"/images/stu_img.png",
        news: "Company News",
        investment: "Investment",
        date: '2017-12-3',
        title: "Danhamz latest News Summary Show and Description",
    },
    {
        img:"/images/img3.jpg",
        investment: "Investment",
        news: "Company News",
        date: '2017-12-3',
        title: "London we are coming!",
    },
]
// export const navbar = [ 
//     {
//         icon: <Icon icon="uiw:home" />,
//         link: "/",
//         title: "Home",
//         lists: [
//             {
//                 link: "/",
//                 title: "Lettings",
//                 type: "select",
//                 options: [
//                     {
//                         title: "Professionals",
//                         link: "/professionals",
//                         icon: <Icon icon="healthicons:city-worker-outline" />,
//                     },
//                     {
//                         title: "Students",
//                         link: "/students",
//                         icon: <Icon icon="mdi:account-student-outline" />,
//                     },
//                     {
//                         title: "Landlords",
//                         link: "/landlords",
//                         icon: <Icon icon="healthicons:city-worker-outline" />,
//                     },
//                     {
//                         title: "Let OR Sell",
//                         link: "/let-or-sell",
//                         icon: <Icon icon="pepicons-pencil:key" />,
//                     },
//                     {
//                         title: "Refer A Friend",
//                         link: "/refer-a-friend",
//                         icon: <Icon icon="fluent:chat-32-regular" />,
//                     }
//                 ]
//             },
//             {
//                 link: "/",
//                 title: "Nightly Lets",
//                 type: "select",
//                 options: [
//                     {
//                         title: "Professionals",
//                         link: "/professionals",
//                         icon: <Icon icon="healthicons:city-worker-outline" />,
//                     },
//                     {
//                         title: "Students",
//                         link: "/students",
//                         icon: <Icon icon="mdi:account-student-outline" />,
//                     },
//                     {
//                         title: "Landlords",
//                         link: "/landlords",
//                         icon: <Icon icon="healthicons:city-worker-outline" />,
//                     },
//                 ]
//             },
//             {
//                 link: "/",
//                 title: "Sales",
//                 type: "select",
//                 options: [
//                     {
//                         title: "Investment Sales",
//                         link: "/investments-sales",
//                         icon: <Icon icon="gis:home" />,
//                     },
//                     {
//                         title: "Buy A BTL",
//                         link: "/buy-a-btl",
//                         icon: <Icon icon="gis:home" />,
//                     },
//                     {
//                         title: "Mortgages",
//                         link: "/mortgages",
//                         icon: <Icon icon="pepicons-pencil:key" />,
//                     },
//                     {
//                         title: "Auctions",
//                         link: "/auction",
//                         icon: <Icon icon="mingcute:auction-line" />,
//                     },
//                     {
//                         title: "Value My Property",
//                         link: "/value-my-property",
//                         icon: <Icon icon="teenyicons:search-property-solid" />,
//                     },
//                 ]
//             },
//             {
//                 link: "/",
//                 title: "Refurbishments",
//                 type: "select",
//                  options: [
//                     {
//                         title: "Refubs",
//                         link: "/invest-refubs",
//                         icon: <Icon icon="solar:paint-roller-line-duotone" />,
//                     },
//                     {
//                         title: "Overview",
//                         link: "/invest-overview",
//                         icon: <Icon icon="bi:piggy-bank" />,
//                     },
//                     {
//                         title: "Sourcing",
//                         link: "/invest-sourcing",
//                         icon: <Icon icon="cil:search" />,
//                     },
//                     // {
//                     //     title: "Developments",
//                     //     link: "/invest-development",
//                     //     icon: <Icon icon="et:tools" />,
//                     // },
//                     {
//                         title: "Invest In Leeds",
//                         link: "/invest-in-leeds",
//                         icon: <Icon icon="lets-icons:dimond-alt-light" />,
//                     },
//                     {
//                         title: "Investment Sales",
//                         link: "/invest-sales",
//                         icon: <Icon icon="uiw:home" />,
//                     },
//                     {
//                         title: "Danhamz Investor Club",
//                         link: "/invest-investor-club",
//                         icon: <Icon icon="uiw:home" />,
//                     }
//                 ]
//             },
//             {
//                 link: "/",
//                 title: "Block Management",
//                 type: "select",
//                 options: [
//                     {
//                         title: "Block management",
//                         link: "/",
//                         icon: <Icon icon="mingcute:building-3-line" />,
//                     },
//                     {
//                         title: "Case Studies",
//                         link: "/",
//                         icon: <Icon icon="octicon:pencil-24" />,
//                     },
//                     {
//                         title: "Referral Scheme",
//                         link: "/",
//                         icon: <Icon icon="fluent:chat-32-regular" />,
//                     }
//                 ]
//             },
//             {
//                 link: "/",
//                 title: "Maintainance",
//                 type: "select",
//                 options: [
//                     {
//                         title: "Developments & Maintainance",
//                         link: "/invest-development",
//                         icon: <Icon icon="et:tools" />,
//                     },
//                 ]
//             }
//         ]
//     }
// ]

export const footer = [
    {
        title: "Contact Us",
        Links: [
            {icon: <Icon icon="ic:baseline-email" />, title: "lettings@danhamzltd.co.uk", url:"mailto:lettings@danhamzltd.co.uk"},
            {icon: <Icon icon="fa-solid:phone" />, title: "0113 204 2900", url:"http://www.danhamz.co.uk"},
            {icon: <Icon icon="mdi:location" />, title: "The Crescent, 13 The Crescent, Woodhouse, Leeds LS6 2NW, United Kingdom", url:"http://www.danhamz.co.uk"},
            
        ],
        find: "Find us on social media",
        social: [
            // {icon: <Icon icon="devicon:facebook" />, title: "Danhamz", url:"http://www.danhamz.co.uk"},
            {icon: <Icon icon="devicon:facebook" />, title: "Danhamz on Facebook", url:"https://www.facebook.com/Danhamz"},
            {icon: <Icon icon="mdi:instagram" />, title: "@danhamz_sales", url:"https://www.instagram.com/danhamz_1"},
            {icon: <Icon icon="logos:twitter" />, title: "Follow us on Twitter", url:"https://twitter.com/Danhamzleedsltd"},
            {icon: <Icon icon="ri:linkedin-fill" />, title: "Connect on LinkedIn", url:"https://www.linkedin.com/company/19620881/admin/feed/posts/"},
        ]
    },
    {
        title: "Customer links",
        Links: [
            {title: "About Danhamz", url:"/coming-soon"},
            {title: "Lettings", url:"/coming-soon"},
            {title: "Nightly Lets", url:"/coming-soon"},
            {title: "Sales", url:"/coming-soon"},
            {title: "Refurbishments", url:"/coming-soon"},
            {title: "Maintainance", url:"/coming-soon"},
            {title: "Block Management", url:"/coming-soon"},
            {title: "Report A Repair", url:"/coming-soon"},
            {title: "Contact Us", url:"/coming-soon"},
            {title: "Careers at Danhamz", url:"/coming-soon"},
        ]
    },
    {
        title: "Legal Policies",
        Links: [
            {title: "Terms & Conditions", url: "/terms-and-conditions"},
            {title: "Privacy Policy", url: "/privacy-policy"},
            {title: "Cookies Policy", url: "/cookie-policy"},
        ]
    },
    // {
    //     logo: "/images/investor_logo.png",
    //     Links: [
    //         {title: "Home of Property Ltd trading as Danhamz"},
    //         {title: "Registered in England, Company Number 6804475."},
    //         {title: "Danhamz Horsforth is accredited by PropertyMark."},
    //         {title: "VAT Number 323 659 887. ICO Number Z2040400."},
    //         {title: "Home of Property Ltd trading as"},
    //         {title: "Danhamz Horsforth is accredited by PropertyMark."},
    //         {title: "Danhamz is accredited by SafeAgent with accreditation number A6303."},
    //     ]
    // }

]

// home page content


export const carrerBanner = [
    {
        title: "Carrers at Danhamz",
        img: "/images/people-grid.webp"
    }
]

export const teams = [
    {
        title: "Join the team",
        info: "Danhamz offers a platform for Yorkshire’s most driven, creative and passionate property people to come together, grow, have fun and make an impact. Our people are at the heart of everything we do, working together to achieve a common goal and deliver the best customer experience at every turn.",
        para: "Our ethos is ‘every move matters’, because we take pride in everything that we do. With a hugely successful team of over 30 people across three branches, our team values are what drive us forward. Filled with fun, laughter and passion, we strive to create the best team in the industry",
        img: "/images/quote.png"
    }
]

export const doings = [
    {
        title: "Danhamz Lettings",
        info: "Helping find the right tenants for your properties",
        para: "Danhamz is an award-winning Letting Agent in Leeds that provides a complete 360° service for Landlords, helping them to maximise their investment. Our long established  Lettings Team manages over 2,000 happy student and professional tenants.",
        question: "Letting a property in Leeds?",
        desc: "Student, HMO and Professional Tenant Find",
        icon: "tick ka ixom",
    },
    {
        title: "Danhamz Sales",
        info: "Helping homeowners in Leeds to buy and sell their homes.",
        para: "Our fresh, flexible and friendly approach to sales means you get the customer service you deserve, while our top-notch marketing will make your property stand out from the crowd Danhamz’s friendly expert Estate Agents provide a seamless sales service from start to finish",
        question: "Selling your home?",
        desc: "Residential Sales",
    },
    {
        title: "Danhamz Investments",
        info: "Helping landlords invest in BTL property across Leeds.",
        para: "Danhamz Investments provides a turnkey solution for investors looking to take advantage of investing in Buy to Let property in Leeds. We’ll source the right property, spec and handle any works to optimise the investment, and then let and manage it for you, wherever in the world you are based.",
        question: "Read more about Danhamz Investments",
        desc: "Property Sourcing",
    },
    {
        title: "Danhamz Block Management",
        info: "Hands-on asset management tailored to you.",
        para: "Our customer-focused approach to block management delivers a transparent, personal and compliant service, tailored to meet the budget and requirements of your block. We handle every aspect of block management, ensuring continuation of service, compliance and peace of mind.",
        question: "Read more about Danhamz Block Management",
        desc: "Block Management",
    },
]

export const benefits = [
    {
        title: "The Cherry On Top",
        img: "/images/benefits.png",
    }
]

export const ourTeam = [
    {
        title: "Meet the Team",
        info: "Everyone at Danhamz has an important part of play in making it such a brilliant place to work.",
        team: [
            {
                img: "/images/emp1.jpg",
                name: "Abi",
                title: "Commercial Director",
            },
            {
                img: "/images/emp3.jpg",
                name: "Christian Bale",
                title: "Model",
            },
            {
                img: "/images/emp4.jpg",
                name: "Hannah White",
                title: "Human Resource Manager",
            },
            {
                img: "/images/emp5.jpg",
                name: "Zao Ch",
                title: "Technical Recruiter",
            },
            {
                img: "/images/emp6.jpg",
                name: "James Bond",
                title: "Martial Arts",
            },
            {
                img: "/images/emp7.jpg",
                name: "Chris Bond",
                title: "Singer",
            },
            {
                img: "/images/emp8.jpg",
                name: "Pitt Bull",
                title: "Musician",
            },
            {
                img: "/images/emp9.jpg",
                name: "Aylis Al",
                title: "Tel correspond",
            },
            {
                img: "/images/emp10.jpg",
                name: "Mia Zyan",
                title: "Research Engineer",
            },
            {
                img: "/images/emp11.jpg",
                name: "Ray wong",
                title: "Software Engineer",
            },
        ]
    }
]

export const investInPeople = [
    {
        img: "/images/invest.png",
        title: "Investors in People",
        info: "In our industry, it’s the people that really make the difference. That’s why we firmly believe in supporting our staff to be the very best they can be. We have worked very hard as a business to achieve the world-renowned Investors in People accreditation, and we are very proud of it too!Growing the best team is one of our core business goals and the award is recognition of our commitment to making Danhamz a great place to work. It acknowledges how we choose to run the business and our continual investment in the training, development and engagement of our highly valued team.",
        button: "Read more about our IIP Accrediation",
        btn_bg: "bg-pink-300",
        url: "/",
        title_color: "text-[#152347]",
        info_color: "text-gray-800",
        bg_color: "bg-gray-200",
        btn_text: "text-white",
    }
]

export const workAtDanhamz = [
    {
        title: "What’s it really like to work at Danhamz?",
        info: [
            {
                title: "Doing things differently",
                info: "There’s no place like home, and we are the Home of Property after all! At HOP, we like to do things a little bit differently. Enough of the suits and ties and awkward goodbyes, we are a family and together we laugh, celebrate and succeed.",
                title2: "We are always on the lookout for like-minded people to drive our business forward and see HOP continue to grow.",
                para: "Whether you have tonnes of property experience or are new to the industry, we are sure to have a role available for people who share our enthusiasm. We look for those who love dealing with people, thrive on solving problems and enjoy providing celebrity service. With thorough training, heaps of benefits and our commitment to Investors in People, HOP is a vibrant, exciting and positive place to work.",
                video: "https://www.youtube.com/watch?v=QcjR3sx94hg",
            },
        ]
    }
]

export const scope = [
    {
        video: "https://www.youtube.com/watch?v=QcjR3sx94hg",
        title: "Get the inside scoop",
        info: "According to our quarterly staff survey, 92% of staff members would recommend HOP as a great place to work! But don’t just take our word for it, we asked our staff about what it’s really like working at HOP.",

    }
]

export const staff = [
    {
                name: "Cris' Story",
                info: "During my time at HOP, I’ve seen the company grow substantially and it’s been fantastic to play a part in that. After originally starting as Branch Manager of our Pudsey Branch back in 2015, I stepped up to General Manager as the business expanded before becoming Commerical Director. I have worked in the property industry for a number of years. When I returned from travelling in my early 20s, I knew I wanted to be involved in this exciting industry and I didn’t mind starting at the bottom of the ladder. I accepted my first property job as an inventory clerk for a leading agency in Leeds City Centre and went from there! Before joining HOP, I was looking for a company that shared my excitement for new technology and entrepreneurialism. Happily, I found that here and I’ve been on an exciting journey ever since. You’d be hard pressed to find a better property company to work for than HOP. I love the culture, which is something which is very important to me. It’s always difficult to put into words but I think “forward-thinking, hard-working, trustworthy and open to change” sums it up. If this sounds like you, why not get in touch and send us a copy of your CV? We’re always on the lookout for talented people that share our values.",
                img: "/images/emp5.jpg",
    }
]

export const roles = [
    {
        title: "Typical Roles at HOP",
        info: "We are always on the lookout for talented like-minded people to drive our business forward.  Individuals who have a passion for property, love dealing with people, thrive on solving problems and enjoy providing celebrity service. If you like what you see and think you have what it takes, have a look over some of the typical job positions we regularly recruit for.",
        role: [
            {
                title: "Lettings Administrator",
                info: "As a Lettings Administrator you will be the Branch linchpin in charge of ensuring tenants move into their homes happily and smoothly.",
                desc : "You will be a great organiser and communicator.",
            },
            {
                title: "Lettings or Sales Valuer",
                info: "As a Lettings or Sales Valuer you will be utilising your property knowledge to provide Landlords and Homeowners an accurate valuation for their property and achieving them the best outcome.",
                desc : "You'll demonstrate a real passion for property and indepth knowledge of the local market.",
            },
            {
                title: "Property Manager",
                info: "As a Property Manager you will be responsible for ensuring our Tenants and Landlords are happy whilst living in their home for the duration of their Tenancy.",
                desc : "You will have a good technical knowledge of property as well as great empathy and impeccable customer service skills.  ",
            },
            {
                title: "Sales or Lettings Negotiator",
                info: "You will be in charge of matching the right Tenants and Buyers to their perfect home, dealing with property viewings and negotiating offers.",
                desc : "You will be a great communicator and a whizz at organising yourself, as well as others",
            },
        ]
    }
]

export const recruitment = [
            {
                title :" Application Review",
                info: [
                   { 
                    img: "/images/emp9.jpg",
                    para: "Each application is reviewed individually by the management team. Remember, it’s not always about the person with the most experience. We are looking for hard working people that share our passion and values."
                },
                ],
            },
            {
                title :"Telephone Chat",
                info: [
                    {
                img: "/images/emp1.jpg",
                para: "Once we have looked over your application, we will call you for a laid back, casual chat and to arrange an interview. There is no pressure at this stage, it’s just great way for us to get a better idea of what you’re looking for and to arrange a suitable time for us to meet.",
            },
        ],
            },
            {
                title: "Zoom Interview or First Stage Interview",
                info: [
                    { 
                img: "/images/emp4.jpg",
                para: "The first stage interview will be hosted either face to face or via Zoom. This allows us to put a face to a name and to find out a little bit more about you and your experience. There will be a mix of general interview questions and competency based questions. We will also do a quick fire round of 5 questions. There is no right or wrong answer here, this just helps us to get a feel for you and your personality. This is a great time for applicants to ask questions and learn as much as possible about"
            },
        ],
            },
            {
                title: "Second Interview",
                info: [
                    { 
                img: "/images/emp6.jpg",
                para: "Should you be successful following the first stage interview, we will invite you to our head office for a second stage interview. This interview will likely be with a manager and director and will involve further standard interview and competency based questions. We will also touch on your expectations and what you hope to achieve from this role. Our team here are all lovely so there is no need to feel nervous or under pressure. Remember to just be yourself!"
            },
        ],
            },
            {
                title: "Job Offer",
                info: [
                    { 
                img: "/images/emp8.jpg",
                para: "Congratulations! If you are a successful candidate, our team will discuss their thoughts and a proposal will be put together. You will then receive a call to wish you congratulations and offer you the job. A formal job offer will be sent to you by email and a start date will be discussed. Once all has been agreed a contract and any further details will be sent out to you."
            },
        ],
            },
]

export const history = [
    {
        title: "The History of HOP",
        info : "At HOP, we now have over 30 staff members working from one of our three branches, Pudsey, Horsforth and Leeds City Centre, and are excited to continue our growth across Leeds, and beyond, in all our departments. Opening our third branch and HOP hub (during the pandemic!) is typical of our commitment to growth. The launch of the new branch, and new Sales division, has been met with great success as we continue to expanding team and the kinds of services that we offer customers.",
        img: "/images/main.jpg",
        button: "Read more about our story",
        btn_bg: "bg-pink-300",
        url: "/",
        title_color: "text-[#152347]",
        info_color: "text-gray-800",
        bg_color: "bg-gray-200",
        btn_text: "text-white",
    }
]

export const interested = [
    {
        title: "Interested in joining the team?",
        info: "Visit our careers page to view all our current vacancies and apply directly. If you don’t see a current vacancy, but have a great attitude, dedication to excellent customer service and are keen to succeed, then send a covering letter to our management team and we’ll be in touch.",

    }
]

export const vacancies = [
        {
            title: "Property Manager",
            info: "At HOP, we now have over 30 staff members working from one of our three branches, Pudsey, Horsforth and Leeds City Centre, and are excited to continue our growth across Leeds, and beyond, in all our departments. Opening our third branch and HOP hub (during the pandemic!) is typical of our commitment to growth. The launch of the new branch, and new Sales division, has been met with great success as we continue to expanding team and the kinds of services that we offer customers."
        },
        {
            title: "Resident House Manager",
            info: "At HOP, we now have over 30 staff members working from one of our three branches, Pudsey, Horsforth and Leeds City Centre, and are excited to continue our growth across Leeds, and beyond, in all our departments. Opening our third branch and HOP hub (during the pandemic!) is typical of our commitment to growth. The launch of the new branch, and new Sales division, has been met with great success as we continue to expanding team and the kinds of services that we offer customers."
        },
]


// knowlewdge bank page
export const catagories = [
  {
    title: "Choose a Category...",
    option: [
      // Area Guides
      {
        url: "",
        title: "Choose a Category...",
      },
      {
        url: "",
        title: "Area Guides",
      },
      {
        url: "",
        title: "Downloads",
      },
      {
        url: "",
        title: "Fees",
      },
      {
        url: "",
        title: "General",
      },
      {
        url: "",
        title: "Landlord",
      },
      {
        url: "",
        title: "Professional",
      },
      {
        url: "",
        title: "Refubs",
      },
      {
        url: "",
        title: "Sales",
      },
      {
        url: "",
        title: "Students",
      },
    ]
  }
]

export const catagoryCard = [
  {
    title: "PROFESSIONAL, STUDENT",
    featured: "Featured",
    bg: "bg-[#152347]",
    title2: "Tenant Handbook 2023",
    info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
 },
 {
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  bg: "bg-[#152347]",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},
{
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  bg: "bg-[#152347]",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},
{
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  bg: "bg-[#152347]",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},
{
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},
{
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},
{
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},
{
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},
{
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},
{
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},
{
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},
{
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},  {
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},
{
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},
{
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},
{
  title: "PROFESSIONAL, STUDENT",
  featured: "Featured",
  title2: "Tenant Handbook 2023",
  info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
},

]

export const newsCategory = [
    {
        title: "Choose a Category...",
        option: [
          // Area Guides
          {
            url: "",
            title: "Choose a Category...",
          },
          {
            url: "",
            title: "Block Management",
          },
          {
            url: "",
            title: "Company News",
          },
          {
            url: "",
            title: "Investments",
          },
          {
            url: "",
            title: "Landlord News",
          },
          {
            url: "",
            title: "Professionals",
          },
          {
            url: "",
            title: "Sales",
          },
          {
            url: "",
            title: "Sales & Letting Reports",
          },
          {
            url: "",
            title: "Students",
          },
        ]
      }
]
export const allNews= [
    {
        img:"/images/student.jpg",
        investment: "Investment",
        news: "Landlord News",
        date: '2017-12-3',
        title: "National Landlord News Summary Show and Description",
    },
    {
        img:"/images/img6.jpg",
        news: "Company News",
        investment: "Investment",
        date: '2017-12-3',
        title: "Danhamz latest News Summary Show and Description",
    },
    {
        img:"/images/img3.jpg",
        investment: "Investment",
        news: "Company News",
        date: '2017-12-3',
        title: "London we are coming!",
    },
    {
        img:"/images/student.jpg",
        investment: "Investment",
        news: "Landlord News",
        date: '2017-12-3',
        title: "National Landlord News Summary Show and Description",
    },
    {
        img:"/images/img6.jpg",
        news: "Company News",
        investment: "Investment",
        date: '2017-12-3',
        title: "Danhamz latest News Summary Show and Description",
    },
    {
        img:"/images/img3.jpg",
        investment: "Investment",
        news: "Company News",
        date: '2017-12-3',
        title: "London we are coming!",
    },
]
// knowlewdge bank page


// about page
export const about_award = [
    {
        // img, info, title, button, bg_color, url, title_color, info_color, btn_bg, btn_text
        title:"An Award-Winning Agent",
        info: "At HOP,  we offer Sales, Lettings, Block Management and Investments all under one roof, to deliver a completely holistic property service. Whether you are looking rent, buy, sell, invest or have an entire block of apartments to take care of, our friendly experts are here to help.",
        img: "/images/awards.png",
        button: "Get in touch",
        bg_color: "bg-purple-500",
        url: "#",
        title_color: "text-white",
        info_color: "text-white",
        btn_bg: "bg-[#152347]",
        btn_text: "text-white",
    }
]

export const about_story = [
    {
        // bg_color, title, info, img, title_color, info_color, button, btn_text, btn_bg, url // 
        title: "Our Story",
        info: "In 2009, we started out as a ‘Let Leeds’ a pure lettings agency offering property management across Leeds. From the outset, our goal was to offer a more dynamic and innovative service to the tenants and landlords of Leeds. At the start, Let Leeds was the perfect name for us and we soon became the leading independent Letting Agency in Leeds. Over time, we expanded our offering and the name ‘Let Leeds’ no longer embodied everything we do. In 2020, we changed our name to HOP, which stands for the Home of Property.  As HOP, we bringing that same fresh and personal approach we’re renowned for across a wider range of property services to customers in Leeds and beyond. As HOP, we also now offer Sales and Block Management, and Investments alongside our award-winning Lettings service.0 Creating happy homes is still at the heart of our business. Whether it’s a property to rent, a home to buy, an investment to purchase, or ensuring the efficient management of a block, every move matters to HOP.",
        img: "/images/coffee.jpg",
        bg_color: "bg-gray-200",
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        button: "Learn More",
        btn_text: "text-white",
        btn_bg: "bg-pink-300",
    }
]

export const partnerBanner = [
    {
        img: "/images/partner-1.png",
    },
    {
        img: "/images/partner-2.png",
    },
    {
        img: "/images/partner-3.png",
    },
    {
        img: "/images/partner-4.png",
    },
    {
        img: "/images/partner-5.png",
    },
    {
        img: "/images/partner-6.png",
    },
]

export const letting_awards = [
    {
        img: "/images/awards1.jpg",
        title: "2015: Best Single Northern Office – Gold",
        info: "The judges commented that “Let Leeds is positive and helpful and works to ethical and stringent standards. There is a real urge to demonstrate a dynamic, innovative approach and they are very vocal in wanting to shake the market up.”",
    },
    {
        img: "/images/awards2.jpg",
        title: "2014: Northern Letting Agent of the Year - Silver",
        info: "MD Luke Gidney commented “We always strive to do the very best for our Tenants and Landlords. It is a great honour and privilege for Let Leeds to pick up its second national gold award in a matter of weeks.”",
    },
    {
        img: "/images/awards3.jpg",
        title: "2013: Yorkshire & Humber ESTAS Award – Gold",
        info: "Our fifth consecutive win at these awards! The judging panel commented: “Let Leeds is a great business. Its ethos is that ‘Every Move Matters” and the panel found that the Let Leeds team seek to embody this at every turn”",
    },
    {
        img: "/images/awards4.jpg",
        title: "2016: Best Small Northern Lettings Agency of the Year - Silver",
        info: "The judges commented that “Let Leeds is positive and helpful and works to ethical and stringent standards. There is a real urge to demonstrate a dynamic, innovative approach and they are very vocal in wanting to shake the market up.”",
    },
    {
        img: "/images/awards5.jpg",
        title: "2012: Best Northern Single Letting Agency - Silver",
        info: "Our fifth consecutive win at these awards! The judging panel commented: “Let Leeds is a great business. Its ethos is that ‘Every Move Matters” and the panel found that the Let Leeds team seek to embody this at every turn”",
    },
    {
        img: "/images/awards6.jpg",
        title: "2013: Sunday Times Letting Agency of the Year, Northern Office - Gold",
        info: "MD Luke Gidney commented “We always strive to do the very best for our Tenants and Landlords. It is a great honour and privilege for Let Leeds to pick up its second national gold award in a matter of weeks.”",
    },
    {
        img: "/images/awards1.jpg",
        title: "2015: Best Single Northern Office – Gold",
        info: "Our fifth consecutive win at these awards! The judging panel commented: “Let Leeds is a great business. Its ethos is that ‘Every Move Matters” and the panel found that the Let Leeds team seek to embody this at every turn”",
    },
    {
        img: "/images/awards4.jpg",
        title: "2014: Northern Letting Agent of the Year - Silver",
        info: "MD Luke Gidney commented “We always strive to do the very best for our Tenants and Landlords. It is a great honour and privilege for Let Leeds to pick up its second national gold award in a matter of weeks.”",
    },
    {
        img: "/images/awards1.jpg",
        title: "2015: Best Single Northern Office – Gold",
        info: "The judges commented that “Let Leeds is positive and helpful and works to ethical and stringent standards. There is a real urge to demonstrate a dynamic, innovative approach and they are very vocal in wanting to shake the market up.”",
    },
    {
        img: "/images/awards2.jpg",
        title: "2014: Northern Letting Agent of the Year - Silver",
        info: "MD Luke Gidney commented “We always strive to do the very best for our Tenants and Landlords. It is a great honour and privilege for Let Leeds to pick up its second national gold award in a matter of weeks.”",
    },
    {
        img: "/images/awards3.jpg",
        title: "2013: Yorkshire & Humber ESTAS Award – Gold",
        info: "Our fifth consecutive win at these awards! The judging panel commented: “Let Leeds is a great business. Its ethos is that ‘Every Move Matters” and the panel found that the Let Leeds team seek to embody this at every turn”",
    },
]
// about page


// instant valuation page
export const instantValuation = [
    {
        img: "/images/bg-valu.jpg",
        title: "Danhamz",
        online: "Free Instant Online Valuation",
        info: "Enter the property postcode below to receive your instant online valuation from HOP. One of our team will then be in touch to arrange a full market appraisal.",
        icon: <Icon icon="mdi:location" />,
        location: "Find Address",
        address: {
            type: "input",
        },
        choose: [
            {
                noOfbeds: 'How many bedrooms do you need?',
                quantity:[
                    {count: "Number Of Bedrooms", value: ""},
                    {count: "Studio", value: "Studio"},
                    {count: "1", value: "1"},
                    {count: "2", value: "2"},
                    {count: "3", value: "3"},
                    {count: "4", value: "4"},
                    {count: "5", value: "5"},
                    {count: "6", value: "6"},
                ],
            },
            {
                noOfbeds: 'Property Type',
                quantity:[
                    {count: "Property Type", value: ""},
                    {count: "Flat", value: "Flat"},
                    {count: "Terraced House", value: "Terraced House"},
                    {count: "Semi Detatched House", value: "Semi Detatched House"},
                    {count: "Detatched House", value: "Detatched House"},
                    {count: "Detatched Bunglow", value: "Detatched Bunglow"},
                    
                ],
            },             
        ],
        typeOfval: [
            {
                noOfbeds: 'Type of Valuation',
                quantity:[
                    {count: "Type of Valuation", value: ""},
                    {count: "Sales And Letting Valuation", value: "Sales And Letting Valuation"},
                    {count: "Sales Valuation", value: "Sales Valuation"},
                    {count: "Lettings Valuation", value: "Lettings Valuation"},
                    {count: "Detatched House", value: "Detatched House"},
                    {count: "Detatched Bunglow", value: "Detatched Bunglow"},
                ],
            }, 
        ]

    }
]

export const timings = [
    {
        title: "Leeds",
        info: [
            {
                icon: <Icon icon="iconoir:phone" />,
                title: "0311 0211 0990"
            },
            {
                icon: <Icon icon="mdi:location" />,
                title: "Coburg House, St Andrews Court, Leeds, LS3 1JY",
            }
        ],
        detail: [
            {
                title: 'Opening Hours',
                timimngs: [
                    {
                        day: 'Monday - Thursday',
                        time: "9:00am - 5:30pm",
                    },
                    {
                        day: 'Friday',
                        time: "9:00am - 4:30pm",
                    },
                    {
                        day: 'Saturday',
                        time: "9:00am - 1:30pm",
                    }
                ]
            },
            {
                title: 'Viewing Hours',
                timimngs: [
                    {
                        day: 'Monday - Thursday',
                        time: "9:00am - 5:30pm",
                    },
                    {
                        day: 'Friday',
                        time: "9:00am - 4:30pm",
                    },
                    {
                        day: 'Saturday',
                        time: "9:00am - 1:30pm",
                    }
                ]
            },
        ]
    },
]

export const timings2= [
    {
        title: "Horsforth",
        info: [
            {
                icon: <Icon icon="iconoir:phone" />,
                title: "0311 0211 0990"
            },
            {
                icon: <Icon icon="mdi:location" />,
                title: "Coburg House, St Andrews Court, Leeds, LS3 1JY",
            }
        ],
        detail: [
            {
                title: 'Opening Hours',
                timimngs: [
                    {
                        day: 'Monday - Thursday',
                        time: "9:00am - 5:30pm",
                    },
                    {
                        day: 'Friday',
                        time: "9:00am - 4:30pm",
                    },
                    {
                        day: 'Saturday',
                        time: "9:00am - 1:30pm",
                    }
                ]
            },
            {
                title: 'Viewing Hours',
                timimngs: [
                    {
                        day: 'Monday - Thursday',
                        time: "9:00am - 5:30pm",
                    },
                    {
                        day: 'Friday',
                        time: "9:00am - 4:30pm",
                    },
                    {
                        day: 'Saturday',
                        time: "9:00am - 1:30pm",
                    }
                ]
            },
        ]
    },
]

export const timings3 = [
    {
        title: "HOP Investments",
        info: [
            {
                icon: <Icon icon="iconoir:phone" />,
                title: "0311 0211 0990"
            },
            {
                icon: <Icon icon="mdi:location" />,
                title: "Coburg House, St Andrews Court, Leeds, LS3 1JY",
            }
        ],
        detail: [
            {
                title: 'Opening Hours',
                timimngs: [
                    {
                        day: 'Monday - Thursday',
                        time: "9:00am - 5:30pm",
                    },
                ]
            },
        ]
    },
]

export const timings4 = [
    {
        title: "HOP Block Management",
        info: [
            {
                icon: <Icon icon="iconoir:phone" />,
                title: "0311 0211 0990"
            },
            {
                icon: <Icon icon="mdi:location" />,
                title: "Coburg House, St Andrews Court, Leeds, LS3 1JY",
            }
        ],
        detail: [
            {
                title: 'Opening Hours',
                timimngs: [
                    {
                        day: 'Monday - Thursday',
                        time: "9:00am - 5:30pm",
                    },
                ]
            },
        ]
    }
]

export const getInTouch = [
    {
        title:"Get in touch",
        info: "If you’re looking to rent Leeds property, we’re dedicated to making moving simple, for all types of accommodation Leeds has to offer. As your local online Letting Agents Leeds, we’re dedicated to making moving simple; this includes online property search, personal viewings, online application, bond payment and credit checking with acceptance usually within 24 hours. HOP decided it was time Leeds experienced a fresh approach to lettings, offering simple and personal letting agent services for Leeds Student Accommodation and Professional Accommodation Leeds. Our belief is based on giving tenants the chance to move into their perfect home simply, quickly and affordably.",
        img: "/images/Get_contact.gif",
    }
]
// instant valuation page

// report page
export const report_nav = [
    {
        title:"Need to report a repair?",
        info: "Use our 24 hour automated system.",
        img: "/images/clock1.png",
        info2: "At HOP, we operate a fully automated online reporting system for property repairs and maintenance.",
        para: "To help us to help you as quickly as possible, HOP operates a fully automated online reporting system for repairs and maintenance that is available around the clock, 24 hours a day. Our online system enables us to diagnose your problems, log and diarise maintenance, fully monitor our contractors, and swiftly get the right contractors out to you. You can even upload photos of your problem to help our Contractors assess what they might need to bring with them to fix the issue. Until a request is logged online, we cannot send anyone out to deal with the issue. Once you have logged your issue, we’ll be in touch to discuss the next steps and, if required, arrange for a contractor to come out and see you.",
    }
]

export const report_article = [
    {
        title: "We are committed to providing a quick, trustworthy and reliable maintenance service.",
        info: "It’s really important that you use our online portal to log any issues you might have that involve maintenance and repairs, because we can only handle requests once they are logged in the system. Logging maintenance requests via our portal means that repairs and issues are likely to be dealt with more quickly than those that are reported by telephone or by email. All emergencies should also be reported in the portal too.",
        info2: "If you have an out of hours emergency, simply log your issue in the usual way and you will also find out of hours contact numbers to call. You can also just call our main office number on 0113 320 2000, which has a recorded message out of hours with numbers of our emergency maintenance contacts, The system allows us to communicate between the Landlord and the Contractor and means that we can diagnose your problems, log and diarise maintenance, get the right Contractors out to you quickly and also monitor the Contractors to ensure they do a good job.",
    },
    {
        title: "We promise to respond as swiftly as we can to your maintenance requests.",
        info: "We only use a handful of trusted contractors to do repairs and they prioritise the urgency of the work and will respond accordingly. Here’s an idea of the timeframes that they will aim to work to wherever possible:",
        img: "/images/data-table.png",
        info2: "Please note: we cannot agree to the above timescales unless the maintenance request has been logged online first. If our contractors are unable to complete the job within the agreed timescales above, please report this to your Property Manager immediately. It may be that major works need quoting for and boiler replacements could take longer due to ordering parts.",
    }
]

export const report_section = [
            {
                title: "If there has been a break-in at the property, be sure to ring the police on 999.",
            },
            {
                title: "If you lose power or water, then please contact your utility provider in the first instance.",
            },
            {
                title: "If there has been a break-in at the property, be sure to ring the police on 999.",
            },
            {
                title: "If you smell gas, ring the National Grid on 0800 111 999.",
            },
            {
                title: "If you are calling out of hours and the office is closed, we have pre-recorded emergency details for you to follow. Just call the usual office number:  0113 320 2000",
            },
]

// report page


// login page

export const login = [
    {
        name: "email",
        label: "Email Address",
        placeholder: "Email address",
        type: "email",
        icon: <Icon icon="ic:round-email" />,
        rules : {
            required: 'Email is required',
            pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email format',
            }
        }
    },
    {
        name: "password",
        label: "Password",
        placeholder: "Password",
        type: "password",
        icon: <Icon icon="ic:outline-lock" />,
        rules : {
            message: 'Password is required',
        }
    }
]
export const signup = [
    {
        name: "username",
        label: "Name",
        placeholder: "enter your name",
        type: "text",
        icon: <Icon icon="ic:round-account" />,
        rules : {
            required: 'name is required',
            pattern: {
                value: /^[a-zA-Z\s]*$/,
                message: 'Enter a valid name',
            }
        }
    },
    {
        name: "email",
        label: "Email Address",
        placeholder: "Email address",
        type: "email",
        icon: <Icon icon="ic:round-email" />,
        rules : {
            required: 'Email is required',
            pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email format',
            }
        }
    },
    {
        name: "password",
        label: "Password",
        placeholder: "Password",
        type: "password",
        icon: <Icon icon="ic:outline-lock" />,
        rules : {
            required: 'Password is required',
            pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                message: 'please enter a strong password',
            }
        }
    }
]
// login page

export const signup_content = [
    {
        title: "So what is PropertyFile?",
        info: "PropertyFile is an online platform designed to keep you informed & updated on your properties whether you’re selling, letting or renting.",
        content: [
            {
                img: "/images/rent_img.png",
                title: "Landlords",
                info: "Managing your account has never been easier. Track payments, statements and invoices. Follow maintenance job progress. Find out key tenancy related information on your properties.",
            },
            {
                img: "/images/key_img.png",
                title: "Tenants",
                info: "Managing your account has never been easier. Track payments, statements and invoices. Follow maintenance job progress. Find out key tenancy related information on your properties.",
            },
        ]
    }
]


export const download_app = [
    {
        title: "Download our tenant app",
        info: "Our tenant app keeps you notified throughout your tenancy with notifications for important events. Also report problems at your property and track their progress.",
        img: "/images/timeline.jpg",
    }
]
// signup page

// professional-page
export const pr_nav = [
    {
        title:"Professional Letting Agents Leeds",
        info:"Let’s find a home for you to love.",
    }
]

export const pr_banner= [
    {
        title:"Welcome to the Home of Property",
        info: "At HOP, we have a growing portfolio of quality accommodation across Leeds including West Leeds, North Leeds and Leeds City Centre.  Take a look at our hand-picked properties and let’s find a home for you to love.",
        bg_color: "bg-[#152347]",
        title_color: "text-white",
        info_color: "text-white",
    }
]

export const aBit = [
    {
        title:"A bit about HOP",
        info: "Creating happy homes is at the heart of our business and we love nothing more than matching professional tenants with their perfect homes. That means getting to know you, and your requirements, when you call. Whether you are looking for somewhere you can bring your fourlegged friend or somewhere near your favourite bars and shops, we’ll help you find a place that is right for you. Previously known as Let Leeds, HOP is a vibrant company growing in reputation, we decided it was time to set up a web-based letting agency, dedicated to Leeds, dedicated to quick and affordable lettings. In particular, we deal with West and North Leeds and can offer professional accommodation in: Leeds City Centre, Alwoodley, Armley, Bramley, Burley, Burley Park, Chapel Allerton, Farsley, Headingley, Hyde Park, Kirkstall, Meanwood, Pudsey, Rodley, Stanningley.",
        img: "/images/pr_img1.jpg",
        button: "Property Search",
        url: "/property-search",
        bg_color: "bg-white",
        title_color: "text-[#152347]",
        info_color: "text-gray-800",
        btn_bg: "bg-pink-400",
        btn_text: "text-white",
    },
]

export const families = [
    {
        title:"Rental for families",
        info: "At HOP,  we offer a growing portfolio of Family Houses and Accommodation across Leeds. If you are looking for somewhere with a garden to exercise little legs, or want to find a place close to the best schools in the area, we have a selection of hand-picked professional properties perfect for families",
        img: "/images/pr_img2.jpg",
        button: "Find out more",
        url: "/find-out-more",
        bg_color: "bg-white",
        title_color: "text-[#152347]",
        info_color: "text-gray-800",
        btn_bg: "bg-[#152347]",
        btn_text: "text-white",

    },
]

export const young_pr = [
    {
        title:"Rental for Young Professionals",
        info: "Creating happy homes is at the heart of our business and we love nothing more than matching professional tenants with their perfect homes. That means getting to know you, and your requirements, when you call. Whether you are looking for somewhere you can bring your fourlegged friend or somewhere near your favourite bars and shops, we’ll help you find a place that is right for you. Previously known as Let Leeds, HOP is a vibrant company growing in reputation, we decided it was time to set up a web-based letting agency, dedicated to Leeds, dedicated to quick and affordable lettings. In particular, we deal with West and North Leeds and can offer professional accommodation in: Leeds City Centre, Alwoodley, Armley, Bramley, Burley, Burley Park, Chapel Allerton, Farsley, Headingley, Hyde Park, Kirkstall, Meanwood, Pudsey, Rodley, Stanningley.",
        img: "/images/pr_img9.jpg",
        button: "Property Search",
        url: "/property-search",
        bg_color: "bg-gray-300",
        title_color: "text-[#152347]",
        info_color: "text-gray-800",
        btn_bg: "bg-[#152347]",
        btn_text: "text-white",
    },
]

export const area_guide = [
    {
        title:"Area Guides",
        info: "To help you select the area that you want to live in, we have put together some area guides detailing what each area has to offer.",
        img: "/images/pr_img3.jpg",
        button: "View our Area Guides",
        url: "/property-search",
        bg_color: "bg-[#6665a9]",
        title_color: "text-white",
        info_color: "text-white",
        btn_bg: "bg-[#152347]",
        btn_text: "text-white",
    },
]

export const repair_report = [
    {
        title:"Report a Repair",
        info: "Once you’re in the property, you can contact us if you ever have any problems with your property and if you need to report a repair, or have a maintenance issue, you can simply log a request on our specialist online portal.You can report a maintenance issue at any time using our round-the-clock repair portal. We promise to get on the case within 24 hours. Sometimes we may need to conduct major repair works which may take some time, but usually we aim to get minor issues resolved within 48 hours.",
        img: "/images/phone1.jpg",
        button: "Report a Repair",
        url: "/report-a-repair",
        bg_color: "bg-gray-200",
        title_color: "text-[#152347]",
        info_color: "text-gray-800",
        btn_bg: "bg-[#152347]",
        btn_text: "text-white",
    },
]

export const simple_process = [
    {
        title :" Step 1: Look at our properties",
        info: [
           { 
            img: "/images/pr_img4.jpg",
            para: "Find properties that fit your criteria using our Property Search. You can also keep an eye on our social media feeds and you’ll find all our properties listed on the major property portals including Rightmove and OnTheMarket."
        },
        ],
    },
    {
        title :"Step 2: Contact us",
        info: [
            {
        img: "/images/pr_img5.jpg",
        para: "All of our properties have Virtual Tours so you can explore them online. Once you have found a property you like the look of, contact us to discuss the property and your requirements in more detail and we can book you an in-person viewing.  Simply call us or submitting a ‘Book Viewing’ request, and one of our friendly team will get back to you.",
    },
],
    },
    {
        title: "Step 3: Online Application",
        info: [
            { 
        img: "/images/pr_img6.jpg",
        para: "Once you’ve chosen your perfect property, our Lettings Administrator will take you through the application process step by step. Much of the process can be completely very simply online."
    },
],
    },
    {
        title: "Step 4: Holding Deposit",
        info: [
            { 
        img: "/images/pr_img7.jpg",
        para: "To reserve your favourite property for 7 days while the Application Process is in progress, we take a Holding Deposit, which will go towards the full deposit  once the Tenancy Agreement is completed."
    },
],
    },
    {
        title: "Step 5: Tenancy Agreement",
        info: [
            { 
        img: "/images/pr_img8.jpg",
        para: "Congratulations! If you are a successful candidate, our team will discuss their thoughts and a proposal will be put together. You will then receive a call to wish you congratulations and offer you the job. A formal job offer will be sent to you by email and a start date will be discussed. Once all has been agreed a contract and any further details will be sent out to you."
    },
],
    },
]

export const professionalCard = [
    {
      title: "PROFESSIONAL, STUDENT",
      featured: "Featured",
      bg: "bg-[#152347]",
      title2: "Tenant Handbook 2023",
      info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
   },
   {
    title: "PROFESSIONAL, STUDENT",
    featured: "Featured",
    bg: "bg-[#152347]",
    title2: "Tenant Handbook 2023",
    info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
  },
  {
    title: "PROFESSIONAL, STUDENT",
    featured: "Featured",
    bg: "bg-[#152347]",
    title2: "Tenant Handbook 2023",
    info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
  },
  {
    title: "PROFESSIONAL, STUDENT",
    featured: "Featured",
    bg: "bg-[#152347]",
    title2: "Tenant Handbook 2023",
    info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
  },
  {
    title: "PROFESSIONAL, STUDENT",
    featured: "Featured",
    title2: "Tenant Handbook 2023",
    info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
  },
  {
    title: "PROFESSIONAL, STUDENT",
    featured: "Featured",
    title2: "Tenant Handbook 2023",
    info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
  },
  {
    title: "PROFESSIONAL, STUDENT",
    featured: "Featured",
    title2: "Tenant Handbook 2023",
    info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
  },
  {
    title: "PROFESSIONAL, STUDENT",
    featured: "Featured",
    title2: "Tenant Handbook 2023",
    info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
  },
  {
    title: "PROFESSIONAL, STUDENT",
    featured: "Featured",
    title2: "Tenant Handbook 2023",
    info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
  },
  {
    title: "PROFESSIONAL, STUDENT",
    featured: "Featured",
    title2: "Tenant Handbook 2023",
    info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
  },
  {
    title: "PROFESSIONAL, STUDENT",
    featured: "Featured",
    title2: "Tenant Handbook 2023",
    info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
  },
  {
    title: "PROFESSIONAL, STUDENT",
    featured: "Featured",
    title2: "Tenant Handbook 2023",
    info: "We will arrange an inspection of your property with you every three months or at least once in every Tenancy term; also if should you decide to renew or if you are in arrears. This is just to check that everything is as it should be, so we can help head off any issues before they become more serious. We do send a copy of the inspection report to the Landlord, so it’s a good idea to make sure everything is clean and tidy before we come round. We also have to do..."
  },
  ]

  export const tenantNews= [
    {
        img:"/images/tenant_news1.jpg",
        investment: "Investment",
        news: "Landlord News",
        date: '2017-12-3',
        title: "National Landlord News Summary Show and Description",
    },
    {
        img:"/images/tenant_news2.jpg",
        news: "Company News",
        investment: "Investment",
        date: '2017-12-3',
        title: "Danhamz latest News Summary Show and Description",
    },
    {
        img:"/images/tenant_news3.jpg",
        investment: "Investment",
        news: "Company News",
        date: '2017-12-3',
        title: "London we are coming!",
    },
]
// professional-page

// student-page
export const stu_nav = [
    {
        title:"All-inclusive student accommodation in Leeds.",
        img:"/images/stu_img.png",
        button: "Join The Danhamz List for Property Alerts",
        btn_bg:"bg-[#152347]",
        btn_color:"text-white",
        title_color:"text-[#152347]",
        btn_text: "text-white"
    }
]

export const student_search = [
    {
        img: "/images/stu_img2.jpg",
        title: "Start your search here",
        info: "If you are looking for a place of your own, a room in a houseshare or somewhere for you and all your housemates to call home, we can help. Pop in your criteria below to start the search for your all-inclusive student property with HOP or hit ‘Advanced Search’ for even more options.",
    }
]

export const stu_accommodation = [
    {
        title: "All-inclusive Student Accommodation",
        icon: <Icon icon="mdi:lightbulb-on-outline" />,
        info: "Life as a student is busy and stressful enough, so choose an all-inclusive property from HOP to take all the hassle out of renting. Fancy an all-inclusive tenancy? We’ve got you covered! All HOP 3+ bedroom managed properties come with our ESSENTIALS bills package included: Gas, Electric, Water & Broadband. For a more hassle-free way to rent, our clever bills package means that you simply pay the same thing every month and it’s all taken care of.  It’s a no brainer!",
        img: "/images/stu_img3.jpg",
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        btn_bg: "bg-[#152347]",
        btn_text: "text-white",
        button:"Find out more"
    }
]

export const quick_search = [
    {title: "View all 1 beds", url: "/",  value: "1 bed"},
    {title: "View all 2 beds", url: "/",  value: "2 bed"},
    {title: "View all 3 beds", url: "/",  value: "3 bed"},
    {title: "View all 4 beds", url: "/",  value: "4 bed"},
    {title: "View all 5 beds", url: "/",  value: "5 bed"},
    {title: "View all 6 beds", url: "/",  value: "6 bed"},
    {title: "View all 7 beds", url: "/",  value: "7 bed"},
    {title: "View all 7+ beds", url: "/",  value: "8 bed"},
    {title: "View all", url: "/",  value: "9 bed"},
    {title: "Advanced Property Search", url: "/",  value: "10 bed"},
]

export const smart_rent = [
    {
        video: "https://youtu.be/B_JVGLIGmuw",
        mainTitle: "A smarter way to rent",
        infos: [
            {
                title :"Amazing places",
                info: "From 1 bed apartments to 10 bedroom shared houses in all the most popular student areas in Leeds, you’ll have plenty of choice when it comes to finding your next student home.",
            
            },
            {
                title:"Online viewings & applications",
                info:"Your next home is just a scroll away! Browse our selection of handpicked homes in our property search and take a Virtual Tour of your favourites. You can also follow us on social for the latest listings and complete your application online once you’ve found ‘the one’."
            },
            {
                title: "All-inclusive",
                info:"All 3+ bedroom HOP managed properties come with bills included, so all your essentials are covered in one simple payment with your rent. Our ESSENTIALS bills package covers your Gas, Electric, Water & the all-important Broadband.",
            }
        ]
        
    }
]

export const property_loc = [
    {title: "Properties in Headlingly", url: "/Headlingly",  value: "Headlingly"},
    {title: "Properties in Hyde Park", url: "/Park",  value: "Park"},
    {title: "Properties in Woodhouse", url: "/Woodhouse",  value: "Woodhouse"},
    {title: "Properties in Burley", url: "/Burley",  value: "Burley"},
    {title: "Properties in All Student Properties", url: "/student-properties",  value: "student-properties"},
]

export const danhamzList = [
    {
        img: "/images/stu_img4.png",
        title: "Join The Danhamz List",
        info: "Be the first in line for the best properties for 2024 by signing up to our student mailing list. There are loads of ways to find your new home with HOP. Scroll through our social media channels, browse our website or take a look around on the major property portals and you’ll find our listings there too. You can also get properties right to your inbox by joining our HOP List mailing list and we’ll send you our ‘Hot Properties’ emails",
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        btn_bg: "bg-[#152347]",
        btn_text: "text-white",
        button:"Join the list for property alerts",
        url: "/"
    }
]

export const reasons = [
    {
        title: "All-inclusive homes",
        number:1,
        info: "All our HOP student properties can be all-inclusive, which means you don’t have to worry about bills. We take care of it all for you so you can enjoy a stress-free student renting experience.",
    },
    {
        title: "Essential Bills Covered",
        number:2,
        info: "We’ve got you covered. with 3-bedrooms or more, then our ESSENTIALS Bills Package is included as standard. That’s Gas, Electric, Water & Broadband – all sorted with your rent!",
    },
    {
        title: "No Fees",
        number:3,
        info: "There are no signing fees to pay when you rent with us.",
    },
    {
        title: "We know the market",
        number:4,
        info: "We know the student market inside out and have been doing this for well over a decade, so you know you are in safe hands. Plus we are Unipol Code Accredited too!",
    },
    {
        title: "24/7 reporting",
        number:5,
        info: "If you need anything once you are in the property, we have a handy online repair portal for 24/7 reporting.",
    },
]

export const abit_about = [
    {
        title: "A bit about HOP",
        info: "We’re old hands when it comes to matching students to their ultimate accommodation. First as Let Leeds and now as HOP, we have been leading the way in lettings since 2009. Nothing gives us more of a fuzzy feeling inside than helping students find their perfect match. From the get-go, we have been determined to provide an innovative service for young people who are searching for student accommodation in Leeds. Our motto is ‘Every Move Matters’ and it’s an ethos that captures how we feel about everything we do here at HOP.  From start to finish, we aim to offer every student a truly top notch and personal experience. We’ve even won a number of awards for our customer service and have received heaps of positive reviews on Feefo and Google from happy landlords and tenants. We could let that kind of thing go to our collective heads, but that’s not the way we operate at HOP. In our minds, if customers are happier with us than they have been with any other agency, that just means we’re doing our job. Our friendly team – many of whom were once students themselves – are here to help you find the home that is right for you. Rest assured that we will go the extra mile to find, not just any available rental, but the perfect location that matches your budget, academic needs and safety considerations.",
        img: '/images/stu_img5.png',
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        bg_color: "bg-white",
       
    }
]

export const our_process = [
    {
      title: "Step 1: Start the search",
      info: [
        {
          img: "/images/stu_img6.png",
          para: "Search our available student accommodation. Whether you’d prefer to browse our website, check out Rightmove or scroll through our social channels, the first step in finding your perfect student home is to take a look at our properties and see what takes your fancy. Click here for our property search or we can also send our hottest picks straight to your inbox, just register your details here.",
        },
      ],
    },
    {
      title: "Step 2: Call us to arrange a viewing",
      info: [
        {
          img: "/images/stu_img7.png",
          para: "Call us to arrange a viewing Give us a call to book in a viewing and we can match you to other suitable properties at the same time. All our staff are super friendly and will take you through the options available to you, just give the Leeds Team a call on 0113 322 9324. We’ve invested in high tech cameras and virtual tour technology so you can fully explore the property online without even leaving home.",
        },
      ],
    },
    {
      title: "Step 3: Viewings",
      info: [
        {
          img: "/images/stu_img8.png",
          para: "Viewings All our properties have virtual tours, meaning you are free to explore your potential new homes from the comfort of your sofa! If you would prefer to view in person, give us a call or click ‘book a viewing’ on your fave property to arrange an appointment and we’ll book you in. Our viewings take place with our knowledgeable student property experts who will meet you at the property, show you round and can give you the low-down on all you need to know.",
        },
      ],
    },
    {
      title: "Step 4: Reserve the property",
      info: [
        {
          img: "/images/stu_img9.png",
          para: "Reserve the propertyFallen in love with your dream student home?We’ll fill out a Pre-Tenancy Agreement with you, which details key information regarding the Tenancy.  In addition, we’ll take a Holding Deposit to take it off the market, this is usually one week’s rent.You will then have 15 days to complete your application or it goes back on the market! Holding Deposit will go towards your Deposit and transferred to a deposit account upon signing the Tenancy Agreement.",
        },
      ],
    },
    {
      title: "Step 5: Complete your application",
      info: [
        {
          img: "/images/stu_img10.png",
          para: "Complete your application Completing your application is easy using the HOP Online Application. Fill in the details and submit the required documents – all electronically! You can even do it from your phone. These details will form part of the final Tenancy Agreement that you and your housemates will need to sign at the end of the process.",
        },
      ],
    },
    {
      title: "Step 6: Guarantor paperwork",
      info: [
        {
          img: "/images/stu_img11.png",
          para: "Guarantor paperwork As a Student you will require a Guarantor who will guarantee that you will pay your rent for the duration of the Tenancy. If for some reason, you don’t pay your rent, then the Guarantor will be liable for it. A Guarantor is usually a parent or guardian earning over £25,000 p/a. As you complete your HOP Online Application with their details, the Guarantor will be emailed a link to fill in their information too and upload the relevant documents online. The Guarantor will then be referenced and credit checked as part of the application process.",
        },
      ],
    },
    {
      title: "Step 7: The property is yours!",
      info: [
        {
          img: "/images/stu_img12.png",
          para: "The property is yours! Once the application, paperwork and referencing is complete, the final Tenancy Agreement will be sent electronically to all parties to sign. Once signed, we’ll check everything is as it should be, countersign it, and the balance of the Deposit becomes due. The final, signed Tenancy Agreement will be issued with prescribed information automatically, once completed. You’ll then need to pay the remainder of your Deposit. The Holding Deposit carries forward to become part of your deposit, and the whole thing is held by the TDS (Tenancy Deposit Scheme), which holds it securely throughout your Tenancy.",
        },
      ],
    },
    {
      title: "Step 8: Pay first month's rent",
      info: [
        {
          img: "/images/stu_img13.jpg",
          para: "Pay first month’s rent As it will state in your Tenancy Agreement, 14 days before your Tenancy start date, you’ll need to pay your first rent instalment and arrange key collection dates with the HOP team. It’s important you set up a standing order to pay the initial rent payment by this deadline, as we can’t release keys until these funds are cleared. On a joint tenancy, where you are sharing with housemates, all parties will need to have paid their first rent instalment in full before the keys can be released to anyone in the group.",
        },
      ],
    },
    {
      title: "Step 9: Move in a day!",
      info: [
        {
          img: "/images/stu_img14.jpg",
          para: "Move in day! Book an appointment with the team to collect your keys and Tenancy Pack either on, or a few days after, your Tenancy start date (usually around the 1st July for students). Don’t forget that you will need to bring your passport/ID with you so we can release the keys. Then you can move in to your perfect pad and set about making it your new home!",
        },
      ],
    },
  ];

  export const thingsToremember = [
    {
        title: "Things to Remember on Move-In Day",
        info: "When it’s time to move into your student accommodation in Leeds, of course you’ll be keen to start experiencing student life in Leeds and really see what the city has to offer. However, there are a few things you have to consider on move-in da Firstly, you’ll need to collect your keys from the HOP office. Remember to bring your ID with you as we’ll be giving all sets of keys to the nominated tenant that comes into the office. Each tenant should have their own set, and we recommend testing each of these You’ll then be given a photographic inventory – listing everything in the property and showing the condition it’s in. Please take this seriously. You have the option to respond if anything in the inventory isn’t accurate Our last tip is to test your appliances. You should ensure this is done as soon as possible as, after 14 days, you will be liable for anything that is faulty",
        img: "/images/stu_img13.jpg",
        title_color: "text-[#152347]",
        info_color: "text-gray-800",
        bg_color: "bg-gray-200",
    }
  ]
  
  export const Remembering  = [
    {
        title: "Remembering Your Responsibilities",
        info: "We know it’s an exciting time to move out of student halls, but as one of the prime Leeds student letting agents, we feel we should remind you that you do have some responsibilities when it comes to looking after your rental property during your time at university.",
        img: "/images/stu_img14.jpg",
        title_color: "text-[#152347]",
        info_color: "text-gray-800",
        bg_color: "bg-white",
        lists: [
            {
                title: "Bleeding radiators to ensure they are clear of air and will actually heat your home",
            },
            {
                title: "Keeping sinks clear of silt, hair and anything else that may cause a blockage",
            },
            {
                title: "Replacing light bulb",
            },
            {
                title: "Regularly testing smoke alarms and replacing batteries as needed",
            },
            {
                title: "Keeping external drains free of debris – so surface water can flow",
            },
            {
                title: "Keeping rooms well ventilated (windows open) – especially bathrooms",
            }
        ]
    }
  ]

  export const propertyClean  = [
    {
        title: "Keeping Your Property Clean",
        info: "We know it’s an exciting time to move out of student halls, but as one of the prime Leeds student letting agents, we feel What you do in your own time is up to you, but it’s vital that you keep your student let clean! Here are a few things we suggest you do to keep it in good condition, and ensure you get your full deposit back:",
        img: "/images/stu_img15.jpg",
        title_color: "text-[#152347]",
        info_color: "text-gray-800",
        bg_color: "bg-white",
        lists: [
            {
                title: "Hoover up on a regular basis and wipe down skirting boards – they get dusty!",
            },
            {
                title: "Clean the cooker after use",
            },
            {
                title: "Don’t leave out-of-date food to rot in your fridge",
            },
            {
                title: "Keep bathrooms clean to prevent mould",
            },
            {
                title: "Act quickly if you spill anything on carpets or upholstery",
            },
        ]
    }
  ]

  export const leedsGuide = [
    {
        title: "Leeds Student Area Guides ",
        info: "From Headingley to Burley, Woodhouse to Hyde Park, Leeds City Centre and beyond, we provide an award-winning, personal service and a range of first class student accommodation. If you’re looking for student houses in Leeds,  if you are new to Leeds, or perhaps you’re just considering moving to a new corner of our fair city, why not check out our Student Area Guides for a little inspiration on which area would suit you best. Whether you want to be able to roll out of bed and make it to lectures in 5 minutes, prefer a leafier suburb, or budget is your number one priority, Leeds has a number of key student areas to investigate in order to find the student house that is right for you. Leeds is huge. If it’s your first time living here, or you want to explore something different from your current stomping ground, it can be hard to know where to start.  We’ve put together these handy area guides so you can get to know a bit more about the top student areas such as Hyde Park, Headingley, Burley and Kirksta ",
        img: "/images/stu_img16.png",
        title_color: "text-white",
        info_color: "text-white",
        btn_bg: "bg-pink-400",
        btn_text: "text-white",
        button:"Leeds Student Area Guide",
        url: "/property-search",
        bg_color: "bg-[#152347]",
    }
]

export const testimonial = [
    {
        img: "/images/stu_logos0.png",
        title: "Report a Repair",
        url: "/report-a-repair",
    },
    {
        img: "/images/stu_logos1.png",
        title: "Tenant Book 2023",
        url: "/tenant-book-2023",
    },
    {
        img: "/images/stu_logos2.png",
        title: "Tenant Book 2022",
        url: "/tenant-book-2022",
    },
    {
        img: "/images/stu_logos3.png",
        title: "Students FAQs",
        url: "/students-faqs",
    },
    {
        img: "/images/stu_logos4.png",
        title: "Knowledge Bank",
        url: "/knowledge-bank",
    },
    {
        img: "/images/stu_logos5.png",
        title: "Student Insurance",
        url: "/student-insurance",
    },
]

export const downloadBook = [
    {
        title: "Download the HOP Tenant Handbook",
        info: "In this handbook we’ve covered the basics about the property, paying your rent, what your responsibilities are as a Tenant and how to report things like maintenance issues. Hopefully we’ve covered most of what you need to know, but if you’ve got any further questions just give the Leeds Team a call.",
        img: "/images/stu_img17.jpg",
        title_color: "text-[#152347]",
        info_color: "text-gray-800",
        btn_bg: "bg-[#152347]",
        btn_text: "text-white",
        button:"Studenet Tenant Book 2023",
        url: "/property-search",
        bg_color: "bg-gray-200",
    }
]
export const rep_report = [
    {
        title: "Report a Repair        ",
        info: "Once you’re in the property, you can contact us if you ever have any problems. You can report a maintenance issue at any time, and we promise to get on the case within 24 hours. Sometimes we may need to conduct major repair works which may take some time, but usually we aim to get minor issues resolved within 48 hours.",
        img: "/images/stu_logos0.png",
        title_color: "text-[#152347]",
        info_color: "text-gray-800",
        btn_bg: "bg-[#152347]",
        btn_text: "text-white",
        button:"Leeds Student Area Guide",
        url: "/property-search",
        bg_color: "bg-white",
    }
]

// student-page

// landlord page
export const landlord_nav = [
    {
        title:"landlords",
        img:"/images/landLord_nav.jpg",
        button: "Free valuation",
        btn_bg:"bg-pink-400",
        btn_color:"text-white",
        title_color:"text-[#152347]",
        btn_text: "text-white"
    }
]

export const letProperty = [
    {
        title: "Guaranteed Rent",
        info: "With our Rent Guarantee service, you’ll not be out of pocket should the unexpected happen. Our Rent Guarantee service comes with nil excess, rent arrears paid for up to 15 months and up to 100,000 legal expenses cover.        ",
        para: "Danhamz is an award-winning Letting Agent in Leeds that provides a complete 360° service for Landlords, helping them to maximise their investment. Our long established  Lettings Team manages over 2,000 happy student and professional tenants.",
        question: "",
        desc: "Enjoy extra peace of mind with our extensive rent protection and legal expenses cover",
    },
    {
        title: "Maximise your investment",
        info: "Our fully managed service aims to maximise your property portfolio.        ",
        para: "Our fresh, flexible and friendly approach to sales means you get the customer service you deserve, while our top-notch marketing will make your property stand out from the crowd Danhamz’s friendly expert Estate Agents provide a seamless sales service from start to finish",
        question: "",
        desc: "Minimise void periods by having new tenants ready to move in at the end of a tenancy.        ",
    },
    {
        title: "Local Expertise        ",
        info: "With over a decade of experience in the Leeds rental market, our team are highly adept in letting and managing all kind of properties.        ",
        para: "Danhamz Investments provides a turnkey solution for investors looking to take advantage of investing in Buy to Let property in Leeds. We’ll source the right property, spec and handle any works to optimise the investment, and then let and manage it for you, wherever in the world you are based.",
        // question: "We can market your property to savvy students and professionals in Leeds        ",
        desc: "Property Sourcing",
    },
    {
        title: "Services to suit you",
        info: "At HOP,  we offer a full 360° property service to make your life as a Landlord as hassle-free as possible.        ",
        para: "Our customer-focused approach to block management delivers a transparent, personal and compliant service, tailored to meet the budget and requirements of your block. We handle every aspect of block management, ensuring continuation of service, compliance and peace of mind.",
        // question: "Read more about Danhamz Block Management",
        desc: "Full Property Management        ",
    },
]

export const findTenant = [
    {
        img: "/images/landlord_1.jpg",
        title: "Finding the Right Tenant        ",
        info: "Finding the right tenants who pay their rent on time, and take care of the property they have rented, is of the upmost importance for us and for our Landlords too Happy tenants, mean happy homes and that makes for a happy Landlord and Agent too! Reliable tenants are at the heart of a successful lettings business as well as warm relationship between the landlord and the agent. That’s why we deliver a great, personal service to our tenants, and take careful measures to find the right Tenant for all our Landlord’s propertie Tenant Retention – We look after your Tenants, ensuring your property is occupi Tenant Vetting – Credit checked and referenced tenants that will look after your proper Tenant Deposits – We safeguard the deposit with the D Extensive knowledge – We know the Leeds lettings market inside o Professional or Student Let – We can recommend the best rental strategy for your proper Good communication – Your dedicated Property Manager is on hand for any queri Flexible Services – To suit your lifestyle and experience lev Negotiable Fees – To suit your budget",
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        bg_color : "bg-white"
    }
]
export const makingYourProperty = [
    {
        img: "/images/landlord_2.jpg",
        title: "Marketing your property",
        info: "Finding the right tenants who pay their rent on time, and take care of the property they have rented, is of the upmost importance for us and for our Landlords too Happy tenants, mean happy homes and that makes for a happy Landlord and Agent too! Reliable tenants are at the heart of a successful lettings business as well as warm relationship between the landlord and the agent. That’s why we deliver a great, personal service to our tenants, and take careful measures to find the right Tenant for all our Landlord’s propertie Tenant Retention – We look after your Tenants, ensuring your property is occupi Tenant Vetting – Credit checked and referenced tenants that will look after your proper Tenant Deposits – We safeguard the deposit with the D Extensive knowledge – We know the Leeds lettings market inside o Professional or Student Let – We can recommend the best rental strategy for your proper Good communication – Your dedicated Property Manager is on hand for any queri Flexible Services – To suit your lifestyle and experience lev Negotiable Fees – To suit your budget",
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        btn_bg: "bg-[#152347]",
        btn_text: "text-white",
        button:"Find out more",
        url: "/",
        bg_color : "bg-gray-200"

    }
]

export const land_testimonial = [
    {
        img: "/images/landlord_tes1.png",
        title: "Property Management",
        url: "/report-a-repair",
    },
    {
        img: "/images/landlord_tes2.jpg",
        title: "Landlord Supplies",
        url: "/tenant-book-2023",
    },
    {
        img: "/images/landlord_tes3.jpg",
        title: "Refubs",
        url: "/tenant-book-2022",
    },
    {
        img: "/images/lanldlord_tes4.jpg",
        title: "Investment Sales",
        url: "/students-faqs",
    },
    {
        img: "/images/landlord_tes5.jpg",
        title: "Our Fees",
        url: "/knowledge-bank",
    },
    {
        img: "/images/landlord_tes6.png",
        title: "Landlord FAQs",
        url: "/student-insurance",
    },
]

export const rentalValue = [
    {
        img: "/images/phone_logo.gif",
        title: "What’s your rental value?        ",
        info: "If you have a property available to let, complete the Market Appraisal form below to book your free consultation with one of our property experts. We offer virtual and face-to-face appointments for your convenience and will cover the following topics during your appointment: Hints & tips on how to make the most of your investmen Advice on the latest industry requirements & regulation Recommendations on marketing strategie A market valuation and recommended rental valu Complete the form and our valuation experts will get in touch to arrange an appointment.",
        info_color: "text-white",
        title_color: "text-white",
        btn_bg: "bg-white",
        btn_text: "text-gray-800",
        button:"Free valuation",
        url: "/",
        bg_color : "bg-[#3a1955]"

    }
]

export const landlordServices = [
    {
        img: "/images/landlord_3.png",
        title: "Our Landlord Services        ",
        info: "No matter what level service you require from us, or the kind of property that you own, there is always no fee to pay until we find you a tenant. We offer a range of services tailored to your individual requirements and depending on the kind of property or properties that you own. Whether you have a professional/family property to let or an HMO/student property in your portfolio, we can provide the level of service that suits you best.",
        info_color: "text-gray-800",
        title_color: "text-[#152347]",
        btn_bg: "bg-[#152347]",
        btn_text: "text-white",
        button:"Read about our landlord services",
        url: "/",
        bg_color : "bg-white"

    }
]
// landlord page

// refer a friend
export const refer_nav = [
    {
        title:"Refer a Friend to danhamz for a thank you treat.",
        img:"/images/refer.gif",
        title_color:"text-white",
    }
]

export const referalScheme = [
    {
        img: "/images/refer_1.jpg",
        title: "Landlord Referral Scheme ",
        info: "We believe it’s important to say “Please” and “Thank You” so we’ve launched a new Refer a Friend Scheme to reward any of our existing Landlords who successfully recommends a new Managed Landlord to us. If you have a friend looking for someone to manage their property, why not refer them to HOP As a thank you, we will send you a £100 John Lewis voucher, once we let their property on one of our Fully Managed Services Simply email us a message with their contact details so we can drop them a line Alternatively, they are welcome to call our Management Team at any time direct on 0113 320 2100.  Just remember to let them know that you have referred them to  ",
        info_color: "text-gray-800",
        title_color: "text-[#152347]",
        btn_bg: "bg-pink-400",
        btn_text: "text-white",
        button:"Email us",
        url: "/",
        bg_color : "bg-white"

    }
]

export const terms = [
    '1. One £100 John Lewis voucher per new Managed Landlord',
    '2. Scheme starts 4th May 2022    ',
    '3. Existing HOP Landlords can opt to change for a cash credit on your account of £100    ',
    '4. The Referrer must be an existing HOP customer    ',
    '5. For Landlords: Voucher paid 2 weeks after your friend’s property is let on HOP’s Standard Managed or Premium Managed Service, prior to 30th December 2023    ',
    '6. Any claim for referral vouchers must be made prior to 31st January 2024    ',
    '7. If your friend has already placed an order through any other sales channel, the Refer a Friend Credit will not be applicable    ',
    '8. HOP reserves the right to remove or clawback vouchers if fraud or abuse is suspected    ',
    '9. If you pass your friend’s details to HOP, you confirm that you have your friend’s permission to do so.    ',
    '10. HOP reserves the right to withdraw this offer at any time.',

]
// refer a friend

// let or sell

export const let_nav = [
    {
        title:"Letting or selling – which is right for you?",
        img:"/images/let_1.jpg",
        title_color:"text-[#152347]",
        button: "Instant Rental Valuation",
        url: "/",
        btn_bg: "bg-pink-400",
        btn_text: "text-white",
    }
]

export const start = [
    {
        title:"Where Do I Start?",
        img:"/images/let_2.png",
        title_color:"text-[#152347]",
        info: "Being a Landlord doesn’t need to be stressful. If you partner with HOP, we take care of everything for you: from marketing your property and finding the best tenants, to ongoing management and maintenance, right through to the end of the Tenanc It can be hard to know where to begin, but our friendly team is full of advice, expertise and guidance. We’ll ensure that your property is up to scratch and in line with current regulations and work with you to devise a strategy that will make the most of your investment. Call us today on 0113 320 2100 for a friendly chat about your property and your options.",
        info_color: "text-gray-800",
        bg_color: 'bg-white',
    }
]
// let or sell

// property search page

export const rentContainer1 = [
    {
        title: "Min Price", name: "minPrice",
        icon: <Icon icon="bx:pound" />,
        type: "select",
        options: [
            { title: "No Minimum", value: 400}, 
            { title: "£450", value: 450},
            { title: "£550", value: 550},
            { title: "£650", value: 650},
            { title: "£750", value: 750},
            { title: "£850", value: 850},
            { title: "£950", value: 950},
            { title: "£1050", value: 1050},
            { title: "£1150", value: 1150},
            { title: "£1250", value: 1250},
            { title: "£1350", value: 1350},
            { title: "£1450", value: 1450},
            { title: "£1550", value: 1550},
            { title: "£1650", value: 1650},
            { title: "£1750", value: 1750},
            { title: "£1850", value: 1850},
            { title: "£1950", value: 1950},
            { title: "£2050", value: 2050},
            { title: "£2150", value: 2150},
            { title: "£2250", value: 2250},
            { title: "£2350", value: 2350},
            { title: "£2450", value: 2450},
            { title: "£2500", value: 2550},
        ]
    },
    {
        title: "Max Price", name: "maxPrice",
        icon: <Icon icon="bx:pound" />,
        type: "select",
        options: [
            { title: "No Maximum", value: 3650}, 
            { title: "£450", value: 1000},
            { title: "£550", value: 550},
            { title: "£650", value: 650},
            { title: "£750", value: 750},
            { title: "£850", value: 850},
            { title: "£950", value: 950},
            { title: "£1050", value: 1050},
            { title: "£1150", value: 1150},
            { title: "£1250", value: 1250},
            { title: "£1350", value: 1350},
            { title: "£1450", value: 1450},
            { title: "£1550", value: 1550},
            { title: "£1650", value: 1650},
            { title: "£1750", value: 1750},
            { title: "£1850", value: 1850},
            { title: "£1950", value: 1950},
            { title: "£2050", value: 2050},
            { title: "£2150", value: 2150},
            { title: "£2250", value: 2250},
            { title: "£2350", value: 2350},
            { title: "£2450", value: 2450},
            { title: "£2500", value: 2550},
        ]
    },
    {
        title: "Min Beds",
        type: "select", name: "minBedrooms",
        icon: <Icon icon="fa6-solid:bed" />,
        options: [
            {title: "No Minimum", value: 0},
            {title: "1 Bedroom", value: 1},
            {title: "2 Bedroom", value: 2},
            {title: "3 Bedroom", value: 3},
            {title: "4 Bedroom", value: 4},
            {title: "5 Bedroom", value: 5},
            {title: "6 Bedroom", value: 6},
            {title: "7 Bedroom", value: 7},
            {title: "8 Bedroom", value: 8},
            {title: "9 Bedroom", value: 9},
            {title: "10 Bedroom", value: 10},
        ]
    },
    {
        title: "Max Beds",
        type: "select", name: "maxBedrooms",
        icon: <Icon icon="fa6-solid:bed" />,
        options: [
            {title: "No Maximum", value: 11},
            {title: "1 Bedroom", value: 1},
            {title: "2 Bedroom", value: 2},
            {title: "3 Bedroom", value: 3},
            {title: "4 Bedroom", value: 4},
            {title: "5 Bedroom", value: 5},
            {title: "6 Bedroom", value: 6},
            {title: "7 Bedroom", value: 7},
            {title: "8 Bedroom", value: 8},
            {title: "9 Bedroom", value: 9},
            {title: "10 Bedroom", value: 10},
        ]
    },
    {
        title: "Property Types",
        type: "select", name: "propertyType",
        icon: <Icon icon="clarity:house-solid" />,
        options: [
            {title: "No Preference", value: "No Preference"}, 
            {title: "Detatched", value: "Detatched"},
            {title: "Share House", value: "Share House"},
            {title: "Semi Detatched", value: "Semi Detatched"},
            {title: "Tarraced", value: "Tarraced"},
            {title: "Bunglow", value: "Bunglow"},
            {title: "Appartment/Flat", value: "Flat"},
        ]
    },
    {
        title: "Features",
        type: "select", name: "features",
        icon: <Icon icon="material-symbols:feature-search" />, 
        options: [
            {title: "No Preference", value: "No Preference"}, 
            {title: "Video Viewing", value: "Video Viewing"},
            {title: "Garden", value: "Garden"},
            {title: "Parking", value: "Parking"},
            {title: "Garage", value: "Garage"},
        ]
    },
    {
        title: "Available From",
        type: "select", name: "isAvailableFrom",
        icon: <Icon icon="uim:calender" />, 
        options: [
            {title: "Available anytime", value: 'anytime'},
            {title: "Immediately", value: 'immediately'},
            {title: "Within 1 month", value: 'within 1 month'},
            {title: "Within 3 months", value: 'within 3 months'},
            {title: "Within 6 months", value: 'within 6 months'},
            {title: "Within 1 year", value: 'within 1 year'},
        ]
    },
]
export const buyContainer1 = [
    {
        title: "Min Price", name: "minPrice",
        icon: <Icon icon="bx:pound" />,
        type: "select",
        options: [
            { title: "No Minimum", value: 400}, 
            { title: "£450", value: 450},
            { title: "£550", value: 550},
            { title: "£650", value: 650},
            { title: "£750", value: 750},
            { title: "£850", value: 850},
            { title: "£950", value: 950},
            { title: "£1050", value: 1050},
            { title: "£1150", value: 1150},
            { title: "£1250", value: 1250},
            { title: "£1350", value: 1350},
            { title: "£1450", value: 1450},
            { title: "£1550", value: 1550},
            { title: "£1650", value: 1650},
            { title: "£1750", value: 1750},
            { title: "£1850", value: 1850},
            { title: "£1950", value: 1950},
            { title: "£2050", value: 2050},
            { title: "£2150", value: 2150},
            { title: "£2250", value: 2250},
            { title: "£2350", value: 2350},
            { title: "£2450", value: 2450},
            { title: "£2500", value: 2550},
        ]
    },
    {
        title: "Max Price", name: "maxPrice",
        icon: <Icon icon="bx:pound" />,
        type: "select",
        options: [
            { title: "No Maximum", value: 3550}, 
            { title: "£450", value: 1000},
            { title: "£550", value: 550},
            { title: "£650", value: 650},
            { title: "£750", value: 750},
            { title: "£850", value: 850},
            { title: "£950", value: 950},
            { title: "£1050", value: 1050},
            { title: "£1150", value: 1150},
            { title: "£1250", value: 1250},
            { title: "£1350", value: 1350},
            { title: "£1450", value: 1450},
            { title: "£1550", value: 1550},
            { title: "£1650", value: 1650},
            { title: "£1750", value: 1750},
            { title: "£1850", value: 1850},
            { title: "£1950", value: 1950},
            { title: "£2050", value: 2050},
            { title: "£2150", value: 2150},
            { title: "£2250", value: 2250},
            { title: "£2350", value: 2350},
            { title: "£2450", value: 2450},
            { title: "£2500", value: 2550},
        ]
    },
    {
        title: "Min Beds",
        type: "select", name: "minBedrooms",
        icon: <Icon icon="fa6-solid:bed" />,
        options: [
            {title: "No Minimum", value: 0},
            {title: "1 Bedroom", value: 1},
            {title: "2 Bedroom", value: 2},
            {title: "3 Bedroom", value: 3},
            {title: "4 Bedroom", value: 4},
            {title: "5 Bedroom", value: 5},
            {title: "6 Bedroom", value: 6},
            {title: "7 Bedroom", value: 7},
            {title: "8 Bedroom", value: 8},
            {title: "9 Bedroom", value: 9},
            {title: "10 Bedroom", value: 10},
        ]
    },
    {
        title: "Max Beds",
        type: "select", name: "maxBedrooms",
        icon: <Icon icon="fa6-solid:bed" />,
        options: [
            {title: "No Maximum", value: 11},
            {title: "1 Bedroom", value: 1},
            {title: "2 Bedroom", value: 2},
            {title: "3 Bedroom", value: 3},
            {title: "4 Bedroom", value: 4},
            {title: "5 Bedroom", value: 5},
            {title: "6 Bedroom", value: 6},
            {title: "7 Bedroom", value: 7},
            {title: "8 Bedroom", value: 8},
            {title: "9 Bedroom", value: 9},
            {title: "10 Bedroom", value: 10},
        ]
    },
    {
        title: "Property Type",
        type: "select", name: "propertyType",
        icon: <Icon icon="clarity:house-solid" />,
        options: [
            {title: "No Preference", value: "No Preference"}, 
            {title: "Detatched", value: "Detatched"},
            {title: "Semi Detatched", value: "Semi Detatched"},
            {title: "Tarraced", value: "Tarraced"},
            {title: "Bunglow", value: "Bunglow"},
            {title: "Appartment/Flat", value: "Flat"},
        ]
    },
    {
        title: "Features",
        type: "select", name: "features",
        icon: <Icon icon="material-symbols:feature-search" />, 
        options: [
            {title: "No Preference", value: "No Preference"}, 
            {title: "Video Viewing", value: "Video Viewing"},
            {title: "Garden", value: "Garden"},
            {title: "Parking", value: "Parking"},
            {title: "Garage", value: "Garage"},
        ]
    },
    {
        title: "Available From",
        name: "isAvailableFrom",
        type: 'select',
        placeholder: "Select Availability",
        options: [
            {title: "Available anytime", value: 'anytime'},
            {title: "Immediately", value: 'immediately'},
            {title: "Within 1 month", value: 'within 1 month'},
            {title: "Within 3 months", value: 'within 3 months'},
            {title: "Within 6 months", value: 'within 6 months'},
            {title: "Within 1 year", value: 'within 1 year'},

        ]
    },
]




// property search page

// investment sales page


export const sellers_nav = [
    {
        title: "Investment Sales: Buy or Sell Tenanted Property",
        url: "/sales-valuation",
        button: "Free sale valuation",
        btn_bg : "bg-pink-400",
        btn_text : "text-white",
        title_color: "text-[#152347]",
        img:"/images/sellers_nav.png",
    }
]

export const sellProperty = [
    {
        title: "Specialised Service ",
        info: "With our Rent Guarantee service, you’ll not be out of pocket should the unexpected happen. Our Rent Guarantee service comes with nil excess, rent arrears paid for up to 15 months and up to 100,000 legal expenses cover.        ",
        para: "Danhamz is an award-winning Letting Agent in Leeds that provides a complete 360° service for Landlords, helping them to maximise their investment. Our long established  Lettings Team manages over 2,000 happy student and professional tenants.",
        question: "",
        desc: "Enjoy extra peace of mind with our extensive rent protection and legal expenses cover",
    },
    {
        title: "Communication        ",
        info: "Our fully managed service aims to maximise your property portfolio.        ",
        para: "Our fresh, flexible and friendly approach to sales means you get the customer service you deserve, while our top-notch marketing will make your property stand out from the crowd Danhamz’s friendly expert Estate Agents provide a seamless sales service from start to finish",
        question: "",
        desc: "Minimise void periods by having new tenants ready to move in at the end of a tenancy.        ",
    },
    {
        title: "Off-Market Sales        ",
        info: "With over a decade of experience in the Leeds rental market, our team are highly adept in letting and managing all kind of properties.        ",
        para: "Danhamz Investments provides a turnkey solution for investors looking to take advantage of investing in Buy to Let property in Leeds. We’ll source the right property, spec and handle any works to optimise the investment, and then let and manage it for you, wherever in the world you are based.",
        // question: "We can market your property to savvy students and professionals in Leeds        ",
        desc: "Property Sourcing",
    },
    {
        title: "Local Knowledge",
        info: "At HOP,  we offer a full 360° property service to make your life as a Landlord as hassle-free as possible.        ",
        para: "Our customer-focused approach to block management delivers a transparent, personal and compliant service, tailored to meet the budget and requirements of your block. We handle every aspect of block management, ensuring continuation of service, compliance and peace of mind.",
        desc: "Full Property Management",
    },
]


export const salesStratergy = [
    {
      title: "An Investment Sales Strategy that is right for you",
      img: "/images/sellers_1.png",
      info: "Depending on your objectives, HOP offers a number of different strategies to ensure the smooth sale of your investment properties. Transparent Fixed-Fee Traditional On-Market Sale with exposure on all major property portal No Fee Off-Market Sale via our extensive investor network and Investor Clu Assisted Sale to get your assets in the best possible position for a sal We’ll review your requirements in detail and can offer advice on which is the best route for you, to meet your individual goal. Our aim is to reduce stress,  increase the success, maximise the price and minimise the chances of failur Our specialist sales team will handle the smooth running of the transaction, whether you are looking to sell a single BTL property, a tenanted HMO, a multi-property portfolio or even blocks of flats Since 2009, we have had our fingers on the pulse of the Leeds letting market and have established a vast network of contacts over the years, which makes light work of buying and selling investment propert ",
      title_color: "text-[#152347]",
      info_color: "text-gray-900",
    }
]

export const salesExperience = [
    {
      title: "Expertise & Experience",
      img: "/images/sellers_2.png",
      info: "When it comes to selling an investment property (or portfolio of properties) in Leeds, there are a number of things you need to take into account. Compliance, planning, condition are all elements that affect not only the value, but the chances of a successful completion in a timely manner. As HMO experts we know what potential buyers are looking out for when it comes to a property and we can help with a detailed review as part of the due diligence required to ensure you have everything in place, before the property is brought to market Does it need an HMO licence Is it in an area of C4 Planning What is the rental history like There is currently a lack of stock on in the investment sales market and good properties are in high demand. In particular, the scarcity of HMO’s in Article 4 Direction areas continues to support prices – as there is limited stock on the open market. Planning policy means there are no more likely to be made or converted in these areas.",
      title_color: "text-[#152347]",
      info_color: "text-gray-900",
      bg_color: "bg-gray-200",
    }
]
export const onMarket = [
    {
      title: "On-Market Investment Sales",
      img: "/images/sellers_3.png",
      info: "If you want the maximum possible exposure for your property, or portfolio of properties, then our on-market sales service offers everything you will need for a successful sale with HOP. Our transparent fixed-fee service gives you clarity of all costs up-front, while our top notch marketing techniques are proven to get more eyes on your property to result in a faster sale Using the latest tech, we’ll showcase your property in the best possible light across all the major property portals and the HOP website. Detailed property listings include: professionally edited photography, interactive virtual tours, expertly drawn floorplans, maps and EPC details – all designed to capture the attention of potential purchasers.",
      title_color: "text-[#152347]",
      info_color: "text-gray-900",
      url: "/",
      button:"Book valuation",
      btn_bg: "bg-pink-300",
      btn_text: "text-white",
    }
]

export const offMarket = [
    {
      title: "No Fee Off-Market Sale      ",
      img: "/images/sellers_4.png",
      info: "If convenience & cost effectiveness are your priorities, then our no fee off-market investment sales service could be the right approach for you. At HOP, we’ve been working closely with Landlords with properties in Leeds for well over a decade. Since 2009, we have been meticulously letting and managing what has grown to be one a portfolio of over 2,000 rental homes within Leeds. This close partnership with Landlords has continued to build over time and has perfectly placed us to assist with investment sales between Investors, with minimal hassle and fuss for all involved. As Landlords grow, or reduce, the size of their portfolios our trusted network of contacts provides an invaluable resourc Our off-market sales service uses our network of pre-qualified investors, issuing the opportunity to our highly engaged HOP Investor Club and wider database to secure a sale quickly, and with no fee to pay, without having to go on-market",
      title_color: "text-[#152347]",
      info_color: "text-gray-900",
      bg_color: "bg-gray-200",
     
    }
]

export const positioning = [
    {
      title: "Positioning Your Investment Property",
      img: "/images/sellers_5.png",
      info: "When it comes to selling an investment property – or a portfolio of properties –  how it is marketed and positioned is critical. Whether the property is being sold with a traditional on-market approach, or you decide to opt for the convenience of an off-market sale, we identify value-add options and crunch the numbers, so that the full potential and ‘big picture’ of the investment is presented a the potential buyer In many instances, properties are sold to our property sourcing clients – often on an off-market basis – who are pre-qualified investors that are actively looking to purchase in the Leeds market.",
      title_color: "text-[#152347]",
      info_color: "text-gray-900",
      bg_color: "bg-white",
     
    }
]

export const assistedSales = [
    {
      title: "Assisted Sale      ",
      img: "/images/sellers_6.png",
      info: "Maximise your property’s sale value and share in the profits with an Assisted Sale. HOP will work in partnership with the owner to identify the potential of their property and then review the costs and strategy required to maximise the sales value against the agreed existing value. The goal is to increase the value to the owner, by optimising the property to maximise the sales price, rather than selling it at a reduced price due to its condition or other facts The owner does not need to funds those works, but would get a share in uplift once it is sold. HOP Investments would fully fund and undertake the works, utilising our expert project team of architects, planning consultants, and contractors, and project manage it from start to finish. Once works are finished, the property can be marketed in the usual way. On successful completion, the sales revenue and any profit is shared, repaying costs to each party This is ideal for investors or landlords with neglected properties, or properties with value- add potential (development, renovation, planning) and can be owner occupied, a BTL, a HMO, blocks of flats, commercial properties and land.",
      title_color: "text-[#152347]",
      info_color: "text-gray-900",
      url: "/",
      button:"Contact us for more details",
      btn_bg: "bg-pink-300",
      btn_text: "text-white",
    }
]

export const underStandLeedsMarket = [
    {
      title: "Understanding The Leeds Market      ",
      img: "/images/sellers_7.png",
      info: "The Leeds Rental Market is split into two primary segments – Student & Professional  – both of which are very buoyant. Leeds’ huge student population means that there is continuous, year-on-year demand for quality properties. Being aware of the student season is key to choosing the right time to sell your investment. 1st July marks the start of the cycle, when across the entire city the majority of students move in to their new homes. The demand for rental property is not just for students but from professionals too. Leeds’ thriving professional market is down to its popularity as a fantastic place to work, with many large corporations and businesses choosing to locate here It’s also worth mentioning the growing rooms market. As everyone feels the pinch of the cost of living crisis, we are seeing an increase in tenants looking for rooms in a house share from both professionals and students alike – making HMO’s a prime choice for people looking to invest in Leeds property.",
      title_color: "text-[#152347]",
      info_color: "text-gray-900",
      bg_color: "bg-gray-200",
     
    }
]

export const bookSalesvaluation = [
    {
      title: "Book Your Sales Valuation Today",
      img: "/images/sellers_main.gif",
      info: "It all starts with a free, no-obligation valuation. Get in touch now to book your consultation with our property experts.  We offer several options including:",
      lists: ['Instant Online Valuation', 'Desktop valuation – simply call the office and our valuer can discuss your property and draft a desktop valuation for you.', 'Virtual Valuation – Using Facetime or Zoom, we’ll provide a personalised valuation and discuss your marketing options.', 'Face to Face Valuation – Book an appointment to visit your property in person and talk you through the options. If you have tenants in situ we provide the highest discretion and we will call you the same day to discuss and deliver your valuation figure.'],
      title_color: "text-white",
      info_color: "text-white",
      url: "/",
      button:"Book your sales valuation now",
      btn_bg: "bg-[#152347]",
      btn_text: "text-white",
      bg_color : 'bg-[#ea8bb9]'
    }
]

// investment sale page

// buy a ltd page

export const Buyer_nav = [
    {
        title: "Buying an investment property in Leeds",
        title_color: "text-[#152347]",
        img:"/images/buy_1.png",
    }
]


    export const insvestmentProperty = [
        {
            title: "Experience & Advice",
            info: "With our Rent Guarantee service, you’ll not be out of pocket should the unexpected happen. Our Rent Guarantee service comes with nil excess, rent arrears paid for up to 15 months and up to 100,000 legal expenses cover.        ",
            para: "Danhamz is an award-winning Letting Agent in Leeds that provides a complete 360° service for Landlords, helping them to maximise their investment. Our long established  Lettings Team manages over 2,000 happy student and professional tenants.",
            question: "",
            desc: "Enjoy extra peace of mind with our extensive rent protection and legal expenses cover",
        },
        {
            title: "Independent Local Agent",
            info: "Our fully managed service aims to maximise your property portfolio.",
            para: "Our fresh, flexible and friendly approach to sales means you get the customer service you deserve, while our top-notch marketing will make your property stand out from the crowd Danhamz’s friendly expert Estate Agents provide a seamless sales service from start to finish",
            question: "",
            desc: "Minimise void periods by having new tenants ready to move in at the end of a tenancy.",
        },
        {
            title: "A Helping Hand",
            info: "With over a decade of experience in the Leeds rental market, our team are highly adept in letting and managing all kind of properties.        ",
            para: "Danhamz Investments provides a turnkey solution for investors looking to take advantage of investing in Buy to Let property in Leeds. We’ll source the right property, spec and handle any works to optimise the investment, and then let and manage it for you, wherever in the world you are based.",
            desc: "Property Sourcing",
        },
        {
            title: "Property Connections",
            info: "At HOP,  we offer a full 360° property service to make your life as a Landlord as hassle-free as possible.",
            para: "Our customer-focused approach to block management delivers a transparent, personal and compliant service, tailored to meet the budget and requirements of your block. We handle every aspect of block management, ensuring continuation of service, compliance and peace of mind.",
            desc: "Full Property Management",
        },
        {
            title: "Refurbs & Renovations",
            info: "At HOP,  we offer a full 360° property service to make your life as a Landlord as hassle-free as possible.",
            para: "Our customer-focused approach to block management delivers a transparent, personal and compliant service, tailored to meet the budget and requirements of your block. We handle every aspect of block management, ensuring continuation of service, compliance and peace of mind.",
            desc: "Full Property Management",
        },
        {
            title: "Fully Accredited",
            info: "At HOP,  we offer a full 360° property service to make your life as a Landlord as hassle-free as possible.",
            para: "Our customer-focused approach to block management delivers a transparent, personal and compliant service, tailored to meet the budget and requirements of your block. We handle every aspect of block management, ensuring continuation of service, compliance and peace of mind.",
            desc: "Full Property Management",
        },
        {
            title: "Experience & Advice",
            info: "At HOP,  we offer a full 360° property service to make your life as a Landlord as hassle-free as possible.",
            para: "Our customer-focused approach to block management delivers a transparent, personal and compliant service, tailored to meet the budget and requirements of your block. We handle every aspect of block management, ensuring continuation of service, compliance and peace of mind.",
            desc: "Full Property Management",
        },
    ]


export const nextInvestment = [
    {
        title: "Let us find your next investment",
        img: "/images/buy_2.png",
        info: "Leeds is an excellent location for buy-to-let investment and we offer a Property Sourcing  service for investors looking to take advantage of the excellent yields available in Leeds. A renowned hotspot for rental property, Leeds enjoys a vibrant professional market as well as a vast student population. With house prices more affordable than other major cities, and robust year-on-year rental demand, it’s a location full of opportunity for the savvy investor At HOP, we deliver a turnkey service for clients all over the globe. We’ll identify the right property for you, optimise it for the rental market, and then let & manage it on your behalf – so you can relax while your investment is hard at work With over 15 years’ experience, we can help you take advantage of all the Leeds property market has to offer.",
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        url: "/",
        button:"Property Sourcing",
        btn_bg: "bg-[#152347]",
        btn_text: "text-white",
        bg_color : 'bg-white'
    }
]

export const choosingArea = [
    {
        title: "Choosing the right area",
        img: "/images/buy_3.jpg",
        info: "It’s the age old saying – location location location! But it’s a cliche for a reason. To find the perfect location for your new investment, there are a number of factors to consider Depending on whether you want professional tenants or student tenants, the kind of local amenities and transport routes will really make a difference. From schools and universities, to commuter links, to favourite places to shop and eat – what is important to the kinds of tenants you want to attract will be key to finding the right location for your investment Let us help. We know the Leeds rental market inside out and ca help you find a property that is going to meet your investment ambitions. Even if we’ve not got a property listed right now in your chosen area, we have a substantial network of Landlords that we can work with to locate your next investment.",
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        url: "/",
        button:"View our Leeds Area Guide",
        btn_bg: "bg-[#152347]",
        btn_text: "text-white",
        bg_color : 'bg-white'
    }
]

export const localOrOnlineAgent = [
    {
        title: "Local vs Online Agents – which is right for you?",
        img: "/images/buy_4.jpg",
        info: "As a Local Independent Agent, we pride ourselves in delivering a personalised services from your high street. Our main branch is located in Leeds City Centre, which covers all LS & BD postcodes. Our friendly, helpful and knowledgeable teams are on hand to help customers with a range of different property services. Buying through an online agent is increasingly popular but it’s not without risk and extra stress. We’ve been selling and letting properties for over a decade, many online agents didn’t even exist when we were first founded, and many have opened and closed during that time Local agents can offer a more bespoke service, with a branch you can actually visit and have the option of talking to an estate agent in person, not just being put through to a call centre where the person has never seen the property and may have never even been to the area Choosing to buy your property with an independent agent like HOP, delivers you a personalised service right from your high street.",
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
    }
]
// buy  ltd page

// mortgages pages

export const mortgage_nav = [
    {
        title: "Mortgage Broker in Leeds",
        title_color: "text-white",
        img:"/images/mortgages_nav.png",
        button: "Arrange a mortgage consultation today",
        url: "/",
        btn_bg: "bg-pink-400",
        btn_text: "text-white",
    }
]

export const mortgageBroker = [
    {
        title: "Why use a mortgage broker?",
        img: "/images/mortgages_1.jpg",
        info: "Buying a property is not cheap, and it’s only natural to want to save on costs – but cutting corners can cost you in the long run. Advice from a reputable mortgage broker can be invaluable and something we would always recommend to all our buyers. First and foremost, using a mortgage broker offers you additional protections as well as the confidence that you are getting the best deals for your personal situation.  An important thing to understand is that when you receive mortgage advice, your mortgage broker has a duty of care to you. That means it is their responsibility to not only recommend a suitable mortgage, but also be able to justify why the mortgage they have chosen is right for you. If their advice is not up to scratch, you can question this and be compensated Having been in the industry for a long time, at HOP, we’ve grown a trusted and established network of property connections to share with our clients.  If you are interested in a no obligation consultation with one of our Mortgage partners, drop us a note be ",
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        url: "/",
        button:"Consult us to arrange consultation",
        btn_bg: "bg-pink-400",
        btn_text: "text-white",
        bg_color : 'bg-white'
    }
]

export const consultWithExpert = [
    {
        title: "Consult with an expert",
        img: "/images/mortgages_2.jpg",
        info: "There’s an awful lot to think about when choosing the right mortgage. It’s not as simple as just opting for the cheapest fixed or tracker rate mortgage you can find! Mortgages are a lot more difficult than they first appear. Knowing what rate, term, lender, features, insurance to get are all more time-consuming and complex matter Mortgage brokers are required to be fully qualified to give you mortgage advice, which isn’t necessarily the same for the people you might chat with in a lender’s call centre. So while comparing mortgages on a site like Money Supermarket is a good place to start and get a feel for what’s out there, we would always recommend taking professional advic A mortgage broker takes your whole circumstances into account to recommend a suitable product. It is this thorough, professional look at your finances that makes their advice well worth i Don’t forget, a mortgage brokers advice is free with no obligation, so why not arrange an appointment today – either  over the phone or pop in to our Horsforth branch and discuss things over a cup ",
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
    }
]

export const bestInterest = [
    {
        title: "Keeping your best interests at heart",
        img: "/images/mortgages_3.jpg",
        info: "Mortgage eligibility criteria has changed considerably over the last few years, particularly since the pandemic. The rules are designed to ensure borrowers can prove affordability, even in the event of a rate rise. That’s why it is important to have a broker on your side who understands it all. A broker deals with lenders on a day-to-day basis. They will know what the application process is like for each one and which lender can process things with minimal delays. An independent mortgage broker will look for the best mortgage for you. They aren’t on the lender’s side, they’re on yours. They will give you access to far more products than if you went direct to your bank. You’ll receive unbiased advice and have the flexibility to choose from a range of products Don’t forget, a bank can only offer you their product, a broker can offer you almost every lender’s product. More choice means better deals!",
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
    }
]

export const healthCheck = [
    {
        title: "Free Mortgage Healthcheck",
        img: "/images/mortgages_4.jpg",
        info: "If you are thinking of remortgaging, then why not book in for a no obligation mortgage review with our in-house Mortgage Advisor.  Appointments can take place over a cuppa in our Horsforth Branch, or we can schedule an appointment virtually too. During the Mortgage Health Check appointment, we will go through: ",
        lists: ['The details of your current mortgage – including the current lender, outstanding balance, current rate, early payment penalties etc.', 'Your current financial circumstances – employment details, income vs outgoings, current debt circumstances, documentation proof required to back this up (bank statements, payslips etc)', 'Mortgage Requirements – what you are hoping  to achieve as part of this process (e.g. switch to a better rate, raise some capital, debt consolidation)', 'No two mortgage applications are the same, so in order to provide you with advice, it’s really important we get to know you and your circumstances first. Only then can we put together a bespoke mortgage proposition tailored to your needs.'],
        title_color: "text-white",
        info_color: "text-white",
        url: "/",
        button:"Book your free Mortgage Healthcheck today",
        btn_bg: "bg-pink-400",
        btn_text: "text-white",
        bg_color : 'bg-[#152347]'
    }
]

// mortages pages

// auction page

export const auction_nav = [
    {
        title: "Property Auctions in Leeds",
        title_color: "text-[#152347]",
        img:"/images/auction_nav.png",
        button: "Enquire about our auction services",
        url: "/",
        btn_bg: "bg-[#152347]",
        btn_text: "text-white",
    }
]

export const propertyAuction = [
    {
        title: "Why sell at a property auction?",
        img: "/images/auction_1.jpg",
        info: "It’s a common misconception that only run-down and distressed properties sell at auction. Auction properties come in all shapes, styles and values – anyone can take advantage of this convenient and cost effective way to sell",
        lists: ['Speed Typically, it takes just 6 to 10 weeks to complete the sale. So, if you are looking to sell a property quickly, this is a great way of making it happen. Any buyer can purchase an auction property. There is no limit to the type of buyer your property is accessible to, from first time buyers with a mortgage to cash buyers.', 'Cost With 0% fees to pay, selling at auction offers a cost effective way to sell your property, compared to more traditional methods, which may cost anywhere between 1% to 3% of the final sales price.', 'Security While sellers pay no fees at all, the buyer pays upfront costs that ensure they are committed to the sale, thereby reducing the chance of it falling through before completion.'],
        title_color: "text-[#152347]",
        lists_style: false,
        info_color: "text-gray-900",
        url: "/",
        lists_color: "text-gray-900",
        button:"Sell your property at auction",
        btn_bg: "bg-pink-400",
        btn_text: "text-white",
        bg_color : 'bg-white'
    }
]


export const stressFreeSale = [
    {
        title: "A stress-free sale",
        img: "/images/auction_2.jpg",
        info: "Selling your property via an auction, gives you the opportunity to avoid some of the common pitfalls and stressors that can be associated with selling homes. Selling through conventional methods, such as private treaty,  can frequently involve:",
        lists: ['A lengthy process', 'No firm commitment from a buyer', 'A higher risk of sale falling through', 'No firm date for completion', 'Re-negotiation of price after sale is agreed'],
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        lists_style: false,
        url: "/",
        lists_color: "text-gray-900",
        button:"Message us about auctioning your property",
        btn_bg: "bg-pink-400",
        btn_text: "text-white",
        bg_color : 'bg-white'
    }
]

export const auctionBenefits = [
    {
        title: "The benefits of a property auction",
        img: "/images/auction_3.png",
        // info: "Selling your property via an auction, gives you the opportunity to avoid some of the common pitfalls and stressors that can be associated with selling homes. Selling through conventional methods, such as private treaty,  can frequently involve:",
        lists: ['Sell Your Home for Free: You keep all of your proceeds, there are no upfront costs and absolutely no estate agent fees to pay.', 'Control Over Price: Your property does not sell for less than you allow.', 'Complete Transparency: All bids on your property are visible on an Online Bidding Platform, enabling interested parties to place offers anywhere, anytime. This allows the price to be driven up as buyers bid against one another', 'Committed Buyer: Your buyer is obligated to pay a non-refundable fee once you accept their offer. They are then financially committed to purchasing your house at the agreed price. As a result, only 1% of auction sales fall through, compared with 30% of private treaty sales in the UK.', 'A Timeline to Suit You: Your property sells quickly and your buyer must complete within timescales of 28days or 56days (or lengthier if agreed)'],
        title_color: "text-[#152347]",
        lists_style: false,
        info_color: "text-gray-900",
        lists_color: "text-gray-900",
        
    }
]

export const howItWorks = [
    {
        title: "How it works",
        img: "/images/auction_4.jpg",
        lists: ['Many people think auctions still take place in a dark room with a man and a hammer. However, times have changed and the new method of auction is a much more modern and transparent route to selling your home.', 'Just like traditional methods, we will first come out to your property to carry out a valuation and also collate all marketing material, including professionally edited photography and floorplan.', 'Complete Transparency: All bids on your property are visible on an Online Bidding Platform, enabling interested parties to place offers anywhere, anytime. This allows the price to be driven up as buyers bid against one another', 'Committed Buyer: Your buyer is obligated to pay a non-refundable fee once you accept their offer. They are then financially committed to purchasing your house at the agreed price. As a result, only 1% of auction sales fall through, compared with 30% of private treaty sales in the UK.', 'Once we have agreed on an attractive Starting Bid and an undisclosed Reserve Price, your property will be advertised online on all leading property portals, including Rightmove'],
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        lists_style: false,
        url: "/",
        lists_color: "text-gray-900",
        button:"Send us a message to get started",
        btn_bg: "bg-pink-400",
        btn_text: "text-white",
        bg_color : 'bg-white'
    }
]

export const auctionProcess = [
    {
        title: "The auction process",
        img: "/images/auction_5.jpg",
        lists: ['Starting Bid: This price is set lower than your reserve, to generate as much interest as possible.', 'Reserve Price: This is the minimum price you hope to achieve. Your property is not sold for any less than this. Only you and the auction department are aware of what this figure is.', 'Auction Date: Your property will sell for the highest bid at auction end (but only if it exceeds your reserve price). Often the highest bid will be even higher. Remember – the buyer is obligated to pay a non-refundable fee to secure your property. You have no fees to pay.', 'Viewings: Viewings will be carried out on agreed dates and only proceedable buyers will be given the opportunity to view, to avoid time-wasting.', 'Legal Pack: Our legal team partner will produce a legal pack at no upfront cost, allowing buyers to carry out their due diligence before placing an offer. This allows all parties to facilitate an exchange of contract as soon as there is an acceptable offer.', 'We recently sold this 3 bedroom detached property in Horsforth at auction, which went for 8% over our original listing price.  Not only was the sale completed quickly, but the sellers received a better price that they had hoped for with a traditional listing.'],
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        lists_style: false,
        url: "/",
        lists_color: "text-gray-900",
        button:"Send us a message to get started",
        btn_bg: "bg-pink-400",
        btn_text: "text-white",
        bg_color : 'bg-white'
    }
]



// value page

export const value_nav = [
    {
        title: "How much is your property worth?",
        title_color: "text-white",
        img:"/images/value_nav.png",
        button: "Free sales valuation",
        url: "/",
        btn_bg: "bg-[#152347]",
        btn_text: "text-white",
        bg_color : 'bg-[#f78da7]'
    }
]

export const getValuation = [
    {
        title: "How can I get a valuation?",
        img: "/images/value_1.jpg",
        lists: ['There are a few different ways that we can offer you a sales valuation of your property so that you can get a good idea of how much you property is worth and what you should list it for.', 'For a topline idea of what your property is worth, you can use our handy online valuation tool. Simply pop in your postcode, select your address and hey presto – after a couple of clicks – you’ll have an instant result, giving you an estimated sales or rental value for your property. It takes less than 60 seconds!', 'If you are serious about making a move, then a face to face consultation with one of our experts is the only way to get a accurate valuation of the property along with tailored insights that will help you to get the most out of selling your home', 'Book an appointment with one of our valuers to visit your property in person and talk you through the options. If you have tenants in situ we provide the highest discretion and we will call you the same day to discuss and deliver your valuation figure.Book an appointment with one of our valuers to visit your property in person and talk you through the options. If you have tenants in situ we provide the highest discretion and we will call you the same day to discuss and deliver your valuation figure.'],
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        lists_style: false,
        url: "/",
        lists_color: "text-gray-900",
        button:"Instant valuation tool",
        btn_bg: "bg-pink-400",
        btn_text: "text-white",
        bg_color : 'bg-white'
    }
]

export const valuationTool = [
    {
        title: "The Valuation Process",
        img: "/images/value_2.jpg",
        lists: ['All of our Sales Valuations are carried out by our highly trained property experts who understand the property market inside out. Not only will they be able to give you an accurate market valuation of your property, but they’ll also get to know you – and your property – to understand what you want to achieve from the sale and how that fits in with your wider plans.', 'The appointment itself is usually between 45 mins to an hour, during which we’ll take a good look round the property to identify its best assets. We’ll discuss the property details and go through with you what the current local market is like so that we can give you a realistic indication of what the property might achieve when it goes to market.', 'Getting an accurate valuation is critical to ensure that when you market your property, you are pitching it at the right price to get the best possible result for you. We’ll also offer you advice on the different options for selling your home and how we can tailor our flexible sales service to suit you.'],
        title_color: "text-[#152347]",
        lists_style: false,
        lists_color: "text-gray-900",
    }
]

export const salesValuation = [
    {
        title: "Sales Valuation in Leeds by Experienced Professionals",
        title_color: "text-[#152347]",
        info: "As fully qualified professionals with years of experience in the Leeds property market, we are ideally placed to offer an accurate valuation service to local homeowners, property investors and developers. With access to the most recent sold house prices in the area, we always have our finger on the pulse of the residential property market in Leeds, which means you can rely on us to deliver a fair and realistic valuation of your home. Whatever type of house or apartment you wish to sell and whatever reason you have for selling your property, we can prepare a detailed market appraisal that accurately reflects its true value.",
        img:"/images/value_3.jpg",
        info_color: "text-gray-900",
    }
]

export const houseValuation = [
    {
        title: "How a House Valuation in Leeds from HOP Can Help You",
        lists: ['If you would like to sell a house or apartment, the very first thing you need is an accurate valuation of your property. Without a clear idea of what your property is likely to fetch on the open market, it will be impossible for you to market it effectively or to negotiate with prospective buyers.', 'However, armed with an accurate valuation from a reputable estate agent such as HOP, you will able to market your property effectively across multiple channels. You will also be able to negotiate with prospective buyers from a position of strength'],
        title_color: "text-[#152347]",
        img:"/images/value_4.jpg",
        lists_color: "text-gray-900",
        lists_style: false,
    }
]

export const benefitsFromExperts = [
    {
        title: "Benefit From Our Expertise Today",
        lists: ['Whether you simply want an accurate house valuation in Leeds before putting your home on the market or you would also like to find out more about current and predicted house prices in the area, we can help. In the first instance, you can use our free instant valuation tool, (a house value calculator by postcode). This tool is designed to give you a quick estimate of your property’s value.', 'If you are ready to put your home on the market, we recommend contacting us to arrange a full valuation. Conducted either in person or virtually over the Internet, a full property valuation in Leeds from HOP will help you to determine a fair and honest market price when you list your home with us. Call now to get started'],
        title_color: "text-[#152347]",
        img:"/images/value_5.jpg",
        lists_color: "text-gray-900",
        lists_style: false,
    }
]
// value page

// overview page
export const overview_nav1 = [
    {
        title: "Property Investment Leeds",
        title_color: "text-[#152347]",
        img:"/images/overview_nav.jpg",
        button: "Get in touch",
        url: "/",
        btn_bg: "bg-[#152347]",
        btn_text: "text-white",
        bg_color : 'bg-[#f78da7]'
    }
]


export const danhamzInvestment = [
    {
        title: "The Total Package",
        info: "With our Rent Guarantee service, you’ll not be out of pocket should the unexpected happen. Our Rent Guarantee service comes with nil excess, rent arrears paid for up to 15 months and up to 100,000 legal expenses cover.        ",
        para: "Danhamz is an award-winning Letting Agent in Leeds that provides a complete 360° service for Landlords, helping them to maximise their investment. Our long established  Lettings Team manages over 2,000 happy student and professional tenants.",
        question: "",
        desc: "Enjoy extra peace of mind with our extensive rent protection and legal expenses cover",
    },
    {
        title: "Property in Leeds",
        info: "Our fully managed service aims to maximise your property portfolio.",
        para: "Our fresh, flexible and friendly approach to sales means you get the customer service you deserve, while our top-notch marketing will make your property stand out from the crowd Danhamz’s friendly expert Estate Agents provide a seamless sales service from start to finish",
        question: "",
        desc: "Minimise void periods by having new tenants ready to move in at the end of a tenancy.",
    },
    {
        title: "A Fresh Approach",
        info: "With over a decade of experience in the Leeds rental market, our team are highly adept in letting and managing all kind of properties.        ",
        para: "Danhamz Investments provides a turnkey solution for investors looking to take advantage of investing in Buy to Let property in Leeds. We’ll source the right property, spec and handle any works to optimise the investment, and then let and manage it for you, wherever in the world you are based.",
        desc: "Property Sourcing",
    },
    {
        title: "Peace of Mind",
        info: "At HOP,  we offer a full 360° property service to make your life as a Landlord as hassle-free as possible.",
        para: "Our customer-focused approach to block management delivers a transparent, personal and compliant service, tailored to meet the budget and requirements of your block. We handle every aspect of block management, ensuring continuation of service, compliance and peace of mind.",
        desc: "Full Property Management",
    },
    // {
    //     title: "Refurbs & Renovations",
    //     info: "At HOP,  we offer a full 360° property service to make your life as a Landlord as hassle-free as possible.",
    //     para: "Our customer-focused approach to block management delivers a transparent, personal and compliant service, tailored to meet the budget and requirements of your block. We handle every aspect of block management, ensuring continuation of service, compliance and peace of mind.",
    //     desc: "Full Property Management",
    // },
    // {
    //     title: "Fully Accredited",
    //     info: "At HOP,  we offer a full 360° property service to make your life as a Landlord as hassle-free as possible.",
    //     para: "Our customer-focused approach to block management delivers a transparent, personal and compliant service, tailored to meet the budget and requirements of your block. We handle every aspect of block management, ensuring continuation of service, compliance and peace of mind.",
    //     desc: "Full Property Management",
    // },
    // {
    //     title: "Experience & Advice",
    //     info: "At HOP,  we offer a full 360° property service to make your life as a Landlord as hassle-free as possible.",
    //     para: "Our customer-focused approach to block management delivers a transparent, personal and compliant service, tailored to meet the budget and requirements of your block. We handle every aspect of block management, ensuring continuation of service, compliance and peace of mind.",
    //     desc: "Full Property Management",
    // },
]
export const investInLeeds = [
    {
        title: "Why invest in Leeds?",
        img: "/images/overview2.png",
        lists: ['These are great times for Leeds. The city regularly features on the ‘hottest place to invest’ lists and it’s not hard to see why. Its extensive student and professional population create an incredibly buoyant rental market, and it continues to be a popular choice for big businesses due to its brilliant location, connectivity and talent pool.', 'For investors, there’s an opportunity to get more ‘bang for their buck’ as house prices are more affordable than in many other major cities. Add this to the considerable appetite for rental homes and the generous yields, and it’s no surprise that more and more investors are choosing to tap in to the Leeds market, particularly those based in London or abroad.'],
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        lists_style: false,
        url: "/",
        lists_color: "text-gray-900",
        button:"Find out more",
        btn_bg: "bg-[#152347]",
        btn_text: "text-white",
        bg_color : 'bg-white'
    }
]
export const merketMirrors = [
    {
        title: "The Property Market Mirrors the City",
        img: "/images/overview3.jpg",
        lists: ['The recent surge in property investment in Leeds is not an aberration driven by speculators. It is a reflection of what is going on in the city as a whole. Leeds has become one of THE places to be in the UK with young professionals and entrepreneurs flocking here to take advantage of the countless local amenities Leeds has to offer, including:', 'Leeds Bradford Airport – Less than half an hour from central Leeds is Leeds Bradford International Airport. In 2019 the airport handled 4 million passengers. After the recent lull, it is expected to return to those numbers over the course of the next year.', 'A bustling financial centre – Greater Leeds has a population of nearly 2 million and an economy of more than £64 billion. By 2030 that economy is projected to grow by another 20% with the high tech services sector leading the way.'],
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        lists_style: false,
        url: "/",
        lists_color: "text-gray-900",
        bg_color : 'bg-gray-200'
    }
]

export const localAmenities = [
    {
        title: "Local Amenities in Leeds",
        img: "/images/overview4.jpg",
        lists:['A network of transport links – Leeds has an extensive public transport system that operates like a well-oiled machine. The entire metro area is crisscrossed by local and regional trains, local and long-distance bus lines, motorways, and bike paths.', 'A friendly, welcoming culture – People go where they feel welcome which is why so many are making their way to Leeds. There is none of the buttoned-down defensiveness you’ll find in London and elsewhere. Instead, what you’ll find here are easy-going people ready to engage one another.', 'Thriving nightlife scene – Unlike some cities that become ghost towns when the sun goes down, people come out at night in Leeds. A plethora of lively restaurants, friendly pubs and bars, relaxing cafes, cinemas, dance clubs and more beckon after dark.'],
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        lists_style: false,
        url: "/",
        lists_color: "text-gray-900",
        bg_color : 'bg-gray-200'
    }
]

export const aboutInvestment = [
    {
        title: "About HOP Investments",
        img: "/images/overview5.png",
        lists: ['Ever since we first started to manage properties for Landlords back in 2009, it’s been our standard practice to work closely with our clients to continually assess their portfolios to ensure returns are maximised.', 'By suggesting improvements to our clients portfolios, and managing the works via our talented team of contractors, we routinely increase rental incomes, reduce void periods and transform underperforming lets.', 'Due to clear demand for these services we now offer this model as a stand-alone service for investors under our new division: HOP Investments, headed up by Director, Neil Dawkin.', 'At HOP Investments, not only do we make your existing portfolio work harder for you, but we help source, secure, optimise, let and manage your next investments for you, as a complete turnkey service.'],
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        lists_style: false,
        url: "/",
        lists_color: "text-gray-900",
        bg_color : 'bg-gray-200'
    }
]

export const investwithDanhamz = [
    {
        title: "Invest with Danhamz",
        img: "/images/overview4.jpg",
        lists: ['A complete turnkey service from start to finish','Your own dedicated client account manager to see you through the process', 'Peace of mind: fully compliant, well resourced, award-winning business established in 2009', 'Full end-to-end service in Property Management, Investments, Sales and Lettings', 'Professional and honest advice', 'A personal and tailored partnership to meet your property investment requirement', 'Transparent figures with realistic returns and expert property advice', 'Unparalleled knowledge of the Leeds rental and sales market', 'Ability to identify excellent value investment properties', 'Trusted contractors to complete works in a timely and cost-effective manner'],
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        lists_style: true,
        url: "/",
        lists_color: "text-gray-900",
        bg_color : 'bg-gray-200'
    }
]

export const dealPackaging = [
    {
        title: "Property Sourcing & Deal Packaging",
        img: "/images/overview6.png",
        lists: ['Whether you’re from out of town, just starting out, or a busy property professional who needs hands-on support, we can help build your portfolio. Our Property Sourcing service is perfect for “Armchair Investors”, who wish to leverage our time and expertise to grow their wealth and plan for the future.', 'We do all the legwork for you, leveraging our network and knowledge to source your next acquisition. Depending on your risk level, we’ll find you a standard BTL, a ready-made HMO, or present options in need of renovation and refurbishment.', 'HOP will find you a property, analyse the opportunity and present you with a deal packaged to meet your investment goals. A total end-to-end service, we’ll then oversee the purchase progression and any works required to optimise the property for the rental market, before handing it to our award-winning Lettings Team to take care of letting and ongoing management.'] ,
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        lists_style: false,
        url: "/",
        lists_color: "text-gray-900",
        button:"Property Sourcing",
        btn_bg: "bg-[#152347]",
        btn_text: "text-white",
        bg_color : 'bg-white'
    }
]
export const propertyOtimisation = [
    {
        title: "Refurbs & Property Optimisation",
        img: "/images/overview7.png",
        lists: ['For our Property Sourcing clients and existing Managed Landlords, we help to ensure the property is delivering the best possible returns. Working with a tried and tested team of hand-picked contractors, we offer a professional project management service that covers everything from minor works to full refurbishments, to keep your property in high demand from tenants.', 'To really make the most of your investment, we offer an Optimisation Analysis of your property – or prospective property. After a full consultation with our experts, we’ll make recommendations on how to improve the property, what investment is required, when best to do it, and the expected resulting uplift in rental values. Our extensive experience gives us unique insight into what the discerning tenants of Leeds are looking for in a home, all the while ensuring the works will deliver best value for the investor.'],
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        lists_style: false,
        url: "/",
        lists_color: "text-gray-900",
        button:"Refubs & Property Optimisation",
        btn_bg: "bg-[#152347]",
        btn_text: "text-white",
        bg_color : 'bg-white'
    }
]
export const propertyDevelopment = [
    {
        title: "Property Development in Leeds",
        img: "/images/overview8.png",
        lists: ['We are always on the lookout for new residential property development opportunities throughout Leeds, and the surrounding area.', 'If you have residential property in need of extensive renovation, a plot of land, or even commercial/industrial units ripe for conversion, we’re keen to explore purchase and joint venture options.', 'We pride ourselves on building long term relationships with those we work with. HOP Investments has not only the experience, but also the right team of consultants and contractors, to maximise your property or land value.'],
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        lists_style: false,
        url: "/",
        lists_color: "text-gray-900",
        button:"Property Development",
        btn_bg: "bg-[#152347]",
        btn_text: "text-white",
        bg_color : 'bg-white'
    }
]

export const fixedReturns = [
    {
        title: "Become an Investor with Fixed Returns",
        img: "/images/overview9.png",
        lists: ['We have a pipeline of exciting projects and opportunities for clients that would like to invest in property, without the responsibilities of owning property outright', 'HOP will utilise funds between £50,000 and £250,000 for property development projects on your behalf – offering you a fixed return over 12 months of between 8% and 10%. These returns certainly beat the bank interest rates', 'Becoming an investor with fixed returns is a great way to capitalise on the benefits of the Leeds property market, with a reputable company, without the hassle and risk usually attached to developing property yourself.'],
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        lists_style: false,
        url: "/",
        lists_color: "text-gray-900",
        button:"Contact Us",
        btn_bg: "bg-[#152347]",
        btn_text: "text-white",
        bg_color : 'bg-white'
    }
]

export const ivestorsClub = [
    {
        title: "Join the HOP Investor Club",
        img: "/images/overview10.png",
        lists: ['If don’t require our Property Sourcing service right now, or you are not actively looking for a particular investment, then why not join the HOP Investor Club?', 'At HOP, we offer a specialised HMO Sales Service that is designed to make buying and selling investment property as straightforward as possible, keeping the tenants in situ and continuing to generate rental income throughout the process.', 'For a first look at off-market opportunities, or to receive an Investor Alert when a new property goes on-market, register your details and and we’ll keep you abreast of the latest BTL opportunities that we have for sale.'],
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        lists_style: false,
        url: "/",
        lists_color: "text-gray-900",
        button:"Join our investors club",
        btn_bg: "bg-[#152347]",
        btn_text: "text-white",
        bg_color : 'bg-white'
    }
]

export const overview_testimonials = [
    {
        img: "/images/overview6.png",
        title: "Property Sourcing",
        url: "/report-a-repair",
    },
    {
        img: "/images/overview7.png",
        title: "Property Refubs",
        url: "/tenant-book-2023",
    },
    {
        img: "/images/overview8.png",
        title: "Property Development",
        url: "/tenant-book-2022",
    },

]
// overview page

// property sourcing
export const sourcce_nav = [
    {
        title: "Property Sourcing Leeds",
        title_color: "text-[#152347]",
        img:"/images/source_nav.jpg",
        button: "Get in touch",
        url: "/",
        btn_bg: "bg-[#152347]",
        btn_text: "text-white",
        bg_color : 'bg-[#f78da7]'
    }
]

export const sourceDealPkg = [
    {
        title: "Property Sourcing & Deal Packaging",
        img: "/images/source1.png",
        lists: ['Whether you’re from out of town, just starting out, or a busy property professional who needs hands-on support, we can help build your portfolio. Our Property Sourcing service is perfect for “Armchair Investors”, who wish to leverage our time and expertise to grow their wealth and plan for the future.', 'We do all the legwork for you, leveraging our network and knowledge to source your next acquisition. Depending on your risk level, we’ll find you a standard BTL, a ready-made HMO, or present options in need of renovation and refurbishment.', 'HOP will find you a property, analyse the opportunity and present you with a deal packaged to meet your investment goals. A total end-to-end service, we’ll then oversee the purchase progression and any works required to optimise the property for the rental market, before handing it to our award-winning Lettings Team to take care of letting and ongoing management.'] ,
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        lists_style: false,
        url: "/",
        lists_color: "text-gray-900",
        button:"Call us on 01113 647 56890",
        btn_bg: "bg-[#152347]",
        btn_text: "text-white",
        bg_color : 'bg-white'
    }
]

export const simple_proc = [
    {
        title :" Step 1: Consultation & Strategic Plannig",
        info: [
           { 
            img: "/images/source2.jpg",
            para: 'we reviewing the outcomes achieved and looking at the next steps. It might be that you choose to purchase another property, or multiple properties, all without having to leave home. You may decide to refinance, to release funds to purchase further properties. Or it might be time to plan your exit, in which case we can also handle the sales process for you through our specialist HMO Sales Service, helping you to maximise the sale value of your property, or re-sell to a new investor.',
            // para2: "Or it might be time to plan your exit, in which case we can also handle the sales process for you through our specialist HMO Sales Service, helping you to maximise the sale value of your property, or re-sell to a new investor."
                },
        ],
    },
    {
        title :"Step 2: Sourcing",
        info: [
            {
        img: "/images/source3.jpg",
        para: 'we reviewing the outcomes achieved and looking at the next steps. It might be that you choose to purchase another property, or multiple properties, all without having to leave home. You may decide to refinance, to release funds to purchase further properties. Or it might be time to plan your exit, in which case we can also handle the sales process for you through our specialist HMO Sales Service, helping you to maximise the sale value of your property, or re-sell to a new investor.',
        para2: "Or through our specialist HMO Sales Service, helping you to maximise the sale value of your property, or re-sell to a new investor."
        },
],
    },
    {
        title: "Step 3: Optimisation Review",
        info: [
            { 
        img: "/images/source4.jpg",
        para: ' It might be that you choose to purchase another property, or multiple properties, all without having to leave home. You may decide to refinance, to release funds to purchase further properties. Or it might be time to plan your exit, in which case we can also handle the sales process for you through our specialist HMO Sales Service, helping you to maximise the sale value of your property, or re-sell to a new investor.',
        para2: "Or it might be time to plan your exit, in which case we can also handle the sales process for you through our specialist HMO Sales Service, helping you to maximise the sale value of your property, or re-sell to a new investor."
        },
],
    },
    {
        title: "Step 4: Purchase Progression",
        info: [
            { 
        img: "/images/source5.jpg",
        para: 'we reviewing or multiple properties, all without having to leave home. You may decide to refinance, to release funds to purchase further properties. Or it might be time to plan your exit, in which case we can also handle the sales process for you through our specialist HMO Sales Service, helping you to maximise the sale value of your property, or re-sell to a new investor.',
        para2: "Or it might be time to plan your exit, in which case we can also handle the sales process for you through our specialist HMO Sales Service, helping you to maximise the sale value of your property, or re-sell to a new investor."
        },
],
    },
    {
        title: "Step 5: Refurbishment",
        info: [
            { 
        img: "/images/source6.jpg",
        para: 'we reviewing the outcomes achieved and looking at the next steps. It might be that you choose to purchase another property, or multiple properties, all without having to leave home. You may decide to refinance, to release funds to purchase further properties. Or it might be time to plan your exit, in which case we can also handle the sales process for you through our specialist HMO Sales Service, helping you to maximise the sale value of your property, or re-sell to a new investor.',
        para2: "Or it might be time to plan your exit, in which case we can also handle the sales process for you through our specialist HMO Sales Service, helping you to maximise the sale value of your property, or re-sell to a new investor."
        },
],
},
{
    title: "Step 6: Merketing % Letting",
    info: [
        { 
    img: "/images/source7.jpg",
    para: 'we reviewing the outcomes achieved and looking at the next steps. It might be that you choose to purchase another property, or multiple properties, all without having to leave home. You may decide to refinance, to release funds to purchase further properties. Or it might be time to plan your exit, in which case we can also handle the sales process for you through our specialist HMO Sales Service, helping you to maximise the sale value of your property, or re-sell to a new investor.',
    para2: "Or it might be time to plan your exit, in which case we can also handle the sales process for you through our specialist HMO Sales Service, helping you to maximise the sale value of your property, or re-sell to a new investor."
},
],
},
{
    title: "Step 7: Property Management",
    info: [
        { 
    img: "/images/source8.jpg",
    para: 'we reviewing the outcomes achieved and looking at the next steps. It might be that you choose to purchase another property, or multiple properties, all without having to leave home. You may decide to refinance, to release funds to purchase further properties. Or it might be time to plan your exit, in which case we can also handle the sales process for you through our specialist HMO Sales Service, helping you to maximise the sale value of your property, or re-sell to a new investor.',
    para2: "Or it might be time to plan your exit, in which case we can also handle the sales process for you through our specialist HMO Sales Service, helping you to maximise the sale value of your property, or re-sell to a new investor."

},
],
},
{
    title: "Step 8: Annual Review",
    info: [
        { 
    img: "/images/source9.jpg",
    para: 'Often, the first property is just the start of the journey and at the end of the process, we find ourselves back together at the Strategic Planning stage of the cycle, reviewing the outcomes achieved and looking at the next steps. It might be that you choose to purchase another property, or multiple properties, all without having to leave home. You may decide to refinance, to release funds to purchase further properties.',
    para2: "Or it might be time to plan your exit, in which case we can also handle the sales process for you through our specialist HMO Sales Service, helping you to maximise the sale value of your property, or re-sell to a new investor."
},
],
},
]

export const turnKey = [
    {
        title: "What is a turnkey service?",
        img: "/images/source10.png",
        lists: ['A turnkey service literally means “all you need to do is turn the key”– but in this instance, we even do that for you!', 'Many of our clients never even visit the property themselves, making it the perfect partnership for armchair or overseas investors who are happy to sit back while we put their investment to work.', 'In terms of the service HOP offers, it means we offer the total package. As well as finding you the right property and packaging the right deal, our team will take care of the progression, obtain estimates and project manage any works, prepare and let the property and then move the tenants in', 'All without you ever having to leave your home.'],
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        lists_style: false,
        url: "/",
        lists_color: "text-gray-900",
        bg_color : 'bg-white'
    }
]

export const detailCards = [
    {
        option:'OPTION 1: LOWER RISK "LET AND FORGET"',
        title: "2-3 Bedroom Family BTL",
        img: "/images/source11.png",
        propertyTitle: "Typical Property Profile",
        bedInfo:"2-3 Bedroom Buy to Let Family Home",
        bedInfoList: ['Often semi-detached, mid terraced or back to back property', '2 to 3 storey (or 3 storey with basement)', 'Freehold houses', 'Standard construction, post 1900 to new build', 'Garden, where possible', 'Double glazed and gas central heating', 'Generally in good state of condition', 'Prices from £100,000 to £190,000', 'Renting unfurnished or part furnished', 'Rent from £600 to £1,100 pcm'],
        location:"Location and Demographics",
        locInfoList: ['Within a 15-20 minute drive of Leeds City Centre', 'Close to shops, amenities and transport links', 'In catchment area for good schools', 'Good rental demand from young professionals and families',]
    },
    {
        option:'OPTION 2: HIGHER CASHFLOW',
        title: "3-7 Bed HMO properties",
        img: "/images/source12.png",
        propertyTitle: "Typical Property Profile",
        bedInfo:"3 to 6 Bedroom HMO’s",
        bedInfoList: ['Often semi-detached, mid terraced or back to back property', '2 to 3 storey (or 3 storey with basement)', 'Freehold houses', 'Standard construction, post 1900 to new build', 'Garden, where possible', 'Double glazed and gas central heating', 'Generally in good state of condition', 'Prices from £100,000 to £190,000', 'Renting unfurnished or part furnished', 'Rent from £600 to £1,100 pcm'],
        location:"Location and Demographics",
        locInfoList: ['Within a 15-20 minute drive of Leeds City Centre', 'Close to shops, amenities and transport links', 'In catchment area for good schools', 'Good rental demand from young professionals and families',]
    },
]

export const propertySourcing = [
    {
        title: "Why use HOP for Property Sourcing?",
        img: "/images/source13.png",
        para: "Our clients come from near and far. As near as Leeds and as far as Harrogate, London, Australia, Hong Kong and even Singapore. Each client has a different reason for choosing to engage HOP for Property Sourcing, but typically it’s down to:",
        lists: ['A turnkey service literally means “all you need to do is turn the key”– but in this instance, we even do that for you!', 'Many of our clients never even visit the property themselves, making it the perfect partnership for armchair or overseas investors who are happy to sit back while we put their investment to work.', 'In terms of the service HOP offers, it means we offer the total package. As well as finding you the right property and packaging the right deal, our team will take care of the progression, obtain estimates and project manage any works, prepare and let the property and then move the tenants in', 'All without you ever having to leave your home.'],
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        lists_style: true,
        url: "/",
        lists_color: "text-gray-900",
        bg_color : 'bg-white'
    }
]
export const startedWithDanhamz = [
    {
        title: "Getting started with Danhamz",
        img: "/images/source14.png",
        lists: ['If, after an initial chat, you are interested in proceeding with HOP, we’ll arrange to meet in person (or virtually) so we can go through the different options we offer, what the anticipated outcomes would be, what is involved and how we operate.', 'Our goal is to really understand your needs: what is it that you want to achieve, how quickly you want to achieve it and the risk level you are comfortable at. Once we are agreed, we then move to the next stage.', 'You will complete the required paperwork and we’ll go through due diligence such as AML and proof of funding. Once this is all done, the deposit is payable, which is 60% of the sourcing cost.', 'More often than not, we may already have properties that meet your criteria. If not, we will utilise our market knowledge, contacts and database to track down the right opportunity for you.'],
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        lists_style: false,
        url: "/",
        lists_color: "text-gray-900",
        bg_color : 'bg-white'
    }
]
// property sourcing

// property refubs
export const refub_nav = [
    {
        title: "Property Refurbishments Leeds",
        title_color: "text-white",
        img:"/images/refub_nav.jpg",
        button: "Get in touch",
        url: "/",
        btn_bg: "bg-[#152347]",
        btn_text: "text-white",
        bg_color : 'bg-[#f78da7]'
    }
]

export const propOtimisation = [
    {
        title: "What is Property Optimisation?",
        img: "/images/source14.png",
        lists: ['Property Optimisation is the process of ensuring that your rental property is performing at its best and delivering optimum returns.', 'When it comes to rental property in Leeds, we are experts. And that means we know what it takes to create a popular and profitable investment property. From minor works to full scale project management, our clever team can ensure your asset is generating the best rents.', 'Our Property Optimisation service includes a full analysis of your rental property and recommendations on how to maximise your return and minimise void periods', 'Once we have fully scoped out what improvements will make the biggest difference to your property, we plan and deliver the works with our expert contractors – transforming your property into a high performing let.'],
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        lists_style: false,
        url: "/",
        lists_color: "text-gray-900",
        bg_color : 'bg-white'
    }
]

export const responseRefurbish = [
    {
        title: "Clear Reasons to Refurbish",
        img: "/images/refub0.jpg",
        lists: ['Regardless of whether you’re planning a full-scale property refurbishment, or a simple lick of paint ready for a new tenant, there are so many reasons to refurbish your Leeds property. Here’s just a few:', 'Adding value: Whether you need a new tenant, are looking to sell, or quite simply just like the idea of adding value to your property – you might be surprised at how effective a small refurbishment project can be. In some cases, a bit of fresh paint, new light fittings and a new shower could be all you need to put some value on your property and make it more attractive to buyers and tenants.', 'Cost-effective: Finding and buying a brand-new property can be an expensive and time-consuming business. On the other hand, a refurbishment project can meet any need and take less time. This is particularly the case if you’re already happy with the overall structure of your property.', 'Easier life: Refurbishment isn’t just about adding value to a property or making it look better. Think about anything in your property that causes you a constant headache or stress, perhaps in the kitchen or bathroom; a refurbishment project can take that irritating burden off your shoulders once and for all.'],
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        lists_style: false,
        url: "/",
        lists_color: "text-gray-900",
        bg_color : 'bg-white'
    }
]

export const howITWorks = [
    {
        title: "How does it work?",
        img: "/images/refub1.png",
        lists: ['The Property Optimisation process begins with a full analysis to review and assess what changes will make the biggest impact when it comes to making your investment attractive to contemporary tenants and, ultimately, more profitable.', 'This could be as simple as new carpets, décor and furnishings, or perhaps a new bathroom or kitchen.', 'It can even extend to altering the layout, adding rooms, converting a basement, adding an extension or a change of use. All of which – and more –  can be handled by our talented team.'],
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        lists_style: false,
        url: "/",
        lists_color: "text-gray-900",
        bg_color : 'bg-white'
    }
]

export const strategicApproach = [
    {
        title: "A strategic approach",
        img: "/images/refub2.png",
        lists: ['It is not only the quality of the property that impacts the income, the rental strategy is equally as important.', 'We can offer guidance on: whether to rent as a HMO or on a room by room basis; which tenant types would be best to market to; the prime time to do the works; or even organising a pre-let of the property to minimise risk and loss of income.', 'We pride ourselves on building long-standing relationships with Landlords and will work with them to optimise their property on an ongoing, cyclical basis. It’s also a key part of our Property Sourcing service, as well as being a fundamental part of any HOP Development.', 'The outcome of the Property Optimisation analysis is a robust plan for works and rental strategy, designed to generate the maximum return.'], 
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        lists_style: false,
        url: "/",
        lists_color: "text-gray-900",
        bg_color : 'bg-white'
    }
]

export const hassleFreeRefub = [
    {
        title: "Hassle-free refurbishment",
        img: "/images/refub3.png",
        lists: ['Each asset generally has a lifecycle: starting at freshly refurbished and ending at complete renovation required', 'However, it’s not just wear and tear that you need to be mindful of – keeping things modernised is important too.', 'Rental demand, decor trends and tenant expectations change over time, which can all have an impact on occupancy, rent levels, and the property’s overall value.', 'As well as advising and specifying recommended changes, we’ll also implement them for you, using our team of carefully selected contractors.'], 
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        lists_style: false,
        url: "/",
        lists_color: "text-gray-900",
        bg_color : 'bg-white'
    }
]

export const trustedTeam = [
    {
        title: "A trusted team",
        img: "/images/refub4.png",
        lists: ['Once a decision is made to proceed, HOP will get full quotations for the work from our hand-picked team of retained contractors, many of whom have worked with us since we started. Tried and tested, they appreciate the exacting standards and competitive cost that we expect.', 'We will review and discuss the estimates with you and, once agreed, we will engage the contractors to start work. Your HOP Project Manager will then personally oversee the works from start to finish, in line with the best possible timing strategy for the market.', 'HOP has refurbished countless properties since 2009, enabling us to hone the specification, service, quality and pricing – to deliver marked improvements time and time again.'],
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        lists_style: false,
        url: "/",
        lists_color: "text-gray-900",
        bg_color : 'bg-white'
    }
]
export const lettingYouProperty = [
    {
        title: "Letting your property",
        img: "/images/refub5.png",
        lists: ['As the works on your buy to let property come to an end, we will add the finishing touches and details to complete the transformation.', 'Soft furnishings and decor can make all the difference, and we can fully dress and furnish your property ready for tenants to move straight in to.', 'It’s at this point that our award-winning Lettings Team will also swing into action and quickly let the property at the uplifted rental level. They will capture new marketing photos and 360-degree virtual tours, showcasing the newly refurbished property and ensuring your property stands out from the crowd.', 'Our proven marketing techniques will ensure tenants are secured at the new rental levels as soon as possible, in order to maximise your returns.'],
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        lists_style: false,
        url: "/",
        lists_color: "text-gray-900",
        bg_color : 'bg-white'
    }
]

export const transformProperty = [
    {
        title: "Why Choose Us to Transform Your Property",
        img: "/images/refub6.jpg",
        lists: ['We have been serving the Leeds population for years and are proud to offer support with property refurbishment in Leeds and its surrounding suburbs.', 'The Leeds rental market is a competitive place full of discerning tenants. Not only do we have rich experience as property developers working on a range of property maintenance and refurbishment projects, but we also have lots of experience and knowledge about the local area as well as what local tenants are looking for.', 'All of this, plus our commitment to delivering the best possible service to you and our long line of happy customers, makes us an excellent choice for your refurbishment needs, from minor works to full scale projects.', 'Let us take the hassle out of your refurbishment project and get your property ready for renting with our tailored Property Optimisation service.'],
        title_color: "text-[#152347]",
        info_color: "text-gray-900",
        lists_style: false,
        url: "/",
        lists_color: "text-gray-900",
        bg_color : 'bg-white'
    }
]

export const redubStudies = [
    {
        img: "/images/refub7.jpg",
        title: "3 Bed HMO in Headingley",
        para: "Works: The key objective was to make room by expanding the communal areas and adding an en-suite, as well as fully upgrading the spec throughout. We chose materials and finishes that would not only be hardwearing but also very attractive to prospective tenants.",
        info: "All our HOP student properties can be all-inclusive, which means you don’t have to worry about bills. We take care of it all for you so you can enjoy a stress-free student renting experience.",
    },
    {
        img: "/images/refub8.jpg",
        para: "Works: The key objective was to make room by expanding the communal areas and adding an en-suite, as well as fully upgrading the spec throughout. We chose materials and finishes that would not only be hardwearing but also very attractive to prospective tenants.",
        title: "4 Bed HMO in Hyde Park",
        info: "We’ve got you covered. with 3-bedrooms or more, then our ESSENTIALS Bills Package is included as standard. That’s Gas, Electric, Water & Broadband – all sorted with your rent!",
    },
    {
        img: "/images/refub9.jpg",
        para: "Works: The key objective was to make room by expanding the communal areas and adding an en-suite, as well as fully upgrading the spec throughout. We chose materials and finishes that would not only be hardwearing but also very attractive to prospective tenants.",
        title: "4 Bed HMO in Woodhouse",
        info: "There are no signing fees to pay when you rent with us.",
    },
    {
        img: "/images/refub10.jpg",
        para: "Works: The key objective was to make room by expanding the communal areas and adding an en-suite, as well as fully upgrading the spec throughout. We chose materials and finishes that would not only be hardwearing but also very attractive to prospective tenants.",
        title: "4 Bed Through-Terrace In Hyde Park",
        info: "We know the student market inside out and have been doing this for well over a decade, so you know you are in safe hands. Plus we are Unipol Code Accredited too!",
    },
]
// property refubs


// propert-update form 
export const propertyUpdateForm = [
    {
        label: "Property Name",
        name: "propertyName",
        type: "text",
        placeholder: "Property Name"
    },
    {
        label: "Availability",
        name: "isPropertyAvailable",
        type: 'select',
        placeholder: "Select Availability",
        options: [
            {label: "Yes", value: true},
            {label: "No", value: false},
        ]
    },
    {
        label: "Property Type",
        name: "propertyType",
        type: 'select',
        placeholder: "Property Type",
        options: [
            {label: "Bunglow", value: "Bunglow"},
            {label: "Share House", value: "Share House"},
            {label: "Flat/Appartment", value: "Flat"},
            {label: "Detached House", value: "Detached House"},
            {label: "Semi Detached House", value: "Semi Detached House"},
        ]
    },
    {
        label: "Share House",
        name: "shareHouse",
        type: 'select',
        placeholder: "Select Type",
        options: [
            {label: "Yes", value: true},
            {label: "No", value: false},
        ]
    },
    {
        label: "Monthly Price",
        name: "pricePerMonth",
        type: 'number',
        placeholder: "Monthly Price"
    },
    {
        label: "Weekly Price",
        name: "pricePerWeek",
        type: 'number',
        placeholder: "Weekly Price"
    },
    {
        label: "Furnished/Unfurnished",
        name: "furnished",
        type: 'select',
        placeholder: "Choose a category",
        options: [
            {label: "Furnished", value: "furnished"},
            {label: "Part Furnished", value: "part-furnished"},
            {label: "Unfurnished", value: "unfurnished"},
        ]
    },
    {
        label: "Bedrooms",
        name: "bedrooms",
        type: 'select',
        placeholder: "Choose number of rooms",
        options: [
            {label: "1", value: 1},
            {label: "2", value: 2},
            {label: "3", value: 3},
            {label: "4", value: 4},
            {label: "5", value: 5},
            {label: "6", value: 6},
            {label: "7", value: 7},
            {label: "8", value: 8},
            {title: "9 Bedroom", value: 9},
            {title: "10 Bedroom", value: 10},
        ]
    },
    {
        label: "Bathrooms",
        name: "bathrooms",
        type: 'select',
        placeholder: "Choose number of bathrooms",
        options: [
            {label: "1", value: 1},
            {label: "2", value: 2},
            {label: "3", value: 3},
            {label: "4", value: 4},
        ]
    },
    {
        label: "Bills",
        name: "bills",
        type: 'select',
        placeholder: "Select a category",
        options: [
            {label: "Bills Included", value: 'Bills Included' },
            {label: "Some", value: "some"},
            {label: "Bills Not Included", value: 'Bills Not Included' },
        ]
    },
    {
        label: "Features",
        type: "select", name: "features",
        icon: <Icon icon="material-symbols:feature-search" />, 
        options: [
            {label: "No Preference", value: ""}, 
            {label: "Video Viewing", value: "Video Viewing"},
            {label: "Garden", value: "Garden"},
            {label: "Parking", value: "Parking"},
            {label: "Garage", value: "Garage"},
        ]
    },
    {
        label: "Reception",
        name: "reception",
        type: 'select',
        options:[
            {label: "1", value: '1'},
            {label: "2", value: '2'},
            {label: "3", value: '3'},
            {label: "4", value: '4'},
        ]
    },
  
    {
        label: 'Deposit',
        name: "deposit",
        type: 'number',
        placeholder: "Enter the details",
    },
    {
        label: 'Property Location',
        name: "location",
        type: 'text',
        placeholder: "Enter the property location",
    },
    {
        label: 'Property Description',
        name: "description",
        type: 'textarea',
        placeholder: "Enter the details",
    },
    
    {
        label: 'Additional Guide',
        name: "aditionalGuide",
        type: 'textarea',
        placeholder: "Enter the details",
    },
    {
        label: 'Council Tax',
        name: "counselTax",
        type: 'text',
        placeholder: "Enter the details",
    },
    {
        label: 'Available Date',
        name: "availableDate",
        type: 'date',
        placeholder: "Enter the date",
    },
    {
        label: "Available From",
        name: "isAvailableFrom",
        type: 'select',
        placeholder: "Select Availability",
        options: [
            {label: "Available anytime", value: 'anytime'},
            {label: "Immediately", value: 'immediately'},
            {label: "Within 1 month", value: 'within 1 month'},
            {label: "Within 3 months", value: 'within 3 months'},
            {label: "Within 6 months", value: 'within 6 months'},
            {label: "Within 1 year", value: 'within 1 year'},

        ]
    },
    {
        label: 'Virtual Tour',
        name: "videoLink",
        type: 'text',
        placeholder: "Enter the link",
    },
    {
        label: 'Epc Link',
        name: "epc",
        type: 'text',
        placeholder: "Enter the link",
    },


]
export const propertyUpdateFormSales = [
    {
        label: "Property Name",
        name: "propertyName",
        type: "text",
        placeholder: "Property Name"
    },
    {
        label: "Property Type",
        name: "propertyType",
        type: 'select',
        placeholder: "Property Type",
        options: [
            {label: "Flat/Appartment", value: "Flat"},
            {label: "Bunglow", value: "Bunglow"},
            {label: "Flat", value: "Flat"},
        ]
    },
    {
        label: "Price",
        name: "price",
        type: 'number',
        placeholder: "Price"
    },
    {
        label: "Furnished/Unfurnished",
        name: "furnished",
        type: 'select',
        placeholder: "Choose a category",
        options: [
            {label: "Furnished", value: "furnished"},
            {label: "Unfurnished", value: "unfurnished"},
        ]
    },
    {
        label: "Bedrooms",
        name: "bedrooms",
        type: 'select',
        placeholder: "Choose number of rooms",
        options: [
            {label: "1", value: 1},
            {label: "2", value: 2},
            {label: "3", value: 3},
            {label: "4", value: 4},
            {label: "5", value: 5},
            {label: "6", value: 6},
            {label: "7", value: 7},
            {label: "8", value: 8},
            {title: "9 Bedroom", value: 9},
            {title: "10 Bedroom", value: 10},
        ]
    },
    {
        label: "Bathrooms",
        name: "bathrooms",
        type: 'select',
        placeholder: "Choose number of bathrooms",
        options: [
            {label: "1", value: 1},
            {label: "2", value: 2},
            {label: "3", value: 3},
            {label: "4", value: 4},
        ]
    },
    {
        label: "Bills",
        name: "bills",
        type: 'select',
        placeholder: "Select a category",
        options: [
            {label: "Bills Included", value: 'Bills Included' },
            {label: "Bills Not Included", value: 'Bills Not Included' },
        ]
    },
    {
        label: "Features",
        type: "select", name: "features",
        icon: <Icon icon="material-symbols:feature-search" />, 
        options: [
            {label: "No Preference", value: ""}, 
            {label: "Video Viewing", value: "Video Viewing"},
            {label: "Garden", value: "Garden"},
            {label: "Parking", value: "Parking"},
            {label: "Garage", value: "Garage"},
        ]
    },
    {
        label: "Reception",
        name: "reception",
        type: 'select',
        options:[
            {label: "1", value: '1'},
            {label: "2", value: '2'},
            {label: "3", value: '3'},
            {label: "4", value: '4'},
        ]
    },
    {
        label: 'Deposit',
        name: "deposit",
        type: 'number',
        placeholder: "Enter the details",
    },
    {
        label: 'Property Location',
        name: "location",
        type: 'text',
        placeholder: "Enter the property location",
    },
    {
        label: 'Property Description',
        name: "description",
        type: 'textarea',
        placeholder: "Enter the details",
    },
    
    {
        label: 'Additional Guide',
        name: "aditionalGuide",
        type: 'textarea',
        placeholder: "Enter the details",
    },
    {
        label: 'Council Tax',
        name: "counselTax",
        type: 'text',
        placeholder: "Enter the details",
    },
    {
        label: 'Available Date',
        name: "availableDate",
        type: 'date',
        placeholder: "Enter the date",
    },
    {
        label: 'Virtual Tour',
        name: "videoLink",
        type: 'text',
        placeholder: "Enter the link",
    },
    {
        label: 'Epc Link',
        name: "epc",
        type: 'text',
        placeholder: "Enter the link",
    },


]
// propert-update form

export const emailForm = [
    {
        label: "Full Name",
        name: "name",
        type: "text",
        placeholder: "Enter your name",
        rules: {
            required: {
                value: true,
                message: "Name is required"
            }
        }
    },
    {
        label: "Email",
        name: "email",
        type: "email",
        placeholder: "Enter your email",
        rules: {
            required: {
                value: true,
                message: "Email is required",
            }
        }    
    },
    {
        label: "Phone Number",
        name: "phoneNumber",
        type: "number",
        placeholder: "Enter your phone number",
        rules: {
            required: {
                value: true,
                message: "Phone number is required"
            }
        } 
    },
    {
        label: "Message",
        name: "message",
        type: "textarea",
        placeholder: "Enter your phone message",
        rules: {
            required: {
                value: true,
                message: "Message is required"
            }
        } 
    },
]