/*
    File Name: dmsaitekx52hotas.js
    Author: Sebastian Morgan (sebass63@gmail.com)
    Date Created: July 10, 2014.

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




function createXbox360DropMap(parentDiv)
{
  var map360 = new DropMap(parentDiv);

   //              Dropzone  Name       Type     O   Input Type      Input Name      B L   B T   B W   BH   T X   T Y
  //             ---------------- ------------ --- ------------ ------------------ ----- ----- ----- ---- ----- -----
  map360.AddZone( "A Button"     , "xboxpad"  , 1 , "button"   , "xi_a"           , 850 , 625 , 100 , 25 , 770 , 385 ) ;
  map360.AddZone( "B Button"     , "xboxpad"  , 1 , "button"   , "xi_b"           , 920 , 570 , 100 , 25 , 820 , 340 ) ;
  map360.AddZone( "Y Button"     , "xboxpad"  , 1 , "button"   , "xi_y"           , 925 , 425 , 100 , 25 , 770 , 280 ) ;
  map360.AddZone( "X Button"     , "xboxpad"  , 1 , "button"   , "xi_x"           , 725 , 625 , 100 , 25 , 710 , 335 ) ;
  map360.AddZone( "R Stick Horz" , "xboxpad"  , 1 , "thumb"    , "xi_thumbrx"     , 650 , 575 , 100 , 25 , 675 , 475 ) ;
  map360.AddZone( "R Stick Vert" , "xboxpad"  , 1 , "thumb"    , "xi_thumbry"     , 530 , 625 , 100 , 25 , 645 , 500 ) ;
  map360.AddZone( "L Stick Horz" , "xboxpad"  , 1 , "thumb"    , "xi_thumblx"     ,  30 , 575 , 100 , 25 , 278 , 365 ) ;
  map360.AddZone( "L Stick Vert" , "xboxpad"  , 1 , "thumb"    , "xi_thumbly"     ,  30 , 625 , 100 , 25 , 310 , 390 ) ;
  map360.AddZone( "Dpad Up"      , "xboxpad"  , 1 , "button"   , "xi_dpad_up"     , 280 , 575 , 100 , 25 , 427 , 420 ) ;
  map360.AddZone( "Dpad Down"    , "xboxpad"  , 1 , "button"   , "xi_dpad_down"   , 330 , 625 , 100 , 25 , 427 , 495 ) ;
  map360.AddZone( "Dpad Left"    , "xboxpad"  , 1 , "button"   , "xi_dpad_left"   , 230 , 525 , 100 , 25 , 380 , 460 ) ;
  map360.AddZone( "Dpad Right"   , "xboxpad"  , 1 , "button"   , "xi_dpad_right"  , 400 , 575 , 100 , 25 , 470 , 460 ) ;
  map360.AddZone( "RS Click"     , "xboxpad"  , 1 , "button"   , "xi_thumbr"      , 510 , 550 , 100 , 25 , 645 , 480 ) ;
  map360.AddZone( "LS Click"     , "xboxpad"  , 1 , "button"   , "xi_thumbl"      ,  30 , 300 , 100 , 25 , 310 , 370 ) ;
  map360.AddZone( "L Shoulder"   , "xboxpad"  , 1 , "button"   , "xi_shoulderl"   ,  30 , 200 , 100 , 25 , 310 , 190 ) ;
  map360.AddZone( "L Trigger"    , "xboxpad"  , 1 , "button"   , "xi_triggerl"    ,  30 , 100 , 100 , 25 , 340 , 130 ) ;
  map360.AddZone( "Back"         , "xboxpad"  , 1 , "button"   , "xi_back"        , 400 ,  60 , 100 , 25 , 457 , 344 ) ;
  map360.AddZone( "Start"        , "xboxpad"  , 1 , "button"   , "xi_start"       , 530 , 100 , 100 , 25 , 620 , 340 ) ;
  map360.AddZone( "R Trigger"    , "xboxpad"  , 1 , "button"   , "xi_triggerr"    , 900 , 100 , 100 , 25 , 750 , 140 ) ;
  map360.AddZone( "R Shoulder"   , "xboxpad"  , 1 , "button"   , "xi_shoulderr"   , 900 , 200 , 100 , 25 , 770 , 200 ) ;

  return map360;
}
