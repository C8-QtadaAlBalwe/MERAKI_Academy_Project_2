const body=$('body');
//=========================================================================================//
                         //home page//
//=========================================================================================//
const home=$('<section id="Home"></section>');
const navBar=$('<div class="navbar"></div>');
const div_1Navbar=$('<div class="word-logo">Shop<Span>Store</Span></div>');
const unorderList=$('<ul class="all-option"></ul>');
const listItem_1=$('<li class="option-nav-1"><a>Home</a></li>')
const listItem_2=$('<li class="option-nav"><a>Shooping Cart</a></li>')
const listItem_3=$('<li class="option-nav"><a>Contant Us</a></li>')
const listItem_4=$('<li class="option-nav"><a>white mode</a></li>')
const listItem_5=$('<li class="option-nav"><a>mode default</a></li>')
//============= appends =======================//
body.append(home);
home.append(navBar);
navBar.append(div_1Navbar);
navBar.append(unorderList);
unorderList.append(listItem_1);
unorderList.append(listItem_2);
unorderList.append(listItem_3);
unorderList.append(listItem_4);
unorderList.append(listItem_5);
//===========================================================//
//======================== back functions ===================//
//===========================================================//
listItem_2.on('click',goToShopping)
listItem_3.on('click',goToContactUs)
listItem_4.on('click',modeWhite)
listItem_5.on('click',modeDark,)

//====================================================//
/*============== navbar =============================*/
const div_2ImgHeader=$('<div class="img-header"></div>')
const line_head_1=$('<div class="line-head-1"></div>')
const h2_head=$('<h2>Book Store</h2>')
const p_head=$('<p>The biggest online book store</p>')
//============= appends =======================//
home.append(div_2ImgHeader);
div_2ImgHeader.append(line_head_1);
div_2ImgHeader.append(h2_head);
div_2ImgHeader.append(p_head);

//===================================================//
/*============== img head ===========================*/
const div_3Contant =$('<div class="contant"></div>')
const categorises=$('<div class="Categorise"></div>')
const h1_contant=$('<h1>Categorises</h1>')
//============= appends =======================//
home.append(div_3Contant);
div_3Contant.append(categorises);;
categorises.append(h1_contant);

//====================================================//
/*================ cards ============================*/
const div_4Cards=$('<div class="cards"></div>')

const TypeCard1=$('<div class="Type-card"></div>')
const imgCard1=$('<img src="./picture/history-book.jpg">')
const button1=$('<button id="1">Historical Categorise</button>')

const TypeCard2=$('<div class="Type-card"></div>')
const imgCard2=$(' <img src="./picture/book games.png">')
const button2=$('<button id="2">Gmaes Categorise</button>')

const TypeCard3=$('<div class="Type-card"></div>')
const imgCard3=$('<img src="./picture/vintage-chemical-lab-books-closeup-70216103.webp">')
const button3=$('<button id="3">Chemical Categorise</button>')

const TypeCard4=$('<div class="Type-card"></div>')
const imgCard4=$('<img src="./picture/th.jpg">')
const button4=$('<button id="4">Arts Categorise</button>')
//============= appends =======================//
div_3Contant.append(div_4Cards);
div_4Cards.append(TypeCard1);
div_4Cards.append(TypeCard2);
div_4Cards.append(TypeCard3);
div_4Cards.append(TypeCard4);

TypeCard1.append(imgCard1);
TypeCard1.append(button1);

TypeCard2.append(imgCard2);
TypeCard2.append(button2);

TypeCard3.append(imgCard3);
TypeCard3.append(button3);

TypeCard4.append(imgCard4);
TypeCard4.append(button4);
//=========================================================================================//
                         //login page//
//=========================================================================================//
const login=$('<section id="login"></div>')
const line_5=$('<div class="line-5"></div>')
const line_6=$('<div class="line-6"></div>')
const form=$('<div class="form"></div>')
const h2_form=$('<h2>Login Here</h2>')
const input_email=$(' <input type="email" name="email" placeholder="Enter Email Here" required>')
const input_password=$('<input type="password" name="" placeholder="Enter password Here" required>')
const input_credit=$('<input type="password" name="email" placeholder="00-000-0000" required  min="6" max="6" >')
const button_form=$(' <button class="btnn">Login</button>')
const p_form=$('<p class="liw"> login in with</p>')
const icons=$(' <div class="icons"></div>')
const a_icons=$('<a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a> <a href="https://www.instagram.com/"target="_blank"><i class="fab fa-instagram"></i></a><a href="https://accounts.google.com/"target="_blank"><i class="fab fa-google"></i></a><a href="https://signup.live.com/" target="_blank"><i class="fab fa-skype"></i></a><a href="https://www.linkedin.com/"target="_blank"><i class="fab fa-linkedin"></i></a> ')
//============= appends =======================//
body.append(login);
login.append(line_5);
login.append(line_6);
login.append(form);
form.append(h2_form);
form.append(input_email);
form.append(input_password);
form.append(input_credit);
form.append(button_form);
form.append(p_form);
form.append(icons);
icons.append(a_icons);
//================ other layout css ==================================//
login.hide()
//===========================================================//
//======================== back functions ===================//
//===========================================================//
button_form.on('click',checkInput)

//=========================================================================================//
                         //contact us//
//=========================================================================================//
const contact_us =$('<section id="contact-us"></div>')
const title=$('<div class="title-2"></div>')
const line_1 =$('<div class="line-1"></div>')
const line_2 =$('<div class="line-2"></div>')
const h1_title=$('<h1>Contact us</h1>')
const button_contact_us=$('<button> Back To Home</button>')

const card1=$('<div class="card"></div>')
const icon_card_1=$('<div class="icon"><i class="fas fa-phone"></i></div>')
const info_card_1=$('<div class="info"></div>')
const h3_info_1=$('<h3> phone </h3>')
const p_info_1=$('<p>my phone number : 0786535228</p>')

const card2=$('<div class="card"></div>')
const icon_card_2=$('<div class="icon"><i class="fas fa-envelope"></i></div>')
const info_card_2=$('<div class="info"></div>')
const h3_info_2=$('<h3> Email</h3>')
const p_info_2=$(' <p>my email : <br> qtadaahmad@gmail.com </p>')

const card3=$('<div class="card"></div>')
const icon_card_3=$('<div class="icon"><i class="fab fa-skype"></i></div')
const info_card_3=$('<div class="info"></div>')
const h3_info_3=$('<h3> skype</h3>')
const p_info_3=$('<p>MY account on skybe:<br>qtadaahmad@gmail.com</p>')

//============= appends =======================//
body.append(contact_us);
contact_us.append(title);
title.append(line_1);
title.append(line_2);
title.append(h1_title);
h1_title.append(button_contact_us);

contact_us.append(card1);
card1.append(icon_card_1);
card1.append(info_card_1);
info_card_1.append(h3_info_1);
info_card_1.append(p_info_1);

contact_us.append(card2);
card2.append(icon_card_2);
card2.append(info_card_2);
info_card_2.append(h3_info_2);
info_card_2.append(p_info_2);

contact_us.append(card3);
card3.append(icon_card_3);
card3.append(info_card_3);
info_card_3.append(h3_info_3);
info_card_3.append(p_info_3);

//================ other layout css ==================================//
contact_us.hide()

//===========================================================//
//======================== back functions ===================//
//===========================================================//
button_contact_us.on('click',backToHome)

//===========================================================//
//=========================== book-information  =============//
//===========================================================//
const book_information=$('<section id="book-information"></div>');
const page_info=$('<div class="page-info"></div>')
const image_book=$('<div class="image-book"></div>')
const img_info=$(' <img src="./picture/chimcal book -2.jpg">')
const line_3=$('<div class="line-3"></div>')
const line_4=$('<div class="line-4"></div>')
const Book_description=$('<div class="Book-description"></div>')
const h1_book_description=$('<h1>Book Discription</h1>')
const p_book_description=$('<P>Lorem, ipsum dolor sit amet consectetu</p>')
const line_button=$('<div class="line-button"></div>')
const button_backToHome=$('<button>Back to Home</button>')
//============= appends =======================//
body.append(book_information);
book_information.append(page_info);
page_info.append(image_book);
image_book.append(img_info);
page_info.append(line_3);
page_info.append(line_4);
page_info.append(Book_description);
Book_description.append(h1_book_description);
Book_description.append(p_book_description);
page_info.append(line_button);
page_info.append(button_backToHome);
//================ other layout css ==================================//
book_information.hide()
//===========================================================//
//======================== back functions ===================//
//===========================================================//
button_backToHome.on('click',backToHome);

//=========================================================================================//
                         //shopping cart//
//=========================================================================================//
const shoppingCart=$('<section id="shopping-cart"></section>')
const title_3=$('<div class="title-3"><div class="line-1"></div><div class="line-2"></div></div>')
const h1_title_3=$('<h1>Shopping Cart</h1>')
const books_add=$('<div class="books-added"></div>')
const sale_book =$('<div class="sale-book"></div>')
const img_sale_book=$('<img src="./picture/art book -1.jpg">')
const p_sale_book=$('<p>price:100$</p>')
const button_undo=$('<button>Back to Home</button>')
//============= appends =======================//
body.append(shoppingCart);
shoppingCart.append(title_3);
title_3.append(h1_title_3);
shoppingCart.append(books_add);
books_add.append(sale_book);
sale_book.append(img_sale_book);
sale_book.append(p_sale_book);
sale_book.append(button_undo);
//================ other layout css ==================================//
shoppingCart.hide();
//===========================================================//
//======================== back functions ===================//
//===========================================================//
sale_book.on('click',goToInformationBook);

//=========================================================================================//
                         //books of categoreses//
//=========================================================================================//
const bookOfCategorises=$('<section id="books-of-categorises"></section>')
const title_4=$('<div class="title-4"><div class="line-1"></div><div class="line-2"></div></div>')
const h1_title_4=$('<h1>Historical</h1>')
const books_2=$('<div class="books"><div>')

//============= appends =======================//
body.append(bookOfCategorises);
bookOfCategorises.append(title_4);
title_4.append(h1_title_4);
bookOfCategorises.append(books_2);
//================ other layout css ==================================//
bookOfCategorises.hide()
//===========================================================//
//======================== back functions ===================//
//===========================================================//


//=============================================================//
//====================== Move  functions ======================//
//=============================================================//
function goToShopping(){
    home.hide(700,'linear');
    login.hide(700,'linear');
    contact_us.hide(700,'linear');
    bookOfCategorises.hide(700,'linear')
    book_information.hide(700,'linear');
    shoppingCart.show();
}
function goToContactUs(){
    home.hide(700,'linear');
    login.hide(700,'linear');
    contact_us.show();
    bookOfCategorises.hide(700,'linear')
    book_information.hide(700,'linear');
    shoppingCart.hide(700,'linear');
}
function goToInformationBook(){
    shoppingCart.hide(700,'linear','linear');
    book_information.show(700,'linear','linear');
}
function gotologin(){
    bookOfCategorises.hide(700,'linear','linear');
    login.show(700);
}
function backToHome(){
    book_information.hide(700,'linear','linear');
    home.show(700,'linear','linear');
}
function modeWhite(){
    home.css('background', 'url("./picture/th\ \(1\).jpg")')
    login.css('background', 'url("./picture/th\ \(1\).jpg")')
    contact_us.css('background', 'url("./picture/th\ \(1\).jpg")')
    bookOfCategorises.css('background', 'url("./picture/th\ \(1\).jpg")')
    book_information.css('background', 'url("./picture/th\ \(1\).jpg")')
    shoppingCart.css('background', 'url("./picture/th\ \(1\).jpg")')
}
function modeDark(){
    home.css('background', 'url("./picture/eFsiXhx.jpg")')
}

//========###########============###### Array of books ######==========###########=================//
const HistoricalArry= [
    {   
        title:"Historical",
        id:"1",
    },
        {books: [
            {
                id: 0,
                imageSrc: "./picture/history book -1.jpg",
                description: "some description about book and author",
                price: 22+"$",
            },
            {
                id: 1,
                imageSrc: "./picture/history book -2.jpg",
                description: "some description about book and author",
                price: 15+"$",
            },
            {
                id: 2,
                imageSrc: "./picture/history-3.jpg",
                description: "some description about book and author",
                price: 34 +"$",
            },
            {
                id: 3,
                imageSrc: "./picture/history-4.jpg",
                description: "some description about book and author",
                price: 55 +"$",
            },
            {
                id: 4,
                imageSrc: "./picture/history-5jpg.jpg",
                description: "some description about book and author",
                price: 33,
            },
            {
                id: 5,
                imageSrc: "./picture/history-6.jpg",
                description: "some description about book and author",
                price: 22 +"$",
            },
            {
                id: 6,
                imageSrc: "./picture/history-7.jpg",
                description: "some description about book and author",
                price: 64 +"$",
            },
            {
                id: 7,
                imageSrc: "./picture/history-8.jpg",
                description: "some description about book and author",
                price: 23 +"$",
            },
            {
                id: 8,
                imageSrc: "./picture/history-9.jpg",
                description: "some description about book and author",
                price: 11 +"$",
            },
        ]
    }
    ]

    const gamesArray=[
    {
    title:"games",
    id:"2",
    },
        {books: [
            {
                id: 0,
                imageSrc: "./picture/games book -1.jpg",
                description: "some description about book and author",
                price: 10 +"$",
            },
            {
                id: 1,
                imageSrc: "./picture/games book -2.jpg",
                description: "some description about book and author",
                price: 5 +"$",
            },
            {
                id: 2,
                imageSrc: "./picture/games-3.jpg",
                description: "some description about book and author",
                price: 9 +"$",
            },
            {
                id: 3,
                imageSrc: "./picture/games-4.jpg",
                description: "some description about book and author",
                price: 67 +"$",
            },
            {
                id: 4,
                imageSrc: "./picture/games-5.jpg",
                description: "some description about book and author",
                price: 55 +"$",
            },
            {
                id: 5,
                imageSrc: "./picture/games-6.webp",
                description: "some description about book and author",
                price: 45 +"$",
            },
            {
                id: 6,
                imageSrc: "./picture/games-7.jpg",
                description: "some description about book and author",
                price: 34 +"$",
            },
            {
                id: 7,
                imageSrc: "./picture/games-8.png",
                description: "some description about book and author",
                price: 43 +"$",
            },
            {
                id: 8,
                imageSrc: "./picture/games-9.jpg",
                description: "some description about book and author",
                price: 23 +"$",
            },
        ]}
    ]
    const chimicalArray=[   
        {
        title:"chimical",
        id:"3",
        },
        {books: [
            {
                id: 0,
                imageSrc: "./picture/chimcal book  -1.jpg",
                description: "some description about book and author",
                price: 27 +"$",
            },
            {
                id: 1,
                imageSrc: "./picture/chimcal book -2.jpg",
                description: "some description about book and author",
                price: 14 +"$",
            },
            {
                id: 2,
                imageSrc: "./picture/chimical-3.jpg",
                description: "some description about book and author",
                price: 37+"$",
            },
            {
                id: 3,
                imageSrc: "./picture/chimical-4.jpg",
                description: "some description about book and author",
                price: 26 +"$",
            },
            {
                id: 4,
                imageSrc: "./picture/chimical-5.jpg",
                description: "some description about book and author",
                price: 24 +"$",
            },
            {
                id: 5,
                imageSrc: "./picture/chimical-6.jpg",
                description: "some description about book and author",
                price: 65 +"$",
            },
            {
                id: 6,
                imageSrc: "./picture/chimical-7.jpg",
                description: "some description about book and author",
                price: 45 +"$",
            },
            {
                id: 7,
                imageSrc: "./picture/chimical-8.jpg",
                description: "some description about book and author",
                price: 52 +"$",
            },
            {
                id: 8,
                imageSrc: "./picture/chimical-9.jpg",
                description: "some description about book and author",
                price:15 +"$",
            },
        ]
    }
    ]
    const artsArray=[ 
        { 
        title:"Arts",
        id:"4",
        },
        {
        books: [
            {
                id: 0,
                imageSrc: "./picture/art book -1.jpg",
                description: "some description about book and author",
                price: 22 +"$",
            },
            {
                id: 1,
                imageSrc: "./picture/art-4.jpg",
                description: "some description about book and author",
                price: 24 +"$",
            },
            {
                id: 2,
                imageSrc: "./picture/arts-3.jpg",
                description: "some description about book and author",
                price: 53 +"$",
            },
            {
                id: 3,
                imageSrc: "./picture/arts-5.webp",
                description: "some description about book and author",
                price: 13+"$",
            },
            {
                id: 4,
                imageSrc: "./picture/arts-6.webp",
                description: "some description about book and author",
                price: 34 +"$",
            },
            {
                id: 5,
                imageSrc: "./picture/arts-7.webp",
                description: "some description about book and author",
                price: 32 +"$",
            },
            {
                id: 6,
                imageSrc: "./picture/arts-8.jpg",
                description: "some description about book and author",
                price: 13 +"$",
            },
            {
                id: 7,
                imageSrc: "./picture/arts-9.jpg",
                description: "some description about book and author",
                price: 12+"$",
            },
            {
                id: 8,
                imageSrc: "./picture/book art-2.webp",
                description: "some description about book and author",
                price: 9 +"$",
            },
            
        ]
    },
]

// كيف ممكن اصل نوع الاراي بواسطة الفور 
const categoresesBooks=function(e){
    if(e.target.id == 1){
        h1_title_4.text(HistoricalArry[0].title)
        HistoricalArry[1].books.forEach((book,i) =>{
            const item_book=$(`<div class="item-book">
            <img src="${book.imageSrc}">
            <button onclick="goToInformationBook()">Inform</button>
            <button onclick="gotologin()">BAY<i class="fas fa-shopping-cart"></i></button>
            </div>`)
            books_2.append(item_book);

        }
    )}else if(e.target.id == 2){
        h1_title_4.text(gamesArray[0].title)
        gamesArray[1].books.forEach((book,i) =>{
            const item_book=$(`<div class="item-book">
            <img src="${book.imageSrc}">
            <button onclick="goToInformationBook()">Inform</button>
            <button onclick="gotologin()">BAY<i class="fas fa-shopping-cart"></i></button>
            </div>`)
            books_2.append(item_book);

        }
    )}else if(e.target.id == 3){
        h1_title_4.text(chimicalArray[0].title)
        chimicalArray[1].books.forEach((book,i) =>{
            const item_book=$(`<div class="item-book">
            <img src="${book.imageSrc}">
            <button onclick="goToInformationBook()">Inform</button>
            <button onclick="gotologin()">BAY<i class="fas fa-shopping-cart"></i></button>
            </div>`)
            books_2.append(item_book);

        }
    )}else if(e.target.id == 4){
        h1_title_4.text(artsArray[0].title)
        artsArray[1].books.forEach((book,i) =>{
            const item_book=$(`<div class="item-book">
            <img src="${book.imageSrc}">
            <button onclick="goToInformationBook()">Inform</button>
            <button onclick="gotologin()">BAY<i class="fas fa-shopping-cart"></i></button>
            </div>`)
            books_2.append(item_book);

        }
    )}
    home.hide(700)
    bookOfCategorises.show(700)
}
button1.on('click',categoresesBooks)
button2.on('click',categoresesBooks)
button3.on('click',categoresesBooks)
button4.on('click',categoresesBooks)

function checkInput(){
    if(input_email.val()!=="" &&input_password.val()!=="" && input_credit.val().length > 6){
        login.hide(700,'linear','linear')
        shoppingCart.show(700,'linear','linear');
        alert('The book has been purchased. Thank you for using our library')
    }else{alert("Try Again Chick On your Data")}
}