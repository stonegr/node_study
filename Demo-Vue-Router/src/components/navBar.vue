<template>
  <div class="container">
    <div class="search-bar">
      <div class="logo-teams"><img src="../img/Teams.png" /></div>
      <div class="search-info">
        <div>
          <img src="../img/Icon-button-left.png" />
          <img src="../img/Icon-button-right.png" />
        </div>
        <div class="search-input">
          <img src="../img/Search.png" />
          <input class="font-text" type="text" placeholder="Search" />
        </div>
      </div>
      <div class="account-info">
        <img src="../img/Icon-button.png" />
        <div class="avt-people">
          <img src="../img/Presence.png" />
        </div>
        <img src="../img/Subtract.png" />
        <img src="../img/Maximize.png" />
        <img src="../img/Dismiss.png" />
      </div>
    </div>
    <div class="menu-list">
      <div class="sub-list">
        <div class="border"></div>
        <router-link to="/">
          <img src="../img/Shape-tbao.png" />
          <p class="font-menu">Activity</p>
        </router-link>
      </div>
      <div class="sub-list">
        <div class="border"></div>
        <router-link to="/chat">
          <img src="../img/Shape-chat.png" />
          <p class="font-menu">Chat</p>
        </router-link>
      </div>
      <div class="sub-list list-note">
        <div>
            <div class="border"></div>
        <router-link to="/TeamsPage">
          <img src="../img/Icon-teams.png" />
          <p class="font-menu">Teams</p>
        </router-link>
        </div>
      </div>
      <div class="sub-list">
        <div class="border"></div>
        <router-link to="/calendar">
          <img src="../img/IconContainer.png" />
          <p class="font-menu">Calendar</p>
        </router-link>
      </div>
      <div class="sub-list">
        <div class="border"></div>
        <router-link to="/calls">
          <img src="../img/icon-call.png" />
          <p class="font-menu">Calls</p>
        </router-link>
      </div>
      <div class="sub-list">
        <div class="border"></div>
        <router-link to="/files">
          <img src="../img/icon-file.png" />
          <p class="font-menu">Files</p>
        </router-link>
      </div>
      <div class="sub-list">
        <div class="border"></div>
        <router-link to="/Workshift">
          <img src="../img/Shape-workshift.png" />
          <p class="font-menu">Workshipt</p>
        </router-link>
      </div>
      <div class="sub-list"><img src="../img/Icon-string-stack6.png" /></div>
      <div class="sub-list">
        <div class="border"></div>
        <router-link to="/apps">
          <img src="../img/Shape-app.png" />
          <p class="font-menu">Apps</p>
        </router-link>
      </div>
      <div class="background-linear"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBar",
};
</script>

<style scoped>
@font-face {
  font-family: "Segoe UI Local";
  src: local("Segoe UI Light");
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: "Segoe UI Local";
  src: local("Segoe UI Semilight");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Segoe UI Local";
  src: local("Segoe UI");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Segoe UI Local";
  src: local("Segoe UI Semibold");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "Segoe UI Web (West European)";
  src: url("https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-light.woff2")
      format("woff2"),
    url("https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-light.woff")
      format("woff");
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: "Segoe UI Web (West European)";
  src: url("https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semilight.woff2")
      format("woff2"),
    url("https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semilight.woff")
      format("woff");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Segoe UI Web (West European)";
  src: url("https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-regular.woff2")
      format("woff2"),
    url("https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-regular.woff")
      format("woff");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Segoe UI Web (West European)";
  src: url("https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semibold.woff2")
      format("woff2"),
    url("https://static2.sharepointonline.com/files/fabric/assets/fonts/segoeui-westeuropean/segoeui-semibold.woff")
      format("woff");
  font-weight: 600;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  font-family: "Segoe UI Local", "Segoe UI Web (West European)", sans-serif;
  font-style: normal;
}

.font-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}

.font-title {
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #242424;
}

.font-label {
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
}

.font-meet {
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
}

.font-circle {
  font-weight: 700;
  font-size: 12px;
  line-height: 8px;
}

.font-menu {
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #616161;
}

.color-circle1 {
  color: #7f5d0a;
}

.color-circle2 {
  color: #4f6136;
}

.color-circle3 {
  color: #25454f;
}

::-webkit-scrollbar {
  width: 0;
}

.container {
  width: 100%;
  height: auto;
}

.search-bar {
  width: calc(100% - 2rem);
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #444791;
  padding: 0 1rem;
}

.search-bar div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-teams {
  width: 2%;
  justify-content: center !important;
}

.account-info {
  width: 12%;
  height: 80%;
}

.avt-people {
  width: 28px;
  height: 28px;
  position: relative;
  border-radius: 50%;
  background-image: url(../img/avatar-woman.jpg);
  background-size: contain;
  background-position: center;
}

.avt-people img {
  position: absolute;
  right: -3px;
  bottom: -1px;
}

.search-info {
  width: 35%;
  height: 80%;
  margin-left: 10%;
}

.search-input {
  width: 85%;
  height: 90%;
  background-color: #e0e0ed;
  border-radius: 4px;
  padding-left: 1rem;
}

.search-input input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  padding-left: 0.5rem;
  outline: none;
}

.input-search div {
  display: flex;
  align-items: center;
}

.menu-list {
    width: calc(2% + 2rem);
    height: 92vh;
    background: #EBEBEB;
    display: flex;
    flex-direction: column;
    position: relative;
}

.sub-list {
    width: 100%;
    height: 7vh;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
}

.sub-list a
{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}

.sub-list:nth-child(8) img {
    border-top: 1px solid #D1D1D1;
    padding: 1rem 1rem 1rem 1rem;
}

.sub-list:nth-child(9) {
    margin-top: auto;
}

.background-linear
{
    position: absolute;
    width: 0.5rem;
    height: 92vh;
    right: 0;
    background: linear-gradient(90deg, rgba(204, 204, 204, 0) 0%, rgba(190, 190, 190, 0.2) 100%, rgba(173, 173, 173, 0.2) 100%, rgba(173, 173, 173, 0.2) 100%);
}

.border {
    position: absolute;
    width: 3%;
    height: 70%;
    background-color: #5B5FC7;
    border-radius: 20px;
    left: 0.25rem;
    display: none;
}

.sub-list:hover .border
{
    display: block;
}

</style>