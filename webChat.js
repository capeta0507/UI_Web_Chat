const webMessage = [
  {
    "no":1,
    "name": "David",
    "photo":"img/friends/David.png",
    "type":"text",
    "message":"Hi",
    "dateTime":"09/23 10:00",
    "me": false
  },
  {
    "no":2,
    "name": "Johnny",
    "photo":"img/me/Johnny.png",
    "type":"text",
    "message":"你好",
    "dateTime":"09/23 10:15",
    "me": true
  },
  {
    "no":3,
    "name": "David",
    "photo":"img/friends/David.png",
    "type":"text",
    "message":"推薦給你一張漂亮的底圖...",
    "dateTime":"09/23 10:16",
    "me": false
  },
  {
    "no":4,
    "name": "Johnny",
    "photo":"img/me/Johnny.png",
    "type":"text",
    "message":"好ㄜ",
    "dateTime":"09/23 10:18",
    "me": true
  },
  {
    "no":5,
    "name": "David",
    "photo":"img/friends/David.png",
    "type":"photo",
    "message":"img/photo/423893.jpg",
    "dateTime":"09/23 10:19",
    "me": false
  },
  {
    "no":6,
    "name": "Johnny",
    "photo":"img/me/Johnny.png",
    "type":"text",
    "message":"謝謝，我將用在新的專案上...",
    "dateTime":"09/23 10:20",
    "me": true
  },
  {
    "no":7,
    "name": "David",
    "photo":"img/friends/David.png",
    "type":"emoji",
    "message":"img/emoji/like.png",
    "dateTime":"09/23 10:16",
    "me": false
  }
]

let message = '';
webMessage.map(data => {
  if(data.me){
    if(data.type == 'text'){
      message += `
        <div class="message_row you-message">
          <div class="message-content">
            <div class="message-text">${data.message}</div>
            <div class="message-time">${data.dateTime}</div>
          </div>
        </div>
      `
    } else {
      message += `
        <div class="message_row you-message">
          <div class="message-content">
            <img class="ejIcon" src="${data.message}" alt="">
            <div class="message-time">${data.dateTime}</div>
          </div>
        </div>
      `
    }
  } else {
    if(data.type == 'text'){
      message += `
        <div class="message_row other-message">
          <div class="message-content">
            <img class="head" src="${data.photo}" alt="">
            <div class="message-text">${data.message}</div>
            <div class="message-time">${data.dateTime}</div>
          </div>
        </div>
      `
    } else {
      message += `
        <div class="message_row other-message">
          <div class="message-content">
            <img class="head" src="${data.photo}" alt="">
            <img class="ejIcon" src="${data.message}" alt="">
            <div class="message-time">${data.dateTime}</div>
          </div>
        </div>
      `
    }
  }
})

document.getElementById('chatRoom').innerHTML = message;