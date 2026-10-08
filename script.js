const motionObserver=new IntersectionObserver(entries=>{
	entries.forEach(entry=>{
		if(entry.isIntersecting){
			entry.target.classList.add("visible");
			motionObserver.unobserve(entry.target);
		}
	});
},{threshold:.12});

const motionSelectors=[
	".reveal",
	".section-head",
	".project",
	".about-lead",
	".facts div",
	".proof-card",
	".path-entry",
	".contact-card"
];
document.querySelectorAll(motionSelectors.join(",")).forEach((element,index)=>{
	element.classList.add("motion-reveal");
	element.style.setProperty("--reveal-delay",`${(index % 5) * 70}ms`);
	motionObserver.observe(element);
});

const intro=document.getElementById("intro");
const enterButton=document.querySelector(".intro-skip");
const enterPortfolio=()=>{
	document.body.classList.add("intro-done");
	document.querySelectorAll(".hero .reveal").forEach(element=>element.classList.add("visible"));
};
enterButton.addEventListener("click",enterPortfolio);
setTimeout(enterPortfolio,7500);
if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)enterPortfolio();

const progressBar=document.querySelector(".scroll-progress span");
let progressFrame;
const updateProgress=()=>{
	if(progressFrame)return;
	progressFrame=requestAnimationFrame(()=>{
		const scrollable=document.documentElement.scrollHeight-window.innerHeight;
		progressBar.style.transform=`scaleX(${scrollable>0?window.scrollY/scrollable:0})`;
		progressFrame=null;
	});
};
window.addEventListener("scroll",updateProgress,{passive:true});
updateProgress();

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
