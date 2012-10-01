class Page
  constructor: (element) ->
    @element = $ element
    @baseWidth = 376
    @baseHeight = 360

  draw: (offset) ->
    @element.css "zIndex", 1000 - offset
    @element.width @baseWidth + 2 * offset
    @element.height @baseHeight - 2 * offset
    @element.css "marginTop", offset

  flip: ->
    @element.toggleClass 'flipped'

window.Page = Page
