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

home.append(navBar);
body.append(home);




/*============== navbar =============================*/
const div_2ImgHeader=$('<div class="img-header"></div>')
const line_head_1=$('<div class="line-head-1"></div>')
const h2_head=$('<h2>Book Store</h2>')
const p_head=$('<p>The biggest online book store</p>')
/*============== img head ===========================*/
const div_3Contant =$('<div class="contant"></div>')
const categorises=$('<div class="Categorise"></div>')
const line_head_2=$('<div class="line-head-2"></div>')
const line_head_3=$('<div class="line-head-3"></div>')
const h1_contant=$('<h1>Categorises</h1>')
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







