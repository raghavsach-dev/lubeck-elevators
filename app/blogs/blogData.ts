export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-lubeck-is-better',
    title: 'Why Lubeck Elevators is the Better Choice Among Its Competitors',
    date: 'July 3, 2024',
    image: '/lift-sample.jpg',
    excerpt: 'Choosing the right elevator is about safety, reliability, aesthetics, and long-term value. In a competitive market, Lubeck Elevators stands out as a premier choice. Here\'s why.',
    content: `
      <p>Choosing the right elevator for your residential or commercial property is a significant decision. It&apos;s not just about vertical transportation; it&apos;s about safety, reliability, aesthetics, and long-term value. In a competitive market, Lubeck Elevators stands out as a premier choice. Here&apos;s why.</p>
      <h2 class="font-heading text-2xl sm:text-3xl font-bold text-[#D4AF37] my-6">Unwavering Commitment to Quality &amp; Safety</h2>
      <p>At Lubeck, quality isn&apos;t just a buzzword—it&apos;s the foundation of everything we do. We are an ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certified company, which means our processes adhere to the highest international standards for quality, environmental management, and occupational health and safety. This commitment ensures that every Lubeck elevator is a benchmark in reliability and safety.</p>
      <h2 class="font-heading text-2xl sm:text-3xl font-bold text-[#D4AF37] my-6">German Technology, Indian Expertise</h2>
      <p>We bring the best of both worlds by integrating cutting-edge German technology with our deep understanding of the Indian market. This fusion results in elevators that are not only technologically advanced but also designed to withstand the unique challenges of the Indian environment. Our elevators are known for their smooth, noise-free operation and energy efficiency, thanks to advanced VvVF drive systems and regenerative technology.</p>
      <h2 class="font-heading text-2xl sm:text-3xl font-bold text-[#D4AF37] my-6">Customization &amp; Luxury Design</h2>
      <p>We believe an elevator should be an extension of your building&apos;s architectural vision. Unlike competitors who offer one-size-fits-all solutions, Lubeck specializes in bespoke elevator designs. Our clients can choose from a wide range of premium materials, finishes, and cabin interiors from our exclusive collections like Majesty, Imperial Gold, Prestige, and Classic. This allows for a truly personalized elevator that complements your property&apos;s aesthetic.</p>
      <h2 class="font-heading text-2xl sm:text-3xl font-bold text-[#D4AF37] my-6">Proven Track Record &amp; Trusted Partnerships</h2>
      <p>With over 1200 successful installations across India, our portfolio speaks for itself. We are trusted by prestigious clients like GD Goenka School, GNIOT Group, Bikanerwala, and Clarks Inn. Furthermore, our collaboration with global leaders like Fermator, Marazzi, and Montanari Group ensures that every component in our elevators meets the highest standards of quality and performance.</p>
      <div class="bg-[#1C1C1C] p-6 rounded-lg border border-white/10 my-8">
        <h3 class="font-heading text-xl sm:text-2xl font-bold text-white mb-3">The Lubeck Advantage: A Quick Comparison</h3>
        <ul class="space-y-3 text-white/70 list-disc list-inside">
          <li><span class="font-semibold text-white">Holistic Quality:</span> ISO certified in quality, environment, and safety.</li>
          <li><span class="font-semibold text-white">Advanced Technology:</span> German engineering for superior performance.</li>
          <li><span class="font-semibold text-white">Bespoke Design:</span> Fully customizable luxury interiors.</li>
          <li><span class="font-semibold text-white">Proven Reliability:</span> 1200+ installations and counting.</li>
          <li><span class="font-semibold text-white">Transparent Partnerships:</span> Collaboration with global industry leaders.</li>
        </ul>
      </div>
      <p>When you choose Lubeck Elevators, you&apos;re not just buying a product; you&apos;re investing in a long-term partnership built on trust, quality, and a shared commitment to excellence. We invite you to experience the Lubeck difference and elevate your property with a vertical transportation solution that is truly in a class of its own.</p>
    `
  }
]; 