/*
    File Name: amshipmovement.js
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




function createShipMovementMap()
{
  var movementMap = new ActionMap("spaceship_movement", '#0000FF');

  //                           Nickname            Abbrev.                    Fullname               Input Type         Available Bindings
  //                   ---------------------- --------------- ------------------------------------- ------------ -------------------------------
  movementMap.AddAction( "Brake"             , "Brake!"        , "v_brake"                         , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  movementMap.AddAction( "Roll"              , "Roll"          , "v_roll"                          , "axis"     , [ "joystick", "xbox", "kbm" ] ) ;
  movementMap.AddAction( "Roll Left"         , "Roll Left"     , "v_roll_left"                     , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  movementMap.AddAction( "Roll Right"        , "Roll Right"    , "v_roll_right"                    , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  movementMap.AddAction( "Pitch"             , "Pitch"         , "v_pitch"                         , "axis"     , [ "joystick", "xbox", "kbm" ] ) ;
  movementMap.AddAction( "Pitch Up"          , "Pitch Up"      , "v_pitch_up"                      , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  movementMap.AddAction( "Pitch Down"        , "Pitch Down"    , "v_pitch_down"                    , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  movementMap.AddAction( "Mouse Pitch"       , "M Pitch"       , "v_pitch_mouse"                   , "axis"     , [ "kbm" ] ) ;
  movementMap.AddAction( "Yaw"               , "Yaw"           , "v_yaw"                           , "axis"     , [ "joystick", "xbox", "kbm" ] ) ;
  movementMap.AddAction( "Yaw Left"          , "Yaw Left"      , "v_yaw_left"                      , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  movementMap.AddAction( "Yaw Right"         , "Yaw Right"     , "v_yaw_right"                     , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  movementMap.AddAction( "Mouse Yaw"         , "M Yaw"         , "v_yaw_mouse"                     , "axis"     , [ "kbm" ] ) ;
  movementMap.AddAction( "Throttle"          , "Throttle"      , "v_throttle"                      , "throttle" , [ "joystick", "xbox", "kbm" ] ) ;
  movementMap.AddAction( "Throttle Up"       , "Throttle Up"   , "v_throttle_up"                   , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  movementMap.AddAction( "Throttle Down"     , "Throttle Down" , "v_throttle_down"                 , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  movementMap.AddAction( "Throttle Zero"     , "Throttle Zero" , "v_throttle_zero"                 , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  movementMap.AddAction( "Throttle Max"      , "Throttle Max"  , "v_throttle_100"                  , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  movementMap.AddAction( "Match Velocity"    , "Match Vel."    , "v_target_match_vel"              , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  movementMap.AddAction( "Afterburner"       , "Boost"         , "v_afterburner"                   , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  movementMap.AddAction( "Coupling Toggle"   , "Couple"        , "v_ifcs_toggle_vector_decoupling" , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  movementMap.AddAction( "G-Safe & COMSTAB"  , "G-Safe & CSTB" , "v_ifcs_toggle_safety"            , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  movementMap.AddAction( "Strafe Up"         , "Strafe Up"     , "v_strafe_up"                     , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  movementMap.AddAction( "Strafe Down"       , "Strafe Down"   , "v_strafe_down"                   , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  movementMap.AddAction( "Strafe Left"       , "Strafe Left"   , "v_strafe_left"                   , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  movementMap.AddAction( "Strafe Right"      , "Strafe Right"  , "v_strafe_right"                  , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  movementMap.AddAction( "Strafe Forward"    , "Strafe Fwd"    , "v_strafe_forward"                , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  movementMap.AddAction( "Strafe Backward"   , "Strafe Back"   , "v_strafe_back"                   , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  movementMap.AddAction( "Strafe Horizontal" , "Strafe Horz"   , "v_strafe_horizontal"             , "axis"     , [ "joystick", "xbox", "kbm" ] ) ;
  movementMap.AddAction( "Strafe Vertical"   , "Strafe Vert"   , "v_strafe_vertical"               , "axis"     , [ "joystick", "xbox", "kbm" ] ) ;
  movementMap.AddAction( "Newtonian Yaw"     , "N. Yaw"        , "v_newtonian_yaw"                 , "axis"     , [ "joystick", "xbox", "kbm" ] ) ;
  movementMap.AddAction( "Newtonian Pitch"   , "N. Pitch"      , "v_newtonian_pitch"               , "axis"     , [ "joystick", "xbox", "kbm" ] ) ;

  return movementMap;
}
