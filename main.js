let pass = document.getElementById('pass'),
 gen = document.getElementById('gen'),
 copy = document.getElementById('copy');

let letterUp = /[A-Z]/;
let letterLw = /[a-z]/;

mxl.onkeyup = () => {
  if (letterUp.test(mxl.value) || letterLw.test(mxl.value)) {
    mxl.value = '8'
  }
}
gen.onclick = () => {
  if (mxl.value > 18) {
    mxl.value = '18'
  } else if (mxl.value < 8) {
    mxl.value = '8'
  }
  
  const checkboxes = document.querySelectorAll(`input[type="checkbox"]:checked`);
  let values = [];
  if (checkboxes.length == 0) {
    document.querySelectorAll('input[type="checkbox"]').forEach((box) => {
      box.checked = true;
      values.push(...Array.from(box.dataset.contain));
    });
  } else {
    checkboxes.forEach((checkbox) => {
    values.push(...Array.from(checkbox.dataset.contain));
    });
  }
  pass.value = ''
  for (var i = 0; i < mxl.value; i++) {
    pass.value += values[Math.floor(Math.random() * values.length)]
  }
}

// Copy Password
copy.onclick = () => {
  pass.select();
  document.execCommand('copy')
}

cust.onclick = () => {
  document.querySelector('.customize').classList.toggle('close')
}
