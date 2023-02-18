const url = 'https://randomuser.me/api/?result/10';
let container = document.querySelector('.container')

fetch(url)
     .then(resp => resp.json())
     .then(data => {
          let author = data.results;
          user(author)
     })


function user(user) {
     container.innerHTML = "";

     for (const item of user) {
          console.log(item);
          let  wrapper = document.createElement('div');
          let  profileHeader = document.createElement('div');
          let  profileDetails = document.createElement('div');
          let  img = document.createElement('img');
          let  h1  = document.createElement('h1')
          let  h2  = document.createElement('h2')
          let  datebirthday = document.createElement('p');
          let  contry = document.createElement('p');
          let  tel = document.createElement('p');

          wrapper.classList.add('wrapper')
          profileHeader.classList.add('profile-header')
          profileDetails.classList.add('profile-details')
          datebirthday.classList.add('datebirthday')
          contry.classList.add('contry')
          tel.classList.add('tel')
          
          img.src = item.picture.large;
          img.alt = "img"
          h1.innerHTML = `${item.name.first} - ${item.name.last}`;
          h2.innerHTML = item.email;
          datebirthday.innerHTML = item.dob.date;
          contry.innerHTML = item.location.country;
          tel.innerHTML = item.phone;

          wrapper.append(profileHeader, profileDetails)
          profileHeader.append(img,h1,h2);
          profileDetails.append(datebirthday,contry,tel)

          container.append(wrapper);

     }
}