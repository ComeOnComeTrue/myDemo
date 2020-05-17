//点击开始游戏--》startpage消失--》游戏开始
//随机出现食物，出现三姐蛇开始运动
//上下左右--》改变方向运动
//判断吃到食物==》食物消失，蛇加一
//判断游戏结束，弹出框


var content = document.getElementsByClassName('content')[0];
var startPage = document.getElementsByClassName('startPage')[0];
var startBtn = document.getElementsByClassName('startBtn')[0];
var score = document.getElementsByClassName('score')[0];
var scoreBox = document.getElementById('scoreBox');
var loser = document.getElementsByClassName('loser')[0];
var loserScore = document.getElementsByClassName('loserScore')[0];
var close = document.getElementsByClassName('close')[0];
var startAndS = document.getElementById('startAndS');
var startPage = document.getElementsByClassName('startPage')[0];

var snakeMove;
var speed = 200;

var startGameBool = true;
var startPushBool = true;

init();
//初始化
function init() {
    //地图
    this.mapW = parseInt(getComputedStyle(content).width);
    this.mapH = parseInt(getComputedStyle(content).height);
    this.mapDiv = content;
    //食物
    // this.foodW = 20;
    // this.foodH = 20;
    this.foodX = 0;
    this.foodY = 0;
    //蛇
    // this.snakeH = 20;
    // this.snakeW = 20;
    this.snakeBody = [[3, 1, 'snakehead'], [2, 1, 'snakebody'], [1, 1, 'snakebody']];
    // this.snakeBody = [[4, 1, 'snakehead'], [3, 1, 'snakebody'], [2, 1, 'snakebody']];
    //游戏属性 蛇头向右边 左右键不可用
    this.direct = 'right';
    this.left = false;
    this.right = false;
    this.up = true;
    this.down = true;
    //分数
    this.score = 0;
}
// 开始按钮 运行
function startGame() {
    startPage.style.display = 'none';
    startAndS.style.display = 'block';
    food();
    snake();
}
// 随机出现食物
function food() {
    var food = document.createElement('div');
    // food.style.width = this.foodW + 'px';
    // food.style.height = this.foodW + 'px';
    // food.style.position = 'absolute';
    this.foodX = Math.floor(Math.random() * (this.mapW / 20));
    this.foodY = Math.floor(Math.random() * (this.mapH / 20));
    food.style.left = this.foodX * 20 + 'px';
    food.style.top = this.foodY * 20 + 'px';
    this.mapDiv.appendChild(food).setAttribute('class', 'food');//在content显示并创建属性
}
// 蛇身
function snake() {
    for (var i = 0; i < this.snakeBody.length; i++) {
        var snake = document.createElement('div');
        // snake.style.width = this.snakeW + 'px';
        // snake.style.height = this.snakeH + 'px';
        // snake.style.position = 'absolute';
        snake.style.left = this.snakeBody[i][0] * 20 + 'px';
        snake.style.top = this.snakeBody[i][1] * 20 + 'px';
        snake.classList.add(this.snakeBody[i][2]); // snake创建两个calss名
        this.mapDiv.appendChild(snake).classList.add('snake');//在content显示并创建calss
        switch (this.direct) {//方向
            case 'left':
                snake.style.transform = 'rotate(180deg)'; // 顺时针方向180度
                break;
            case 'up':
                snake.style.transform = 'rotate(270deg)';
                break;
            case 'right':
                break;
            case 'down':
                snake.style.transform = 'rotate(90deg)';
                break;
            default:
                break;
        }
    }
}
// 移动
function move() {
    for (var i = this.snakeBody.length - 1; i > 0; i--) {
        this.snakeBody[i][0] = this.snakeBody[i - 1][0];
        this.snakeBody[i][1] = this.snakeBody[i - 1][1];
    }
    switch (this.direct) {//方向
        case 'left':
            this.snakeBody[0][0] -= 1;
            break;
        case 'up':
            this.snakeBody[0][1] -= 1;
            break;
        case 'right':
            this.snakeBody[0][0] += 1;
            break;
        case 'down':
            this.snakeBody[0][1] += 1;
            break;
        default:
            break;
    }
    removeClass('snake');
    snake();
    if (this.snakeBody[0][0] == this.foodX && this.snakeBody[0][1] == this.foodY) {
        var snakeEndX = this.snakeBody[this.snakeBody.length - 1][0];
        var snakeEndY = this.snakeBody[this.snakeBody.length - 1][1];
        switch (this.direct) {//吃到食物之后
            case 'left':
                this.snakeBody.push([snakeEndX - 1, snakeEndY, 'snakebody']);
                break;
            case 'up':
                this.snakeBody.push([snakeEndX, snakeEndY - 1, 'snakebody']);
                break;
            case 'right':
                this.snakeBody.push([snakeEndX + 1, snakeEndY, 'snakebody']);
                break;
            case 'down':
                this.snakeBody.push([snakeEndX, snakeEndY + 1, 'snakebody']);
                break;
            default:
                break;
        }
        this.score += 1;
        scoreBox.innerHTML = this.score;
        removeClass('food');
        food();
    }
    if (this.snakeBody[0][0] < 0 || this.snakeBody[0][0] >= this.mapW / 20) {
        overGame();
    }
    if (this.snakeBody[0][1] < 0 || this.snakeBody[0][1] >= this.mapH / 20) {
        overGame();
    }
    var snakeHX = this.snakeBody[0][0];
    var snakeHY = this.snakeBody[0][1];
    for (var i = 1; i < this.snakeBody.length; i++) {
        if (snakeHX == snakeBody[i][0] && snakeHY == snakeBody[i][1]) {
            overGame();
        }
    }
}
//游戏结束
function overGame() {
    removeClass('snake');
    removeClass('food');
    clearInterval(snakeMove);
    this.snakeBody = [[3, 1, 'snakehead'], [2, 1, 'snakebody'], [1, 1, 'snakebody']];
    this.direct = 'right';
    this.left = false;
    this.right = false;
    this.up = true;
    this.down = true;
    loser.style.display = 'block';
    loserScore.innerHTML = this.score;
    //分数
    this.score = 0;
    scoreBox.innerHTML = this.score;
    startGameBool = true;
    startPushBool = true;
    startAndS.setAttribute('src','../snake_food/imges/start.png');   
}
// 删除自身
function removeClass(className) {
    var ele = document.getElementsByClassName(className);
    while (ele.length > 0) {
        ele[0].parentNode.removeChild(ele[0]); // 通过父级把自己干掉
    }
}
// 对应按键
function setDerict(code) {
    switch (code) {
        case 37:
            if (this.left) {
                this.direct = 'left';
                this.left = false;
                this.right = false;
                this.up = true;
                this.down = true;
            }
            break;
        case 38:
            if (this.up) {
                this.direct = 'up';
                this.left = true;
                this.right = true;
                this.up = false;
                this.down = false;
            }
            break;
        case 39:
            if (this.right) {
                this.direct = 'right';
                this.left = false;
                this.right = false;
                this.up = true;
                this.down = true;
            }
            break;
        case 40:
            if (this.down) {
                this.direct = 'down';
                this.left = true;
                this.right = true;
                this.up = false;
                this.down = false;
            }
            break;
        default:
            break;
    }
}

// 结合dom事件
bindEvent();
function bindEvent() {
    close.onclick = function () {
        loser.style.display = 'none';
        startBtn.style.display = 'block';
    }
    startBtn.onclick = function () {
        startAndPush();
    }
    startAndS.onclick = function () {
        startAndPush();
    }
}

function startAndPush() {
    if (startPushBool) {
        if (startGameBool) {
            startGame();
            startGameBool = false;
        }
        startAndS.setAttribute('src', '../snake_food/imges/pause.png');
        document.onkeydown = function (e) {
            var code = e.which;
            setDerict(code);
        }
        snakeMove = setInterval(function () {
            move();
        }, speed);
        startPushBool = false;
    } else {
        startAndS.setAttribute('src', '../snake_food/imges/start.png');
        clearInterval(snakeMove);
        document.onkeydown = function (e) {
            e.returnValue = false;
            return false;
        }
        startPushBool = true;
    }
}



