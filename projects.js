const dict = {
    csi3450: {
        location: "https://github.com/aedillo1/csi-3450",
        img: "images/book_library.PNG",
        title: "Title: Donate-To-Library",
        roles: "Roles: Programmer",
        desc: "In CSI-3450 (Database Design and Implementation), I worked with a team to create a program that allows users to donate books into a library system. The front end UI is developed with Java, and the back end that holds the book information is developed with MariaDB.",
    },
    csi3370: {
        location: "https://github.com/aedillo1/csi-3370",
        img: "images/inventory_management.PNG",
        title: "Inventory Management System",
        roles: "Roles: Programmer",
        desc: "In CSI-3370 (Software Engineer and Practice), I worked with a team to create an inventory management system that allows workers to barcode scan items and quickly input them into a database. This program was created with both Java and MariaDB.",
    },
    hf: {
        location: "https://gamebanana.com/mods/41250",
        img: "images/holofunk.png",
        title: "Title: Friday Night Funkin': Hololive Funkin' (HoloFunk)",
        roles: "Roles: Lead Director, Story Writer, Programmer",
        desc: "\"Hololive Funkin\" also known as \"HoloFunk\" is a crossover mod between Friday Night Funkin', and hololive Production.",
    },
    nciw: {
        location: "https://gamebanana.com/mods/313573",
        img: "images/nciw.png",
        title: "Title: Hololive Funkin': Non-Canon Ina Week",
        roles: "Roles: Assistant Director, Story Writer, Programmer",
        desc: "Non-Canon Ina Week (NCIW) is a fanmade mod of HoloFunk.",
    },  
    bb: {
        location: "https://gamebanana.com/mods/354325",
        img: "images/biker_brawlout.png",
        title: "Friday Night Funkin': Biker Brawlout",
        roles: "Roles: Programmer",
        desc: "Biker Brawlout is an original mod of Friday Night Funkin'.",
    },        
    ghostie: {
        location: "https://gamebanana.com/mods/392124",
        img: "images/ghost_town.png",
        title: "Title: Friday Night Funkin': Ghost Town",
        roles: "Roles: Programmer",
        desc: "Ghost Town is a crossover mod between Friday Night Funkin' and Touhou.",
    }      
};

function lazyAutomation() {
    var keys = []
    for (var key in dict) {
        keys.push(String(key))
    }
    console.log(keys)
    for (let i = 0; i < keys.length; i++) {
        console.log(keys[i])
        const someDiv = document.createElement('div')
        someDiv.className = "projects"
        someDiv.innerHTML = "<a href=" + dict[keys[i]].location + " target=\"_blank\"><img src=" + dict[keys[i]].img + "></a>"
        someDiv.innerHTML += "<ul><li>" + dict[keys[i]].title + "</li><li>" + dict[keys[i]].roles + "</li></ul>"
        someDiv.innerHTML += "<p>" + dict[keys[i]].desc + "</p>"
        document.body.appendChild(someDiv)
    }
}

lazyAutomation()