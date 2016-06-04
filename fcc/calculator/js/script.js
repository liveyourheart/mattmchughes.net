var shownNum = "0";
var storedNum = null;
var storedSign = null;
var lastPressIsOperation = false;

//constants for storing signs
var ADD = 'ADD';
var SUB = 'SUB';
var MULT = 'MULT';
var DIV = 'DIV';
var PER = 'PER';

window.onload = updateDisplay();


function catNum(num) {

  if (shownNum == 0) {
    shownNum = num;
  } else {
    shownNum = shownNum.toString() + num.toString();
  }
  lastPressIsOperation = false;
  updateDisplay();
}

function updateDisplay() {

  $('#display').text(shownNum);

}

//check for .
function periodValid() {

  return (shownNum.toString().indexOf('.') < 0);
}

//c button
function clear() {

  shownNum = "0";
  lastPressIsOperation = false;
  updateDisplay();
}

//ce button
function clearAll() {

  shownNum = "0";
  storedNum = null;
  storedSign = null;
  lastPressIsOperation = false;
  updateDisplay();
}

//on click listener to check if last button pressed was operation

$('.btn').on('click', function() {

  window.setTimeout(function() {
    console.log('after press:');
    console.log(storedNum + ' = storedNum');
    console.log(storedSign + ' = storedSign');
    console.log(shownNum + ' = shownNum');
  }, 500);
});


//store number

function storeNumber() {

  storedNum = shownNum;
}

function storeSign(sign) {

  var calcFirst = isStoredNumSignAndShown();

  if (calcFirst) {

    calculate();
    storedSign = sign;

  } else {

    storeNumber(shownNum);
    storedSign = sign;
    shownNum = 0;
  }
}

//is there a stored number?

function isStoredNum() {

  return storedNum !== null;
}

function isStoredSign() {

  return storedSign !== null;
}


function isStoredNumSign() {

  return storedNum !== null && storedSign !== null && shownNum == 0;
}

function isStoredNumSignAndShown() {

  return storedNum !== null && storedSign !== null && shownNum != 0;
}

//calculate

function calculate() {

  if (storedNum != null) {

    if (storedSign === MULT) {
      shownNum = Number(storedNum) * Number(shownNum);
      storedNum = shownNum;
    } else if (storedSign === DIV) {
      shownNum = Number(storedNum) / Number(shownNum);
      storedNum = shownNum;
    } else if (storedSign === ADD) {
      shownNum = Number(storedNum) + Number(shownNum);
      storedNum = shownNum;
    } else if (storedSign === SUB) {
      shownNum = Number(storedNum) - Number(shownNum);
      storedNum = shownNum;
    }
    storedSign = null;
  }

  return;
}


//main logic by button

$('#0').click(function() {

  catNum(0);

});

$('#1').click(function() {

  catNum(1);

});

$('#2').click(function() {

  catNum(2);

});

$('#3').click(function() {

  catNum(3);

});

$('#4').click(function() {

  catNum(4);

});

$('#5').click(function() {

  catNum(5);

});

$('#6').click(function() {

  catNum(6);

});

$('#7').click(function() {

  catNum(7);

});

$('#8').click(function() {

  catNum(8);

});

$('#9').click(function() {

  catNum(9);

});

$('#period').click(function() {

  var valid = periodValid();
  if (valid) {
    catNum('.');
  }
  lastPressIsOperation = false;

});

$('#add').click(function() {


  var calcFirst = isStoredNumSignAndShown();
  var ignore = isStoredNumSign();

  if(lastPressIsOperation === true){
    storedSign = ADD;
    return;
  }

  if (ignore) {
    console.log('ignored');
    storeSign(ADD);
    return;
  }

  if (calcFirst) {
    console.log('calculating');
    calculate();
    updateDisplay();
    storedSign = null;
    storeSign(ADD);

  } else {

    storeSign(ADD);

  }

  lastPressIsOperation = true;


});

$('#subtract').click(function() {

  var calcFirst = isStoredNumSignAndShown();
  var ignore = isStoredNumSign();

  if(lastPressIsOperation === true){
    storedSign = SUB;
    return;
  }

  if (ignore) {

    console.log('ignored');
    storeSign(SUB);
    return;
  }

  if (calcFirst) {
    console.log('calculating');
    calculate();
    updateDisplay();
    storedSign = null;
    storeSign(SUB);

  } else {

    storeSign(SUB);

  }

  lastPressIsOperation = true;


});

$('#multiply').click(function() {

  var calcFirst = isStoredNumSignAndShown();
  var ignore = isStoredNumSign();

  if(lastPressIsOperation === true){
    storedSign = MULT;
    return;
  }

  if (ignore) {

    console.log('ignored');
    storeSign(MULT);
    return;
  }

  if (calcFirst) {
    console.log('calculating');
    calculate();
    updateDisplay();
    storedSign = null;
    storeSign(MULT);

  } else {

    storeSign(MULT);

  }

  lastPressIsOperation = true;


});

$('#divide').click(function() {

  var calcFirst = isStoredNumSignAndShown();
  var ignore = isStoredNumSign();

  if(lastPressIsOperation === true){
    storedSign = DIV;
    return;
  }

  if (ignore) {

    console.log('ignored');
    storeSign(DIV);
    return;
  }

  if (calcFirst) {
    console.log('calculating');
    calculate();
    updateDisplay();
    storedSign = null;
    storeSign(DIV);

  } else {

    storeSign(DIV);

  }

  lastPressIsOperation = true;


});

$('#percent').click(function() {

  if (storedNum != null) {

    if (storedSign == MULT) {
      shownNum = Number(storedNum) * Number(shownNum / 100);
      storedNum = shownNum;
    } else if (storedSign === DIV) {
      shownNum = Number(storedNum) / Number(shownNum / 100);
      storedNum = shownNum;
    } else if (storedSign === ADD) {
      shownNum = Number(storedNum) + Number(storedNum * (shownNum / 100));
      storedNum = shownNum;
    } else if (storedSign === SUB) {
      shownNum = Number(storedNum) - Number(storedNum * (shownNum / 100));
      storedNum = shownNum;
    }

    updateDisplay();
  }

});

$('#equals').click(function() {

  lastPressIsOperation = false;
  if (storedNum != null && storedSign != null) {
    console.log(storedNum + ' stored vs shown ' + shownNum);
    calculate();
    updateDisplay();
    storedSign = null;
  } else {
    return;
  }


});

$('#C').click(function() {

  clearAll();

});

$('#CE').click(function() {

  clear();

});
