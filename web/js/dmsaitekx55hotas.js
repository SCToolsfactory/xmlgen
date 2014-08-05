/*
    File Name: dmsaitekx55hotas.joystick
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




function createX55DropMap(parentDiv)
{
  var x55Map = new DropMap(parentDiv);

  //              Dropzone  Name       Type     O   Input Type      Input Name      B L   B T   B W   BH   T X   T Y
  //             ---------------- ------------ --- ------------ ------------------ ----- ----- ----- ---- ----- -----
  x55Map.AddZone( "Trigger"      , "joystick" , 1 , "button"   , "button1"        , 565 , 195 ,  75 , 25 , 696 , 210 ) ;
  x55Map.AddZone( "Red Btn"      , "joystick" , 1 , "button"   , "button2"        , 750 ,  10 ,  75 , 25 , 818 , 116 ) ;
  x55Map.AddZone( "Index T."     , "joystick" , 1 , "button"   , "button3"        , 550 , 150 ,  75 , 25 , 659 , 163 ) ;
  x55Map.AddZone( "POV Up"       , "joystick" , 1 , "hat"      , "hat1_up"        , 610 ,  20 , 100 , 25 , 808 , 125 ) ;
  x55Map.AddZone( "POV Left"     , "joystick" , 1 , "hat"      , "hat1_left"      , 550 ,  60 , 100 , 25 , 800 , 135 ) ;
  x55Map.AddZone( "POV Right"    , "joystick" , 1 , "hat"      , "hat1_right"     , 660 ,  60 , 100 , 25 , 825 , 138 ) ;
  x55Map.AddZone( "POV Down"     , "joystick" , 1 , "hat"      , "hat1_down"      , 610 , 100 , 100 , 25 , 816 , 145 ) ;
  x55Map.AddZone( "Thumb"        , "joystick" , 1 , "button"   , "button4"        , 735 , 585 ,  75 , 25 , 801 , 237 ) ;
  x55Map.AddZone( "Pinky T."     , "joystick" , 1 , "button"   , "button5"        , 570 , 600 ,  75 , 25 , 688 , 287 ) ;
  x55Map.AddZone( "Pinky L."     , "joystick" , 1 , "button"   , "button6"        , 650 , 585 ,  75 , 25 , 785 , 300 ) ;
  x55Map.AddZone( "WH Up"        , "joystick" , 1 , "button"   , "button7"        , 900 ,  10 , 100 , 25 , 840 , 110 ) ;
  x55Map.AddZone( "WH Right"     , "joystick" , 1 , "button"   , "button8"        , 960 ,  50 , 100 , 25 , 855 , 117 ) ;
  x55Map.AddZone( "WH Down"      , "joystick" , 1 , "button"   , "button9"        , 900 ,  90 , 100 , 25 , 850 , 128 ) ;
  x55Map.AddZone( "WH Left"      , "joystick" , 1 , "button"   , "button10"       , 840 ,  50 , 100 , 25 , 835 , 117 ) ;
  x55Map.AddZone( "CH Up"        , "joystick" , 1 , "button"   , "button11"       , 830 , 590 ,  75 , 25 , 860 , 137 ) ;
  x55Map.AddZone( "CH Right"     , "joystick" , 1 , "button"   , "button12"       , 980 , 585 ,  75 , 25 , 875 , 148 ) ;
  x55Map.AddZone( "CH Dwn"       , "joystick" , 1 , "button"   , "button13"       , 910 , 630 ,  75 , 25 , 865 , 162 ) ;
  x55Map.AddZone( "CH Left"      , "joystick" , 1 , "button"   , "button14"       , 750 , 620 ,  75 , 25 , 856 , 147 ) ;
  x55Map.AddZone( "Forw/Back"    , "joystick" , 1 , "axis"     , "y"              , 950 , 125 , 100 , 25 , 845 , 415 ) ;
  x55Map.AddZone( "Side-to-side" , "joystick" , 1 , "axis"     , "x"              , 950 , 175 , 100 , 25 , 845 , 415 ) ;
  x55Map.AddZone( "Twist"        , "joystick" , 1 , "rotary"   , "rotz"           , 950 , 225 , 100 , 25 , 845 , 415 ) ; 

  x55Map.AddZone( "Big Red"      , "joystick" , 2 , "button"   , "button1"        ,  30 , 250 ,  75 , 25 , 255 , 330 ) ;
  x55Map.AddZone( "TB Top"       , "joystick" , 2 , "button"   , "button2"        , 190 ,  10 ,  75 , 25 , 307 , 227 ) ;
  x55Map.AddZone( "TB Btm"       , "joystick" , 2 , "button"   , "button3"        , 190 ,  40 ,  75 , 25 , 315 , 320 ) ;
  x55Map.AddZone( "PW Fwd"       , "joystick" , 2 , "button"   , "button30"       , 280 ,  10 ,  75 , 25 , 337 , 223 ) ;
  x55Map.AddZone( "PW Back"      , "joystick" , 2 , "button"   , "button31"       , 280 ,  40 ,  75 , 25 , 345 , 205 ) ;
  x55Map.AddZone( "SW 1"         , "joystick" , 2 , "button"   , "button6"        ,  30 , 630 ,  75 , 25 , 115 , 395 ) ;
  x55Map.AddZone( "SW 2"         , "joystick" , 2 , "button"   , "button7"        ,  10 , 585 ,  75 , 25 , 107 , 400 ) ;
  x55Map.AddZone( "SW 3"         , "joystick" , 2 , "button"   , "button8"        , 140 , 640 ,  75 , 25 , 148 , 410 ) ;
  x55Map.AddZone( "SW 4"         , "joystick" , 2 , "button"   , "button9"        , 110 , 578 ,  75 , 25 , 140 , 415 ) ;
  x55Map.AddZone( "SW 5"         , "joystick" , 2 , "button"   , "button10"       , 220 , 630 ,  75 , 25 , 185 , 427 ) ;
  x55Map.AddZone( "SW 6"         , "joystick" , 2 , "button"   , "button11"       , 190 , 585 ,  75 , 25 , 177 , 432 ) ;
  x55Map.AddZone( "TGL1-"        , "joystick" , 2 , "button"   , "button13"       , 270 , 575 ,  75 , 25 , 280 , 383 ) ;
  x55Map.AddZone( "TGL1+"        , "joystick" , 2 , "button"   , "button12"       , 300 , 640 ,  75 , 25 , 287 , 380 ) ;
  x55Map.AddZone( "TGL2-"        , "joystick" , 2 , "button"   , "button15"       , 350 , 585 ,  75 , 25 , 319 , 379 ) ;
  x55Map.AddZone( "TGL2+"        , "joystick" , 2 , "button"   , "button14"       , 380 , 630 ,  75 , 25 , 324 , 376 ) ;
  x55Map.AddZone( "TGL3-"        , "joystick" , 2 , "button"   , "button17"       , 430 , 575 ,  75 , 25 , 320 , 359 ) ;
  x55Map.AddZone( "TGL3+"        , "joystick" , 2 , "button"   , "button16"       , 480 , 610 ,  75 , 25 , 325 , 356 ) ;
  x55Map.AddZone( "TGL4-"        , "joystick" , 2 , "button"   , "button19"       , 520 , 545 ,  75 , 25 , 356 , 356 ) ;
  x55Map.AddZone( "TGL4+"        , "joystick" , 2 , "button"   , "button18"       , 570 , 510 ,  75 , 25 , 360 , 353 ) ;
  x55Map.AddZone( "Index B."     , "joystick" , 2 , "button"   , "button4"        , 470 ,   5 ,  75 , 25 , 415 , 235 ) ;
  x55Map.AddZone( "Mid B."       , "joystick" , 2 , "button"   , "button5"        , 450 ,  50 ,  75 , 25 , 393 , 234 ) ;
  x55Map.AddZone( "P. Up"        , "joystick" , 2 , "button"   , "button28"       , 370 ,  10 ,  75 , 25 , 355 , 223 ) ;
  x55Map.AddZone( "P. Dwn"       , "joystick" , 2 , "button"   , "button29"       , 370 ,  40 ,  75 , 25 , 355 , 233 ) ;
  x55Map.AddZone( "BH Up"        , "joystick" , 2 , "button"   , "button24"       , 454 , 325 ,  75 , 25 , 282 , 349 ) ;
  x55Map.AddZone( "BH Right"     , "joystick" , 2 , "button"   , "button25"       , 500 , 355 ,  75 , 25 , 288 , 355 ) ;
  x55Map.AddZone( "BH Down"      , "joystick" , 2 , "button"   , "button26"       , 454 , 385 ,  75 , 25 , 280 , 361 ) ;
  x55Map.AddZone( "BH Left"      , "joystick" , 2 , "button"   , "button27"       , 410 , 355 ,  75 , 25 , 276 , 356 ) ;
  x55Map.AddZone( "TH Up"        , "joystick" , 2 , "button"   , "button20"       ,  60 ,  10 ,  75 , 25 , 287 , 329 ) ;
  x55Map.AddZone( "TH Right"     , "joystick" , 2 , "button"   , "button21"       ,  90 ,  40 ,  75 , 25 , 293 , 335 ) ;
  x55Map.AddZone( "TH Down"      , "joystick" , 2 , "button"   , "button22"       ,  60 ,  70 ,  75 , 25 , 288 , 339 ) ;
  x55Map.AddZone( "TH Left"      , "joystick" , 2 , "button"   , "button23"       ,  10 ,  40 ,  75 , 25 , 282 , 336 ) ;
  x55Map.AddZone( "L. Throttle"  , "joystick" , 2 , "throttle" , "throttlex"      ,  30 , 175 , 100 , 25 , 175 , 275 ) ;
  x55Map.AddZone( "R. Throttle"  , "joystick" , 2 , "throttle" , "throttley"      ,  30 , 125 , 100 , 25 , 230 , 275 ) ;
  x55Map.AddZone( "T. Rotate"    , "joystick" , 2 , "axis"     , "z"              , 450 , 230 , 100 , 25 , 307 , 240 ) ;
  x55Map.AddZone( "B. Rotate"    , "joystick" , 2 , "rotary"   , "rotx"           , 450 , 270 , 100 , 25 , 317 , 310 ) ;
  x55Map.AddZone( "T. Slider"    , "joystick" , 2 , "slider"   , "slider1"        ,  30 , 210 ,  75 , 25 , 279 , 295 ) ;
  x55Map.AddZone( "RTY 3"        , "joystick" , 2 , "rotary"   , "roty"           ,  30 , 290 ,  75 , 25 , 275 , 410 ) ;
  x55Map.AddZone( "RTY 4"        , "joystick" , 2 , "rotary"   , "rotz"           ,  30 , 330 ,  75 , 25 , 235 , 420 ) ;

  return x55Map;
}
