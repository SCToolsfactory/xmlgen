/*
    File Name: amshiphud.js
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




function createShipHudMap()
{
  var hMap = new ActionMap("spaceship_hud", '#00F0F0');

  //                       Nickname               Abbrev.                  Fullname               Input Type         Available Bindings
  //             -------------------------- ----------------- ---------------------------------- ------------ -------------------------------
  hMap.AddAction( "Cycle HUD Mode Fwd"     , "HUD Fwd"       , "v_hud_cycle_mode_fwd"           , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "Cycle HUD Mode Back"    , "HUD Back"      , "v_hud_cycle_mode_back"          , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "HUD Toggle Cursor"      , "Cursor"        , "v_hud_toggle_cursor_input"      , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "Open HUD Tab 1"         , "HUD T1"        , "v_hud_open_tab1"                , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "Open HUD Tab 2"         , "HUD T2"        , "v_hud_open_tab2"                , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "Open HUD Tab 3"         , "HUD T3"        , "v_hud_open_tab3"                , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "Open HUD Tab 4"         , "HUD T4"        , "v_hud_open_tab4"                , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "Open HUD Tab 5"         , "HUD T5"        , "v_hud_open_tab5"                , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "Open HUD Tab 6"         , "HUD T6"        , "v_hud_open_tab6"                , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "Open HUD Tab 7"         , "HUD T7"        , "v_hud_open_tab7"                , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "Open HUD Tab 8"         , "HUD T8"        , "v_hud_open_tab8"                , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "Open HUD Tab 9"         , "HUD T9"        , "v_hud_open_tab9"                , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "Open HUD Tab 10"        , "HUD T10"       , "v_hud_open_tab10"               , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "HUD Num Zero"           , "HUD Zero"      , "v_hud_num_zero"                 , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "HUD Num Del"            , "HUD Del"       , "v_hud_num_del"                  , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "HUD Num 1"              , "HUD #1"        , "v_hud_num_1"                    , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "HUD Num 2"              , "HUD #2"        , "v_hud_num_2"                    , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "HUD Num 3"              , "HUD #3"        , "v_hud_num_3"                    , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "HUD Num 4"              , "HUD #4"        , "v_hud_num_4"                    , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "HUD Num 5"              , "HUD #5"        , "v_hud_num_5"                    , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "HUD Num 6"              , "HUD #6"        , "v_hud_num_6"                    , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "HUD Num 7"              , "HUD #7"        , "v_hud_num_7"                    , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "HUD Num 8"              , "HUD #8"        , "v_hud_num_8"                    , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "HUD Num 9"              , "HUD #9"        , "v_hud_num_9"                    , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "Open Scoreboard"        , "Scores"        , "v_hud_open_scoreboard"          , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "HUD Toggle Maximized"   , "Max HUD"       , "v_hud_toggle_maximized"         , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "HUD Confirm"            , "HUD Yes"       , "v_hud_confirm"                  , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "HUD Interact"           , "HUD Int."      , "v_hud_interact"                 , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "HUD Cancel"             , "HUD Ccl"       , "v_hud_cancel"                   , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "HUD Left Panel Up"      , "LP Up"         , "v_hud_left_panel_up"            , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "HUD Left Panel Down"    , "LP Down"       , "v_hud_left_panel_down"          , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "HUD Left Panel Left"    , "LP Left"       , "v_hud_left_panel_left"          , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "HUD Left Panel Right"   , "LP Right"      , "v_hud_left_panel_right"         , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "HUD Slash"              , "H. Slash"      , "v_hud_slash"                    , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "HUD Star"               , "H. Star"       , "v_hud_star"                     , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "HUD Minus"              , "HUD -"         , "v_hud_minus"                    , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "HUD Plus"               , "HUD +"         , "v_hud_plus"                     , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "Open Chat"              , "Open Chat"     , "v_comm_open_chat"               , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "Show Chat"              , "Show Chat"     , "v_comm_show_chat"               , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "Open Precanned Comms"   , "V. Precan"     , "v_comm_open_precanned"          , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "Select Precanned #1"    , "PC #1"         , "v_comm_select_precanned_1"      , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "Select Precanned #2"    , "PC #2"         , "v_comm_select_precanned_2"      , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "Select Precanned #3"    , "PC #3"         , "v_comm_select_precanned_3"      , "button"   , [ "joystick", "xbox", "kbm" ] ) ;
  hMap.AddAction( "Select Precanned #4"    , "PC #4"         , "v_comm_select_precanned_4"      , "button"   , [ "joystick", "xbox", "kbm" ] ) ;

  return hMap;
}
