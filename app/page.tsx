import { QuizController } from "@/components/QuizController";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-france-blue mb-4">
          France<span className="text-france-red">Choix</span>
        </h1>
        <p className="text-lg text-slate-600">
          20 questions pour découvrir de quel parti politique vous êtes le plus proche.
        </p>
      </header>

      <QuizController />
    </div>
  );
}
