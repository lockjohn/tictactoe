class View {
  constructor(game, $container) {
    this.$container = $container;
    this.game = game;

    this.setupBoard($container);
  }

  //install event handler for li's and clicks and bind event to makeMove which will call playMove(pos);
  bindEvents() {
    this.$container.on('click', "li", event => {
      const $square = $(event.currentTarget);
      this.makeMove($square);
    })
  }

  makeMove($square) {
    this.game.playMove($square);
  }

  setupBoard($container) {
  const listElements = [];
  for (let i=0; i < 9; i++) {
    listElements.push("<li class=\"square\"></li>");
  }
  const $board = $("<ul class=\"board\"></ul>");
  $board.appendTo($container).append( listElements.join( "" ) );
  }
}

module.exports = View;
