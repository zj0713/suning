// banner
{
	let imgs=document.querySelectorAll(".bn_img li");
	let pagers=document.querySelectorAll(".bb_dian li");
	let banner=document.querySelector(".bn_banner");
	let prev=document.querySelector(".banner_lbtn");
	let next=document.querySelector(".banner_rbtn");

	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(let i=0;i<pagers.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
	});

	let n=0;
	function move(){
		n++;
		if(n === imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(let i=0;i<imgs.length;i++){
			imgs[i].classList.remove("active");
			pagers[i].classList.remove("active");
		}
		imgs[n].classList.add("active");
		pagers[n].classList.add("active");
	}
	let t=setInterval(move,3000);
	
	banner.onmouseenter=function(){
		clearInterval(t);
	};
	banner.onmouseleave=function(){
		t=setInterval(move, 3000);
	};
	next.onclick=function(){
		move();
		
	};
	prev.onclick=function(){
		n-=2;
		move();
	};

}
// 内容模块
{
	let toTop=document.querySelector(".yiru .tan1");
        toTop.onclick=function () {
            // document.documentElement.scrollTop=0;
            let st=document.documentElement.scrollTop;
            let t=setInterval(function () {
                st-=25;
                if(st<0){
                    st=0;
                    clearInterval(t);
                }
                document.documentElement.scrollTop=st;

            },10);
    };


    let topBar=document.querySelector(".topBar");
    let leftBar=document.querySelector(".leftBar");
    window.onscroll=function () {
        let st=document.documentElement.scrollTop;
        if(st>1147){
            topBar.style.display="block";
        }else{
            topBar.style.display="none";
        }

        if(st>2860){
            leftBar.style.display="block";
        }else{
            leftBar.style.display="none";
        }
        document.documentElement.scrollTop=st;
    }


    let tips=document.querySelectorAll(".tip");
    let containers=document.querySelectorAll(".container");
    tips.forEach(function(ele,index){
    	ele.onclick=function(){
    		let ot=containers[index].offsetTop-70;
    		let now=document.documentElement.scrollTop;
    		let speed=(ot-now)/8;
    		let time=0;
    		let t=setInterval(function(){
    			time+=25;
    			now+=speed;
    			if(time===200){
    				clearInterval(t);
    			}
    			document.documentElement.scrollTop=now;
    		},25);
    	}
    });

    window.addEventListener("scroll",function(){
    	let st=document.documentElement.scrollTop;

    	for(let i=0;i<containers.length;i++){

    		if(st>containers[i].offsetTop-70){
    			for(let i=0;i<tips.length;i++){
    				tips[i].classList.remove("active");
    			}
    			tips[i].classList.add("active");
    		}
    	}

    });

}
// 侧导航	
{
	let labels=document.querySelectorAll(".bc_left1");
	let menus=document.querySelectorAll(".banner_list");
	let obj=menus[0];
	labels.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			menus[index].style.display="block";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}


	})
}
