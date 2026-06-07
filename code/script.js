const categoryColors = {

  labo: "#00ffff",     //研究室

  classroom: "#087c0e",    //普通教室

  office: "#808080",       //職員系

  toilet: "#ccff99",       //トイレ、自販機

  equipment: "#ffe600",    //設備、備品、準備室

  club: "#d2a679",         //部活系

  facility: "#d8b4ff",     //大施設

  special: "#384cfa",      //移動教室

  unknown: "#ff99cc"       //不明
}
const rooms = {
  "japaneselabo": {
    name: "国語研究室",
    floor: "1f.svg",
    category: "labo",
    // description: "国語の先生がいる
    // x: 550,
    // y:305
  },

  "socialstudieslabo": {
    name: "社会科研究室",
    floor: "1f.svg",
    category: "labo",
    // description: "社会科の先生がいる"
    // x: 1100,
    // y:760
  },

  "linenroom": {
    name: "被服教室",
    floor: "1f.svg",
    category: "special",
    // description: "本の貸し出しができる"
  //  x: 605,
  //   y:165
  },

 "artroom": {
    name: "美術教室",
    floor: "1f.svg",
    category: "special",
    // description: "本の貸し出しができる"
  //  x: 695,
  //  y:475
  },

   "cookingroom": {
    name: "調理教室",
    floor: "1f.svg",
    category: "special",
    // description: "本の貸し出しができる"
  //  x:750,
  //   y:175
  },

    "homeeconomicslabo": {
    name: "家庭科研究室",
    floor: "1f.svg",
    category: "labo",
    // description: "本の貸し出しができる"
  //  x: 680,
  //   y:175
  },

    "PElabo": {
    name: "体育研究室",
    floor: "1f.svg",
    category: "labo",
    // description: "本の貸し出しができる"
  //  x: 730,
  //   y:100
  },

    "office": {
    name: "事務室",
    floor: "1f.svg",
    category: "office",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
    "careerguidanceroom": {
    name: "進路指導室",
    floor: "1f.svg",
    category: "office",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
    "receptionroomright": {
    name: "応接室東",
    floor: "1f.svg",
    category: "office",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
    "printerroom": {
    name: "印刷室",
    floor: "1f.svg",
    category: "office",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
    "receptionroomleft": {
    name: "応接室西",
    floor: "1f.svg",
    category: "office",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
    "principaloffice": {
    name: "校長室",
    floor: "1f.svg",
    category: "office",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
    "academicaffairsoffice": {
    name: "教務室",
    floor: "1f.svg",
    category: "office",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
    "conferenceroom": {
    name: "第一会議室",
    floor: "1f.svg",
    category: "office",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
    "Auditorium": {
    name: "講堂",
    floor: "1f.svg",
    category: "facility",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
     "healthroom": {
    name: "保健室",
    floor: "1f.svg",
    category: "office",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
    "firstrecoveryroom": {
    name: "第一休養室",
    floor: "1f.svg",
    category: "office",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "schooltechnician_soffice": {
    name: "校内技師室",
    floor: "1f.svg",
    category: "office",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "secondrecoveryroom": {
    name: "第二休養室",
    floor: "1f.svg",
    category: "office",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "secondconferenceroom": {
    name: "第二会議室",
    floor: "3f.svg",
    category: "office",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
    "biggym": {
    name: "大体育館",
    floor: "1f.svg",
    category: "facility",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "dojo": {
    name: "柔剣道場",
    floor: "1f.svg",
    category: "facility",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "library": {
    name: "図書館",
    floor: "1f.svg",
    category: "facility",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "smallgym": {
    name: "小体育館",
    floor: "2f.svg",
    category: "facility",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "studyroom": {
    name: "自習室",
    floor: "2f.svg",
    category: "facility",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "clubroom": {
    name: "部室",
    floor: "1f.svg",
    category: "club",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "darkroom": {
    name: "暗室",
    floor: "1f.svg",
    category: "club",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "Planetarium": {
    name: "天体ドーム",
    floor: "5f.svg",
    category: "club",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "vendingmachine": {
    name: "自販機",
    floor: "1f.svg",
    category: "toilet",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "manWCentrance": {
    name: "1階昇降口男子トイレ",
    floor: "1f.svg",
    category: "toilet",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "womanWCentrance": {
    name: "1階昇降口女子トイレ",
    floor: "1f.svg",
    category: "toilet",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
        "manWCentrance": {
    name: "1階昇降口男子トイレ",
    floor: "1f.svg",
    category: "toilet",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
        "manWCentrance2": {
    name: "2階昇降口男子トイレ",
    floor: "2f.svg",
    category: "toilet",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
        "womanWCentrance2": {
    name: "2階昇降口女子トイレ",
    floor: "2f.svg",
    category: "toilet",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
        "manWCentrance3": {
    name: "3階昇降口男子トイレ",
    floor: "3f.svg",
    category: "toilet",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
        "womanWCentrance3": {
    name: "3階昇降口女子トイレ",
    floor: "3f.svg",
    category: "toilet",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
        "manWC1": {
    name: "1階2棟男子トイレ",
    floor: "1f.svg",
    category: "toilet",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
        "womanWC1": {
    name: "1階2棟女子トイレ",
    floor: "1f.svg",
    category: "toilet",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
          "manWC2": {
    name: "2階2棟男子トイレ",
    floor: "2f.svg",
    category: "toilet",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
          "womanWC2": {
    name: "2階2棟女子トイレ",
    floor: "2f.svg",
    category: "toilet",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
          "manWC3": {
    name: "3階2棟男子トイレ",
    floor: "3f.svg",
    category: "toilet",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
          "womanWC3": {
    name: "3階2棟女子トイレ",
    floor: "3f.svg",
    category: "toilet",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
          "manWC4": {
    name: "4階2棟男子トイレ",
    floor: "4f.svg",
    category: "toilet",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
          "womanWC4": {
    name: "4階2棟女子トイレ",
    floor: "4f.svg",
    category: "toilet",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
    "musicsuppliesroom": {
    name: "音楽備品室",
    floor: "1f.svg",
    category: "equipment",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "equipmentbill": {
    name: "設備棟",
    floor: "1f.svg",
    category: "equipment",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "cookingpreparationroom": {
    name: "調理準備室",
    floor: "1f.svg",
    category: "equipment",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "Samplesuppliesroom": {
    name: "標本備品室",
    floor: "1f.svg",
    category: "equipment",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "artpreparationroom": {
    name: "美術準備室",
    floor: "1f.svg",
    category: "equipment",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "sciencepreparationroom": {
    name: "化学準備室",
    floor: "2f.svg",
    category: "equipment",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "calligraphypreparationroom": {
    name: "書道準備室",
    floor: "2f.svg",
    category: "equipment",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "biologicalspecimensroom": {
    name: "生物標本室",
    floor: "3f.svg",
    category: "equipment",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "physicssupplyroom": {
    name: "物理備品室",
    floor: "3f.svg",
    category: "equipment",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "physicspreparationroom": {
    name: "物理準備室",
    floor: "3f.svg",
    category: "equipment",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "earthsciencepreparationroom": {
    name: "地学準備室",
    floor: "4f.svg",
    category: "equipment",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "musicpracticeroom": {
    name: "音楽練習室",
    floor: "1f.svg",
    category: "special",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
    "musicroom": {
    name: "音楽室",
    floor: "2f.svg",
    category: "special",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
    "secondscienceroom": {
    name: "第二理科講義室",
    floor: "2f.svg",
    category: "special",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "scienceroom": {
    name: "化学教室",
    floor: "2f.svg",
    category: "special",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "calligraphyroom": {
    name: "書道教室",
    floor: "2f.svg",
    category: "special",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "biologyroom": {
    name: "生物教室",
    floor: "3f.svg",
    category: "special",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "audiovisualroom": {
    name: "視聴覚教室",
    floor: "3f.svg",
    category: "special",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "firstscienceroom": {
    name: "第一理科講義室",
    floor: "3f.svg",
    category: "special",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "physicsroom": {
    name: "物理教室",
    floor: "3f.svg",
    category: "special",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "PCroom": {
    name: "PC教室",
    floor: "3f.svg",
    category: "special",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "earthscienceroom": {
    name: "地学教室",
    floor: "4f.svg",
    category: "special",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
   "musiclabo": {
    name: "音楽研究室",
    floor: "2f.svg",
    category: "labo",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
     "sciencelabo": {
    name: "化学研究室",
    floor: "2f.svg",
    category: "labo",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
     "foreignlanguagelabo": {
    name: "外国語研究室",
    floor: "2f.svg",
    category: "labo",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
     "mathlabo": {
    name: "数学研究室",
    floor: "3f.svg",
    category: "labo",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
     "biologylabo": {
    name: "生物研究室",
    floor: "3f.svg",
    category: "labo",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
    "LLroom": {
    name: "LL教室",
    floor: "2f.svg",
    category: "unknown",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
   "221": {
    name: "221",
    floor: "2f.svg",
    category: "unknown",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
     "222": {
    name: "222",
    floor: "2f.svg",
    category: "unknown",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
     "223": {
    name: "223",
    floor: "2f.svg",
    category: "unknown",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
     "224": {
    name: "224",
    floor: "2f.svg",
    category: "unknown",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
     "231": {
    name: "231",
    floor: "3f.svg",
    category: "unknown",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
     "232": {
    name: "232",
    floor: "3f.svg",
    category: "unknown",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
     "233": {
    name: "233",
    floor: "3f.svg",
    category: "unknown",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
     "234": {
    name: "234",
    floor: "3f.svg",
    category: "unknown",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
     "241": {
    name: "241",
    floor: "4f.svg",
    category: "unknown",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
     "242": {
    name: "242",
    floor: "4f.svg",
    category: "unknown",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
     "243": {
    name: "243",
    floor: "4f.svg",
    category: "unknown",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
     "244": {
    name: "244",
    floor: "4f.svg",
    category: "unknown",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
     "245": {
    name: "245",
    floor: "4f.svg",
    category: "unknown",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
   "121": {
    name: "121",
    floor: "2f.svg",
    category: "classroom",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
     "122": {
    name: "122",
    floor: "2f.svg",
    category: "classroom",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },   "123": {
    name: "123",
    floor: "2f.svg",
    category: "classroom",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
     "124": {
    name: "124",
    floor: "2f.svg",
    category: "classroom",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
    "125": {
    name: "125",
    floor: "2f.svg",
    category: "classroom",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
      "126": {
    name: "126",
    floor: "2f.svg",
    category: "classroom",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
    "127": {
    name: "127",
    floor: "2f.svg",
    category: "classroom",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
   "131": {
    name: "131",
    floor: "3f.svg",
    category: "classroom",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
     "132": {
    name: "132",
    floor: "3f.svg",
    category: "classroom",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
     "133": {
    name: "133",
    floor: "3f.svg",
    category: "classroom",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
     "134": {
    name: "134",
    floor: "3f.svg",
    category: "classroom",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
     "135": {
    name: "135",
    floor: "3f.svg",
    category: "classroom",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
     "136": {
    name: "136",
    floor: "3f.svg",
    category: "classroom",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
     "137": {
    name: "137",
    floor: "3f.svg",
    category: "classroom",
    // description: "本の貸し出しができる"
  //  x: 530,
  //   y:470
  },
}

function loadFloor(file){

  fetch(file)
    .then(r => r.text())
    .then(svg => {
      document.getElementById("map-area").innerHTML = svg
    })

}

function changeFloor(file){
  loadFloor(file)
}

// function showRoom(id){
//   const room = rooms[id]

//   document.getElementById("roomInfo").innerHTML = `
//     <h2>${room.name}</h2>
//     <p>${room.floor}</p>
//     <p>${room.description}</p>
//   `
// }

document
.getElementById("searchBox")
.addEventListener("input", function(e){

  const keyword =
    e.target.value.toLowerCase()

  document
  .querySelectorAll(".room-button")
  .forEach(button => {

    const roomName =
      button.dataset.room.toLowerCase()

    if(roomName.includes(keyword)){
      button.style.display = "block"
    } else {
      button.style.display = "none"
    }

  })

})

const searchBox = document.getElementById("searchBox")
const searchResults = document.getElementById("searchResults")

searchBox.addEventListener("input", () => {

  const keyword = searchBox.value.toLowerCase()

  searchResults.innerHTML = ""

  if (!keyword) return

  const filtered = Object.entries(rooms).filter(([id, room]) =>
    room.name.toLowerCase().includes(keyword)
  )

  filtered.forEach(([id, room]) => {

    const item = document.createElement("div")

    item.textContent = room.name
    item.className = "search-result-item"

item.onclick = () => {
  changeFloor(room.floor)
  setTimeout(()=>{
  highlightRoom(id)

  // showRoom(id)
},300)
  searchResults.innerHTML = ""
  searchBox.value = ""

}

    searchResults.appendChild(item)

  })

})

loadFloor("1f.svg")
let selectedRoom = null
let previousColor = null

function highlightRoom(id){

  if(selectedRoom){
    selectedRoom.style.fill = previousColor
  }

  const room =
    document.getElementById(id)

  if(room){

    previousColor =
      room.style.fill

    room.style.fill = "red"

    selectedRoom = room
  }
}