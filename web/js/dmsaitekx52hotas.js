/*
    File Name: dmsaitekx52hotas.joystick
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




function createX52DropMap(parentDiv)
{
  var x52Map = new DropMap(parentDiv);

  //              Dropzone  Name       Type     O   Input Type      Input Name      B L   B T   B W   BH   T X   T Y
  //             ---------------- ------------ --- ------------ ------------------ ----- ----- ----- ---- ----- -----
  x52Map.AddZone( "Triangle"     , "joystick" , 1 , "button"   , "button5"        , 540 , 130 , 100 , 25 , 770 , 192 ) ;
  x52Map.AddZone( "Trigger 50%"  , "joystick" , 1 , "button"   , "button1"        , 540 , 170 , 100 , 25 , 769 , 235 ) ;
  x52Map.AddZone( "Trigger 100%" , "joystick" , 1 , "button"   , "button15"       , 540 , 210 , 100 , 25 , 769 , 235 ) ;
  x52Map.AddZone( "Pinky Button" , "joystick" , 1 , "button"   , "button6"        , 560 , 260 , 100 , 25 , 767 , 323 ) ;
  x52Map.AddZone( "Castle Up"    , "joystick" , 1 , "button"   , "button20"       , 603 ,  10 , 100 , 25 , 773 , 149 ) ;
  x52Map.AddZone( "Castle Left"  , "joystick" , 1 , "button"   , "button23"       , 540 ,  45 , 100 , 25 , 761 , 158 ) ;
  x52Map.AddZone( "Castle Right" , "joystick" , 1 , "button"   , "button21"       , 660 ,  45 , 100 , 25 , 780 , 158 ) ;
  x52Map.AddZone( "Castle Down"  , "joystick" , 1 , "button"   , "button22"       , 600 ,  80 , 100 , 25 , 776 , 170 ) ;
  x52Map.AddZone( "Big Red"      , "joystick" , 1 , "button"   , "button1"        , 720 ,  10 , 100 , 25 , 787 , 156 ) ;
  x52Map.AddZone( "Small Red"    , "joystick" , 1 , "button"   , "button2"        , 870 , 150 , 100 , 25 , 808 , 158 ) ;
  x52Map.AddZone( "BS Red"       , "joystick" , 1 , "button"   , "button28"       , 890 ,  10 , 100 , 25 , 818 , 148 ) ;
  x52Map.AddZone( "BS Purple"    , "joystick" , 1 , "button"   , "button29"       , 890 ,  50 , 100 , 25 , 818 , 158 ) ;
  x52Map.AddZone( "BS Blue"      , "joystick" , 1 , "button"   , "button30"       , 890 ,  90 , 100 , 25 , 818 , 168 ) ;
  x52Map.AddZone( "Lil Red"      , "joystick" , 1 , "button"   , "button4"        , 870 , 190 , 100 , 25 , 810 , 183 ) ;
  x52Map.AddZone( "Wich H Up"    , "joystick" , 1 , "hat"      , "hat1_up"        , 890 , 250 , 100 , 25 , 795 , 185 ) ;
  x52Map.AddZone( "Wich H Left"  , "joystick" , 1 , "hat"      , "hat1_left"      , 830 , 290 , 100 , 25 , 788 , 192 ) ;
  x52Map.AddZone( "Wich H Right" , "joystick" , 1 , "hat"      , "hat1_right"     , 950 , 290 , 100 , 25 , 808 , 195 ) ;
  x52Map.AddZone( "Wich H Down"  , "joystick" , 1 , "hat"      , "hat1_down"      , 890 , 330 , 100 , 25 , 805 , 203 ) ;
  x52Map.AddZone( "Forward/Back" , "joystick" , 1 , "axis"     , "y"              , 550 , 300 , 100 , 25 , 800 , 410 ) ;
  x52Map.AddZone( "Side-to-side" , "joystick" , 1 , "axis"     , "x"              , 550 , 340 , 100 , 25 , 800 , 410 ) ;
  x52Map.AddZone( "Twist"        , "joystick" , 1 , "rot"      , "rotz"           , 550 , 380 , 100 , 25 , 800 , 410 ) ;
  x52Map.AddZone( "Tog 1 Up"     , "joystick" , 1 , "button"   , "button9"        , 650 , 590 , 100 , 25 , 820 , 475 ) ;
  x52Map.AddZone( "Tog 1 Down"   , "joystick" , 1 , "button"   , "button10"       , 670 , 630 , 100 , 25 , 830 , 490 ) ;
  x52Map.AddZone( "Tog 2 Up"     , "joystick" , 1 , "button"   , "button11"       , 770 , 590 , 100 , 25 , 845 , 470 ) ;
  x52Map.AddZone( "Tog 2 Down"   , "joystick" , 1 , "button"   , "button12"       , 790 , 630 , 100 , 25 , 850 , 490 ) ;
  x52Map.AddZone( "Tog 3 Up"     , "joystick" , 1 , "button"   , "button13"       , 890 , 590 , 100 , 25 , 875 , 465 ) ;
  x52Map.AddZone( "Tog 3 Down"   , "joystick" , 1 , "button"   , "button14"       , 910 , 630 , 100 , 25 , 875 , 480 ) ;
  x52Map.AddZone( "R Roll Fwd"   , "joystick" , 1 , "button"   , "button37"       , 500 , 540 , 100 , 25 , 487 , 430 ) ;
  x52Map.AddZone( "R Roll Click" , "joystick" , 1 , "button"   , "button39"       , 500 , 580 , 100 , 25 , 494 , 438 ) ;
  x52Map.AddZone( "R Roll Back"  , "joystick" , 1 , "button"   , "button38"       , 500 , 620 , 100 , 25 , 500 , 450 ) ;
  x52Map.AddZone( "L Roll Fwd"   , "joystick" , 1 , "button"   , "button40"       , 250 , 540 , 100 , 25 , 440 , 440 ) ;
  x52Map.AddZone( "L Roll Click" , "joystick" , 1 , "button"   , "button42"       , 250 , 580 , 100 , 25 , 440 , 445 ) ;
  x52Map.AddZone( "L Roll Back"  , "joystick" , 1 , "button"   , "button41"       , 250 , 620 , 100 , 25 , 445 , 455 ) ;
  x52Map.AddZone( "MF Btn"       , "joystick" , 1 , "button"   , "button33"       , 370 , 560 , 100 , 25 , 460 , 438 ) ;
  x52Map.AddZone( "MB Btn"       , "joystick" , 1 , "button"   , "button34"       , 370 , 600 , 100 , 25 , 475 , 450 ) ;
  x52Map.AddZone( "Button 16"    , "joystick" , 1 , "button"   , "button16"       ,  10 , 600 , 100 , 25 , 370 , 300 ) ;
  x52Map.AddZone( "Throttle"     , "joystick" , 1 , "throttle" , "throttlez"      ,  10 , 560 , 100 , 25 , 300 , 340 ) ;
  x52Map.AddZone( "FL Up"        , "joystick" , 1 , "button"   , "button17"       ,  10 , 300 , 100 , 25 , 230 , 270 ) ;
  x52Map.AddZone( "FL Click"     , "joystick" , 1 , "button"   , "button19"       ,  10 , 340 , 100 , 25 , 230 , 270 ) ;
  x52Map.AddZone( "FL Down"      , "joystick" , 1 , "button"   , "button18"       ,  10 , 380 , 100 , 25 , 230 , 270 ) ;
  x52Map.AddZone( "IH Up"        , "joystick" , 1 , "button"   , "button24"       ,  70 , 150 , 100 , 25 , 280 , 250 ) ;
  x52Map.AddZone( "IH Down"      , "joystick" , 1 , "button"   , "button25"       ,  70 , 230 , 100 , 25 , 280 , 250 ) ;
  x52Map.AddZone( "IH Left"      , "joystick" , 1 , "button"   , "button26"       ,  10 , 190 , 100 , 25 , 280 , 250 ) ;
  x52Map.AddZone( "IH Right"     , "joystick" , 1 , "button"   , "button27"       , 130 , 190 , 100 , 25 , 280 , 250 ) ;
  x52Map.AddZone( "Top Button"   , "joystick" , 1 , "button"   , "button8"        ,  10 ,  30 , 100 , 25 , 318 , 208 ) ;
  x52Map.AddZone( "Top Rotary"   , "joystick" , 1 , "rot"      , "roty"           ,  10 ,  70 , 100 , 25 , 320 , 215 ) ;
  x52Map.AddZone( "Red Thumb Sw" , "joystick" , 1 , "button"   , "button7"        , 240 ,  30 , 100 , 25 , 365 , 225 ) ;
  x52Map.AddZone( "Thumb Button" , "joystick" , 1 , "button"   , "button31"       , 270 ,  70 , 100 , 25 , 389 , 275 ) ;
  x52Map.AddZone( "Thumb Rotary" , "joystick" , 1 , "rot"      , "rotx"           , 350 ,  30 , 100 , 25 , 380 , 275 ) ;

  return x52Map;
}
