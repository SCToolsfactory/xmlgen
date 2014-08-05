/*
    File Name: amshipgeneral.js
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




function createShipGeneralMap()
{
  var generalMap = new ActionMap("spaceship_general", '#CC0000');

  //                      Nickname   Abbreviation        Fullname        Input Type           Available Bindings
  //                   ------------ -------------- ------------------- -------------- -------------------------------
  generalMap.AddAction( "Eject"    , "Eject!"     , "v_eject"         , "button"     , [ "joystick", "xbox", "kbm" ] ) ;

  return generalMap;
}
