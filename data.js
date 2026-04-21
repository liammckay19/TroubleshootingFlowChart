const avElements = [
  // --- CORE SYSTEM DEVICES (Nodes) ---
  { data: { id: 'codec_pro', label: 'Logitech Codec Pro', details: 'The brain of the room. Processes Video, Audio, and Network data. | Location: Rack' } },
  { data: { id: 'rally_bar', label: 'Rally Bar', details: 'Main camera, speakers, and mic array. Connected via HDMI & USB. | Location: Front of Room' } },
  { data: { id: 'table_hub', label: 'Rally Table Hub', details: 'Point of connection for table peripherals. Cat6 link to Display Hub. | Location: Table' } },
  { data: { id: 'laptop', label: 'Guest Laptop', details: 'User source for Content Sharing or BYOD. | Location: Table' } },
  { data: { id: 'tap_panel', label: 'Logitech Tap', details: '10.1" Touch controller. Joins meetings and manages room controls. | Location: Table' } },
  { data: { id: 'ptz_camera', label: 'Rally PTZ Camera', details: 'Secondary camera for wider room coverage or back-of-room shots. | Location: Wall Mount' } },
  { data: { id: 'main_display', label: '85" 4K Display', details: 'Primary visual output for people and content. | Location: Front of Room' } },
  { data: { id: 'external_speakers', label: 'Ceiling Speakers', details: 'Reinforced audio output for larger room coverage. | Location: Ceiling' } },

  // --- SIGNAL FLOW CONNECTIONS (Edges) ---
  
  // Video & Control Paths
  { data: { id: 'v1', source: 'laptop', target: 'table_hub', label: 'USB-C (BYOD/Sharing)' } },
  { data: { id: 'v2', source: 'table_hub', target: 'codec_pro', label: 'Category Link' } },
  { data: { id: 'v3', source: 'ptz_camera', target: 'codec_pro', label: 'USB / HDMI' } },
  { data: { id: 'v4', source: 'rally_bar', target: 'codec_pro', label: 'USB (Camera/Mics)' } },
  { data: { id: 'v5', source: 'codec_pro', target: 'main_display', label: 'HDMI Out 1' } },
  { data: { id: 'v6', source: 'tap_panel', target: 'codec_pro', label: 'USB Control' } },

  // Audio Paths
  { data: { id: 'a1', source: 'codec_pro', target: 'rally_bar', label: 'HDMI (Audio Out)' } },
  { data: { id: 'a2', source: 'codec_pro', target: 'external_speakers', label: 'Amplified Audio' } }
];
