/*
    File Name: dmsaitekxst290.js
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




function createST290DropMap(parentDiv)
{
  var stMap = new DropMap(parentDiv);

  //              Dropzone  Name       Type     O   Input Type      Input Name      B L   B T   B W   BH   T X   T Y
  //             ---------------- ------------ --- ------------ ------------------ ----- ----- ----- ---- ----- -----
  stMap.AddZone( "Trigger"      , "joystick" , 1 , "button"   , "button1"         , 300 , 200 , 100 , 25 , 475 , 213 ) ;
  stMap.AddZone( "Thumb Mid"    , "joystick" , 1 , "button"   , "button2"         , 310 , 290 , 100 , 25 , 555 , 197 ) ;
  stMap.AddZone( "Thumb LL"     , "joystick" , 1 , "button"   , "button3"         , 300 , 250 , 100 , 25 , 538 , 197 ) ;
  stMap.AddZone( "Thumb LR"     , "joystick" , 1 , "button"   , "button4"         , 320 , 330 , 100 , 25 , 570 , 193 ) ;
  stMap.AddZone( "Thumb L"      , "joystick" , 1 , "button"   , "button5"         , 280 , 130 , 100 , 25 , 505 , 143 ) ;
  stMap.AddZone( "Thumb R"      , "joystick" , 1 , "button"   , "button6"         , 646 , 125 , 100 , 25 , 550 , 138 ) ;
  stMap.AddZone( "Forw/Back"    , "joystick" , 1 , "axis"     , "y"               , 650 , 300 , 100 , 25 , 540 , 400 ) ;
  stMap.AddZone( "Side-Side"    , "joystick" , 1 , "axis"     , "x"               , 660 , 340 , 100 , 25 , 540 , 400 ) ;
  stMap.AddZone( "Twist"        , "joystick" , 1 , "rotary"   , "rotz"            , 670 , 380 , 100 , 25 , 540 , 400 ) ;
  stMap.AddZone( "Knob"         , "joystick" , 1 , "axis"     , "z"               , 770 , 490 , 100 , 25 , 650 , 500 ) ;
  stMap.AddZone( "Hat Up"       , "joystick" , 1 , "hat"      , "hat1_up"         , 490 ,  10 , 100 , 25 , 528 , 130 ) ;
  stMap.AddZone( "Hat Left"     , "joystick" , 1 , "hat"      , "hat1_left"       , 430 ,  40 , 100 , 25 , 520 , 140 ) ;
  stMap.AddZone( "Hat Right"    , "joystick" , 1 , "hat"      , "hat1_right"      , 550 ,  40 , 100 , 25 , 540 , 138 ) ;
  stMap.AddZone( "Hat Down"     , "joystick" , 1 , "hat"      , "hat1_down"       , 490 ,  70 , 100 , 25 , 530 , 152 ) ;
  

  return stMap;
}
