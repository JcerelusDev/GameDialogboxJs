function gameDialogBox(n,e,t,i){let l=document.createElement("div");document.body.appendChild(l),btnDialog=document.createElement("button"),btnDialog.classList.add("btnDialog"),this.elem=l,l.classList.add("dialog-container"),this.message=n,this.deleteTime=t||!1,this.opacity=i,color=e,""==e&&(e="black"),l.id="boxDialog",this.styleContainer=document.createElement("div"),document.body.appendChild(this.styleContainer),this.styleContainer.innerHTML="\n<style>\n*,::before,::after{\nbox-sizing:border-box;\nmargin:0;\npadding:0;\n}\n\n.dialog-container{\n//animation:anim .7s   linear ;\nborder:5px double black;\nmargin-left:15px;\nmargin-right:15px;\n}\n\n@keyframes anim{\nfrom{\ntransform:scale(0.8,0.9);\n}\n\nto{\ntransform:scale(0.9,1);\n}\n\n}\n\n\n.btnDialog{\nbackground:black;\ncolor:white;\nmargin-left:83%;\noutline:none;\nborder-radius:15px;\nwidth:30px;\nheight:30px;\n\n}\n\n.letter{\nanimation:  letter 1s linear;\n}\n\n\n@keyframes letter{\nfrom{\nopacity:0;\n\n}\n\nto{\nopacity:1;\n}\n\n}\n\n\n</style>\n";var o=0;l.style.textAlign="center",l.style.fontSize="13.7px",l.style.fontFamily="monospace",l.style.fontWeight="bold",l.style.background="#fff",l.style.opacity=this.opacity,l.style.color=this.color,l.style.lineHeight="20px",l.style.overflow="auto",l.style.borderRadius="8px",l.style.boxShadow="0 0 8px black",1==this.message.length&&(l.style.lineHeight="30px"),btnDialog.textContent=" A ",btnDialog.addEventListener("click",remove);var a=n.split("");return async function(){for(var n=0;n<a.length;n++)value=l.innerHTML+=`<span>${a[n]}</span>`,l.style.color="transparent";var i;l.appendChild(btnDialog),anime=function(){i=document.querySelectorAll("span")[o],o++,i&&(i.style.color=e,i.classList.add("letter")),l.innerText&&(i.style.color=e),o>=a.length&&clearInterval(timeIsUp)},t?(btnDialog.style.visibility="hidden",await setTimeout(()=>{document.body.removeChild(l)},79*a.length+1e3)):btnDialog.style.visibility="visible",timeIsUp=setInterval(anime,80)}(),this}
