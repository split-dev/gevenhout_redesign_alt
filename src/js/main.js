//SLIDERS
const swiperMinProduct = new Swiper('.product__minslider',{
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: true,
    watchSlidesProgress: true,
})
const swiperProduct = new Swiper('.product__bigslider',{
    slidesPerView: 1,
    spaceBetween: 20,
    thumbs: {
        swiper: swiperMinProduct,
    },
    breakpoints: {
       320:{
        speed: 200,
        freeMode: {
            enabled: true,
          },
        scrollbar: {
            el: ".swiper-scrollbar",
          },
       },
       1000:{
           freeMode: {
               enabled: false,
           }
       }
    }
})
const productSlider = new Swiper('.products__slider',{
    slidesPerView: 'auto',
    spaceBetween: 40,
    navigation: {
        nextEl: ".arrow-right",
        prevEl: ".arrow-left",
      },
})
const body = document.querySelector('body')

// TABS
const infoTabsItem = document.querySelectorAll('.info__tabs__item')

const infoTabsContent = document.querySelectorAll('.info__tabs__content__item')

let activeTab = 0

if(infoTabsItem){
    infoTabsItem.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            infoTabsItem[activeTab].classList.remove('active')
            item.classList.add('active')
            infoTabsContent[activeTab].classList.remove('active')
            activeTab = index
            infoTabsContent[activeTab].classList.add('active')
        })
    })
}

// Footer-Select

const customSelectIcon = document.querySelector('.custom-select svg')
const customSelectOpen = document.querySelector('.custom-select-open')
const customSelectInput = document.querySelector('.custom-select-input')
const customSelectOpenLinks = document.querySelectorAll('.custom-select-open li')
customSelectInput.addEventListener('click',()=>{
    if(customSelectOpen.classList.contains('active')){
        customSelectOpen.style.opacity = '0'
        setTimeout(() => {
            customSelectOpen.classList.remove('active')
        }, 100);
        customSelectIcon.classList.remove('active')
    }else{
        customSelectOpen.classList.toggle('active')
        customSelectIcon.classList.add('active')
        setTimeout(() => {
            customSelectOpen.style.opacity = '1'
        }, 100);
    }
})
customSelectOpenLinks.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        customSelectInput.value = item.innerHTML
    })
})
window.addEventListener('click',(e)=>{
    if(e.target != customSelectInput){
        customSelectOpen.style.opacity = '0'
        customSelectOpen.classList.remove('active')
        customSelectIcon.classList.remove('active')
    }
})
/* BIG MENU HEADER */
const selectHeader = document.querySelectorAll('.custom-select-header')
const selectHeaderOpen = document.querySelectorAll('.header__menu__open')
let activeSelect = 0;
selectHeader.forEach((item,index)=>{
    item.addEventListener('mouseenter',()=>{
        selectHeaderOpen[activeSelect].classList.remove('active')
        selectHeaderOpen[activeSelect].style.opacity = '0'
            selectHeaderOpen[index].classList.add('active')
            activeSelect = index
        setTimeout(() => {
            selectHeaderOpen[index].style.opacity = '1'
        }, 150);
    })
    selectHeaderOpen[index].addEventListener('mouseleave',()=>{
        setTimeout(() => {
            selectHeaderOpen[index].classList.remove('active')
        }, 200);
        selectHeaderOpen[index].style.opacity = '0'
    })
})
/* MOBILE DROPDOWNS */
const mobInfoItemTop = document.querySelectorAll('.mob__info--item__top')
const mobInfoItemContent = document.querySelectorAll('.mob__info--item--content')

if(mobInfoItemTop){
    mobInfoItemTop.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            if(item.classList.contains('active')){
                mobInfoItemContent[index].style.maxHeight = '800px'
                item.classList.remove('active')
                setTimeout(() => {
                    mobInfoItemContent[index].classList.remove('active')
                }, 200);
            }else{
                item.classList.add('active')
                mobInfoItemContent[index].classList.add('active')
                setTimeout(() => {
                    mobInfoItemContent[index].style.maxHeight = '800px'
                }, 10);
            }
        })
    })
}

/*
CUSTOM SELECT FILTERS
 */

const categorySelectTop = document.querySelectorAll('.category__select__top')
const categorySelectOpen = document.querySelectorAll('.category__select__open')
const minoverlay = document.querySelector('.min-overlay')
if(categorySelectOpen){
    categorySelectTop.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            if(item.classList.contains('active')){
                setTimeout(() => {
                    item.classList.remove('active');
                }, 50);
                categorySelectOpen[index].style.opacity = '0'
                categorySelectOpen[index].classList.remove('active')
                minoverlay.classList.remove('active')
            }else{
                item.classList.add('active');
                categorySelectOpen[index].classList.add('active')
                setTimeout(() => {
                    categorySelectOpen[index].style.opacity = '1'
                }, 100);
                minoverlay.classList.add('active')
            }
        })
        document.addEventListener('click',(e)=>{
            if(e.target === minoverlay){
                minoverlay.classList.remove('active')
                item.classList.remove('active')
                categorySelectOpen[index].classList.remove('active')
                categorySelectOpen[index].style.opacity = '0'
            }
        })
    })
}

/*
HIDE DOP_INFO ITEM
 */
const productMoreTableDop = document.querySelector('.product__more__table--dop')
const hideDopInfo = document.querySelector('.hideDopInfo')

if(hideDopInfo){
    hideDopInfo.addEventListener('click',()=>{
       if(hideDopInfo.classList.contains('active')){
        hideDopInfo.classList.remove('active')
        productMoreTableDop.classList.remove('hide')
        setTimeout(() => {
            productMoreTableDop.style.opacity = '1'
        }, 100);
       }else{
            hideDopInfo.classList.add('active')
            productMoreTableDop.style.opacity = '0'
            setTimeout(() => {
                productMoreTableDop.classList.add('hide')
            }, 100);
       }
    })
}

/*
FILTER MENU
 */

const filter = document.querySelector('.filter');
const filterClose = document.querySelector('.filter-closest');
const filterOpen = document.querySelector('.filter__open');

if(filter){
    filter.addEventListener('click',()=>{
        filterOpen.classList.add('active')
        setTimeout(() => {
            filterOpen.style.opacity = '1'
        }, 150);
        body.style.overflow = 'hidden'
    })
    filterClose.addEventListener('click',()=>{
        filterOpen.style.opacity = '0'
        setTimeout(() => {
            filterOpen.classList.remove('active')
        }, 150);
        body.style.overflow = 'scroll'
    })
  
}




/**
 SWIPER LANDING
*/

const sliderLandingText = new Swiper('.swiper-landing',{
   effect: 'fade',
   speed: 700,
   fadeEffect: {
    crossFade: true
  },
  loop: true,
   navigation: {
       nextEl: '.arrow-right-landing',
       prevEl: '.arrow-left-landing'
   }
})
const sliderLanding = new Swiper('.landingslider__second',{
    speed: 700,
    loop: true,
 })

sliderLandingText.controller.control = sliderLanding;
sliderLanding.controller.control = sliderLandingText;

/*
MOBILE MENU
 */

const headerMobMenuOpen = document.querySelector('.header__mob__menu--first')

const headerMobMenuOpenSecond = document.querySelector('.header__mob__menu--second')

const headerMobMenuOpenThree = document.querySelectorAll('.header__mob__menu--three')

const headerLastRef = document.querySelector('.header__mob__menu--last')

const headerMobClose = document.querySelector('.header-mob-close');

const menuMobLinkFirst = document.querySelectorAll('.menu__mob--link--first');

const headerMobMenu = document.querySelector('.header-mob-menu');

const backMenuFirst = document.querySelector('.back-menu-first')

const backMenuLast = document.querySelector('.back-menu-last')

const menuMobLinkSecond = document.querySelectorAll('.menu__mob--link--second')

const menuMobLinkLast = document.querySelectorAll('.menu__mob--link--last')

const backMenuSecond = document.querySelectorAll('.back-menu-second')

const lastMobMenuName = document.querySelector('.last-mob-menu-name')

const mobMenuParams = document.querySelectorAll('.topipas')

headerMobMenu.addEventListener('click',()=>{
  
   if(headerMobMenu.classList.contains('close')){
    headerMobMenu.classList.remove('close')
    headerMobMenuOpen.classList.remove('active')
    body.style.overflow = 'scroll'
    setTimeout(() => {
        headerMobMenuOpen.style.opacity = '0'
     }, 100);
   }else{
    headerMobMenuOpen.classList.add('active')
    headerMobMenu.classList.add('close')
    body.style.overflow = 'hidden'
    setTimeout(() => {
       headerMobMenuOpen.style.opacity = '1'
    }, 100);
   }
   
})


menuMobLinkFirst.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        headerMobMenuOpenSecond.classList.add('active')
        setTimeout(() => {
            headerMobMenuOpenSecond.style.opacity = '1'
        }, 100);
       setTimeout(() => {
        headerMobMenuOpen.style.opacity = '0'
       }, 350);
    })
})

let activeElemMenu = 0


menuMobLinkSecond.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        activeElemMenu = index
        headerMobMenuOpenThree[activeElemMenu].classList.add('active')
        setTimeout(() => {
            headerMobMenuOpenThree[activeElemMenu].style.opacity = '1'
        }, 100);
       setTimeout(() => {
        headerMobMenuOpenSecond.style.opacity = '0'
       }, 350);
    })
})


menuMobLinkLast.forEach((item,index)=>{
    item.addEventListener('click',(e)=>{
        headerLastRef.classList.add('active')
        lastMobMenuName.innerText = e.target.querySelector('h3').innerText
        setTimeout(() => {
            headerLastRef.style.opacity = '1'
        }, 100);
       setTimeout(() => {
        headerMobMenuOpenThree[activeElemMenu].style.opacity = '0'
       }, 350);
    })
})

backMenuSecond.forEach((item,index)=>{
    item.addEventListener('click',()=>{
        headerMobMenuOpenSecond.style.opacity = '1'
        setTimeout(() => {
            headerMobMenuOpenThree[activeElemMenu].style.opacity = '0'
        }, 100);
        setTimeout(() => {
        headerMobMenuOpenThree[activeElemMenu].classList.remove('active')
        }, 300);
    })
       
})

backMenuLast.addEventListener('click',()=>{
    headerMobMenuOpenThree[activeElemMenu].style.opacity = '1'
    lastMobMenuName.innerText = ''
    setTimeout(() => {
        headerLastRef.style.opacity = '0'
    }, 100);
    setTimeout(() => {
    headerLastRef.classList.remove('active')
    }, 300);
})

backMenuFirst.addEventListener('click',()=>{
    headerMobMenuOpen.style.opacity = '1'
    setTimeout(() => {
        headerMobMenuOpenSecond.style.opacity = '0'
    }, 100);
    setTimeout(() => {
    headerMobMenuOpenSecond.classList.remove('active')
    }, 300);
})

/*
deskFilter
 */

const closeOther = document.querySelectorAll('.close-other')

closeOther.forEach((item,index)=>{
   item.addEventListener('click',()=>{
    headerMobMenuOpenSecond.classList.remove('active')
    headerMobMenuOpenThree[activeElemMenu].classList.remove('active')
    headerLastRef.classList.remove('active')
    headerMobMenu.classList.remove('active')
    headerMobMenu.classList.remove('close')
    body.style.overflow = 'scroll'
   })
})



const deskFilter = document.querySelector('.desk-filter')
const deskFilterOpen = document.querySelector('.desk-filter-open')
const deskFilterName = document.querySelector(".desk-filter-list")
const deskFilterList = document.querySelectorAll('.desk-filter-list')

if(deskFilter){
    deskFilter.addEventListener('click',()=>{
        deskFilterOpen.classList.toggle('active')
    })
    deskFilterList.forEach((item,index)=>{
        deskFilterName.innerHTML = item.innerHTML
    })
}