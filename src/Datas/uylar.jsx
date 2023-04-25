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
    shartnoma: 'kerakmas',
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
  {
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
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
    id: 21,
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
    id: 22,
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
    id: 23,
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
    id: 24,
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
    id: 25,
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
    id: 26,
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
    id: 27,
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
    id: 28,
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
    id: 29,
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
    id: 30,
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
    id: 31,
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
    id: 32,
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
    id: 33,
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
    id: 34,
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
    id: 35,
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
    id: 36,
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
