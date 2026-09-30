export interface Party {
  name: string;
  color: string;
}

export interface Answer {
  text: string;
  weights: Record<string, number>;
}

export interface Question {
  id: string;
  theme: string;
  text: string;
  answers: Answer[];
}

export const questions: Question[] = [
  {
    id: "q1",
    theme: "Économie",
    text: "Faut-il reculer l'âge de départ à la retraite pour équilibrer le système ?",
    answers: [
      { text: "Oui, c'est indispensable.", weights: { droite: 2, centre: 1 } },
      { text: "Non, il faut maintenir ou abaisser l'âge légal.", weights: { gauche: 2, rn: 1 } }
    ]
  },
  {
    id: "q2",
    theme: "Environnement",
    text: "Faut-il investir massivement dans le nucléaire ?",
    answers: [
      { text: "Oui, c'est notre meilleure énergie décarbonée.", weights: { droite: 2, rn: 1, centre: 1 } },
      { text: "Non, il faut une sortie progressive vers le renouvelable.", weights: { gauche: 2, centre: -1 } }
    ]
  }
];

export const parties: Record<string, Party> = {
  gauche: { name: "Nouveau Front Populaire", color: "bg-red-500" },
  centre: { name: "Ensemble (Renaissance)", color: "bg-yellow-500" },
  droite: { name: "Les Républicains", color: "bg-blue-600" },
  rn: { name: "Rassemblement National", color: "bg-blue-900" },
};
