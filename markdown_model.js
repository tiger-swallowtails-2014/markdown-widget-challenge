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

