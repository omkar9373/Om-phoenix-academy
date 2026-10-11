import facultyFelicitationImg from '../assets/gallery/faculty-felicitation-framed.png';
import studentAwardImg from '../assets/gallery/student-felicitation-award.jpg';
import studentMentorImg from '../assets/gallery/student-mentor-guidance.png';
import birthdayCelebrationImg from '../assets/gallery/academy-birthday-celebration.jpg';
import grandOpeningImg from '../assets/grand-opning.jpeg';
import admissionImg from '../assets/adsmition.jpeg';
import vedikaImg from '../assets/vedika.jpeg';
import harshadaImg from '../assets/harshada.jpeg';
import aniketImg from '../assets/aniket.jpeg';

export const galleryCategories = [
  'All',
  'Felicitations & Awards',
  'Celebrations & Events',
  'Academic Toppers',
  'Academy Life'
];

export const galleryItems = [
  {
    id: 1,
    title: 'Faculty Felicitation & Honour',
    category: 'Felicitations & Awards',
    image: facultyFelicitationImg,
    tag: 'Felicitation',
    description: 'Special felicitation ceremony honouring dedicated faculty and academic leadership at Om Phoenix Learning Academy.',
    featured: true
  },
  {
    id: 2,
    title: 'Student Award & Recognition',
    category: 'Felicitations & Awards',
    image: studentAwardImg,
    tag: 'Student Honour',
    description: 'Recognizing student diligence, exemplary conduct, and milestones with special tokens of appreciation.',
    featured: true
  },
  {
    id: 3,
    title: 'Academy Birthday & Milestone Celebration',
    category: 'Celebrations & Events',
    image: birthdayCelebrationImg,
    tag: 'Celebration',
    description: 'Heartfelt celebrations with faculty, students, and well-wishers marking special milestones with warmth and joy.',
    featured: true
  },
  {
    id: 4,
    title: 'One-on-One Mentorship & Guidance',
    category: 'Academy Life',
    image: studentMentorImg,
    tag: 'Mentorship',
    description: 'Personalized mentoring and career guidance sessions nurturing confident learners and future leaders.',
    featured: true
  },
  {
    id: 5,
    title: 'Grand Opening Ceremony',
    category: 'Celebrations & Events',
    image: grandOpeningImg,
    tag: 'Inauguration',
    description: 'Inaugural ceremony marking the beginning of our mission to transform potential into excellence.',
    featured: false
  },
  {
    id: 6,
    title: 'Academic Admissions & Counselling Desk',
    category: 'Academy Life',
    image: admissionImg,
    tag: 'Admissions',
    description: 'Comprehensive admission orientation and counselling for JEE, NEET, and MHT-CET aspirants.',
    featured: false
  },
  {
    id: 7,
    title: 'Vedika Bansode - JEE 98.00% Percentile',
    category: 'Academic Toppers',
    image: vedikaImg,
    tag: 'JEE Achiever',
    description: 'Celebrating stellar performance in JEE Main with 98.00 percentile through structured preparation.',
    featured: false
  },
  {
    id: 8,
    title: 'Aniket Kundgir - JEE 99.55% Percentile',
    category: 'Academic Toppers',
    image: aniketImg,
    tag: 'JEE Top Ranker',
    description: 'Outstanding achievement securing 99.55 percentile in JEE, setting benchmarks of academic excellence.',
    featured: false
  },
  {
    id: 9,
    title: 'Harshada Navale - X-Board Topper',
    category: 'Academic Toppers',
    image: harshadaImg,
    tag: 'Board Topper',
    description: 'Proud topper in 10th Board examinations, demonstrating the impact of focused concept clarity.',
    featured: false
  }
];
