

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

// 모달 팝업
var targetBtn = document.querySelectorAll('.btn-modalOpen');
var targetBtnClose = document.querySelectorAll('.btn-modalClose');

// 팝업 열기
for(var i = 0; i < targetBtn.length; i++){
    targetBtn[i].addEventListener('click', function(){	   
        targetID = this.getAttribute('data-target');
        //alert(targetID);
        document.getElementById(targetID).classList.add('on');
        createDiv();
    });
}

// 팝업 닫기
for(var j = 0; j < targetBtnClose.length; j++){
    targetBtnClose[j].addEventListener('click', function(){		
		
        targetID = this.getAttribute('data-target');
        //alert(targetID);
        document.getElementById(targetID).classList.remove('on');
        document.querySelector('.overlay').remove();
    });
}

//팝업 딤
function createDiv() {    
    const newDiv = document.createElement('div');
    newDiv.classList.add('overlay');    
    document.body.appendChild(newDiv);
}

document.body.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.querySelector('.modal').style.display === 'block' ) {
        alert('test')
        document.querySelector('.btn-modalClose').click();
    }
});







