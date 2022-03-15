const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    },
    {
        "id": 6,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=444",
        "author": {
            "name": "Mario Rossi",
            "image": "https://unsplash.it/300/300?image=13"
        },
        "likes": 135,
        "created": "2013-08-13"
    },
    {
        "id": 7,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=354",
        "author": {
            "name": "Giulia Capitegli",
            "image": "https://unsplash.it/300/300?image=19"
        },
        "likes": 85,
        "created": "2021-01-15"
    },
    {
        "id": 8,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=147",
        "author": {
            "name": "Giorgio Butani",
            "image": null
        },
        "likes": 69,
        "created": "2021-04-12"
    },
    {
        "id": 9,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Idro Mantelli",
            "image": "https://unsplash.it/300/300?image=49"
        },
        "likes": 43,
        "created": "2021-09-04"
    },
    {
        "id": 10,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=626",
        "author": {
            "name": "Bruno Toscano",
            "image": "https://unsplash.it/300/300?image=59"
        },
        "likes": 77,
        "created": "2021-06-08"
    },
    {
        "id": 11,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=704",
        "author": {
            "name": "Alessia Lombarda",
            "image": "https://unsplash.it/300/300?image=69"
        },
        "likes": 106,
        "created": "2021-08-18"
    },
    {
        "id": 12,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=314",
        "author": {
            "name": "Lucia Marinaro",
            "image": null
        },
        "likes": 73,
        "created": "2019-09-19"
    },
    {
        "id": 13,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=124",
        "author": {
            "name": "Tessa Sapienti",
            "image": "https://unsplash.it/300/300?image=89"
        },
        "likes": 99,
        "created": "2020-02-20"
    },
    {
        "id": 14,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=334",
        "author": {
            "name": "Sirio Primo",
            "image": "https://unsplash.it/300/300?image=99"
        },
        "likes": 111,
        "created": "2018-12-21"
    },
    {
        "id": 15,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=524",
        "author": {
            "name": "Babbo Natale",
            "image": "https://unsplash.it/300/300?image=129"
        },
        "likes": 345,
        "created": "2016-07-27"
    }
];

const container = document.getElementById('container');
let today = new Date().toISOString().slice(0, 10);

generatePost(container, posts);

const likeButtons = document.querySelectorAll('.js-like-button');
const likesCounter = document.querySelectorAll('.js-likes-counter');
const likedPosts = [];

likeButtonEvent(likeButtons,likesCounter,posts,likedPosts);

function generatePost(container,posts){
    posts.forEach(element => {

        if(element.author.image == null){
            let index = element.author.name.indexOf(' ');
            element.author.image = element.author.name.charAt(0).toUpperCase()+element.author.name.charAt(index+1).toUpperCase();
        }

        container.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${element.author.image}" alt="${element.author.image}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${element.author.name}</div>
                        <div class="post-meta__time">${weeksPassed(element.created,today)} settimane fa</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${element.content}</div>
            <div class="post__image">
                <img src="${element.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${element.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`

    });
}   

function likeButtonEvent(likeButtons,likesCounter,posts,likedPosts){
    let clicked = [];
    for(let i=0 ; i < posts.length ; i++){
        clicked[i]=false;

        likeButtons[i].addEventListener('click',function(e){
            e.preventDefault();

            this.classList.toggle('like-button--liked');

            if(!clicked[i]){
                likesCounter[i].innerHTML= parseInt(likesCounter[i].innerHTML)+1;
                clicked[i] = true;
                likedPosts.push(posts[i].id);
            }else if(clicked[i]){
                likesCounter[i].innerHTML= parseInt(likesCounter[i].innerHTML)-1;
                clicked[i] = false;
                let index = likedPosts.indexOf(posts[i].id);
                likedPosts.splice(index,1);
            }
            console.log(likedPosts)
        });
    }
}

function convertDate(date){
    return date.slice(8,10)+date.slice(4,8)+date.slice(0,4);
}
console.log(convertDate(posts[0].created));

function weeksPassed(past,now){
    const birth = Date.UTC(past.slice(0,4),past.slice(5,7),past.slice(8,10));
    const current = Date.UTC(now.slice(0,4),now.slice(5,7),now.slice(8,10));
    return Math.floor((current-birth)/(1000*60*60*24*7));
}
