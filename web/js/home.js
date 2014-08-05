/*   
    File Name: home.js
    Author: Sebastian Morgan (sebass63@gmail.com)
    Date Created: June 22, 2014.
    
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
  var dragging = false;
  var dragAction = null;
  var dragOriginElement = null;
  var lastX = undefined;
  var lastY = undefined;





  function initializeActionDropZones(dropZoneMatrix)
  {
    for (var ii = 0; ii < dropZoneMatrix.length; ii++)
    {
      var parentDiv = document.getElementById(dropZoneMatrix[ii]['parentDiv']);
      var dropZoneMap = dropZoneMatrix[ii]['zoneList'];
      for (var jj = 0; jj < dropZoneMap.length; jj++)
      {
        var actionBox = document.createElement('div');
        actionBox.style.position = "absolute";
        $(actionBox).addClass("bindable");
        actionBox.style.left   = dropZoneMap[jj]["boxLeft"]   + "px";
        actionBox.style.top    = dropZoneMap[jj]["boxTop"]    + "px";
        actionBox.style.width  = dropZoneMap[jj]["boxWidth"]  + "px";
        actionBox.style.height = dropZoneMap[jj]["boxHeight"] + "px";
        actionBox.style.backgroundColor = "black";
        actionBox.style.color = "white";
        actionBox.style.zIndex = "1001";
        actionBox.setAttribute('data-inputtype', dropZoneMap[jj]["inputType"]);
        actionBox.setAttribute('data-inputname', dropZoneMap[jj]['inputName']);
        actionBox.setAttribute('data-deviceoffset', dropZoneMap[jj]["deviceOffset"]);
        actionBox.setAttribute('data-devicetype', dropZoneMap[jj]["deviceType"]);
        $(actionBox).css("border", "1px #06a solid");
        $(actionBox).css("text-align", "center");

        var actionText = document.createElement('span');
        actionText.innerHTML = dropZoneMap[jj]['name'];
        $(actionText).css("width", "100%");
        $(actionText).css("display", "block");
        $(actionText).css("margin-top", "5px");
        actionBox.appendChild(actionText);

        var actionLine = document.createElement('div');
        actionLine.style.position = "absolute";
        actionLine.style.width = "1px";
        var lineLength =  Math.sqrt(Math.pow(dropZoneMap[jj]["boxLeft"] + dropZoneMap[jj]["boxWidth"] - dropZoneMap[jj]["targetX"], 2) + Math.pow(dropZoneMap[jj]["boxTop"] + (dropZoneMap[jj]["boxHeight"] / 2) -              dropZoneMap[jj]["targetY"], 2));
        actionLine.style.height = Math.round(lineLength) + "px";
        actionLine.style.left = (dropZoneMap[jj]["boxLeft"] + dropZoneMap[jj]["boxWidth"] + 1) + "px";
        actionLine.style.top = Math.round(dropZoneMap[jj]["boxTop"] + dropZoneMap[jj]["boxHeight"] / 2) + "px";
        actionLine.style.backgroundColor = "#06a";
        actionLine.style.zIndex = "1000";
        $(actionLine).css('-webkit-transform-origin', 'top left');
        var angle = 180 / 3.14159 * Math.acos((dropZoneMap[jj]["targetY"] - dropZoneMap[jj]["boxTop"] - (dropZoneMap[jj]["boxHeight"] / 2)) / lineLength);
        if (dropZoneMap[jj]["targetX"] > (dropZoneMap[jj]["boxLeft"] + dropZoneMap[jj]["boxWidth"])) { angle *= -1; }
        $(actionLine).css('-webkit-transform', 'rotate(' + angle + 'deg)');

        parentDiv.appendChild(actionBox);
        parentDiv.appendChild(actionLine);
      }
    }
  }




  function countInterPoints(elem1, elem2)
  {
    function pointList(elem) { return [ [ $(elem).offset()['left'], $(elem).offset()['top'] ],
                                        [ $(elem).offset()['left'] + $(elem).width(), $(elem).offset()['top'] ],
                                        [ $(elem).offset()['left'] + $(elem).width(), $(elem).offset()['top'] + $(elem).height() ],
                                        [ $(elem).offset()['left'], $(elem).offset()['top'] + $(elem).height() ] ]; }

    // Are any of points bounded by rect?
    function comparePoints(points, elem)
    {
      var interPoints = 0;

      for (var ii = 0; ii < points.length; ii++)
      {
        if ((points[ii][0] > $(elem).offset()['left'] && points[ii][0] < ($(elem).offset()['left'] + $(elem).width())) && (points[ii][1] > $(elem).offset()['top'] && points[ii][1] < ($(elem).offset()['top'] + $(elem).height())))
        {
          interPoints++;
        }
      }
      return interPoints;
    }

    return (comparePoints(pointList(elem1), elem2) + comparePoints(pointList(elem2), elem1));
  }




  function initializeActionListItems(actionItemList)
  {
    console.log(actionItemList);
    var parentDiv = document.getElementById('actionItemList');
    
    for (var ii = 0; ii < actionItemList.length; ii++)
    {
      for (var jj = 0; jj < actionItemList[ii]['actionList'].length; jj++)
      {
        var actionItem = document.createElement('div');
        actionItem.style.width = "90%";
        actionItem.style.height = "30px";
        actionItem.setAttribute('data-actionmap', actionItemList[ii]['actionmap']);
        actionItem.setAttribute('data-actionname', actionItemList[ii]['actionList'][jj]['fullname']);
        actionItem.setAttribute('data-actiontype', actionItemList[ii]['actionList'][jj]['type']);
        actionItem.setAttribute('data-abbreviation', actionItemList[ii]['actionList'][jj]['abbreviation']);
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
          actionCopy.style.backgroundColor = this.style.backgroundColor;
          actionCopy.setAttribute('data-actionmap', this.getAttribute('data-actionmap'));
          actionCopy.setAttribute('data-actionname', this.getAttribute('data-actionname'));
          actionCopy.setAttribute('data-actiontype', this.getAttribute('data-actiontype'));

          actionCopy.style.height = "30px";
          actionCopy.style.opacity = '0.3';
          actionCopy.style.width = "207px";
          actionCopy.style.color = this.style.color;
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

            var bestDropCandidate = bindList[ii];
            var numInterPoints = 0;

            for (var ii = 0; ii < bindList.length; ii++)
            {
              if (countInterPoints(bindList[ii], this) > numInterPoints)
              {
                bestDropCandidate = bindList[ii];
                numInterPoints = countInterPoints(bindList[ii], this);
              }
            }

            // A valid drop zone exists underneath the dragged box.
            if (numInterPoints > 0)
            {
              foundBind = true;
              $(this).unbind("mouseup");
              this.style.cursor = "pointer";

              // The action has been clicked on, so we remove it.
              $(this).click(function()
              {
                $(this).animate( { left: $(dragOriginElement).offset()['left'], top: $(dragOriginElement).offset()['top'], opacity: 0.0 }, 500, function()
                {
                  console.log('Correcting!');
                  var remainingChildren = this.parentNode.childNodes;
                  this.parentNode.removeChild(this);

                  if (remainingChildren.length > 1)
                  {
                    var newfontSize = parseFloat(this.parentNode.childNodes[0].style.fontSize.replace(/\D/g,'')) / (this.parentNode.childNodes.length - 1) + "pt";
                    for (var jj = 1; jj < this.parentNode.parentNode.childNodes.length; jj++)
                    {
                      this.parentNode.childNodes[jj].childNodes[0].style.fontSize = newfontSize;
                    }

                    this.childNodes[0].style.fontSize = newfontSize;
                  }

                  for (var jj = 0; jj < remainingChildren.length; jj++)
                  {
                    if (remainingChildren[jj].nodeName === "SPAN" && remainingChildren.length == 1) { remainingChildren[jj].style.display = "block"; }
                    else { binderChildren[jj].style.width = Math.floor((this.binder.offsetWidth - 2 ) / (binderChildren.length - 1)) + "px"; }
                  }
                });
              });

              this.binder = bestDropCandidate;

              $(this).animate( { left: $(bestDropCandidate).offset()['left'], top: $(bestDropCandidate).offset()['top'], width: bestDropCandidate.style.width, height: bestDropCandidate.style.height, opacity: 1.0 }, 500, function()
              { 
                document.body.removeChild(this);
                // this.binder.innerHTML = '';
                this.style.position = "relative";
                this.style.float = "left";
                this.style.overflow = "hidden";
                this.style.left = "auto";
                this.style.top = "auto";
                if (this.binder.childNodes.length > 1)
                {
                  var newfontSize = parseFloat(this.childNodes[0].style.fontSize.replace(/\D/g,'')) / (this.binder.childNodes.length) + "pt";
                  for (var jj = 1; jj < this.binder.childNodes.length; jj++)
                  {
                    this.binder.childNodes[jj].childNodes[0].style.fontSize = newfontSize;
                  }

                  this.childNodes[0].style.fontSize = newfontSize;
                }
                $(this.childNodes[0]).css("white-space", "nowrap");
                this.binder.appendChild(this);

                var binderChildren = this.binder.childNodes;
                for (var jj = 0; jj < binderChildren.length; jj++)
                {
                  if (binderChildren[jj].nodeName === "SPAN") { binderChildren[jj].style.display = "none"; }
                  else { binderChildren[jj].style.width = Math.floor((this.binder.offsetWidth - 2 ) / (binderChildren.length - 1)) + "px"; }
                }

              });
            }

            // Box has been dragged over nothing of interest.
            if (numInterPoints === 0)
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
        nickNameText.innerHTML = actionItemList[ii]['actionList'][jj]['nickname'];
        $(nickNameText).css("font-size", "14pt");
        $(nickNameText).css("display", "block");
        $(nickNameText).css("position", "absolute");
        $(nickNameText).css("margin-top", "3px");
        $(nickNameText).css("width", "90%");
        $(nickNameText).css("margin-left", "5%");
        $(nickNameText).css("-webkit-user-select", "none");

        actionItem.appendChild(nickNameText);
        parentDiv.appendChild(actionItem);
      }
    }
  }




  function createXmlAndOfferDownload()
  {
    var filename = "newXMLMapping.xml"
    var mimeType = "text/xml";

    var xmlDocument = (new DOMParser()).parseFromString('<ActionMaps version="0"></ActionMaps>', 'text/xml');
    var xmlRoot = xmlDocument.getElementsByTagName('ActionMaps')[0];
    
    var binds = document.querySelectorAll(".bindable");

    for (var ii = 0; ii < binds.length; ii++)
    {
      var inputType = binds[ii].getAttribute('data-inputtype');
      var inputName = binds[ii].getAttribute('data-inputname');
      var deviceOffset = binds[ii].getAttribute('data-deviceoffset');
      var deviceType = binds[ii].getAttribute('data-devicetype');

      var actions = binds[ii].childNodes;

      for (var jj = 0; jj < actions.length; jj++)
      {
        // Ignore the bind point's text label.
        if (actions[jj].tagName === "SPAN")
        {
          continue;
        }

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
        newbind.setAttribute('device', deviceType);
        if (deviceType === 'joystick')
        {
          newbind.setAttribute('input', 'js' + deviceOffset + '_' + inputName);
        }
        else
        {
          newbind.setAttribute('input', inputName);
        }

        parentAction.appendChild(newbind);
      }
    }

    var content = (new XMLSerializer()).serializeToString(xmlDocument);

    var sneakyLink = document.createElement('a');
    sneakyLink.href = 'data:' + mimeType + ':' + filename + ';charset=utf-8,' + escape(content);
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
    initializeActionDropZones( [ createX55DropMap('saitekX55RhinoHotasInputMap')   ,
                                 createX52DropMap('x52HotasInputMap')              ,
                                 createXbox360DropMap('xbox360ControllerInputMap') ,
                                 createST290DropMap('saitekST290InputMap')                       ,
                                 createG502DropMap('logitechG502InputMap')                       ,
                                 createThrustmasterWarthogDropMap('thrustmasterWarthogInputMap') ,
                                 createE3DPRODropMap('logitechExtreme3DProInputMap')             ,] ) ;

    initializeActionListItems( [ createShipGeneralMap()   ,
                                 createShipWeaponsMap()   ,
                                 createShipMissilesMap()  ,
                                 createShipDefensiveMap() ,
                                 createShipMovementMap()  ,
                                 createShipTargetingMap() ,
                                 createShipRadarMap()     ,
                                 createShipHudMap()       ,
                                 createShipViewMap()      ] );

    $('#btnCreateXmlFile').click(createXmlAndOfferDownload);
  });




})();
