import {
  FaUserCircle,
  FaChartLine,
  FaCube,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import {
  FaBriefcase,
  FaUserTie,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";

export const features = [
  {
    icon: FaUserCircle,
    title: "Hyper-Personalized",
    subtitle: "1:1 Growth Programs",
  },
  {
    icon: FaChartLine,
    title: "Accurate &",
    subtitle: "Tangible Results",
  },
  { icon: FaCube, title: "Multi-Dimensional", subtitle: "Success" },
];

// ====================================================================
// Targeted Audience
export const targetAudiences = [
  {
    icon: FaBriefcase,
    title: "For Entrepreneurs",
    description:
      "Ready to take your business to new heights? Build profitable states and develop certain forms of business artistry.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=600&fit=crop",
  },
  {
    icon: FaUserTie,
    title: "For Professionals",
    description:
      "Elevate your career and become a leader. Navigate complex decisions & breakthrough smartly.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop",
  },
  {
    icon: FaGraduationCap,
    title: "For Students",
    description:
      "Start building a powerful future early. Unlock your true potential, helping transform how they do.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&h=600&fit=crop",
  },
  {
    icon: FaUsers,
    title: "For Families",
    description:
      "Bring joy back into your relationships. Transform your individually and collective one another at a deeper level.",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=500&h=600&fit=crop",
  },
];

// ==================================================================================================================
// Frequently Asked Questions

export const faqs = [
  {
    question: "What kind of results have your members seen?",
    answer:
      "Our members have experienced transformative results: scaling from ₹100 Cr to ₹400 Cr in just 18 months, doubling revenue within 3 months, promoting to leadership roles 5-9 years ahead of schedule, and tripling business/revenue while creating more time for family — all within 2 years.",
  },
  // {
  //   question: "How is this different from any other growth program?",
  //   answer: "Unlike traditional programs that focus on surface-level tactics, we use neuroscience-backed brain training to create lasting behavioral change. Our unique approach combines cognitive science, personalized coaching, and practical implementation to ensure sustainable growth across all life areas."
  // },
  {
    question: "Do you use any kind of machines or medicines to do this?",
    answer:
      "No, we don't use any machines or medicines. Our program is based entirely on proven brain science principles, cognitive exercises, and behavioral psychology. We help you rewire your brain naturally through structured practices and scientifically-validated techniques.",
  },
  {
    question: "Is this only in person? Or online as well?",
    answer:
      "We offer both in-person and online formats to suit your preferences. Our online program includes live interactive sessions, recorded content for flexibility, and a dedicated community platform. In-person intensive workshops are also available for those who prefer face-to-face learning.",
  },
  {
    question: "What exactly happens in a session?",
    answer:
      "Each session combines neuroscience education, practical exercises, group discussions, and personalized coaching. You'll learn brain optimization techniques, work on real-life challenges, receive feedback from coaches, and create actionable implementation plans. Sessions are highly interactive and results-focused.",
  },
];

// =======================================================================================================================
// Action Cards Dara

export const actionCards = [
  {
    title: "Need Answers?",
    subtitle: "Reach out to us",
    button: "WHATSAPP US",
    icon: FaWhatsapp,
    link: "#",
    colors: "from-green-400 via-green-500 to-green-900",
  },
  {
    title: "Want to Visit Us?",
    subtitle: "Drop By",
    button: "VIEW LOCATION",
    icon: MdLocationOn,
    link: "#",
    colors: "from-blue-400 via-teal-500 to-green-600",
  },
  {
    title: "Need Insights?",
    subtitle: "Check out our Social Media",
    button: "VISIT INSTAGRAM",
    icon: FaInstagram,
    link: "#",
    colors: "from-yellow-400 via-pink-500 to-purple-600",
  },
  {
    title: "Science behind?",
    subtitle: "Check our case studies",
    button: "CASE STUDIES",
    icon: IoDocumentText,
    link: "#",
    colors: "from-purple-400 via-purple-500 to-indigo-600",
  },
];
