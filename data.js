const avData = [
  // DEVICES (Nodes)
  { data: { id: 'mic1', label: 'Wireless Mic 1', details: { ip: '10.0.0.5', freq: '500MHz', rack: 'Stage' } } },
  { data: { id: 'dsp', label: 'Main DSP', details: { ip: '10.0.0.10', model: 'Q-SYS Core', rack: 'MDF' } } },
  { data: { id: 'amp1', label: 'Amplifier A', details: { ip: '10.0.0.15', power: '1000W', rack: 'IDF-1' } } },
  
  // CONNECTIONS (Edges - direction matters for troubleshooting!)
  { data: { id: 'edge1', source: 'mic1', target: 'dsp', type: 'Dante' } },
  { data: { id: 'edge2', source: 'dsp', target: 'amp1', type: 'Analog' } }
];
