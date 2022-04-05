$(document).ready(function(){
    //클래스를 가져와서 이벤트 구현
	var $toggleIcon = $('.btn_toggle');
	
	$toggleIcon.on('click', function(){		
		toggleIcon($(this));
	});

    var $toolTip = $('.btn_tooltip');
	$toolTip.on('click', function(){
        var $targetparents = $(this).parents()		
		toggleTooltip($(this));
	});
});

//토글 아이콘
function toggleIcon(target){
    target.toggleClass('on');
}

//토글 툴팁
function toggleTooltip(target){
    target.toggleClass('on');
}

//tooltip
function toolTip(){
    
}

//modal popup 
function modalPopOpen(){

}

function modalPopClose(){

}

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







