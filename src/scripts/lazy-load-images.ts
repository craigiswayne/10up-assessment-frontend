const CW_LazyLoader = {
  selector: 'img.lazy[data-src]',
  init: function(){
    if ("IntersectionObserver" in window) {
      CW_LazyLoader.usingIntersectionObserver();
    } else {
      CW_LazyLoader.usingBasic();
    }
  },
  usingIntersectionObserver: function(){
    const lazyImages = [].slice.call(document.querySelectorAll(CW_LazyLoader.selector));

      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.setAttribute('src', lazyImage.getAttribute('data-src'));
            lazyImage.classList.remove('lazy');
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });

      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
  },
  usingBasic: function(){
    const lazyImages = document.querySelectorAll(CW_LazyLoader.selector);
    for (let i=0; i<lazyImages.length; i++) {
      lazyImages[i].setAttribute('src', lazyImages[i].getAttribute('data-src'));
    }
  }
}

document.addEventListener("DOMContentLoaded", CW_LazyLoader.init);
