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


window.addEventListener('load', function(){
  new MarkdownController(MarkdownView, MarkdownModel);
});
