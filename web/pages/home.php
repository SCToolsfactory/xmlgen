<!--
    File Name: home.php
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
-->

<html>
  <head>
    <title>XML Schema Generator</title>
    <link rel="stylesheet" type="text/css" href="/stylesheets/home.css" />
    <script src="/js/jquery.js"></script>
    <script src="/js/home.js"></script>
  </head>
  <body>
    <div id="masterPageContainer">
      <div id="headerContainer">
        <div id="headerImageContainer">
          <img id="sclogo" src="/images/sclogo.png" width="54" height="66" alt="Star Citizen Logo" />
        </div>
        <div id="headerTextContainer">
          <span>Arena Commander XML Control Schema Generator</span>
        </div>
      </div>
      <div id="inputMethodSelectionContainer">
        <div id="leftInputMethodArrowContainer">
          <div id="leftInputMethodArrow">
          </div>
        </div>
        <div id="rightInputMethodArrowContainer">
          <div id="rightInputMethodArrow">
          </div>
        </div>
        <div id="inputMethodReelContainer">
          <div id="inputMethodMobileContainer">
            <div class="inputMethod"><span>Saitek X-55 Rhino H.O.T.A.S.</span></div>
            <div class="inputMethod"><span>Keyboard &amp; Mouse</span></div>
            <div class="inputMethod"><span>Xbox 360 Controller</span></div>
            <div class="inputMethod"><span>PS3 Gamepad</span></div>
          </div>
        </div>
      </div>
      <div id="actionListContainer">
        <span>Action List</span>
        <div id="actionItemList">
        </div>
      </div>
      <div id="inputMapContainer">
        <div id="inputMapReelContainer">
          <div id="saitekX55RhinoHotasInputMap" class="inputMap">
            <div class="inputMapVisualizationWrapper">
              <img src="/images/saitekX55RhinoHotas.png" width="1050" height="475" alt="Saitek X55 Rhino H.O.T.A.S." />
            </div>
          </div>
          <div id="keyboardAndMouseInputMap" class="inputMap">
            <div class="inputMapVisualizationWrapper">
              <img src="/images/comingsoon.png" width="1050" height="475" alt="Input method coming soon!" />
            </div>
          </div>
        </div>
      </div>
      <div id="optionsContainer">
        <span>Options</span>
        <div id="btnCreateXmlFile"><span>Create XML File!</span></div>
      </div>
    </div>
  </body>
</html>
