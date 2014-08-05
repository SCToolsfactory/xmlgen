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
    <script src="/js/navbar.js"></script>
    <script src="/js/dropmap.js"></script>
    <script src="/js/dmsaitekx55hotas.js"></script>
    <script src="/js/dmsaitekx52hotas.js"></script>
    <script src="/js/dmxbox360.js"></script>
    <script src="/js/dmsaitekst290.js"></script>
    <script src="/js/dmlogitechg502.js"></script>
    <script src="/js/dmthrustmasterwarthog.js"></script>
    <script src="/js/dmlogitechextreme3dpro.js"></script>
    <script src="/js/actionmap.js"></script>
    <script src="/js/amshipgeneral.js"></script>
    <script src="/js/amshipweapons.js"></script>
    <script src="/js/amshipmissiles.js"></script>
    <script src="/js/amshipdefensive.js"></script>
    <script src="/js/amshipmovement.js"></script>
    <script src="/js/amshiptargeting.js"></script>
    <script src="/js/amshipradar.js"></script>
    <script src="/js/amshipview.js"></script>
    <script src="/js/amshiphud.js"></script>
    <script src="/js/amshipmovement.js"></script>
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
      <div id="actionListContainer">
        <span>Action List</span>
        <div id="actionItemList">
        </div>
      </div>
      <div id="inputMapContainer">
        <div id="inputMapReelContainer">
          <div id="logitechG502InputMap" class="inputMap" data-nickname="MOU">
            <div class="inputMapVisualizationWrapper">
              <img src="/images/logitechg502.PNG" width="1050" height="475" alt="Logitech G502 Gaming Mouse" />
            </div>
          </div>
          <div id="logitechExtreme3DProInputMap" class="inputMap" data-nickname="E3D">
            <div class="inputMapVisualizationWrapper">
              <img src="/images/logitechextreme3dpro.PNG" width="1050" height="475" alt="Logitech Extreme 3D Pro" />
            </div>
          </div>
          <div id="saitekST290InputMap" class="inputMap" data-nickname="290">
            <div class="inputMapVisualizationWrapper">
              <img src="/images/st290Picture.PNG" width="1050" height="475" alt="Saitek ST290 Joystick" />
            </div>
          </div>
          <div id="saitekX55RhinoHotasInputMap" class="inputMap" data-nickname="X55">
            <div class="inputMapVisualizationWrapper">
              <img src="/images/saitekX55RhinoHotas.png" width="1050" height="475" alt="Saitek X55 Rhino H.O.T.A.S." />
            </div>
          </div>
          <div id="x52HotasInputMap" class="inputMap" data-nickname="X52">
            <div class="inputMapVisualizationWrapper">
              <img src="/images/x52HotasMap.png" width="1050" height="475" alt="Saitek X52 H.O.T.A.S." />
            </div>
          </div>
          <div id="thrustmasterWarthogInputMap" class="inputMap" data-nickname="WHG">
            <div class="inputMapVisualizationWrapper">
              <img src="/images/thrustmasterwarthog.PNG" width="1050" height="475" alt="Thrustmaster Warthog H.O.T.A.S." />
            </div>
          </div>
          <div id="xbox360ControllerInputMap" class="inputMap" data-nickname="360">
            <div class="inputMapVisualizationWrapper">
              <img src="/images/xbox360Controller.png" width="1050" height="475" alt="Xbox 360 Controller" />
            </div>
          </div>
        </div>
      </div>
      <div id="optionsContainer">
        <span>Options</span>
        <div id="btnCreateXmlFile"><span>Create XML File!</span></div>
      </div>
    </div>
    <div id="donateBox">
      <span>Love the tool? Want to help with hosting costs?</span>
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_donations">
        <input type="hidden" name="business" value="sebass63@gmail.com">
        <input type="hidden" name="lc" value="US">
        <input type="hidden" name="item_name" value="Constellation Corporation SC Org">
        <input type="hidden" name="no_note" value="0">
        <input type="hidden" name="currency_code" value="USD">
        <input type="hidden" name="bn" value="PP-DonationsBF:btn_donate_SM.gif:NonHostedGuest">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
      </form>
    </div>
  </body>
</html>
