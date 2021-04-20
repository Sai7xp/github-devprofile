import { css } from "./card.style.mjs";
const template = document.createElement("template");
template.innerHTML = /* html */ `
<style>
    ${css}
</style> 

<div class="content">
</div>

    
`;
export class GitProfile extends HTMLElement {
  constructor() {
    super();

    // Append template to shadow root
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr == "data-width" && oldValue != newValue) {
      this[attr] = newValue;
    }
  }

  render() {

    this.userGitData;
    this.fetchGitData().catch((err) => console.error(err));
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {}

  createCard() {
    const content = this._shadowRoot.querySelector(".content");

    let data = {};
    if (this.userGitData.message == "Not Found") {
      data = {
        profilePic: false,
        name: this.dataset.name || this.dataset.username,
      };
      console.log("username incorrect");
      content.innerHTML += /* html */ `
      <h1>Error 404 : Check your github user name again </h1>
      `;
    } else {
      data = {
        profilePic: this.userGitData.avatar_url,
        name: this.dataset.name || this.userGitData.name,
        url: this.userGitData.html_url,
        followers: this.userGitData.followers,
        following: this.userGitData.following,
        bio: this.userGitData.bio,
        repos: this.userGitData.public_repos,
      };

      content.innerHTML += /* html */ `
        
      <div class="center">
        
      <div class="profile">
      <img src="./3.svg"  class="bg-img" />
        <div class="image">
          <div class="circle-1"></div>
          <div class="circle-2"></div>
          <img src=${data.profilePic} width="70" height="70" alt="hey user">
        </div>
        <div class="name">${data.name}</div>
        <div class="job">${this.userGitData.location}</div>
        <div class="job">Bio : ${data.bio}</div>
        
        
        <div class="actions">
         <a href=${data.url}> <button class="btn">View Profile</button></a>
         <a href=${data.url}> <button class="btn">Say Hi!</button></a>
         
        </div>
      </div>
      
      <div class="stats">
        <div class="box">
          <span class="value">${data.repos}</span>
          <span class="parameter">Repos</span>
        </div>
        <div class="box">
          <span class="value">${data.followers}</span>
          <span class="parameter">Followers</span>
        </div>
        <div class="box">
          <span class="value">${data.following}</span>
          <span class="parameter">Following</span>
        </div>
      </div>
    </div>
            `;
    }
  }

  fetchGitData() {
    return fetch("https://api.github.com/users/" + this.dataset.username)
      .then((res) => res.json())
      .then((userGitData) => {
        console.log(userGitData);
        this.userGitData = userGitData;

        if (1 === 1) {
          this.createCard();
        }
      });
  }
}

customElements.define("git-widget", GitProfile);
