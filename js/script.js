
const scrollFync = () => {
    const headerLinks = document.querySelectorAll('.scroll');
    const buttons = document.querySelectorAll('.parallax__buttons a');

    let links = [...buttons, ...headerLinks]

    seamless.polyfill();

    links.forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();

            const id = element.getAttribute('href').substring(1);
            const section = document.getElementById(id);

            if (section) {
                seamless.scrollIntoView(section, {
                    behavior: "smooth",
                    block: "start",
                    inline: "start",
                });
            }
        })
    })
}
scrollFync();

//smooth loading
setTimeout(function()
{
   document.body.classList.add('body_loading');
}, 200);

//outgoing text
const animItems = document.querySelectorAll('._anim-items');
        
if (animItems.length>0)
{
    window.addEventListener('scroll', animationScroll);
    function animationScroll()
    {
        for (let i = 0; i<animItems.length; i++)
        {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight/animStart;
            
            if(animItemHeight>window.innerHeight)
            {
                animItemPoint = window.innerHeight - window.innerHeight/animStart;
            }

            if((pageYOffset>animItemOffset-animItemPoint) && pageYOffset < (animItemOffset + animItemHeight))
            {
                animItem.classList.add('_active');
            }
            else
            {
                animItem.classList.remove('_active');
            }
            if(animItemHeight<=pageYOffset)
            {
                animItem.classList.add('_active');
            }

        }
    }


    function offset(el)
    {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return{top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
}



//menu-burger

const iconMenu = document.querySelector('.menu__menu-burger');
const menuBody = document.querySelector('.header-menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}

//carousel slider heroes
//for photo resolution 282:200 pic
const carousel = document.getElementById("heroes__carousel"),
  content = document.getElementById("heroes__cards"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev"),
  gridGap = 100;

next.addEventListener("click", e => {
  carousel.scrollBy(width+gridGap, 0);//move corusel
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width<= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width+gridGap), 0);
  if (carousel.scrollLeft - width<= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width<= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth; //get carousel width
window.addEventListener("resize", e => (width = carousel.offsetWidth)); //event handler


//carousel slider life of project
//for photo resolution: 482:321 pic
const carousel2 = document.getElementById("life__carousel"),
  content2 = document.getElementById("life__cards"),
  next2 = document.getElementById("next2"),
  prev2 = document.getElementById("prev2"),
  gridGap2 = 1;


next2.addEventListener("click", e => {
  carousel2.scrollBy(width2+gridGap2, 0);//move corusel
  if (carousel2.scrollWidth !== 0) {
    prev2.style.display = "flex";
  }
  if (content2.scrollWidth - width2<= carousel2.scrollLeft + width2) {
    next2.style.display = "none";
  }
});
prev2.addEventListener("click", e => {
  carousel2.scrollBy(-(width2+gridGap2), 0);
  if (carousel2.scrollLeft - width2<= 0) {
    prev2.style.display = "none";
  }
  if (!content2.scrollWidth - width2<= carousel2.scrollLeft + width2) {
    next2.style.display = "flex";
  }
});

let width2 = carousel2.offsetWidth; //get carousel width
window.addEventListener("resize", e => (width2 = carousel2.offsetWidth)); //event handler



animationScroll();
//плеер
window.requestAnimationFrame =
	window.requestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	function (cb) {
		setTimeout(cb, 17);
	};
var audio = document.getElementById("audio");
var playBtn = document.getElementById("play");
var prog = document.getElementById("progress");
var playTime = document.getElementById("time-played");
var ff = document.getElementById("ff");
var rw = document.getElementById("rw");
var bars = document.getElementById("bars-box");

playBtn.addEventListener("click", function (e) {
	if (audio.paused) {
		audio.play();
		playBtn.classList.remove("fa-play");
		playBtn.classList.add("fa-pause");
		bars.classList.add("active");
	} else {
		audio.pause();
		playBtn.classList.remove("fa-pause");
		playBtn.classList.add("fa-play");
		bars.classList.remove("active");
	}
});

rw.addEventListener("click", function (e) {
	audio.currentTime -= 15;
});

ff.addEventListener("click", function (e) {
	audio.currentTime += 15;
});

prog.addEventListener("mouseUp", function (e) {
	audio.currentTime = prog.value;
});

function paddZero(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}

function update() {
	var played = audio.currentTime;
	prog.value = audio.currentTime;
	played =
		played < 60
			? "00:" + paddZero(Math.floor(played))
			: paddZero(Math.floor(played / 60)) +
			  ":" +
			  paddZero(Math.floor(played % 60));
	playTime.innerText = played;
	if (audio.currentTime >= 151) {
		playBtn.classList.remove("fa-pause");
		playBtn.classList.add("fa-play");
		audio.pause();
		bars.classList.remove('active');
	}
	requestAnimationFrame(update);
}

update();
