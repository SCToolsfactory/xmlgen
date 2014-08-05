/*
    File Name: dmlogitechextreme3dpro.js
    Author: Sebastian Morgan (sebass63@gmail.com)
    Date Created: August 03, 2014.

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




function createE3DPRODropMap(parentDiv)
{
  var exMap = new DropMap(parentDiv);

  //              Dropzone  Name       Type     O   Input Type      Input Name      B L   B T   B W   BH   T X   T Y
  //             ---------------- ------------ --- ------------ ------------------ ----- ----- ----- ---- ----- -----
  exMap.AddZone( "Trigger"      , "joystick" , 1 , "button"   , "button5"         , 280 ,  40 , 100 , 25 , 535 , 120 ) ;
  exMap.AddZone( "Button 1"     , "joystick" , 1 , "button"   , "button1"         , 650 , 200 , 100 , 25 , 560 , 206 ) ;
  exMap.AddZone( "Button 2"     , "joystick" , 1 , "button"   , "button2"         , 650 , 230 , 100 , 25 , 555 , 235 ) ;
  exMap.AddZone( "Button 3"     , "joystick" , 1 , "button"   , "button3"         , 300 , 150 , 100 , 25 , 510 , 206 ) ;
  exMap.AddZone( "Button 4"     , "joystick" , 1 , "button"   , "button4"         , 300 , 180 , 100 , 25 , 520 , 235 ) ;
  exMap.AddZone( "Button 6"     , "joystick" , 1 , "button"   , "button6"         , 280 ,  70 , 100 , 25 , 495 , 240 ) ;
  exMap.AddZone( "Button 7"     , "joystick" , 1 , "button"   , "button7"         , 150 , 250 , 100 , 25 , 470 , 255 ) ;
  exMap.AddZone( "Button 8"     , "joystick" , 1 , "button"   , "button8"         , 170 , 280 , 100 , 25 , 450 , 295 ) ;
  exMap.AddZone( "Button 9"     , "joystick" , 1 , "button"   , "button9"         , 190 , 310 , 100 , 25 , 460 , 350 ) ;
  exMap.AddZone( "Button 10"    , "joystick" , 1 , "button"   , "button10"        , 210 , 340 , 100 , 25 , 460 , 235 ) ;
  exMap.AddZone( "Button 11"    , "joystick" , 1 , "button"   , "button11"        , 230 , 370 , 100 , 25 , 420 , 300 ) ;
  exMap.AddZone( "Button 12"    , "joystick" , 1 , "button"   , "button12"        , 250 , 400 , 100 , 25 , 420 , 350 ) ;
  exMap.AddZone( "Forw/Back"    , "joystick" , 1 , "axis"     , "x"               , 650 , 300 , 100 , 25 , 540 , 320 ) ;
  exMap.AddZone( "Side-Side"    , "joystick" , 1 , "axis"     , "y"               , 660 , 340 , 100 , 25 , 540 , 320 ) ;
  exMap.AddZone( "Twist"        , "joystick" , 1 , "rotary"   , "rotz"            , 670 , 380 , 100 , 25 , 540 , 320 ) ;
  exMap.AddZone( "Knob"         , "joystick" , 1 , "axis"     , "z"               , 500 , 530 , 100 , 25 , 500 , 450 ) ;
  exMap.AddZone( "Hat Up"       , "joystick" , 1 , "hat"      , "hat1_up"         , 490 ,  10 , 100 , 25 , 533 , 190 ) ;
  exMap.AddZone( "Hat Left"     , "joystick" , 1 , "hat"      , "hat1_left"       , 430 ,  40 , 100 , 25 , 523 , 206 ) ;
  exMap.AddZone( "Hat Right"    , "joystick" , 1 , "hat"      , "hat1_right"      , 550 ,  40 , 100 , 25 , 547 , 206 ) ;
  exMap.AddZone( "Hat Down"     , "joystick" , 1 , "hat"      , "hat1_down"       , 490 ,  70 , 100 , 25 , 533 , 213 ) ;
  

  return exMap;
}
