/*   
    File Name: home.js
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

(function() {

  var dragging = false;
  var dragAction = null;
  var dragOriginElement = null;
  var lastX = undefined;
  var lastY = undefined;

  testDropzoneMap = [ { "name": "Trigger", 
                        "deviceType": "js", 
                        "deviceOffset": 1, 
                        "inputType": "button", 
                        "inputOffset": 1, 
                        "type": "button", 
                        "boxLeft": 565, 
                        "boxTop": 10, 
                        "boxWidth": 75, 
                        "boxHeight": 25, 
                        "targetX": 696, 
                        "targetY": 210 },
                      { "name": "Index T.", 
                        "deviceType": "js", 
                        "deviceOffset": 1, 
                        "inputType": "button", 
                        "inputOffset": 3, 
                        "type": "button", 
                        "boxLeft": 570, 
                        "boxTop": 60, 
                        "boxWidth": 75, 
                        "boxHeight": 25, 
                        "targetX": 659, 
                        "targetY": 163 },
                      { "name": "Pinky T.", 
                        "deviceType": "js", 
                        "deviceOffset": 1, 
                        "inputType": "button", 
                        "inputOffset": 5, 
                        "type": "button", 
                        "boxLeft": 570, 
                        "boxTop": 600, 
                        "boxWidth": 75, 
                        "boxHeight": 25, 
                        "targetX": 688, 
                        "targetY": 287 },
                      { "name": "Red Btn",
                        "deviceType": "js",
                        "deviceOffset": 1,
                        "inputType": "button",
                        "inputOffset": 2,
                        "type": "button",
                        "boxLeft": 670,
                        "boxTop": 60,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 818,
                        "targetY": 116 },
                      { "name": "WH Up",
                        "deviceType": "js",
                        "deviceOffset": 1,
                        "inputType": "button",
                        "inputOffset": 7,
                        "type": "button",
                        "boxLeft": 800,
                        "boxTop": 5,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 840,
                        "targetY": 110 },
                      { "name": "WH Rght",
                        "deviceType": "js",
                        "deviceOffset": 1,
                        "inputType": "button",
                        "inputOffset": 8,
                        "type": "button",
                        "boxLeft": 900,
                        "boxTop": 10,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 855,
                        "targetY": 117 }, 
                      { "name": "WH Dwn",
                        "deviceType": "js",
                        "deviceOffset": 1,
                        "inputType": "button",
                        "inputOffset": 9,
                        "type": "button",
                        "boxLeft": 950,
                        "boxTop": 60,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 850,
                        "targetY": 128 },
                      { "name": "WH Left",
                        "deviceType": "js",
                        "deviceOffset": 1,
                        "inputType": "button",
                        "inputOffset": 10,
                        "type": "button",
                        "boxLeft": 670,
                        "boxTop": 10,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 835,
                        "targetY": 117 },
                      { "name": "CH Up",
                        "deviceType": "js",
                        "deviceOffset": 1,
                        "inputType": "button",
                        "inputOffset": 11,
                        "type": "button",
                        "boxLeft": 830,
                        "boxTop": 590,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 860,
                        "targetY": 137 },
                      { "name": "CH Rght",
                        "deviceType": "js",
                        "deviceOffset": 1,
                        "inputType": "button",
                        "inputOffset": 12,
                        "type": "button",
                        "boxLeft": 980,
                        "boxTop": 585,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 875,
                        "targetY": 148 },
                      { "name": "CH Dwn",
                        "deviceType": "js",
                        "deviceOffset": 1,
                        "inputType": "button",
                        "inputOffset": 13,
                        "type": "button",
                        "boxLeft": 910,
                        "boxTop": 630,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 865,
                        "targetY": 162 },
                      { "name": "CH Left",
                        "deviceType": "js",
                        "deviceOffset": 1,
                        "inputType": "button",
                        "inputOffset": 14,
                        "type": "button",
                        "boxLeft": 750,
                        "boxTop": 620,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 856,
                        "targetY": 147 },
                      { "name": "Thumb",
                        "deviceType": "js",
                        "deviceOffset": 1,
                        "inputType": "button",
                        "inputOffset": 4,
                        "type": "button",
                        "boxLeft": 735,
                        "boxTop": 585,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 801,
                        "targetY": 237 },
                      { "name": "Pinky L.",
                        "deviceType": "js",
                        "deviceOffset": 1,
                        "inputType": "button",
                        "inputOffset": 6,
                        "type": "button",
                        "boxLeft": 650,
                        "boxTop": 585,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 785,
                        "targetY": 300 },
                      { "name": "SW 1",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 6,
                        "type": "button",
                        "boxLeft": 30,
                        "boxTop": 630,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 115,
                        "targetY": 395 },
                      { "name": "SW 2",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 7,
                        "type": "button",
                        "boxLeft": 10,
                        "boxTop": 585,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 107,
                        "targetY": 400 },
                      { "name": "SW 3",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 8,
                        "type": "button",
                        "boxLeft": 140,
                        "boxTop": 640,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 148,
                        "targetY": 410 },
                      { "name": "SW 4",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 9,
                        "type": "button",
                        "boxLeft": 110,
                        "boxTop": 578,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 140,
                        "targetY": 415 },
                      { "name": "SW 5",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 10,
                        "type": "button",
                        "boxLeft": 220,
                        "boxTop": 630,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 185,
                        "targetY": 427 },
                      { "name": "SW 6",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 11,
                        "type": "button",
                        "boxLeft": 190,
                        "boxTop": 585,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 177,
                        "targetY": 432 },
                      { "name": "TGL1-",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 13,
                        "type": "button",
                        "boxLeft": 270,
                        "boxTop": 575,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 280,
                        "targetY": 383 },
                      { "name": "TGL1+",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 12,
                        "type": "button",
                        "boxLeft": 300,
                        "boxTop": 640,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 287,
                        "targetY": 380 },
                      { "name": "TGL2-",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 15,
                        "type": "button",
                        "boxLeft": 350,
                        "boxTop": 585,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 319,
                        "targetY": 379 },
                      { "name": "TGL2+",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 14,
                        "type": "button",
                        "boxLeft": 380,
                        "boxTop": 630,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 324,
                        "targetY": 376 },
                      { "name": "TGL3-",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 17,
                        "type": "button",
                        "boxLeft": 430,
                        "boxTop": 575,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 320,
                        "targetY": 359 },
                      { "name": "TGL3+",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 16,
                        "type": "button",
                        "boxLeft": 480,
                        "boxTop": 610,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 325,
                        "targetY": 356 },
                      { "name": "TGL4-",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 18,
                        "type": "button",
                        "boxLeft": 520,
                        "boxTop": 545,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 356,
                        "targetY": 356 },
                      { "name": "TGL4+",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 19,
                        "type": "button",
                        "boxLeft": 570,
                        "boxTop": 510,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 360,
                        "targetY": 353 },
                      { "name": "Index B.",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 4,
                        "type": "button",
                        "boxLeft": 470,
                        "boxTop": 5,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 415,
                        "targetY": 235 },
                      { "name": "Mid B.",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 5,
                        "type": "button",
                        "boxLeft": 450,
                        "boxTop": 50,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 393,
                        "targetY": 234 },
                      { "name": "P. Up",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 28,
                        "type": "button",
                        "boxLeft": 370,
                        "boxTop": 10,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 355,
                        "targetY": 223 },
                      { "name": "P. Dwn",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 29,
                        "type": "button",
                        "boxLeft": 370,
                        "boxTop": 40,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 355,
                        "targetY": 233 },
                      { "name": "BH Up",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 24,
                        "type": "button",
                        "boxLeft": 430,
                        "boxTop": 250,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 282,
                        "targetY": 349 },
                      { "name": "BH Rght",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 25,
                        "type": "button",
                        "boxLeft": 440,
                        "boxTop": 295,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 288,
                        "targetY": 355 },
                      { "name": "BH Dwn",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 26,
                        "type": "button",
                        "boxLeft": 440,
                        "boxTop": 325,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 280,
                        "targetY": 361 },
                      { "name": "BH Left",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 27,
                        "type": "button",
                        "boxLeft": 350,
                        "boxTop": 295,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 276,
                        "targetY": 356 },
                      { "name": "TH Up",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 20,
                        "type": "button",
                        "boxLeft": 110,
                        "boxTop": 10,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 287,
                        "targetY": 329 },
                      { "name": "TH Rght",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 21,
                        "type": "button",
                        "boxLeft": 140,
                        "boxTop": 40,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 293,
                        "targetY": 335 },
                      { "name": "TH Dwn",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 22,
                        "type": "button",
                        "boxLeft": 110,
                        "boxTop": 70,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 288,
                        "targetY": 339 },
                      { "name": "TH Left",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 23,
                        "type": "button",
                        "boxLeft": 60,
                        "boxTop": 40,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 282,
                        "targetY": 336 },
/*                      { "name": "TB Top",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 2,
                        "type": "button",
                        "boxLeft": 270,
                        "boxTop": 10,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 307,
                        "targetY": 227 },
                      { "name": "TB Btm",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 3,
                        "type": "button",
                        "boxLeft": 270,
                        "boxTop": 40,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 315,
                        "targetY": 320 }, */
/*                      { "name": "Big Red",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 1,
                        "type": "button",
                        "boxLeft": 30,
                        "boxTop": 250,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 255,
                        "targetY": 330 },  */
/*                      { "name": "Twist",
                        "deviceType": "js",
                        "deviceOffset": 1,
                        "inputType": "axis",
                        "inputOffset": 22,
                        "type": "button",
                        "boxLeft": 110,
                        "boxTop": 70,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 288,
                        "targetY": 339 },  */
/*                      { "name": "TH Left",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 23,
                        "type": "button",
                        "boxLeft": 60,
                        "boxTop": 40,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 282,
                        "targetY": 336 }, */
                      { "name": "TB Top",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 2,
                        "type": "button",
                        "boxLeft": 270,
                        "boxTop": 10,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 307,
                        "targetY": 227 },
                      { "name": "TB Btm",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 3,
                        "type": "button",
                        "boxLeft": 270,
                        "boxTop": 40,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 315,
                        "targetY": 320 },
                      { "name": "Big Red",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "button",
                        "inputOffset": 1,
                        "type": "button",
                        "boxLeft": 30,
                        "boxTop": 250,
                        "boxWidth": 75,
                        "boxHeight": 25,
                        "targetX": 255,
                        "targetY": 330 },
                      { "name": "Forw/back",
                        "deviceType": "js",
                        "deviceOffset": 1,
                        "inputType": "axis",
                        "inputOffset": "y",
                        "type": "axis",
                        "boxLeft": 950,
                        "boxTop": 125,
                        "boxWidth": 100,
                        "boxHeight": 25,
                        "targetX": 845,
                        "targetY": 415 },
                      { "name": "Side-to-side",
                        "deviceType": "js",
                        "deviceOffset": 1,
                        "inputType": "axis",
                        "inputOffset": "x",
                        "type": "axis",
                        "boxLeft": 950,
                        "boxTop": 175,
                        "boxWidth": 100,
                        "boxHeight": 25,
                        "targetX": 845,
                        "targetY": 415 },
                      { "name": "Twist",
                        "deviceType": "js",
                        "deviceOffset": 1,
                        "inputType": "rot",
                        "inputOffset": "z",
                        "type": "rot",
                        "boxLeft": 950,
                        "boxTop": 225,
                        "boxWidth": 100,
                        "boxHeight": 25,
                        "targetX": 845,
                        "targetY": 415 },
                      { "name": "L. Throttle",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "throttle",
                        "inputOffset": "x",
                        "type": "throttle",
                        "boxLeft": 30,
                        "boxTop": 175,
                        "boxWidth": 100,
                        "boxHeight": 25,
                        "targetX": 175,
                        "targetY": 275 },
                      { "name": "R. Throttle",
                        "deviceType": "js",
                        "deviceOffset": 2,
                        "inputType": "throttle",
                        "inputOffset": "y",
                        "type": "throttle",
                        "boxLeft": 30,
                        "boxTop": 125,
                        "boxWidth": 100,
                        "boxHeight": 25,
                        "targetX": 230,
                        "targetY": 275 },  ];


  testActionList = [ { "actionmap": "spaceship_general",
                       "color": "#CC0000",
                       "actions": [ { "nickname": "Eject",
                                      "abbreviation": "Eject!",
                                      "name": "v_eject",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] } ] },
                     { "actionmap": "spaceship_weapons",
                       "color": "#FF0000",
                       "actions": [ { "nickname": "Fire Weapon Grp. 1",
                                      "abbreviation": "Fire Grp 1",
                                      "name": "v_attack1_group1",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Fire Weapon Grp. 2",
                                      "abbreviation": "Fire Grp 2",
                                      "name": "v_attack1_group2",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Fire Weapon Grp. 3",
                                      "abbreviation": "Fire Grp 3",
                                      "name": "v_attack1_group3",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Fire Weapon Grp. 4",
                                      "abbreviation": "Fire Grp 4",
                                      "name": "v_attack1_group4",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] } ] },
                     { "actionmap": "spaceship_missiles",
                       "color": "#BBBBBB",
                       "actions": [ { "nickname": "Launch Missile",
                                      "abbreviation": "F. Missl",
                                      "name": "v_weapon_launch_missile",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Cycle Missile Fwd",
                                      "abbreviation": "Miss. Fwd",
                                      "name": "v_weapon_cycle_missile_fwd",
                                      "type": "button",
                                      "bindings": [ "joystick", "kbm" ] },
                                    { "nickname": "Cycle Missile Bwd",
                                      "abbreviation": "Miss. Bck",
                                      "name": "v_weapon_cycle_missile_back",
                                      "type": "button",
                                      "bindings": [ "joystick", "kbm" ] } ] },
                     { "actionmap": "spaceship_defensive",
                       "color": "#00FF00",
                       "actions": [ { "nickname": "Launch CM",
                                      "abbreviation": "CM",
                                      "name": "v_weapon_launch_countermeasure",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Cycle CM Forward",
                                      "abbreviation": "CM Fwd",
                                      "name": "v_cycle_countermeasure_fwd",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Cycle CM Backward",
                                      "abbreviation": "CM Bwd",
                                      "name": "v_cycle_countermeasure_back",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] } ] },
                     { "actionmap": "spaceship_movement",
                       "color": "#0000FF",
                       "actions": [ { "nickname": "Brake",
                                      "abbreviation": "Brake!",
                                      "name": "v_brake",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "pad" ] },
                                    { "nickname": "Roll",
                                      "abbreviation": "Roll",
                                      "name": "v_roll",
                                      "type": "axis",
                                      "bindings": [ "joystick", "xbox", "pad" ] },
                                    { "nickname": "Pitch",
                                      "abbreviation": "Pitch",
                                      "name": "v_pitch",
                                      "type": "axis",
                                      "bindings": [ "joystick", "xbox", "pad" ] },
                                    { "nickname": "Yaw",
                                      "abbreviation": "Yaw",
                                      "name": "v_yaw",
                                      "type": "axis",
                                      "bindings": [ "joystick", "xbox", "pad" ] },
                                    { "nickname": "Throttle",
                                      "abbreviation": "Throttle",
                                      "name": "v_throttle",
                                      "type": "throttle",
                                      "bindings": [ "joystick", "xbox", "pad" ] },
                                    { "nickname": "Match Velocity",
                                      "abbreviation": "M. Vel.",
                                      "name": "v_target_match_vel",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Afterburner",
                                      "abbreviation": "Boost",
                                      "name": "v_afterburner",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "pad", "kbm" ] },
                                    { "nickname": "Coupling Toggle",
                                      "abbreviation": "Couple",
                                      "name": "v_ifcs_toggle_vector_decoupling",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "pad", "kbm" ] },
                                    { "nickname": "G-Safe Toggle",
                                      "abbreviation": "G-Safe",
                                      "name": "v_ifcs_toggle_safety",
                                      "type": "button",
                                      "bindings": [ "joystick", "key", "xbox", "pad" ] },
                                    { "nickname": "Strafe Up",
                                      "abbreviation": "Up",
                                      "name": "v_strafe_up",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm", "pad" ] },
                                    { "nickname": "Strafe Down",
                                      "abbreviation": "Down",
                                      "name": "v_strafe_down",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "pad", "kbm" ] },
                                    { "nickname": "Strafe Left",
                                      "abbreviation": "Left",
                                      "name": "v_strafe_left",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm", "pad" ] },
                                    { "nickname": "Strafe Right",
                                      "abbreviation": "Right",
                                      "name": "v_strafe_right",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "pad", "kbm" ] },
                                    { "nickname": "Strafe Horizontal",
                                      "abbreviation": "Horizontal",
                                      "name": "v_strafe_horizontal",
                                      "type": "axis",
                                      "bindings": [ "joystick", "xbox", "kbm", "pad" ] },
                                    { "nickname": "Strafe Vertical",
                                      "abbreviation": "Vertical",
                                      "name": "v_strafe_vertical",
                                      "type": "axis",
                                      "bindings": [ "joystick", "xbox", "pad", "kbm" ] },
                                    { "nickname": "Newtonian Yaw",
                                      "abbreviation": "N. Yaw",
                                      "name": "v_newtonian_yaw",
                                      "type": "axis",
                                      "bindings": [ "joystick", "xbox", "kbm", "pad" ] },
                                    { "nickname": "Newtonian Pitch",
                                      "abbreviation": "N. Pitch",
                                      "name": "v_newtonian_pitch",
                                      "type": "axis",
                                      "bindings": [ "joystick", "xbox", "pad", "kbm" ] } ] },
                     { "actionmap": "spaceship_targeting",
                       "color": "#FFFFFF",
                       "actions": [ { "nickname": "Cycle All Fwd",
                                      "abbreviation": "All Fwd",
                                      "name": "v_target_cycle_all_fwd",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Cycle All Back",
                                      "abbreviation": "All Back",
                                      "name": "v_target_cycle_all_back",
                                      "type": "button",
                                      "bindings": [ "joystick", "kbm", "xbox" ] },
                                    { "nickname": "Cycle Friend Fwd",
                                      "abbreviation": "Frd Fwd",
                                      "name": "v_target_cycle_friendly_fwd",
                                      "type": "button",
                                      "bindings": [ "joystick", "kbm", "xbox" ] },
                                    { "nickname": "Cycle Friend Back",
                                      "abbreviation": "Frd Back",
                                      "name": "v_target_cycle_friendly_back",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Cycle Hostile Fwd",
                                      "abbreviation": "Host Fwd",
                                      "name": "v_target_cycle_hostile_fwd",
                                      "type": "button",
                                      "bindings": [ "joystick", "kbm", "xbox" ] },
                                    { "nickname": "Cycle Hostile Back",
                                      "abbreviation": "Host Back",
                                      "name": "v_target_cycle_hostile_back",
                                      "type": "button",
                                      "bindings": [ "joystick", "kbm", "xbox" ] },
                                    { "nickname": "Target Nearest Hostile",
                                      "abbreviation": "N. Hostile",
                                      "name": "v_target_nearest_hostile",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Acquire Missile Lock",
                                      "abbreviation": "Lock on",
                                      "name": "v_target_missile_lock_focused",
                                      "type": "button",
                                      "bindings": [ "joystick", "kbm", "xbox" ] },
                                    { "nickname": "Pin/Unpin Target",
                                      "abbreviation": "Pin T.",
                                      "name": "v_target_toggle_pinned_focused",
                                      "type": "button",
                                      "bindings": [ "joystick", "kbm", "xbox" ] },
                                    { "nickname": "Target Nearest Landzone",
                                      "abbreviation": "T. Land",
                                      "name": "v_target_nearest_landzone",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Pin Reticule",
                                      "abbreviation": "Pin R.",
                                      "name": "v_target_pin_reticule",
                                      "type": "button",
                                      "bindings": [ "joystick", "kbm", "xbox" ] },
                                    { "nickname": "Cycle Subsystem Fwd",
                                      "abbreviation": "Sub. Fwd",
                                      "name": "v_target_cycle_subsystem_fwd",
                                      "type": "button",
                                      "bindings": [ "joystick", "kbm", "xbox" ] },
                                    { "nickname": "Cycle Subsystem Back",
                                      "abbreviation": "Sub. Back",
                                      "name": "v_target_cycle_subsystem_back",
                                      "type": "button",
                                      "bindings": [ "joystick", "kbm", "xbox" ] } ] },
                     { "actionmap": "spaceship_radar",
                       "color": "#F0F000",
                       "actions": [ { "nickname": "Radar Zoom In",
                                      "abbreviation": "Zoom Fwd",
                                      "name": "v_radar_cycle_zoom_fwd",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Radar Zoom Out",
                                      "abbreviation": "Zoom Out",
                                      "name": "v_radar_cycle_zoom_back",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Radar Focus Fwd",
                                      "abbreviation": "Focus Fwd",
                                      "name": "v_radar_cycle_focus_fwd",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Radar Focus Back",
                                      "abbreviation": "Focus Back",
                                      "name": "v_radar_cycle_focus_back",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] } ] },
                     { "actionmap": "spaceship_hud",
                       "color": "#00F0F0",
                       "actions": [ { "nickname": "Cycle HUD Mode Fwd",
                                      "abbreviation": "HUD Fwd",
                                      "name": "v_hud_cycle_mode_fwd",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Cycle HUD Mode Back",
                                      "abbreviation": "HUD Back",
                                      "name": "v_hud_cycle_mode_back",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "HUD Toggle Cursor",
                                      "abbreviation": "Cursor",
                                      "name": "v_hud_toggle_cursor_input",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Open HUD Tab 1",
                                      "abbreviation": "HUD T1",
                                      "name": "v_hud_open_tab1",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Open HUD Tab 2",
                                      "abbreviation": "HUD T2",
                                      "name": "v_hud_open_tab2",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Open HUD Tab 3",
                                      "abbreviation": "HUD T3",
                                      "name": "v_hud_open_tab3",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Open HUD Tab 4",
                                      "abbreviation": "HUD T4",
                                      "name": "v_hud_open_tab4",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Open HUD Tab 5",
                                      "abbreviation": "HUD T5",
                                      "name": "v_hud_open_tab5",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Open HUD Tab 6",
                                      "abbreviation": "HUD T6",
                                      "name": "v_hud_open_tab6",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Open HUD Tab 7",
                                      "abbreviation": "HUD T7",
                                      "name": "v_hud_open_tab7",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Open HUD Tab 8",
                                      "abbreviation": "HUD T8",
                                      "name": "v_hud_open_tab8",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Open HUD Tab 9",
                                      "abbreviation": "HUD T9",
                                      "name": "v_hud_open_tab9",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Open HUD Tab 10",
                                      "abbreviation": "HUD T10",
                                      "name": "v_hud_open_tab10",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "HUD Num Zero",
                                      "abbreviation": "HUD Zero",
                                      "name": "v_hud_num_zero",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "HUD Num Del",
                                      "abbreviation": "HUD Del",
                                      "name": "v_hud_num_del",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "HUD Num 1",
                                      "abbreviation": "HUD #1",
                                      "name": "v_hud_num_1",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "HUD Num 2",
                                      "abbreviation": "HUD #2",
                                      "name": "v_hud_num_2",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "HUD Num 3",
                                      "abbreviation": "HUD #3",
                                      "name": "v_hud_num_3",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "HUD Num 4",
                                      "abbreviation": "HUD #4",
                                      "name": "v_hud_num_4",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "HUD Num 5",
                                      "abbreviation": "HUD #5",
                                      "name": "v_hud_num_5",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "HUD Num 6",
                                      "abbreviation": "HUD #6",
                                      "name": "v_hud_num_6",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "HUD Num 7",
                                      "abbreviation": "HUD #7",
                                      "name": "v_hud_num_7",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "HUD Num 8",
                                      "abbreviation": "HUD #8",
                                      "name": "v_hud_num_8",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "HUD Num 9",
                                      "abbreviation": "HUD #9",
                                      "name": "v_hud_num_9",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Open Scoreboard",
                                      "abbreviation": "Scores",
                                      "name": "v_hud_open_scoreboard",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "HUD Toggle Maximised",
                                      "abbreviation": "Max HUD",
                                      "name": "v_hud_toggle_maximised",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "HUD Confirm",
                                      "abbreviation": "HUD Yes",
                                      "name": "v_hud_confirm",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "HUD Interact",
                                      "abbreviation": "HUD Int.",
                                      "name": "v_hud_interact",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "HUD Cancel",
                                      "abbreviation": "HUD Ccl",
                                      "name": "v_hud_cancel",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "HUD Left Panel Up",
                                      "abbreviation": "LP Up",
                                      "name": "v_hud_left_panel_up",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "HUD Left Panel Down",
                                      "abbreviation": "LP Down",
                                      "name": "v_hud_left_panel_down",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "HUD Left Panel Left",
                                      "abbreviation": "LP Left",
                                      "name": "v_hud_left_panel_left",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "HUD Left Panel Right",
                                      "abbreviation": "LP Right",
                                      "name": "v_hud_left_panel_right",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "HUD Slash",
                                      "abbreviation": "H. Slash",
                                      "name": "v_hud_slash",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "HUD Star",
                                      "abbreviation": "H. Star",
                                      "name": "v_hud_star",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "HUD Minus",
                                      "abbreviation": "HUD -",
                                      "name": "v_hud_minus",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "HUD Plus",
                                      "abbreviation": "HUD +",
                                      "name": "v_hud_plus",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Open Chat",
                                      "abbreviation": "C. Open",
                                      "name": "v_comm_open_chat",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Show Chat",
                                      "abbreviation": "C. Show",
                                      "name": "v_comm_show_chat",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Open Precanned Comms",
                                      "abbreviation": "V. Precan",
                                      "name": "v_comm_open_precanned",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Select Precanned #1",
                                      "abbreviation": "PC #1",
                                      "name": "v_comm_select_precanned_1",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Select Precanned #2",
                                      "abbreviation": "PC #2",
                                      "name": "v_comm_select_precanned_2",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Select Precanned #3",
                                      "abbreviation": "PC #3",
                                      "name": "v_comm_select_precanned_3",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Select Precanned #4",
                                      "abbreviation": "PC #4",
                                      "name": "v_comm_select_precanned_4",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] }, ] },
                     { "actionmap": "spaceship_view",
                       "color": "#FF00FF",
                       "actions": [ { "nickname": "View Yaw",
                                      "abbreviation": "V. Yaw",
                                      "name": "v_view_yaw",
                                      "type": "axis",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "View Pitch",
                                      "abbreviation": "V. Pitch",
                                      "name": "v_view_pitch",
                                      "type": "axis",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Cycle View Fwd",
                                      "abbreviation": "CV Fwd",
                                      "name": "v_view_cycle_fwd",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "View Options",
                                      "abbreviation": "V. Option",
                                      "name": "v_view_option",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "View Mode",
                                      "abbreviation": "V. Mode",
                                      "name": "v_view_mode",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Zoom In",
                                      "abbreviation": "V. ZI",
                                      "name": "v_view_zoom_in",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Zoom Out",
                                      "abbreviation": "V. ZO",
                                      "name": "v_view_zoom_out",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "View Interact",
                                      "abbreviation": "V. Int'ct",
                                      "name": "v_view_interact",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Toggle Mouse",
                                      "abbreviation": "T. Mouse",
                                      "name": "v_view_toggle_mouse",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Dyn. Focus In",
                                      "abbreviation": "DF In",
                                      "name": "v_view_dynamic_focus_in",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Dyn. Focus Out",
                                      "abbreviation": "DF Out",
                                      "name": "v_view_dynamic_focus_out",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] },
                                    { "nickname": "Track Target",
                                      "abbreviation": "Track",
                                      "name": "v_view_track_target",
                                      "type": "button",
                                      "bindings": [ "joystick", "xbox", "kbm" ] } ] } ];
                                      





  function handleRightInputMethodArrowClicked(event)
  {
    console.log('Cycling input method right!');
    $('#inputMethodMobileContainer').animate( { 'left': '-=780' }, 1000, function() { console.log('Input method cycle animation complete!'); } );
    $('#inputMapReelContainer').animate( { 'left': '-=1080' }, 1000, function() { console.log('Input map cycle animation complete!'); } );
  }




  function handleLeftInputMethodArrowClicked(event)
  {
    console.log('Cycling input method left!');
    $('#inputMethodMobileContainer').animate( { 'left': '+=780' }, 1000, function() { console.log('Input method cycle animation complete!'); } );
    $('#inputMapReelContainer').animate( { 'left': '+=1080' }, 1000, function() { console.log('Input map cycle animation complete!'); } );
  }




  function initializeInputMethodSelectionReel()
  {
    console.log("Selecting all input methods on page . . . ");
    var inputReelOptions = document.querySelectorAll('.inputMethod');
    console.log("Located " + inputReelOptions.length + " elements.");
    
    console.log("Determining bounds of reel container . . . ");
    var reelBoundingRectangle = document.getElementById('inputMethodReelContainer').getBoundingClientRect();
    console.log("Obtained bounding rectangle: Left=" + reelBoundingRectangle['left'] + " Right=" + reelBoundingRectangle['right'] + " Top=" + reelBoundingRectangle['top'] + " Bottom=" + reelBoundingRectangle['bottom']);

    console.log("Computing dimensions . . . ");
    var inputMethodWidth = inputReelOptions[0].offsetWidth;
    console.log("Input Method Width: " + inputMethodWidth);

    console.log("Setting up event handlers . . . ");
    $('#leftInputMethodArrow').click(handleLeftInputMethodArrowClicked);
    $('#rightInputMethodArrow').click(handleRightInputMethodArrowClicked);
    console.log("Done.");
  }




  function initializeActionDropZones(dropZoneMap)
  {
    var parentDiv = document.getElementById("saitekX55RhinoHotasInputMap");

    for (var ii = 0; ii < dropZoneMap.length; ii++)
    {
      if (dropZoneMap[ii]["type"] === "button" || dropZoneMap[ii]["type"] === "axis" || dropZoneMap[ii]["type"] === "rot" || dropZoneMap[ii]["type"] === "throttle")
      {
        var actionBox = document.createElement('div');
        actionBox.style.position = "absolute";
        $(actionBox).addClass("bindable");
        actionBox.style.left = dropZoneMap[ii]["boxLeft"] + "px";
        actionBox.style.top = dropZoneMap[ii]["boxTop"] + "px";
        actionBox.style.width = dropZoneMap[ii]["boxWidth"] + "px";
        actionBox.style.height = dropZoneMap[ii]["boxHeight"] + "px";
        actionBox.style.backgroundColor = "black";
        actionBox.style.color = "white";
        actionBox.style.zIndex = "1001";
        actionBox.setAttribute('data-inputtype', dropZoneMap[ii]["inputType"]);
        actionBox.setAttribute('data-inputoffset', dropZoneMap[ii]['inputOffset']);
        actionBox.setAttribute('data-deviceoffset', dropZoneMap[ii]["deviceOffset"]);
        actionBox.setAttribute('data-devicetype', dropZoneMap[ii]["deviceType"]);
        $(actionBox).css("border", "1px #06a solid");
        $(actionBox).css("text-align", "center");

        var actionText = document.createElement('span');
        actionText.innerHTML = dropZoneMap[ii]['name'];
        $(actionText).css("width", "100%");
        $(actionText).css("display", "block");
        $(actionText).css("margin-top", "5px");
        actionBox.appendChild(actionText);

        var actionLine = document.createElement('div');
        actionLine.style.position = "absolute";
        actionLine.style.width = "1px";
        var lineLength =  Math.sqrt(Math.pow(dropZoneMap[ii]["boxLeft"] + dropZoneMap[ii]["boxWidth"] - dropZoneMap[ii]["targetX"], 2) + Math.pow(dropZoneMap[ii]["boxTop"] + (dropZoneMap[ii]["boxHeight"] / 2) -              dropZoneMap[ii]["targetY"], 2));
        actionLine.style.height = Math.round(lineLength) + "px";
        actionLine.style.left = (dropZoneMap[ii]["boxLeft"] + dropZoneMap[ii]["boxWidth"] + 1) + "px";
        actionLine.style.top = Math.round(dropZoneMap[ii]["boxTop"] + dropZoneMap[ii]["boxHeight"] / 2) + "px";
        actionLine.style.backgroundColor = "#06a";
        actionLine.style.zIndex = "1000";
        $(actionLine).css('-webkit-transform-origin', 'top left');
        var angle = 180 / 3.14159 * Math.acos((dropZoneMap[ii]["targetY"] - dropZoneMap[ii]["boxTop"] - (dropZoneMap[ii]["boxHeight"] / 2)) / lineLength);
        if (dropZoneMap[ii]["targetX"] > (dropZoneMap[ii]["boxLeft"] + dropZoneMap[ii]["boxWidth"])) { angle *= -1; }
        $(actionLine).css('-webkit-transform', 'rotate(' + angle + 'deg)');

        parentDiv.appendChild(actionBox);
        parentDiv.appendChild(actionLine);
      }
      else
      {
        console.log("CRITICAL: Dropzone of type " + dropZoneMap[ii]["type"] + " is not implemented!");
      }
    }
  }




  function doElementsIntersect(elem1, elem2)
  {
    function pointList(elem) { return [ [ $(elem).offset()['left'], $(elem).offset()['top'] ], 
                                        [ $(elem).offset()['left'] + $(elem).width(), $(elem).offset()['top'] ], 
                                        [ $(elem).offset()['left'] + $(elem).width(), $(elem).offset()['top'] + $(elem).height() ], 
                                        [ $(elem).offset()['left'], $(elem).offset()['top'] + $(elem).height() ] ]; }

    // Are any of points bounded by rect?
    function comparePoints(points, elem) 
    { 
      for (var ii = 0; ii < points.length; ii++) 
      { 
        if ((points[ii][0] > $(elem).offset()['left'] && points[ii][0] < ($(elem).offset()['left'] + $(elem).width())) && (points[ii][1] > $(elem).offset()['top'] && points[ii][1] < ($(elem).offset()['top'] + $(elem).height()))) 
        { 
          return true; 
        } 
      } 
      return false; 
    }

    return (comparePoints(pointList(elem1), elem2) || comparePoints(pointList(elem2), elem1));
  }




  function countInterPoints(elem1, elem2)
  {
    function pointList(elem) { return [ [ $(elem).offset()['left'], $(elem).offset()['top'] ],
                                        [ $(elem).offset()['left'] + $(elem).width(), $(elem).offset()['top'] ],
                                        [ $(elem).offset()['left'] + $(elem).width(), $(elem).offset()['top'] + $(elem).height() ],
                                        [ $(elem).offset()['left'], $(elem).offset()['top'] + $(elem).height() ] ]; }

    // Are any of points bounded by rect?
    function comparePoints(points, elem)
    {
      var interPoints = 0;

      for (var ii = 0; ii < points.length; ii++)
      {
        if ((points[ii][0] > $(elem).offset()['left'] && points[ii][0] < ($(elem).offset()['left'] + $(elem).width())) && (points[ii][1] > $(elem).offset()['top'] && points[ii][1] < ($(elem).offset()['top'] + $(elem).height())))
        {
          interPoints++;
        }
      }
      return interPoints;
    }

    return (comparePoints(pointList(elem1), elem2) + comparePoints(pointList(elem2), elem1));
  }




  function initializeActionListItems(actionItemList)
  {
    var parentDiv = document.getElementById('actionItemList');
    
    for (var ii = 0; ii < actionItemList.length; ii++)
    {
      for (var jj = 0; jj < actionItemList[ii]['actions'].length; jj++)
      {
        var actionItem = document.createElement('div');
        actionItem.style.width = "90%";
        actionItem.style.height = "40px";
        actionItem.setAttribute('data-actionmap', actionItemList[ii]['actionmap']);
        actionItem.setAttribute('data-actionname', actionItemList[ii]['actions'][jj]['name']);
        actionItem.setAttribute('data-actiontype', actionItemList[ii]['actions'][jj]['type']);
        actionItem.setAttribute('data-abbreviation', actionItemList[ii]['actions'][jj]['abbreviation']);
        actionItem.style.backgroundColor = actionItemList[ii]["color"];
        $(actionItem).css("position", "relative");
        $(actionItem).css("margin-left", "auto");
        $(actionItem).css("margin-right", "auto");
        $(actionItem).css("margin-top", "4px");
        $(actionItem).css("margin-bottom", "4px");
        actionItem.style.cursor = "url('http://www.google.com/intl/en_ALL/mapfiles/openhand.cur'), pointer";

        // Handle item drag-assignment.
        $(actionItem).mousedown(function(event) 
        {
          var actionCopy = document.createElement('div');
          dragOriginElement = this;
          actionCopy.style.backgroundColor = actionItem.style.backgroundColor;
          actionCopy.setAttribute('data-actionmap', this.getAttribute('data-actionmap'));
          actionCopy.setAttribute('data-actionname', this.getAttribute('data-actionname'));
          actionCopy.setAttribute('data-actiontype', this.getAttribute('data-actiontype'));

          actionCopy.style.height = "40px";
          actionCopy.style.opacity = '0.3';
          actionCopy.style.width = "207px";
          actionCopy.style.color = actionItem.style.color;
          $(actionCopy).css("position", "absolute");
          actionCopy.style.left = Math.round($(this).offset()['left']) + "px";
          actionCopy.style.top = Math.round($(this).offset()['top']) + "px";
          actionCopy.style.zIndex = "5000";
          actionCopy.style.cursor = "url('http://www.google.com/intl/en_ALL/mapfiles/closedhand.cur'), pointer";

          var actionAbbreviation = document.createElement('span');
          actionAbbreviation.innerHTML = this.getAttribute('data-abbreviation');
          $(actionAbbreviation).css("font-size", "10pt");
          $(actionAbbreviation).css("display", "block");
          $(actionAbbreviation).css("position", "absolute");
          $(actionAbbreviation).css("margin-top", "3px");
          $(actionAbbreviation).css("width", "90%");
          $(actionAbbreviation).css("margin-left", "5%");
          $(actionAbbreviation).css("-webkit-user-select", "none");
          actionCopy.appendChild(actionAbbreviation);
          
          dragging = true;
          dragAction = actionCopy;
          lastX = event.targetX;
          lastY = event.targetY;

          $(actionCopy).mouseup(function(event)
          {
            // If we are over a bind element, place a marker in it.
            var bindList = document.querySelectorAll(".bindable");
            var foundBind = false;

            var bestDropCandidate = bindList[ii];
            var numInterPoints = 0;

            for (var ii = 0; ii < bindList.length; ii++)
            {
              if (countInterPoints(bindList[ii], this) > numInterPoints)
              {
                bestDropCandidate = bindList[ii];
                numInterPoints = countInterPoints(bindList[ii], this);
              }
            }

            // for (var ii = 0; ii < bindList.length; ii++)
            // {
              // if (doElementsIntersect(bindList[ii], this))
              // {
            if (numInterPoints > 0)
            {
              foundBind = true;
              $(this).unbind("mouseup");
              this.style.cursor = "pointer";
              $(this).click(function()
              {
                $(this).animate( { left: $(dragOriginElement).offset()['left'], top: $(dragOriginElement).offset()['top'], opacity: 0.0 }, 500, function()
                {
                  console.log('Correcting!');
                  this.parentNode.removeChild(this);
                });
              });

              console.log('Saving binder!');
              this.binder = bestDropCandidate;

              // $(this).animate( { left: $(bindList[ii]).offset()['left'], top: $(bindList[ii]).offset()['top'], width: bindList[ii].style.width, height: bindList[ii].style.height, opacity: 1.0 }, 500, function() 
              $(this).animate( { left: $(bestDropCandidate).offset()['left'], top: $(bestDropCandidate).offset()['top'], width: bestDropCandidate.style.width, height: bestDropCandidate.style.height, opacity: 1.0 }, 500, function()
              { 
                document.body.removeChild(this); 
                this.binder.innerHTML = '';
                this.style.position = "static";
                this.binder.appendChild(this);
              });
            }
              // }
            // }

            // if (foundBind === false)
            if (numInterPoints === 0)
            {
              $(this).animate( { left: $(dragOriginElement).offset()['left'], top: $(dragOriginElement).offset()['top'], opacity: 0.0 }, 500, function()
              {
                document.body.removeChild(this);
              });
            }

            dragging = false;
          });

          document.body.appendChild(actionCopy);
        });

        var nickNameText = document.createElement('span');
        nickNameText.innerHTML = actionItemList[ii]['actions'][jj]['nickname'];
        $(nickNameText).css("font-size", "14pt");
        $(nickNameText).css("display", "block");
        $(nickNameText).css("position", "absolute");
        $(nickNameText).css("margin-top", "7px");
        $(nickNameText).css("width", "90%");
        $(nickNameText).css("margin-left", "5%");
        $(nickNameText).css("-webkit-user-select", "none");

        actionItem.appendChild(nickNameText);
        parentDiv.appendChild(actionItem);
      }
    }
  }




  function createXmlAndOfferDownload()
  {
    var filename = "myMagicalLayout.xml"
    var mimeType = "text/xml";

    var xmlDocument = (new DOMParser()).parseFromString('<ActionMaps version="0"></ActionMaps>', 'text/xml');
    var xmlRoot = xmlDocument.getElementsByTagName('ActionMaps')[0];
    
    var binds = document.querySelectorAll(".bindable");

    for (var ii = 0; ii < binds.length; ii++)
    {
      var actions = binds[ii].childNodes;
      if (actions.length === 0 || actions[0].tagName === "SPAN")
      {
        continue;
      }

      var inputType = binds[ii].getAttribute('data-inputtype');
      var inputOffset = binds[ii].getAttribute('data-inputoffset');
      var deviceOffset = binds[ii].getAttribute('data-deviceoffset');
      var deviceType = binds[ii].getAttribute('data-devicetype');

      for (var jj = 0; jj < actions.length; jj++)
      {
        var actionMap = actions[jj].getAttribute('data-actionmap');
        var actionName = actions[jj].getAttribute('data-actionname');
        var actionType = actions[jj].getAttribute('data-actiontype');

        // If this actionmap doesn't exist yet, create and append.
        if (xmlDocument.getElementsByName(actionMap).length === 0)
        {
          var newmap = xmlDocument.createElement('actionmap');
          newmap.setAttribute('name', actionMap);
          xmlRoot.appendChild(newmap);
        }

        var parentMap = xmlDocument.getElementsByName(actionMap)[0];

        // If this action doesn't exist yet, create and insert.
        if (xmlDocument.getElementsByName(actionName).length === 0)
        {
          var newaction = xmlDocument.createElement('action');
          newaction.setAttribute('name', actionName);
          parentMap.appendChild(newaction);
        }

        var parentAction = xmlDocument.getElementsByName(actionName)[0];

        // Insert bindings regardless of anything that's already there. Multiple binds are fine! (Test this?) (I'm sure it's fine) (Then again . . . ) (What could go wrong?) WHAT INDEED
        var newbind = xmlDocument.createElement('rebind');
        if (deviceType === "js") { newbind.setAttribute('device', 'joystick'); }
        else { console.log('CRITICAL: DEVICE TYPE: ' + deviceType + ' NOT IMPLEMENTED!'); }
        if (inputType === 'axis')
        {
          newbind.setAttribute('input', deviceType + deviceOffset + '_' + inputOffset);
        }
        else
        {
          newbind.setAttribute('input', deviceType + deviceOffset + '_' + inputType + inputOffset);
        }
        parentAction.appendChild(newbind);
      }
    }

    var content = (new XMLSerializer()).serializeToString(xmlDocument);

    var sneakyLink = document.createElement('a');
    sneakyLink.href = 'data:' + mimeType + ':' + filename + ';charset=utf-8,' + escape(content);
    sneakyLink.setAttribute("download", filename);
    sneakyLink.style.color = "transparent";
    document.body.appendChild(sneakyLink);
    setTimeout(function() 
    {
      var eventObject = document.createEvent('MouseEvents');
      eventObject.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      sneakyLink.dispatchEvent(eventObject);
      document.body.removeChild(sneakyLink);
    }, 66);  
    return true;
  }




  $(document).mousemove(function (event)
  {
    if (dragging)
    {
      dragAction.style.top = Math.round(dragAction.offsetTop - lastY + event.pageY) + "px";
      dragAction.style.left = Math.round(dragAction.offsetLeft - lastX + event.pageX) + "px";
    }

    lastX = event.pageX;
    lastY = event.pageY;
  });





  $(document).ready(function() 
  {
    console.log("Setting up input method selection reel . . . ");
    initializeInputMethodSelectionReel();
    console.log("Input method selection reel initialized.");

    console.log("Initializing action item drop zones . . . ");
    initializeActionDropZones(testDropzoneMap);
    console.log("Done.");

    console.log("Initializing action item list . . . ");
    initializeActionListItems(testActionList);
    console.log("Done.");

    console.log("Creating miscellaneous page events . . . ");
    $('#btnCreateXmlFile').click(createXmlAndOfferDownload);
    console.log("Done.");
  });




})();
