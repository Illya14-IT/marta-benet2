document.getElementById("more").addEventListener('click',function(){
    var element = document.getElementById("moreinfo");
    if(element.style.display === 'none') {
        element.style.display = 'block';
    } else{
        element.style.display = 'none';
    }
})

document.getElementById("more").addEventListener('click',function(){
    var element = document.getElementById("moreinfo1");
    if(element.style.display === 'none') {
        element.style.display = 'block';
    } else{
        element.style.display = 'none';
    }
})

document.getElementById("more").addEventListener('click',function(){
    var element = document.getElementById("moreinfo2");
    if(element.style.display === 'none') {
        element.style.display = 'block';
    } else{
        element.style.display = 'none';
    }
})

document.getElementById("contact-me").addEventListener('click', function() {
    var contact = document.getElementById("moreinf");
    if(contact.style.display === 'none') {
        contact.style.display = 'block';
    } else {
        contact.style.display = 'none';
    }
})

document.getElementById("moreinf1").addEventListener('click', function() {
    alert('Подзвонити по цьому номеру?')
});

document.getElementById("next").addEventListener('click', function() {
    var section2 = document.getElementById("selection2");
    var section1 = document.getElementById("selection1");
    if (section2.style.display === 'none'){
        section2.style.display = 'flex'
        section1.style.display = 'none'
    } else {
        section2.style.display = 'flex'
        section1.style.display = 'none'
    }
})

document.getElementById("prev").addEventListener('click', function() {
    var section2 = document.getElementById("selection2");
    var section1 = document.getElementById("selection1");
    if (section1.style.display === 'none'){
        section1.style.display = 'flex'
        section2.style.display = 'none'
    } else {
        section1.style.display = 'flex'
        section2.style.display = 'none'
    }
})