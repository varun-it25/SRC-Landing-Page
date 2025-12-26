import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Calendar, Clock, MapPin, Instagram, Linkedin, 
  Youtube, ArrowRight, Users, Award, Ticket, 
  PlayCircle, ChevronLeft, ChevronRight, ExternalLink, Phone, Mail 
} from 'lucide-react';

// --- Assets ---
import girl_home from '@/assets/girl_home.png';
import mukesh_img from '@/assets/mukesh_sir_new.jpg'; 
import himanshu_img from '@/assets/Himanshu_new.jpg'; 
import flyer1 from '@/assets/event_1.png'; 
import flyer2 from '@/assets/event_2.png'; 

// --- Types ---
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface Session {
  id: number;
  title: string;
  date: string;
  time: string;
  speakerName: string;
  description: string;
  flyer: string;
}

interface Speaker {
  id: number;
  name: string;
  designation: string;
  photo: string;
  topic: string;
  date: string;
}

interface VideoSession {
  id: string;
  day: string;
  title: string;
  speaker: string;
  videoId: string;
}

// --- Data ---
const sessions: Session[] = [
  {
    id: 1,
    title: "Power of Thoughts",
    date: "26 Dec, 2025",
    time: "6:00 AM - 7:30 AM",
    speakerName: "Prof. Mukesh Agarwal",
    description: "Discover how your thoughts shape your reality. This session delves into the mechanism of the mind, teaching practical techniques to harness positive thinking for personal transformation and success.",
    flyer: flyer1
  },
  {
    id: 2,
    title: "Secrets of Mind",
    date: "27 Dec, 2025",
    time: "6:00 AM - 7:30 AM",
    speakerName: "Dr. Himanshu Goel",
    description: "Unlock the hidden potential of your subconscious. A scientific and spiritual approach to understanding mental patterns, emotional resilience, and the art of mastering your own consciousness.",
    flyer: flyer2
  }
];

const speakers: Speaker[] = [
  {
    id: 1,
    name: "Prof. Mukesh Agarwal",
    designation: "Head, Spiritual Research Cell & Director, Training Cell, JECRC",
    photo: mukesh_img,
    topic: "Power of Thoughts",
    date: "26 Dec, 2025"
  },
  {
    id: 2,
    name: "Dr. Himanshu Goel",
    designation: "M.B.B.S., Motivational Speaker & Spiritual Leader",
    photo: himanshu_img,
    topic: "Secrets of Mind",
    date: "27 Dec, 2025"
  }
];

// Previous Enlightenment Videos
const pastVideos: VideoSession[] = [
  {
    id: "1",
    day: "Day 1",
    title: "Art of Self Reflection",
    speaker: "Ms. Chitra Khandelwal",
    videoId: "jYHY_M2U1O4"
  },
  {
    id: "2",
    day: "Day 2",
    title: "Unlocking Inner Potential",
    speaker: "Mr. Divyesh Bhandari",
    videoId: "ZYd71QsBfiQ"
  },
  {
    id: "3",
    day: "Day 3",
    title: "Mindful Diet for Blissful Life",
    speaker: "Dr. Karamjit Sandhu",
    videoId: "rXlknXkVrHQ"
  }
];

const Enlightenment = () => {
  // --- Timer Logic ---
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date("2025-12-26T18:00:00") - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  
  // Carousel States
  const [currentSessionIndex, setCurrentSessionIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Session Carousel Handlers
  const nextSession = () => {
    setCurrentSessionIndex((prev) => (prev + 1) % sessions.length);
  };
  const prevSession = () => {
    setCurrentSessionIndex((prev) => (prev - 1 + sessions.length) % sessions.length);
  };

  // Video Carousel Handlers
  const nextVideo = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % pastVideos.length);
  };
  const prevVideo = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + pastVideos.length) % pastVideos.length);
  };

  return (
    <div className='w-screen h-screen flex flex-col overflow-auto bg-zinc-50'>
      <Navbar />

      <main className='flex-1 w-full'>
        
        {/* --- Hero Section --- */}
        <section className='flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-12 lg:px-20 lg:py-24 max-w-7xl mx-auto'>
          <div className='w-full lg:w-1/2 flex flex-col items-start space-y-6 lg:pr-10 mt-10 lg:mt-0'>
            
            <div className="space-y-4">
              {/* Labels Row */}
              <div className="flex flex-wrap gap-3">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full uppercase tracking-wider">
                  Annual Online Event
                </span>
                <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded-full uppercase tracking-wider border border-red-200 animate-pulse">
                  Live on Zoom
                </span>
              </div>

              {/* Title & Subheading */}
              <div>
                <h1 className='text-4xl sm:text-6xl font-bold text-green-800 leading-tight'>
                  Enlightenment <span className='text-green-800'>9.0</span>
                </h1>
                <p className="text-lg sm:text-2xl font-medium text-zinc-500 mt-2">
                  Bringing good habits this new year
                </p>
              </div>
            </div>
            
            <p className='text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-lg'>
              Join us for a transformative journey of mindfulness. Awaken your potential and find inner peace.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto text-sm font-medium text-zinc-700">
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg border shadow-sm">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span>26 - 28 Dec, 2025</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg border shadow-sm">
                <Clock className="w-5 h-5 text-blue-600" />
                <span>6:00 PM - 7:30 PM</span>
              </div>
            </div>

            <div className="pt-4">
              <a href="https://forms.gle/qnnjxhtDitGfLaP39" target="_blank" rel="noreferrer">
                <Button className="px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all bg-blue-600 hover:bg-blue-700">
                  Register Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>

          <div className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
            <div className='relative w-full max-w-md lg:max-w-lg aspect-square flex justify-center items-center'>
                <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-50 scale-90"></div>
                <img 
                    src={girl_home} 
                    alt="Floating girl" 
                    className='relative z-10 w-full h-auto object-contain animate-float-meditate drop-shadow-xl'
                />
            </div>
          </div>
        </section>

        {/* --- Timer --- */}
        <section className="w-full bg-white py-12 border-y">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-xl font-semibold text-zinc-500 mb-8 uppercase tracking-widest">Event Starts In</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center bg-zinc-50 p-6 rounded-2xl border border-zinc-100 shadow-sm">
                  <span className="text-5xl font-bold text-blue-600 tabular-nums">{value}</span>
                  <span className="text-sm font-medium text-zinc-400 uppercase mt-2">{unit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        

        {/* --- Session Highlights (CAROUSEL WITH FLYERS) --- */}
        <section className="py-24 px-6 bg-blue-50/50">
           <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-zinc-800 text-center mb-12">Session Spotlights</h2>
              
              <div className="relative">
                {/* Carousel Container */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-zinc-100 min-h-[600px] flex flex-col md:flex-row relative z-10">
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSessionIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col md:flex-row w-full h-full"
                    >
                        {/* LEFT: Flyer Image (9:16 optimized) */}
                        <div className="w-full md:w-5/12 lg:w-4/12 bg-zinc-900 relative h-[500px] md:h-auto overflow-hidden group">
                           <div 
                              className="absolute inset-0 bg-cover bg-center blur-xl opacity-30"
                              style={{ backgroundImage: `url(${sessions[currentSessionIndex].flyer})` }}
                           ></div>
                           <img 
                              src={sessions[currentSessionIndex].flyer} 
                              alt="Event Flyer" 
                              className="relative z-10 w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                           />
                        </div>

                        {/* RIGHT: Content */}
                        <div className="w-full md:w-7/12 lg:w-8/12 p-8 md:p-12 flex flex-col justify-center space-y-6">
                            <div className="space-y-2">
                                <div className="flex flex-wrap gap-3">
                                  <span className="px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-bold rounded-full uppercase tracking-wide">
                                    {sessions[currentSessionIndex].date}
                                  </span>
                                  <span className="px-4 py-1.5 bg-zinc-100 text-zinc-600 text-sm font-semibold rounded-full flex items-center gap-2">
                                    <Clock size={16} /> {sessions[currentSessionIndex].time}
                                  </span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-blue-900">
                                  {sessions[currentSessionIndex].title}
                                </h3>
                            </div>
                            
                            <div className="space-y-2">
                              <p className="text-sm text-zinc-400 uppercase tracking-widest font-semibold">Speaker</p>
                              <p className="text-xl font-medium text-zinc-800">{sessions[currentSessionIndex].speakerName}</p>
                            </div>

                            <p className="text-lg text-zinc-600 leading-relaxed">
                               {sessions[currentSessionIndex].description}
                            </p>

                            <div className="pt-4">
                              <a href="https://forms.gle/qnnjxhtDitGfLaP39" target="_blank" rel="noreferrer">
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                                  Register for this Session
                                </Button>
                              </a>
                            </div>
                        </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <button 
                    onClick={prevSession}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-zinc-800 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110"
                  >
                    <ChevronLeft size={28} />
                  </button>
                  <button 
                    onClick={nextSession}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-zinc-800 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110"
                  >
                    <ChevronRight size={28} />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {sessions.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSessionIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          idx === currentSessionIndex ? "bg-blue-600 w-8" : "bg-zinc-300 hover:bg-zinc-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
           </div>
        </section>

        {/* --- Speakers Section --- */}
        <section className="bg-zinc-100 py-20 px-6 sm:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-zinc-800 text-center mb-12">Distinguished Speakers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {speakers.map((speaker) => (
                <div key={speaker.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-200 flex flex-col sm:flex-row">
                  <div className="w-full sm:w-2/5 aspect-[4/5] sm:aspect-auto sm:h-auto overflow-hidden bg-zinc-200">
                    <img 
                      src={speaker.photo} 
                      alt={speaker.name} 
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col justify-center w-full sm:w-3/5">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-zinc-800">{speaker.name}</h3>
                      <p className="text-sm font-medium text-blue-600 mt-1">{speaker.designation}</p>
                    </div>
                    
                    <div className="space-y-2 text-sm text-zinc-600">
                      <div className="flex items-start gap-2">
                        <Calendar className="w-4 h-4 mt-0.5 text-zinc-400" />
                        <span>{speaker.date}</span>
                      </div>
                      <div className="flex items-start gap-2">
                         <div className="w-4 h-4 mt-0.5 flex items-center justify-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                         </div>
                        <span className="font-semibold text-zinc-700">Topic: {speaker.topic}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- About The Event --- */}
        <section className="max-w-4xl mx-auto py-20 px-6 sm:px-12 space-y-10 text-center">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold text-zinc-800">About Enlightenment</h2>
                <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <blockquote className="text-xl font-medium text-zinc-700 italic border-l-4 border-blue-500 pl-4 py-2 bg-blue-50/50 rounded-r-lg inline-block text-left mx-auto max-w-3xl">
              "Meditation is a process of lightening up, of trusting the basic goodness of what we have, who we are and of realizing that any wisdom that exists in what we already have."
            </blockquote>

            <p className="text-lg text-zinc-600 leading-relaxed text-justify sm:text-center max-w-3xl mx-auto">
              This profound quote sets the tone for the transformative experience that unfolds during every edition of our annual event "ENLIGHTENMENT". 
              Featuring daily sessions by distinguished guest speakers, the event attracts registrations from all across the country. 
              It is a celebration of wisdom, inner silence, and holistic well-being.
            </p>
        </section>

        {/* --- Key Highlights --- */}
        <section className="bg-zinc-800 text-white py-16 px-6">
           <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="flex flex-col items-center p-6 bg-zinc-700/50 rounded-xl border border-zinc-600 hover:bg-zinc-700 transition-colors">
                      <div className="p-4 bg-blue-600 rounded-full mb-4">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Open For All</h3>
                      <p className="text-zinc-300">Students, Professionals, and Retired individuals are all welcome.</p>
                  </div>
                  <div className="flex flex-col items-center p-6 bg-zinc-700/50 rounded-xl border border-zinc-600 hover:bg-zinc-700 transition-colors">
                      <div className="p-4 bg-blue-600 rounded-full mb-4">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Certification</h3>
                      <p className="text-zinc-300">Certificates will be awarded to participants with 100% attendance.</p>
                  </div>
                  <div className="flex flex-col items-center p-6 bg-zinc-700/50 rounded-xl border border-zinc-600 hover:bg-zinc-700 transition-colors">
                      <div className="p-4 bg-blue-600 rounded-full mb-4">
                        <Ticket className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Free Entry</h3>
                      <p className="text-zinc-300">No cost involved. Experience this transformative journey for free.</p>
                  </div>
              </div>
           </div>
        </section>

        {/* --- Previous Playlist Section (VIDEO CAROUSEL) --- */}
        <section className="bg-white py-24 px-6 border-t border-zinc-100">
            <div className="max-w-5xl mx-auto space-y-12">
                <div className="text-center space-y-3">
                    <h2 className="text-3xl font-bold text-zinc-800">Witness the Legacy</h2>
                    <p className="text-zinc-500 max-w-xl mx-auto">
                        Explore the wisdom shared in our previous edition. Watch the full sessions from Enlightenment 8.0.
                    </p>
                </div>
                
                {/* Video Carousel */}
                <div className="relative max-w-4xl mx-auto">
                  <div className="overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl relative aspect-video">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentVideoIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full relative"
                      >
                        {/* Video Card Content */}
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
                           <div className="space-y-2 max-w-2xl">
                              <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded uppercase tracking-wider mb-2">
                                {pastVideos[currentVideoIndex].day}
                              </span>
                              <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                                {pastVideos[currentVideoIndex].title}
                              </h3>
                              <p className="text-zinc-300 font-medium text-lg">
                                By {pastVideos[currentVideoIndex].speaker}
                              </p>
                              
                              <div className="pt-4">
                                <a 
                                  href={`https://www.youtube.com/watch?v=${pastVideos[currentVideoIndex].videoId}`} 
                                  target="_blank" 
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-zinc-200 transition-colors"
                                >
                                  <PlayCircle size={20} fill="black" className="text-black" />
                                  Watch Now
                                </a>
                              </div>
                           </div>
                        </div>

                        {/* Thumbnail Background */}
                        <img 
                          src={`https://img.youtube.com/vi/${pastVideos[currentVideoIndex].videoId}/maxresdefault.jpg`} 
                          alt={pastVideos[currentVideoIndex].title}
                          className="absolute inset-0 w-full h-full object-cover opacity-80"
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button 
                      onClick={prevVideo}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-all border border-white/10"
                    >
                      <ChevronLeft size={32} />
                    </button>
                    <button 
                      onClick={nextVideo}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition-all border border-white/10"
                    >
                      <ChevronRight size={32} />
                    </button>
                  </div>

                  {/* Thumbs / Dots Indicator */}
                  <div className="flex justify-center gap-4 mt-8">
                    {pastVideos.map((video, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentVideoIndex(idx)}
                        className={`group relative overflow-hidden rounded-lg transition-all duration-300 ${
                          idx === currentVideoIndex ? "w-32 ring-2 ring-blue-600 ring-offset-2" : "w-16 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <div className="aspect-video bg-zinc-200">
                          <img 
                            src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`} 
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-center pt-4">
                  <a 
                      href="https://youtube.com/playlist?list=PLiwKzqDKBF2ozfSTbiwqAyxtKKNrm4xiK&si=axmwxIHouIAuuQ6Y" 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center text-zinc-400 hover:text-blue-600 transition-colors text-sm font-medium"
                  >
                      View Full Playlist <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
            </div>
        </section>

       {/* --- Registration & Contact Section (NEW DESIGN) --- */}
        <section className="py-20 px-4 sm:px-28 w-full bg-zinc-50 border-t border-zinc-200">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">

            {/* Left: Contact Info & Socials (Matching ContactSection Design) */}
            <div className="w-full border relative flex flex-col justify-between bg-blue-600 rounded-xl overflow-hidden shadow-lg h-full">
              <div className="text-white p-8 space-y-8 flex-1">
                <h3 className="text-3xl font-semibold mb-4">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Phone size={24} className="text-blue-200" />
                    <p className="text-lg">+91 9982682431</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail size={24} className="text-blue-200" />
                    <p className="text-lg">src@jecrc.ac.in</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin size={24} className="text-blue-200" />
                    <p className="text-lg">JECRC Foundation, Jaipur</p>
                  </div>
                </div>
              </div>

              {/* Social Buttons (Round Design) */}
              <div className="bg-blue-700/50 p-6 flex items-center justify-around w-full">
                 <a href="https://www.instagram.com/spiritual_research_cell/" target="_blank" rel="noreferrer">
                    <button className="w-12 h-12 shadow-md flex justify-center items-center rounded-full bg-blue-500 hover:bg-white text-white hover:text-blue-500 transition-colors">
                      <Instagram size={20} />
                    </button>
                 </a>
                 <a href="https://www.youtube.com/@spiritualresearchcelljecrc" target="_blank" rel="noreferrer">
                    <button className="w-12 h-12 shadow-md flex justify-center items-center rounded-full bg-blue-500 hover:bg-white text-white hover:text-blue-500 transition-colors">
                      <Youtube size={20} />
                    </button>
                 </a>
                 <a href="https://www.linkedin.com/in/spiritual-research-cell-jecrc/" target="_blank" rel="noreferrer">
                    <button className="w-12 h-12 shadow-md flex justify-center items-center rounded-full bg-blue-500 hover:bg-white text-white hover:text-blue-500 transition-colors">
                      <Linkedin size={20} />
                    </button>
                 </a>
                 <a href="https://www.google.com/maps/place/JECRC+Foundation/@26.7819785,75.8199375,623m/data=!3m2!1e3!4b1!4m6!3m5!1s0x396dc9763e6030f1:0x4137675e5cf54360!8m2!3d26.7819785!4d75.8225124!16s%2Fg%2F1tf7w3jk?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D" target="_blank" rel="noreferrer">
                    <button className="w-12 h-12 shadow-md flex justify-center items-center rounded-full bg-blue-500 hover:bg-white text-white hover:text-blue-500 transition-colors">
                      <MapPin size={20} />
                    </button>
                 </a>
              </div>
            </div>

            {/* Right: Register CTA */}
            <div className="w-full flex flex-col justify-center items-start space-y-8 p-4">
              <h2 className="text-4xl font-bold text-zinc-800">Ready to Transform?</h2>
              <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
              <p className="text-xl text-zinc-600 leading-relaxed">
                Don't miss this opportunity to learn from the best. Secure your free spot now and embark on this journey of self-discovery.
              </p>
              
              <a 
                  href="https://forms.gle/qnnjxhtDitGfLaP39" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-block w-full sm:w-auto"
              >
                  <Button size="lg" className="w-full sm:w-auto px-12 py-8 text-xl rounded-full bg-blue-600 hover:bg-blue-700 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
                      Register Now <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
              </a>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Enlightenment;