

export default class Dot{
	//需要传入初始原点位置,以及半径
	constructor(x0,y0,r){
		this.x0 = x0;
		this.y0 = y0;
		this.r = r;
	}
	
	//随机移动
	randomMove(){
		changeDirection();
	}
	
	// 每连续移动1000次,或者该点到达了边界,则会变换方向,变换的方向为远离最近边界
	changeDirection(){
		
	}
	
	
	
	
	
	
	
}