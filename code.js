function whenIsTrue(operator, run) {
  setInterval(function(){
    if (operator == true) {
      run()
    }
  }, 0500)
}
