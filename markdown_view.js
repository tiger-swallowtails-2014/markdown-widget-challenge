function MarkdownView(controller) {
  this.controller = controller;
};

MarkdownView.prototype = {
  listenToTextArea: function() {
    var textBox = document.getElementById('textbox');
    textBox.addEventListener('keyup', function(){
      this.controller.textToBeParsed(textBox.value);
    }.bind(this));
  },
  displayParsedText: function(parsedText){
    var markdown = document.getElementById('rendered');
    // debugger
    console.log(markdown)
    markdown.innerHTML = parsedText;
  }
};
