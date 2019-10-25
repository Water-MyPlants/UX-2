// import {$} from './jquery-3.4.1.min';

const pathOfJson = "../../data/member_bios.json";

// const convertNameToKebab = function (name) {
//   const kebab = (
//     name
//     .split(/\s+/)
//     .join("-")
//     .toLowerCase()
//   );
//   return kebab;
// }

const writeMemberBioSocialHtml = function (member) {
  let social = "";
  /// add github, if defined
  if (member.github !== undefined && member.github.length > 0) {
    social += `<a href="${member.github}"><i class="fab fa-github-square"></i></a>`;
  }
  /// add twitter, if defined
  if (member.twitter !== undefined && member.twitter.length > 0) {
    social += `<a href="${member.twitter}"><i class="fab fa-twitter-square"></i></a>`;
  }
  /// if there are social links, put them in paragraph
  if (social.length > 0) {
    social = `<p class="team-member social">${social}</p>`;
  }
  return social;
}

const writeMemberBioHtml = function (member , index) {
  console.log (member);
  return (`
    <li class="team-member card" id="team-member--${index + 1}">
      <div class="cool">
        <img class="team-member photo" src="../../images/team-members/${member.photo}" alt="photo of ${member.name}">
      </div>
      <div class="info">
        <h3 class="team-member name">${member.name}</h3>
        <p class="team-member role">${member.role}</p>
        <p class="team-member location">${member.location.city}, ${member.location.state_province_region}, ${member.location.nation}</p>
        ${writeMemberBioSocialHtml (member)}
      </div>
    </li>
  `);
}

/// load JSON and do stuff to it
$.getJSON (pathOfJson , function (dataJson) {
  const dataHtml = dataJson.map (
    writeMemberBioHtml
  );
  dataHtml.forEach(
    (html) => { console.log (html); }
  );
});
