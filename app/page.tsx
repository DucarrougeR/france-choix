import { QuizController } from "@/components/QuizController";

export default function Home() {
  return (
    <div className="relative">
      {/* Modern Tricolore Ribbon Across the Browser Top */}
      <div className="absolute top-0 left-0 w-full flex h-2 md:h-3">
        <div className="w-1/3 h-full bg-france-blue"></div>
        <div className="w-1/3 h-full bg-white z-10"></div>
        <div className="w-1/3 h-full bg-france-red"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 pt-20 pb-20">
        <header className="text-center mb-16 relative">
          {/* Glowing ambient background blobs for modern feel */}
          <div className="absolute -top-10 left-1/4 w-40 h-40 bg-france-blue/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <div className="absolute -top-10 right-1/4 w-40 h-40 bg-france-red/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
          
          <span className="inline-block py-1.5 px-4 rounded-full bg-white text-slate-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm border border-slate-100">
             Élection Présidentielle 2027
          </span>

          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="text-france-blue">France</span>
            <span className="text-france-red">Choix</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-xl mx-auto leading-relaxed">
            Où vous situez-vous ? Répondez à 34 questions décisives pour découvrir votre algorithme politique.
          </p>
        </header>

        <QuizController />
      </div>
    </div>
  );
}
