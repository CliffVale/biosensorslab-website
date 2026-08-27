import { DEFAULT_LANG, LANGUAGES } from './constants';

export const languages = LANGUAGES;

export const defaultLang = DEFAULT_LANG;

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.research': 'Research',
    'nav.achievements': 'Achievements',
    'nav.publications': 'Publications',
    'nav.patents': 'Patents',
    'nav.team': 'Team',
    'nav.activities': 'Activities',
    'nav.join': 'Join Us',
    'nav.news': 'News',
    'nav.search': 'Search',
    'nav.equipment': 'Equipment',

    'search.subtitle': 'Search through our publications, news, and team members.',

    'hero.viewPubs': 'View Publications',
    'hero.meetTeam': 'Meet the Team',

    'section.selectedPubs': 'Selected Publications',
    'section.viewAll': 'View all',
    'section.latestNews': 'Latest News',

    'achievements.title': 'Research Achievements',
    'achievements.subtitle':
      'A comprehensive collection of our academic publications, intellectual property, and collective honors.',
    'achievements.papers': 'Published Papers',
    'achievements.books': 'Book Chapters',
    'achievements.softwares': 'Software Copyrights',
    'achievements.patents': 'Invention Patents',
    'achievements.honors': 'Group Honors',
    'achievements.noPapers': 'No papers listed yet.',
    'achievements.noBooks': 'No book chapters listed yet.',
    'achievements.noSoftwares': 'No software copyrights listed yet.',
    'achievements.noPatents': 'No patents listed yet.',
    'achievements.noHonors': 'No honors listed yet.',
    'achievements.developers': 'Developers:',
    'achievements.inventors': 'Inventors:',
    'achievements.regNumber': 'Reg. Number:',
    'achievements.date': 'Date:',

    'activities.title': 'Team Activities',
    'activities.subtitle': 'Workshops, seminars, and team building events.',
    'activities.noActivities': 'No activities added yet.',

    'research.subtitle':
      'We develop biosensors and point-of-care devices for diagnostics, wearable health monitoring, and programmable biomaterials.',
    'research.learnMore': 'Learn More',
    'research.noAreas': 'No research areas defined.',

    'join.title': 'Join Us',
    'join.subtitle':
      'We are always looking for motivated students and researchers to join our lab. If you are interested in biosensors, point-of-care diagnostics, or wearable devices, please contact us!',
    'join.phd': 'PhD Students',
    'join.phdDesc':
      'We are looking for PhD students with a strong background in any of: chemistry, biology, electronics, or bioengineering.',
    'join.phdList1': 'Curiosity-driven research mindset',
    'join.phdList2': 'Hands-on experimental skills',
    'join.phdList3': 'Interest in biosensors & diagnostics',
    'join.master': 'Master Students',
    'join.masterDesc':
      'Motivated master students who want to dive deep into biosensor research are welcome.',
    'join.masterList1': 'Passion for research',
    'join.masterList2': 'Basic wet-lab or electronics skills',
    'join.masterList3': 'Commitment to projects',
    'join.undergrad': 'Undergraduates',
    'join.undergradDesc':
      'Talented undergraduates can join us for research training, projects, and internships.',
    'join.undergradList1': 'Curiosity driven',
    'join.undergradList2': 'Fast learner',
    'join.undergradList3': 'Team player',
    'join.howToApply': 'How to Apply',
    'join.applicationText':
      'Please send your CV, transcripts, and a brief statement of research interests to Dr. Naveen Kumar Singh. Make sure to include "[Application]" in your email subject.',
    'join.sendEmail': 'Send Email',

    'news.title': 'News & Updates',
    'news.noNews': 'No news yet.',

    'team.title': 'Our Team',
    'team.subtitle': 'Meet the researchers and students behind our innovations.',
    'team.pi': 'Principal Investigator',
    'team.faculty': 'Faculty',
    'team.youth_researcher': 'Postdoctoral Researchers',
    'team.support': 'Research Support',
    'team.professor': 'Professors',
    'team.teacher': 'Faculty',
    'team.postdoc_researcher': 'Postdoctoral Researchers',
    'team.postdoc': 'Postdoctoral Researchers',
    'team.phd': 'PhD Students',
    'team.master': 'Master Students',
    'team.graduate': 'Graduate Students',
    'team.undergrad': 'Undergraduate Students',
    'team.alumni': 'Alumni',
    'team.former': 'Former Member',
    'team.noMembers': 'No team members found.',

    'footer.rights': 'All rights reserved.',
    'footer.powered': 'Powered by',
  },
} as const;

export function getLangFromUrl(url: URL) {
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}