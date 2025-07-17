const links=document.querySelectorAll('.nav-list a');links.forEach(l=>{if(l.href===window.location.href)l.classList.add('active')});

// Countdown
function startCountdown(target,elId){const tgt=new Date(target).getTime(),cnt=document.getElementById(elId);setInterval(()=>{const now=Date.now(),diff=tgt-now;if(diff<=0){cnt.innerText='Game On!';return}const d=Math.floor(diff/86400000),h=Math.floor((diff%86400000)/3600000),m=Math.floor((diff%3600000)/60000),s=Math.floor((diff%60000)/1000);cnt.innerText=`${d}d ${h}h ${m}m ${s}s`},1000)}startCountdown('2025-06-15T15:30:00','countdown');

// Membership prompt
const btn=document.getElementById('joinBtn');btn?.addEventListener('click',()=>alert('Thanks for your interest! Please register.'));
setTimeout(()=>{if(window.location.pathname.includes('index.html')||window.location.pathname==='/' ){if(confirm('Enjoying our site? Join now!'))location.href='register.html'}},5000);