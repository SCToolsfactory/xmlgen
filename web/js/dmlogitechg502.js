/*
    File Name: dmlogitechg502.js
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




function createG502DropMap(parentDiv)
{
  var g502Map = new DropMap(parentDiv);

  //               Dropzone  Name       Type     O   Input Type      Input Name      B L   B T   B W   BH   T X   T Y
  //              ---------------- ------------ --- ------------ ------------------ ----- ----- ----- ---- ----- -----
  g502Map.AddZone( "L. Click"     , "mouse"    , 1 , "button"   , "mouse1"          , 200 , 600 , 100 , 25 , 400 , 400 ) ;
  g502Map.AddZone( "R. Click"     , "mouse"    , 1 , "button"   , "mouse2"          , 100 , 250 , 100 , 25 , 340 , 300 ) ;
  g502Map.AddZone( "MW Fwd"       , "mouse"    , 1 , "button"   , "mwheel_up"       , 140 , 350 , 100 , 25 , 385 , 330 ) ;
  g502Map.AddZone( "Button 3"     , "mouse"    , 1 , "button"   , "mouse3"          , 150 , 425 , 100 , 25 , 445 , 280 ) ;
  g502Map.AddZone( "MW Back"      , "mouse"    , 1 , "button"   , "mwheel_down"     , 160 , 500 , 100 , 25 , 490 , 250 ) ;
  g502Map.AddZone( "Button 4"     , "mouse"    , 1 , "button"   , "mouse4"          , 920 , 220 , 100 , 25 , 810 , 280 ) ;
  g502Map.AddZone( "Button 5"     , "mouse"    , 1 , "button"   , "mouse5"          , 900 , 280 , 100 , 25 , 730 , 340 ) ;
  g502Map.AddZone( "Button 7"     , "mouse"    , 1 , "button"   , "mouse7"          , 700 , 520 , 100 , 25 , 625 , 310 ) ;
  g502Map.AddZone( "Button 8"     , "mouse"    , 1 , "button"   , "mouse8"          , 550 , 550 , 100 , 25 , 530 , 390 ) ;
  g502Map.AddZone( "Button 9"     , "mouse"    , 1 , "button"   , "mouse9"          , 550 ,  50 , 100 , 25 , 580 , 170 ) ;
  g502Map.AddZone( "Forw/Back"    , "mouse"    , 1 , "axis"     , "maxis_x"         , 920 , 400 , 100 , 25 , 800 , 400 ) ;
  g502Map.AddZone( "Left/Right"   , "mouse"    , 1 , "axis"     , "maxis_y"         , 920 , 430 , 100 , 25 , 800 , 400 ) ;

  

  return g502Map;
}
