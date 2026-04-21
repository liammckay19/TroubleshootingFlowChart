const avElements = [
  // ─────────────────────────────────────────
  // RACK 1 DEVICES
  // ─────────────────────────────────────────
  { "data": { "id": "ultrix",       "label": "ROSS Ultrix Router",    "details": "Main system brains. Includes Router cards, Reference card, and Mod Slots. | Rack: 1" } },
  { "data": { "id": "ultripower",   "label": "ROSS Ultripower PS",    "details": "Main power supply for Ultrix. | Rack: 1" } },
  { "data": { "id": "ultracore",    "label": "Ultracore BCS",         "details": "Main database file for all routes. | Rack: 1" } },
  { "data": { "id": "carb1",        "label": "Carbonite 1 Switcher",  "details": "Main Source Selections and Transitions. Slots 14 & 15. | Rack: 1" } },
  { "data": { "id": "mosaic",       "label": "Mosaic (Carbonite 2)",  "details": "Switcher blade used for Mosaic/Carbonite 2. | Rack: 1" } },
  { "data": { "id": "sdi_jacks_r1", "label": "SDI Jacks Rack 1 (RK-PNL-1-1)", "details": "1-1 microBNC to regular BNC adapter panel. | Rack: 1" } },
  { "data": { "id": "pc_dell",      "label": "PC (Dell)",             "details": "Feeds Cobalt card via Mini-DP. Feeds KVM and Perfect Cue via USB. | Rack: 1" } },
  { "data": { "id": "ogx_frm",      "label": "OGX Frame (OGX-FRM-1-1)", "details": "Output card frame housing OGX-DA distribution amp cards. | Rack: 1" } },

  // ─────────────────────────────────────────
  // RACK 2 DEVICES
  // ─────────────────────────────────────────
  { "data": { "id": "cobalt_cage",    "label": "Cobalt Card Cage (CRD-CAGE-1-1 / 1-2)", "details": "HDMI to SDI conversion. 4 PC and 4 Mac inputs. | Rack: 2" } },
  { "data": { "id": "cisco_codec",    "label": "Cisco Codec Pro (VTC-1-1 / 1-2)", "details": "Running MTR. 2 display inputs/outputs. | Rack: 2" } },
  { "data": { "id": "aja_ki_pro",     "label": "AJA Ki Pro (REC-PLYR-1-1 / 1-2)", "details": "Used for DDR (SSD cards). Records at ProRes proxy. | Rack: 2" } },
  { "data": { "id": "pearl_streamer", "label": "Pearl Streaming Device (STRM-ENCDR-1-1 to 1-4)", "details": "RTMP/SRT streaming. 4 devices for divided spaces. | Rack: 2" } },
  { "data": { "id": "kvm_infinity",   "label": "KVM Infinity (KVM-ADT-1-1 to 1-8)", "details": "Main head unit with 8 USB outs for Mac/PC control. | Rack: 2" } },
  { "data": { "id": "dsan_perfect_cue", "label": "DSAN Perfect Cue (AIM-1-1)", "details": "Slide clicker system. | Rack: 2" } },
  { "data": { "id": "icron_usb",      "label": "ICRON USB Extender (USB-EXT-1-1a to 1-8a/b)", "details": "USB Extreme Extender for peripherals. | Rack: 2" } },
  { "data": { "id": "mac_studios",    "label": "Mac Studios (OFE-MAC-1-1 to 1-4)", "details": "USB-C Video out. Grey USB for KVM, Black for Perfect Cue. | Rack: 2" } },
  { "data": { "id": "ofe_pcs",        "label": "OFE PCs (OFE-PC-1-1 to 1-4)",     "details": "Operator / presenter PCs feeding Cobalt cage. | Rack: 2" } },

  // ─────────────────────────────────────────
  // RACK 3 DEVICES
  // ─────────────────────────────────────────
  { "data": { "id": "shure_axient",  "label": "Shure Axient System (WMIC-RX-1-1 to 1-4 / SPCTRM-MGR-1-1)", "details": "Spectrum Manager and 4 encrypted receivers. Supports 16 mics. | Rack: 3" } },
  { "data": { "id": "crestron_amp",  "label": "Crestron Amplifier (AMP-1-1)",    "details": "SJ FT14 Conference Center audio. | Rack: 3" } },
  { "data": { "id": "als_ilisten",   "label": "ALS iListen (ALS-TX-1-1 / 1-2)", "details": "IR transmitters for assistive listening. | Rack: 3" } },
  { "data": { "id": "clearcom_base", "label": "Clear-Com Base Station (INTRCM-BS-1-1)", "details": "4 party lines (Prod 1-3, Client). Feeds INTRCM-TXR beltpacks. | Rack: 3" } },
  { "data": { "id": "galileo_galaxy","label": "Meyer Galileo Galaxy (SPKR-DSP-1-1 / 1-2)", "details": "Audio output routing to all speakers. | Rack: 3" } },
  { "data": { "id": "yamaha_rio",    "label": "Yamaha Rio (DAN-IO-1-1 to 1-4)", "details": "I/O converter. Analog In/Out on Dante network. | Rack: 3" } },
  { "data": { "id": "yamaha_rmio",   "label": "Yamaha RMio64-D (DAN-MADI-CON-1-1)", "details": "Aligns MADI (video audio) and Dante sync. MADI in from Ultrix, MADI out to Ultrix. | Rack: 3" } },
  { "data": { "id": "dante_clock",   "label": "Studio Technologies 5401A (DAN-MSTR-CLK-1-1)", "details": "Dedicated external Dante Leader Clock. | Rack: 3" } },
  { "data": { "id": "bgm_player",    "label": "BGM Player (BGM-PLYR-1-1)", "details": "Background music source. Connected to AV LAN. | Rack: 3" } },
  { "data": { "id": "ant_da",        "label": "Antenna Distributor (ANT-DA-1-1)", "details": "RF antenna distribution for Shure wireless. Feeds RF007-RF016. | Rack: 3" } },
  { "data": { "id": "spkr_ps",       "label": "Speaker Power Supplies (SPKR-PS-1-1 to 1-4)", "details": "Power supplies for ceiling speakers. | Rack: 3" } },

  // ─────────────────────────────────────────
  // RACK 4 DEVICES
  // ─────────────────────────────────────────
  { "data": { "id": "netgear_av",    "label": "Netgear AV Net (AVLAN-SWT-1-1 / 1-2)", "details": "Top two switches for AV network. | Rack: 4" } },
  { "data": { "id": "netgear_dante", "label": "Netgear Dante Net (DAN-SWT-1-1 / 1-2)", "details": "Bottom two switches for Dante network. | Rack: 4" } },
  { "data": { "id": "poe_injectors", "label": "PoE++ Injectors",      "details": "Power for Panasonic cameras. | Rack: 4" } },
  { "data": { "id": "corp_switch",   "label": "Corporate Network Switch (CORP-SWT-1-1)", "details": "Adobe corporate LAN switch. Ports for laptops and control systems. | Rack: 4" } },
  { "data": { "id": "vid_wall_proc", "label": "Novastar H15 (VID-WALL-PRCR-1-1)", "details": "Video wall processor. Manages MiniME 1-4 inputs. Genlock from Ultrix. | Rack: 4" } },

  // ─────────────────────────────────────────
  // RACK 5 DEVICES
  // ─────────────────────────────────────────
  { "data": { "id": "fiber_patch",   "label": "Optical Fiber Patch Bay (FBR-PNL-1-1 / 2-1)", "details": "WP (Wall Plate) dry lines. LC fiber connections. | Rack: 5" } },
  { "data": { "id": "network_patch", "label": "Network Patch Bay (CAT-PNL-1-1)", "details": "WP (Wall Plate) network ties. Feeds wall plates and rack panels. | Rack: 5" } },
  { "data": { "id": "corp_net_patch","label": "Adobe Corp Net Patch (CORP-SWT-1-1)", "details": "Access to Corporate Net over Ethernet. | Rack: 5" } },
  { "data": { "id": "fbr_demarc",    "label": "Fiber Demarc Box (FBR-DMRC-1-1)", "details": "Central fiber demarcation. Connects to lecterns, FOH desk, comms desk. | Rack: 5" } },
  { "data": { "id": "fbr_cnvtr",     "label": "Fiber Media Converters (FBR-CNVTR-1-1 to 1-10)", "details": "DisplayView fiber converters, 15 ports each. Two banks (Wall #1, Wall #2). | Rack: 5" } },

  // ─────────────────────────────────────────
  // PRODUCTION SWITCHER (CARBONITE / PROD-SWR-1-1)
  // ─────────────────────────────────────────
  { "data": { "id": "prod_swr",      "label": "Production Switcher (PROD-SWR-1-1)", "details": "Main production switcher. IO cards in slots 1-16. Fiber SFP modules in mod slots. | Rack: 1" } },
  { "data": { "id": "rk_mon",        "label": "Rack Monitors (RK-MON-1-1)", "details": "Two rack-mount monitors (Display 1/2). Feed from PROD-SWR Card 5 outputs. | Control Room" } },
  { "data": { "id": "rk_pnl",        "label": "Rack Panel (RK-PNL-1-1)", "details": "Rack-mount patch panel at FOH position. SDI and network tie lines. | FOH" } },

  // ─────────────────────────────────────────
  // CAMERAS
  // ─────────────────────────────────────────
  { "data": { "id": "ptzcams",       "label": "PTZ Cameras (PTZ-CAM-1-1 to 1-6)", "details": "6x Panasonic PTZ cameras. Powered via PoE++. SDI output to Ultrix via wall plates. | Room" } },
  { "data": { "id": "ptz_ctrl",      "label": "PTZ Controller (PTZ-CTLR-1-1 / 1-2)", "details": "Physical PTZ camera controller. Connects via AV LAN. | Control Room" } },

  // ─────────────────────────────────────────
  // DISPLAYS
  // ─────────────────────────────────────────
  { "data": { "id": "main_displays", "label": "Main LED Displays (HD501-HD508)", "details": "8x main room displays. SDI-to-HDMI converters feed each screen. Network via AV LAN. | Room" } },
  { "data": { "id": "sdi_hdmi_conv", "label": "SDI-to-HDMI Converters (HD501-HD508 Extron)", "details": "Extron 26-663 SDI-to-HDMI scan converters. One per display. | Displays" } },
  { "data": { "id": "led_disp_wl",   "label": "Work Lounge LED Displays (LED-DISP-1-1 / 1-2)", "details": "SDI-HDMI-1-1/1-2 converters feed LED displays in work lounge. | Work Lounge" } },
  { "data": { "id": "uc_bar",        "label": "UC Video Bar (UC-BAR-1-1)", "details": "Logitech Rally or similar USB video bar. Feeds local displays. | Work Lounge / Ancillary" } },

  // ─────────────────────────────────────────
  // LECTERNS
  // ─────────────────────────────────────────
  { "data": { "id": "lectern1",      "label": "Lectern 1 (LCTRN1)", "details": "Lectern 1 with laptop input (HDMI-FBR). Fiber connection to demarc. Monitor output. | Stage" } },
  { "data": { "id": "lectern2",      "label": "Lectern 2 (LCTRN2)", "details": "Lectern 2 with laptop input (HDMI-FBR). Fiber connection to demarc. Monitor output. | Stage" } },
  { "data": { "id": "hdmi_fbr",      "label": "HDMI-over-Fiber Tx/Rx (HDMI-FBR-1-1 to 1-7)", "details": "Valens/similar HDMI fiber extenders. Lectern laptop signals back to router. | Lecterns/FOH" } },
  { "data": { "id": "kvm_console",   "label": "KVM Consoles (KVM-CNSL-1-1 to 1-3)", "details": "KVM console units at lecterns and control room. USB+DP combo plates. | Various" } },

  // ─────────────────────────────────────────
  // FOH / COMMS DESK
  // ─────────────────────────────────────────
  { "data": { "id": "foh_desk",      "label": "FOH Fixed Desk (FOHDSK)", "details": "Front-of-house fixed desk. Laptop input, fiber connection, monitor output. | FOH" } },
  { "data": { "id": "comms_desk",    "label": "Comms Desk (CMDSK)", "details": "Production comms desk. 4x monitor outputs, fiber input, Clear-Com beltpack. | Control Room" } },
  { "data": { "id": "clearcom_bpack","label": "Clear-Com Beltpacks (INTRCM-TXR-1-1 / 1-2)", "details": "Wireless beltpacks for Clear-Com. Connect to INTRCM-BS-1-1 base. | Control Room" } },
  { "data": { "id": "aud_mxr",       "label": "Audio Mixer (AUD-MXR-1-1)", "details": "Portable audio mixer at FOH / comms desk. Dante connected. | FOH" } },
  { "data": { "id": "swr_rcp",       "label": "Switcher Remote Panel (SWR-RCP-1-1)", "details": "Remote control panel for production switcher. AV LAN connection. | Control Room" } },

  // ─────────────────────────────────────────
  // WALL PLATES
  // ─────────────────────────────────────────
  { "data": { "id": "wp_1_1",  "label": "Wall Plate WP-1-1",  "details": "SDI, AV LAN, Dante, Tie Lines, Mic XLR, G/L Sync. | Room" } },
  { "data": { "id": "wp_1_2",  "label": "Wall Plate WP-1-2",  "details": "SDI, AV LAN, Dante, Tie Lines, Mic XLR, G/L Sync. | Room" } },
  { "data": { "id": "wp_1_3",  "label": "Wall Plate WP-1-3",  "details": "SDI, AV LAN, Dante, Tie Lines, Mic XLR, G/L Sync. | Room" } },
  { "data": { "id": "wp_1_4",  "label": "Wall Plate WP-1-4",  "details": "SDI, AV LAN, Dante, Tie Lines, Mic XLR, G/L Sync. | Room" } },
  { "data": { "id": "wp_1_6",  "label": "Wall Plate WP-1-6",  "details": "SDI, AV LAN, Dante, Tie Lines, Mic XLR, G/L Sync. | Room" } },
  { "data": { "id": "wp_1_7",  "label": "Wall Plate WP-1-7",  "details": "SDI, AV LAN, Dante, Tie Lines, Mic XLR, G/L Sync. | Room" } },
  { "data": { "id": "wp_1_8",  "label": "Wall Plate WP-1-8",  "details": "SDI, AV LAN, Dante, Tie Lines, Mic XLR, G/L Sync. | Room" } },
  { "data": { "id": "wp_1_9",  "label": "Wall Plate WP-1-9",  "details": "SDI, AV LAN, Dante, Tie Lines, Mic XLR, G/L Sync. | Room" } },

  // ─────────────────────────────────────────
  // ANCILLARY SPACES
  // ─────────────────────────────────────────
  { "data": { "id": "work_lounge",   "label": "Work Lounge (F14-761)",   "details": "UC Bar, 2x LED displays, SDI-HDMI converters. | Work Lounge" } },
  { "data": { "id": "breakroom",     "label": "Breakroom (FT13-247)",    "details": "Display, Crestron control, audio mixer, wireless mic antenna. | Breakroom" } },
  { "data": { "id": "wayfinding",    "label": "Wayfinding / Green Room (F14-104 / F14-281)", "details": "Wayfinding display + Green Room display. Crestron control. | Lobby/Green Room" } },
  { "data": { "id": "adventure_rm",  "label": "Adventure Rooms (F14-702 / 703)", "details": "2x adventure rooms each with UC Bar + LED display. | Adventure Rooms" } },

  // ─────────────────────────────────────────
  // ══════════════════════════════════════════
  //                   EDGES
  // ══════════════════════════════════════════
  // ─────────────────────────────────────────

  // ── VIDEO SIGNAL FLOW ─────────────────────

  // Ultrix internal / power
  { "data": { "id": "e_ultrix_ultripower",   "source": "ultrix",     "target": "ultripower",   "label": "PWR", "connector": "IEC" } },
  { "data": { "id": "e_ultrix_ultracore",    "source": "ultrix",     "target": "ultracore",    "label": "IP/RS-422", "connector": "RJ-45" } },

  // Ultrix → Production Switcher (SFP fiber 12G between SLOT-16 mod slots and PROD-SWR IO cards)
  { "data": { "id": "e_ultrix_prodswr_sfp1", "source": "ultrix",     "target": "prod_swr",     "label": "SFP-FBR-1-1 / 1-2 (12G Fiber)", "connector": "LC" } },
  { "data": { "id": "e_ultrix_prodswr_sfp2", "source": "ultrix",     "target": "prod_swr",     "label": "SFP-FBR-1-3 / 1-4 (12G Fiber)", "connector": "LC" } },
  { "data": { "id": "e_ultrix_prodswr_sfp3", "source": "ultrix",     "target": "prod_swr",     "label": "SFP-FBR-1-5 to 1-16 (12G Fiber)", "connector": "LC" } },

  // Ultrix ↔ SDI Jacks panel (RK-PNL-1-1) – microBNC to BNC
  { "data": { "id": "e_ultrix_sdijacks",     "source": "ultrix",     "target": "sdi_jacks_r1", "label": "HD-BNC (microBNC) SDI", "connector": "HDBNC" } },

  // Ultrix → Carbonite 1 control
  { "data": { "id": "e_ultrix_carb1",        "source": "ultrix",     "target": "carb1",        "label": "Control / Ref", "connector": "RJ-45" } },
  { "data": { "id": "e_ultrix_mosaic",       "source": "ultrix",     "target": "mosaic",       "label": "Control / Ref", "connector": "RJ-45" } },

  // Ultrix ↔ MADI converter (audio embedding/de-embedding)
  { "data": { "id": "e_ultrix_madi_in",      "source": "yamaha_rmio","target": "ultrix",       "label": "MADI coax IN (DA023)", "connector": "BNC" } },
  { "data": { "id": "e_ultrix_madi_out",     "source": "ultrix",     "target": "yamaha_rmio",  "label": "MADI coax OUT (DA523)", "connector": "BNC" } },

  // Ultrix → OGX Frame (distribution amp cards OGX-DA-CRD-1-1 to 1-3)
  { "data": { "id": "e_ultrix_ogx",          "source": "ultrix",     "target": "ogx_frm",      "label": "SDI (SD810-SD822 distribution outputs)", "connector": "BNC" } },

  // OGX Frame → Wall Plates (G/L sync / PTZ sync distribution)
  { "data": { "id": "e_ogx_wp11",  "source": "ogx_frm", "target": "wp_1_1", "label": "G/L Sync SD810/811", "connector": "BNC" } },
  { "data": { "id": "e_ogx_wp12",  "source": "ogx_frm", "target": "wp_1_2", "label": "G/L Sync SD812/813", "connector": "BNC" } },
  { "data": { "id": "e_ogx_wp13",  "source": "ogx_frm", "target": "wp_1_3", "label": "G/L Sync SD814",     "connector": "BNC" } },
  { "data": { "id": "e_ogx_wp14",  "source": "ogx_frm", "target": "wp_1_4", "label": "G/L Sync SD815/816", "connector": "BNC" } },
  { "data": { "id": "e_ogx_wp16",  "source": "ogx_frm", "target": "wp_1_6", "label": "G/L Sync SD817/818", "connector": "BNC" } },
  { "data": { "id": "e_ogx_wp17",  "source": "ogx_frm", "target": "wp_1_7", "label": "G/L Sync SD819",     "connector": "BNC" } },
  { "data": { "id": "e_ogx_wp18",  "source": "ogx_frm", "target": "wp_1_8", "label": "G/L Sync SD820/821", "connector": "BNC" } },
  { "data": { "id": "e_ogx_wp19",  "source": "ogx_frm", "target": "wp_1_9", "label": "G/L Sync SD822",     "connector": "BNC" } },
  { "data": { "id": "e_ogx_vidwall","source": "ogx_frm", "target": "vid_wall_proc", "label": "Genlock IN (SD819 OGX-DA-CRD-1-2 Out8)", "connector": "BNC" } },

  // PTZ Cameras → Wall Plates → Ultrix
  { "data": { "id": "e_ptzcam_wp11", "source": "ptzcams", "target": "wp_1_1", "label": "SDI (PTZ-CAM-1-1)", "connector": "BNC" } },
  { "data": { "id": "e_ptzcam_wp12", "source": "ptzcams", "target": "wp_1_2", "label": "SDI (PTZ-CAM-1-2)", "connector": "BNC" } },
  { "data": { "id": "e_ptzcam_wp13", "source": "ptzcams", "target": "wp_1_3", "label": "SDI (PTZ-CAM-1-3)", "connector": "BNC" } },
  { "data": { "id": "e_ptzcam_wp14", "source": "ptzcams", "target": "wp_1_4", "label": "SDI (PTZ-CAM-1-4)", "connector": "BNC" } },
  { "data": { "id": "e_ptzcam_wp16", "source": "ptzcams", "target": "wp_1_6", "label": "SDI (PTZ-CAM-1-5)", "connector": "BNC" } },
  { "data": { "id": "e_ptzcam_wp17", "source": "ptzcams", "target": "wp_1_7", "label": "SDI (PTZ-CAM-1-6)", "connector": "BNC" } },
  { "data": { "id": "e_wp_ultrix_sdi","source": "wp_1_1", "target": "ultrix", "label": "SDI return to router (all WPs)", "connector": "BNC" } },
  { "data": { "id": "e_poe_ptzcam",   "source": "poe_injectors", "target": "ptzcams", "label": "PoE++ Power", "connector": "RJ-45" } },
  { "data": { "id": "e_ptz_ctrl_lan", "source": "ptz_ctrl",  "target": "netgear_av",  "label": "VISCA over IP (AV LAN)", "connector": "RJ-45" } },

  // Cobalt Card Cage – PC/Mac → SDI into Ultrix
  { "data": { "id": "e_pc_cobalt",    "source": "pc_dell",      "target": "cobalt_cage",  "label": "Mini-DP / HDMI", "connector": "Mini-DP" } },
  { "data": { "id": "e_mac_cobalt",   "source": "mac_studios",  "target": "cobalt_cage",  "label": "USB-C / HDMI", "connector": "USB-C" } },
  { "data": { "id": "e_ofepc_cobalt", "source": "ofe_pcs",      "target": "cobalt_cage",  "label": "HDMI SDI IN A/B", "connector": "HDMI" } },
  { "data": { "id": "e_cobalt_ultrix","source": "cobalt_cage",  "target": "ultrix",       "label": "SDI out (CRD-CAGE-1-1/2 → Ultrix IO)", "connector": "BNC" } },

  // Cisco Codec ↔ Ultrix (VTC-1-1 / 1-2)
  { "data": { "id": "e_codec_ultrix_in",  "source": "cisco_codec", "target": "ultrix",      "label": "SDI Camera IN (VTC-1-1/2 to SLOT-05)", "connector": "BNC" } },
  { "data": { "id": "e_ultrix_codec_out", "source": "ultrix",      "target": "cisco_codec", "label": "SDI Program OUT (SLOT-05 to VTC)", "connector": "BNC" } },

  // AJA Ki Pro ↔ Ultrix
  { "data": { "id": "e_recplyr_ultrix", "source": "aja_ki_pro", "target": "ultrix", "label": "SDI Playback IN (REC-PLYR-1-1/2 → Ultrix)", "connector": "BNC" } },
  { "data": { "id": "e_ultrix_recplyr", "source": "ultrix",     "target": "aja_ki_pro", "label": "SDI Record OUT (Ultrix → REC-PLYR)", "connector": "BNC" } },

  // Video Wall Processor (Novastar) ← Production Switcher
  { "data": { "id": "e_prodswr_vidwall",  "source": "prod_swr",    "target": "vid_wall_proc", "label": "12G SDI (SD573-SD576, IO-CRD-1-5 Out 3-5)", "connector": "BNC" } },
  { "data": { "id": "e_vidwall_fbrcnvtr", "source": "vid_wall_proc","target": "fbr_cnvtr",    "label": "Processed SDI Out (SD579-SD593) → Fiber Converters", "connector": "BNC" } },

  // Fiber converters → DisplayView to displays
  { "data": { "id": "e_fbrcnvtr_displays","source": "fbr_cnvtr",   "target": "main_displays", "label": "DisplayView RJ-45 (DV001-DV172, Cat5e ≤131ft)", "connector": "RJ-45" } },

  // Production Switcher ↔ Rack Monitors
  { "data": { "id": "e_prodswr_rkmon",  "source": "prod_swr",    "target": "rk_mon",       "label": "SDI Out (Card 5, SD585/586)", "connector": "BNC" } },

  // Ultrix → SDI-to-HDMI converters → Main displays
  { "data": { "id": "e_ultrix_sdihdmi", "source": "ultrix",      "target": "sdi_hdmi_conv","label": "SDI (SD579-SD584 to Extron 26-663)", "connector": "BNC" } },
  { "data": { "id": "e_sdihdmi_disp",   "source": "sdi_hdmi_conv","target": "main_displays","label": "HDMI out to HD501-HD508", "connector": "HDMI" } },
  { "data": { "id": "e_main_disp_lan",  "source": "main_displays","target": "netgear_av",   "label": "LAN (N010-N018 to AVLAN-SWT-1-1)", "connector": "RJ-45" } },

  // Work Lounge SDI-HDMI Converters
  { "data": { "id": "e_ultrix_wl_conv", "source": "ultrix",      "target": "led_disp_wl",  "label": "SDI SD617/618 → SDI-HDMI-1-1/1-2 → LED Display", "connector": "BNC" } },

  // Lecterns → Fiber Demarc → Ultrix (fiber laptop inputs)
  { "data": { "id": "e_lctrn1_demarc",  "source": "lectern1",    "target": "fbr_demarc",   "label": "LC Fiber (HDMI-FBR-1-1/FBR-HDMI-1-1, LC001/011)", "connector": "LC" } },
  { "data": { "id": "e_lctrn2_demarc",  "source": "lectern2",    "target": "fbr_demarc",   "label": "LC Fiber (HDMI-FBR-1-2/FBR-HDMI-1-2, LC002/012)", "connector": "LC" } },
  { "data": { "id": "e_demarc_ultrix",  "source": "fbr_demarc",  "target": "ultrix",       "label": "LC Fiber to PROD-SWR IO-CRD-1-16 Slots A-C", "connector": "LC" } },
  { "data": { "id": "e_commsdesk_demarc","source": "comms_desk", "target": "fbr_demarc",   "label": "LC Fiber (FBR-HDMI-1-3 to 1-6, LC003-017)", "connector": "LC" } },
  { "data": { "id": "e_fohdesk_demarc", "source": "foh_desk",    "target": "fbr_demarc",   "label": "LC Fiber (FBR-HDMI-1-7, LC013)", "connector": "LC" } },

  // Lectern monitors ← Ultrix
  { "data": { "id": "e_ultrix_lctrn1mon","source": "ultrix",     "target": "lectern1",     "label": "HDMI-FBR Monitor out (LC003/013)", "connector": "LC" } },
  { "data": { "id": "e_ultrix_lctrn2mon","source": "ultrix",     "target": "lectern2",     "label": "HDMI-FBR Monitor out (LC004/014)", "connector": "LC" } },
  { "data": { "id": "e_ultrix_commsmon", "source": "ultrix",     "target": "comms_desk",   "label": "4x Monitor outs (LC014-017 Slot B/C ports)", "connector": "LC" } },

  // ── AUDIO SIGNAL FLOW ─────────────────────

  // Yamaha Rio (DAN-IO) – mic/line in from wall plates
  { "data": { "id": "e_wp11_danio",  "source": "wp_1_1", "target": "yamaha_rio", "label": "XLR Mic IN (A001-A005 to DAN-IO-1-1)", "connector": "XLR3" } },
  { "data": { "id": "e_wp12_danio",  "source": "wp_1_2", "target": "yamaha_rio", "label": "XLR Mic IN (A006-A009 to DAN-IO-1-2)", "connector": "XLR3" } },
  { "data": { "id": "e_wp_danio_3",  "source": "wp_1_3", "target": "yamaha_rio", "label": "XLR Mic/Line IN (DAN-IO-1-3)", "connector": "XLR3" } },
  { "data": { "id": "e_wp_danio_4",  "source": "wp_1_4", "target": "yamaha_rio", "label": "XLR Mic/Line IN (DAN-IO-1-4)", "connector": "XLR3" } },

  // Yamaha Rio → Dante network
  { "data": { "id": "e_danio_dante",  "source": "yamaha_rio",   "target": "netgear_dante","label": "Dante Primary/Secondary (DA005-DA015 / DA505-DA515)", "connector": "RJ-45" } },

  // MADI Converter ↔ Dante (aligning video MADI audio to Dante)
  { "data": { "id": "e_madi_dante",   "source": "yamaha_rmio",  "target": "netgear_dante","label": "Dante Primary/Secondary (DA523/DA023)", "connector": "RJ-45" } },

  // Dante Clock → Dante switch
  { "data": { "id": "e_danteclk_sw",  "source": "dante_clock",  "target": "netgear_dante","label": "Dante Leader Clock (D68)", "connector": "RJ-45" } },

  // Shure Axient → Dante
  { "data": { "id": "e_shure_dante",  "source": "shure_axient", "target": "netgear_dante","label": "Dante (D51-D54 receivers, D72 Spectrum Mgr)", "connector": "RJ-45" } },
  { "data": { "id": "e_antda_shure",  "source": "ant_da",       "target": "shure_axient", "label": "RF Antenna Distribution (RF005-RF016, BNC)", "connector": "BNC" } },

  // Speaker DSP (Galileo Galaxy) ← Dante
  { "data": { "id": "e_dante_spkrdsp","source": "netgear_dante","target": "galileo_galaxy","label": "Dante audio routing (D55/D56 DAN-IO-1-1/1-2)", "connector": "RJ-45" } },
  { "data": { "id": "e_spkrdsp_spkrs","source": "galileo_galaxy","target": "crestron_amp", "label": "Analog XLR out to amplifier and ceiling speakers", "connector": "XLR3" } },
  { "data": { "id": "e_spkrdsp_ps",   "source": "galileo_galaxy","target": "spkr_ps",      "label": "Speaker power / audio to ceiling speakers (PHX)", "connector": "PHX" } },

  // SIM3 / P022-P027 speaker amp cards (Galileo Galaxy outputs)
  // These are the in-ceiling speaker drivers fed from the Galaxy DSP
  { "data": { "id": "e_galaxy_anlg",  "source": "galileo_galaxy","target": "crestron_amp", "label": "Analog Output A501-A538 XLR to amplifiers", "connector": "XLR3" } },

  // ALS iListen ← Dante
  { "data": { "id": "e_als_dante",    "source": "netgear_dante","target": "als_ilisten",  "label": "Dante audio (A18/A19 to ALS-TX-1-1/1-2)", "connector": "RJ-45" } },

  // Clear-Com base ↔ Beltpacks
  { "data": { "id": "e_clearcom_bp",  "source": "clearcom_base","target": "clearcom_bpack","label": "Wired XLR party lines / RF base (INTRCM-BS → TXR)", "connector": "XLR3" } },

  // FOH Audio Mixer ← Dante
  { "data": { "id": "e_audmxr_dante", "source": "aud_mxr",     "target": "netgear_dante","label": "Dante (DA524 to AVLAN-SWT-1-1)", "connector": "RJ-45" } },

  // BGM Player → AV LAN
  { "data": { "id": "e_bgm_avlan",    "source": "bgm_player",  "target": "netgear_av",   "label": "LAN (L001)", "connector": "RJ-45" } },

  // ── NETWORK / CONTROL ─────────────────────

  // AV LAN ↔ Dante switch (inter-switch uplink)
  { "data": { "id": "e_avlan_dante_uplink","source": "netgear_av","target": "netgear_dante","label": "Inter-switch uplink", "connector": "RJ-45" } },

  // Ultrix management → AV LAN
  { "data": { "id": "e_ultrix_avlan", "source": "ultrix",      "target": "netgear_av",   "label": "Control / Management (DA017 to AVLAN-SWT)", "connector": "RJ-45" } },

  // Prod switcher → AV LAN
  { "data": { "id": "e_prodswr_avlan","source": "prod_swr",    "target": "netgear_av",   "label": "LAN (N019-N022 to AVLAN-SWT-1-1)", "connector": "RJ-45" } },

  // Streaming encoders → AV LAN
  { "data": { "id": "e_strm_avlan",   "source": "pearl_streamer","target": "netgear_av",  "label": "LAN (L013-L016 to AVLAN-SWT-1-1)", "connector": "RJ-45" } },

  // Streaming encoders ← Ultrix (SDI program feed)
  { "data": { "id": "e_ultrix_strm",  "source": "ultrix",      "target": "pearl_streamer","label": "SDI Program Output per zone", "connector": "BNC" } },

  // Mac Studios / PCs → AV LAN (KVM control path)
  { "data": { "id": "e_mac_avlan",    "source": "mac_studios", "target": "netgear_av",   "label": "LAN (L008-L011 to AVLAN-SWT-1-1)", "connector": "RJ-45" } },
  { "data": { "id": "e_pc_avlan",     "source": "ofe_pcs",     "target": "netgear_av",   "label": "LAN (L002-L007 to AVLAN-SWT-1-1)", "connector": "RJ-45" } },

  // KVM Infinity ← Mac / PC
  { "data": { "id": "e_mac_kvm",      "source": "mac_studios", "target": "kvm_infinity", "label": "USB-B KVM input (Grey USB)", "connector": "USB-B" } },
  { "data": { "id": "e_pc_kvm",       "source": "ofe_pcs",     "target": "kvm_infinity", "label": "USB-B KVM input", "connector": "USB-B" } },
  { "data": { "id": "e_kvm_consoles", "source": "kvm_infinity","target": "kvm_console",  "label": "USB KVM link to consoles at lecterns/control rm", "connector": "RJ-45" } },

  // Perfect Cue ← Mac
  { "data": { "id": "e_mac_perfectcue","source": "mac_studios","target": "dsan_perfect_cue","label": "USB-B (Black USB to AIM-1-1)", "connector": "USB-B" } },
  { "data": { "id": "e_perfectcue_ext","source": "dsan_perfect_cue","target": "icron_usb", "label": "USB extend to clicker receivers at WP", "connector": "USB-A" } },

  // Corporate LAN switch → Laptops / Control
  { "data": { "id": "e_corp_ltop1",   "source": "corp_switch", "target": "foh_desk",     "label": "Corp LAN (L012-L015 to CORP-SWT-1-1)", "connector": "RJ-45" } },
  { "data": { "id": "e_corp_ltop2",   "source": "corp_switch", "target": "comms_desk",   "label": "Corp LAN (L014-L015 to CORP-SWT-1-1)", "connector": "RJ-45" } },
  { "data": { "id": "e_corp_vtc",     "source": "corp_switch", "target": "cisco_codec",  "label": "Corp LAN for MTR (L016/L017 to CORP-SWT-1-1)", "connector": "RJ-45" } },

  // Network patch bay ↔ wall plates (Dante/AV LAN tiebacks)
  { "data": { "id": "e_netpatch_wp",  "source": "network_patch","target": "wp_1_1",      "label": "AV LAN & Dante ties T1-T18 to all WPs", "connector": "RJ-45" } },
  { "data": { "id": "e_avlan_sw2",    "source": "netgear_av",  "target": "netgear_av",   "label": "AVLAN-SWT-1-1 ↔ 1-2 uplink", "connector": "RJ-45" } },
  { "data": { "id": "e_dante_sw2",    "source": "netgear_dante","target": "netgear_dante","label": "DAN-SWT-1-1 ↔ 1-2 uplink", "connector": "RJ-45" } },

  // Fiber patch bay → wall plates (fiber tie lines)
  { "data": { "id": "e_fbr_pnl_wps",  "source": "fiber_patch", "target": "wp_1_1",       "label": "LC Quad-4 fiber breakout to WP-1-1 through 1-9", "connector": "LC" } },
  { "data": { "id": "e_fbr_pnl2_demarc","source": "fiber_patch","target": "fbr_demarc",  "label": "LC Fiber (LC201-LC328 patch cables)", "connector": "LC" } },

  // AVLAN-SWT-1-2 SFP uplink to fiber demarc box
  { "data": { "id": "e_avlan_sw2_demarc","source": "netgear_av","target": "fbr_demarc",  "label": "SFP/LC port 1/2 (LC007/LC008) to FBR-DMRC-1-1", "connector": "LC" } },

  // Control panels / touch panels
  { "data": { "id": "e_ctlpnl_avlan", "source": "netgear_av",  "target": "comms_desk",   "label": "Control touch panels (CTL-PNL-1-1/2-1) via AV LAN", "connector": "RJ-45" } },
  { "data": { "id": "e_swrrcp_avlan", "source": "swr_rcp",     "target": "netgear_av",   "label": "Switcher remote panel Ethernet", "connector": "RJ-45" } },

  // ── ANCILLARY SPACES ─────────────────────

  // Work Lounge
  { "data": { "id": "e_worklounge_avlan","source": "work_lounge","target": "netgear_av",  "label": "AV LAN (N046 to AVLAN-SWT-1-2 port)", "connector": "RJ-45" } },
  { "data": { "id": "e_ultrix_worklounge","source": "ultrix",   "target": "work_lounge",  "label": "SDI (SD617/SD618 to SDI-HDMI-1-1/1-2)", "connector": "BNC" } },

  // Breakroom
  { "data": { "id": "e_brk_corp",     "source": "breakroom",   "target": "corp_switch",  "label": "Corp LAN (L004-L006)", "connector": "RJ-45" } },

  // Wayfinding / Green Room
  { "data": { "id": "e_wf_corp",      "source": "wayfinding",  "target": "corp_switch",  "label": "Corp LAN / IP control", "connector": "RJ-45" } },

  // Adventure Rooms
  { "data": { "id": "e_adv_corp",     "source": "adventure_rm","target": "corp_switch",  "label": "Corp LAN / IP control", "connector": "RJ-45" } },
];
