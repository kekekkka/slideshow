// // setTimeout(function () {
// //     $('.images>img:nth-child(1)').css({
// //         transform: 'translatex(-100%)'
// //     })
// //     $('.images>img:nth-child(2)').css({
// //         transform: 'translatex(-100%)'
// //     })
// //     $('.images>img:nth-child(1)').one('transitionend', function (e) {
// // $(e.currentTarget) .addClass(".right").css({transform:'none'})
// //     })
// // }, 2000)
// // setTimeout(function () {
// //     $('.images>img:nth-child(2)').css({
// //         transform: 'translatex(-200%)'
// //     })
// //     $('.images>img:nth-child(3)').css({
// //         transform: 'translatex(-100%)'
// //     })
// // }, 4000)

let n
初始化()
let timer=setInterval(()=>{
  makeLeave(getImage(n))
    .one('transitionend', (e)=>{
      makeEnter($(e.currentTarget))
    })
  makeCurrent(getImage(n+1))
  n += 1
},1000)

document.addEventListener('visibilitychange',function(e){
  if(document.hidden){
    window.clearInterval(timer)
  }else{
    timer=setInterval(()=>{
      makeLeave(getImage(n))
        .one('transitionend', (e)=>{
          makeEnter($(e.currentTarget))
        })
      makeCurrent(getImage(n+1))
      n += 1
    },1000)
  }
})

function getImage(n){
  return $(`.images > img:nth-child(${x(n)})`)
}

function x(n){
  if(n>5){
    n = n%6
    if (n===0){
      n =6
    }
  } 
  return n
}

function 初始化(){
  n = 1
  $(`.images > img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter')
}

function makeCurrent($node){
  return $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node){
  return $node.removeClass('enter current').addClass('leave')
}
function makeEnter($node){
  return $node.removeClass('leave current').addClass('enter')
}