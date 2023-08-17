$(document).ready(function() {
    var result = $('#temp');
    var text1 = $('#res');
    $('.buttons button').click(function() {
    if ($(this).text() !== '=') {
      if (isOperator($(this).text())) {
        text1.text($(this).text());
        var lastChar = result.text().slice(-1); 
        if (isOperator(lastChar)) {
          result.text(result.text().slice(0, -1) + $(this).text());
          return;
        }
      }
      var value = $(this).text();
      result.text(result.text() + value);
      add(value);
    }
  });
  function add(value){
    if(isOperator(value)){
      text1.text(value)
    }
    else{
      if(isOperator(text1.text())){
        text1.text('');
      }
       if (text1.text() === '0') {
        text1.text(value);
      }
      else{
      text1.text(text1.text()+value)}
    }
  }
    
    $('#clear').click(function() {
      result.text('');
      text1.text('0');
      
    });
    
    $('#answer').click(function() {
      var expression = result.text();
     if (isOperator(expression.slice(-1))) {
        expression = expression.slice(0, -1);
      }
      try {
        var answer = math.evaluate(expression);
        text1.text(answer);
      } catch (error) {
        text1.text('Error');
      }
      result.text(answer)
    });
    function isOperator(char) {
      return char === '+' || char === '-' || char === '*' || char === '/';
    }
  });
  