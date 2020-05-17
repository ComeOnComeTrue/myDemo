// 点击开始 startPage消失 游戏开始
// 生成食物 生成三节蛇 
//上下左右--》改变方向运动
//判断吃到食物==》食物消失，蛇加一
//判断游戏结束，弹出框

var content = document.getElementsByClassName('content')[0];
var startBtn = document.getElementsByClassName('startBtn')[0];

init();
function init() {
    this.mapW = parseInt(getComputedStyle(content).width);
    this.mapH = parseInt(getComputedStyle(content).height);
    this.mapDiv = content;
    //食物
    this.foodX = 0;
    this.foodY = 0;
    //蛇
    this.snakeBody = [[3, 1, 'head'], [2, 1, 'body'], [1, 1, 'body']];




    startGame();
}

// 开始游戏
function startGame() {
    food();
    snake();
    setInterval(function () {
        move();
    }, 30);

};

// 随机生成食物
function food() {
    var food = document.createElement('div');
    this.foodX = Math.floor(Math.random() * (this.mapW / 20));
    this.foodY = Math.floor(Math.random() * (this.mapH / 20));
    food.style.left = this.foodX * 20 + 'px';
    food.style.top = this.foodY * 20 + 'px';
    this.mapDiv.appendChild(food).classList.add('food');
}
//三节蛇
function snake() {
    for (var i = 0; i < this.snakeBody.length; i++) {
        var snake = document.createElement('div');
        snake.style.left = this.snakeBody[i][0] * 20 + 'px';
        snake.style.top = this.snakeBody[i][1] * 20 + 'px';
        snake.classList.add(this.snakeBody[i][2]);
        this.mapDiv.appendChild(snake).classList.add('snake');
    }

}
// 移动
function move() {
    for (var i = this.snakeBody.length - 1; i > 0; i--) {
        this.snakeBody[i][0] = this.snakeBody[i - 1][0];
        this.snakeBody[i][1] = this.snakeBody[i - 1][1];
    }

}
// 删除自身
function removeClass(className) {
    var ele = document.getElementsByClassName(className);
    while (ele.length > 0) {
        ele[0].parentNode.removeChild(ele[0]); // 通过父级把自己干掉
    }
}