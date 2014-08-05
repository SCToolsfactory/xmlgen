/*
    File Name: dmthrustmasterwarthog.js
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




function createThrustmasterWarthogDropMap(parentDiv)
{
  var whgMap = new DropMap(parentDiv);

  //              Dropzone  Name       Type     O   Input Type      Input Name      B L   B T   B W   BH   T X   T Y
  //             ---------------- ------------ --- ------------ ------------------ ----- ----- ----- ---- ----- -----
  whgMap.AddZone( "Trigger 1"    , "joystick" , 1 , "button"   , "button1"        , 950 , 178 , 100 , 25 , 860 , 190 ) ;
  whgMap.AddZone( "Trigger 2"    , "joystick" , 1 , "button"   , "button6"        , 950 , 208 , 100 , 25 , 860 , 190 ) ;
  whgMap.AddZone( "Red Btn"      , "joystick" , 1 , "button"   , "button2"        , 750 ,  10 ,  75 , 25 , 813 , 116 ) ;
  whgMap.AddZone( "Index T."     , "joystick" , 1 , "button"   , "button5"        , 950 , 148 , 100 , 25 , 905 , 157 ) ;
  whgMap.AddZone( "TMS Up"       , "joystick" , 1 , "button"   , "button7"        , 610 ,  10 , 100 , 25 , 808 , 138 ) ;
  whgMap.AddZone( "TMS Left"     , "joystick" , 1 , "button"   , "button10"       , 550 ,  50 , 100 , 25 , 800 , 143 ) ;
  whgMap.AddZone( "TMS Right"    , "joystick" , 1 , "button"   , "button8"        , 660 ,  50 , 100 , 25 , 815 , 146 ) ;
  whgMap.AddZone( "TMS Down"     , "joystick" , 1 , "button"   , "button9"        , 610 ,  90 , 100 , 25 , 805 , 157 ) ;
  whgMap.AddZone( "NS Button"    , "joystick" , 1 , "button"   , "button3"        , 950 , 270 , 100 , 25 , 818 , 257 ) ;
  whgMap.AddZone( "Pinky L."     , "joystick" , 1 , "button"   , "button4"        , 950 , 300 , 100 , 25 , 845 , 270 ) ;
  whgMap.AddZone( "POV Up"       , "joystick" , 1 , "hat"      , "hat1_up"        , 900 ,  10 , 100 , 25 , 845 , 118 ) ;
  whgMap.AddZone( "POV Right"    , "joystick" , 1 , "hat"      , "hat1_right"     , 960 ,  50 , 100 , 25 , 850 , 128 ) ;
  whgMap.AddZone( "POV Down"     , "joystick" , 1 , "hat"      , "hat1_down"      , 900 ,  90 , 100 , 25 , 840 , 140 ) ;
  whgMap.AddZone( "POV Left"     , "joystick" , 1 , "hat"      , "hat1_left"      , 840 ,  50 , 100 , 25 , 830 , 130 ) ;
  whgMap.AddZone( "CH Up"        , "joystick" , 1 , "button"   , "button11"       , 910 , 440 ,  75 , 25 , 827 , 154 ) ;
  whgMap.AddZone( "CH Right"     , "joystick" , 1 , "button"   , "button12"       , 960 , 410 ,  75 , 25 , 835 , 163 ) ;
  whgMap.AddZone( "CH Dwn"       , "joystick" , 1 , "button"   , "button13"       , 910 , 380 ,  75 , 25 , 820 , 168 ) ;
  whgMap.AddZone( "CH Left"      , "joystick" , 1 , "button"   , "button14"       , 860 , 410 ,  75 , 25 , 818 , 157 ) ;
  whgMap.AddZone( "Forw/Back"    , "joystick" , 1 , "axis"     , "y"              , 750 , 550 , 100 , 25 , 810 , 375 ) ;
  whgMap.AddZone( "Side-to-side" , "joystick" , 1 , "axis"     , "x"              , 810 , 590 , 100 , 25 , 810 , 375 ) ;
  whgMap.AddZone( "Twist"        , "joystick" , 1 , "rotary"   , "rotz"           , 870 , 630 , 100 , 25 , 810 , 375 ) ;
  whgMap.AddZone( "CMS Up"       , "joystick" , 1 , "button"   , "button15"       , 575 , 120 ,  90 , 25 , 793 , 188 ) ;
  whgMap.AddZone( "CMS Left"     , "joystick" , 1 , "button"   , "button18"       , 465 , 160 ,  90 , 25 , 793 , 188 ) ;
  whgMap.AddZone( "CMS Right"    , "joystick" , 1 , "button"   , "button16"       , 685 , 160 ,  90 , 25 , 793 , 188 ) ;
  whgMap.AddZone( "CMS Down"     , "joystick" , 1 , "button"   , "button17"       , 575 , 200 ,  90 , 25 , 793 , 188 ) ;
  whgMap.AddZone( "CMS Click"    , "joystick" , 1 , "button"   , "button19"       , 575 , 160 ,  90 , 25 , 793 , 188 ) ;

  whgMap.AddZone( "PS Fwd"       , "joystick" , 2 , "button"   , "button13"       ,  20 , 170 ,  75 , 25 , 140 , 202 ) ;
  whgMap.AddZone( "PS Back"      , "joystick" , 2 , "button"   , "button14"       ,  20 , 200 ,  75 , 25 , 140 , 202 ) ;
  whgMap.AddZone( "FR Fwd"       , "joystick" , 2 , "button"   , "button22"       ,  20 , 270 ,  75 , 25 , 210 , 288 ) ;
  whgMap.AddZone( "FR Back"      , "joystick" , 2 , "button"   , "button23"       ,  20 , 300 ,  75 , 25 , 200 , 295 ) ;
  whgMap.AddZone( "EAC Tog"      , "joystick" , 2 , "button"   , "button24"       ,  20 , 430 ,  75 , 25 , 145 , 365 ) ;
  whgMap.AddZone( "RDR Tog"      , "joystick" , 2 , "button"   , "button25"       ,  40 , 460 ,  75 , 25 , 177 , 390 ) ;
  whgMap.AddZone( "AP Tog"       , "joystick" , 2 , "button"   , "button26"       ,  60 , 490 ,  75 , 25 , 215 , 407 ) ;
  whgMap.AddZone( "AP Fwd"       , "joystick" , 2 , "button"   , "button27"       , 190 , 585 ,  75 , 25 , 240 , 425 ) ;
  whgMap.AddZone( "AP Back"      , "joystick" , 2 , "button"   , "button28"       , 170 , 555 ,  75 , 25 , 240 , 425 ) ;
  whgMap.AddZone( "SIL Btn"      , "joystick" , 2 , "button"   , "button21"       , 280 , 555 ,  75 , 25 , 305 , 390 ) ;
  whgMap.AddZone( "Slider"       , "joystick" , 2 , "slider"   , "slider1"        , 300 , 585 ,  75 , 25 , 375 , 390 ) ;
  whgMap.AddZone( "APU Tog"      , "joystick" , 2 , "button"   , "button20"       , 320 , 615 ,  75 , 25 , 370 , 357 ) ;
  whgMap.AddZone( "L Fwd"        , "joystick" , 2 , "button"   , "button31"       , 430 , 550 ,  75 , 25 , 390 , 317 ) ;
  whgMap.AddZone( "L Back"       , "joystick" , 2 , "button"   , "button18"       , 410 , 520 ,  75 , 25 , 390 , 317 ) ;
  whgMap.AddZone( "R Fwd"        , "joystick" , 2 , "button"   , "button32"       , 470 , 610 ,  75 , 25 , 435 , 347 ) ;
  whgMap.AddZone( "R Back"       , "joystick" , 2 , "button"   , "button19"       , 450 , 580 ,  75 , 25 , 435 , 347 ) ;
  whgMap.AddZone( "ENG Tog"      , "joystick" , 2 , "button"   , "button16"       , 600 , 400 , 100 , 25 , 455 , 290 ) ;
  whgMap.AddZone( "FLOW Tog"     , "joystick" , 2 , "button"   , "button17"       , 630 , 460 , 100 , 25 , 500 , 312 ) ;
  whgMap.AddZone( "L. Throttle"  , "joystick" , 2 , "throttle" , "throttlex"      ,  30 ,  40 , 100 , 25 , 185 , 175 ) ;
  whgMap.AddZone( "R. Throttle"  , "joystick" , 2 , "throttle" , "throttley"      ,  30 ,  10 , 100 , 25 , 330 , 175 ) ;
  whgMap.AddZone( "LT Button"    , "joystick" , 2 , "button"   , "button15"       ,  30 , 100 , 100 , 25 , 200 , 150 ) ;
  whgMap.AddZone( "Slew Btn"     , "joystick" , 2 , "button"   , "button1"        , 150 ,  10 , 100 , 25 , 345 , 130 ) ;
  whgMap.AddZone( "POV2 Up"      , "joystick" , 2 , "hat"      , "hat2_up"        , 370 ,  10 , 100 , 25 , 400 , 125 ) ;
  whgMap.AddZone( "POV2 Left"    , "joystick" , 2 , "hat"      , "hat2_left"      , 310 ,  40 , 100 , 25 , 395 , 130 ) ;
  whgMap.AddZone( "POV2 Right"   , "joystick" , 2 , "hat"      , "hat2_right"     , 430 ,  40 , 100 , 25 , 405 , 130 ) ;
  whgMap.AddZone( "POV2 Down"    , "joystick" , 2 , "hat"      , "hat2_down"      , 370 ,  70 , 100 , 25 , 400 , 135 ) ;
  whgMap.AddZone( "LR Fwd"       , "joystick" , 2 , "button"   , "button11"       , 530 , 500 , 100 , 25 , 410 , 280 ) ;
  whgMap.AddZone( "LR Back"      , "joystick" , 2 , "button"   , "button12"       , 510 , 470 , 100 , 25 , 390 , 280 ) ;
  whgMap.AddZone( "MR Fwd"       , "joystick" , 2 , "button"   , "button9"        , 570 , 560 , 100 , 25 , 430 , 250 ) ;
  whgMap.AddZone( "MR Back"      , "joystick" , 2 , "button"   , "button10"       , 550 , 530 , 100 , 25 , 410 , 245 ) ;
  whgMap.AddZone( "TR Fwd"       , "joystick" , 2 , "button"   , "button7"        , 610 , 620 , 100 , 25 , 445 , 220 ) ;
  whgMap.AddZone( "TR Back"      , "joystick" , 2 , "button"   , "button8"        , 590 , 590 , 100 , 25 , 425 , 215 ) ;
  whgMap.AddZone( "CSH Up"       , "joystick" , 2 , "button"   , "button3"        , 650 , 270 ,  90 , 25 , 445 , 160 ) ;
  whgMap.AddZone( "CSH Left"     , "joystick" , 2 , "button"   , "button6"        , 540 , 310 ,  90 , 25 , 430 , 175 ) ;
  whgMap.AddZone( "CSH Right"    , "joystick" , 2 , "button"   , "button4"        , 760 , 310 ,  90 , 25 , 450 , 175 ) ;
  whgMap.AddZone( "CSH Down"     , "joystick" , 2 , "button"   , "button5"        , 650 , 350 ,  90 , 25 , 440 , 190 ) ;
  whgMap.AddZone( "CSH Click"    , "joystick" , 2 , "button"   , "button2"        , 650 , 310 ,  90 , 25 , 445 , 175 ) ;

  return whgMap;
}
