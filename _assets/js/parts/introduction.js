// update my age, have my birthday
document.querySelector('#developer_age').textContent = (function () {
  var year = 1994;
  var month = 6;
  var day = 1;

  var today = new Date();
  var age = today.getFullYear() - year;

  if (today.getMonth() < (month - 1)
      || (today.getMonth() === (month - 1) && today.getDate() < day)) {
    age--;
  }

  return age;
})();
