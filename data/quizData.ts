export interface Party {
  name: string;
  color: string;
  website?: string;
  ai_summary?: string;
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

export const parties: Record<string, Party> = {
  lfi: { 
    name: "La France Insoumise", 
    color: "bg-red-600",
    website: "https://lafranceinsoumise.fr/",
    ai_summary: "Vos convictions s'alignent fortement avec LFI. Comme eux, vous demandez une rupture sur le plan économique (retour de l'ISF, hausse fulgurante du SMIC) et une refonte de la Ve République. Sur le plan environnemental, vous privilégiez la sortie du nucléaire. Socialement, vous êtes intraitable sur le retour de la retraite à 60 ans et vous vous opposez fermement au resserrement sécuritaire ou migratoire."
  },
  pcf: { 
    name: "Parti Communiste Français", 
    color: "bg-red-700",
    website: "https://www.pcf.fr/",
    ai_summary: "Vous retrouvez vos priorités chez le PCF, notamment sur la réindustrialisation et la défense inconditionnelle des travailleurs (retraite à 60 ans, augmentation des salaires). Contrairement au reste de la gauche radicale, vous avez tendance à soutenir fermement la filière nucléaire (indispensable à la souveraineté énergétique et à l'industrie)."
  },
  ps: { 
    name: "Parti Socialiste / Place Publique", 
    color: "bg-pink-500",
    website: "https://www.parti-socialiste.fr/",
    ai_summary: "Votre profil montre une ligne claire de la gauche social-démocrate et européenne. Vous défendez de puissants acquis sociaux (défense du droit d'asile) tout en prônant un réformisme pragmatique négocié par les corps intermédiaires. Surtout, votre parti pris pour la construction européenne politique (UE, soutien Ukraine) est décisif dans votre profil."
  },
  ecolo: { 
    name: "Les Écologistes", 
    color: "bg-green-500",
    website: "https://lesecologistes.fr/",
    ai_summary: "Sans surprise, l'urgence bioclimatique dirige votre boussole. Vos réponses soutiennent un développement massif du renouvelable au détriment du nucléaire. Au-delà de l'écologie, vos choix montrent un fort libéralisme sociétal (légalisation du cannabis, fin de vie) couplé à une intense redistribution des richesses, ancrant fermement vos préférences à gauche."
  },
  renaissance: { 
    name: "Bloc Central (Renaissance, Horizons)", 
    color: "bg-yellow-500",
    website: "https://parti-renaissance.fr/",
    ai_summary: "Vos positions épousent la ligne réformiste pro-business de la Majorité sortante. Vous estimez nécessaire de maîtriser la dépense publique par des réformes structurelles (comme la retraite à 64 ans ou la conditionnalité du RSA) sans surtaxer le capital. Sur le plan régalien, vous cherchez un équilibre entre fermeté et compromis, tout en restant un pro-européen et pro-OTAN convaincu."
  },
  lr: { 
    name: "Les Républicains", 
    color: "bg-blue-600",
    website: "https://republicains.fr/",
    ai_summary: "Vous êtes politiquement positionné sur la droite conservatrice traditionnelle. Économiquement, vous privilégiez la valeur travail, la baisse continue de la fiscalité et la réduction de l'État. Sur les thématiques régaliennes, vos réponses prônent une justice répressive (peines planchers, mineurs) et une régulation vigoureuse de l'immigration."
  },
  rn: { 
    name: "Rassemblement National", 
    color: "bg-blue-900",
    website: "https://rassemblementnational.fr/",
    ai_summary: "Vos choix résonnent profondément avec le Rassemblement National. Vous privilégiez les frontières (fin du droit du sol, suspension du regroupement) et la sécurité publique (armes pour la police). Économiquement, vous êtes interventionniste pour sauver le pouvoir d'achat face aux super-profits et écologistes, et vous défendez une vision farouchement souverainiste de la nation."
  },
  reconquete: { 
    name: "Reconquête!", 
    color: "bg-purple-900",
    website: "https://www.parti-reconquete.fr/",
    ai_summary: "Vous rattachez votre vision à une droite strictement identitaire et sécuritaire. Face à une menace civilisationnelle perçue, vous privilégiez la priorité nationale absolue, la fin du droit du sol, et vous vous opposez radicalement au wokisme. L'économie, pour vous, se redresse en sabrant radicalement les dépenses de l'État (comme l'AME) et en valorisant l'assimilation exigeante."
  }
};

export const questions: Question[] = [
  // THEME: ECONOMY & TAXATION
  {
    id: "q_eco_1", theme: "Économie & Impôts", text: "Faut-il rétablir l'Impôt de Solidarité sur la Fortune (ISF) ?",
    answers: [
      { text: "Oui, c'est une mesure de justice fiscale indispensable.", weights: { lfi: 2, pcf: 2, ps: 2, ecolo: 2 } },
      { text: "Oui, mais en ciblant spécifiquement le patrimoine climatique/carbone.", weights: { ecolo: 2, ps: 1 } },
      { text: "Non, l'Impôt sur la Fortune Immobilière (IFI) actuel suffit.", weights: { renaissance: 2, lr: 1, rn: 1 } },
      { text: "Non, il faut même baisser globalement la fiscalité sur le capital pour encourager l'investissement.", weights: { lr: 2, reconquete: 2, renaissance: 1, rn: 1 } }
    ]
  },
  {
    id: "q_eco_2", theme: "Économie & Impôts", text: "Doit-on taxer les 'superprofits' des grandes entreprises ?",
    answers: [
      { text: "Oui, massivement, pour redistribuer la richesse face à l'inflation.", weights: { lfi: 2, pcf: 2, ps: 2, ecolo: 2, rn: 1 } },
      { text: "Uniquement au niveau européen si une harmonisation est possible.", weights: { renaissance: 2, ps: 1 } },
      { text: "Non, cela risque de faire fuir les sièges sociaux des grandes entreprises.", weights: { lr: 2, reconquete: 2, renaissance: 1 } }
    ]
  },
  {
    id: "q_eco_3", theme: "Travail & Pouvoir d'achat", text: "Le SMIC doit-il être significativement augmenté (ex: à 1600€ net) ?",
    answers: [
      { text: "Oui, c'est une urgence sociale.", weights: { lfi: 2, pcf: 2, ecolo: 2, ps: 1 } },
      { text: "Oui, mais en baissant simultanément les charges pour les TPE/PME.", weights: { rn: 2, ps: 1, lr: 1 } },
      { text: "Non, il vaut mieux encourager la prime d'activité et la participation aux bénéfices.", weights: { renaissance: 2, lr: 1 } }
    ]
  },
  {
    id: "q_eco_4", theme: "Travail & Pouvoir d'achat", text: "Faut-il réduire le temps de travail vers la semaine de 32 heures (ou 4 jours) ?",
    answers: [
      { text: "Oui, avec maintien du salaire, pour partager le temps de travail.", weights: { lfi: 2, ecolo: 2, pcf: 1 } },
      { text: "Seulement si c'est négocié accord par accord dans les entreprises.", weights: { ps: 2, renaissance: 1 } },
      { text: "Non, la valeur travail est primordiale, il faut travailler plus pour gagner plus.", weights: { lr: 2, reconquete: 2, renaissance: 1, rn: 1 } }
    ]
  },
  {
    id: "q_eco_5", theme: "Économie", text: "Face à la dette publique dépassant les 110% du PIB, quelle est la priorité ?",
    answers: [
      { text: "Réduire drastiquement les dépenses publiques et sociales.", weights: { lr: 2, reconquete: 2, renaissance: 1 } },
      { text: "Geler certaines dépenses de l'État central tout en favorisant la croissance.", weights: { renaissance: 2, rn: 1 } },
      { text: "Augmenter les recettes en taxant davantage les plus riches et les multinationales.", weights: { lfi: 2, pcf: 2, ps: 2, ecolo: 2 } }
    ]
  },

  // THEME: SOCIAL & RETIREMENT
  {
    id: "q_soc_1", theme: "Social & Retraites", text: "Concernant l'âge légal de départ à la retraite (actuellement 64 ans) :",
    answers: [
      { text: "Il faut l'abaisser à 60 ans pour tous avec 40 annuités.", weights: { lfi: 2, pcf: 2, rn: 1 } },
      { text: "Il faut revenir à 62 ans avec une forte prise en compte de la pénibilité.", weights: { ps: 2, ecolo: 2, rn: 2 } },
      { text: "Il faut maintenir la réforme à 64 ans pour sauvegarder le système par répartition.", weights: { renaissance: 2 } },
      { text: "Il faudra probablement l'augmenter à 65 ans pour équilibrer définitivement les comptes.", weights: { lr: 2 } }
    ]
  },
  {
    id: "q_soc_2", theme: "Social & Santé", text: "Comment résoudre la crise des déserts médicaux ?",
    answers: [
      { text: "Obliger les jeunes médecins à s'installer dans des zones sous-dotées pour quelques années.", weights: { lfi: 2, pcf: 2, ecolo: 1 } },
      { text: "Ouvrir plus de maisons de santé pluridisciplinaires et réduire l'administratif des médecins.", weights: { ps: 2, renaissance: 2, lr: 1, rn: 1 } },
      { text: "Revaloriser fortement le prix de la consultation pour rendre la médecine libérale plus attractive.", weights: { lr: 2, reconquete: 2, renaissance: 1 } }
    ]
  },
  {
    id: "q_soc_3", theme: "Social", text: "Le RSA (Revenu de Solidarité Active) doit-il être conditionné à 15 heures d'activité par semaine ?",
    answers: [
      { text: "Oui, l'aide sociale doit impliquer une contrepartie et une réinsertion.", weights: { renaissance: 2, lr: 2, rn: 2, reconquete: 1 } },
      { text: "Non, c'est une stigmatisation des plus précaires, le RSA est un droit inconditionnel.", weights: { lfi: 2, ecolo: 2, pcf: 2, ps: 1 } }
    ]
  },
  {
    id: "q_soc_4", theme: "Société", text: "Faut-il légaliser l'Aide Active à Mourir (euthanasie / suicide assisté) ?",
    answers: [
      { text: "Oui, c'est une liberté fondamentale de choisir sa fin de vie.", weights: { lfi: 2, ecolo: 2, ps: 2, renaissance: 1 } },
      { text: "Oui, mais avec des conditions médicales extrêmement strictes.", weights: { renaissance: 2, ps: 1 } },
      { text: "Non, il faut se concentrer exclusivement sur le développement des soins palliatifs.", weights: { lr: 2, reconquete: 2, rn: 1 } }
    ]
  },
  {
    id: "q_soc_5", theme: "Société", text: "Faut-il légaliser le cannabis récréatif ?",
    answers: [
      { text: "Oui, pour contrôler la qualité, assécher les trafics et générer des recettes fiscales.", weights: { ecolo: 2, lfi: 2, ps: 1 } },
      { text: "Non, mais il faut le dépénaliser (seulement des amendes) pour désengorger la justice.", weights: { renaissance: 1, ps: 1 } },
      { text: "Non, il faut au contraire durcir la répression contre les consommateurs et les dealers.", weights: { lr: 2, rn: 2, reconquete: 2, renaissance: 1 } }
    ]
  },

  // THEME: ENVIRONMENT & ENERGY
  {
    id: "q_env_1", theme: "Environnement", text: "Quelle est votre position sur l'énergie nucléaire ?",
    answers: [
      { text: "C'est vital. Il faut construire de nouveaux EPR et prolonger les centrales existantes.", weights: { rn: 2, lr: 2, reconquete: 2, pcf: 2, renaissance: 2 } },
      { text: "C'est une énergie de transition utile, mais il faut investir massivement dans le renouvelable en parallèle.", weights: { renaissance: 2, ps: 1 } },
      { text: "Il faut planifier la sortie du nucléaire (100% renouvelable) car c'est trop cher et dangereux.", weights: { ecolo: 2, lfi: 2 } }
    ]
  },
  {
    id: "q_env_2", theme: "Environnement", text: "Faut-il interdire l'installation de nouvelles éoliennes terrestres ?",
    answers: [
      { text: "Oui, cela défigure nos paysages et crée des nuisances. Il faut les démanteler progressivement.", weights: { rn: 2, reconquete: 2 } },
      { text: "Oui, ou imposer un moratoire en donnant le droit de veto systématique aux maires.", weights: { lr: 2, rn: 1 } },
      { text: "Non, mais il faut mieux consulter la population locale et privilégier l'éolien en mer.", weights: { renaissance: 2, ps: 1 } },
      { text: "Non, c'est indispensable pour la transition énergétique, il faut accélérer les déploiements.", weights: { ecolo: 2, lfi: 2, ps: 2 } }
    ]
  },
  {
    id: "q_env_3", theme: "Environnement", text: "Comment accélérer la transition écologique des ménages (voitures, isolation des logements) ?",
    answers: [
      { text: "Par des subventions massives de l'État, même si cela augmente fortement la dette.", weights: { lfi: 2, ecolo: 2, ps: 1 } },
      { text: "Par le marché et l'innovation technologique, avec des aides ciblées uniquement pour les plus modestes.", weights: { renaissance: 2, lr: 1 } },
      { text: "Il faut arrêter l'écologie punitive et les ZFE (Zones à Faibles Émissions) qui pénalisent la France périphérique.", weights: { rn: 2, reconquete: 2, lr: 1, pcf: 1 } }
    ]
  },
  {
    id: "q_env_4", theme: "Agriculture", text: "Comment aider l'agriculture française face à la concurrence et aux normes environnementales ?",
    answers: [
      { text: "Garantir des prix planchers rémunérateurs et interdire les marges abusives de l'agro-industrie.", weights: { lfi: 2, pcf: 2, ecolo: 1 } },
      { text: "Stopper la surtransposition des normes européennes et protéger nos agriculteurs du libre-échange.", weights: { rn: 2, lr: 2, reconquete: 2 } },
      { text: "Aider financièrement la transition vers le bio et réduire drastiquement l'usage des pesticides.", weights: { ecolo: 2, lfi: 1, ps: 1 } },
      { text: "Investir dans l'innovation (méga-bassines, génétique) pour concilier productivité et écologie.", weights: { renaissance: 2, lr: 2 } }
    ]
  },
  {
    id: "q_env_5", theme: "Environnement", text: "Doit-on contraindre l'industrie agro-alimentaire à réduire les options carnées et promouvoir le végétarisme ?",
    answers: [
      { text: "Oui, imposer des menus végétariens systématiques dans les cantines et réduire l'élevage industriel.", weights: { ecolo: 2, lfi: 2 } },
      { text: "Proposer des alternatives végétariennes mais laisser le libre choix.", weights: { ps: 2, renaissance: 2 } },
      { text: "Non, la viande fait partie de notre gastronomie, interdisons l'injonction végétarienne.", weights: { reconquete: 2, rn: 2, pcf: 1, lr: 1 } }
    ]
  },

  // THEME: IMMIGRATION & IDENTITY
  {
    id: "q_imm_1", theme: "Immigration", text: "Face à l'immigration illégale et aux OQTF (Obligations de Quitter le Territoire Français) non exécutées :",
    answers: [
      { text: "Il faut supprimer l'Aide Médicale d'État (AME) et conditionner les visas au retour des clandestins.", weights: { rn: 2, reconquete: 2, lr: 2 } },
      { text: "Il faut régulariser tous les travailleurs sans-papiers déjà présents sur le territoire.", weights: { lfi: 2, ecolo: 2, pcf: 1 } },
      { text: "Il faut une politique de quotas fixée par le parlement et faciliter l'expulsion des seuls délinquants.", weights: { renaissance: 2, lr: 1, ps: 1 } }
    ]
  },
  {
    id: "q_imm_2", theme: "Identité / Immigration", text: "Faut-il instaurer la 'Priorité Nationale' pour l'accès aux logements sociaux et aux aides de l'État ?",
    answers: [
      { text: "Oui, c'est normal que les Français passent avant les étrangers pour la solidarité nationale.", weights: { rn: 2, reconquete: 2 } },
      { text: "Non, c'est inconstitutionnel et contraire aux principes de la République (égalité).", weights: { renaissance: 2, ps: 2, lfi: 2, ecolo: 2, pcf: 2, lr: 1 } }
    ]
  },
  {
    id: "q_imm_3", theme: "Immigration", text: "Le regroupement familial doit-il être suspendu ou fortement restreint ?",
    answers: [
      { text: "Oui, c'est la principale source d'immigration qu'il faut arrêter.", weights: { rn: 2, reconquete: 2, lr: 2 } },
      { text: "Non, vivre en famille est un droit fondamental garanti par la Cour Européenne des Droits de l'Homme.", weights: { lfi: 2, ps: 2, ecolo: 2, renaissance: 1, pcf: 1 } }
    ]
  },
  {
    id: "q_imm_4", theme: "Laïcité", text: "Doit-on étendre l'interdiction du voile islamique à l'espace public (dans la rue) ?",
    answers: [
      { text: "Oui, pour lutter contre l'islamisme et affirmer notre civilisation.", weights: { reconquete: 2, rn: 2 } },
      { text: "Non, la laïcité s'applique à l'État, pas aux individus dans la rue.", weights: { lfi: 2, ecolo: 2, ps: 2, renaissance: 2, pcf: 1 } },
      { text: "Non dans la rue, mais oui pour les accompagnatrices scolaires et à l'université.", weights: { lr: 2, renaissance: 1 } }
    ]
  },
  {
    id: "q_imm_5", theme: "Immigration", text: "Faut-il remettre en cause le droit du sol ?",
    answers: [
      { text: "Oui, il faut le supprimer. Seul le droit du sang doit donner la nationalité française.", weights: { reconquete: 2, rn: 2 } },
      { text: "Oui, il faut le durcir fortement (ex: fin du droit du sol à Mayotte, conditions de résidence stricte).", weights: { lr: 2, renaissance: 1, rn: 1 } },
      { text: "Non, le droit du sol fait partie de la tradition républicaine d'intégration.", weights: { lfi: 2, ps: 2, ecolo: 2, pcf: 2 } }
    ]
  },

  // THEME: SECURITY & JUSTICE
  {
    id: "q_sec_1", theme: "Sécurité", text: "Faut-il instaurer une 'présomption de légitime défense' pour les forces de l'ordre ?",
    answers: [
      { text: "Oui, les forces de l'ordre sont attaquées et ont besoin de ce bouclier juridique.", weights: { rn: 2, reconquete: 2, lr: 2 } },
      { text: "Non, la loi actuelle suffit. Il faut équiper les policiers de caméras-piétons systématiques.", weights: { renaissance: 2, ps: 1 } },
      { text: "Non, c'est un permis de tuer. Il faut au contraire réformer l'IGPN pour une justice indépendante.", weights: { lfi: 2, ecolo: 2 } }
    ]
  },
  {
    id: "q_sec_2", theme: "Justice", text: "Faut-il rétablir des peines planchers incontournables (sans aménagement possible) pour les récidivistes ?",
    answers: [
      { text: "Oui, la justice est trop laxiste, la certitude de la peine est la seule dissuasion.", weights: { lr: 2, rn: 2, reconquete: 2, renaissance: 1 } },
      { text: "Non, le juge doit toujours pouvoir individualiser la peine en fonction du contexte.", weights: { lfi: 2, ps: 2, ecolo: 2, renaissance: 1 } }
    ]
  },
  {
    id: "q_sec_3", theme: "Justice & Mineurs", text: "Face à la délinquance des mineurs :",
    answers: [
      { text: "Il faut abaisser la majorité pénale à 16 ans et supprimer l'excuse de minorité.", weights: { rn: 2, reconquete: 2, lr: 2 } },
      { text: "Il faut sanctionner financièrement les parents défaillants et accélérer la réponse pénale.", weights: { renaissance: 2, lr: 1 } },
      { text: "Il faut investir massivement dans la prévention, les éducateurs spécialisés et éviter la prison.", weights: { lfi: 2, ecolo: 2, ps: 2, pcf: 2 } }
    ]
  },
  {
    id: "q_sec_4", theme: "Sécurité", text: "Sur l'armement des polices municipales :",
    answers: [
      { text: "Elles doivent être obligatoirement dotées d’armes à feu partout en France.", weights: { rn: 2, lr: 2, reconquete: 2 } },
      { text: "C'est au maire de décider en fonction du contexte local.", weights: { renaissance: 2, ps: 1, pcf: 1 } },
      { text: "Elles doivent être désarmées et se concentrer sur la police de proximité.", weights: { lfi: 2, ecolo: 2 } }
    ]
  },
  {
    id: "q_sec_5", theme: "Sécurité & Numérique", text: "Faut-il étendre la vidéosurveillance avec reconnaissance faciale dans l'espace public ?",
    answers: [
      { text: "Oui, c'est un outil très efficace pour identifier rapidement les criminels et terroristes.", weights: { lr: 2, reconquete: 2, rn: 1 } },
      { text: "Oui, mais uniquement de manière expérimentale pour les grands événements sécurisés (IA algorithmique).", weights: { renaissance: 2, lr: 1 } },
      { text: "Non, c'est une dérive vers une société de contrôle à la chinoise qui menace nos libertés.", weights: { lfi: 2, ecolo: 2, ps: 2 } }
    ]
  },

  // THEME: INSTITUTIONS & DEMOCRACY
  {
    id: "q_inst_1", theme: "Institutions", text: "La France vit-elle un recul démocratique avec l'usage excessif de l'article 49.3 de la Constitution ?",
    answers: [
      { text: "Oui, il faut passer à une 6ème République parlementaire et supprimer le 49.3.", weights: { lfi: 2, ecolo: 2 } },
      { text: "Oui, il faut introduire une dose de proportionnelle pour obliger au consensus.", weights: { ps: 2, rn: 2, pcf: 1 } },
      { text: "Non, le 49.3 est un outil nécessaire pour qu'un gouvernement puisse gouverner face aux blocages.", weights: { renaissance: 2, lr: 1 } }
    ]
  },
  {
    id: "q_inst_2", theme: "Démocratie", text: "Faut-il instaurer le Référendum d'Initiative Citoyenne (RIC) ?",
    answers: [
      { text: "Oui, sans aucun filtre, les citoyens doivent pouvoir proposer et abroger des lois.", weights: { lfi: 2, rn: 2, ecolo: 1 } },
      { text: "Oui, mais encadré pour éviter la tyrannie de la majorité sur certains sujets (droits fondamentaux).", weights: { ps: 2, pcf: 2 } },
      { text: "Non, nous sommes une démocratie représentative, c'est le rôle exclusif des députés.", weights: { renaissance: 2, lr: 2, reconquete: 1 } }
    ]
  },
  {
    id: "q_inst_3", theme: "Éducation & Jeunesse", text: "Concernant le Service National Universel (SNU) obligatoire pour tous les jeunes :",
    answers: [
      { text: "Il faut le généraliser pour recréer le brassage et l'autorité républicaine.", weights: { renaissance: 2, lr: 2, reconquete: 1 } },
      { text: "Il faut l'abandonner au profit d'investissements massifs dans l'éducation nationale.", weights: { lfi: 2, ecolo: 2, ps: 2 } }
    ]
  },
  {
    id: "q_inst_4", theme: "Éducation", text: "Comment élever le niveau scolaire en déclin ?",
    answers: [
      { text: "Instaurer l'uniforme, l'autorité stricte et stopper la pédagogie laxiste.", weights: { reconquete: 2, rn: 2, lr: 2 } },
      { text: "Mettre en place des groupes de niveaux pour faire progresser chacun à son rythme.", weights: { renaissance: 2, lr: 1 } },
      { text: "Réduire les effectifs par classe et augmenter massivement le salaire des enseignants.", weights: { lfi: 2, pcf: 2, ps: 2, ecolo: 2 } }
    ]
  },

  // THEME: EUROPE & INTERNATIONAL
  {
    id: "q_int_1", theme: "Europe", text: "L'Union Européenne est-elle un atout pour la France ?",
    answers: [
      { text: "Oui, il faut même aller vers plus d'intégration (Europe fédérale, armée européenne).", weights: { renaissance: 2, ps: 1, ecolo: 1 } },
      { text: "Oui, mais il faut une Europe des Nations souveraines et retrouver le contrôle de nos frontières.", weights: { rn: 2, lr: 2, reconquete: 2 } },
      { text: "Non, elle impose ses dogmes néolibéraux. Il faut désobéir aux traités existants.", weights: { lfi: 2, pcf: 2, rn: 1 } }
    ]
  },
  {
    id: "q_int_2", theme: "Défense & OTAN", text: "La France doit-elle rester dans le commandement intégré de l'OTAN ?",
    answers: [
      { text: "Oui, c'est notre garantie de sécurité absolue face aux menaces extérieures (Russie).", weights: { renaissance: 2, lr: 2, ps: 2, ecolo: 1 } },
      { text: "Non, il faut en sortir pour retrouver notre entière indépendance diplomatique et militaire.", weights: { lfi: 2, rn: 2, pcf: 2, reconquete: 1 } }
    ]
  },
  {
    id: "q_int_3", theme: "International", text: "Face à la guerre en Ukraine, quelle doit être notre ligne ?",
    answers: [
      { text: "Soutenir l'Ukraine financièrement, militairement, et jusqu'à son entrée dans l'UE et l'OTAN.", weights: { renaissance: 2, ps: 2, ecolo: 2, lr: 1 } },
      { text: "Stopper les livraisons d'armes et forcer une négociation de paix avec la Russie.", weights: { rn: 2, lfi: 2, pcf: 2, reconquete: 2 } }
    ]
  },

  // THEME: CULTURE & MEDIA
  {
    id: "q_cult_1", theme: "Médias", text: "Faut-il privatiser le service public de la télévision et de la radio (France TV, Radio France) ?",
    answers: [
      { text: "Oui, ces médias sont biaisés idéologiquement et coûtent trop cher aux contribuables.", weights: { rn: 2, reconquete: 2 } },
      { text: "Non, il faut au contraire sécuriser leur budget et garantir leur indépendance face aux milliardaires.", weights: { lfi: 2, ecolo: 2, ps: 2, pcf: 2 } },
      { text: "Non, mais il faut réduire leur coût via une holding unique de l'audiovisuel public.", weights: { renaissance: 2, lr: 2 } }
    ]
  },
  {
    id: "q_cult_2", theme: "Culture", text: "La notion de \"Wokisme\" est-elle une menace pour notre société ?",
    answers: [
      { text: "C'est un danger absolu qui détruit notre Histoire masculine et notre civilisation.", weights: { reconquete: 2, rn: 2 } },
      { text: "C'est un courant clivant venu des États-Unis qu'il faut combattre modérément pour défendre l'universalisme républicain.", weights: { renaissance: 2, lr: 2, ps: 1 } },
      { text: "C'est un faux problème inventé par la droite pour masquer ses angoisses réactionnaires face aux luttes d'émancipation.", weights: { lfi: 2, ecolo: 2, pcf: 1 } }
    ]
  }
];
