const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>{el.style.opacity="0";el.style.transform="translateY(18px)";el.style.transition="opacity .7s ease, transform .7s ease";observer.observe(el)});
const style=document.createElement("style");style.textContent=".reveal.visible{opacity:1!important;transform:none!important}";document.head.appendChild(style);

const intro=document.getElementById("intro");
const enterButton=document.querySelector(".intro-skip");
const enterPortfolio=()=>document.body.classList.add("intro-done");
enterButton.addEventListener("click",enterPortfolio);
setTimeout(enterPortfolio,7500);

const systemStates=[
	["EMBEDDED","MCU · SENSOR · GPIO"],
	["FIRMWARE","C / C++ · RTOS · REG"],
	["SOFTWARE","CODE · API · BUILD"],
	["SYSTEMS","NODE · NODE · NODE"],
	["OPEN SOURCE","GIT · BRANCH · CONTRIBUTE"]
];
const systemState=document.querySelector("[data-system-state]");
const systemDetail=document.querySelector("[data-system-detail]");
let systemIndex=0;
setInterval(()=>{
	systemIndex=(systemIndex+1)%systemStates.length;
	systemState.classList.add("state-fade");
	systemDetail.classList.add("state-fade");
	setTimeout(()=>{
		[systemState.textContent,systemDetail.textContent]=systemStates[systemIndex];
		systemState.classList.remove("state-fade");
		systemDetail.classList.remove("state-fade");
	},350);
},4000);
