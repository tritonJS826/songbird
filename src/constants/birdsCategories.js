// import API_URLS from './APIUrls';

const australia = [
  {
    id: '1',
    ruName: 'Коала',
    latName: 'Phascolarctos cinereus',
    description:
      'Вид сумчатых, обитающий в Австралии. Единственный современный представитель семейства коаловых (Phascolarctidae) из отряда двурезцовых сумчатых (Diprotodontia). ',
    img: '../img/PhascolarctosCinereus.jpg',
    audio: '../sounds/PhascolarctosCinereus.mp3',
    pressed: false,
  },
  {
    id: '2',
    ruName: 'Кенгуру',
    latName: 'Macropus rufus',
    description:
      'Крупнейший из видов кенгуру, крупнейшее млекопитающее в Австралии, крупнейшее из современных сумчатых',
    img: '../img/MacropusRufus.jpg',
    audio: '../sounds/MacropusRufus.mp3',
    pressed: false,
  },
  {
    id: '3',
    ruName: 'Тасманский дьявол',
    latName: 'Sarcophilus harrisii',
    description:
      'Млекопитающее семейства хищных сумчатых; единственный вид рода Sarcophilus. Его чёрная окраска, огромная пасть с острыми зубами, зловещие ночные крики и свирепый нрав дали первым европейским поселенцам основание прозвать этого коренастого хищника «дьяволом»',
    img: '../img/SarcophilusHarrisii.jpg',
    audio: '../sounds/SarcophilusHarrisii.mp3',
    pressed: false,
  },
  {
    id: '4',
    ruName: 'Утконос',
    latName: 'Ornithorhynchus anatinus',
    description:
      'Водоплавающее млекопитающее отряда однопроходных, обитающее в Австралии. Это единственный современный представитель семейства утконосовых (Ornithorhynchidae).Это уникальное животное является одним из символов Австралии; оно изображено на реверсе австралийской монеты в 20 центов.',
    img: '../img/OrnithorhynchusAnatinus.jpg',
    audio: '../sounds/OrnithorhynchusAnatinus.mp3',
    pressed: false,
  },
  {
    id: '5',
    ruName: 'Вомбат',
    latName: 'Vombatus ursinus',
    description:
      'емейство сумчатых млекопитающих из отряда двурезцовых, обитающих в Австралии. Вомбаты — роющие норы травоядные животные, внешне напоминающие маленьких медведей или очень крупных хомяков. ',
    img: '../img/VombatusUrsinus.jpg',
    audio: '../sounds/VombatusUrsinus.mp3',
    pressed: false,
  },
  {
    id: '6',
    ruName: 'Калонг',
    latName: 'Pteropus vampyrus',
    description:
      'Гигантская летучая лисица, или большая летучая лисица, или калонг (Pteropus vampyrus) — вид рода летучих лисиц семейства крыланов. ',
    img: '../img/PteropusVampyrus.jpg',
    audio: '../sounds/PteropusVampyrus.mp3',
    pressed: false,
  },
];

const europe = [
  {
    id: '12',
    ruName: 'Песец ',
    latName: 'Alopex lagopus',
    description:
      'вид хищных млекопитающих семейства псовых, обычно относимый к роду лисицподошвы лап у песцов покрыты жёсткими волосами. ',
    img: '../img/AlopexLagopus.jpg',
    audio: '../sounds/AlopexLagopus.mp3',
    pressed: false,
  },
  {
    id: '2',
    ruName: 'Шакал',
    latName: 'Canis aureus',
    description:
      'млекопитающее из семейства псовых. Успешному распространению шакала способствует высокая миграционная активность зверя, а также способность использовать антропогенные ландшафты.',
    img: '../img/CanisAureus.jpg',
    audio: '../sounds/CanisAureus.mp3',
    pressed: false,
  },
  {
    id: '3',
    ruName: 'Лесной кот ',
    latName: 'Felis silvestris',
    description:
      'Хищное млекопитающее из семейства кошачьих. В таксономии продолжаются споры, относятся ли европейские, азиатские и африканские дикие кошки к разным видам или подвидам',
    img: '../img/FelisSilvestris.jpg',
    audio: '../sounds/FelisSilvestris.mp3',
    pressed: false,
  },
  {
    id: '4',
    ruName: 'Бурый медведь ',
    latName: 'Ursus arctos',
    description: 'Млекопитающее семейства медвежьих; один из самых крупных наземных хищников. ',
    img: '../img/UrsusArctos.jpg',
    audio: '../sounds/UrsusArctos.mp3',
    pressed: false,
  },
  {
    id: '5',
    ruName: 'Кит',
    latName: 'Balaena mysticetus',
    description:
      'Усатый кит, живущий в полярных районах Северного полушария. Максимальная длина: 20 м и даже 22 м[3] у самок, 18 м — у самцов; вес взрослого животного — от 75 до 100 т и 150 т[4]. Ныряет на глубину до 200 м и может оставаться под водой до 40 минут. Средняя скорость — около 20 км/ч. ',
    img: '../img/BalaenaMysticetus.jpg',
    audio: '../sounds/BalaenaMysticetus.mp3',
    pressed: false,
  },
  {
    id: '6',
    ruName: 'Овцебык',
    latName: 'Ovibos moschatus',
    description:
      'Дальние предки современных овцебыков жили в конце миоцена в высокогорьях Центральной Азии. Около 3,5 млн лет назад, когда климат стал заметно холоднее, предки овцебыков спустились с Гималаев и распространились по территории Сибири и остальной северной Евразии',
    img: '../img/OvibosMoschatus.jpg',
    audio: '../sounds/OvibosMoschatus.mp3',
    pressed: false,
  },
];

const asia = [
  {
    id: '1',
    ruName: 'Мангуст',
    latName: 'Herpestidae',
    description:
      'нешним видом мангустовые напоминают хорьков. Это некрупные хищники: длина тела у них варьирует от 23 до 75 см, масса — от 1 до 5—6 кг.',
    img: '../img/Herpestidae.jpg',
    audio: '../sounds/Herpestidae.mp3',
    pressed: false,
  },
  {
    id: '2',
    ruName: 'Панда',
    latName: 'Ailuropoda melanoleuca',
    description:
      'В длину большая панда достигает 1,2—1,8 м и имеет массу 17—160 кг[7]. Самцы крупнее самок по размеру (на 10 %) и по весу (на 20 %). В отличие от других медведей, имеет довольно длинный хвост (10—15 см).',
    img: '../img/AiluropodaMelanoleuca.jpg',
    audio: '../sounds/AiluropodaMelanoleuca.mp3',
    pressed: false,
  },
  {
    id: '3',
    ruName: 'Антилопа',
    latName: 'Dibatags',
    description:
      'Луга, плато и пустыни северной и западной части Китая являются домом для нескольких видов антилоп.',
    img: '../img/Dibatags.jpg',
    audio: '../sounds/Dibatags.mp3',
    pressed: false,
  },
  {
    id: '4',
    ruName: 'Куница',
    latName: 'Martes foina',
    description:
      'Является одним из видов куньих , произрастающие в большую части Европы и Центральной Азии ',
    img: '../img/MartesFoina.jpg',
    audio: '../sounds/MartesFoina.mp3',
    pressed: false,
  },
  {
    id: '5',
    ruName: 'Тюлень',
    latName: 'Phocidae',
    description: 'Пятнистый тюлень является единственными видами тюленей , что гнездится в Китае.',
    img: '../img/Phocidae.jpg',
    audio: '../sounds/Phocidae.mp3',
    pressed: false,
  },
  {
    id: '6',
    ruName: 'Азиатский слон',
    latName: 'Indian elephant',
    description:
      'В последние годы китайский спрос на слоновую кость привело к резкому увеличению слона браконьерства во всем мире',
    img: '../img/IndianElephant.jpg',
    audio: '../sounds/IndianElephant.mp3',
    pressed: false,
  },
];

// const northAmerica = [
//   {
//     id: '1',
//     ruName: 'Ворон',
//     latName: 'Corvus corax',
//     description: 'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
//     img: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
//     audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3',
//     pressed: false,
//   },
//   {
//     id: '2',
//     ruName: 'Журавль',
//     latName: 'Grus grus',
//     description: 'Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».',
//     img: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
//     audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3',
//     pressed: false,
//   },
//   {
//     id: '3',
//     ruName: 'Ласточка',
//     latName: 'Delichon urbicum',
//     description: 'Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.',
//     img: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
//     audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3',
//     pressed: false,
//   },
//   {
//     id: '4',
//     ruName: 'Козодой',
//     latName: 'Caprimulgus europaeus',
//     description: 'Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ',
//     img: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
//     audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3',
//     pressed: false,
//   },
//   {
//     id: '5',
//     ruName: 'Кукушка',
//     latName: 'Cuculus canorus',
//     description: 'Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.',
//     img: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
//     audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3',
//     pressed: false,
//   },
//   {
//     id: '6',
//     ruName: 'Синица',
//     latName: 'Parus major',
//     description: 'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',
//     img: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
//     audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3',
//     pressed: false,
//   },
// ];
//
// const southAmerica = [
//   {
//     id: '12',
//     ruName: 'Ворон2',
//     latName: 'Corvus corax2',
//     description: '2Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
//     img: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
//     audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3',
//     pressed: false,
//   },
//   {
//     id: '2',
//     ruName: 'Журавль',
//     latName: 'Grus grus',
//     description: 'Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».',
//     img: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
//     audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3',
//     pressed: false,
//   },
//   {
//     id: '3',
//     ruName: 'Ласточка',
//     latName: 'Delichon urbicum',
//     description: 'Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.',
//     img: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
//     audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3',
//     pressed: false,
//   },
//   {
//     id: '4',
//     ruName: 'Козодой',
//     latName: 'Caprimulgus europaeus',
//     description: 'Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ',
//     img: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
//     audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3',
//     pressed: false,
//   },
//   {
//     id: '5',
//     ruName: 'Кукушка',
//     latName: 'Cuculus canorus',
//     description: 'Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.',
//     img: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
//     audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3',
//     pressed: false,
//   },
//   {
//     id: '6',
//     ruName: 'Синица',
//     latName: 'Parus major',
//     description: 'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',
//     img: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
//     audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3',
//     pressed: false,
//   },
// ];
//
// const africa = [
//   {
//     id: '1',
//     ruName: 'Ворон',
//     latName: 'Corvus corax',
//     description: 'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
//     img: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
//     audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3',
//     pressed: false,
//   },
//   {
//     id: '2',
//     ruName: 'Журавль',
//     latName: 'Grus grus',
//     description: 'Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».',
//     img: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
//     audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3',
//     pressed: false,
//   },
//   {
//     id: '3',
//     ruName: 'Ласточка',
//     latName: 'Delichon urbicum',
//     description: 'Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.',
//     img: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
//     audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3',
//     pressed: false,
//   },
//   {
//     id: '4',
//     ruName: 'Козодой',
//     latName: 'Caprimulgus europaeus',
//     description: 'Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ',
//     img: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
//     audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3',
//     pressed: false,
//   },
//   {
//     id: '5',
//     ruName: 'Кукушка',
//     latName: 'Cuculus canorus',
//     description: 'Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.',
//     img: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
//     audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3',
//     pressed: false,
//   },
//   {
//     id: '6',
//     ruName: 'Синица',
//     latName: 'Parus major',
//     description: 'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',
//     img: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
//     audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3',
//     pressed: false,
//   },
// ];

const northAmerica = [
  {
    id: '1',
    ruName: 'Бурый медведь',
    latName: 'Ursus arctos',
    description:
      'Бурый медведь - один из самых крупных и мощных наземных хищников Северной Америки. Эти медведи оснащены невтяжными когтями, которые используются в первую очередь для рытья, а также обеспечивают хорошее сцепление с поверхностью во время бега. Несмотря на массу тела, свыше 500 кг, эти животные развивают скорость до 50 км в час. Название животного говорит само за себя, бурые медведи имеют темно-коричневую или желтовато-коричневую шерсть.',
    img: 'https://vestikavkaza.ru/upload/2018-09-11/15366489675b976707a94435.87363534.jpg',
    audio: 'https://zvukipro.com/uploads/files/2018-10/1538581616_z_uki-zhi_otnyh-med_ed.mp3',
    pressed: false,
  },
  {
    id: '2',
    ruName: 'Журавль',
    latName: 'Grus grus',
    description:
      'Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».',
    img: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
    audio:
      'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3',
    pressed: false,
  },
  {
    id: '3',
    ruName: 'Лось',
    latName: 'Alces americanus',
    description:
      'Лось американский - самый большой член семейства оленей. Тело американского лося тяжелое с длинными ногами и вытянутой мордой. Мех имеет темно-коричневый (почти черный) окрас. У самцов вырастают большие рога (самые крупные из живущих в наше время млекопитающих.',
    img:
      'https://st.depositphotos.com/2808141/3391/i/450/depositphotos_33913915-stock-photo-moose.jpg',
    audio: 'https://zvukipro.com/uploads/files/2017-08/1504022348_sound_5.mp3',
    pressed: false,
  },
  {
    id: '4',
    ruName: 'Волк',
    latName: 'lupus tundrarum',
    description:
      'Поля́рный волк - полярный волк обитает на обширных пространствах полярных регионов, зимой в условиях полярной ночи. Чтобы выжить, волк приспособился есть любой корм, который только попадается. Он хорошо приспособлен к жизни в Арктике: может годами жить при минусовой температуре, месяцами не видеть солнечного света и неделями оставаться без пищи..',
    img: 'https://imgtube.ru/images/stories/2013/02/512-polar-wolf/8.jpg',
    audio: 'https://zvukipro.com/uploads/files/2019-06/1559544471_wolf-howl-sound.mp3',
    pressed: false,
  },
  {
    id: '5',
    ruName: 'Хорек',
    latName: 'Mustela nigripes',
    description:
      'Хорек - предыдущие представители североамериканской фауны в этом списке имеют относительно здоровые и процветающие популяции, но американский хорёк балансирует на грани исчезновения. На самом деле, эти член семейства куньих, в буквальном смысле умер и воскрес. Вид был объявлен вымершим в дикой природе в 1987 году, а затем был успешно восстановлен в Аризоне, Вайоминге и Южной Дакоте.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Mustela_nigripes_2.jpg',
    audio: 'https://zvukipro.com/uploads/files/2020-04/1585736809_zvuk-horka.mp3',
    pressed: false,
  },
  {
    id: '6',
    ruName: 'Бобр',
    latName: 'Castor canadensis',
    description:
      'Канадский бобр - полуводное млекопитающее имеет горизонтально сплюснутый и широкой, покрытый чешуёй хвост. Пальцы грызуна, расположенные на задних конечностях, соединены друг с другом особой плавательной перепонкой, благодаря чему такое животное является отличным пловцом.',
    img: 'https://simple-fauna.ru/wp-content/uploads/2019/02/zhivotnye-severnoj-ameriki-3.jpg',
    audio: 'https://zvukipro.com/uploads/files/2017-12/1513206542_urchanie-bobra.mp3',
    pressed: false,
  },
];

const southAmerica = [
  {
    id: '1',
    ruName: 'Выдра',
    latName: 'Lutra lutra',
    description:
      'Выдра -  вид хищных млекопитающих из семейства куньих, ведущих полуводный образ жизни. В литературе под словом «выдра» обычно подразумевается именно этот вид, хотя в роде выдр несколько видов.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Loutre2.jpg',
    audio: 'https://zvukipro.com/uploads/files/2019-08/1566025964_8b5b89b221214aa.mp3',
    pressed: false,
  },
  {
    id: '2',
    ruName: 'Пума',
    latName: 'Puma concolor',
    description:
      'Пу́ма  -  хищник рода Пумы семейства кошачьих. Обитает в Северной и Южной Америке. Самый крупный представитель рода пум. Длина тела животного составляет 100—180 см, при длине хвоста 60—75 см, высота в холке 61—76 см при весе до 105 кг (самцы). Охотится преимущественно на оленей.',
    img: 'https://lentachel.ru/netcat_files/Image/foto/2020/03/12/gornyy_lev.jpg',
    audio: 'https://zvukipro.com/uploads/files/2019-11/1573201418_8608ecc935ac7a5.mp3',
    pressed: false,
  },
  {
    id: '3',
    ruName: 'Гуана́ко',
    latName: 'Lama guanicoe',
    description:
      'Гуана́ко  -  млекопитающее рода лам семейства верблюдовых. Является предком одомашненной ламы. Животное стройного, лёгкого телосложения, по пропорциям напоминающее оленя или антилопу, но с более вытянутой шеей. Длинная шея гуанако служит балансиром при ходьбе и беге. Длина тела 120—175 см, длина хвоста — 15-25 см, высота в холке 90-130 см; масса — 115—140 кг. Конечности двупалые, сохранились только третий и четвёртый пальцы.',
    img:
      'https://www.zoo-ekzo.ru/sites/default/files/styles/large/public/lama_guanicoe.jpg?itok=NawK6vzq',
    audio: 'https://zvukipro.com/uploads/files/2019-10/1571469466_2ad4a8a8fb0b9a0.mp3',
    pressed: false,
  },
  {
    id: '4',
    ruName: 'Ягуар',
    latName: 'Panthera onca',
    description:
      'Ягуа́р — вид хищных млекопитающих семейства кошачьих, один из четырёх представителей рода пантер, который относится к подсемейству больших кошек. Единственный представитель рода на территории Северной и Южной Америки. Третий по размеру в мире, и самый крупный в Новом свете представитель семейства кошачьих[2]. Ареал вида простирается от Мексики к югу до Парагвая и северной Аргентины.',
    img: 'https://kipmu.ru/wp-content/uploads/yaguar-1.jpg',
    audio: 'https://zvukipro.com/uploads/files/2020-02/1580723856_e0002b6ec622b90.mp3',
    pressed: false,
  },
  {
    id: '5',
    ruName: 'Крокодил',
    latName: 'Crocodylus intermedius',
    description:
      'Оринокский крокодил — пресмыкающееся семейства настоящих крокодилов, обитает в бассейне реки Ориноко на севере Южной Америки. Это один из самых крупных видов крокодилов и самое крупное животное Южной Америки: длина взрослых самцов может достигать, по крайней мере, 5,2 м, а иногда даже больше. Имелись также сообщения о более чем семиметровых экземплярах, но они малодостоверны.',
    img:
      'https://lh3.googleusercontent.com/proxy/Sy-8MDPaeDHyC7mtJ1WofsLOqORY08Mr3yZHGXN0Oq13EnRsLxDMslIvivx2GDCGxiV61kO6j-4qJG550I4Fcvd74nK2zFoyrcE',
    audio: 'https://zvukipro.com/uploads/files/2018-11/1541691216_z_uki-zhi_otnyh-ryk.mp3',
    pressed: false,
  },
  {
    id: '6',
    ruName: 'Черепаха',
    latName: 'Chelonoidis elephantopus',
    description:
      'Слоновая черепаха или галапагосская черепаха — вид сухопутных черепах. Эндемик Галапагосских островов, вид, находящийся под угрозой исчезновения. Является крупнейшим из живущих в настоящее время сухопутных черепах и 10-м по весу среди всех живущих рептилий, достигая веса более 400 кг и длины более 1,8 метров. При продолжительности жизни в дикой природе более 100 лет.',
    img: 'https://ianimal.ru/wp-content/uploads/2011/06/galapagos06.jpg',
    audio:
      'https://zvukipro.com/uploads/files/2019-01/1547467920_aos04534_tortoise_mating_call.mp3',
    pressed: false,
  },
];

const africa = [
  {
    id: '1',
    ruName: 'Крокодил',
    latName: 'Crocodylus niloticus',
    description:
      'Ни́льский крокоди́л — крупное пресмыкающееся семейства настоящих крокодилов. Самый большой из трёх видов крокодилов, обитающих в Африке, и второй по величине в мире, после гребнистого крокодила. Занимает верхнее положение в водных и околоводных экосистемах Африки. Взрослые особи способны справляться с такими крупными и сильными зверями, как черный носорог, гиппопотам, жираф, африканский буйвол, канна и лев.',
    img: 'https://theanimalw.com/wp-content/uploads/2015/08/318.jpg',
    audio: 'https://zvukipro.com/uploads/files/2018-11/1541691216_z_uki-zhi_otnyh-ryk.mp3',
    pressed: false,
  },
  {
    id: '2',
    ruName: 'Слон',
    latName: 'Loxodonta',
    description:
      'Африканский слон - род африканских млекопитающих отряда хоботных. Предположительно включает два современных вида: саванный слон (Loxodonta africana (L. Blumenbach, 1797)) и лесной слон (Loxodonta cyclotis (Paul Matschie, 1900)). Последние исследования ДНК африканских слонов дают возможность предполагать, что эти два вида рода Loxodonta образовались 1,9 и 6 миллионов лет назад.',
    img: 'https://xn----dtblihagxczul4i.xn--p1ai/wp-content/uploads/2019/11/gfHWIGD.jpeg',
    audio: 'https://zvukipro.com/uploads/files/2018-10/1540913446_z_uk-slona.mp3',
    pressed: false,
  },
  {
    id: '3',
    ruName: 'Буйвол',
    latName: 'Syncerus caffer',
    description:
      'Африканский буйвол - вид быков, широко распространённый в Африке. Будучи типичным представителем подсемейства быков, африканский буйвол, однако, весьма своеобразен и выделяется в отдельный род Syncerus с единственным видом (это также единственный из подсемейства быков, обитающий в Африке).',
    img: 'https://o-prirode.ru/wp-content/uploads/2018/03/buyvol-africanskiy-e1522010443209.jpg',
    audio: 'https://zvukipro.com/uploads/files/2019-12/1577123296_7df8c3540bc89f0.mp3',
    pressed: false,
  },
  {
    id: '4',
    ruName: 'Страус',
    latName: 'Struthio',
    description:
      'Африка́нский стра́ус - бескилевая нелетающая птица, единственный современный представитель семейства страусовых',
    img: 'https://zooclub.ru/attach/16000/16112.jpg',
    audio: 'http://zoohoz.ru/wp-content/uploads/2016/02/Straus.mp3',
    pressed: false,
  },
  {
    id: '5',
    ruName: 'Лев',
    latName: 'Panthera leo',
    description:
      'Лев — вид хищных млекопитающих, один из четырёх представителей рода пантер, относящегося к подсемейству больших кошек в составе семейства кошачьих. Наряду с тигром — самая крупная из ныне живущих кошек, масса некоторых самцов может достигать 250 кг',
    img:
      'https://cdn24.img.ria.ru/images/07e4/03/05/1568176942_36:0:1749:1285_1400x0_80_0_0_bc3f38e58c2370975ea4e8f5be98ec99.jpg',
    audio: 'https://zvukipro.com/uploads/files/2017-09/1504517217_ryk-lva.mp3',
    pressed: false,
  },
  {
    id: '6',
    ruName: 'Лемур',
    latName: 'Lemuriformes',
    description:
      'Лемуры — удивительные приматы, которые встречаются только на острове Мадагаскар, на восточном побережье Южной Африки. В целом насчитывается 30 различных видов лемуров, и все они являются эндемичными для Мадагаскара.',
    img: 'https://web-zoopark.ru/wp-content/uploads/2018/07/2-126.jpg',
    audio: 'https://zvukipro.com/uploads/files/2018-12/1544768142_z_uki-lemuro_.mp3',
    pressed: false,
  },
];

const arrCategorys = [
  {
    id: '0',
    categoryNumber: 0,
    name: 'Австралия',
    birds: australia,
  },
  {
    id: '1',
    categoryNumber: 1,
    name: 'Европа',
    birds: europe,
  },
  {
    id: '2',
    categoryNumber: 2,
    name: 'Азия',
    birds: asia,
  },
  {
    id: '3',
    categoryNumber: 3,
    name: 'Северная Америка',
    birds: northAmerica,
  },
  {
    id: '4',
    categoryNumber: 4,
    name: 'Южная Америка',
    birds: southAmerica,
  },
  {
    id: '5',
    categoryNumber: 5,
    name: 'Африка',
    birds: africa,
  },
];

export default arrCategorys;
