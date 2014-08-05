/*
    File Name: navbar.js
    Author: Sebastian Morgan (sebass63@gmail.com)
    Date Created: August 2, 2014.

    EULA: This file and its contents are sole property and creation
    of Sebastian Morgan. By downloading this file you are granted
    the right to use this file to assist in the creation of Star Citizen
    XML input mappings for personal use only. You are not granted the right
    to sell mappings created using this site, though you may share them
    freely with others.

    Use of this file in any other website without express consent of the
    owner is a violation of copyright law and is also extremely impolite.
    If you wish to use this file in your own website or for some other
    purpose, you are required to contact the owner and obtain permission
    before doing so.

    Not part of EULA: The author is happy to share, but likes to get credit
    for his work no matter how much of a caffeine jag he was on at time of
    creation.

    Happy flying!
*/

(function()
{
  var _INPUT_MAP_WIDTH  = 1080;
  var initialMapIndex = 3;
  var currentIndex = 3;


  /*

  function handleRightInputMethodArrowClicked(event)
  {
    $('#inputMethodMobileContainer').animate( { 'left': '-=780' }, 1000, function() { console.log('Input method cycle animation complete!'); } );
    $('#inputMapReelContainer').animate( { 'left': '-=' + _INPUT_MAP_WIDTH }, 1000, function() { console.log('Input map cycle animation complete!'); } );
  }




  function handleLeftInputMethodArrowClicked(event)
  {
    $('#inputMethodMobileContainer').animate( { 'left': '+=780' }, 1000, function() { console.log('Input method cycle animation complete!'); } );
    $('#inputMapReelContainer').animate( { 'left': '+=' + _INPUT_MAP_WIDTH }, 1000, function() { console.log('Input map cycle animation complete!'); } );
  }

  */


  function initializeInputMethodSelectionReel()
  {
    var inputReelOptions = document.querySelectorAll('.inputMethod');

    var inputMethodSelectionDiv = document.createElement('div');
    inputMethodSelectionDiv.setAttribute('id', 'inputMethodListWrapper');

    $(inputMethodSelectionDiv).css("display", "inline-block");
    
    var availableInputs = document.querySelectorAll('.inputMap');
    for (var ii = 0; ii < availableInputs.length; ii++)
    {
      var nick = availableInputs[ii].getAttribute('data-nickname');
      var inputMethod = document.createElement('div');
      inputMethod.innerHTML = nick;

      $(inputMethod).css('width', '50px');
      $(inputMethod).css('height', '100%');
      $(inputMethod).css('float', 'left');
      $(inputMethod).css('padding-top', '8px');
      $(inputMethod).addClass("prettySpaceText");

      $(inputMethod).click(function ()
      {
        var possibleMaps = document.querySelectorAll('#inputMethodListWrapper div');
        for (var jj = 0; jj < possibleMaps.length; jj++)
        {
          if (possibleMaps[jj] == this)
          {
            newMapIndex = jj;
          }
        }

        var diff = (newMapIndex - currentIndex) * 50;
        console.log(diff);
        if (diff > 0)
        {
          $('#focusBox').animate( { 'left': '+=' + diff }, 1000, function() {} );
          $('#inputMapReelContainer').animate( { 'left': '-=' + Math.abs(_INPUT_MAP_WIDTH * (newMapIndex - currentIndex)) }, 1000, function() {} );
        }
        else
        {
          $('#focusBox').animate( { 'left': '-=' + Math.abs(diff) }, 1000, function() {} );
          $('#inputMapReelContainer').animate( { 'left': '+=' + Math.abs(_INPUT_MAP_WIDTH * (newMapIndex - currentIndex)) }, 1000, function() {} );
        }
        currentIndex = newMapIndex;

      });

      inputMethodSelectionDiv.appendChild(inputMethod);
    }

    var floatingFocusBox = document.createElement('div');
    inputMethodSelectionDiv.appendChild(floatingFocusBox);

    floatingFocusBox.setAttribute('id', 'focusBox');
    $(floatingFocusBox).css('width', '50px');
    $(floatingFocusBox).css('height', '28px');
    $(floatingFocusBox).css('margin-top', '2px');
    $(floatingFocusBox).css('border', '1px #00E7FF solid');
    $(floatingFocusBox).css('border-radius', '3px');
    floatingFocusBox.style.position = "relative";
    floatingFocusBox.style.left = Math.round(/* $(floatingFocusBox.parentNode).offset()['left'] + */ 50 * initialMapIndex) + "px";
    document.getElementById('inputMapReelContainer').style.left = -1 * Math.round(_INPUT_MAP_WIDTH * initialMapIndex) + "px";
    currentIndex = initialMapIndex;

    document.getElementById('inputMethodSelectionContainer').appendChild(inputMethodSelectionDiv);
  }




  $(document).ready(function()
  {
    initializeInputMethodSelectionReel();
  });




})();

