import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import screen1Img from '../assets/Screen1.png';
import screen2Img from '../assets/Screen2.png';
import screen3Img from '../assets/Screen3.png';
import screen4Img from '../assets/Screen4.png';
import finalImg1 from '../assets/Bugasura Final 1.png';
import finalImg2 from '../assets/Bugasura Final 2.png';
import finalImg3 from '../assets/Bugasura Final 3.png';
import defineApiImg from '../assets/Define API Test Logic.png';
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

import hero2Img from '../assets/hero2.png';

import { BUGASURA_NAV_GROUPS as NAV_GROUPS, BUGASURA_SECTION_CONTENT as SECTION_CONTENT } from '../components/Sections';

// CUSTOM SECTIONS
const ProblemSection = () => (
  <div className="flex flex-col">
    <div className="flex items-center gap-3 mb-8">
      <span className="text-3xl font-extrabold text-[#B05B2F]">01</span>
      <h3 className="text-3xl font-bold text-gray-900">Problem Framing</h3>
    </div>
    
    <div className="space-y-10">
      {/* What is Bugasura */}
      <div>
        <h4 className="text-[17px] font-bold text-gray-900 mb-3 tracking-tight">What is Bugasura</h4>
        <p className="text-[13px] text-gray-500 leading-relaxed font-medium pr-4">
          Bugasura is a QA test management SaaS platform designed to help engineering and QA teams create, organize, and execute test cases efficiently. At the heart of the platform is the test case creation popup — a high-frequency workflow that engineers and testers interact with multiple times daily.
        </p>
      </div>

      {/* Who are the users? */}
      <div>
        <h4 className="text-[17px] font-bold text-gray-900 mb-4 tracking-tight">Who are the users?</h4>
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <span className="w-[6px] h-[6px] rounded-full bg-[#B05B2F] shrink-0"></span>
            <span className="text-[13px] text-gray-500 font-medium">Manual QA testers (UI flow mindset)</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-[6px] h-[6px] rounded-full bg-[#B05B2F] shrink-0"></span>
            <span className="text-[13px] text-gray-500 font-medium">API / integration testers (logic & request mindset)</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="w-[6px] h-[6px] rounded-full bg-[#B05B2F] shrink-0"></span>
            <span className="text-[13px] text-gray-500 font-medium">Hybrid QA engineers working across functional and automated test layers (switching between both)</span>
          </li>
        </ul>
      </div>

      {/* Key Problems */}
      <div>
        <h4 className="text-[17px] font-bold text-gray-900 mb-5 tracking-tight">Key Problems</h4>
        <div className="space-y-3">
          {/* Item 1 */}
          <div className="bg-white rounded-lg py-4 px-5 border-l-[3px] border-[#B05B2F] shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
            <h5 className="font-bold text-[13px] text-gray-900 mb-1.5">Cognitive Overload</h5>
            <p className="text-[12px] text-gray-400 font-medium">Too many fields presented simultaneously, overwhelming users on first interaction.</p>
          </div>
          {/* Item 2 */}
          <div className="bg-white rounded-lg py-4 px-5 border-l-[3px] border-[#B05B2F] shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
            <h5 className="font-bold text-[13px] text-gray-900 mb-1.5">Mental Model Conflict</h5>
            <p className="text-[12px] text-gray-400 font-medium">Functional and API test types are mixed together, conflicting with how QA engineers think.</p>
          </div>
          {/* Item 3 */}
          <div className="bg-white rounded-lg py-4 px-5 border-l-[3px] border-[#B05B2F] shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
            <h5 className="font-bold text-[13px] text-gray-900 mb-1.5">No Step Flow</h5>
            <p className="text-[12px] text-gray-400 font-medium">The experience feels like a flat data-entry form rather than a guided, sequential workflow.</p>
          </div>
          {/* Item 4 */}
          <div className="bg-white rounded-lg py-4 px-5 border-l-[3px] border-[#B05B2F] shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
            <h5 className="font-bold text-[13px] text-gray-900 mb-1.5">Unnecessary Complexity</h5>
            <p className="text-[12px] text-gray-400 font-medium">API configuration is shown by default even for users who only need functional tests.</p>
          </div>
          {/* Item 5 */}
          <div className="bg-white rounded-lg py-4 px-5 border-l-[3px] border-[#B05B2F] shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
            <h5 className="font-bold text-[13px] text-gray-900 mb-1.5">Weak Hierarchy</h5>
            <p className="text-[12px] text-gray-400 font-medium">No clear visual priority — users can't immediately identify the most important actions.</p>
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="mt-12 bg-[#faf9f9] border border-[#d6a48a] rounded-xl py-6 px-6 md:px-10 shadow-sm max-w-full mx-auto w-fit">
        <p className="text-[#B05B2F] text-[15px] md:text-[17px] font-medium text-center">
          "The current experience behaves like a data-entry form rather than a guided workflow aligned with QA thinking."
        </p>
      </div>
    </div>
  </div>
);

const ListeningSection = () => (
  <div className="flex flex-col">
    <div className="flex items-center gap-3 mb-6">
      <div className="flex flex-col items-center">
        <span className="text-3xl font-extrabold text-[#B05B2F] leading-none">02</span>
        <div className="w-full h-[3px] bg-[#B05B2F] mt-1.5"></div>
      </div>
      <h3 className="text-3xl font-bold text-gray-900 leading-none">Design Goals</h3>
    </div>
    
    <p className="text-[13px] text-gray-500 mb-10 w-full md:w-3/4 leading-relaxed font-medium">
      Focused principles to reduce friction and improve workflow clarity for QA teams.
    </p>

    <div className="flex flex-col gap-4">
      {/* Goal 1 */}
      <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-100 shadow-[0_2px_15px_rgb(0,0,0,0.02)] flex items-start gap-6 w-full lg:w-3/4">
        <div className="bg-[#FFF4ED] px-3 py-1.5 rounded-lg shrink-0 mt-0.5 flex items-center justify-center">
          <span className="text-[#B05B2F] font-bold text-[11px] leading-none">01</span>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 text-[14px] mb-1.5">Separate Mental Models</h4>
          <p className="text-[13px] text-gray-400 font-medium leading-relaxed">Distinguish Functional vs API test creation flows to match how QA engineers think.</p>
        </div>
      </div>

      {/* Goal 2 */}
      <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-100 shadow-[0_2px_15px_rgb(0,0,0,0.02)] flex items-start gap-6 w-full lg:w-3/4">
        <div className="bg-[#FFF4ED] px-3 py-1.5 rounded-lg shrink-0 mt-0.5 flex items-center justify-center">
          <span className="text-[#B05B2F] font-bold text-[11px] leading-none">02</span>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 text-[14px] mb-1.5">Reduce Cognitive Load</h4>
          <p className="text-[13px] text-gray-400 font-medium leading-relaxed">Limit the number of visible fields at each step — show only what's needed, when it's needed.</p>
        </div>
      </div>

      {/* Goal 3 */}
      <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-100 shadow-[0_2px_15px_rgb(0,0,0,0.02)] flex items-start gap-6 w-full lg:w-3/4">
        <div className="bg-[#FFF4ED] px-3 py-1.5 rounded-lg shrink-0 mt-0.5 flex items-center justify-center">
          <span className="text-[#B05B2F] font-bold text-[11px] leading-none">03</span>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 text-[14px] mb-1.5">Progressive Disclosure</h4>
          <p className="text-[13px] text-gray-400 font-medium leading-relaxed">Reveal complexity only at the step where it's relevant, keeping early screens clean.</p>
        </div>
      </div>

      {/* Goal 4 */}
      <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-100 shadow-[0_2px_15px_rgb(0,0,0,0.02)] flex items-start gap-6 w-full lg:w-3/4">
        <div className="bg-[#FFF4ED] px-3 py-1.5 rounded-lg shrink-0 mt-0.5 flex items-center justify-center">
          <span className="text-[#B05B2F] font-bold text-[11px] leading-none">04</span>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 text-[14px] mb-1.5">Maintain Modal Structure</h4>
          <p className="text-[13px] text-gray-400 font-medium leading-relaxed">Keep the low-engineering-cost modal format; avoid full-page navigation overhaul.</p>
        </div>
      </div>

      {/* Goal 5 */}
      <div className="bg-white rounded-xl p-5 md:p-6 border border-gray-100 shadow-[0_2px_15px_rgb(0,0,0,0.02)] flex items-start gap-6 w-full lg:w-3/4">
        <div className="bg-[#FFF4ED] px-3 py-1.5 rounded-lg shrink-0 mt-0.5 flex items-center justify-center">
          <span className="text-[#B05B2F] font-bold text-[11px] leading-none">05</span>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 text-[14px] mb-1.5">Enable Type Switching</h4>
          <p className="text-[13px] text-gray-400 font-medium leading-relaxed">Allow users to switch between test types fluidly, without losing progress.</p>
        </div>
      </div>
    </div>

    {/* Note */}
    <div className="mt-10 bg-[#FFFaf6] rounded-xl py-4 flex items-center w-full lg:w-3/4 px-6 md:px-8 border border-[#FFF4ED]">
      <p className="text-[13px] text-gray-900 font-medium">
        <span className="text-[#B05B2F] font-bold">Note : </span> 
        Design prioritizes workflow clarity over feature exposure.
      </p>
    </div>
  </div>
);

const KeyUxProblemsSection = () => (
  <div className="flex flex-col w-full mb-12">
    <div className="flex items-center gap-3 mb-10">
      <div className="flex flex-col items-center">
        <span className="text-3xl font-extrabold text-[#B05B2F] leading-none">03</span>
        <div className="w-full h-[3px] bg-[#B05B2F] mt-1.5"></div>
      </div>
      <h3 className="text-3xl font-bold text-gray-900 leading-none">User Flow</h3>
    </div>

    {/* Flow Stages Bar */}
    <div className="bg-[#f8f9fa] rounded-xl py-4 px-6 md:px-12 flex justify-between items-center mb-8 text-[13px] font-bold text-gray-600 w-full lg:w-11/12 mx-auto">
      <span className="flex-1 text-center">Entry</span>
      <span className="text-[#B05B2F] font-bold">→</span>
      <span className="flex-1 text-center">Steps</span>
      <span className="text-[#B05B2F] font-bold">→</span>
      <span className="flex-1 text-center">Finalization</span>
    </div>

    {/* Flows Container */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8 w-full lg:w-11/12 mx-auto">
      
      {/* Functional Flow */}
      <div className="bg-white border border-[#EBF1FD] rounded-xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex flex-col h-full">
        <div className="bg-[#f4f7fb] px-6 py-4">
          <h4 className="text-[13px] font-bold text-blue-500">Functional Flow</h4>
        </div>
        <div className="p-6 flex flex-col items-center flex-1 bg-white">
          <div className="bg-[#f8f9fa] rounded-lg w-full py-4 px-5 text-[12px] font-medium text-gray-700 border border-gray-100">
            Screen 1 → Select Functional
          </div>
          <span className="text-gray-400 text-sm my-2.5">↓</span>
          <div className="bg-[#f8f9fa] rounded-lg w-full py-4 px-5 text-[12px] font-medium text-gray-700 border border-gray-100">
            Screen 2 → Scenario + Steps
          </div>
          <span className="text-gray-400 text-sm my-2.5">↓</span>
          <div className="bg-[#f8f9fa] rounded-lg w-full py-4 px-5 text-[12px] font-medium text-gray-700 border border-gray-100">
            Screen 3 → Tags + Requirements
          </div>
          <span className="text-gray-400 text-sm my-2.5">↓</span>
          <div className="bg-[#eef4ff] rounded-lg w-full py-4 px-5 text-[12px] font-medium text-blue-600 border border-blue-50 mt-auto">
            Create Test Case
          </div>
        </div>
      </div>

      {/* API Flow */}
      <div className="bg-white border border-[#FFFaf6] rounded-xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex flex-col h-full">
        <div className="bg-[#FFFaf6] px-6 py-4">
          <h4 className="text-[13px] font-bold text-[#B05B2F]">API Flow</h4>
        </div>
        <div className="p-6 flex flex-col items-center flex-1 bg-white">
          <div className="bg-white rounded-lg w-full py-4 px-5 text-[12px] font-medium text-gray-700 border border-[#fbdlc4]">
            Screen 1 → Select API
          </div>
          <span className="text-[#B05B2F] opacity-70 text-sm my-2.5">↓</span>
          <div className="bg-white rounded-lg w-full py-4 px-5 text-[12px] font-medium text-gray-700 border border-[#fbdlc4]">
            Screen 2 → Scenario (optional)
          </div>
          <span className="text-[#B05B2F] opacity-70 text-sm my-2.5">↓</span>
          <div className="bg-white rounded-lg w-full py-4 px-5 text-[12px] font-medium text-gray-700 border border-[#fbdlc4]">
            Screen 3 → API Logic + Config
          </div>
          <span className="text-[#B05B2F] opacity-70 text-sm my-2.5">↓</span>
          <div className="bg-[#FFFaf6] rounded-lg w-full py-4 px-5 text-[12px] font-medium text-gray-800 border border-[#fbdlc4] mt-auto">
            Create Test Case
          </div>
        </div>
      </div>

    </div>

    {/* Note */}
    <div className="bg-[#FFFaf6] rounded-xl py-4 px-6 md:px-8 border border-[#FFF4ED] w-full lg:w-11/12 mx-auto">
      <p className="text-[13px] text-gray-900 font-medium">
        <span className="text-[#B05B2F] font-bold">Note : </span> 
        Shared flow → diverges at final step based on test type
      </p>
    </div>
  </div>
);
const SolutionStrategySection = () => (
  <div className="flex flex-col w-full mb-12">
    <div className="flex items-center gap-3 mb-10">
      <div className="flex flex-col items-center">
        <span className="text-3xl font-extrabold text-[#B05B2F] leading-none">04</span>
        <div className="w-full h-[3px] bg-[#B05B2F] mt-1.5"></div>
      </div>
      <h3 className="text-3xl font-bold text-gray-900 leading-none">Key Interaction Decisions</h3>
    </div>

    <div className="flex flex-col gap-6 w-full">
      {/* Interaction 1 */}
      <div className="bg-white rounded-xl p-6 md:p-7 border border-gray-100 border-l-[4px] border-l-[#B05B2F] shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
        <h4 className="font-bold text-gray-900 text-[15px] mb-5">Reduced Dual-Mode Clutter</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#FFF5F5] rounded-md p-4 pb-5 border border-red-50/50">
            <h5 className="text-[9px] font-bold text-red-500 uppercase tracking-widest mb-1.5">Before</h5>
            <p className="text-[13px] text-gray-700 font-medium">Both Functional & API shown simultaneously</p>
          </div>
          <div className="bg-[#F0FDF4] rounded-md p-4 pb-5 border border-green-50/50">
            <h5 className="text-[9px] font-bold text-green-600 uppercase tracking-widest mb-1.5">After</h5>
            <p className="text-[13px] text-gray-700 font-medium">Single initial type selector; mode revealed after choice</p>
          </div>
          <div className="bg-[#FFF9F5] rounded-md p-4 pb-5 border border-orange-50/50">
            <h5 className="text-[9px] font-bold text-[#B05B2F] uppercase tracking-widest mb-1.5">Why</h5>
            <p className="text-[13px] text-gray-700 font-medium">Reduces distraction; aligns with user intent from step one</p>
          </div>
        </div>
      </div>

      {/* Interaction 2 */}
      <div className="bg-white rounded-xl p-6 md:p-7 border border-gray-100 border-l-[4px] border-l-[#B05B2F] shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
        <h4 className="font-bold text-gray-900 text-[15px] mb-5">Conditional Final Step</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#FFF5F5] rounded-md p-4 pb-5 border border-red-50/50">
            <h5 className="text-[9px] font-bold text-red-500 uppercase tracking-widest mb-1.5">Before</h5>
            <p className="text-[13px] text-gray-700 font-medium">Same finalization screen regardless of type</p>
          </div>
          <div className="bg-[#F0FDF4] rounded-md p-4 pb-5 border border-green-50/50">
            <h5 className="text-[9px] font-bold text-green-600 uppercase tracking-widest mb-1.5">After</h5>
            <p className="text-[13px] text-gray-700 font-medium">Screen 3 adapts — functional gets tags/req, API gets config</p>
          </div>
          <div className="bg-[#FFF9F5] rounded-md p-4 pb-5 border border-orange-50/50">
            <h5 className="text-[9px] font-bold text-[#B05B2F] uppercase tracking-widest mb-1.5">Why</h5>
            <p className="text-[13px] text-gray-700 font-medium">Prevents irrelevant fields from appearing; reduces confusion</p>
          </div>
        </div>
      </div>

      {/* Interaction 3 */}
      <div className="bg-white rounded-xl p-6 md:p-7 border border-gray-100 border-l-[4px] border-l-[#B05B2F] shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
        <h4 className="font-bold text-gray-900 text-[15px] mb-5">Preserved Step Structure</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#FFF5F5] rounded-md p-4 pb-5 border border-red-50/50">
            <h5 className="text-[9px] font-bold text-red-500 uppercase tracking-widest mb-1.5">Before</h5>
            <p className="text-[13px] text-gray-700 font-medium">Loose, unstructured field arrangement</p>
          </div>
          <div className="bg-[#F0FDF4] rounded-md p-4 pb-5 border border-green-50/50">
            <h5 className="text-[9px] font-bold text-green-600 uppercase tracking-widest mb-1.5">After</h5>
            <p className="text-[13px] text-gray-700 font-medium">Strict 3-step progression maintained across both types</p>
          </div>
          <div className="bg-[#FFF9F5] rounded-md p-4 pb-5 border border-orange-50/50">
            <h5 className="text-[9px] font-bold text-[#B05B2F] uppercase tracking-widest mb-1.5">Why</h5>
            <p className="text-[13px] text-gray-700 font-medium">Provides predictable rhythm; reduces decision fatigue per screen</p>
          </div>
        </div>
      </div>

      {/* Interaction 4 */}
      <div className="bg-white rounded-xl p-6 md:p-7 border border-gray-100 border-l-[4px] border-l-[#B05B2F] shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
        <h4 className="font-bold text-gray-900 text-[15px] mb-5">Maintained Modal Format</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#FFF5F5] rounded-md p-4 pb-5 border border-red-50/50">
            <h5 className="text-[9px] font-bold text-red-500 uppercase tracking-widest mb-1.5">Before</h5>
            <p className="text-[13px] text-gray-700 font-medium">Switching to a full page for more space</p>
          </div>
          <div className="bg-[#F0FDF4] rounded-md p-4 pb-5 border border-green-50/50">
            <h5 className="text-[9px] font-bold text-green-600 uppercase tracking-widest mb-1.5">After</h5>
            <p className="text-[13px] text-gray-700 font-medium">Retained modal — scoped, focused, no navigation cost</p>
          </div>
          <div className="bg-[#FFF9F5] rounded-md p-4 pb-5 border border-orange-50/50">
            <h5 className="text-[9px] font-bold text-[#B05B2F] uppercase tracking-widest mb-1.5">Why</h5>
            <p className="text-[13px] text-gray-700 font-medium">Low engineering overhead; maintains context switching speed</p>
          </div>
        </div>
      </div>

      {/* Interaction 5 */}
      <div className="bg-white rounded-xl p-6 md:p-7 border border-gray-100 border-l-[4px] border-l-[#B05B2F] shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
        <h4 className="font-bold text-gray-900 text-[15px] mb-5">Test Type Switching</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#FFF5F5] rounded-md p-4 pb-5 border border-red-50/50">
            <h5 className="text-[9px] font-bold text-red-500 uppercase tracking-widest mb-1.5">Before</h5>
            <p className="text-[13px] text-gray-700 font-medium">Restarting the flow to change type</p>
          </div>
          <div className="bg-[#F0FDF4] rounded-md p-4 pb-5 border border-green-50/50">
            <h5 className="text-[9px] font-bold text-green-600 uppercase tracking-widest mb-1.5">After</h5>
            <p className="text-[13px] text-gray-700 font-medium">Toggle accessible from step 1 to switch without losing work</p>
          </div>
          <div className="bg-[#FFF9F5] rounded-md p-4 pb-5 border border-orange-50/50">
            <h5 className="text-[9px] font-bold text-[#B05B2F] uppercase tracking-widest mb-1.5">Why</h5>
            <p className="text-[13px] text-gray-700 font-medium">Prevents user frustration when intent changes early</p>
          </div>
        </div>
      </div>

    </div>
  </div>
);

const DesignGoalsSection = () => (
  <div className="flex flex-col mb-16 w-full">
    <div className="flex items-center gap-3 mb-4">
      <div className="flex flex-col items-center">
        <span className="text-3xl font-extrabold text-[#B05B2F] leading-none">05</span>
        <div className="w-full h-[3px] bg-[#B05B2F] mt-1.5"></div>
      </div>
      <h3 className="text-3xl font-bold text-gray-900 leading-none">Final Screens</h3>
    </div>
    <p className="text-[13px] text-gray-500 mb-12 w-full md:w-3/4 leading-relaxed font-medium">
      Key improvements in workflow clarity and cognitive load reduction across 3 core screens.
    </p>

    <div className="space-y-16 w-full">
      
      {/* Row 1 */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-[3px] h-[14px] bg-gray-300"></div>
          <h4 className="text-[14px] font-bold text-gray-800 tracking-wider">Row 1 - Entry / Setup Screen</h4>
        </div>
        
        <div className="w-full mt-4">
          <img src={finalImg1} alt="Bugasura Final 1" className="w-full h-auto rounded-xl shadow-sm object-cover bg-gray-50" />
        </div>
      </div>

      {/* Row 2 */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-[3px] h-[14px] bg-gray-300"></div>
          <h4 className="text-[14px] font-bold text-gray-800 tracking-wider">Row 2 - Steps Screen</h4>
        </div>
        
        <div className="w-full mt-4">
          <img src={finalImg2} alt="Bugasura Final 2" className="w-full h-auto rounded-xl shadow-sm object-cover bg-gray-50" />
        </div>
      </div>

      {/* Row 3 */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-[3px] h-[14px] bg-gray-300"></div>
          <h4 className="text-[14px] font-bold text-gray-800 tracking-wider">Row 3 - Finalization Screen (Critical)</h4>
        </div>
        
        <div className="w-full mt-4">
          <img src={finalImg3} alt="Bugasura Final 3" className="w-full h-auto rounded-xl shadow-sm object-cover bg-gray-50" />
        </div>
      </div>
      
    </div>

    {/* Key Takeaway */}
    <div className="mt-16 bg-[#FFFaf6] border border-[#d6a48a] rounded-xl p-6 md:p-8 shadow-[0_2px_15px_rgb(0,0,0,0.02)] max-w-full w-full mx-auto relative overflow-hidden">
      {/* Edge decoration */}
      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#B05B2F]"></div>
      <h4 className="text-[14px] font-bold text-gray-900 mb-2 pl-2">Key Takeaway</h4>
      <p className="text-[13px] text-[#B05B2F] font-medium leading-relaxed pl-2">
        Three focused redesign decisions — type selection upfront, guided step structure, and conditional finalization — collectively reduce cognitive load, eliminate irrelevant complexity, and align the creation flow with how QA engineers actually think.
      </p>
    </div>
  </div>
);

const TradeoffsConstraintsSection = () => {
  const tradeoffs = [
    {
      title: "Single Flow vs Fully Split Experience",
      chosen: "Show only relevant fields at each step",
      notChosen: "Separate, dedicated flows for Functional and API test creation",
      why: "Separate flows improve clarity but add complexity and maintenance overhead; a shared structure keeps it faster and consistent while allowing divergence where needed."
    },
    {
      title: "Progressive Disclosure vs Full Visibility",
      chosen: "Shared 3-step flow with conditional final step",
      notChosen: "Display all fields upfront in a single screen",
      why: "Exposing all inputs at once increases cognitive load and slows down decision-making. Progressive disclosure keeps users focused, while still allowing access to advanced configuration when needed."
    },
    {
      title: "Modal-Based Flow vs Full-Page Experience",
      chosen: "Retained modal-based interaction",
      notChosen: "Convert test case creation into a full-page workflow",
      why: "A full-page flow allows more space but disrupts the quick, repeatable nature of test case creation. Keeping the modal ensures faster interactions and aligns with existing product behaviour."
    },
    {
      title: "Guided Flow vs Free-form Creation",
      chosen: "Step-by-step guided workflow",
      notChosen: "Single flexible form with no defined sequence",
      why: "Guidance reduces errors and helps users structure test cases correctly, especially for new or hybrid testers. While free-form input offers flexibility, it increases inconsistency and cognitive effort."
    },
    {
      title: "Deferred API Complexity vs Early Exposure",
      chosen: "API configuration introduced only in the final step",
      notChosen: "Expose API fields from the beginning of the flow",
      why: "Early exposure benefits API-heavy users but overwhelms functional testers. Deferring complexity ensures a cleaner experience for most users while still supporting advanced use cases when needed."
    },
    {
      title: "Flexibility vs System Consistency",
      chosen: "Lock users into a fixed test type after selection",
      notChosen: "Allow test type switching mid-creation",
      why: "In real workflows, test intent can evolve during creation. Allowing switching improves flexibility, while maintaining a structured flow ensures consistency."
    }
  ];

  return (
    <div className="flex flex-col mb-16 w-full">
      <div className="flex items-center gap-3 mb-10">
        <div className="flex flex-col items-center">
          <span className="text-3xl font-extrabold text-[#B05B2F] leading-none">06</span>
          <div className="w-full h-[3px] bg-[#B05B2F] mt-1.5"></div>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 leading-none">Trade-offs & Constraints</h3>
      </div>

      <div className="flex flex-col gap-5">
        {tradeoffs.map((item, index) => (
          <div key={index} className="bg-white rounded-xl p-6 md:p-7 border border-gray-100 border-l-[4px] border-l-[#B05B2F] shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
            
            <div className="w-full md:w-1/3 shrink-0">
              <h4 className="font-bold text-gray-900 text-[14px] leading-snug">{item.title}</h4>
            </div>

            <div className="w-full md:w-2/3 flex flex-col gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-[#F0FDF4] rounded-md p-3 pb-4 border border-green-50/50 h-full">
                  <div className="flex items-center gap-1.5 mb-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-green-600" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span className="text-[9px] font-bold text-green-600 uppercase tracking-widest leading-none mt-0.5">Chosen</span>
                  </div>
                  <p className="text-[12px] text-gray-800 font-medium">{item.chosen}</p>
                </div>
                
                <div className="bg-[#F8F9FA] rounded-md p-3 pb-4 border border-gray-100 h-full">
                  <div className="flex items-center gap-1.5 mb-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest leading-none mt-0.5">Not Chosen</span>
                  </div>
                  <p className="text-[12px] text-gray-500 font-medium">{item.notChosen}</p>
                </div>
              </div>

              <div className="bg-[#FFF9F5] rounded-md p-3 px-4 border border-orange-50/50 flex items-start gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#B05B2F] mt-[7px] shrink-0"></div>
                <p className="text-[12px] text-gray-700 font-medium leading-relaxed">
                  <span className="font-bold text-[#B05B2F]">Why: </span>{item.why}
                </p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

const ImpactAndOutcomesSection = () => (
  <div className="flex flex-col mb-16 w-full">
    <div className="flex items-center gap-3 mb-10">
      <div className="flex flex-col items-center">
        <span className="text-3xl font-extrabold text-[#B05B2F] leading-none">07</span>
        <div className="w-full h-[3px] bg-[#B05B2F] mt-1.5"></div>
      </div>
      <h3 className="text-3xl font-bold text-[#1F2432] tracking-tight leading-none">Impact & Outcomes</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-stretch">
      {/* Faster Test Case Creation */}
      <div className="bg-white rounded-xl p-6 border border-gray-50 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col h-full transform transition duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="bg-[#FFF8F5] px-4 py-3 rounded-lg mb-5 text-center shrink-0">
          <h4 className="font-bold text-[#B05B2F] text-[14px]">Faster Test Case Creation</h4>
        </div>
        <p className="text-[12px] text-gray-500 font-medium leading-[1.6]">
          A structured 3-step flow reduces unnecessary inputs and speeds up test creation for both new and experienced users.<br/><br/>Reduced Cognitive Load
        </p>
      </div>

      {/* Reduced Cognitive Load */}
      <div className="bg-white rounded-xl p-6 border border-gray-50 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col h-full transform transition duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="bg-[#FFF8F5] px-4 py-3 rounded-lg mb-5 text-center shrink-0">
          <h4 className="font-bold text-[#B05B2F] text-[14px]">Reduced Cognitive Load</h4>
        </div>
        <p className="text-[12px] text-gray-500 font-medium leading-[1.6]">
          Progressive disclosure ensures users focus only on relevant information at each step instead of processing everything at once.
        </p>
      </div>

      {/* Clear Separation of Test Types */}
      <div className="bg-white rounded-xl p-6 border border-gray-50 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col h-full transform transition duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="bg-[#FFF8F5] px-4 py-3 rounded-lg mb-5 text-center shrink-0">
          <h4 className="font-bold text-[#B05B2F] text-[14px]">Clear Separation of Test Types</h4>
        </div>
        <p className="text-[12px] text-gray-500 font-medium leading-[1.6]">
          Early distinction between Functional and API workflows eliminates confusion and aligns with user intent.
        </p>
      </div>

      {/* Better QA Workflow Alignment */}
      <div className="bg-white rounded-xl p-6 border border-gray-50 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col h-full transform transition duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="bg-[#FFF8F5] px-4 py-3 rounded-lg mb-5 text-center shrink-0">
          <h4 className="font-bold text-[#B05B2F] text-[14px]">Better QA Workflow Alignment</h4>
        </div>
        <p className="text-[12px] text-gray-500 font-medium leading-[1.6]">
          The step-based structure reflects how QA engineers naturally think &rarr; scenario &rarr; steps &rarr; validation.
        </p>
      </div>

      {/* Supports Future Test Types */}
      <div className="bg-white rounded-xl p-6 border border-gray-50 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col h-full transform transition duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="bg-[#FFF8F5] px-4 py-3 rounded-lg mb-5 text-center shrink-0">
          <h4 className="font-bold text-[#B05B2F] text-[14px]">Supports Future Test Types</h4>
        </div>
        <p className="text-[12px] text-gray-500 font-medium leading-[1.6]">
          A conditional flow allows easy extension for new test types without redesigning the entire experience.
        </p>
      </div>
    </div>
  </div>
);

const FutureOpportunitiesSection = () => (
  <div className="flex flex-col mb-16 w-full relative">
    <div className="flex items-center gap-3 mb-4">
      <div className="flex flex-col items-center">
        <span className="text-3xl font-extrabold text-[#B05B2F] leading-none">08</span>
        <div className="w-full h-[3px] bg-[#B05B2F] mt-1.5"></div>
      </div>
      <h3 className="text-3xl font-bold text-[#1F2432] tracking-tight leading-none">Future Opportunities</h3>
    </div>
    
    <p className="text-[13px] text-gray-500 mb-10 w-full md:w-3/4 leading-relaxed font-medium">
      Ideas to evolve the Bugasura test creation experience as the product matures.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full items-stretch">
      {/* Card 1 */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex flex-col hover:-translate-y-1 transition-transform duration-300">
        <div className="bg-[#FFF4ED] w-8 h-8 rounded-lg flex items-center justify-center mb-5 shrink-0 border border-[#fbdcd0]">
          <span className="text-[15px]">📋</span>
        </div>
        <h4 className="font-bold text-[#1F2432] text-[13px] mb-2">Test Case Templates</h4>
        <p className="text-[11px] text-gray-500 font-medium leading-[1.6]">
          Pre-built templates for common test scenarios — login, checkout, API health — to accelerate repeated workflows.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex flex-col hover:-translate-y-1 transition-transform duration-300">
        <div className="bg-[#FFF4ED] w-8 h-8 rounded-lg flex items-center justify-center mb-5 shrink-0 border border-[#fbdcd0]">
          <span className="text-[15px]">💡</span>
        </div>
        <h4 className="font-bold text-[#1F2432] text-[13px] mb-2">Smart Suggestions</h4>
        <p className="text-[11px] text-gray-500 font-medium leading-[1.6]">
          Contextual field suggestions based on module history: reuse previous scenarios, tags, and step patterns.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex flex-col hover:-translate-y-1 transition-transform duration-300">
        <div className="bg-[#FFF4ED] w-8 h-8 rounded-lg flex items-center justify-center mb-5 shrink-0 border border-[#fbdcd0]">
          <span className="text-[15px]">🤖</span>
        </div>
        <h4 className="font-bold text-[#1F2432] text-[13px] mb-2">AI-Assisted Step Generation</h4>
        <p className="text-[11px] text-gray-500 font-medium leading-[1.6]">
          Describe the feature in plain English and let AI draft test steps and expected results automatically.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] flex flex-col hover:-translate-y-1 transition-transform duration-300">
        <div className="bg-[#FFF4ED] w-8 h-8 rounded-lg flex items-center justify-center mb-5 shrink-0 border border-[#fbdcd0]">
          <span className="text-[15px]">🔄</span>
        </div>
        <h4 className="font-bold text-[#1F2432] text-[13px] mb-2">Reusable Test Blocks</h4>
        <p className="text-[11px] text-gray-500 font-medium leading-[1.6]">
          Modular step groups that can be imported across multiple test cases, enabling consistent regression suites.
        </p>
      </div>
    </div>
  </div>
);

export default function CaseStudy1() {
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
      <section className="pt-24 pb-20 px-6 lg:px-12 overflow-hidden bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">

          {/* Left Column: Typography & Meta */}
          <div className="lg:col-span-6 flex flex-col items-start text-left animate-fade-in-up">
            {/* Pill Badge */}
            <div className="flex items-center gap-2 px-3 py-1 bg-white border border-gray-100 rounded-full mb-8 shadow-sm">
              <svg className="w-3 h-3 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
              <span className="text-[11px] font-bold tracking-wider text-gray-600 uppercase pt-[1px]">Case Study</span>
            </div>

            {/* Huge Dynamic Header */}
            <h1 className="text-4xl sm:text-5xl lg:text-[46px] xl:text-[52px] font-bold tracking-tight leading-[1.1] mb-6 text-[#1A1A1A] w-[110%] max-w-[800px] xl:w-[130%]">
              Redesigning Test Case<br />
              Creation for <span className="text-[#9C4A22]">Clarity and</span><br className="hidden sm:block" />
              <span className="text-[#9C4A22]">Speed</span>
            </h1>

            {/* Distinct Paragraph */}
            <p className="text-[17px] text-gray-600 leading-[1.6] mb-8 lg:pr-10">
              Simplifying Bugasura's test case popup by reducing cognitive load and aligning with real QA workflows.
            </p>

            {/* Pills */}
            <div className="flex flex-wrap items-center gap-3 mb-12">
              <span className="bg-white px-4 py-2 rounded-full text-[11px] font-semibold text-gray-700 shadow-sm flex items-center gap-2 border border-gray-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B05B2F]"></span>
                Structured 3-step workflow
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-[11px] font-semibold text-gray-700 shadow-sm flex items-center gap-2 border border-gray-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#008080]"></span>
                Functional vs API separation
              </span>
              <span className="bg-white px-4 py-2 rounded-full text-[11px] font-semibold text-gray-700 shadow-sm flex items-center gap-2 border border-gray-100">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7C6558]"></span>
                Reduced cognitive load
              </span>
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-3 gap-8 w-full mb-12 border-t border-gray-200 py-6 max-w-lg">
              <div>
                <dt className="text-[9px] font-bold text-gray-400 tracking-widest mb-1.5">ROLE</dt>
                <dd className="text-[13px] font-bold text-[#1A1A1A]">UX Designer</dd>
              </div>
              <div>
                <dt className="text-[9px] font-bold text-gray-400 tracking-widest mb-1.5">DURATION</dt>
                <dd className="text-[13px] font-bold text-[#1A1A1A]">3 Days</dd>
              </div>
              <div>
                <dt className="text-[9px] font-bold text-gray-400 tracking-widest mb-1.5">PLATFORM</dt>
                <dd className="text-[13px] font-bold text-[#1A1A1A]">Web (SaaS)</dd>
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
          <div className="lg:col-span-6 relative w-full h-full flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative w-full max-w-[600px]">
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 w-full"
              >
                <img
                  src={defineApiImg}
                  alt="Bugasura Modal Design"
                  className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)] rounded-xl object-contain bg-white border border-gray-100"
                />
              </motion.div>

              {/* Floating Stat Badge */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-6 lg:-left-12 -left-4 bg-white rounded-xl p-4 shadow-[0_15px_35px_rgba(0,0,0,0.06)] flex items-center gap-4 z-20 border border-gray-100/50 hover:scale-[1.02] transition-transform cursor-pointer"
              >
                <div className="bg-[#E6F3F3] p-2.5 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-[#008080] font-bold text-sm leading-none">&lt;/&gt;</span>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Optimization</div>
                  <div className="text-[15px] font-extrabold text-[#1A1A1A] leading-tight">-40% Interaction Time</div>
                </div>
              </motion.div>

            </div>
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
                  {section.id === 'sec-06' && <TradeoffsConstraintsSection />}
                  {section.id === 'sec-07' && <ImpactAndOutcomesSection />}
                  {section.id === 'sec-08' && <FutureOpportunitiesSection />}

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
