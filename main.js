var canvas = document.getElementById('clock');
let ctx = canvas.getContext('2d');
let canvasWidth = canvas.width
let canvasHeight = canvas.height
let clockBorder = 6
let clockRadius = canvasWidth / 2
ctx.lineWidth = clockBorder
ctx.font = "12px serif"
ctx.translate(canvasWidth / 2, canvasHeight / 2)
ctx.save()

const now = new Date()
hours = now.getHours()
minutes = now.getMinutes()
seconds = now.getSeconds()
drawClock()
drawHour(hours)
drawMinute(minutes)
drawSecond(seconds)
setInterval(() => {
    ctx.clearRect(-100, -100, 200, 200)

    drawClock()
    const now = new Date()
    hours = now.getHours()
    minutes = now.getMinutes()
    seconds = now.getSeconds()
    drawHour(hours)
    drawMinute(minutes)
    drawSecond(seconds)

}, 10)


function drawClock() {
    ctx.restore()
    ctx.save()
    ctx.beginPath();
    ctx.arc(0, 0, clockRadius - clockBorder / 2, 0, Math.PI * 2, false); // 绘制
    ctx.closePath()
    ctx.stroke()
    const deg = Math.PI * 2 / 60
    const numberText = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2]
    for (let i = 0; i < 60; i++) {
        ctx.lineWidth = 1
        let scale = 1
        if (i % 5 === 0) {
            scale = 2
            ctx.textAlign = "center"
            ctx.textBaseline = "middle"
            ctx.font = '12px serif'
            ctx.fillText(numberText[i / 5], (clockRadius - 26) * Math.cos(i * deg), (clockRadius - 26) * Math.sin(i * deg))
        }
        ctx.beginPath()
        ctx.arc((clockRadius - 12) * Math.cos(i * deg), (clockRadius - 12) * Math.sin(i * deg), scale, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
    }

    ctx.beginPath()
    ctx.arc(0, 0, 5, 0, Math.PI * 2)
    ctx.fill()




}

function drawHour(hour) {
    ctx.restore()
    ctx.save()
    let canvasWidth = canvas.width
    let canvasHeight = canvas.height
    ctx.lineWidth = 6
    ctx.lineCap = "round"
    ctx.rotate((hour - 3) * Math.PI * 2 / (12));
    ctx.beginPath()
    ctx.moveTo(-10, 0)
    ctx.lineTo(40, 0)
    ctx.stroke()


}


function drawMinute(minute) {
    ctx.restore()
    ctx.save()
    ctx.rotate(0)
    let canvasWidth = canvas.width
    let canvasHeight = canvas.height
    ctx.lineWidth = 4
    ctx.lineCap = "round"
    ctx.rotate((minute - 15) * (Math.PI * 2 / (60)));
    ctx.beginPath()
    ctx.moveTo(-15, 0)
    ctx.lineTo(60, 0)
    ctx.stroke()
}


function drawSecond(second) {
    ctx.restore()
    ctx.save()
    let canvasWidth = canvas.width
    let canvasHeight = canvas.height
    ctx.lineWidth = 1
    ctx.strokeStyle = 'rgba(240, 52, 52, 1)'
    ctx.lineCap = "round"
    ctx.rotate((second - 15) * (Math.PI * 2 / (60)));
    ctx.beginPath()
    ctx.moveTo(-15, 0)
    ctx.lineTo(80, 0)
    ctx.stroke()
}

