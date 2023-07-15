const body=$('body');
const home=$('<section id="Home"></section>');
const navBar=$('<div class="navbar"></div>');
const div_1Navbar=$('<div class="word-logo">Shop<Span>Store</Span></div>');
const unorderList=$('<ul class="all-option"></ul>');
const listItem=$(`<li class="option-nav-1"><a>Home</a></li>
<li class="option-nav"><a>Shooping Cart</a></li>
<li class="option-nav"><a>Contant Us</a></li>
<li class="option-nav"><a>Mode</a></li>`)
//============= appends =======================//
body.append(home);
home.append(navBar);
navBar.append(div_1Navbar);
navBar.append(unorderList);
unorderList.append(listItem);
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
const button1=$('<button>Historical Categorise</button>')

const TypeCard2=$('<div class="Type-card"></div>')
const imgCard2=$(' <img src="./picture/book games.png">')
const button2=$('<button>Gmaes Categorise</button>')

const TypeCard3=$('<div class="Type-card"></div>')
const imgCard3=$('<img src="./picture/vintage-chemical-lab-books-closeup-70216103.webp">')
const button3=$('<button>Chemical Categorise</button>')

const TypeCard4=$('<div class="Type-card"></div>')
const imgCard4=$('<img src="./picture/th.jpg">')
const button4=$('<button>Arts Categorise</button>')

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
const input_credit=$('<input type="password" name="email" placeholder="Enter number of credit card" required  min="6" max="6" >')
const button_form=$(' <button class="btnn">Login</button>')
const p_form=$('<p class="liw"> login in with</p>')
const icons=$(' <div class="icons"></div>')
const a_icons=$('<a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a> <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a><a href="https://accounts.google.com/"><i class="fab fa-google"></i></a><a href="https://signup.live.com/"><i class="fab fa-skype"></i></a><a href="https://www.linkedin.com/"><i class="fab fa-linkedin"></i></a> ')

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
//===========================================================//
//=========================== book-information  =============//
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
const button_backToHome=$('<button>Back To Home</button>')

//============= appends =======================//
body.append(book_information);
book_information.append(page_info);
page_info.append(image_book);
image_book.append(img_info);
page_info.append(line_3);
page_info.append(line_4);
page_info.append(Book_description);
book_information.append(h1_book_description);
book_information.append(p_book_description);
page_info.append(line_button);
page_info.append(button_backToHome);
