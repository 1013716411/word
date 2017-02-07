$(document).ready(function() {

	$.fn.fullpage({

		anchors: ['page1', 'page2', 'page3', 'page4', 'page5','page6'],

		navigation: true,

		navigationTooltips: ['首页', '音乐', '功能', '发展', '使用','作者'],

		loopBottom:true,

		afterLoad: function(anchorLink, index){

            //第二页 
		
			if(index == 2){

				$('.section2').find('img').delay(0).animate({

					top: '0'

				}, 2000, 'easeOutExpo');

			}

			if(index == 2){

				$('.section2').find('h4').fadeIn(2000);

			}
			//第三页                   

			if(index == 3){

				$('.section3').find('img').delay(0).animate({

					bottom: '0'

				}, 2000, 'easeOutExpo');

			}

			if(index == 3){

				$('.section3').find('p').fadeIn(2000);

			}
			
           //第四页 
			if(index == 4){

				$('.section4').find('*').fadeIn(2000);

			}

	         //第五页

			if(index == 5){

				$('.section5').find('p').delay(500).animate({

					bottom: '0'

				}, 1000, 'easeOutExpo');

			}

				if(index == 5){

				$('.section5').find('img').delay(500).animate({

					left: '0'

				}, 1000, 'easeOutExpo');

			} 
             //第六页

			if(index == 6){

				$('.section6').find('h2').fadeIn(2000);

			}

			if(index == 6){

				$('.section6').find('p').delay(4000).animate({

					bottom: '0'

				}, 1500, 'easeOutExpo');

			}
			

		},

		onLeave: function(index, direction){

            //第二页 
			if(index == '2'){

				$('.section2').find('img').delay(0).animate({

					top: '-120%'

				}, 1000, 'easeOutExpo');

			}

			if(index == '2'){

				$('.section3').find('h4').fadeOut(2000);

			}
            //第三页 
			if(index == '3'){

				$('.section3').find('img').delay(0).animate({

					bottom: '-120%'

				}, 800, 'easeOutExpo');

			}

			if(index == '3'){

				$('.section3').find('p').fadeOut(2000);

			}
             //第四页 
			if(index == '4'){

				$('.section4').find('*').fadeOut(2000);

			}

               //第五页 

			if(index == '5'){

				$('.section5').find('p').delay(500).animate({

					bottom: '-120%'

				}, 1000, 'easeOutExpo');

			}

			if(index == '5'){

				$('.section5').find('img').delay(500).animate({

					left: '-120%'

				}, 1000, 'easeOutExpo');

			}
             
             //第六页
			if(index == '6'){

				$('.section6').find('h2').fadeOut(2000);

			}
			if(index == '6'){

				$('.section6').find('p').delay(3000).animate({

					bottom: '-120%'

				}, 1500, 'easeOutExpo');

			}

		}



	});

});
