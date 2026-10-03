// Sample event data (no backend yet - this will come from a database in later experiments)
const events = [
  {
    id: 1,
    name: "TechFest 2026",
    category: "Technology",
    date: "15 November 2026",
    time: "9:00 AM – 6:00 PM",
    venue: "Bombay Exhibition Centre, Mumbai",
    price: 499,
    description:
      "A two-day technology festival with coding contests, robotics demos and live workshops.",
    details:
      "TechFest 2026 brings students, developers and tech companies together under one roof. Attend hands-on workshops, watch robotics demonstrations, compete in coding contests and network with industry professionals."
  },
  {
    id: 2,
    name: "AI & Innovation Summit",
    category: "Technology",
    date: "5 December 2026",
    time: "10:00 AM – 5:00 PM",
    venue: "Grand Convention Hall, Pune",
    price: 799,
    description:
      "Industry experts discuss artificial intelligence, machine learning and future technologies.",
    details:
      "Listen to keynote talks from AI researchers and engineers, join panel discussions on machine learning and generative AI, and see live demos of intelligent applications used in real businesses."
  },
  {
    id: 3,
    name: "Startup Summit",
    category: "Business",
    date: "20 December 2026",
    time: "10:00 AM – 4:00 PM",
    venue: "Business Hub Auditorium, Bengaluru",
    price: 599,
    description:
      "Meet founders and investors, pitch your ideas and learn how to grow a startup.",
    details:
      "The Startup Summit connects young entrepreneurs with founders and investors. Take part in pitch sessions, attend mentoring talks and learn practical steps to turn an idea into a working business."
  },
  {
    id: 4,
    name: "Coding Hackathon",
    category: "Competition",
    date: "10 January 2027",
    time: "8:00 AM – 8:00 PM",
    venue: "Tech Park Campus, Hyderabad",
    price: 299,
    description:
      "A 12-hour team hackathon where students build real projects and win exciting prizes.",
    details:
      "Form a team of up to four members, pick a problem statement and build a working prototype in 12 hours. Mentors will guide you, and the best projects receive cash prizes and internship opportunities."
  },
  {
    id: 5,
    name: "Music Night",
    category: "Entertainment",
    date: "25 January 2027",
    time: "6:30 PM – 10:30 PM",
    venue: "Open Air Theatre, Mumbai",
    price: 399,
    description:
      "An evening of live music with popular bands, solo artists and a lively crowd.",
    details:
      "Enjoy a relaxed evening of live performances by popular college bands and guest artists. Food stalls and seating areas are available throughout the venue."
  }
];

export default events;
