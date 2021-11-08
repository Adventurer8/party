let img; // Declare variable 'img'.
let cnv;
let a;
let d;
let x, y;
let rot;
let key;

function setup () {
    cnv = createCanvas(1280, 650);
    background(0);
	
	x = 100;
	y = 100;

	mas = [];
	vmas = [];
	xmas = [];
	ymas = [];

	for(let i = 0; i<20; i++) {
		mas[i] = createP('Xoxoxo!'+ (random(4) < 1 ? ' ♫':'') + (random(4) < 2 ? ' ♪':'!') + (random(4) < 1 ? ' :D':''));
		mas[i].style('color', color(50+random(200),50+random(250),50+random(240)));
		mas[i].style('fontSize',10+random(20) +'px');
		xmas[i] =(random(1000));
		ymas[i] = random(20)-50;
		vmas[i] = 3+random(5);
		mas[i].position(xmas[i],ymas[i]);
	}
  	img = createGraphics(1280, 650);
  	let b = createP('All right!..');
  	let c = createP('Beacause I\'m here');
  	key = createP('tap <^> arrow');
  	key.position(100,140);
  	rot = createInput('write me:3');
  	rot.position(200,200);
  	a = createP('Why?')
  	cnv.position(0,0);
  	b.position(x-70,y);
  	a.position(x,y);
  	c.position(x+40,y);
  	d = createP('Ola! Amigo').position(200,200);
  	d.style('fontSize', '32px');
  	d.style('angle', 10);
	rot.input(myInputEvent);
	b1=new ball(1000,300, 0,5,50,color(0,0,200,100));
	flag = 0;
}

var flag;
var mas;
var vmas;
var xmas,ymas;

function myInputEvent() {
		flag = 1;	//XoXxo-rain
		for(let i =0;i<20;i++) {
			ymas[i]=random(300)-400;
			xmas[i]=random(1000);
		}
}
 
let s1 = 'A', s2 = 'A', s3 = 'A';

function draw () {

	if(flag)
		for(let i = 0;i<20;i++) {
			ymas[i] += vmas[i];
			ymas[i] %= 500;
			mas[i].position(xmas[i],ymas[i]);
		}

	background(200);
	
	d.style('fontSize', 16*(2+sin(frameCount/40)) + 'px');
	d.style('color',color(255*sin(frameCount/100),255*sin(2+frameCount/100),255*sin(frameCount/100+4)));
	d.style('background',color(255*sin(PI/2+frameCount/100),255*sin(PI/2+2+frameCount/100),255*sin(PI/2+frameCount/100+4),frameCount%250));
	s1 = random(20) > 19 ? char(50+random(10)) : s1;
	s2 = random(20) > 19 ? char(80+random(10)) : s2;
	s3 = random(20) > 19 ? char(80+random(10)) : s3;
	if(random(20) > 15) d.html('Ola! ' + s1 + s2 + s3 + 'go');
	a.position(x,y);

	if(x+y>500) {
		a.style('color',color(random(200),random(200),random(200)));
		a.style('fontSize', 5+20*(1+sin(frameCount/30))+'px');
	}
	if(keyIsDown(37)) {	// <
		x--;
	}
	if(keyIsDown(38)) {	// ^
		y--;
	}
	if(keyIsDown(39)) {	// >
		x++;
	}
	if(keyIsDown(40)) {	// v
		y++;
	}
	// rotate(frameCount/100);
	rot.position(200+300*(1+sin(frameCount/120+PI/2)),200+100*sin(frameCount/40));

}


class ball {
	constructor(x,y,vx,vy,r,col) {
		this.r=r;
		this.d=2*r;
		this.x=x;
		this.y=y;
		this.vx=vx;
		this.vy=vy;
		this.col=col;
		this.v=sqrt(pow(this.vx,2)+pow(this.vy,2));
	}

	display() {
		push();
		stroke(0);
		fill(this.col);
		ellipse(this.x,this.y,this.d,this.d);
		pop()
	}

	move(dt) {
		this.x+=this.vx*dt;
		this.y+=this.vy*dt;
	}

	det_v() {
		this.v=sqrt(pow(this.vx,2)+pow(this.vy,2));
		return this.v;
	}
}