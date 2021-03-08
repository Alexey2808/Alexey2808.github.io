
new Swiper('.image-slider',{

pagination: {
	el: '.swiper-pagination',
	clickable: true,
	 dynamicBullets:true,
	},
 autoheight:true,

 autoplay: {
 		//пауза между прокруткой
 		delay:3000,

 		//закончить  на последнем  слайде
 		 stopOnInteraction: false,

 		//отключить после ручного управления
 		disableOnInteraction: false,
 	},
 			// скорость
 		speed:800,
});

