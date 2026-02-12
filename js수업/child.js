
// // 자바스트립트 객체   
// // 단일객체는 let  배열은 const 
// //객체 리터럴
// let obj1 = {name: "이순신", age: 34 , address: "통영시"};
// obj1.name="이성계";
// obj1.age;
// obj1.address;

// //함수형 객체
// function user(name,age,address){
//     this.name=name;
//     this.age=age;
//     this.address=address;
// }
// let u=new user("장보고", 54," 완도");
// let ul = new user=("장영실",33,"한양");

// //Object()를 이용하여 객체 만들기
//  let u2 = new Object()

// // class 문법으로 객체 만들기
// class member{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }

// //프로토타입을 이용한 객체생성
// obj1.prototype.job="군인";

// //이름과 이메일, 이름 하나에 등록된 이메일이 1~n 개 있다 가정하고 만들기

const info= [
    // 객체 - name :"이순신" , email :"lee@naver.com"
    //       name :"장영실" , email :"[jang@naver.com", "sil@gmail.com"]
    {name:"이순신", email:"lee@naver.com"},
    {name:"장영실", email:["jang@naver.com","sil@gmail.com"]},
    {name:"정도전", email:"dojeon@gmail.com"},
    {name:"문익점", email:["moon@naver.com", "moon123@gmail.com","point@naver.com","moonpoint@gmail.com"]}

];



// 부모창에 입력핸 리흔을 가져와서 지시창의 input태그에 넣기
// 새창을 열어준 부모창(메인창)은 window.opener
let parent_name = window.opener.document.getElementById("name");

//자식의input태그 가져오기
let childName = document.getElementById("childName");
//input 태그의 value에 부모의 이름 input 태그 value 값 넣기

childName.value = parentNme.value;

//이름에 맞는 이메일 찾아서 회면에 출력
//1. ul태그 가져오기
let ul = document.querySelector(".email_list");

//2.info에서 이름 찾기 
let person = info.find(u => u.name === parent_name.value);

//person에 저장된 값은 info배열의 객체 중 하나가 저장된다
// 아니면 일치하는 이름이 없는 경우 비어있다
if( !person){// 입력한 이름이 없는 경우 
    ul.innerHTML = "<li> 일치하는 이름이 없습니다.</li>";
}else{// 입력한 이름이 존재하는 경우

let li = document.createElement("li");
li.textContent = person.email;
ul.appendChild(li); // ul 태그의 자식으로 li태그 넣기

}



//이메일을 클릭하면 부모창의 input 태그에 넣기
const list = document.querySelectorAll(".emailText");

list.forEach( text => { text.addEventListener('click',()=>{
   //부모창의 이메일 input 태그 가져오기

   //이메일의 값이 문자열인가 배열인가 구분하여 처리
    if(Array.isArray(person.email)){//이메일은 배열이다
    
        for(email of person.email){
            ul.innerHTML += `<li class="emailText">${email}</li>`;
        }
        // "<li class ='emailText'>"+email+"</li>"; 이것보다 백틱으로 많이 사용
    }else{
        let li = document.createElement("li");
        li.textContent=person.email;
        ul.appendChild(li);//ul태그의 자식으로 li태그 넣기
    
    }



    let parentEmail= window.opener.document.getElementById("email");
    parentEmail.value = test.innerText;
    window.close();
})});

// function a(text){
//     text.addEventListener('click', function(){});;
// }