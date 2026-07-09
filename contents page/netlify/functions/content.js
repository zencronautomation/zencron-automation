import { getStore } from "@netlify/blobs";

const defaultContent = {
  heroBadge: 'JavaScript • TypeScript • Designed to feel effortless',
  heroTitle: 'The kind of experience people notice the moment they step in.',
  heroDescription: 'We create intelligent spaces that feel calm, private, and beautifully in sync with daily life — from secure environments to custom automations that quietly do the heavy lifting.',
  heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
  aboutImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
  heroPrimary: 'Book a Private Consultation',
  heroSecondary: 'See What We Build',
  heroPill1: 'Private by design',
  heroPill2: 'Built for everyday ease',
  heroPill3: 'Crafted with JavaScript & TypeScript',
  servicesLabel: 'Core services',
  servicesTitle: 'Precision solutions for modern spaces.',
  servicesDescription: 'Every installation is shaped around the way you live, work, and protect what matters most.',
  serviceCctvTitle: 'Private Surveillance',
  serviceCctvText: 'Clear, reliable monitoring designed to keep watch without making the space feel overbuilt.',
  serviceHomeTitle: 'Domestic Intelligence',
  serviceHomeText: 'Lighting, comfort, and security that respond with subtle precision to the rhythm of your home.',
  serviceBotTitle: 'JavaScript & TypeScript Automation',
  serviceBotText: 'Tailored automations and digital assistants built with JavaScript and TypeScript to remove repetition and keep work moving smoothly.',
  aboutTitle: 'Premium service, backed by engineering discipline.',
  aboutDescription: 'We combine thoughtful design, dependable engineering, and hands-on support so every project feels calm, polished, and built to last.',
  aboutCard1Title: 'Built around your space',
  aboutCard1Text: 'Every installation is planned around how you use the space, what you value, and how you want it to feel.',
  aboutCard2Title: 'Support that stays close',
  aboutCard2Text: 'From first conversation to long after installation, we stay involved and responsive.',
  aboutCard3Title: 'Crafted with restraint',
  aboutCard3Text: 'The experience is as considered as the systems themselves — refined, dependable, and quietly ahead of what\'s expected.',
  ctaHeading: 'Let\'s make your space feel sharper, calmer, and more alive.',
  ctaDescription: 'Whether you want stronger security, a more effortless home, or smarter day-to-day operations, Zencron brings clarity, precision, and real comfort to the process.',
  ctaButton: 'Start Your Project',
  contactHeading: 'Tell us what you want to simplify, secure, or elevate.',
  contactDescription: 'From first conversation to final installation, we keep the process clear, calm, and carefully tailored.',
  contactAddress: '1/203 Naidu Street, Chettinaayanpatti, Dindigul, Tamil Nadu 624004',
  contactPhone: '+91 6385285597',
  contactEmail: 'zencronautomation.help@gmail.com',
  footerText: '© 2026 Zencron Automation. Crafted for calm, intelligent living.',
  footerLinkHome: 'Home',
  footerLinkServices: 'Services',
  footerLinkContact: 'Contact'
};

export default async (req, context) => {
  try {
    const store = getStore("zencron-content");

    if (req.method === "GET") {
      const stored = await store.get("siteContent");
      const data = stored ? JSON.parse(stored) : defaultContent;
      return Response.json(data);
    }

    if (req.method === "POST") {
      const contentData = await req.json();
      await store.setJSON("siteContent", contentData);
      return Response.json({ success: true, message: "Content saved successfully" });
    }

    return Response.json({ error: "Method not allowed" }, { status: 405 });
  } catch (error) {
    console.error("Error in content function:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
};
