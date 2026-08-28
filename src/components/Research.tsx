const researchAreas = [
  {
    title: 'Healthcare AI',
    description:
      'AI for medical imaging, disease prediction, and healthcare decision-support systems. Active research in CT/histopathology-based cancer diagnosis.',
    topics: [
      'Medical Image Analysis',
      'Disease Prediction',
      'Clinical AI',
      'Computational Pathology',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: 'Computer Vision',
    description:
      'Image classification, facial similarity analysis, visual recognition, and intelligent image-based systems.',
    topics: [
      'Image Classification',
      'Face Recognition',
      'Visual Recognition',
      'Feature Extraction',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Quantum Computing',
    description:
      'Exploring quantum machine learning, quantum circuits for feature fusion, and variational quantum classifiers.',
    topics: [
      'Quantum ML',
      'Variational Circuits',
      'Quantum Feature Fusion',
      'Hybrid Models',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
  },
  {
    title: 'Deep Learning',
    description:
      'Neural network architectures, convolutional neural networks, and deep learning for intelligent system development.',
    topics: [
      'CNNs',
      'Neural Networks',
      'Transfer Learning',
      'Feature Engineering',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

export default function Research() {
  return (
    <section id="research" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
            Research
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Research <span className="gradient-text">Interests</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our research explores the intersection of AI, healthcare, and
            emerging computing — driven by curiosity and real-world impact.
          </p>
        </div>

        {/* Research area cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {researchAreas.map((area) => (
            <div
              key={area.title}
              className="glass-card p-6 md:p-8 hover:border-slate-600 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-blue-400 group-hover:text-cyan-400 transition-colors flex-shrink-0">
                  {area.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2.5 py-1 text-xs bg-blue-500/10 text-blue-300 rounded-md border border-blue-500/20"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ongoing research banner */}
        <div className="mt-10 glass-card p-6 md:p-8 border-blue-500/30">
          <div className="flex items-start gap-4">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse mt-1.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold mb-2">Ongoing Research</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                <strong className="text-slate-300">
                  Quantum-Enhanced Multimodal Fusion of CT Imaging and
                  Histopathology for Lung Cancer Diagnosis
                </strong>{' '}
                — Final year design project supervised by Prof. Dr. Sheak Rashed
                Haider Noori (Head, CSE, DIU) and co-supervised by Dr. Md. Zahid
                Hasan. Using real-world datasets from TCGA-LUAD/LUSC, TCIA, and
                GDC Data Portal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
