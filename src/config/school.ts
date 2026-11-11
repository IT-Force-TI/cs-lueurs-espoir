// ============================================================================
//  PROFIL DE L'ÉTABLISSEMENT
//  C'est le fichier à adapter pour décliner le site pour une autre école :
//  identité, coordonnées, tarifs par défaut, textes de l'accueil, cycles, FAQ…
//  Les images référencées se trouvent dans le dossier public/.
//
//  En mode API, les coordonnées et les tarifs (bloc `settings`) sont ensuite
//  remplacés par ceux enregistrés dans l'administration (GET /api/public/settings).
// ============================================================================
import type { Settings } from '../models'

export interface CycleProfile {
  /**
   * Valeur technique du cycle. Doit correspondre aux cycles acceptés par le backend
   * (utils/schemas.js) : Maternelle / Primaire / Collège. N'est pas affichée telle quelle.
   */
  name: string
  /** Libellé affiché sur le site (ex. « Préscolaire » pour la valeur technique « Maternelle »). */
  label: string
  /** Segment d'URL de la page d'admission : /admissions/<slug>. */
  slug: string
  age: string
  text: string
  /** Classes proposées. Doivent correspondre aux classes acceptées par le backend. */
  classes: string[]
  skills: string[]
  programs: { icon: string; title: string; text: string }[]
}

export interface SchoolProfile {
  /** Identifiant technique (sert aussi de clé de stockage des fake data). */
  id: string
  logo: string
  /** Valeurs par défaut des paramètres (affichées avant chargement et utilisées par les fake data). */
  settings: Settings
  footerText: string
  hero: { eyebrow: string; titleLines: string[]; highlight: string; intro: string; images: string[] }
  founder: {
    photo: string
    photoAlt: string
    eyebrow: string
    titleLines: string[]
    greeting: string
    paragraphs: string[]
    signature: string
  }
  history: { title: string; paragraphs: string[]; stats: { value: string; label: string }[] }
  values: { icon: string; title: string; text: string }[]
  faq: { q: string; a: string; link?: { to: string; label: string } }[]
  cycles: CycleProfile[]
  admissions: { documents: string[] }
}

// ----------------------------------------------------------------------------
//  CS LUEURS D'ESPOIR — Tatchibou / Tantigou, Dapaong (Tône 1, Région des Savanes)
//  Données vérifiées : nom, statut (privé laïc agréé par le MEPST), téléphones, quartier
//  et repère (derrière l'EPP Tantigou Peul), cycles et classes, CEPE et BEPC,
//  pièces d'inscription, modalités de paiement.
//  Données FICTIVES : slogan, e-mail, horaires, tarifs, textes de présentation, fondateur.
// ----------------------------------------------------------------------------
export const school: SchoolProfile = {
  id: 'cs-lueurs-espoir-dapaong',
  logo: '/lueurs-espoir-logo.png',
  settings: {
    name: 'Complexe Scolaire Privé Laïque Lueurs d’Espoir',
    shortName: 'CS Lueurs d’Espoir',
    slogan: 'ÉCLAIRER L’AVENIR DE CHAQUE ENFANT',
    address: 'Quartier Tatchibou (secteur Tantigou), derrière l’EPP Tantigou Peul — Dapaong, Togo',
    email: 'contact@cs-lueursdespoir.tg',
    phone: '+228 90 34 70 50',
    phone2: '+228 98 18 30 61',
    hours: 'Lundi – Vendredi : 7h00 – 17h00',
    annualFee: 60000,
    canteenFee: 300,
    badgeFee: 1000,
    uniformFee: 4000,
    apeFee: 2000,
  },
  footerText:
    'Établissement privé laïc agréé par l’État togolais, à Tatchibou (Dapaong) : de la maternelle au collège, une école de proximité qui donne à chaque enfant des Savanes sa chance de réussir.',
  hero: {
    eyebrow: 'AVENIR - ÉGALITÉ DES CHANCES - RÉUSSITE',
    titleLines: ['Complexe Scolaire', 'Privé Laïque'],
    highlight: 'Lueurs d’Espoir',
    intro:
      'Bienvenue au CS Lueurs d’Espoir, à Tatchibou (Dapaong). Au cœur de la région des Savanes, nous offrons à chaque enfant un encadrement de proximité et les mêmes chances de réussir, de la maternelle jusqu’au BEPC.',
    images: ['/hero/hero-1.jpg', '/hero/hero-2.jpg', '/hero/hero-3.jpg'],
  },
  founder: {
    photo: '/directeur-general.jpg',
    photoAlt: 'Le fondateur du CS Lueurs d’Espoir',
    eyebrow: 'UN MOT DU FONDATEUR',
    titleLines: ['Chaque enfant porte', 'une lueur d’espoir.'],
    greeting: 'Chers parents, chers élèves,',
    paragraphs: [
      'Nous avons appelé notre école « Lueurs d’Espoir » parce que nous croyons que chaque enfant de Dapaong et des Savanes porte en lui un avenir à faire grandir. Notre rôle est de l’éclairer.',
      'Établissement laïc agréé par l’État, nous accueillons tous les enfants sans distinction. Un encadrement de proximité, un suivi sérieux et l’égalité des chances : voilà notre engagement, de la petite section jusqu’au BEPC.',
    ],
    signature: 'Le Fondateur',
  },
  history: {
    title: 'Notre Histoire',
    paragraphs: [
      'Le Complexe Scolaire Privé Laïque Lueurs d’Espoir est implanté dans le quartier Tatchibou, à Dapaong, chef-lieu de la région des Savanes (préfecture de Tône, commune de Tône 1). On le trouve dans le secteur de Tantigou, à moins de 500 m derrière l’EPP Tantigou Peul.',
      'Son nom dit son ambition : être une source d’espoir pour la jeunesse de la région, en offrant à chaque enfant, quelle que soit sa situation, un encadrement de qualité et une vraie chance de réussir.',
      'Agréé par le Ministère des Enseignements Primaire, Secondaire et Technique, le complexe couvre l’ensemble du parcours scolaire de base, de la maternelle au collège, et prépare ses élèves au CEPE puis au BEPC.',
    ],
    stats: [
      { value: '3', label: 'Cycles d’enseignement' },
      { value: '13', label: 'Niveaux, de la petite section à la 3e' },
      { value: '100%', label: 'Engagement pour la réussite' },
    ],
  },
  values: [
    {
      icon: 'idea',
      title: 'Avenir de la jeunesse',
      text: 'Préparer aujourd’hui les citoyens et les talents de demain.',
    },
    {
      icon: 'users',
      title: 'Égalité des chances',
      text: 'Chaque enfant est accueilli et accompagné, sans distinction.',
    },
    {
      icon: 'heart',
      title: 'Encadrement de proximité',
      text: 'Un suivi attentif de chaque élève et un dialogue régulier avec les familles.',
    },
    {
      icon: 'graduation',
      title: 'Réussite éducative',
      text: 'Une préparation sérieuse au CEPE et au BEPC.',
    },
  ],
  faq: [
    {
      q: 'Où se trouve l’établissement ?',
      a: 'À Dapaong, dans le quartier Tatchibou (secteur de Tantigou), à moins de 500 m derrière l’EPP Tantigou Peul. Appelez-nous ou écrivez-nous sur WhatsApp au +228 90 34 70 50 pour être guidé.',
    },
    {
      q: 'L’établissement est-il reconnu par l’État ?',
      a: 'Oui. C’est un établissement d’enseignement général privé laïc, agréé par le Ministère des Enseignements Primaire, Secondaire et Technique.',
    },
    {
      q: 'Quels cycles proposez-vous ?',
      a: 'La maternelle (petite, moyenne et grande section), le primaire (du CP1 au CM2) et le collège (de la 6e à la 3e).',
      link: { to: '/cycles', label: 'Voir nos cycles' },
    },
    {
      q: 'Vos élèves passent-ils les examens officiels ?',
      a: 'Oui. Les élèves de CM2 sont préparés et présentés au CEPE, et les élèves de 3e bénéficient d’une préparation rigoureuse au BEPC.',
    },
    {
      q: 'Quelles sont les modalités de paiement ?',
      a: 'Des frais d’inscription sont réglés chaque année à l’inscription. La scolarité se paie ensuite par tranches, selon le calendrier communiqué par l’établissement.',
      link: { to: '/tarifs', label: 'Voir les tarifs' },
    },
  ],
  cycles: [
    {
      name: 'Maternelle',
      label: 'Maternelle',
      slug: 'maternelle',
      age: '3 à 6 ans',
      text: 'La maternelle (cycle préscolaire) est la première étape du parcours scolaire. Elle est consacrée à l’éveil, à la socialisation et à l’initiation aux premiers apprentissages.',
      classes: ['Petite section', 'Moyenne section', 'Grande section'],
      skills: [
        'Éveil et motricité',
        'Développement du langage',
        'Initiation à la lecture et au calcul',
        'Apprentissage de la vie en groupe',
      ],
      programs: [
        {
          icon: 'idea',
          title: 'Éveil artistique',
          text: 'Dessin, peinture, activités manuelles et créativité.',
        },
        {
          icon: 'heart',
          title: 'Chants et expression',
          text: 'Comptines, chants, rythmes et jeux de mouvement.',
        },
        {
          icon: 'book',
          title: 'Premiers apprentissages',
          text: 'Préparer l’entrée au CP1 en découvrant et en jouant.',
        },
      ],
    },
    {
      name: 'Primaire',
      label: 'Primaire',
      slug: 'primaire',
      age: '6 à 12 ans',
      text: 'Le primaire consolide les apprentissages fondamentaux, du CP1 au CM2. Le cycle est sanctionné par le CEPE (Certificat d’Études du Premier Cycle), obligatoire pour le passage en classe de 6e.',
      classes: ['CP1', 'CP2', 'CE1', 'CE2', 'CM1', 'CM2'],
      skills: [
        'Lecture, écriture et expression orale',
        'Mathématiques et raisonnement logique',
        'Sciences, histoire-géographie et éducation civique',
        'Préparation au CEPE en classe de CM2',
      ],
      programs: [
        {
          icon: 'book',
          title: 'Savoirs fondamentaux',
          text: 'Lecture, écriture et calcul au quotidien.',
        },
        {
          icon: 'idea',
          title: 'Sciences et découverte',
          text: 'Observer, comprendre et développer sa curiosité.',
        },
        {
          icon: 'graduation',
          title: 'Objectif CEPE',
          text: 'Révisions, devoirs et examens blancs en CM2.',
        },
      ],
    },
    {
      name: 'Collège',
      label: 'Collège',
      slug: 'college',
      age: '11 à 16 ans',
      text: 'Le collège (secondaire 1er cycle) accueille les élèves de la 6e à la 3e. Il approfondit les connaissances et les méthodes de travail, et assure une préparation rigoureuse à l’examen officiel du BEPC (Brevet d’Études du Premier Cycle).',
      classes: ['6e', '5e', '4e', '3e'],
      skills: [
        'Enseignements généraux approfondis',
        'Méthodologie et autonomie',
        'Suivi régulier des résultats',
        'Préparation au BEPC et à l’orientation',
      ],
      programs: [
        {
          icon: 'graduation',
          title: 'Objectif BEPC',
          text: 'Un suivi renforcé et des examens blancs en classe de 3e.',
        },
        {
          icon: 'book',
          title: 'Langues et culture',
          text: 'Français, anglais et ouverture culturelle.',
        },
        {
          icon: 'shield',
          title: 'Préparer l’avenir',
          text: 'Construire son projet et préparer l’entrée au lycée.',
        },
      ],
    },
  ],
  admissions: {
    documents: [
      'Un (1) acte de naissance',
      'Les bulletins des trimestres précédents (sauf entrée en petite section)',
      'Un certificat de transfert (pour un élève venant d’un autre établissement)',
      'Le relevé ou l’attestation de réussite au CEPE (pour une entrée en 6e)',
      'Deux (2) photos d’identité récentes',
      'Le reçu de paiement des frais d’inscription annuels',
    ],
  },
}

/** Classes par cycle, dérivées du profil (formulaires, filtres, fake data). */
export const classesByCycle: Record<string, string[]> = Object.fromEntries(
  school.cycles.map((c) => [c.name, c.classes]),
)

/** Libellé affiché d'un cycle à partir de sa valeur technique (ex. « Maternelle » → « Préscolaire »). */
export const cycleLabel = (name: string): string =>
  school.cycles.find((c) => c.name === name)?.label ?? name
