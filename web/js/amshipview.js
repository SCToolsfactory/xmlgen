/*
    File Name: amshipview.js
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




function createShipViewMap()
{
  var vMap = new ActionMap("spaceship_view", '#FF00FF');

  //                       Nickname               Abbrev.                  Fullname               Input Type         Available Bindings
  //             -------------------------- ----------------- ---------------------------------- ------------ -------------------------------
  vMap.AddAction( "View Yaw"               , "V. Yaw"        , "v_view_yaw"                     , "axis"     , [ "joystick", "xbox", "kbm" ] ) ;
  vMap.AddAction( "View Pitch"             , "V. Pitch"      , "v_view_pitch"                   , "axis"     , [ "joystick", "xbox", "kbm" ] ) ;
  vMap.AddAction( "Cycle View Fwd"         , "CV Fwd"        , "v_view_cycle_fwd"               , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  vMap.AddAction( "View Options"           , "V. Options"    , "v_view_option"                  , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  vMap.AddAction( "View Mode"              , "V. Mode"       , "v_view_mode"                    , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  vMap.AddAction( "Zoom In"                , "V. ZI"         , "v_view_zoom_in"                 , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  vMap.AddAction( "Zoom Out"               , "V. ZO"         , "v_view_zoom_out"                , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  vMap.AddAction( "View Interact"          , "V. Int'ct"     , "v_view_interact"                , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  vMap.AddAction( "Toggle Mouse"           , "T. Mouse"      , "v_view_toggle_mouse"            , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  vMap.AddAction( "Dynamic Focus In"       , "DF In"         , "v_view_dynamic_focus_in"        , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  vMap.AddAction( "Dynamic Focus Out"      , "DF Out"        , "v_view_dynamic_focus_out"       , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  vMap.AddAction( "Track Target"           , "Track"         , "v_view_track_target"            , "button"   , [ "joystick", "xbox", "kbm" ] ) ;

  return vMap;
}
