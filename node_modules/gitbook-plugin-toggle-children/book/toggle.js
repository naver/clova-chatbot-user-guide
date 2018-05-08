require(["gitbook", "jQuery"], function (gitbook, $) {
  function getLevel(el) {
    levelStr = el.attr('data-level')
    return parseInt(levelStr.substr(0, levelStr.indexOf(".")))
  }

  function expand(chapter) {
    chapter.show()
    if (chapter.parent().attr('class') != 'summary' &&
      chapter.parent().attr('class') != 'book-summary' &&
      chapter.length != 0
    ) {
      expand(chapter.parent())
      expandChild(chapter.parent())
    }
  }

  function expandChild(chapter) {
    chapter.show()
    if (chapter.parent().attr('class') != 'summary' &&
      chapter.parent().attr('class') != 'book-summary' &&
      chapter.length != 0
    ) {
      chapter.show()
    }
    if (chapter.children().length !=0) {
      expandChild(chapter.children())
    }
  }

  function initToggle() {
    const activeChapter = $('li.chapter.active')
    const activeLevel = getLevel(activeChapter)
    const activeChildren = activeChapter.children('ul.articles')

    $('li.chapter').each(function(index) {
      const target = $(this)
      const targetLevel = getLevel(target)

      if (targetLevel != 1 && targetLevel != activeLevel) {
        $(this).hide()
      }
      $(this).children('ul.articles').hide()
    })
    $('ul.summary li.header').css({
        cursor: 'pointer',
    }).click(function() {
        $(this).next('.chapter:has(a)').children()[0].click()
    })

    expand(activeChapter)
    expandChild(activeChapter)
    if (activeChildren.length > 0) {
        activeChildren.show()
    }
  }

  if (location.pathname.match(/.+\.html$/)) {
    initToggle()
  }

  gitbook.events.bind("page.change", initToggle)
})