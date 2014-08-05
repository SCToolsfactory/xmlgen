/*
    File Name: amshipmissiles.js
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




function createShipMissilesMap()
{
  var missilesMap = new ActionMap("spaceship_missiles", '#BBBBBB');

  //                           Nickname           Abbrev.                 Fullname            Input Type         Available Bindings
  //                   ---------------------- -------------- ------------------------------- ------------ -------------------------------
  missilesMap.AddAction( "Launch Missile"     , "F. Missile" , "v_weapon_launch_missile"     , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  missilesMap.AddAction( "Cycle Missile Fwd"  , "Miss. Fwd"  , "v_weapon_cycle_missile_fwd"  , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  missilesMap.AddAction( "Cycle Missile Back" , "Miss. Back" , "v_weapon_cycle_missile_back" , "button"   , [ "joystick", "xbox", "kbm" ] ) ;

  return missilesMap;
}
