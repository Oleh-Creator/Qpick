<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Qpick</title>
   <link rel="stylesheet" href="./style.css">
   <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>

<body>
   <div class="wrap">

      <header>
         <div class="headerItem">
            <div class="logo">
               <h2>Qpick</h2>
            </div>
            <div class="choosePhone">
               <img src="./img/phone.webp" alt="phone">
            </div>
            <div class="filterBtn" id="filterBtn">
               <h3>Фільтр</h3>
           </div>
           <div class="filterContainer" id="filterContainer">
            <div class="categories">
                <h2 class="categoryNumber">
                    1
                    <p>Вибери категорію</p>
                </h2>
                <div class="containerItem">
                    <div class="row">
                        <div class="goodsElement cases" id="cases">Чохли</div>
                        <div class="goodsElement earPhones" id="earPhones">Наушники</div>
                    </div>
                    <div class="row">
                        <div class="goodsElement protectedGlass">Захисні стьокла</div>
                        <div class="goodsElement charges">Зарядні пристрої</div>
                    </div>
                </div>
            </div>

            <div class="categories">
                <h2 class="categoryNumber">
                    2
                    <p>Вибери модель телефону</p>
                </h2>
                <div class="containerItem">
                    <select>
                        <option value="iphoneX">Iphone X</option>
                        <option value="iphone11">Iphone 11</option>
                        <option value="iphone12">Iphone 12</option>
                        <option value="iphone13">Iphone 13</option>
                        <option value="iphone13 Pro">Iphone 13 Pro</option>
                        <option value="iphone14">Iphone 14</option>
                    </select>
                </div>
            </div>
            <div class="Setingscategories">
               <h2 class="categoryNumber">
                   Setings
                   <p>Вибери категорію</p>
               </h2>
               <div class="containerItem">
                   <div class="row">
                       <div class="goodsElement Airpods" id="Airpods">Безпроводні навушники</div>
                       <div class="goodsElement Eirpods" id="Eirpods">Проводні навушники</div>
                   </div>
                   <div class="row">
                       <div class="goodsElement protectedGlass">Силіконові чохли</div>
                       <div class="goodsElement charges">Шкіряні чохли</div>
                   </div>
               </div>
           </div>
        </div>
         </div>
         <div class="headerItem">
            <div class="heartGroup">
               <img src="./img/heart.webp" alt="heart">
               <div class="HeartCounter">0</div>
            </div>
            <div class="cartGroup">
               <img src="./img/cart.webp" alt="cart">
               <div class="CartCounter">0</div>
            </div>
         </div>
      </header>
      <div class="banner">
         <h1>Аксесуари для <br> Iphone 13 Pro Max</h1>
         <img src="./img/bannerPhone.webp" alt="phone">
      </div>
      <div class="HeartItems" id="HeartItems">
         <div class="ExitContainer"><div class="Exit" id="Exit">X</div></div>
      </div>
      <main>
         <section class="phoneCases" id="phoneCases">
            <h5>Чохли</h5>
            <div class="phoneCasesGroup">
               <div class="card">
                  <img src="./img/phone1.webp" alt="phone">
                  <p>Скляні</p>
                  <button class="ButtonBy">Buy Now</button>
               </div>
               <div class="card">
                  <img src="./img/phone2.webp" alt="phone">
                  <p>Силіконові</p>
                  <button class="ButtonBy">Buy Now</button>
               </div>
               <div class="card">
                  <img src="./img/phone3.webp" alt="phone">
                  <p>Шкіряні</p>
                  <button class="ButtonBy">Buy Now</button>
               </div>
            </div>
         </section>
         <section class="airPods" id="airPods">
            <h5>Навушники</h5>
            <div class="airPodsGroup">
               <div class="card airPods__card">
                  <div class="cardHeartContainer">
                     <div class="AirpodsHeart"></div>
                  </div>
                  <img src="./img/airpods1.webp" alt="airPods">
                  <div class="cardInfo">
                     <div class="cardName">Apple BYZ S852I</div>
                     <div class="cardPrice">2927 ₴</div>
                  </div>
                  <div class="ratingContainer">
                     <img src="./img/star.webp" alt=""><span>4.5</span>
                  </div>
                  <button class="ButtonBy">Buy Now</button>
               </div>

               <div class="card airPods__card">
                  <div class="cardHeartContainer">
                     <div class="AirpodsHeart"></div>
                  </div>
                  <img src="./img/airpods2.webp" alt="airPods">
                  <div class="cardInfo">
                     <div class="cardName">Apple EarPods</div>
                     <div class="cardPrice">2327 ₴</div>
                  </div>
                  <div class="ratingContainer">
                     <img src="./img/star.webp" alt=""><span>4.5</span>
                  </div>
                  <button class="ButtonBy">Buy Now</button>
               </div>

               <div class="card airPods__card">
                  <div class="cardHeartContainer">
                     <div class="AirpodsHeart"></div>
                  </div>
                  <img src="./img/airpods3.webp" alt="airPods">
                  <div class="cardInfo">
                     <div class="cardName">Apple EarPods</div>
                     <div class="cardPrice">2327 ₴</div>
                  </div>
                  <div class="ratingContainer">
                     <img src="./img/star.webp" alt=""> <span>4.5</span>
                  </div>
                  <button class="ButtonBy">Buy Now</button>
               </div>
            </div>

            <div class="airPodsGroup">
               <div class="card airPods__card">
                  <div class="cardHeartContainer">
                     <div class="AirpodsHeart"></div>
                  </div>
                  <img src="./img/airpods1.webp" alt="airPods">
                  <div class="cardInfo">
                     <div class="cardName">Apple BYZ S852I</div>
                     <div class="cardPrice">2927 ₴</div>
                  </div>
                  <div class="ratingContainer">
                     <img src="./img/star.webp" alt=""><span>4.5</span>
                  </div>
                  <button class="ButtonBy">Buy Now</button>
               </div>

               <div class="card airPods__card">
                  <div class="cardHeartContainer">
                     <div class="AirpodsHeart"></div>
                  </div>
                  <img src="./img/airpods2.webp" alt="airPods">
                  <div class="cardInfo">
                     <div class="cardName">Apple EarPods</div>
                     <div class="cardPrice">2327 ₴</div>
                  </div>
                  <div class="ratingContainer">
                     <img src="./img/star.webp" alt=""><span>4.5</span>
                  </div>
                  <button class="ButtonBy">Buy Now</button>
               </div>

               <div class="card airPods__card">
                  <div class="cardHeartContainer">
                     <div class="AirpodsHeart"></div>
                  </div>
                  <img src="./img/airpods3.webp" alt="airPods">
                  <div class="cardInfo">
                     <div class="cardName">Apple EarPods</div>
                     <div class="cardPrice">2327 ₴</div>
                  </div>
                  <div class="ratingContainer">
                     <img src="./img/star.webp" alt=""> <span>4.5</span>
                  </div>
                  <button class="ButtonBy">Buy Now</button>
               </div>
            </div>
         </section>

         <section class="airPods2" id="airPods2">
            <h5>Безпровідні Навушники</h5>
            <div class="airPodsGroup">
               <div class="card airPods__card">
                  <div class="cardHeartContainer">
                     <div class="AirpodsHeart"></div>
                  </div>
                  <img src="./img/airpods4.webp" alt="airPods">
                  <div class="cardInfo">
                     <div class="cardName">Apple BYZ S852I</div>
                     <div class="cardPrice">2927 ₴</div>
                  </div>
                  <div class="ratingContainer">
                     <img src="./img/star.webp" alt=""><span>4.5</span>
                  </div>
                  <button class="ButtonBy">Buy Now</button>
               </div>

               <div class="card airPods__card">
                  <div class="cardHeartContainer">
                     <div class="AirpodsHeart"></div>
                  </div>
                  <img src="./img/airpods5.webp" alt="airPods">
                  <div class="cardInfo">
                     <div class="cardName">Apple EarPods</div>
                     <div class="cardPrice">2327 ₴</div>
                  </div>
                  <div class="ratingContainer">
                     <img src="./img/star.webp" alt=""><span>4.5</span>
                  </div>
                  <button class="ButtonBy">Buy Now</button>
               </div>

               <div class="card airPods__card">
                  <div class="cardHeartContainer">
                     <div class="AirpodsHeart"></div>
                  </div>
                  <img src="./img/airpods6.webp" alt="airPods" class="BigAirpods">
                  <div class="cardInfo">
                     <div class="cardName">Apple EarPods</div>
                     <div class="cardPrice">2327 ₴</div>
                  </div>
                  <div class="ratingContainer">
                     <img src="./img/star.webp" alt=""> <span>4.5</span>
                  </div>
                  <button class="ButtonBy">Buy Now</button>
               </div>
            </div>

         </section>
         <footer>
            <h2>Qpick</h2>
            <div class="footerMenu">
               Избранное
               <br>
               Корзина
               <br>
               Контакты
            </div>
            <div class="footerLeng">
               <p>Условия сервиса</p>
               <br>
               <div class="footerLenghtMenu">
                  <img src="./img/earth.webp" alt="">
                  <p>ENG</p> 
                 <p class="Uklengh">Укр</p>
               </div>
            </div>
            <div class="footerSocialNetw">
                  <img src="./img/VK.webp" alt="">
                  <img src="./img/Instagram.webp" alt="">
                  <img src="./img/Telegram.webp" alt="">
                  <img src="./img/Whatsapp.webp" alt="">
               </div>
         </footer>
            
         </div>
      </main>
   </div>
   <script src="main.js"></script>
</body>

</html>
