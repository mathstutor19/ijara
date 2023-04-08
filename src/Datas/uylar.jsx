const cardsData = [
  {
    id: 1,
    title: 'yangi uy',
    hudud: 'namangan',
    narxi: 200,
    jinsi: 'ayol',
    xonasi: 3,
    shartnoma: 'kerak',
    turi: 'dom',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, voluptatum velit iure fugiat consequatur consectetur explicabo nam commodi esse officiis.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScWDrr3uwuc4JNuHuZm-siVCdC4oPihJJcH3wxtjC7ag_sWPFw4dzAzY1Wg7DbpWtwkTY&usqp=CAU',
  },
  {
    id: 2,
    title: 'eski uy',
    hudud: 'andijon',
    narxi: 100,
    jinsi: 'erkak',
    xonasi: 3,
    shartnoma: 'kerakmas',
    turi: 'hovli',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, voluptatum velit iure fugiat consequatur consectetur explicabo nam commodi esse officiis.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA37eCHw_raOMMP6cnOTLTcyPoi-5DKLq6b_3PY4NW1HzhzUQgfOUKUDLiT9-XFtt-OJ0&usqp=CAU',
  },
  {
    id: 3,
    title: 'yangi uy',
    hudud: 'fargona',
    jinsi: 'ayol',
    narxi: 2000,
    xonasi: 3,
    shartnoma: 'kerak',
    turi: 'dom',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, voluptatum velit iure fugiat consequatur consectetur explicabo nam commodi esse officiis.',
    image:
      'http://storage.kun.uz/source/1/da8dNJE6sXSa16uj_w6uHTP-19cpR8Td.jpg',
  },
  {
    id: 4,
    title: 'ortacha uy',
    hudud: 'tashkent',
    narxi: 300,
    jinsi: 'erkak',
    xonasi: 3,
    shartnoma: 'kerakmas',
    turi: 'hovli',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, voluptatum velit iure fugiat consequatur consectetur explicabo nam commodi esse officiis.',
    image:
      'http://storage.kun.uz/source/1/da8dNJE6sXSa16uj_w6uHTP-19cpR8Td.jpg',
  },
  {
    id: 5,
    title: 'yangi uy',
    hudud: 'namangan',
    narxi: 200,
    jinsi: 'ayol',
    xonasi: 3,
    shartnoma: 'kerak',
    turi: 'dom',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, voluptatum velit iure fugiat consequatur consectetur explicabo nam commodi esse officiis.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScWDrr3uwuc4JNuHuZm-siVCdC4oPihJJcH3wxtjC7ag_sWPFw4dzAzY1Wg7DbpWtwkTY&usqp=CAU',
  },
  {
    id: 6,
    title: 'eski uy',
    hudud: 'andijon',
    narxi: 100,
    jinsi: 'erkak',
    xonasi: 3,
    shartnoma: 'kerakmas',
    turi: 'hovli',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, voluptatum velit iure fugiat consequatur consectetur explicabo nam commodi esse officiis.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA37eCHw_raOMMP6cnOTLTcyPoi-5DKLq6b_3PY4NW1HzhzUQgfOUKUDLiT9-XFtt-OJ0&usqp=CAU',
  },
  {
    id: 7,
    title: 'yangi uy',
    hudud: 'fargona',
    jinsi: 'ayol',
    narxi: 2000,
    xonasi: 3,
    shartnoma: 'kerakmas',
    turi: 'dom',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, voluptatum velit iure fugiat consequatur consectetur explicabo nam commodi esse officiis.',
    image:
      'http://storage.kun.uz/source/1/da8dNJE6sXSa16uj_w6uHTP-19cpR8Td.jpg',
  },
  {
    id: 8,
    title: 'ortacha uy',
    hudud: 'tashkent',
    narxi: 300,
    jinsi: 'erkak',
    xonasi: 3,
    shartnoma: 'kerak',
    turi: 'hovli',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, voluptatum velit iure fugiat consequatur consectetur explicabo nam commodi esse officiis.',
    image:
      'http://storage.kun.uz/source/1/da8dNJE6sXSa16uj_w6uHTP-19cpR8Td.jpg',
  },
  {
    id: 9,
    title: 'yangi uy',
    hudud: 'namangan',
    narxi: 200,
    jinsi: 'ayol',
    xonasi: 4,
    shartnoma: 'kerakmas',
    turi: 'dom',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, voluptatum velit iure fugiat consequatur consectetur explicabo nam commodi esse officiis.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScWDrr3uwuc4JNuHuZm-siVCdC4oPihJJcH3wxtjC7ag_sWPFw4dzAzY1Wg7DbpWtwkTY&usqp=CAU',
  },
  {
    id: 10,
    title: 'eski uy',
    hudud: 'andijon',
    narxi: 100,
    jinsi: 'erkak',
    xonasi: 3,
    shartnoma: 'kerak',
    turi: 'hovli',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, voluptatum velit iure fugiat consequatur consectetur explicabo nam commodi esse officiis.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA37eCHw_raOMMP6cnOTLTcyPoi-5DKLq6b_3PY4NW1HzhzUQgfOUKUDLiT9-XFtt-OJ0&usqp=CAU',
  },
  {
    id: 11,
    title: 'yangi uy',
    hudud: 'fargona',
    jinsi: 'ayol',
    narxi: 2000,
    xonasi: 3,
    shartnoma: 'kerakms',
    turi: 'dom',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, voluptatum velit iure fugiat consequatur consectetur explicabo nam commodi esse officiis.',
    image:
      'http://storage.kun.uz/source/1/da8dNJE6sXSa16uj_w6uHTP-19cpR8Td.jpg',
  },
  {
    id: 12,
    title: 'ortacha uy',
    hudud: 'tashkent',
    narxi: 300,
    jinsi: 'erkak',
    xonasi: 3,
    shartnoma: 'kerakmas',
    turi: 'hovli',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, voluptatum velit iure fugiat consequatur consectetur explicabo nam commodi esse officiis.',
    image:
      'http://storage.kun.uz/source/1/da8dNJE6sXSa16uj_w6uHTP-19cpR8Td.jpg',
  },
];

export default cardsData;
