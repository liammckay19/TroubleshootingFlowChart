const avElements = [
  // RACK 1 DEVICES
  { "data": { "id": "ultrix", "label": "ROSS Ultrix Router", "details": "Main system brains. Includes Router cards, Reference card, and Mod Slots. | Rack: 1" } },
  { "data": { "id": "ultripower", "label": "ROSS Ultripower PS", "details": "Main power supply for Ultrix. | Rack: 1" } },
  { "data": { "id": "ultracore", "label": "Ultracore BCS", "details": "Main database file for all routes. | Rack: 1" } },
  { "data": { "id": "carb1", "label": "Carbonite 1 Switcher", "details": "Main Source Selections and Transitions. | Rack: 1" } },
  { "data": { "id": "mosaic", "label": "Mosaic (Carbonite 2)", "details": "Switcher blade used for Mosaic/Carbonite 2. | Rack: 1" } },
  { "data": { "id": "sdi_jacks_r1", "label": "SDI Jacks Rack 1", "details": "1-1 microBNC to regular BNC adapter. | Rack: 1" } },
  { "data": { "id": "pc_dell", "label": "PC (Dell)", "details": "Feeds Cobalt card via Mini-DP. Feeds KVM and Perfect Cue via USB. | Rack: 1" } },

  // RACK 2 DEVICES
  { "data": { "id": "cobalt_cage", "label": "Cobalt Card Cage", "details": "HDMI to SDI conversion. 4 PC and 4 Mac inputs. | Rack: 2" } },
  { "data": { "id": "cisco_codec", "label": "Cisco Codec Pro", "details": "Running MTR. 2 display inputs/outputs. | Rack: 2" } },
  { "data": { "id": "aja_ki_pro", "label": "AJA Ki Pro", "details": "Used for DDR (SSD cards). Records at ProRes proxy. | Rack: 2" } },
  { "data": { "id": "pearl_streamer", "label": "Pearl Streaming Device", "details": "RTMP/SRT streaming. 4 devices for divided spaces. | Rack: 2" } },
  { "data": { "id": "kvm_infinity", "label": "KVM Infinity", "details": "Main head unit with 8 USB outs for Mac/PC control. | Rack: 2" } },
  { "data": { "id": "dsan_perfect_cue", "label": "DSAN Perfect Cue", "details": "Slide clicker system. | Rack: 2" } },
  { "data": { "id": "icron_usb", "label": "ICRON USB Extender", "details": "USB Extreme Extender for peripherals. | Rack: 2" } },
  { "data": { "id": "mac_studios", "label": "Mac Studios (Qty 8)", "details": "USB-C Video out. Grey USB for KVM, Black for Perfect Cue. | Rack: 2" } },

  // RACK 3 DEVICES
  { "data": { "id": "shure_axient", "label": "Shure Axient System", "details": "Spectrum Manager and 4 encrypted receivers. Supports 16 mics. | Rack: 3" } },
  { "data": { "id": "crestron_amp", "label": "Crestron Amplifier", "details": "SJ FT14 Conference Center audio. | Rack: 3" } },
  { "data": { "id": "als_ilisten", "label": "ALS iListen", "details": "IR transmitters for assistive listening. | Rack: 3" } },
  { "data": { "id": "clearcom_base", "label": "Clear-Com Base Station", "details": "4 party lines (Prod 1-3, Client). | Rack: 3" } },
  { "data": { "id": "galileo_galaxy", "label": "Meyer Galileo Galaxy", "details": "Audio output routing to all speakers. | Rack: 3" } },
  { "data": { "id": "yamaha_rio", "label": "Yamaha Rio", "details": "I/O converter. Analog In/Out on Dante network. | Rack: 3" } },
  { "data": { "id": "yamaha_rmio", "label": "Yamaha RMio64-D", "details": "Aligns MADI (video audio) and Dante sync. | Rack: 3" } },
  { "data": { "id": "dante_clock", "label": "Studio Technologies 5401A", "details": "Dedicated external Dante Leader Clock. | Rack: 3" } },

  // RACK 4 DEVICES
  { "data": { "id": "netgear_av", "label": "Netgear AV Net", "details": "Top two switches for AV network. | Rack: 4" } },
  { "data": { "id": "netgear_dante", "label": "Netgear Dante Net", "details": "Bottom two switches for Dante network. | Rack: 4" } },
  { "data": { "id": "poe_injectors", "label": "PoE++ Injectors", "details": "Power for Panasonic cameras. | Rack: 4" } },

  // RACK 5 DEVICES
  { "data": { "id": "fiber_patch", "label": "Optical Fiber Patch Bay", "details": "WP (Wall Plate) dry lines. | Rack: 5" } },
  { "data": { "id": "network_patch", "label": "Network Patch Bay", "details": "WP (Wall Plate) network ties. | Rack: 5" } },
  { "data": { "id": "novastar_h15", "label": "Novastar H15", "details": "Video wall processor. Manages MiniME 1-4 inputs. | Rack: 5" } },
  { "data": { "id": "corp_net_patch", "label": "Adobe Corp Net Patch", "details": "Access to Corporate Net over Ethernet. | Rack: 5" } },
  {
    "data": {
      "id": "e_ultrix_ultripower_123",
      "source": "ultrix",
      "target": "ultripower"
    }
  },
  {
    "data": {
      "id": "e_ultrix_ultracore_525",
      "source": "ultrix",
      "target": "ultracore"
    }
  },
  {
    "data": {
      "id": "e_ultrix_carb1_290",
      "source": "ultrix",
      "target": "carb1"
    }
  },
  {
    "data": {
      "id": "e_ultrix_mosaic_43",
      "source": "ultrix",
      "target": "mosaic"
    }
  },
  {
    "data": {
      "id": "e_ultrix_sdi_jacks_r1_633",
      "source": "ultrix",
      "target": "sdi_jacks_r1"
    }
  },
  {
    "data": {
      "id": "e_pc_dell_cobalt_cage_40",
      "source": "pc_dell",
      "target": "cobalt_cage"
    }
  },
  {
    "data": {
      "id": "e_cobalt_cage_carb1_980",
      "source": "cobalt_cage",
      "target": "carb1"
    }
  }
];
