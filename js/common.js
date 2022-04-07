// 모달 팝업
var targetBtn = document.querySelector('.btn-modalOpen');
var targetBtnClose = document.querySelector('.btn-modalClose');

/*
// 팝업 열기
for(var i = 0; i < targetBtn.length; i++)
{
    targetBtn[i].addEventListener('click', function()
    {	   
        targetID = this.getAttribute('data-target');
        //alert(targetID);
        document.getElementById(targetID).classList.add('on');
        createDiv();
    });
}


// 팝업 닫기
for(var j = 0; j < targetBtnClose.length; j++){

    targetBtnClose[j].addEventListener('click', function()
    {		
        targetID = this.getAttribute('data-target');
        //alert(targetID);
        document.getElementById(targetID).classList.remove('on');
        document.querySelector('.overlay').remove();
    });
}
*/

BindingButton(targetBtn, OpenPopup);
BindingButton(targetBtnClose, ClosePopup);





///////////////////////////////////////////////////////////////////////

function BindingButton(buttons, action)
{
    
        buttons.addEventListener('click', function()
        {	   
            targetID = this.getAttribute('data-target');
            action(targetID);                 
        });
    
}


function OpenPopup(aOpenTargetID)
{
    document.getElementById(aOpenTargetID).classList.add('on');
    createDiv();
}

function ClosePopup(aCloseTargetID)
{
    document.getElementById(aCloseTargetID).classList.remove('on');
    document.querySelector('.overlay').remove();
}






//팝업 딤
function createDiv() 
{    
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







