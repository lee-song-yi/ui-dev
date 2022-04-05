

//스크랩 툴팁
const btnScrap = document.getElementById('btnScrap')
const toasts = document.getElementById('toasts')

const messages = [
    '스크랩 삭제되었습니다.',
    '스크랩 추가되었습니다.',
]

btnScrap.addEventListener('click', () => createNotification(btnScrap))

function createNotification(tearget) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
	toasts.appendChild(notif);

	if( tearget.classList.contains('on') ){		
		notif.innerText = messages[0]
	
	}else{		
		notif.innerText = messages[1]		
	}

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

// //모달 팝업
var targetBtn = document.querySelectorAll('.btn-modalOpen');
var targetBtnClose = document.querySelectorAll('.btn_modalClose');
var targetModal = 

var targetID;

// 팝업 열기
for(var i = 0; i < targetBtn.length; i++){
	targetBtn[i].addEventListener('click', function(e){
	  e.preventDefault();	 
	  targetID = this.getAttribute('href');
	  alert(targetID);
	  document.querySelector(targetID).classList.add('on')
	});
  }

// 팝업 닫기
for(var j = 0; j < targetBtnClose.length; j++){
	targetBtnClose[j].addEventListener('click', function(e){
		e.preventDefault();
		
		targetID = this.getAttribute('href');
		alert(targetID);
		document.querySelector(targetID).classList.remove('on')
	});
  }
  

//모달팝업
// document.addEventListener('click', function (e) {
//     e.preventDefault();
//     var target = e.target;

//     if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'modal') {
//         if (target.hasAttribute('data-target')) {
//             var m_ID = target.getAttribute('data-target');
//             document.getElementById(m_ID).classList.add('on');
//             e.preventDefault();
//         }
//     }
    
//     if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modal') || target.classList.contains('modal')) {
//         var modal = document.querySelector('[class="modal on"]');
//         modal.classList.remove('on');
//         e.preventDefault();
//     }
// }, false);

// document.body.addEventListener('keydown', (e) => {
//   if (e.key === 'Escape') {
//     console.log(e);
//     document.querySelector('.btn_modalClose').click();  
//   }
// });






