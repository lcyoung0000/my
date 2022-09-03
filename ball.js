export class Ball {
  constructor(){
    this.radius=radius;
    this.vx=speed;
    this.vy=speed;

    const diameter=this.radius * 2;
    this.x=diameter+ (Math.random()* stageWidth-diameter);
    this.y=diameter+ (Math.random()* stageHeight-diameter);
  }
  draw(ctx, stageWidth, stageWidth) {
    this.x=this.vx;
    this.y=this.vy;

  this.bounceWindow(stageWidth, stageWidth);

  ctx.fillstyle = '#fdd700';
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
  ctx.fill();
  }

  bounceWindow(stageWidth, stageWidth) {
    const minX = this.radius;
    const maxX = stageWidth- this.radius;
    const minY = this.radius;
    const maxY = stageHeight - this.radius ;

    if(this.x <= minX || this.x >= maxX) {
      this.vx *= -1;
      this.x += this.vx;
    } else if (this.y <= minY || this.y >= maxY) {
      this.vy *= -1;
      this.y += this.vy;) {

    }
}
