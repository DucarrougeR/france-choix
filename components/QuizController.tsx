"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { questions, parties } from "@/data/quizData";

export function QuizController() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (weights: Record<string, number>) => {
    const newScores = { ...scores };
    Object.entries(weights).forEach(([party, points]) => {
      newScores[party] = (newScores[party] || 0) + points;
    });
    setScores(newScores);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const progressPercentage = ((currentIndex) / questions.length) * 100;

  if (isFinished) {
    const sortedResults = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const topPartyId = sortedResults[0][0];
    const topParty = parties[topPartyId as keyof typeof parties];
    
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-6 md:p-10 rounded-2xl shadow-xl text-center w-full max-w-2xl mx-auto space-y-8"
      >
        <div>
          <h2 className="text-3xl font-extrabold mb-2 text-slate-800">Votre Match Idéal</h2>
          <motion.div 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`inline-block px-6 py-3 mt-4 rounded-full text-white font-black text-xl shadow-lg ${topParty.color}`}
          >
            {topParty.name}
          </motion.div>
        </div>

        {/* AI Insight Box */}
        {topParty.ai_summary && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-blue-50 border border-blue-100 p-6 rounded-2xl text-left shadow-sm relative overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">✨</span>
              <h3 className="font-bold text-blue-900 text-lg">Analyse IA</h3>
            </div>
            <p className="text-blue-800 leading-relaxed font-medium">
              {topParty.ai_summary}
            </p>
            {topParty.website && (
              <a 
                href={topParty.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-700 font-bold hover:text-blue-900 underline decoration-2 underline-offset-4 transition-colors"
              >
                Découvrir leur programme officiel &rarr;
              </a>
            )}
          </motion.div>
        )}

        {/* Other Results Summary */}
        <div className="pt-6 border-t mt-8">
          <h3 className="text-lg font-bold text-slate-500 mb-4 uppercase tracking-wider text-left">Détail des scores</h3>
          <div className="space-y-3">
            {sortedResults.map(([partyId, score], index) => {
              const party = parties[partyId as keyof typeof parties];
              // Skip rendering if party has 0 points
              if (score <= 0) return null;
              return (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + (index * 0.1) }}
                  key={partyId} 
                  className={`flex justify-between items-center p-3 border rounded-xl overflow-hidden relative shadow-sm`}
                >
                  <div className={`absolute inset-0 opacity-10 ${party.color}`}></div>
                  <span className="font-bold text-slate-700 relative z-10">{party.name}</span>
                  <span className="bg-slate-800 text-white px-3 py-1 text-sm rounded-full font-bold relative z-10">
                    {score} pts
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
        
        <button 
          onClick={() => window.location.reload()}
          className="mt-10 px-8 py-3 bg-france-blue text-white font-bold rounded-lg hover:bg-blue-900 transition-colors w-full"
        >
          Recommencer
        </button>
      </motion.div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Bar Container */}
      <div className="mb-8 w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
        <motion.div 
          className="bg-france-blue h-2.5"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
          className="bg-white p-6 md:p-10 rounded-2xl shadow-xl"
        >
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-slate-100 text-sm font-bold text-slate-500 rounded-full tracking-wider uppercase mb-4">
              {currentQuestion.theme}
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 leading-tight">
              {currentQuestion.text}
            </h2>
          </div>

          <div className="space-y-4">
            {currentQuestion.answers.map((answer, i) => (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                key={i}
                onClick={() => handleAnswer(answer.weights)}
                className="w-full text-left p-5 rounded-xl border-2 border-slate-100 hover:border-france-blue hover:shadow-md transition-all bg-white font-medium text-slate-700 text-lg"
              >
                {answer.text}
              </motion.button>
            ))}
          </div>
          
          <div className="mt-8 text-center text-sm font-semibold text-slate-400">
            Question {currentIndex + 1} sur {questions.length}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
