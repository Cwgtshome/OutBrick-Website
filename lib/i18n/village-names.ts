import type { Locale } from './locales';

const ptBR: Record<string, string> = {
  'Garden City': 'Cidade Jardim',
  'Clover Farm': 'Fazenda do Trevo',
  'Seashell Beach': 'Praia das Conchas',
  'Unicorn Meadow': 'Prado dos Unicórnios',
  'Button Factory': 'Fábrica de Botões',
  'Ember Volcano': 'Vulcão das Brasas',
  'Rainbow Canal': 'Canal do Arco-Íris',
  'Moonlit Meadow': 'Prado ao Luar',
  'Autumn Orchard': 'Pomar de Outono',
  'Snowflake Village': 'Vila dos Flocos de Neve',
  'Coral Cove': 'Enseada dos Corais',
  'Honeybee Hollow': 'Vale das Abelhas',
  'Bamboo Springs': 'Fontes de Bambu',
  'Crystal Valley': 'Vale dos Cristais',
  'Cloud Carnival': 'Carnaval nas Nuvens',
  'Dinosaur Grove': 'Bosque dos Dinossauros',
  'Desert Oasis': 'Oásis do Deserto',
  'Cherry Blossom Town': 'Vila das Cerejeiras',
  'Spaceport Gardens': 'Jardins do Porto Espacial',
  'Pirate Harbor': 'Porto dos Piratas',
  'Mushroom Forest': 'Floresta dos Cogumelos',
  'Royal Rose Court': 'Jardim das Rosas Reais',
  'Waterwheel Woods': 'Bosque da Roda-d’Água',
  'Sunflower Railway': 'Ferrovia dos Girassóis',
  'Peppermint Plaza': 'Praça da Hortelã',
  'Firefly Wetlands': 'Brejo dos Vagalumes',
  'Lavender Hills': 'Colinas de Lavanda',
  'Celebration Square': 'Praça da Celebração',
};

export function localizedVillageName(name: string, locale: Locale): string {
  return locale === 'pt-BR' ? ptBR[name] ?? name : name;
}
