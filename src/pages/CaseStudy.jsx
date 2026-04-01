import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import screen1Img from '../assets/Screen1.png';
import screen2Img from '../assets/Screen2.png';
import screen3Img from '../assets/Screen3.png';
import screen4Img from '../assets/Screen4.png';
import timewasteIcon from '../svg/timewaste.svg';
import frustrationIcon from '../svg/Deep Frustration.svg';
import confusionIcon from '../svg/System Confusion.svg';
import impactIcon from '../svg/Impact.svg';
import closeIcon from '../svg/close.svg';
import { FaRegKeyboard } from "react-icons/fa";
import { FaUserClock, FaCheck } from "react-icons/fa6";

// Custom User SVGs for Components
import reduceTimeIcon from '../svg/Reduce Time to Apply.svg';
import minManualEntryIcon from '../svg/Minimize Manual Entry.svg';
import improveTrustIcon from '../svg/Improve Trust.svg';
import incCompletionRateIcon from '../svg/Increase Completion Rate.svg';

import entryModalIcon from '../svg/Entry Modal.svg';
import resumeUploadIcon from '../svg/Resume Upload.svg';
import dataFoundScreenIcon from '../svg/Data Found Screen.svg';
import reviewAndFixIcon from '../svg/Review & Fix.svg';

import reducingEffortIcon from '../svg/Reducing effort trumps visual flair.svg';
import feedbackTrustIcon from '../svg/Feedback builds trust in automation.svg';
import readOnlyIcon from '../svg/Read-only is faster than inputs.svg';


import { NAV_GROUPS, SECTION_CONTENT } from '../components/Sections';

// CUSTOM SECTIONS
const ProblemSection = () => (
  <div className="flex flex-col">
    <div className="flex items-center gap-3 mb-8">
      <span className="text-3xl font-extrabold text-[#B05B2F]">01</span>
      <h3 className="text-3xl font-bold text-gray-900">Problem</h3>
    </div>
    <div className="relative bg-white rounded-[2rem] p-8 md:p-12 border-2 border-gray-100/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <div className="absolute top-6 left-8 text-7xl font-sans text-gray-200/50 leading-none">“</div>
      <p className="relative z-10 text-[22px] lg:text-[28px] text-gray-700 leading-snug font-medium text-center px-4 md:px-10">
        The current Workday application process averages <span className="text-[#B05B2F] font-bold">20–30 minutes</span> due to poor resume parsing and forced, repetitive data entry. This frustrating, multi-step experience causes <span className="text-[#B05B2F] font-bold">high user drop-off</span>, preventing companies from capturing top talent who abandon the process halfway.
      </p>
    </div>
  </div>
);

const ListeningSection = () => (
  <div className="flex flex-col">
    <div className="flex items-baseline gap-3 mb-2">
      <span className="text-3xl font-extrabold text-[#B05B2F]">02</span>
      <h3 className="text-3xl font-bold text-gray-900">Listening to the Users</h3>
    </div>
    <p className="text-sm text-gray-500 mb-10 w-full md:w-2/3">
      Analyzing raw feedback from Reddit, Trustpilot, and App Stores to understand the core pain points.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Time Waste */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-6">
        <div className="w-8 h-8 rounded-full bg-[#FFEDD5] flex items-center justify-center shadow-sm shrink-0">
          <img src={timewasteIcon} alt="Time Waste" className="w-5 h-5 object-contain" />
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Time Waste</h4>
          <p className="text-xs text-gray-500 leading-relaxed">Users feel their time is disrespected by redundant processes.</p>
        </div>
        <div className="space-y-4 mt-auto pt-4 border-t border-gray-50">
          <div className="text-xs italic text-gray-500 pl-3 border-l-2 border-orange-400 py-1 leading-relaxed">"Why do I upload my resume if I have to type it all out again?"</div>
          <div className="text-xs italic text-gray-500 pl-3 border-l-2 border-orange-400 py-1 leading-relaxed">"Took me 35 minutes just to apply for one role. Never again."</div>
        </div>
      </div>

      {/* Deep Frustration */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-6">
        <div className="w-8 h-8 rounded-full bg-[#FEE2E2] flex items-center justify-center shadow-sm shrink-0">
          <img src={frustrationIcon} alt="Deep Frustration" className="w-5 h-5 object-contain" />
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2">Deep Frustration</h4>
          <p className="text-xs text-gray-500 leading-relaxed">The parsing technology actively creates more work instead of helping.</p>
        </div>
        <div className="space-y-4 mt-auto pt-4 border-t border-gray-50">
          <div className="text-xs italic text-gray-500 pl-3 border-l-[3px] border-red-400 py-1 leading-relaxed">"The parser completely mangled my employment history. I spent more time fixing it than if I started blank."</div>
          <div className="text-xs italic text-gray-500 pl-3 border-l-[3px] border-red-400 py-1 leading-relaxed">"I see 'Powered by Workday' and I instantly close the tab."</div>
          <div className="text-xs italic text-gray-500 pl-3 border-l-[3px] border-red-400 py-1 leading-relaxed">"Creating a new account for every single company is exhausting."</div>
        </div>
      </div>

      {/* System Confusion */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col gap-6">
        <div className="w-8 h-8 rounded-full bg-[#DBEAFE] flex items-center justify-center shadow-sm shrink-0">
          <img src={confusionIcon} alt="System Confusion" className="w-5 h-5 object-contain" />
        </div>
        <div>
          <h4 className="font-bold text-gray-900 mb-2">System Confusion</h4>
          <p className="text-xs text-gray-500 leading-relaxed">Lack of clear feedback leaves users unsure of their progress or status.</p>
        </div>
        <div className="space-y-4 mt-auto pt-4 border-t border-gray-50">
          <div className="text-xs italic text-gray-500 pl-3 border-l-[3px] border-blue-400 py-1 leading-relaxed">"It asked for my education three times in different formats. Why?"</div>
          <div className="text-xs italic text-gray-500 pl-3 border-l-[3px] border-blue-400 py-1 leading-relaxed">"I hit submit and it just spun forever. Did they get it?"</div>
        </div>
      </div>

    </div>
  </div>
);

const KeyUxProblemsSection = () => (
  <div className="flex flex-col">
    <div className="flex items-baseline gap-3 mb-2">
      <span className="text-3xl font-extrabold text-[#B05B2F]">03</span>
      <h3 className="text-3xl font-bold text-gray-900">Key UX Problems</h3>
    </div>
    <p className="text-sm text-gray-500 mb-10 w-full md:w-2/3">
      Diagnosing the specific friction points in the current flow.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* 1 */}
      <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col h-full">
        <div className="flex gap-4 mb-4">
          <span className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 shrink-0">1</span>
          <div>
            <h5 className="font-bold text-gray-900 text-sm mb-1.5">Resume Upload Yields No Value</h5>
            <p className="text-xs text-gray-500 leading-relaxed">Users upload a document expecting auto-fill, but the parser fails to accurately map data to fields.</p>
          </div>
        </div>
        <div className="mt-auto flex items-start gap-2 bg-[#B05B2F]/10 px-3 py-2.5 rounded-md pt-4">
          <img src={impactIcon} alt="Impact" className="w-[14px] h-[14px] shrink-0 mt-[1px]" />
          <span className="text-[10px] uppercase text-[#B05B2F] font-bold tracking-wide leading-relaxed">Impact: Broken expectations and immediate frustration.</span>
        </div>
      </div>

      {/* 2 */}
      <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col h-full">
        <div className="flex gap-4 mb-4">
          <span className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 shrink-0">2</span>
          <div>
            <h5 className="font-bold text-gray-900 text-sm mb-1.5">Forced Manual Re-entry</h5>
            <p className="text-xs text-gray-500 leading-relaxed">After a failed parse, users must manually type out their entire work history, education, and skills.</p>
          </div>
        </div>
        <div className="mt-auto flex items-start gap-2 bg-[#B05B2F]/10 px-3 py-2.5 rounded-md pt-4">
          <img src={impactIcon} alt="Impact" className="w-[14px] h-[14px] shrink-0 mt-[1px]" />
          <span className="text-[10px] uppercase text-[#B05B2F] font-bold tracking-wide leading-relaxed">Impact: Massive time sink; primary cause of form abandonment.</span>
        </div>
      </div>

      {/* 3 */}
      <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col h-full">
        <div className="flex gap-4 mb-4">
          <span className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 shrink-0">3</span>
          <div>
            <h5 className="font-bold text-gray-900 text-sm mb-1.5">Endless Multi-Step Forms</h5>
            <p className="text-xs text-gray-500 leading-relaxed">The application is split across 7-10 separate pages with no clear progress indicator or estimated time.</p>
          </div>
        </div>
        <div className="mt-auto flex items-start gap-2 bg-[#B05B2F]/10 px-3 py-2.5 rounded-md pt-4">
          <img src={impactIcon} alt="Impact" className="w-[14px] h-[14px] shrink-0 mt-[1px]" />
          <span className="text-[10px] uppercase text-[#B05B2F] font-bold tracking-wide leading-relaxed">Impact: Cognitive overload and lack of completion motivation.</span>
        </div>
      </div>

      {/* 4 */}
      <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col h-full">
        <div className="flex gap-4 mb-4">
          <span className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600 shrink-0">4</span>
          <div>
            <h5 className="font-bold text-gray-900 text-sm mb-1.5">No Centralized Data Reuse</h5>
            <p className="text-xs text-gray-500 leading-relaxed">Users must create a new account for every single company using Workday, unable to reuse their profile data.</p>
          </div>
        </div>
        <div className="mt-auto flex items-start gap-2 bg-[#B05B2F]/10 px-3 py-2.5 rounded-md pt-4">
          <img src={impactIcon} alt="Impact" className="w-[14px] h-[14px] shrink-0 mt-[1px]" />
          <span className="text-[10px] uppercase text-[#B05B2F] font-bold tracking-wide leading-relaxed">Impact: Prevents returning users from applying quickly to other roles.</span>
        </div>
      </div>

    </div>
  </div>
);
const SolutionStrategySection = () => (
  <div className="flex flex-col">
    <div className="flex items-center gap-3 mb-8">
      <span className="text-3xl font-extrabold text-[#B05B2F]">04</span>
      <h3 className="text-3xl font-bold text-gray-900">Solution Strategy</h3>
    </div>

    <div className="flex">
      {/* Thick left border curve */}
      <div className="w-[3px] bg-gray-400 rounded-full mr-6 md:mr-8 shrink-0"></div>

      <div className="flex-1 w-full overflow-hidden">
        <h4 className="text-[26px] md:text-[28px] font-medium text-gray-900 mb-6 tracking-tight">From "Form-Filling" to "Review & Edit"</h4>
        <p className="text-[14px] md:text-[15px] leading-relaxed text-gray-600 mb-10 md:mb-12 max-w-[95%]">
          The core strategic pivot was shifting the paradigm from a traditional data-entry model to a verification model. Instead of asking users to build their profile from scratch, we designed a system that proactively gathers available data and presents it for review.
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-6 relative w-full">

          {/* LEGACY APPROACH */}
          <div className="bg-[#E4E4E4]/60 rounded-2xl p-6 md:p-8 border border-gray-400/50 shadow-sm w-full">
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#B05B2F] text-white text-[9px] font-bold shadow-sm shrink-0">×</span>
              <span className="text-[11px] font-bold text-[#B05B2F] tracking-[0.15em] uppercase mt-[2px]">Legacy Approach</span>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-gray-600 font-bold mt-[2px] shrink-0">—</span>
                <span className="text-[13px] leading-relaxed font-medium text-gray-700">High cognitive load from blank fields</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gray-600 font-bold mt-[2px] shrink-0">—</span>
                <span className="text-[13px] leading-relaxed font-medium text-gray-700">Repetitive manual entry of known data</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-gray-600 font-bold mt-[2px] shrink-0">—</span>
                <span className="text-[13px] leading-relaxed font-medium text-gray-700">Overwhelming long-scrolling forms</span>
              </li>
            </ul>
          </div>

          {/* REDESIGN APPROACH */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-blue-200 shadow-[0_4px_20px_rgb(59,130,246,0.06)] relative w-full">
            {/* Pill Badge */}
            <div className="absolute -top-3 right-4 md:right-6 bg-blue-500 text-white text-[9px] font-bold tracking-[0.1em] uppercase px-3 py-1.5 rounded-full shadow-md z-10">
              New Model
            </div>
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-blue-500 text-white text-[9px] font-bold shadow-sm shrink-0">✓</span>
              <span className="text-[11px] font-bold text-blue-500 tracking-[0.15em] uppercase mt-[2px]">Redesign Approach</span>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-blue-500 font-bold mt-[2px] shrink-0">✓</span>
                <span className="text-[13px] leading-relaxed font-medium text-gray-700">Reduced cognitive load via pre-filled data</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-blue-500 font-bold mt-[2px] shrink-0">✓</span>
                <span className="text-[13px] leading-relaxed font-medium text-gray-700">Focus shifted to verification and minor edits</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-blue-500 font-bold mt-[2px] shrink-0">✓</span>
                <span className="text-[13px] leading-relaxed font-medium text-gray-700">Progressive disclosure of complex sections</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>
);

const DesignGoalsSection = () => (
  <div className="flex flex-col">
    <div className="flex items-baseline gap-3 mb-2">
      <span className="text-3xl font-extrabold text-[#B05B2F]">05</span>
      <h3 className="text-3xl font-bold text-gray-900">Design Goals</h3>
    </div>
    <p className="text-[13px] text-gray-500 mb-10 w-full md:w-3/4 leading-relaxed">
      The modernization program focused on comprehensive renewal of a legacy system that no longer met modern standards. We established four primary objectives to guide the redesign process and measure success.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      {/* 1: Reduce Time to Apply */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex items-start flex-col gap-4 group hover:border-[#B05B2F]/30 hover:shadow-md transition-all">
        <img src={reduceTimeIcon} alt="Reduce Time to Apply" className="w-4 h-4 shrink-0 group-hover:scale-[1.05] transition-transform object-contain" />
        <div>
          <h5 className="font-bold text-gray-900 text-[15px] tracking-tight mb-2">Reduce Time to Apply</h5>
          <p className="text-[12px] text-gray-500 leading-relaxed font-medium">Streamline the application process to significantly cut down the average time users spend from start to submission, minimizing drop-offs.</p>
        </div>
      </div>

      {/* 2: Minimize Manual Entry */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex items-start flex-col gap-4 group hover:border-[#B05B2F]/30 hover:shadow-md transition-all">
        <img src={minManualEntryIcon} alt="Minimize Manual Entry" className="w-4 h-4 shrink-0 group-hover:scale-[1.05] transition-transform object-contain" />
        <div>
          <h5 className="font-bold text-gray-900 text-[15px] tracking-tight mb-2">Minimize Manual Entry</h5>
          <p className="text-[12px] text-gray-500 leading-relaxed font-medium">Leverage data parsing and pre-filling capabilities to reduce repetitive typing, lowering cognitive load and potential for user error.</p>
        </div>
      </div>

      {/* 3: Improve Trust */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex items-start flex-col gap-4 group hover:border-[#B05B2F]/30 hover:shadow-md transition-all">
        <img src={improveTrustIcon} alt="Improve Trust" className="w-4 h-4 shrink-0 group-hover:scale-[1.05] transition-transform object-contain" />
        <div>
          <h5 className="font-bold text-gray-900 text-[15px] tracking-tight mb-2">Improve Trust</h5>
          <p className="text-[12px] text-gray-500 leading-relaxed font-medium">Enhance transparency through clear system feedback, recognizable UI patterns, and explicit data handling disclosures.</p>
        </div>
      </div>

      {/* 4: Increase Completion Rate */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex items-start flex-col gap-4 group hover:border-[#B05B2F]/30 hover:shadow-md transition-all">
        <img src={incCompletionRateIcon} alt="Increase Completion Rate" className="w-4 h-4 shrink-0 group-hover:scale-[1.05] transition-transform object-contain" />
        <div>
          <h5 className="font-bold text-gray-900 text-[15px] tracking-tight mb-2">Increase Completion Rate</h5>
          <p className="text-[12px] text-gray-500 leading-relaxed font-medium">Drive higher conversion rates by breaking down complex forms into digestible steps and providing contextual assistance.</p>
        </div>
      </div>

    </div>
  </div>
);

const BeforeAfterSection = () => (
  <div className="flex flex-col">
    <div className="flex items-baseline gap-3 mb-10">
      <span className="text-3xl font-extrabold text-[#B05B2F]">06</span>
      <h3 className="text-3xl font-bold text-gray-900">Before vs After</h3>
    </div>

    <div className="w-full bg-white rounded-xl shadow-sm border border-gray-300 overflow-hidden text-sm">
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300 bg-white">
        <div className="p-5 font-bold text-[10px] text-gray-500 tracking-[0.15em] uppercase border-r border-gray-300 flex items-center">Metric / Area</div>
        <div className="p-5 font-bold text-[10px] text-gray-500 tracking-[0.15em] uppercase border-r border-gray-300 flex items-center">Legacy Workday</div>
        <div className="p-5 font-bold text-[10px] text-blue-500 tracking-[0.15em] uppercase flex items-center">Redesign</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
        <div className="p-6 font-bold text-gray-900 text-[13px] border-r border-gray-300 flex items-center">Number of Steps</div>
        <div className="p-6 text-[13px] font-medium text-gray-800 border-r border-gray-300 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-200 shrink-0"></div> 12-15 disjointed pages
        </div>
        <div className="p-6 text-[13px] text-gray-900 font-bold flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 shrink-0"></div> 6 logical, grouped stages
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
        <div className="p-6 font-bold text-gray-900 text-[13px] border-r border-gray-300 flex items-center">User Effort</div>
        <div className="p-6 text-[13px] font-medium text-gray-800 border-r border-gray-300 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-200 shrink-0"></div> 100% manual data entry
        </div>
        <div className="p-6 text-[13px] text-gray-900 font-bold flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 shrink-0"></div> ~70% pre-filled via parsing/sync
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300">
        <div className="p-6 font-bold text-gray-900 text-[13px] border-r border-gray-300 flex items-center">Clarity</div>
        <div className="p-6 text-[13px] font-medium text-gray-800 border-r border-gray-300 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-200 shrink-0"></div> Dense forms, unclear requirements
        </div>
        <div className="p-6 text-[13px] text-gray-900 font-bold flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 shrink-0"></div> Bite-sized cards, clear validation
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="p-6 font-bold text-gray-900 text-[13px] border-r border-gray-300 flex items-center">System Feedback</div>
        <div className="p-6 text-[13px] font-medium text-gray-800 border-r border-gray-300 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-200 shrink-0"></div> End-of-form error dumps
        </div>
        <div className="p-6 text-[13px] text-gray-900 font-bold flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 shrink-0"></div> Inline, real-time validation
        </div>
      </div>

    </div>
  </div>
);

const WhatDidIDoSection = () => (
  <div className="flex flex-col mb-10 w-full">
    <div className="flex items-center gap-3 mb-6">
      <span className="text-3xl font-extrabold text-[#B05B2F]">07</span>
      <h3 className="text-3xl font-bold text-gray-900 tracking-tight lowercase">what did i do?</h3>
    </div>

    {/* Black Pill Tags */}
    <div className="flex flex-wrap gap-2.5 mb-16">
      {['Strategy', 'Research', 'Copy writing', 'Colours', 'Low-fi wireframing', 'High fidelity design', 'End to end product execution'].map(tag => (
        <span key={tag} className="px-4 py-2 hover:bg-gray-800 transition-colors cursor-default bg-gray-900 shadow-md text-white md:text-[11px] text-[10px] font-bold rounded-full">
          {tag}
        </span>
      ))}
    </div>

    {/* Screen 1: Flexible Entry Paths */}
    <div className="flex flex-col w-full mb-12 relative">
      <h4 className="text-[17px] font-bold text-gray-900 mb-10">Screen 1 : Flexible Entry Paths for Job Application</h4>

      <div className="flex flex-col items-center w-full relative">
        <img src={screen1Img} alt="Flexible Entry Paths" className="w-full h-auto drop-shadow-sm" />
      </div>
    </div>
  </div>
);

const ExperienceScreensSection = () => (
  <div className="flex flex-col w-full relative gap-16">
    <div className="flex flex-col items-center w-full relative">
      <h4 className="text-[17px] font-bold text-gray-900 mb-10 self-start">Screen 2 : Resume Upload Experience</h4>
      <img src={screen2Img} alt="Resume Upload Experience" className="w-full h-auto drop-shadow-sm mb-14" />

      {/* Context & Approach Dual Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-6 mb-16 px-2">
        
        {/* Context */}
        <div className="flex flex-col gap-5">
          <h5 className="text-[26px] font-[800] text-[#1F2937] tracking-tight">The Context</h5>
          <p className="text-[16px] text-[#4b5563] leading-[1.7] font-normal pr-4">
            Users were encouraged to upload their resume to speed up the application, but the experience failed to deliver on that promise. The system did not clearly show what was extracted or whether the upload was successful, leading to confusion and frustration.
          </p>
          <ul className="flex flex-col gap-5 mt-4">
            <li className="flex items-start gap-4">
              <img src={closeIcon} alt="Close" className="w-[14px] h-[14px] mt-1.5 shrink-0" />
              <span className="text-[16px] text-[#4b5563] font-normal leading-relaxed">Unclear parsing outcome after upload</span>
            </li>
            <li className="flex items-start gap-4">
              <img src={closeIcon} alt="Close" className="w-[14px] h-[14px] mt-1.5 shrink-0" />
              <span className="text-[16px] text-[#4b5563] font-normal leading-relaxed">Users forced to manually re-enter information</span>
            </li>
          </ul>
        </div>

        {/* Approach */}
        <div className="flex flex-col gap-5">
          <h5 className="text-[26px] font-[800] text-[#1F2937] tracking-tight">The Approach</h5>
          <p className="text-[16px] text-[#4b5563] leading-[1.7] font-normal pr-4">
            By transforming resume upload into a guided and transparent step, the experience shifts from uncertainty to clarity. Instead of leaving users guessing, the system now communicates what happens and what value they get.
          </p>
          <ul className="flex flex-col gap-5 mt-4">
            <li className="flex items-start gap-4">
              <FaCheck className="text-[#10B981] w-[15px] h-[15px] mt-1.5 shrink-0" />
              <span className="text-[16px] text-[#4b5563] font-normal leading-relaxed">Visible data extraction ("What we'll extract")</span>
            </li>
            <li className="flex items-start gap-4">
              <FaCheck className="text-[#10B981] w-[15px] h-[15px] mt-1.5 shrink-0" />
              <span className="text-[16px] text-[#4b5563] font-normal leading-relaxed">Shift from "upload & fill" → "upload & review"</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center w-full relative">
      <h4 className="text-[17px] font-bold text-gray-900 mb-10 self-start">Screen 3 : Key information Screen</h4>
      <img src={screen3Img} alt="Key Information Screen" className="w-full h-auto drop-shadow-sm" />
      {/* Context & Approach Dual Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-6 mb-16 px-2">
        
        {/* Context */}
        <div className="flex flex-col gap-5">
          <h5 className="text-[26px] font-[800] text-[#1F2937] tracking-tight">The Context</h5>
          <p className="text-[16px] text-[#4b5563] leading-[1.7] font-normal pr-4">
            Users are required to manually fill a large number of fields, even after uploading their resume. Errors are shown in a scattered and technical way, making it difficult to understand what needs to be fixed.
          </p>
          <ul className="flex flex-col gap-5 mt-4">
            <li className="flex items-start gap-4">
              <img src={closeIcon} alt="Close" className="w-[14px] h-[14px] mt-1.5 shrink-0" />
              <span className="text-[16px] text-[#4b5563] font-normal leading-relaxed">Errors shown late and not clearly actionable</span>
            </li>
            <li className="flex items-start gap-4">
              <img src={closeIcon} alt="Close" className="w-[14px] h-[14px] mt-1.5 shrink-0" />
              <span className="text-[16px] text-[#4b5563] font-normal leading-relaxed">No clear guidance on what needs attention</span>
            </li>
          </ul>
        </div>

        {/* Approach */}
        <div className="flex flex-col gap-5">
          <h5 className="text-[26px] font-[800] text-[#1F2937] tracking-tight">The Approach</h5>
          <p className="text-[16px] text-[#4b5563] leading-[1.7] font-normal pr-4">
            Shifted from a form-filling experience → guided correction experience, helping users focus only on what needs fixing instead of filling everything.
          </p>
          <ul className="flex flex-col gap-5 mt-4">
            <li className="flex items-start gap-4">
              <FaCheck className="text-[#10B981] w-[15px] h-[15px] mt-1.5 shrink-0" />
              <span className="text-[16px] text-[#4b5563] font-normal leading-relaxed">Provide clear, human-readable error messages</span>
            </li>
            <li className="flex items-start gap-4">
              <FaCheck className="text-[#10B981] w-[15px] h-[15px] mt-1.5 shrink-0" />
              <span className="text-[16px] text-[#4b5563] font-normal leading-relaxed">Reduce effort by keeping pre-filled data editable</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="flex flex-col items-center w-full relative">
      <h4 className="text-[17px] font-bold text-gray-900 mb-10 self-start">Screen 4 : My Experience Screen</h4>
      <img src={screen4Img} alt="My Experience Screen" className="w-full h-auto drop-shadow-sm" />
      {/* Context & Approach Dual Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-6 mb-16 px-2">
        
        {/* Context */}
        <div className="flex flex-col gap-5">
          <h5 className="text-[26px] font-[800] text-[#1F2937] tracking-tight">The Context</h5>
          <p className="text-[16px] text-[#4b5563] leading-[1.7] font-normal pr-4">
            At the “My Experience” stage, users need to quickly review and manage their professional history. In the previous design, the layout lacked structure, making it difficult to scan and edit information efficiently.
          </p>
          <ul className="flex flex-col gap-5 mt-4">
            <li className="flex items-start gap-4">
              <img src={closeIcon} alt="Close" className="w-[14px] h-[14px] mt-1.5 shrink-0" />
              <span className="text-[16px] text-[#4b5563] font-normal leading-relaxed">Poor hierarchy made roles and timelines hard to distinguish</span>
            </li>
            <li className="flex items-start gap-4">
              <img src={closeIcon} alt="Close" className="w-[14px] h-[14px] mt-1.5 shrink-0" />
              <span className="text-[16px] text-[#4b5563] font-normal leading-relaxed">Experiences were not clearly separated, causing visual clutter</span>
            </li>
            <li className="flex items-start gap-4">
              <img src={closeIcon} alt="Close" className="w-[14px] h-[14px] mt-1.5 shrink-0" />
              <span className="text-[16px] text-[#4b5563] font-normal leading-relaxed">Editing actions were not easily discoverable</span>
            </li>
          </ul>
        </div>

        {/* Approach */}
        <div className="flex flex-col gap-5">
          <h5 className="text-[26px] font-[800] text-[#1F2937] tracking-tight">The Approach</h5>
          <p className="text-[16px] text-[#4b5563] leading-[1.7] font-normal pr-4">
            The experience section was redesigned to improve clarity and control, enabling users to review and update their information with minimal effort.
          </p>
          <ul className="flex flex-col gap-5 mt-4">
            <li className="flex items-start gap-4">
              <FaCheck className="text-[#10B981] w-[15px] h-[15px] mt-1.5 shrink-0" />
              <span className="text-[16px] text-[#4b5563] font-normal leading-relaxed">Introduced card-based layout for clear separation of experiences</span>
            </li>
            <li className="flex items-start gap-4">
              <FaCheck className="text-[#10B981] w-[15px] h-[15px] mt-1.5 shrink-0" />
              <span className="text-[16px] text-[#4b5563] font-normal leading-relaxed">Strengthened hierarchy for roles, companies, and dates</span>
            </li>
            <li className="flex items-start gap-4">
              <FaCheck className="text-[#10B981] w-[15px] h-[15px] mt-1.5 shrink-0" />
              <span className="text-[16px] text-[#4b5563] font-normal leading-relaxed">Made edit actions visible and consistent across entries</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const KeyScreensSection = () => (
  <div className="flex flex-col mb-10 w-full">
    <div className="flex items-center gap-3 mb-8">
      <span className="text-3xl font-extrabold text-[#B05B2F]">07</span>
      <h3 className="text-3xl font-bold text-gray-900 tracking-tight">Key Screens Explanation</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

      {/* Card 1 */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col hover:shadow-[0_10px_30px_rgb(0,0,0,0.06)] transition-shadow">
        <div className="flex items-center gap-4 mb-6">
          <img src={entryModalIcon} alt="Entry Modal" className="w-8 h-8 shrink-0 object-contain" />
          <h4 className="text-[15px] font-bold text-gray-900">1. Entry Modal</h4>
        </div>

        <div className="space-y-4">
          <div>
            <h5 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">What Changed</h5>
            <p className="text-[12px] text-gray-600 font-medium leading-relaxed">Replaced multi-step account creation with a single "Upload Resume to Start" CTA.</p>
          </div>
          <div>
            <h5 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Why It Matters</h5>
            <p className="text-[12px] text-gray-600 font-medium leading-relaxed">Hooks the user immediately by offering value (saving time) before asking for effort (creating an account).</p>
          </div>
          <div>
            <h5 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">UX Improvement</h5>
            <p className="text-[12px] text-gray-600 font-medium leading-relaxed">Reduces initial friction and bounce rate at the very start of the funnel.</p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col hover:shadow-[0_10px_30px_rgb(0,0,0,0.06)] transition-shadow">
        <div className="flex items-center gap-4 mb-6">
          <img src={resumeUploadIcon} alt="Resume Upload" className="w-8 h-8 shrink-0 object-contain" />
          <h4 className="text-[15px] font-bold text-gray-900">2. Resume Upload</h4>
        </div>

        <div className="space-y-4">
          <div>
            <h5 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">What Changed</h5>
            <p className="text-[12px] text-gray-600 font-medium leading-relaxed">Added visual parsing feedback and a clear progress indicator during upload.</p>
          </div>
          <div>
            <h5 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Why It Matters</h5>
            <p className="text-[12px] text-gray-600 font-medium leading-relaxed">Users need to know the system is actively working, not just loading indefinitely.</p>
          </div>
          <div>
            <h5 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">UX Improvement</h5>
            <p className="text-[12px] text-gray-600 font-medium leading-relaxed">Builds trust in the automation process through transparency.</p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col hover:shadow-[0_10px_30px_rgb(0,0,0,0.06)] transition-shadow">
        <div className="flex items-center gap-4 mb-6">
          <img src={dataFoundScreenIcon} alt="Data Found Screen" className="w-8 h-8 shrink-0 object-contain" />
          <h4 className="text-[15px] font-bold text-gray-900">3. Data Found Screen</h4>
        </div>

        <div className="space-y-4">
          <div>
            <h5 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">What Changed</h5>
            <p className="text-[12px] text-gray-600 font-medium leading-relaxed">Introduced an interstitial summary: "We found 85% of your details."</p>
          </div>
          <div>
            <h5 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Why It Matters</h5>
            <p className="text-[12px] text-gray-600 font-medium leading-relaxed">Sets expectations before the review step, celebrating the time saved.</p>
          </div>
          <div>
            <h5 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">UX Improvement</h5>
            <p className="text-[12px] text-gray-600 font-medium leading-relaxed">Positive reinforcement encourages users to complete the remaining steps.</p>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col hover:shadow-[0_10px_30px_rgb(0,0,0,0.06)] transition-shadow">
        <div className="flex items-center gap-4 mb-6">
          <img src={reviewAndFixIcon} alt="Review and Fix" className="w-8 h-8 shrink-0 object-contain" />
          <h4 className="text-[15px] font-bold text-gray-900">4. Review & Fix (Shown Above)</h4>
        </div>

        <div className="space-y-4">
          <div>
            <h5 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">What Changed</h5>
            <p className="text-[12px] text-gray-600 font-medium leading-relaxed">Shifted from blank forms to pre-filled read-only views with inline editing for flagged items.</p>
          </div>
          <div>
            <h5 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">Why It Matters</h5>
            <p className="text-[12px] text-gray-600 font-medium leading-relaxed">Reading is faster than typing. Users only engage where the system failed.</p>
          </div>
          <div>
            <h5 className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">UX Improvement</h5>
            <p className="text-[12px] text-gray-600 font-medium leading-relaxed">Dramatically reduces interaction cost and physical effort.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
);

const ImpactLearningSection = () => (
  <div className="flex flex-col mb-0 w-full relative">
    <div className="flex items-center gap-3 mb-8">
      <span className="text-3xl font-extrabold text-[#B05B2F]">08</span>
      <h3 className="text-3xl font-bold text-gray-900 tracking-tight">Impact & Learning</h3>
    </div>

    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full items-stretch relative">

      {/* LEFT: Impact & Metrics (Dark Slate) */}
      <div className="bg-[#262D3D] rounded-xl p-8 lg:p-10 shadow-lg flex flex-col h-full w-full">
        <h4 className="text-[22px] font-bold text-white mb-2">Impact & Metrics</h4>
        <p className="text-gray-400 text-[12px] font-medium leading-relaxed mb-10 w-full xl:w-[90%]">
          Estimated improvements based on usability testing and heuristic evaluation.
        </p>

        <div className="space-y-8 flex-1 w-full mt-2">
          {/* Item 1 */}
          <div className="flex items-start gap-5">
            <FaRegKeyboard className="text-white text-lg mt-[2px] shrink-0" />
            <div>
              <h5 className="text-[14px] font-bold text-white mb-1.5 tracking-wide">15 → 4 Fields</h5>
              <p className="text-[11px] text-gray-400 leading-relaxed font-medium">Average reduction in manual field entries required per application.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-5">
            <FaUserClock className="text-white text-lg mt-[2px] shrink-0" />
            <div>
              <h5 className="text-[14px] font-bold text-white mb-1.5 tracking-wide">-60% Application Time</h5>
              <p className="text-[11px] text-gray-400 leading-relaxed font-medium">Estimated reduction in time-to-completion, dropping from 12 mins to ~5 mins.</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-5">
            <img src={impactIcon} alt="Impact" className="w-4 h-4 shrink-0 mt-[2px] brightness-0 invert opacity-50" />
            <div>
              <h5 className="text-[14px] font-bold text-white mb-1.5 tracking-wide">Reduced Drop-off</h5>
              <p className="text-[11px] text-gray-400 leading-relaxed font-medium">Expected 40% decrease in abandonment rate at the personal info step.</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: Learnings & Reflection (White Bordered) */}
      <div className="bg-white rounded-xl p-8 lg:p-10 border border-gray-200 shadow-[0_2px_10px_rgb(0,0,0,0.02)] flex flex-col h-full w-full">
        <h4 className="text-[22px] font-bold text-gray-900 mb-8">Learnings & Reflection</h4>

        <div className="space-y-8 flex-1 mt-2">
          {/* Item 1 */}
          <div className="flex items-start gap-4">
            <img src={reducingEffortIcon} alt="Reducing effort trumps visual flair" className="w-4 h-4 shrink-0 object-contain" />
            <div>
              <h5 className="text-[13px] font-bold text-gray-900 mb-2">Reducing effort trumps visual flair</h5>
              <p className="text-[11px] text-gray-500 leading-relaxed font-medium">In enterprise software, users value speed and accuracy over complex aesthetics. The minimal Workday UI constraint actually forced better UX decisions by focusing purely on task completion.</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-4">
            <img src={feedbackTrustIcon} alt="Feedback builds trust in automation" className="w-4 h-4 shrink-0 object-contain" />
            <div>
              <h5 className="text-[13px] font-bold text-gray-900 mb-2">Feedback builds trust in automation</h5>
              <p className="text-[11px] text-gray-500 leading-relaxed font-medium">When AI parses a document, users are inherently skeptical. Explicitly highlighting what the system *isn't* sure about (the warning states) paradoxically increases trust in the fields it got right.</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-4">
            <img src={readOnlyIcon} alt="Read-only is faster than inputs" className="w-4 h-4 shrink-0 object-contain" />
            <div>
              <h5 className="text-[13px] font-bold text-gray-900 mb-2">Read-only is faster than inputs</h5>
              <p className="text-[11px] text-gray-500 leading-relaxed font-medium">Presenting data as text rather than inside input fields makes it easier to scan. By only using inputs for corrections, we shifted the user's cognitive mode from "data entry" to "proofreading."</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default function CaseStudy() {
  const { id } = useParams();
  const [activeGroup, setActiveGroup] = useState('problem');
  const observer = useRef(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Intersection Observer for Scroll Sync
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        // Find the sections currently visible in viewport
        const visibleSections = entries.filter((entry) => entry.isIntersecting);

        if (visibleSections.length > 0) {
          // Getting the ID of the topmost visible section
          const currentVisibleId = visibleSections[0].target.id;

          // Reverse map ID to its Parent Nav Group
          const group = NAV_GROUPS.find(g => g.sections.includes(currentVisibleId));
          if (group) {
            setActiveGroup(group.id);
          }
        }
      },
      { rootMargin: '-30% 0px -50% 0px' }
      // Adjust margins so the center/top third of screen triggers the state
    );

    const sectionElements = document.querySelectorAll('div[data-spy="section"]');
    sectionElements.forEach((el) => observer.current.observe(el));

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const handleNavClick = (groupId) => {
    const group = NAV_GROUPS.find(g => g.id === groupId);
    if (group) {
      // Scroll to the first section assigned to this group
      const targetElement = document.getElementById(group.sections[0]);
      if (targetElement) {
        const yOffset = -120; // Offset for sticky headers
        const y = targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-10">
      {/* Global Navigation */}
      <Navbar />

      {/* 2-Column Hero Redesign based on Figma Screenshot */}
      <section className="pt-32 pb-24 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

          {/* Left Column: Typography & Meta */}
          <div className="lg:col-span-6 flex flex-col items-start text-left animate-fade-in-up">
            {/* Pill Badge */}
            <div className="flex items-center gap-2 px-3 py-1 bg-white border border-gray-100 rounded-full mb-8 shadow-sm">
              <svg className="w-3 h-3 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              <span className="text-[11px] font-bold tracking-wider text-gray-600 uppercase pt-[1px]">Case Study</span>
            </div>

            {/* Huge Dynamic Header */}
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-extrabold tracking-tighter leading-[1.05] mb-6 text-[#2D2D35]">
              Workday<br />
              Application<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D78B65] to-[#B05B2F]">Redesign Experience</span>
            </h1>

            {/* Distinct Paragraph */}
            <p className="text-lg text-gray-500 leading-relaxed mb-10 xl:pr-10">
              A strategic redesign focused on reducing candidate drop-off by 40%, improving application speed, and eliminating repetitive data entry through intelligent automation and a modernized user interface.
            </p>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full mb-12 border-t border-b border-gray-100 py-8">
              <div>
                <dt className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-2">Role</dt>
                <dd className="text-sm font-semibold text-[#2D2D35]">UI UX Designer</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-2">Platform</dt>
                <dd className="text-sm font-semibold text-[#2D2D35]">Web App</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-2">Timeline</dt>
                <dd className="text-sm font-semibold text-[#2D2D35]">2 Weeks</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-2">Tools</dt>
                <dd className="text-sm font-semibold text-[#2D2D35]">Figma, Miro</dd>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => { document.getElementById('sec-01')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="px-8 py-3.5 bg-[#B05B2F] text-white rounded-full text-sm font-semibold shadow-xl shadow-[#B05B2F]/20 hover:-translate-y-1 transition-transform"
              >
                Explore Solution
              </button>
              <button
                onClick={() => { document.getElementById('sec-07')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="px-8 py-3.5 border-2 border-gray-100/80 text-gray-700 bg-white shadow-sm rounded-full text-sm font-semibold hover:bg-gray-50 hover:border-gray-200 transition-colors"
              >
                View Process
              </button>
            </div>
          </div>

          {/* Right Column: Image & Badges */}
          <div className="lg:col-span-6 relative w-full h-full flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full aspect-square max-w-[560px] bg-[#5fa8ff] rounded-[3rem] p-12 lg:p-16 shadow-2xl flex items-center justify-center mt-12 lg:mt-0"
            >

              {/* Floating Stat Badge Container */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute top-16 -left-6 sm:-left-12 bg-white rounded-2xl p-5 shadow-[0_20px_40px_rgba(0,0,0,0.1)] flex flex-col z-20 hover:scale-[1.05] transition-transform cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-3 h-3 rounded-full bg-green-300 shadow-[0_0_10px_rgba(134,239,172,0.8)]"></span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest relative top-[1px]">Completion Rate</span>
                </div>
                <div className="text-2xl font-black text-[#2D2D35] ml-5">+40%</div>
              </motion.div>

              {/* Central Dashboard Mockup */}
              <img
                src={id === 'workday-redesign' ? "/images/project_1_mockup_1774852722005.png" : "/images/project_2_mockup_1774852735028.png"}
                alt="System Mockup"
                className="relative z-10 w-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] hover:-translate-y-2 transition-transform duration-500 ease-out"
              />

            </motion.div>
          </div>

        </div>
      </section>

      {/* 2-Column Scroll Linked Layout */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative">

          {/* LEFT: Sticky Timeline Navigation */}
          <div className="hidden lg:block lg:col-span-3 relative pl-2 bg-[linear-gradient(to_bottom,#374151_50%,transparent_50%)] bg-[length:2px_8px] bg-repeat-y bg-right">
            <nav className="sticky top-32 pr-8">
              <ul className="space-y-12 flex flex-col relative">
                {NAV_GROUPS.map((group) => {
                  const isActive = activeGroup === group.id;
                  return (
                    <li key={group.id} className="relative">
                      {/* Interactive Dot (Optional Polish) 
                      <div className={`absolute -left-1 w-3 h-3 rounded-full mt-2 transition-colors duration-500 ${isActive ? 'bg-[#B05B2F]' : 'bg-gray-300 group-hover:bg-blue-400'}`}></div>
                      */}

                      <button
                        onClick={() => handleNavClick(group.id)}
                        className="flex flex-col text-left pl-8 w-full group transition-all duration-300"
                      >
                        <span
                          className={`font-['Caveat'] text-3xl font-bold tracking-tight transition-colors duration-300 ${isActive
                            ? 'text-[#B05B2F] underline decoration-wavy decoration-[#B05B2F] underline-offset-[6px]'
                            : 'text-gray-900 group-hover:text-blue-600'
                            }`}
                        >
                          {group.title}
                        </span>

                        <span className={`font-['Caveat'] text-[18px] tracking-wide mt-1 ml-1 font-medium transition-colors duration-300 w-full whitespace-pre-line ${isActive ? 'text-gray-700' : 'text-gray-400 group-hover:text-blue-500'}`}>
                          {group.subtitle}
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>

          {/* RIGHT: Scrollable Content Blocks */}
          <div className="lg:col-span-9 flex flex-col space-y-8 lg:pl-10">
            {SECTION_CONTENT.map((section) => {

              const isCustom = ['sec-01', 'sec-02', 'sec-03', 'sec-04', 'sec-05', 'sec-06', 'sec-07', 'sec-08', 'sec-09', 'sec-10'].includes(section.id);

              // Helper to split title "04. Solution Strategy" into "04" and "Solution Strategy" for the layout alignment
              const titleParts = section.title.split('. ');
              const sectionNum = titleParts.length > 1 ? titleParts[0] : '';
              const sectionName = titleParts.length > 1 ? titleParts[1] : section.title;

              return (
                <div
                  key={section.id}
                  id={section.id}
                  data-spy="section"
                  className="scroll-mt-32"
                >
                  {/* Render Custom Architecture based on ID */}
                  {section.id === 'sec-01' && <ProblemSection />}
                  {section.id === 'sec-02' && <ListeningSection />}
                  {section.id === 'sec-03' && <KeyUxProblemsSection />}
                  {section.id === 'sec-04' && <SolutionStrategySection />}
                  {section.id === 'sec-05' && <DesignGoalsSection />}
                  {section.id === 'sec-06' && <BeforeAfterSection />}
                  {section.id === 'sec-07' && <WhatDidIDoSection />}
                  {section.id === 'sec-08' && <ExperienceScreensSection />}
                  {section.id === 'sec-09' && <KeyScreensSection />}
                  {section.id === 'sec-10' && <ImpactLearningSection />}

                  {/* Render Standard Fallback for others */}
                  {!isCustom && (
                    <div className="flex flex-col">
                      <div className="flex items-center gap-3 mb-6">
                        {sectionNum && <span className="text-3xl font-extrabold text-[#B05B2F]">{sectionNum}</span>}
                        <h3 className="text-3xl font-bold text-gray-900">{sectionName}</h3>
                      </div>

                      <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100">
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                          {section.content}
                        </p>



                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>


    </div>
  )
}
