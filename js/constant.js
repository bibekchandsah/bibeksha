// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// dark & light mode toggle
const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".dark-light"),
  searchToggle = document.querySelector(".searchToggle"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  siderbarClose = document.querySelector(".siderbarClose");

  let getMode = localStorage.getItem("mode");
    if(getMode && getMode === "dark-mode"){
    body.classList.add("dark");
  }

// js code to toggle dark and light mode
modeToggle.addEventListener("click" , () =>{
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");
  // js code to keep user selected mode even page refresh or file reopen
  if(!body.classList.contains("dark")){
    localStorage.setItem("mode" , "light-mode");
  }else{
    localStorage.setItem("mode" , "dark-mode");
  }
});

// js code to toggle search box
searchToggle.addEventListener("click" , () =>{
  searchToggle.classList.toggle("active");
});


//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
  nav.classList.add("active");
});

body.addEventListener("click" , e =>{
  let clickedElm = e.target;

  if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
    nav.classList.remove("active");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}

// when click on search dropdown apperar
window.onload = function () {
  var SearchResult = document.getElementById("ResultBox");
  document.onclick = function (event) {
    if (event.target.id !== "ResultBox") {
      SearchResult.style.display = "block";
    }
    if (event.target.id !== "SearchInput") {
      SearchResult.style.display = "none";
    }
  }
};

// filter
const search = () => {
  let filter = document.getElementById('SearchInput').value.toUpperCase();
  let ul = document.getElementById('ResultBox');
  let li = ul.getElementsByTagName('li');
  for (var i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName('a')[0];
    let textValue = a.textContent || a.innerHTML;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}

// colour changer 
const colorButtons = [...document.querySelectorAll('.colorButton')];
  document.addEventListener('click', e => {
      if (!colorButtons.includes(e.target)) return;
      document.body.style.background = e.target.textContent;
  });

  function colorSelected(element) {
    document.body.style.background = element.value
}

// custom right click 
// feather icon 
feather.replace()

// animation 
window.addEventListener('contextmenu', (event) => {
    event. preventDefault()
    var contextMenu = document.getElementById('context-menu')
    contextMenu.classList.add('active')
})

window.addEventListener('click', () => {
    document.getElementById('context-menu').classList.remove('active')

})

// on right click 
const contextMenu = document.querySelector(".container"),
shareMenu = contextMenu.querySelector(".menu-sub-list");

window.addEventListener("contextmenu", e => {
    e.preventDefault();
    let x = e.offsetX, y = e.offsetY,
    winWidth = window.innerWidth,
    winHeight = window.innerHeight,
    cmWidth = contextMenu.offsetWidth,
    cmHeight = contextMenu.offsetHeight;

    if(x > (winWidth - cmWidth - shareMenu.offsetWidth)) {
        shareMenu.style.left = "-200px";
    } else {
        shareMenu.style.left = "";
        shareMenu.style.right = "-200px";
    }

    x = x > winWidth - cmWidth ? winWidth - cmWidth - 5 : x;
    y = y > winHeight - cmHeight ? winHeight - cmHeight - 5 : y;
    
    contextMenu.style.left = `${x}px`;
    contextMenu.style.top = `${y}px`;
    contextMenu.style.visibility = "visible";
});

document.addEventListener("click", () => contextMenu.style.visibility = "hidden");

// full screen mode 
function FullScreenMode() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
     (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {  
        document.documentElement.requestFullScreen();  
      } else if (document.documentElement.mozRequestFullScreen) {  
        document.documentElement.mozRequestFullScreen();  
      } else if (document.documentElement.webkitRequestFullScreen) {  
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
      }  
    } else {  
      if (document.cancelFullScreen) {  
        document.cancelFullScreen();  
      } else if (document.mozCancelFullScreen) {  
        document.mozCancelFullScreen();  
      } else if (document.webkitCancelFullScreen) {  
        document.webkitCancelFullScreen();  
      }  
    }  
}

// copy function 
function Copy(text) {
  var inputc = document.body.appendChild(document.createElement("input"));
  inputc.value = window.location.href;
  inputc.focus();
  inputc.select();
  document.execCommand('copy');
  inputc.parentNode.removeChild(inputc);
  alert("URL Copied.");
}


// online offline 
const offlineConnection = document.querySelector('.offline')
const onlineConnection = document.querySelector('.online')
const closeBtn = document.querySelectorAll('.close')
const refreshBtn = document.querySelector('.refreshBtn')

function online() {
	offlineConnection.classList.remove('active')
	onlineConnection.classList.add('active')
}
function offline() {
	offlineConnection.classList.add('active')
	onlineConnection.classList.remove('active')
}

window.addEventListener('online',()=>{
	online();
	setTimeout(() => {
		onlineConnection.classList.remove('active')
	}, 3000);
})
window.addEventListener('offline',()=>{
	offline();
})

for (let i = 0; i < closeBtn.length; i++) {
	closeBtn[i].addEventListener('click',()=>{
		closeBtn[i].parentNode.classList.remove('active');
		if (closeBtn[i].parentNode.classList.contains('offline')) {
			setTimeout(() => {
				closeBtn[i].parentNode.classList.add('active');
			}, 500);
		}
	})
}

refreshBtn.addEventListener("click",()=>{
	window.location.reload();
})