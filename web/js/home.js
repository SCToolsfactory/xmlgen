(function() {

  var dragging = false;
  var dragAction = null;
  var dragOriginElement = null;
  var lastX = undefined;
  var lastY = undefined;

  testDropzoneMap = [ { "name": "Trigger", "deviceType": "js", "deviceOffset": 1, "inputType": "button", "inputOffset": 1, "type": "button", "boxLeft": 590, "boxTop": 10, "boxWidth": 75, "boxHeight": 25, "targetX": 696, "targetY": 210 },
                      { "name": "Index T.", "deviceType": "js", "deviceOffset": 1, "inputType": "button", "inputOffset": 3, "type": "button", "boxLeft": 570, "boxTop": 60, "boxWidth": 75, "boxHeight": 25, "targetX": 659, "targetY": 163 },
                      { "name": "Pinky T.", "deviceType": "js", "deviceOffset": 1, "inputType": "button", "inputOffset": 5, "type": "button", "boxLeft": 570, "boxTop": 600, "boxWidth": 75, "boxHeight": 25, "targetX": 688, "targetY": 287 } ]


  testActionList = [ { "actionmap": "spaceship_weapons",
                       "color": "#FF0000",
                       "actions": [ { "nickname": "Fire Weapon Grp. 1",
                                      "abbreviation": "Fire Grp 1",
                                      "name": "v_attack1_group1",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Fire Weapon Grp. 2",
                                      "abbreviation": "Fire Grp 2",
                                      "name": "v_attack1_group2",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Fire Weapon Grp. 3",
                                      "abbreviation": "Fire Grp 3",
                                      "name": "v_attack1_group3",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Fire Weapon Grp. 4",
                                      "abbreviation": "Fire Grp 4",
                                      "name": "v_attack1_group4",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] } ] } ];
                                      





  function handleRightInputMethodArrowClicked(event)
  {
    console.log('Cycling input method right!');
    $('#inputMethodMobileContainer').animate( { 'left': '-=780' }, 1000, function() { console.log('Input method cycle animation complete!'); } );
    $('#inputMapReelContainer').animate( { 'left': '-=1080' }, 1000, function() { console.log('Input map cycle animation complete!'); } );
  }




  function handleLeftInputMethodArrowClicked(event)
  {
    console.log('Cycling input method left!');
    $('#inputMethodMobileContainer').animate( { 'left': '+=780' }, 1000, function() { console.log('Input method cycle animation complete!'); } );
    $('#inputMapReelContainer').animate( { 'left': '+=1080' }, 1000, function() { console.log('Input map cycle animation complete!'); } );
  }




  function initializeInputMethodSelectionReel()
  {
    console.log("Selecting all input methods on page . . . ");
    var inputReelOptions = document.querySelectorAll('.inputMethod');
    console.log("Located " + inputReelOptions.length + " elements.");
    
    console.log("Determining bounds of reel container . . . ");
    var reelBoundingRectangle = document.getElementById('inputMethodReelContainer').getBoundingClientRect();
    console.log("Obtained bounding rectangle: Left=" + reelBoundingRectangle['left'] + " Right=" + reelBoundingRectangle['right'] + " Top=" + reelBoundingRectangle['top'] + " Bottom=" + reelBoundingRectangle['bottom']);

    console.log("Computing dimensions . . . ");
    var inputMethodWidth = inputReelOptions[0].offsetWidth;
    console.log("Input Method Width: " + inputMethodWidth);

    console.log("Setting up event handlers . . . ");
    $('#leftInputMethodArrow').click(handleLeftInputMethodArrowClicked);
    $('#rightInputMethodArrow').click(handleRightInputMethodArrowClicked);
    console.log("Done.");
  }




  function initializeActionDropZones(dropZoneMap)
  {
    var parentDiv = document.getElementById("saitekX55RhinoHotasInputMap");

    for (var ii = 0; ii < dropZoneMap.length; ii++)
    {
      if (dropZoneMap[ii]["type"] === "button")
      {
        var actionBox = document.createElement('div');
        actionBox.style.position = "absolute";
        $(actionBox).addClass("bindable");
        actionBox.style.left = dropZoneMap[ii]["boxLeft"] + "px";
        actionBox.style.top = dropZoneMap[ii]["boxTop"] + "px";
        actionBox.style.width = dropZoneMap[ii]["boxWidth"] + "px";
        actionBox.style.height = dropZoneMap[ii]["boxHeight"] + "px";
        actionBox.style.backgroundColor = "black";
        actionBox.style.color = "white";
        actionBox.style.zIndex = "1001";
        actionBox.setAttribute('data-inputtype', dropZoneMap[ii]["inputType"]);
        actionBox.setAttribute('data-inputoffset', dropZoneMap[ii]['inputOffset']);
        actionBox.setAttribute('data-deviceoffset', dropZoneMap[ii]["deviceOffset"]);
        actionBox.setAttribute('data-devicetype', dropZoneMap[ii]["deviceType"]);
        $(actionBox).css("border", "1px #06a solid");
        $(actionBox).css("text-align", "center");

        var actionText = document.createElement('span');
        actionText.innerHTML = dropZoneMap[ii]['name'];
        $(actionText).css("width", "100%");
        $(actionText).css("display", "block");
        $(actionText).css("margin-top", "5px");
        actionBox.appendChild(actionText);

        var actionLine = document.createElement('div');
        actionLine.style.position = "absolute";
        actionLine.style.width = "1px";
        var lineLength =  Math.round(Math.sqrt(Math.pow(dropZoneMap[ii]["boxLeft"] + dropZoneMap[ii]["boxWidth"] - dropZoneMap[ii]["targetX"], 2) + Math.pow(dropZoneMap[ii]["boxTop"] + (dropZoneMap[ii]["boxHeight"] / 2) -              dropZoneMap[ii]["targetY"], 2)));
        actionLine.style.height = lineLength + "px";
        actionLine.style.left = (dropZoneMap[ii]["boxLeft"] + dropZoneMap[ii]["boxWidth"] + 1) + "px";
        actionLine.style.top = Math.round(dropZoneMap[ii]["boxTop"] + dropZoneMap[ii]["boxHeight"] / 2) + "px";
        actionLine.style.backgroundColor = "#06a";
        actionLine.style.zIndex = "1000";
        $(actionLine).css('-webkit-transform-origin', 'top left');
        var angle = 180 / 3.14159 * Math.acos((dropZoneMap[ii]["targetY"] - dropZoneMap[ii]["boxTop"] - (dropZoneMap[ii]["boxHeight"] / 2)) / lineLength);
        if (dropZoneMap[ii]["targetX"] > (dropZoneMap[ii]["boxLeft"] + dropZoneMap[ii]["boxWidth"])) { angle *= -1; }
        $(actionLine).css('-webkit-transform', 'rotate(' + angle + 'deg)');

        parentDiv.appendChild(actionBox);
        parentDiv.appendChild(actionLine);
      }
      else
      {
        console.log("CRITICAL: Dropzone of type " + dropZoneMap[ii]["type"] + " is not implemented!");
      }
    }
  }




  function doElementsIntersect(elem1, elem2)
  {
    function pointList(elem) { return [ [ $(elem).offset()['left'], $(elem).offset()['top'] ], 
                                        [ $(elem).offset()['left'] + $(elem).width(), $(elem).offset()['top'] ], 
                                        [ $(elem).offset()['left'] + $(elem).width(), $(elem).offset()['top'] + $(elem).height() ], 
                                        [ $(elem).offset()['left'], $(elem).offset()['top'] + $(elem).height() ] ]; }

    // Are any of points bounded by rect?
    function comparePoints(points, elem) 
    { 
      for (var ii = 0; ii < points.length; ii++) 
      { 
        if ((points[ii][0] > $(elem).offset()['left'] && points[ii][0] < ($(elem).offset()['left'] + $(elem).width())) && (points[ii][1] > $(elem).offset()['top'] && points[ii][1] < ($(elem).offset()['top'] + $(elem).height()))) 
        { 
          return true; 
        } 
      } 
      return false; 
    }

    return (comparePoints(pointList(elem1), elem2) || comparePoints(pointList(elem2), elem1));
  }





  function initializeActionListItems(actionItemList)
  {
    var parentDiv = document.getElementById('actionItemList');
    
    for (var ii = 0; ii < actionItemList.length; ii++)
    {
      for (var jj = 0; jj < actionItemList[ii]['actions'].length; jj++)
      {
        var actionItem = document.createElement('div');
        actionItem.style.width = "90%";
        actionItem.style.height = "40px";
        actionItem.setAttribute('data-actionmap', actionItemList[ii]['actionmap']);
        actionItem.setAttribute('data-actionname', actionItemList[ii]['actions'][jj]['name']);
        actionItem.setAttribute('data-actiontype', actionItemList[ii]['actions'][jj]['type']);
        actionItem.setAttribute('data-abbreviation', actionItemList[ii]['actions'][jj]['abbreviation']);
        actionItem.style.backgroundColor = actionItemList[ii]["color"];
        $(actionItem).css("position", "relative");
        $(actionItem).css("margin-left", "auto");
        $(actionItem).css("margin-right", "auto");
        $(actionItem).css("margin-top", "4px");
        $(actionItem).css("margin-bottom", "4px");
        actionItem.style.cursor = "url('http://www.google.com/intl/en_ALL/mapfiles/openhand.cur'), pointer";

        // Handle item drag-assignment.
        $(actionItem).mousedown(function(event) 
        {
          var actionCopy = document.createElement('div');
          dragOriginElement = this;
          actionCopy.style.backgroundColor = actionItem.style.backgroundColor;
          actionCopy.setAttribute('data-actionmap', this.getAttribute('data-actionmap'));
          actionCopy.setAttribute('data-actionname', this.getAttribute('data-actionname'));
          actionCopy.setAttribute('data-actiontype', this.getAttribute('data-actiontype'));

          actionCopy.style.height = "40px";
          actionCopy.style.opacity = '0.3';
          actionCopy.style.width = "207px";
          actionCopy.style.color = actionItem.style.color;
          $(actionCopy).css("position", "absolute");
          actionCopy.style.left = Math.round($(this).offset()['left']) + "px";
          actionCopy.style.top = Math.round($(this).offset()['top']) + "px";
          actionCopy.style.zIndex = "5000";
          actionCopy.style.cursor = "url('http://www.google.com/intl/en_ALL/mapfiles/closedhand.cur'), pointer";

          var actionAbbreviation = document.createElement('span');
          actionAbbreviation.innerHTML = this.getAttribute('data-abbreviation');
          $(actionAbbreviation).css("font-size", "10pt");
          $(actionAbbreviation).css("display", "block");
          $(actionAbbreviation).css("position", "absolute");
          $(actionAbbreviation).css("margin-top", "3px");
          $(actionAbbreviation).css("width", "90%");
          $(actionAbbreviation).css("margin-left", "5%");
          $(actionAbbreviation).css("-webkit-user-select", "none");
          actionCopy.appendChild(actionAbbreviation);
          
          dragging = true;
          dragAction = actionCopy;
          lastX = event.targetX;
          lastY = event.targetY;

          $(actionCopy).mouseup(function(event)
          {
            // If we are over a bind element, place a marker in it.
            var bindList = document.querySelectorAll(".bindable");
            var foundBind = false;

            for (var ii = 0; ii < bindList.length; ii++)
            {
              if (doElementsIntersect(bindList[ii], this))
              {
                foundBind = true;
                $(this).unbind("mouseup");
                this.style.cursor = "pointer";
                $(this).click(function()
                {
                  $(this).animate( { left: $(dragOriginElement).offset()['left'], top: $(dragOriginElement).offset()['top'], opacity: 0.0 }, 500, function()
                  {
                    console.log('Correcting!');
                    this.parentNode.removeChild(this);
                  });
                });

                this.binder = bindList[ii];

                $(this).animate( { left: $(bindList[ii]).offset()['left'], top: $(bindList[ii]).offset()['top'], width: bindList[ii].style.width, height: bindList[ii].style.height, opacity: 1.0 }, 500, function() 
                { 
                  document.body.removeChild(this); 
                  this.binder.innerHTML = '';
                  this.style.position = "static";
                  this.binder.appendChild(this);
                });
              }
            }

            if (foundBind === false)
            {
              $(this).animate( { left: $(dragOriginElement).offset()['left'], top: $(dragOriginElement).offset()['top'], opacity: 0.0 }, 500, function()
              {
                document.body.removeChild(this);
              });
            }

            dragging = false;
          });

          document.body.appendChild(actionCopy);
        });

        var nickNameText = document.createElement('span');
        nickNameText.innerHTML = actionItemList[ii]['actions'][jj]['nickname'];
        $(nickNameText).css("font-size", "14pt");
        $(nickNameText).css("display", "block");
        $(nickNameText).css("position", "absolute");
        $(nickNameText).css("margin-top", "7px");
        $(nickNameText).css("width", "90%");
        $(nickNameText).css("margin-left", "5%");
        $(nickNameText).css("-webkit-user-select", "none");

        actionItem.appendChild(nickNameText);
        parentDiv.appendChild(actionItem);
      }
    }
  }




  function createXmlAndOfferDownload() // CHROME ONLY!
  {
    // var content = /*'<?xml version="1.0" encoding="UTF-8"?>*/'<actionmap name="spaceship_view"><action name="v_view_cycle_fwd"><rebind device="joystick" input="js2_button2" /></action><action name="v_view_dynamic_focus_toggle"><rebind device="joystick" input="js2_button25" /></action></actionmap>';
    // var filename = "TESTFILE.xml";
    // var mimeType = 'text/xml';

    var filename = "myMagicalLayout.xml"
    var mimeType = "text/xml";

    var xmlDocument = (new DOMParser()).parseFromString('<ActionMaps version="0"></ActionMaps>', 'text/xml');
    var xmlRoot = xmlDocument.getElementsByTagName('ActionMaps')[0];
    
    var binds = document.querySelectorAll(".bindable");

    for (var ii = 0; ii < binds.length; ii++)
    {
      var actions = binds[ii].childNodes;
      if (actions.length === 0 || actions[0].tagName === "span")
      {
        continue;
      }

      var inputType = binds[ii].getAttribute('data-inputtype');
      var inputOffset = binds[ii].getAttribute('data-inputoffset');
      var deviceOffset = binds[ii].getAttribute('data-deviceoffset');
      var deviceType = binds[ii].getAttribute('data-devicetype');

      for (var jj = 0; jj < actions.length; jj++)
      {
        var actionMap = actions[jj].getAttribute('data-actionmap');
        var actionName = actions[jj].getAttribute('data-actionname');
        var actionType = actions[jj].getAttribute('data-actiontype');

        // If this actionmap doesn't exist yet, create and append.
        if (xmlDocument.getElementsByName(actionMap).length === 0)
        {
          var newmap = xmlDocument.createElement('actionmap');
          newmap.setAttribute('name', actionMap);
          xmlRoot.appendChild(newmap);
        }

        var parentMap = xmlDocument.getElementsByName(actionMap)[0];

        // If this action doesn't exist yet, create and insert.
        if (xmlDocument.getElementsByName(actionName).length === 0)
        {
          var newaction = xmlDocument.createElement('action');
          newaction.setAttribute('name', actionName);
          parentMap.appendChild(newaction);
        }

        var parentAction = xmlDocument.getElementsByName(actionName)[0];

        // Insert bindings regardless of anything that's already there. Multiple binds are fine! (Test this?) (I'm sure it's fine) (Then again . . . ) (What could go wrong?) WHAT INDEED
        var newbind = xmlDocument.createElement('rebind');
        if (deviceType === "js") { newbind.setAttribute('device', 'joystick'); }
        else { console.log('CRITICAL: DEVICE TYPE: ' + deviceType + ' NOT IMPLEMENTED!'); }
        newbind.setAttribute('input', deviceType + deviceOffset + inputType + inputOffset);
        parentAction.appendChild(newbind);
      }
    }

    var content = (new XMLSerializer()).serializeToString(xmlDocument);

    var sneakyLink = document.createElement('a');
    sneakyLink.href = 'data:' + mimeType + ';charset=utf-8,' + escape(content);
    sneakyLink.setAttribute("download", filename);
    sneakyLink.style.color = "transparent";
    document.body.appendChild(sneakyLink);
    setTimeout(function() 
    {
      var eventObject = document.createEvent('MouseEvents');
      eventObject.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      sneakyLink.dispatchEvent(eventObject);
      document.body.removeChild(sneakyLink);
    }, 66);  
    return true;
  }




  $(document).mousemove(function (event)
  {
    if (dragging)
    {
      dragAction.style.top = Math.round(dragAction.offsetTop - lastY + event.pageY) + "px";
      dragAction.style.left = Math.round(dragAction.offsetLeft - lastX + event.pageX) + "px";
    }

    lastX = event.pageX;
    lastY = event.pageY;
  });





  $(document).ready(function() 
  {
    console.log("Setting up input method selection reel . . . ");
    initializeInputMethodSelectionReel();
    console.log("Input method selection reel initialized.");

    console.log("Initializing action item drop zones . . . ");
    initializeActionDropZones(testDropzoneMap);
    console.log("Done.");

    console.log("Initializing action item list . . . ");
    initializeActionListItems(testActionList);
    console.log("Done.");

    console.log("Creating miscellaneous page events . . . ");
    $('#btnCreateXmlFile').click(createXmlAndOfferDownload);
    console.log("Done.");
  });




})();
