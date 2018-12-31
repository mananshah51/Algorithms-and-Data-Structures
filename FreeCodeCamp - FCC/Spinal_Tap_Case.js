function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var look = str.match(/[A-z][a-z]+/g);

  var out = look.join("-");

  var final = out.toLowerCase();
  console.log(final);

  return final;
}

spinalCase("thisIsSpinalTap");
spinalCase("AllThe-small Things");
spinalCase("Teletubbies say Eh-oh");
spinalCase("The_Andy_Griffith_Show");