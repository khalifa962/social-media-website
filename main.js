//============variables===========//
//SideBar
const menuItems=document.querySelectorAll('.menu-item');
//Messages
const messageNotification=document.querySelector('#messages-notifications');
const messagesBox=document.querySelector('.messages');
const allMessages=document.querySelectorAll('.message');
const MessSearch=document.querySelector('#message-search');
//select box for friend request
const requestBox=document.querySelectorAll('.request');
//buttons
const accept =document.querySelectorAll('.request .action .accept');
const refuse =document.querySelectorAll('.refuse');
//Grapping Theme variables
//theme menu item 
const theme=document.querySelector('#theme');
const themeModal=document.querySelector('.customize-theme')
//font sizes
const fontSizes=document.querySelectorAll('.choose-size span');
//grapping :root element
var root=document.querySelector(':root');
//grapping all color spans
const colorsPalette=document.querySelectorAll('.choose-color span');
//selecting background changing buttons
var bg1=document.querySelector('.background .choose-bg .bg-1');
var bg2=document.querySelector('.background .choose-bg .bg-2');
var bg3=document.querySelector('.background .choose-bg .bg-3');




//============Functions==========//
//Remove Active Class From All Items
function removeActiveClassFromMenuItems(){
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
};
//Add Active Class To The Selected Menu Item
menuItems.forEach((item)=>{
    item.addEventListener('click',()=>{
      if(item.classList.contains('popup')){
          removeActiveClassFromMenuItems();
          item.classList.add('active');
          document.querySelector('.notification-popup').style.cssText=`transform:rotateX(0deg)`;
      }else{
          removeActiveClassFromMenuItems();
          item.classList.add('active');
          document.querySelector('.notification-popup').style.cssText=`transform:rotateX(90deg)`;
      }
    })
});
// ==========Messages================
//highlighting messages div wen clicking on message-notification element
messageNotification.addEventListener('click',()=>{
    messagesBox.style.boxShadow='0px 0px 5px 1px  var(--color-primary)';
  messageNotification.querySelector('.notification-count').style.display='none';
    setTimeout(()=>messagesBox.style.boxShadow ='none',2000);
});

//search messages function
function searchMessage(){
    let value=MessSearch.value.toLowerCase();
    if(value.length>0){
         allMessages.forEach((message)=>{
            let names=message.querySelectorAll('h5');
            names.forEach((name)=>{    
                let nameContent=name.textContent.toLowerCase();
                if (nameContent.indexOf(value) !=-1){
                    message.style.display='felx';
                }else{
                    message.style.display='none';
                }
            })
        })
    }else{
        allMessages.forEach((message)=>{
            message.style.display='flex';
        })
    }
}
//Add search functionality to messages
MessSearch.addEventListener('keyup',searchMessage);


//==============Buttons Functionality 
//accept button 
accept.forEach((ele,index)=>{
    ele.addEventListener('click',()=>{
        removeRequestBox(index)

})
})
function removeRequestBox(j){
    for(let i=0;i<requestBox.length;i++){
        requestBox[j].classList.add('accepted');    
        setTimeout(()=>{
            requestBox[j].style.display='none';
        },2000)
    }
}
//Refuse button
refuse.forEach((ele,index)=>{
    ele.addEventListener('click',()=>{
        removeRequestBox(index)
})
})






//=============Theme Customization================

//display customiztion 
theme.addEventListener('click',()=>{
    themeModal.style.cssText=`
    transform: rotateX(0deg);
    `
})
//closing modal

themeModal.addEventListener('click',closeModal);

//closing theme modal function 
function closeModal(e){
if(e.target.classList.contains('customize-theme')){
    themeModal.style.cssText=`
    transform: rotateX(90deg);
    `;
}
}
//change font size
fontSizes.forEach((size)=>{
    let fontSize;
    size.addEventListener('click',()=>{
    fontSizes.forEach((size)=>{size.classList.remove('active')});
        size.classList.add('active');
        if(size.classList.contains('font-size-1')){
            fontSize='10px';
            root.style.setProperty('--sticky-top-left','5.4rem');
            root.style.setProperty('--sticky-top-right','5.4rem');
        }else if(size.classList.contains('font-size-2')){
            fontSize='13px';
            root.style.setProperty('--sticky-top-left','5.4rem');
            root.style.setProperty('--sticky-top-right','-7rem');
        }else if(size.classList.contains('font-size-3')){
            fontSize='16px';
            root.style.setProperty('--sticky-top-left','-2rem');
            root.style.setProperty('--sticky-top-right','-17rem');
        }else if(size.classList.contains('font-size-4')){
            fontSize='19px';
            root.style.setProperty('--sticky-top-left','-5rem');
            root.style.setProperty('--sticky-top-right','-25rem');
        }else if(size.classList.contains('font-size-5')){
            fontSize='22px';
            root.style.setProperty('--sticky-top-left','-12rem');
            root.style.setProperty('--sticky-top-right','-35rem');
        }
        //change font size using HTML Elements ,,that's why i used rem as a unit for all font sizes 
        document.querySelector('html').style.fontSize=fontSize;
    })
});

//change primary colors

colorsPalette.forEach((color)=>{
    let primaryHue;

    color.addEventListener('click',()=>{
        colorsPalette.forEach((c)=>{
            c.classList.remove('active');
        });
        color.classList.add('active');
        if(color.classList.contains('color-1')){
            primaryHue=252;
        }else if(color.classList.contains('color-2')){
            primaryHue=52;
        }else if(color.classList.contains('color-3')){
            primaryHue=352;
        }else if (color.classList.contains('color-4')){
            primaryHue=152;
        }else if(color.classList.contains('color-5')){
            primaryHue=202;
        }

    root.style.setProperty('--primary-color-hue',primaryHue);

    })
})
//change the background color
let whiteColorLigthness;
let lightColorLigthness;
let darkColorLigthness;

const changeBg=()=>{
    root.style.setProperty('--light-color-lightness',lightColorLigthness);
    root.style.setProperty('--white-color-lightness',whiteColorLigthness);
    root.style.setProperty('--dark-color-lightness',darkColorLigthness);
}



bg2.addEventListener('click',()=>{
darkColorLigthness='95%';
whiteColorLigthness='20%';
lightColorLigthness='15%';
//add acive class 
bg2.classList.add('active');
//remove active class from other elements
bg1.classList.remove('active');
bg3.classList.remove('active');
//setting new bakcground
changeBg();
});

bg3.addEventListener('click',()=>{
    darkColorLigthness='95%';
    whiteColorLigthness='10%';
    lightColorLigthness='0%';
    //add acive class 
    bg3.classList.add('active');
    //remove active class from other elements
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    //setting new bakcground
    changeBg();
});
bg1.addEventListener('click',()=>{
    darkColorLigthness='17%';
    whiteColorLigthness='100%';
    lightColorLigthness='95%';
    //add acive class 
    bg1.classList.add('active');
    //remove active class from other elements
    bg3.classList.remove('active');
    bg2.classList.remove('active');
    //setting new bakcground
    changeBg();
})

