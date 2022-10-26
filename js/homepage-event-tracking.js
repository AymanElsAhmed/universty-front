// GTM event tracking for home page
jQuery(document).ready(function () {
  // add event listener and GTM event code to Quicklinks button, including tracking open and close on the button itself
  document
    .querySelector(".uw-quicklinks")
    .addEventListener("pointerdown", function (event) {
      if (document.querySelector("#uw-container").classList.contains("open")) {
        dataLayer.push({
          event: "Quicklinks button - clicked closed",
        });
      } else {
        dataLayer.push({
          event: "Quicklinks button - clicked open",
        });
      }

      // add event listener and GTM event tracking code to all Quicklinks links
      var quicklinksEvents = document.querySelectorAll("#quicklinks ul li a");
      for (var q = 0; q < quicklinksEvents.length; q++) {
        quicklinksEvents[q].addEventListener("pointerdown", function (event) {
          dataLayer.push({
            event: "Quicklinks link",
            eventLabel: "Quicklinks: " + this.innerText.toLowerCase(),
          });
        });
      }
    });

  // add event listener and GTM event code to Search button
  document
    .querySelector("button.uw-search")
    .addEventListener("pointerdown", function (event) {
      if (document.body.classList.contains("search-open")) {
        dataLayer.push({
          event: "Search button - close",
        });
      } else {
        dataLayer.push({
          event: "Search button - open",
        });
      }
    });

  // add event listener and GTM event code to UW Patch
  document
    .querySelector(".uw-patch")
    .addEventListener("pointerdown", function (event) {
      dataLayer.push({
        event: "UW patch",
      });
    });

  // add event listener and GTM event code to UW Wordmark
  document
    .querySelector(".uw-wordmark")
    .addEventListener("pointerdown", function (event) {
      dataLayer.push({
        event: "UW wordmark",
      });
    });

  // add event listeners and GTM event code to slides (read more button only)
  var slides = document.querySelectorAll(".uw-homepage-slider");
  // convert nodelist to an array so we can do stuff
  var nodesArray = Array.prototype.slice.call(slides);
  // backwards is the correct order for slides - in code they are bottom to top
  nodesArray.reverse();

  // loop through reversed slides array and do stuff
  for (var s = 0; s < nodesArray.length; s++) {
    // add slide-order-# class to slides
    nodesArray[s].classList.add("slide-order-" + s);

    // get the read more buttons
    var readMore = nodesArray[s].querySelector(".uw-btn");

    // event listener for read more buttons
    readMore.addEventListener("pointerdown", function (event) {
      // get the parent class list
      var parentClassList =
        this.parentNode.parentNode.parentNode.parentNode.parentNode.classList;
      // loop through read more buttons and get the full slide-order-# class for the Read More button that was clicked and push through to GTM
      for (var j = 0, l = parentClassList.length; j < l; ++j) {
        if (/slide-order-.*/.test(parentClassList[j])) {
          dataLayer.push({
            event: "Read more buttons",
            eventLabel: `${this.innerText.toLowerCase().toLowerCase()} ${
              parentClassList[j]
            }`,
          });
          break;
        }
      }
    });
  }

  // add mutation observers to the slides and event listeners and GTM event code to NEXT button for slides
  // get the next button
  var nextButton = document.querySelector(".slideshow-controls button");

  // get all the slides - making more than we will need because this isn't easy to iterate over
  var slide0 = document.querySelector(".slide-order-0");
  var slide1 = document.querySelector(".slide-order-1");
  var slide2 = document.querySelector(".slide-order-2");
  var slide3 = document.querySelector(".slide-order-3");
  var slide4 = document.querySelector(".slide-order-4");
  var slide5 = document.querySelector(".slide-order-5");
  var slide6 = document.querySelector(".slide-order-6");

  // config for mutation observer (https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
  var config = { attributes: true, attributeFilter: ["style"] };

  // reset slide 0 initially
  nextButton.removeAttribute("id", "slide-order-0");
  nextButton.setAttribute("id", "slide-order-0");

  // grab the slideshow controls container (parent to next button)
  var slideshowControls = document.querySelector(".slideshow-controls");

  // add event listener on the slideshow controls button
  function nextButtonEventListener() {
    // get the ID for the slide the next button is being clicked on & send to GTM
    var nextButtonID = nextButton.getAttribute("id");
    dataLayer.push({
      event: "Slider next buttons",
      eventLabel: "Next button for: " + `${nextButtonID}`,
    });
  }
  slideshowControls.addEventListener(
    "pointerdown",
    nextButtonEventListener,
    false
  );

  // callback for slide/button 0
  var callback0 = function (mutations) {
    mutations.forEach(function (mutation) {
      if (
        mutation.attributeName === "style" &&
        window.getComputedStyle(slide0).getPropertyValue("display") === "block"
      ) {
        nextButton.setAttribute("id", "slide-order-0");
      } else {
        // display is set to 'none'. e.g. slide is inactive
        nextButton.removeAttribute("id", "slide-order-0");
      }
    });
  };

  // callback for slide/button 1
  var callback1 = function (mutations) {
    mutations.forEach(function (mutation) {
      if (
        mutation.attributeName === "style" &&
        window.getComputedStyle(slide1).getPropertyValue("display") === "block"
      ) {
        nextButton.setAttribute("id", "slide-order-1");
      } else {
        // display is set to 'none'. e.g. slide is inactive
        nextButton.removeAttribute("id", "slide-order-1");
        // set back to slide 0 - this is so the last slide, whatever it is, always resets to 0 - no idea why this is needed but it makes it work so don't question it.
        nextButton.setAttribute("id", "slide-order-0");
      }
    });
  };

  // callback for slide/button 2
  var callback2 = function (mutations) {
    mutations.forEach(function (mutation) {
      if (
        mutation.attributeName === "style" &&
        window.getComputedStyle(slide2).getPropertyValue("display") === "block"
      ) {
        nextButton.setAttribute("id", "slide-order-2");
      } else {
        // display is set to 'none'. e.g. slide is inactive
        nextButton.removeAttribute("id", "slide-order-2");
        // set back to slide 0 - this is so the last slide, whatever it is, always resets to 0 - no idea why this is needed but it makes it work so don't question it.
        nextButton.setAttribute("id", "slide-order-0");
      }
    });
  };

  // callback for slide/button 3
  var callback3 = function (mutations) {
    mutations.forEach(function (mutation) {
      if (
        mutation.attributeName === "style" &&
        window.getComputedStyle(slide3).getPropertyValue("display") === "block"
      ) {
        nextButton.setAttribute("id", "slide-order-3");
      } else {
        // display is set to 'none'. e.g. slide is inactive
        nextButton.removeAttribute("id", "slide-order-3");
        // set back to slide 0 - this is so the last slide, whatever it is, always resets to 0 - no idea why this is needed but it makes it work so don't question it.
        nextButton.setAttribute("id", "slide-order-0");
      }
    });
  };

  // callback for slide/button 4
  var callback4 = function (mutations) {
    mutations.forEach(function (mutation) {
      if (
        mutation.attributeName === "style" &&
        window.getComputedStyle(slide4).getPropertyValue("display") === "block"
      ) {
        nextButton.setAttribute("id", "slide-order-4");
      } else {
        // display is set to 'none'. e.g. slide is inactive
        nextButton.removeAttribute("id", "slide-order-4");
        // set back to slide 0 - this is so the last slide, whatever it is, always resets to 0 - no idea why this is needed but it makes it work so don't question it.
        nextButton.setAttribute("id", "slide-order-0");
      }
    });
  };

  // callback for slide/button 5
  var callback5 = function (mutations) {
    mutations.forEach(function (mutation) {
      if (
        mutation.attributeName === "style" &&
        window.getComputedStyle(slide5).getPropertyValue("display") === "block"
      ) {
        nextButton.setAttribute("id", "slide-order-5");
      } else {
        // display is set to 'none'. e.g. slide is inactive
        nextButton.removeAttribute("id", "slide-order-5");
        // set back to slide 0 - this is so the last slide, whatever it is, always resets to 0 - no idea why this is needed but it makes it work so don't question it.
        nextButton.setAttribute("id", "slide-order-0");
      }
    });
  };

  // callback for slide/button 6
  var callback6 = function (mutations) {
    mutations.forEach(function (mutation) {
      if (
        mutation.attributeName === "style" &&
        window.getComputedStyle(slide6).getPropertyValue("display") === "block"
      ) {
        nextButton.setAttribute("id", "slide-order-6");
      } else {
        // display is set to 'none'. e.g. slide is inactive
        nextButton.removeAttribute("id", "slide-order-6");
        // set back to slide 0 - this is so the last slide, whatever it is, always resets to 0 - no idea why this is needed but it makes it work so don't question it.
        nextButton.setAttribute("id", "slide-order-0");
      }
    });
  };

  // if the slide exists, add the mutation observer for the slide
  if (slide0) {
    var observer0 = new MutationObserver(callback0);
    observer0.observe(slide0, config);
  }

  if (slide1) {
    var observer1 = new MutationObserver(callback1);
    observer1.observe(slide1, config);
  }

  if (slide2) {
    var observer2 = new MutationObserver(callback2);
    observer2.observe(slide2, config);
  }

  if (slide3) {
    var observer3 = new MutationObserver(callback3);
    observer3.observe(slide3, config);
  }

  if (slide4) {
    var observer4 = new MutationObserver(callback4);
    observer4.observe(slide4, config);
  }

  if (slide5) {
    var observer5 = new MutationObserver(callback5);
    observer5.observe(slide5, config);
  }

  if (slide6) {
    var observer6 = new MutationObserver(callback6);
    observer6.observe(slide6, config);
  }

  // add event listeners and GTM event code to the audience menu
  var audienceMenu = document.querySelectorAll(".uw-thin-links li a");
  for (var a = 0; a < audienceMenu.length; a++) {
    audienceMenu[a].addEventListener("pointerdown", function (event) {
      dataLayer.push({
        event: "Audience link",
        eventLabel: "Audience: " + this.innerText.toLowerCase(),
      });
    });
  }

  // add event listeners and GTM event code to the white menu aka dawgdrops
  var dawgdropsMenu = document.querySelectorAll(
    "nav#dawgdrops .dawgdrops-nav li a"
  );
  for (var d = 0; d < dawgdropsMenu.length; d++) {
    dawgdropsMenu[d].addEventListener("pointerdown", function (event) {
      dataLayer.push({
        event: "White nav link",
        eventLabel: "White nav: " + this.innerText.toLowerCase(),
      });
    });
  }

  // add event listeners and GTM event code to white bar icon buttons (below slider)
  var iconButtons = document.querySelectorAll("nav.uw-links ul li a");
  for (var i = 0; i < iconButtons.length; i++) {
    iconButtons[i].addEventListener("pointerdown", function (event) {
      dataLayer.push({
        event: "White bar icons",
        eventLabel:
          "Icon Button: " + this.querySelector("span").innerText.toLowerCase(),
      });
    });
  }

  // add event listeners and GTM event code to the News & Events cards
  var newsEventsCards = document.querySelectorAll(".box-outer .box .tile a");
  for (var a = 0; a < newsEventsCards.length; a++) {
    newsEventsCards[a].addEventListener("pointerdown", function (event) {
      var getButtonParent = this.parentNode.parentNode;
      var headlineForButton = getButtonParent.querySelector("h3").innerText;

      dataLayer.push({
        event: "News Events Cards",
        eventLabel: "Card button: " + headlineForButton.toLowerCase(),
      });
    });
  }
});
