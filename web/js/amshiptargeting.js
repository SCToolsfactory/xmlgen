/*
    File Name: amshiptargeting.js
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




function createShipTargetingMap()
{
  var tMap = new ActionMap("spaceship_targeting", '#888888');

  //                            Nickname            Abbrev.                   Fullname               Input Type         Available Bindings
  //             -------------------------- --------------- ------------------------------------ ------------ -------------------------------
  tMap.AddAction( "Cycle All Forward"      , "All Forward"   , "v_target_cycle_all_fwd"         , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  tMap.AddAction( "Cycle All Back"         , "All Back"      , "v_target_cycle_all_back"        , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  tMap.AddAction( "Cycle Friend Fwd"       , "Frnd Fwd"      , "v_target_cycle_friendly_fwd"    , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  tMap.AddAction( "Cycle Friend Back"      , "Frnd Back"     , "v_target_cycle_friendly_back"   , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  tMap.AddAction( "Cycle Hostile Fwd"      , "Host Fwd"      , "v_target_cycle_hostile_fwd"     , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  tMap.AddAction( "Cycle Hostile Back"     , "Host Back"     , "v_target_cycle_hostile_back"    , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  tMap.AddAction( "Target Nearest Hostile" , "N. Hostile"    , "v_target_nearest_hostile"       , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  tMap.AddAction( "Acquire Missile Lock"   , "Lock On"       , "v_target_missile_lock_focused"  , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  tMap.AddAction( "Pin/Unpin Target"       , "Pin T."        , "v_target_toggle_pinned_focused" , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  tMap.AddAction( "Target Nearest Landpad" , "T. Land"       , "v_target_nearest_landzone"      , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  tMap.AddAction( "Pin Reticule"           , "Pin Ret."      , "v_target_pin_reticule"          , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  tMap.AddAction( "Cycle Subsystem Fwd"    , "Sub. Fwd"      , "v_target_cycle_subsystem_fwd"   , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  tMap.AddAction( "Cycle Subsystem Back"   , "Sub. Back"     , "v_target_cycle_subsystem_back"  , "button"   , [ "joystick", "xbox", "kbm" ] ) ;

  return tMap;
}
