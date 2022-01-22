var cardDiv = document.querySelector("#card");
var currentUserName = "";

function getUserName(element) {
  console.log(element.value);
  currentUserName = element.value;
}

function makeCoderCard(data) {
  var res = ` <div class="card">
              <h1>${data.name}</h1>
              <div class="info-div">
              <img src="${data.avatar_url}"<br>
              <div class="info">
                  <h3>Follower: ${data.followers}</h3>
                  <h3>Following: ${data.following}</h3>
                  <h3>Location: ${data.location}</h3>
                  <h3>Public Repos: ${data.public_repos}</h3>
              </div>
              </div>
                </div>`;
  return res;
}

async function search() {
  var response = await fetch("https://api.github.com/users/" + currentUserName);
  var coderData = await response.json();
  console.log(coderData);
  cardDiv.innerHTML = makeCoderCard(coderData);
}
