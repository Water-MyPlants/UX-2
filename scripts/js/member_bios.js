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

const writeMemberBioHtml = function (member , index) {
  console.log (member);
  return (`
    <li class="team-member card" id="team-member-${index}">
      <div class="cool">
        <img class="team-member photo" src="../../images/team-members/${member.photo}" alt="photo of ${member.name}">
      </div>
      <div class="info">
        <h3 class="team-member name">FirstName LastName</h3>
        <p class="team-member location">City, State/Province/Region, Nation</p>
        <p class="team-member role">Role</p>
        <p class="team-member blurb">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente tenetur
          harum, dolore
          ipsum ab, maxime repellat repudiandae labore facilis enim autem accusantium. Voluptas id quaerat adipisci
          labore, omnis rem ullam.</p>
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
    (html) => {
      console.log (html);
    }
  );
});
