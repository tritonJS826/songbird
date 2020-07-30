import API_URLS from './APIUrls';

const birdArray = [
  {
    id: 'ksdmf',
    img: API_URLS.BIRD_IMG('Corvus frugilegus'),
    mp3: API_URLS.BIRD_AUDIO('Corvus frugilegus'),
    ruName: 'Грач-1',
    latName: 'Corvus frugilegus',
    description: '',
    pressed: false,
  },
  {
    id: 'ksdmf2',
    img: API_URLS.BIRD_IMG('Corvus frugilegus'),
    mp3: API_URLS.BIRD_AUDIO('Corvus frugilegus'),
    ruName: 'Грач-2',
    latName: 'Corvus frugilegus',
    description: 'adsdln;fvlnz;lfvn;zdflknv',
    pressed: false,
  },
  {
    id: 'ksdmf3',
    img: API_URLS.BIRD_IMG('Corvus frugilegus'),
    mp3: API_URLS.BIRD_AUDIO('Corvus frugilegus'),
    ruName: 'Грач1',
    latName: 'Corvus frugilegus',
    description: 'adsdln;fvlnz;lfvn;zdflknv',
    pressed: false,
  },
  {
    id: 'ksdmf4',
    img: API_URLS.BIRD_IMG('Corvus frugilegus'),
    mp3: API_URLS.BIRD_AUDIO('Corvus frugilegus'),
    ruName: 'Грач2',
    latName: 'Corvus frugilegus',
    description: 'adsdln;fvlnz;lfvn;zdflknv',
    pressed: false,
  },
  {
    id: 'ksdmf5',
    img: API_URLS.BIRD_IMG('Corvus frugilegus'),
    mp3: API_URLS.BIRD_AUDIO('Corvus frugilegus'),
    ruName: 'Грач3',
    latName: 'Corvus frugilegus',
    description: 'adsdln;fvlnz;lfvn;zdflknv',
    pressed: false,
  },
  {
    id: 'ksdmf6',
    img: API_URLS.BIRD_IMG('Corvus frugilegus'),
    mp3: API_URLS.BIRD_AUDIO('Corvus frugilegus'),
    ruName: 'Грач4',
    latName: 'Corvus frugilegus',
    description: 'adsdln;fvlnz;lfvn;zdflknv',
    pressed: false,
  },
];

const arrCategorys = [
  {
    id: '0',
    categoryNumber: 0,
    name: 'Разминка',
    birds: birdArray,
  },
  {
    id: '1',
    categoryNumber: 1,
    name: 'Воробьиные',
    birds: birdArray,
  },
  {
    id: '2',
    categoryNumber: 2,
    name: 'Лесные птицы',
    birds: birdArray,
  },
  {
    id: '3',
    categoryNumber: 3,
    name: 'Певчие птицы',
    birds: birdArray,
  },
  {
    id: '4',
    categoryNumber: 4,
    name: 'Хищные птицы',
    birds: birdArray,
  },
  {
    id: '5',
    categoryNumber: 5,
    name: 'Морские птицы',
    birds: birdArray,
  },
];

export default arrCategorys;
