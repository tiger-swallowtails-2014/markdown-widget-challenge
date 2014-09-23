//CONTROLLER

function MarkdownController(view, model) {
  this.view = new view(this);
  this.model = new model(this);
  this.view.listenToTextArea();
}

MarkdownController.prototype = {
  textToBeParsed: function(text){
    this.model.parseMyText(text);
  },
  textToBeRendered: function(parsedText){
    this.view.displayParsedText(parsedText);
  }
};

// MODEL

function MarkdownModel(controller) {
  this.controller = controller;
}

MarkdownModel.prototype = {
  parseMyText: function(text){
    var parsedText = marked(text);
    console.log(parsedText);
    this.controller.textToBeRendered(parsedText);
  }
};

// VIEW

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

window.addEventListener('load', function(){
  new MarkdownController(MarkdownView, MarkdownModel);
});
