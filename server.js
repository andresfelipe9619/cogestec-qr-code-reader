var GENERAL_DB =
  "https://docs.google.com/spreadsheets/d/1108Pbaw4SD_Cpx2xc6Q7x1UvrET0SsPgNNZOPumt9Gg/edit#gid=0";

function doGet(request) {
  var isAdmin = validateUserSession();
  //   var isAttendant = readRequestParameter(request);
  if (isAdmin && isAttendant) {
    return createHtmlTemplate("index.html");
  } else if (isAttendant) {
    return createHtmlTemplate("index.html");
  } else return createHtmlTemplate("close.html");
}
function createHtmlTemplate(filename) {
  return HtmlService.createTemplateFromFile(filename)
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function validateUserSession() {
  var guess_email = Session.getActiveUser().getEmail();
  if (
    guess_email == "suarez.andres@correounivalle.edu.co" ||
    guess_email == "samuel.ramirez@correounivalle.edu.co"
  ) {
    return true;
  }
  return false;
}
