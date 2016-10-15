window.onload = function()
{
	
	
	
	var x=document.getElementById("maze");
	var getAll=x.getElementsByTagName("*");
	var getBoundary=document.querySelectorAll("#maze .boundary");
	var top1=x.offsetTop;
	var left1=x.offsetLeft;
	var width1=x.offsetWidth;
	var height1=x.offsetHeight;
	
	x.onmousemove=myFunction(event);
	
	function myFunction(e) 
	{
		var x = e.clientX;
		var y = e.clientY;
		if(x<left1+width1)
		{
			x.addEventListener("mouseover",turnAllRed);
		}
	}
	
	for (i=0;i<getAll.length;i++)//push
	{
		if (getAll[i]==document.getElementById("start"))
		{
			getAll[i].addEventListener("click",changeBack);
			getAll[i].addEventListener("click",d);
		}
	}
	
	function turnRed()
	{
		this.className = "boundary youlose";
	}
	
	function turnAllRed()
	{
		for (i=0;i<getBoundary.length ;i++)
		{
			getBoundary[i].className = "boundary youlose";
		}
	}
	
	/*function turnAllRed()
	{
		for (i=0;i<getAll.length;i++)
		{
			if (getAll[i]!=document.getElementById("start") && getAll[i]!=document.getElementById("end"))
			{
				getAll[i].className = "boundary youlose";
			}
		}
	}*/
	for (i=0;i<getAll.length;i++)//push
	{
		if (getAll[i]==document.getElementById("end"))
		{
			getAll[i].addEventListener("mouseover",d);
		}
	}
	function d()
	{
		for (i=0;i<getBoundary.length;i++)
		{
			getBoundary[i].addEventListener("mouseover",loseh2);
		}
		for (i=0;i<getAll.length;i++)
		{
			if (getAll[i]==document.getElementById("end"))
			{
				getAll[i].addEventListener("mouseover",winh2);
			}
		}
		/*for (i=0;i<getAll.length;i++)
		{
			if (getAll[i]!=document.getElementById("start") && getAll[i]!=document.getElementById("end"))
			{
				getAll[i].addEventListener("mouseover",loseh2);
			}
			if (getAll[i]==document.getElementById("end"))
			{
				getAll[i].addEventListener("mouseover",winh2);
			}
		}*/
	}
	
	
	function changeBack()
	{
		for (i=0;i<getAll.length;i++)
		{
			if (getAll[i]!=document.getElementById("start") && getAll[i]!=document.getElementById("end"))
			{
				getAll[i].className = "boundary";
			}
		}
		document.getElementById("status").innerHTML = "Move your mouse over the \"S\" to begin.";
	}
	
	function lose()
	{
		alert("You lose!");
	}
	function loseh2()
	{
		document.getElementById("status").innerHTML = "You lose!";
	}
	function win()
	{
		alert("You win!");
	}
	function winh2()
	{
		document.getElementById("status").innerHTML = "You win!";
	}
	
	for (i=0;i<getBoundary.length;i++)
	{
		getBoundary[i].addEventListener("mouseover",turnRed);
	}
	
	for (i=0;i<getBoundary.length;i++)
	{
		getBoundary[i].addEventListener("mouseover",turnAllRed);
	}
};