class Book
  constructor: (element) ->
    pages = element.find '.page'

    @pages = []
    @pages.push(new Page(page)) for page in pages

    @viewableLeftIndex = -1
    @viewableRightIndex = 0

    $('#next').click =>
      @turnForward()

    $('#previous').click =>
      @turnBackward()

  draw: ->
    @drawLeft()
    @drawRight()

  drawLeft: ->
    i = 0
    while i <= @viewableLeftIndex
      @pages[@viewableLeftIndex - i].draw(i)
      i++

  drawRight: ->
    i = 0
    while i < @pages.length - @viewableRightIndex
      @pages[@viewableRightIndex + i].draw(i)
      i++

  turnForward: ->
    @pages[@viewableRightIndex].flip()

    @viewableLeftIndex++
    @viewableRightIndex++

    @draw()

  turnBackward: ->
    @pages[@viewableLeftIndex].flip()

    @viewableLeftIndex--
    @viewableRightIndex--

    @draw()

window.Book = Book
