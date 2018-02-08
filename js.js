var an=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var res=[0,0,0,0,0,0,0,0,0];
var pg=1;
z=0;
function change(a,b,c)
{
if(b!=0)
	{pg=(Math.trunc((pg-1)/3)*3)+b;

     set2(b);
	 
	 
	 }	
else if(c!=0)
	{if(an[pg-1]==0&&c==1){
var a=confirm("ENTER ANSWER");
}
    else {
		if(c==1)
		pg=pg+1;
	else
		pg=pg-1;
	
	set1((Math.trunc((pg-1)/3))+1);
	if(pg%3==0)
		set2(3);
	else if(pg!=16)
		set2(pg%3);
	
	}
	}
else
	{pg=(3*(a-1))+1;
	
set2(1);
	set1(a);


	}
	 
	

setimg(pg);
setqu(pg);

	hid(pg);
	col(pg);
	 }





function hid(num)
{if(num==15)
	{document.getElementById('ans').style.visibility = "visible";
document.getElementById('anss').style.visibility = "hidden";
		document.getElementById('rep').style.visibility = "hidden";
document.getElementById('rep1').style.visibility = "visible";
document.getElementById('rep2').style.visibility = "visible";
 }  
 else if(num==1)
 {document.getElementById('ans').style.visibility = "hidden";
document.getElementById('anss').style.visibility = "visible";
	 
	 document.getElementById('rep1').style.visibility = "hidden";
document.getElementById('rep').style.visibility = "visible";
document.getElementById('rep2').style.visibility = "hidden";}
else
{document.getElementById('ans').style.visibility = "visible";
document.getElementById('anss').style.visibility = "hidden";
	 
	document.getElementById('rep1').style.visibility = "hidden";
document.getElementById('rep').style.visibility = "visible";
document.getElementById('rep2').style.visibility = "visible";}
}
 


function setimg(imgno)
{
	var image=document.getElementById('img');
image.src="image/qnimg"+imgno+".jpg";
}

function col(qo1)
{ if(qo1==1)
	{
		z1=an[0];
		var a1=document.getElementById('anss1');
var a2=document.getElementById('anss2');

if(z1==0)
{a1.className="w3-button w3-white w3-border w3-border-blue w3-round-large";
	a2.className="w3-button w3-white w3-border w3-border-pink w3-round-large";}
else if(z1==1)
{a1.className="w3-button w3-blue w3-border w3-border-blue w3-round-large";
	a2.className="w3-button w3-white w3-border w3-border-pink w3-round-large";}
	else
	{a1.className="w3-button w3-white w3-border w3-border-blue w3-round-large";
	a2.className="w3-button w3-pink w3-border w3-border-pink w3-round-large";}
	
	
	
	}
	
	else
	{
	z=an[qo1-1];
var a1=document.getElementById('ans1');
var a2=document.getElementById('ans2');
var a3=document.getElementById('ans3');
var a4=document.getElementById('ans4');
var a5=document.getElementById('ans5');

	if(z==0)
	{a1.className="w3-button w3-white w3-border w3-border-green w3-round-large";
	a2.className="w3-button w3-white w3-border w3-border-blue w3-round-large";
	a3.className="w3-button w3-white w3-border w3-border-yellow w3-round-large";
	a4.className="w3-button w3-white w3-border w3-border-orange w3-round-large";
	a5.className="w3-button w3-white w3-border w3-border-red w3-round-large";
	}
	else if(z==1)
	{a1.className="w3-button w3-green w3-border w3-border-green w3-round-large";
	a2.className="w3-button w3-white w3-border w3-border-blue w3-round-large";
	a3.className="w3-button w3-white w3-border w3-border-yellow w3-round-large";
	a4.className="w3-button w3-white w3-border w3-border-orange w3-round-large";
	a5.className="w3-button w3-white w3-border w3-border-red w3-round-large";
	}
	else if(z==2)
	{a1.className="w3-button w3-white w3-border w3-border-green w3-round-large";
	a2.className="w3-button w3-blue w3-border w3-border-blue w3-round-large";
	a3.className="w3-button w3-white w3-border w3-border-yellow w3-round-large";
	a4.className="w3-button w3-white w3-border w3-border-orange w3-round-large";
	a5.className="w3-button w3-white w3-border w3-border-red w3-round-large";
	}
	else if(z==3)
	{a1.className="w3-button w3-white w3-border w3-border-green w3-round-large";
	a2.className="w3-button w3-white w3-border w3-border-blue w3-round-large";
	a3.className="w3-button w3-yellow w3-border w3-border-yellow w3-round-large";
	a4.className="w3-button w3-white w3-border w3-border-orange w3-round-large";
	a5.className="w3-button w3-white w3-border w3-border-red w3-round-large";
	}
	else if(z==4)
	{a1.className="w3-button w3-white w3-border w3-border-green w3-round-large";
	a2.className="w3-button w3-white w3-border w3-border-blue w3-round-large";
	a3.className="w3-button w3-white w3-border w3-border-yellow w3-round-large";
	a4.className="w3-button w3-orange w3-border w3-border-orange w3-round-large";
	a5.className="w3-button w3-white w3-border w3-border-red w3-round-large";
	}

	else
	{
	a1.className="w3-button w3-white w3-border w3-border-green w3-round-large";
	a2.className="w3-button w3-white w3-border w3-border-blue w3-round-large";
	a3.className="w3-button w3-white w3-border w3-border-yellow w3-round-large";
	a4.className="w3-button w3-white w3-border w3-border-orange w3-round-large";
	a5.className="w3-button w3-red w3-border w3-border-red w3-round-large";
	} }
	
}

function setqu(no)
{var a=document.getElementById('ques');
var b=document.getElementById('gametitlebox');
	
	if(no==1)
	{a.innerHTML= '\n         Gender';
	b.innerHTML='A bit about you...';}
 
 else if(no==2)
{a.innerHTML= ' \n         Do you care about your health? ';
b.innerHTML='A bit about you...';} 
 
 else if(no==3)
{a.innerHTML= '\n         Can you quickly adapt to a new environment? ';
b.innerHTML='A bit about you...';}
 
 else if(no==4)
{a.innerHTML= '\n         Are you a hypochondriac? \n (Meaning: A person who is abnormally anxious) ';
b.innerHTML='Personality traits';}
 
 else if(no==5)
{a.innerHTML= '\n         Do you cry when you feel down or things do not go the right way? ';
b.innerHTML='Personality traits';}
 
 else if(no==6)
{a.innerHTML= '\n         Are you a person who is full of life and energy? ';
b.innerHTML='Personality traits';}
 
 else if(no==7)
{a.innerHTML= '\n         Do you have a lot of friends? ';
b.innerHTML='Friendship!';}
 
 else if(no==8)
{a.innerHTML= '\n         Are you sure that you connect with the right people? ';
b.innerHTML='Friendship Again!';}
 
 else if(no==9)
{a.innerHTML= '\n         Do you get angry very easily?';
b.innerHTML='Personality traits';}
 
 else if(no==10)
{a.innerHTML= '\n         Rate your interest in Physics: ';
b.innerHTML='Hobbies and Interests';}
 
 else if(no==11)
{a.innerHTML= '\n         Rate your interest in Science and Technology: ';
b.innerHTML='Hobbies and Interests';}
 
 else if(no==12)
{a.innerHTML= '\n         Rate your interest in Celebrity lifestyle: ';
b.innerHTML='Hobbies and Interests';}
 
 else if(no==13)
{a.innerHTML= '\n         Rate your interest in Adrenaline Sports: ';
b.innerHTML='Hobbies and Interests';}
 
 else if(no==14)
{a.innerHTML= '\n         Rate your interest in Dancing: ';
b.innerHTML='Hobbies and Interests';}
 
 else 
{a.innerHTML= '\n         Rate your interest in Shopping: ';
b.innerHTML='Hobbies and Interests';}
 
 }

function set1(no1)
{
	var m1=document.getElementById('l1');
	var m2=document.getElementById('l2');
	var m3=document.getElementById('l3');
	var m4=document.getElementById('l4');
	var m5=document.getElementById('l5');
	
	if(no1==1)
	{m1.className="w3-button w3-circle w3-teal";
     m2.className="w3-button w3-circle w3-black";
	 m3.className="w3-button w3-circle w3-black";
	 m4.className="w3-button w3-circle w3-black";
	 m5.className="w3-button w3-circle w3-black";	
		
	}
	else if(no1==2)
	{m2.className="w3-button w3-circle w3-teal";
     m1.className="w3-button w3-circle w3-black";
	 m3.className="w3-button w3-circle w3-black";
	 m4.className="w3-button w3-circle w3-black";
	 m5.className="w3-button w3-circle w3-black";	
		
	}
	else if(no1==3)
	{m3.className="w3-button w3-circle w3-teal";
     m2.className="w3-button w3-circle w3-black";
	 m1.className="w3-button w3-circle w3-black";
	 m4.className="w3-button w3-circle w3-black";
	 m5.className="w3-button w3-circle w3-black";	
		
	}
	else if(no1==4)
	{m4.className="w3-button w3-circle w3-teal";
     m2.className="w3-button w3-circle w3-black";
	 m3.className="w3-button w3-circle w3-black";
	 m1.className="w3-button w3-circle w3-black";
	 m5.className="w3-button w3-circle w3-black";	
		
	}
	else
	{m5.className="w3-button w3-circle w3-teal";
     m2.className="w3-button w3-circle w3-black";
	 m3.className="w3-button w3-circle w3-black";
	 m4.className="w3-button w3-circle w3-black";
	 m1.className="w3-button w3-circle w3-black";	
		
	}
}


function set2(no2)
{
	var l1=document.getElementById('s1');
	var l2=document.getElementById('s2');
	var l3=document.getElementById('s3');
	
if(no2==2)
{l1.className="w3-button w3-circle w3-teal";
l2.className="w3-button w3-circle w3-disable";
l3.className="w3-button w3-circle w3-teal";
}
else if(no2==1)
{l1.className="w3-button w3-circle w3-disable";
l2.className="w3-button w3-circle w3-teal";
l3.className="w3-button w3-circle w3-teal";
}
else 
{l1.className="w3-button w3-circle w3-teal";
l2.className="w3-button w3-circle w3-teal";
l3.className="w3-button w3-circle w3-disable";
}
}
	

function save(n)
{an[pg-1]=n;
col(pg);
}
function ssave(n)
{an[pg-1]=n;
col(pg);
}

function sub()
{
	var re=an[0]+an[1]+an[5];
	document.getElementById('show1').style.display="none";
	var x1=document.getElementById('fin1');
	var x2=document.getElementById('fin2');
	var x3=document.getElementById('fin3');
	var x4=document.getElementById('fin4');
	var x5=document.getElementById('fin5');
	var x6=document.getElementById('fin6');
	var x7=document.getElementById('fin7');
	var x8=document.getElementById('fin8');
	var x9=document.getElementById('fin9');
	
	
	if(an[0]==1)
	{var z=[0.00000,0.00000,0.00000,0.00000,0.00000,0.00000,0.00000,0.00000,0.00000];
z[0]=((-0.02366)*an[12])+((0.17116)*an[1])-((0.05705)*an[2])-((1.07431));
z[1]=((0.10235)*an[13])+((0.08305)*an[14])-((0.16216)*an[11])-((1.38154));
z[2]=((0.11495)*an[14])-((0.08772)*an[10])-((0.92752));
z[3]=((0.18360)*an[14])+((0.13228)*an[11])-((0.14065)*an[4])+((0.15385)*an[8])-(1.07338);
z[4]=((0.15889)*an[14])+((0.28112)*an[1])-((0.16080)*an[4])-((0.70052));
z[5]=((0.14571)*an[11])-((0.14720)*an[9])+((0.09738)*an[1])-((0.68008));
z[6]=((0.17899)*an[14])+((0.11903)*an[8])+((0.10237)*an[7])-((1.34381));
z[7]=((0.13057)*an[14])+((0.19970)*an[1])-((0.51880));
z[8]=((-0.12965)*an[2])-((0.23442)*an[5])+((1.55251));

for(i=0;i<9;i++)
{var zz=Math.exp(z[i]);
var zzz=(zz)/(1+zz)*100;
res[i]=Math.trunc(zzz);
}

}
    else
	{var z=[0.00000,0.00000,0.00000,0.00000,0.00000,0.00000,0.00000,0.00000,0.00000];
z[0]=((-0.11843)*an[12])+((0.07202)*an[1])-((0.08254)*an[4])-((0.84639));
z[1]=((0.07072)*an[14])+((0.08889)*an[11])+((0.31000)*an[4])-((2.51546));
z[2]=((0.11075)*an[14])-((0.14565)*an[10])+((0.18008)*an[8])-((1.01118));
z[3]=((0.20454)*an[14])-((0.09339)*an[11])+((0.16482)*an[4])+((0.18967)*an[8])-(1.46160);
z[4]=((0.06079)*an[14])+((0.13857)*an[11])+((0.15544)*an[4])-((0.60228));
z[5]=((0.08561)*an[14])+((0.09078)*an[11])-((0.13000)*an[9])+((0.20855)*an[4])-((1.24964));
z[6]=((0.17999)*an[1])+((0.06045)*an[4])+((0.12435)*an[8])+((0.28815)*an[7])-((2.10086));
z[7]=((-0.06588)*an[12])+((0.11320)*an[1])+((0.18848)*an[4])-((0.24819));
z[8]=((-0.11077)*an[2])-((0.16782)*an[6])-((0.13821)*an[5])+((1.96805));
	 
for(i=0;i<9;i++)
{var zz=Math.exp(z[i]);
var zzz=(zz)/(1+zz)*100;
res[i]=Math.trunc(zzz);
}

}
	
	x1.innerHTML=res[0];
	x2.innerHTML=res[1];
	x3.innerHTML=res[2];
	x4.innerHTML=res[3];
	x5.innerHTML=res[4];
	x6.innerHTML=res[5];
	x7.innerHTML=res[6];
	x8.innerHTML=res[7];
	x9.innerHTML=res[8];
	
	document.getElementById('show2').style.display="block";
	//document.getElementById('show2').innerHTML = re;//
	
	} 
	
function win(n)
{var a=confirm("do you want to quit!");
if(a==true&&n==1)
{window.location.href= "index.php";
}
else if(a==true&&n==2)
{window.location.href= "credits.html";
}
}
	
