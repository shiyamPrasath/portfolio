export const NAV_GROUPS = [
  { id: 'problem', title: 'Problem', subtitle: 'Broken Application Experience', sections: ['sec-01', 'sec-02', 'sec-03'] },
  { id: 'solution', title: 'Solution Strategy', subtitle: 'Shift to Review\nFlow', sections: ['sec-04', 'sec-05', 'sec-06'] },
  { id: 'action', title: 'What Did I Do?', subtitle: 'Simplified User\nJourney', sections: ['sec-07', 'sec-08'] },
  { id: 'impact', title: 'Impact', subtitle: 'Reduce Effort &\nDrop-off', sections: ['sec-09', 'sec-10'] }
];

export const SECTION_CONTENT = [
  // Group 1: Problem
  { id: 'sec-01', title: '01. Problem', content: 'Users were experiencing immense friction during the standard process. Deeply nested forms, poor logic parsing, and repetitive data entry led to a staggering 40% drop-off rate.' },
  { id: 'sec-02', title: '02. Listening to Users', content: 'We conducted over 40 interviews with recent users to understand their pain points across mobile and desktop. The overwhelming consensus was that the flow felt tedious and unforgiving.' },
  { id: 'sec-03', title: '03. Key UX Problems', content: 'We identified three critical bottlenecks: 1. Confusing progress indicators. 2. Manual entry of data that already existed in uploaded documents. 3. Lack of auto-save functionality.' },
  
  // Group 2: Solution Strategy
  { id: 'sec-04', title: '04. Solution Strategy', content: 'Our goal was to rebuild the ingestion flow to aggressively map standard formats directly to form fields with 95% accuracy, reducing the user effort to merely reviewing data.' },
  { id: 'sec-05', title: '05. Design Goals', content: 'The modernization program focused on comprehensive renewal of a legacy system that no longer met modern standards. We established four primary objectives to guide the redesign process and measure success.' },
  { id: 'sec-06', title: '06. Before vs After', content: 'The shift from a multi-page click-heavy process to a linear, review-first flow allowed users to accomplish their goals with 60% fewer clicks.' },

  // Group 3: What Did I Do
  { id: 'sec-07', title: '07. My Role / Approach', content: 'I acted as the Lead Product Designer handling UX architecture, wireframing, and interactive prototyping. I collaborated heavily with engineering to map API constraints to the frontend UI.' },
  { id: 'sec-08', title: '08. Experience Screens', content: 'Key output focused on the parsing logic interface, global progress indicator, and final submission state logic.' },

  // Group 4: Impact
  { id: 'sec-09', title: '07. Key Screens Explanation', content: '' },
  { id: 'sec-10', title: '08. Impact & Learning', content: '' },
];
