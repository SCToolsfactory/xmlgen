/*
    File Name: amshipradar.js
    Author: Sebastian Morgan (sebass63@gmail.com)
    Date Created: July 19, 2014.

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




function createShipRadarMap()
{
  var rMap = new ActionMap("spaceship_radar", '#F0F000');

  //                       Nickname               Abbrev.                   Fullname                Input Type         Available Bindings
  //             -------------------------- ----------------- ------------------------------------ ------------ -------------------------------
  rMap.AddAction( "Radar Zoom In"          , "Rad. In"       , "v_radar_cycle_zoom_fwd"         , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  rMap.AddAction( "Radar Zoom Out"         , "Rad. Out"      , "v_radar_cycle_zoom_back"        , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  rMap.AddAction( "Radar Focus Forward"    , "Rad. Fwd"      , "v_radar_cycle_focus_fwd"        , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  rMap.AddAction( "Radar Focus Backward"   , "Rad. Back"     , "v_radar_cycle_focus_back"       , "button"   , [ "joystick", "xbox", "kbm" ] ) ;

  return rMap;
}
