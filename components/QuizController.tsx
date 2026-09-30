"use client";
import { useState } from "react";
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

  if (isFinished) {
    const sortedResults = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    
    return (
      <div className="bg-white p-8 rounded-xl shadow-sm text-center">
        <h2 className="text-2xl font-bold mb-6">Vos Résultats</h2>
        <div className="space-y-4">
          {sortedResults.map(([partyId, score]) => {
            const party = parties[partyId as keyof typeof parties];
            return (
              <div key={partyId} className="flex justify-between items-center p-4 border rounded-lg">
                <span className="font-semibold">{party.name}</span>
                <span className="bg-slate-100 px-3 py-1 rounded-full">{score} pts</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm">
      <div className="mb-8">
        <span className="text-sm font-semibold text-slate-400 tracking-wider uppercase">
          {currentQuestion.theme}
        </span>
        <h2 className="text-2xl font-bold mt-2">{currentQuestion.text}</h2>
      </div>

      <div className="space-y-3">
        {currentQuestion.answers.map((answer, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(answer.weights)}
            className="w-full text-left p-4 rounded-lg border hover:border-france-blue hover:bg-slate-50 transition-colors"
          >
            {answer.text}
          </button>
        ))}
      </div>
      
      <div className="mt-8 text-center text-sm text-slate-500">
        Question {currentIndex + 1} sur {questions.length}
      </div>
    </div>
  );
}
