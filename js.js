$(document).ready(function(){
    let imageList = ["img0", "img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9"];
    let PetIdList = ["img0", "img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9"];

    let iam = "I am "
    let namet = "My name is ";
    let specie = "And I am a ";
    let agender = " years old and a ";
    let favouritefood = "I love ";
    let hobbies = "My hobbies are ";
    let funfact = "Fun Fact ";

    let idname = $("#name");   //heading
    let idspecie = $("#specie");
    let idagender = $("#agender");
    let idfavouritefood = $("#favfood");
    let idhobbies = $("#hobbies");
    let idfunfact = $("#funfact");
    let image = $("#petimg");


    let pets = [
        {name: "Mitzi", whatami: "cat", age: 8, gender: "Male", favouritefood: "Milk", hobbies: "sleeping", funfact: "I am the king of hide and seek!", image:"https://www.telegraph.co.uk/content/dam/news/2018/01/31/TELEMMGLPICT000152847520_trans_NvBQzQNjv4BqBZzVTDWb-G_1O9tH1a1pH9KvHfOfb-25MzBft889O3c.jpeg?imwidth=450"},
        {name: "Alpha", whatami: "Dog", age: 8, gender: "Female", favouritefood: "Dog biscuits", hobbies: "Running", funfact: "I know the way back home from anywhere", image:"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBPpd5o.img?h=270&w=270&m=6&q=60&o=f&l=f&x=383&y=203"},
        {name: "Edison", specie: "Turtle", age: 4, gender: "Male", favouritefood: "lettuce", hobbies: "Eating", funfact: "Long distance sprinting", image:"http://www.turtlerescueleague.com/application/files/3414/6973/0659/Screenshot_2016-07-14-09-55-39_6375375_opt.png"},
        {name: "Bingo", whatami: "dog", age: 3, gender: "Male", favouritefood: "meet", hobbies: "eating", funfact: "I love to sleep with my owners", image:"https://amp.thisisinsider.com/images/5b310c4f5e48ec560b8b45a7-1136-852.jpg"},
        {name: "Moss", whatami: "cat", age: 2, gender: "Male", favouritefood: "bread", hobbies: "traveling outside", funfact: "I have a boyfriend🏳‍🌈", image:"https://www.catster.com/wp-content/uploads/2015/06/cat-adoption-tips-3.jpg"},
        {name: "Midelton", whatami: "cat", age: 1, gender: "Male", favouritefood: "everything", hobbies: "eating", funfact: "I'm Moss's boyfriend😻", image:"https://s3-media4.fl.yelpcdn.com/bphoto/RK7t9X-Ii4pRP8vKPcSH1w/348s.jpg"}
    ];

});
