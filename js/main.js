// dark mode
let body = document.querySelector("body");
let modeSwitch = body.querySelector("#switch");
let modeSwitch2 = body.querySelector("#switch2");

modeSwitch.onclick = function () {
    body.classList.toggle("dark");
};

modeSwitch2.onclick = function () {
    body.classList.remove("dark");
};

// sidebar
let dot = body.querySelector("#dot");
let sidebar = body.querySelector(".main-meue");
dot.onclick = function () {
    sidebar.classList.toggle("active");
};

// search
const search = () => {
    const searchbox = document.getElementById("search").value.toUpperCase();
    const storeitems = document.getElementById("product-list");
    const product = document.querySelectorAll(".product");
    const pname = storeitems.getElementsByTagName("a");

    for (var i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('a')[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML;

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
            product[i].style.display = "";
            } else {
            product[i].style.display = "none";
            }
        }
    }
} 

// product
const product = [
    {
        "id": 1,
        "name": "Apple Watch Series 5",
        "price": 339.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/1.3b312012.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 2,
        "name": "Apple iPhone 11 (64GB, Black)",
        "price": 669.99,
        "rating": 5,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/2.1aba2cea.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 3,
        "name": "Apple iMac 27-inch",
        "price": 999.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/3.29c766f8.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 4,
        "name": "OneOdio A71 Wired Headphones",
        "price": 49.99,
        "rating": 3,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/4.73f34744.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 5,
        "name": "Apple - MacBook Air® (Latest Model) - 13.3 Display - Silver",
        "price": 999.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/5.c5b188e5.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 6,
        "name": "Switch Pro Controller",
        "price": 429.99,
        "rating": 3,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/6.833c8951.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 7,
        "name": "Google - Google Home - White/Slate fabric",
        "price": 129.29,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/1.3b312012.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "google",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 8,
        "name": "Sony 4K Ultra HD LED TV",
        "price": 7999.99,
        "rating": 5,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/8.c170e8ca.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 9,
        "name": "OnePlus 7 Pro",
        "price": 14.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/9.3170c803.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "Philips",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 10,
        "name": "Logitech K380 Wireless Keyboard",
        "price": 81.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/10.a197f12f.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "Logitech",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 11,
        "name": "Nike Air Max",
        "price": 81.99,
        "rating": 5,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/11.196910d4.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "Nike",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 12,
        "name": "New Apple iPad Pro",
        "price": 799.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/12.87084176.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "apple",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 13,
        "name": "Vankyo leisure 3 mini projector",
        "price": 99.99,
        "rating": 2,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13.e7c28d6c.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "Vankyo Store",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 14,
        "name": "Wireless Charger 5W Max",
        "price": 10.83,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/14.df784ed6.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "3M",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 15,
        "name": "Laptop Bag",
        "price": 29.99,
        "rating": 5,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/15.2b721276.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "TAS",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 16,
        "name": "Adidas Mens Tech Response Shoes",
        "price": 54.59,
        "rating": 5,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/16.a9b3f7ab.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "Adidas",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 17,
        "name": "Oculus Quest All-in-one VR",
        "price": 645,
        "rating": 1,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/18.fac01044.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "Oculus",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 18,
        "name": "Handbags for Women Large Designer bag",
        "price": 39.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/17.024d4a22.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "Hobo",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 19,
        "name": "Giotto 32oz Leakproof BPA Free Drinking Water",
        "price": 16.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/19.1c1f4cf1.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "3M",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 20,
        "name": "PlayStation 4 Console",
        "price": 339.95,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/20.ad629602.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "Sony",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 21,
        "name": "Bugani M90 Portable Bluetooth Speaker",
        "price": 56,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/21.940a62ff.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "Bugani",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 22,
        "name": "Toshiba Canvio Advance 2TB Portable External Hard Drive",
        "price": 69.99,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/23.ec286c40.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "Toshiba",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 23,
        "name": "Tile Pro - High Performance Bluetooth Tracker",
        "price": 29.99,
        "rating": 3,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/22.450e8e03.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "Tile",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 24,
        "name": "Ronyes Unisex College Bag Bookbags for Women",
        "price": 23.99,
        "rating": 2,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/24.79a14740.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "Ronyes",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 25,
        "name": "Willful Smart Watch for Men Women 2020,",
        "price": 29.99,
        "rating": 5,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/25.e1f92d21.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "Willful",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 26,
        "name": "VicTsing Wireless Mouse,",
        "price": 10.99,
        "rating": 3,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/27.9b4c2313.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "VicTsing",
        "available": true,
        "colors": ["red", "purple", "green"]
    },
    {
        "id": 27,
        "name": "Bose Frames Tenor - Rectangular Polarized, Bluetooth Audio Sunglasses",
        "price": 249,
        "rating": 4,
        "img": "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/26.257af602.png",
        "discription": "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby.  is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium.",
        "brand": "Bose",
        "available": true,
        "colors": ["red", "purple", "green"]
    }
];

let perPage = 9;
let currentPage = 1;
let start = 0;
let end = perPage;
let totalPages = Math.ceil(product.length / perPage);


function getCurrentPage(currentPage) {
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
}

function renderProduct() {
    let html = '';
    let content = product.map((item, index) => {
        if (index >= start && index < end) {
            html += '<div class="product data-category="">';
            html += '<img src=' + item.img + '>';
            html += '<div class="stars">';
            html += '<img src="/images/raty/star-on-2.png" alt="">';
            html += '<img src="/images/raty/star-half-2.png" alt="">';
            html += '<img src="/images/raty/star-half-2.png" alt="">';
            html += '<img src="/images/raty/star-half-2.png" alt="">';
            html += '<span class="price">' + '$' +item.price + '</span>';
            html += '</div>'
            html += '<a href="#" class="text">' + item.name + '</a>';
            html += '<p>' + item.discription + '</p>';
            html += '<div class="btns">'
            html += '<button class="first">' + 'Wishlist';
            // html += '<i class= "bx bx-heart"' ;
            // html += '</i>'
            html += '</button>';
            html += '<button class="secound">' + 'View In Cart';
            // html += '<i class= "bx bx-cart"';
            // html += '</i>'
            html += '</button>';
            html += '</div>';
            html += '</div>';
            return html;
        }
        // console.log(html);
    });
    document.getElementById('product-list').innerHTML = html;
}
renderProduct();

function changePage() {
    const currentPages = document.querySelectorAll('.number-page li');
    // console.log(currentPage)
    for (let i = 0; i < currentPages.length; i++) {
        currentPages[i].addEventListener('click', () => {
            let value = i + 1;
            // console.log(value);
            currentPage = value;
            $('.number-page li').removeClass('active');
            currentPages[i].classList.add('active')
            getCurrentPage(currentPage);
            renderProduct();
        })
    }
}
changePage()

// pagination
let btnNext = document.querySelector('.btn-next');
let btnPrev = document.querySelector('.btn-prev');

btnNext.addEventListener('click', () => {
    currentPage++;
    
    if (currentPage > totalPages) {
        currentPage = totalPages;
    }
    if (currentPage == totalPages) {
        $('.btn-next').addClass('btn-active');
    } else {
        $('.btn-next').removeClass('btn-active');
    }
    console.log(currentPage);
    const btnPrev = document.querySelector('.btn-prev');
    btnPrev.classList.remove('btn-active');
    $('.number-page li').removeClass('active');
    $(`.number-page li:eq(${currentPage - 1})`).addClass('active');
    getCurrentPage(currentPage);
    renderProduct();
})

btnPrev.addEventListener('click', () => {
    currentPage--;
    
    if (currentPage < 1) {
        currentPage = 1;
    }
    if (currentPage == 1) {
        $('.btn-prev').addClass('btn-active');
    } else {
        $('.btn-prev').removeClass('btn-active');
    }
    const btnNext = document.querySelector('.btn-next');
    btnNext.classList.remove('btn-active');
    $('.number-page li').removeClass('active');
    $(`.number-page li:eq(${currentPage - 1})`).addClass('active');
    getCurrentPage(currentPage);
    renderProduct();
})


// scroll to top
let up = document.querySelector(".top");

window.onscroll = function () {
    console.log(window.scrollY);
    if (window.scrollY >= 300) {
        up.style.display = "block";
    } else {
        up.style.display = "none";
    }
   //  this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

up.onclick = function () {
    window.scrollTo({
    top: 0,
    behavior: "smooth",
    });
};
