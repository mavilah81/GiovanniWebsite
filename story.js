const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(x=>observer.observe(x));
// Background depth and scene parallax
if(matchMedia('(pointer:fine)').matches){document.querySelectorAll('.scene-art').forEach(card=>card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.backgroundPosition=`${50+x*8}% ${50+y*8}%`}));}
