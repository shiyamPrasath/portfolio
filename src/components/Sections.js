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

export const BUGASURA_NAV_GROUPS = [
  { id: 'problem', title: 'Problem', subtitle: 'Understanding workflow\nfriction', sections: ['sec-01'] },
  { id: 'strategy', title: 'Strategy', subtitle: 'Redefining the\ncreation flow', sections: ['sec-02', 'sec-03'] },
  { id: 'execution', title: 'Execution', subtitle: 'Designing key\ninteractions', sections: ['sec-04', 'sec-05'] },
  { id: 'outcome', title: 'Outcome', subtitle: 'Measuring improvements\nand trade-offs', sections: ['sec-06', 'sec-07', 'sec-08'] }
];

export const BUGASURA_SECTION_CONTENT = [
  { id: 'sec-01', title: '01. Problem Framing', content: 'Engineers and testers interact with the test case creation popup daily. Re-designing this flow reduces cognitive load and allows the engineering teams to create, organize, and execute test cases efficiently.' },
  { id: 'sec-02', title: '02. Design Goals', content: 'Modernize the test case ingestion by separating functional from API logic, optimizing the progression, and improving visual clarity.' },
  { id: 'sec-03', title: '03. User Flow', content: 'Breaking the massive form down into a structured 3-step wizard (Details, Steps, Finish). Providing a clear linear process focused on immediate context instead of overwhelming users upfront.' },
  { id: 'sec-04', title: '04. Key Interaction Decisions', content: 'Minimizing manual entry, preventing unnecessary API configuration on UI tests, and making test states unambiguous across all device footprints.' },
  { id: 'sec-05', title: '05. Final Screens', content: 'The finalized high-fidelity interface with a focus on simple step-by-step conditional rendering for complex QA pathways.' },
  { id: 'sec-06', title: '06. Trade-offs & Constraints', content: 'Balancing technical limitations, handling edge cases gracefully, and prioritizing reducing effort over visual flair.' },
  { id: 'sec-07', title: '07. Impact & Outcomes', content: 'Achieved a massive reduction in test creation time and boosted data entry accuracy.' },
  { id: 'sec-08', title: '08. Future Opportunities', content: 'Next steps include deeper automation, template management, and AI-assisted scenario generation.' }
];
