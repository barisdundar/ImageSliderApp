var models=[
{
    name:'Iphone SE',
    image:'img/ipse.jpg',
    link:'https://www.teknosa.com/apple-iphone-se-64gb-gece-yarisi-cep-telefonu-mmxf3tua-p-125078533'

},
{
    name:'Iphone 11',
    image:'img/ip11.jpg',
    link:'https://www.teknosa.com/apple-iphone-11-64gb-akilli-telefon-siyah-p-125077793'

},
{
    name:'Iphone 12',
    image:'img/ip12.jpg',
    link:'https://www.teknosa.com/apple-iphone-12-128gb-akilli-telefon-siyah-p-125077816'

},
{
    name:'Iphone 13',
    image:'img/ip13.jpg',
    link:'https://www.teknosa.com/apple-iphone-13-128gb-mavi-akilli-telefon-p-125078216'

},
{
    name:'Iphone 14',
    image:'img/ip14.jpg',
    link:'https://www.teknosa.com/apple-iphone-14-128gb-mavi-cep-telefonu-mpvn3tua-p-125078732?shopId=2085&gowitAdId=147d450b-8c75-47eb-b080-9c6ea342bd4b'

},
];


var index = 0;
var slaytCount = models.length;
var interval;

var settings={
    duration : '2000',
    random : false
};

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);    
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})


function init(settings){

    var prev;
    interval=setInterval(function(){
        
        if(settings.random){
            // random index
            do{
                index = Math.floor(Math.random() * slaytCount);
            }while(index == prev)
            prev = index;
        }else{
            // artan index
            if(slaytCount == index+1){
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);

    },settings.duration)
  

}



function showSlide(i){

    index = i;

    if (i<0) {
        index = slaytCount - 1;
    }
    if(i >= slaytCount){
        index =0;
    }

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    
    document.querySelector('.card-link').setAttribute('href',models[index].link);
}



