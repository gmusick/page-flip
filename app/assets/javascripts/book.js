      var pages = document.querySelectorAll('.page');
      var currentPage = 1;
      var basePageWidth = 376;
      var basePageHeight = 360;
      var maxPageWidth = pages.length + basePageWidth;
      var minPageHeight = basePageHeight - (pages.length / 2);
      function draw() {
        var viewablePageLeftIndex = currentPage - 2;
        console.log("viewablePageLeftIndex: " + viewablePageLeftIndex);
        if(viewablePageLeftIndex >= 0) {
          var viewablePageLeft = $(pages[viewablePageLeftIndex]);
          viewablePageLeft.css("zIndex", 1000);
          viewablePageLeft.width(basePageWidth);
          viewablePageLeft.height(basePageHeight);
          viewablePageLeft.css("marginTop", 0);
          for(var i = 1; i <= viewablePageLeftIndex; i++) {
            var page = $(pages[viewablePageLeftIndex - i]);
            $(page).css("zIndex", viewablePageLeft.css("zIndex") - i);
            $(page).width(viewablePageLeft.width() + 2*i);
            $(page).height(viewablePageLeft.height() - 2*i);
            $(page).css("marginTop", i);
          }
        }
        
        var viewablePageRightIndex = currentPage - 1;
        console.log("viewablePageRightIndex: " + viewablePageRightIndex);
        if(viewablePageRightIndex <= pages.length) {
          var viewablePageRight = $(pages[viewablePageRightIndex]);
          viewablePageRight.css("zIndex", 1000);
          viewablePageRight.width(basePageWidth);
          viewablePageRight.height(basePageHeight);
          viewablePageRight.css("marginTop", 0);
          for(var i = 1; i < pages.length - viewablePageRightIndex; i++) {
            var page = $(pages[viewablePageRightIndex + i]);
            $(page).css("zIndex", viewablePageRight.css("zIndex") - i);
            $(page).width(viewablePageRight.width() + 2*i);
            $(page).height(viewablePageRight.height() - 2*i);
            $(page).css("marginTop", i);
          }
        }
      }

      draw();
      /*$('.page').bind('webkitTransitionEnd', function() {
        if(!$(this).hasClass('flipped')) {
          $(this).css("zIndex", 1000 - currentPage + 1);
        }
      });*/   

      $("#next").click(function() {
        var page = $(pages[currentPage - 1]);
        page.addClass('flipped');
        currentPage = currentPage + 1;
        draw();
      });
      
      $("#previous").click(function() {
        currentPage = currentPage - 1;
        var page = $(pages[currentPage - 1]);
        page.removeClass('flipped');
        draw();
      });
