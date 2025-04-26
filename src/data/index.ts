import { First, Second, Third, Fourth, Fifth } from '@/icons/ApproachIcons';

export const NAV_ITEMS = [
  {
    title: 'Home',
    href: 'main',
  },
  {
    title: 'About',
    href: 'about',
  },
  {
    title: 'Services',
    href: 'services',
  },
  {
    title: 'Approach',
    href: 'approach',
  },{
    title: 'Careers',
    href: 'careers',
  },
  {
    title: 'Contact',
    href: 'contact',
  },
];

export const CARDS = [
  {
    title: 'Digital marketing',
    description:
      "From SEO strategies that push you to top, to paid ads that reach the right eyes, and social media Our team blends creativity with data-driven precision to help your brand grow, connect, and lead in the digital world.",
    services: [
      ['SEO', 'Paid Ads'],
      ['Social Media Marketing', 'SMO'],
    ],
    number: '01.',
    classes: '',
    extra:""
  },
  {
    title: 'IT solutions',
    description:
      "From custom software to seamless cloud integrations and robust technical support, we turn technology into your biggest advantage. Our IT solutions are built to power businesses forward — with reliability, innovation, and a focus on long-term success. ",
    services: [
      ['Web  development ','WEB3 solutions'],
      ['CMS',  'App development '],
    ],
    number: '02.',
    classes: 'border-t border-gray-1/50',extra:""
  },
  {
    title: 'Photography and videography',
    description:
      "We don’t just capture moments — we create stories. Through dynamic photography and cinematic videography, we help brands showcase their essence, tell compelling narratives, and leave lasting impressions. Every frame we craft is designed to inspire, engage, and connect with your audience on a deeper level. ",
    services: [['Creative photography', 'Creative reels'],['White background']],
    number: '03.',
    classes: 'border-t border-gray-1/50',extra:""
  },{
    title: 'Designing',
    description:
      "We believe great design is more than beauty — it’s strategy in action. From striking visuals to bold brand identities, we create designs that speak, resonate, and endure. We blend creativity and clarity to build brands that are not only seen — but remembered.",
    services: [['Creative flyers', 'Branding'],['Video editing','3d model rendering'],['Interior and exterior design']],
    number: '04.',
    classes: 'border-t border-gray-1/50',extra:""
  },
];
  



export const CAREERCARDS = [
  {
    title: 'Hiring',
    description:
    "We’re always looking for passionate, talented people to grow with us. Ready to build, create, and innovate? Let’s shape the future together.",
 services: [
      ['SEO Specialist','SMO Specialist'],
      ['Full Stack Developer',"HR"],
      ['Video Editor',"Graphic Designer"]
    ],
    number: '',
    extra:"🚀Send us your work to hr@arraandco.in and be part of something amazing.",
    classes: '',
  },
];

export const APPROACH_CARDS = [
  {
    icon: First,
    title: 'Discovery & Consultation',
    description:
      "We start by deeply understanding your goals, ideas, and requirements. Through open dialogue, we align visions and establish a clear roadmap for success.",
  },
  {
    icon: Second,
    title: 'Collaborative Design Review',
    description:
      "Our team translates your ideas into initial designs. Once completed, we conduct a joint review session where your feedback shapes the final direction.",
  },
  {
    icon: Third,
    title: 'Development & Implementation',
    description: "After design approval, our developers get to work. We build with precision, ensuring that every feature reflects your vision and meets our quality standards.",
  },
  {
    icon: Fourth,
    title: 'Quality Assurance & Testing',
    description:
      "Every product undergoes rigorous testing to guarantee performance, security, and user experience. Your feedback is crucial during this phase for final refinements.",
  },
  {
    icon: Fifth,
    title: 'Launch & Beyond',
    description:
      "We deliver a polished, fully functional product that meets your needs and exceeds expectations — ready to make an impact from day one.",
  },
];

export const RADIO_FIELDS = [
  {
    title: 'What type of services are you interested in?',
    classes: 'mr-[2.25vw]',
    radioArray: [
      { name: 'Design/Branding', value: 'design/branding' },
      { name: 'Web Development', value: 'web-dev' },
      { name: 'App Development', value: 'mobile-dev' },
      { name: 'Photography', value: 'all-types' },
      { name: 'Digital Marketing', value: 'digital-marketing' },
    ],
    formKey: '_service',
  },
  // {
  //   title: 'Каков ваш бюджет?',
  //   classes: '',
  //   radioArray: [
  //     { name: '8000TMT - 15000TMT', value: '8-15' },
  //     { name: '15000TMT - 25000TMT', value: '15-25' },
  //     { name: '25000TMT - 50000TMT', value: '25-50' },
  //     { name: '50000TMT+', value: '50+' },
  //   ],
  //   formKey: '_budget',
  // },
  // {
  //   title: 'Примерно, сколько страниц будет иметь ваш проект?',
  //   classes: 'mr-[2.25vw]',
  //   radioArray: [
  //     { name: 'Меньше 5-ти', value: '<5' },
  //     { name: '6-10', value: '6-10' },
  //     { name: '11-20', value: '11-20' },
  //     { name: '20+', value: '20+' },
  //   ],
  //   formKey: '_pages',
  // },
  {
    title: 'How quickly do you need the project?',
    classes: '',
    radioArray: [
      { name: 'As soon as Possible', value: 'max-fast' },
      { name: 'High priority ', value: 'high-prio ' },
      { name: 'Regular', value: 'regular' },
      { name: 'Take your time ', value: 'take-your-time' },
    ],
    formKey: '_quickness',
  },
];

export const INPUT_FIELDS = [
  { label: 'Name', name: 'first', classes: 'inline-block !w-[calc(50%-2vw)] mr-[4vw]', required: true },
  { label: 'Mobile No.', name: 'phone', classes: 'inline-block !w-[calc(50%-2vw)]', type: 'number', required: true },
  { label: 'Email', name: 'email', classes: '', type: 'email', required: true },
  { label: 'Company name', name: 'company', classes: '' },
  { label: 'Website url', name: 'websiteUrl', classes: '' },
  // { label: 'Tell us about ur project', name: 'message', classes: '' },
];

export const BOOK_FORM_DEFAULT_STATE = {
  _service: null,
  _budget: null,
  _pages: null,
  _quickness: null,

  first: '',
  phone: '',
  email: '',
  company: '',
  websiteUrl: '',
  message: '',
};
