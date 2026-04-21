const avElements = [
  // --- RACK 1: THE CORE ---
  { data: { id: 'ultrix', label: 'ROSS Ultrix Router', details: 'Main Brains. Routes Inputs to Outputs. | Rack: 1' } },
  { data: { id: 'carb1', label: 'Ross Carbonite 1', details: 'Main Production Switcher. | Rack: 1' } },
  { data: { id: 'mosaic', label: 'Ross Mosaic (Carbonite 2)', details: 'Switcher Blade for Mosaic. | Rack: 1' } },
  { data: { id: 'pc_dell', label: 'Dell PC', details: 'Mini-DP to Cobalt. USB to KVM/Perfect Cue. | Rack: 1' } },

  // --- RACK 2: CONVERSION & CAPTURE ---
  { data: { id: 'mac_studios', label: 'Mac Studio Bank', details: 'Qty 8 units. USB-C Video Out. | Rack: 2' } },
  { data: { id: 'cobalt', label: 'Cobalt Card Cage', details: 'HDMI to SDI Conversion for PCs/Macs. | Rack: 2' } },
  { data: { id: 'aja_ki_pro', label: 'AJA Ki Pro', details: 'SDI Video Recorders (ProRes Proxy). | Rack: 2' } },
  { data: { id: 'pearl', label: 'Pearl Streamers', details: 'Kaltura/RTMP Streaming Encoders. | Rack: 2' } },
  { data: { id: 'cisco_vtc', label: 'Cisco VTC Codec', details: 'Video Conferencing Display Outputs. | Rack: 2' } },

  // --- RACK 3: AUDIO & PROCESSING ---
  { data: { id: 'shure_axient', label: 'Shure Axient Wireless', details: '16-Channel RF Mic System. Dante Output. | Rack: 3' } },
  { data: { id: 'yamaha_rio', label: 'Yamaha Rio I/O', details: 'Analog to Dante Converter. | Rack: 3' } },
  { data: { id: 'dante_net', label: 'Dante AV Net', details: 'Network Switch for all Audio Traffic. | Rack: 3' } },
  { data: { id: 'yamaha_dm7', label: 'Yamaha DM7 Console', details: 'Primary Audio Mixing Engine. | Rack: 3' } },
  { data: { id: 'yamaha_rmio', label: 'Yamaha RMio64-D', details: 'MADI to Dante Sync/Converter. | Rack: 3' } },
  { data: { id: 'galileo', label: 'Meyer Galileo Galaxy', details: 'Loudspeaker Processor & Matrix. | Rack: 3' } },
  { data: { id: 'dante_clock', label: 'Dante Master Clock', details: 'Studio Tech 5401A Leader Clock. | Rack: 3' } },

  // --- RACK 5: OUTPUTS ---
  { data: { id: 'novastar', label: 'Novastar H15', details: 'Video Wall Processor. MiniME 1-4. | Rack: 5' } },
  { data: { id: 'speakers', label: 'Speakers and Subs', details: 'Main Room PA System. | Rack: 5' } },

  // --- SIGNAL FLOW CONNECTIONS (EDGES) ---
  
  // Video Paths
  { data: { id: 'v1', source: 'pc_dell', target: 'cobalt', label: 'HDMI' } },
  { data: { id: 'v2', source: 'mac_studios', target: 'cobalt', label: 'USB-C' } },
  { data: { id: 'v3', source: 'cobalt', target: 'ultrix', label: 'SDI' } },
  { data: { id: 'v4', source: 'ultrix', target: 'carb1', label: 'SDI' } },
  { data: { id: 'v5', source: 'carb1', target: 'novastar', label: 'SDI' } },
  { data: { id: 'v6', source: 'ultrix', target: 'pearl', label: 'SDI' } },
  { data: { id: 'v7', source: 'ultrix', target: 'aja_ki_pro', label: 'SDI' } },
  { data: { id: 'v8', source: 'ultrix', target: 'cisco_vtc', label: 'SDI' } },

  // Audio Paths
  { data: { id: 'a1', source: 'shure_axient', target: 'dante_net', label: 'Dante' } },
  { data: { id: 'a2', source: 'yamaha_rio', target: 'dante_net', label: 'Dante' } },
  { data: { id: 'a3', source: 'dante_net', target: 'yamaha_dm7', label: 'Dante' } },
  { data: { id: 'a4', source: 'ultrix', target: 'yamaha_rmio', label: 'MADI' } },
  { data: { id: 'a5', source: 'yamaha_rmio', target: 'dante_net', label: 'Dante' } },
  { data: { id: 'a6', source: 'yamaha_dm7', target: 'galileo', label: 'Analog/Dante' } },
  { data: { id: 'a7', source: 'galileo', target: 'speakers', label: 'Analog' } },
  
  // Clocking
  { data: { id: 'c1', source: 'dante_clock', target: 'dante_net', label: 'PTP Sync' } },
  { data: { id: 'c2', source: 'ultrix', target: 'yamaha_rmio', label: 'Word Clock' } }
];
