export default function ClientagePage() {
  const clients = [
    'Adani', 'Adani Airport', 'Ambuja Cement', 'K Raheja', 'Reliance Industries',
    // ... existing client names
  ];

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-[#D4AF37]">Our Clientage</h1>
          <p className="text-white/70 text-lg text-center mt-4 max-w-3xl mx-auto">We are proud to have worked with a diverse range of prestigious clients who trust in our commitment to quality and excellence.</p>
        </div>

        <div className="mt-16">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
            {clients.map((client, index) => (
              <div key={index} className="px-6 py-3 bg-[#1C1C1C] border border-white/10 rounded-lg">
                <p className="text-white font-medium text-lg text-center">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 