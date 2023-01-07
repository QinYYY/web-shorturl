

export function checkEmail(str) {
  var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
  if (re.test(str)) {

  } else {
    alert("invalid email address");
  }
}