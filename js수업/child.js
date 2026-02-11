// 부모창에 입력핸 리흔을 가져와서 지시창의 input태그에 넣기
// 새창을 열어준 부모창(메인창)은 windiw.dpenr

let parentNme = window.opener.getElementById("chill")




//이메일을 클릭하면 부모창의 input 태그에 넣기
const list = document.querySelectorAll(".emailText");

list.forEach( text => { text.addEventListener('click',()=>{
   //부모창의 이메일 input 태그 가져오기
    let parentEmail= window.opener.document.getElementById("email");
    parentEmail.value = test.innerText;

})});








// function a(text){
//     text.addEventListener('click', function(){

//     });;
//}