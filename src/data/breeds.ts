export type Breed = {
  name: string;
  description: string;
  image: string;
  desde?: string;
  precio: {
    macho: number;
    hembra: number;
  };
  images: string[];
};

export const smallBreeds: Breed[] = [
  {
    name: "Pomeranias mini cara de oso lineas importadas coreanos y rusos",
    description: "Energicos,Curosos, Leales, Valientes, Alertas! ",
    image: "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 10.22.39_5c7c894b.jpg",
    desde: "a partir de",
    precio: {
      macho: 3000000,
      hembra: 4000000
    },
    images: [
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 10.22.39_35225c42.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 10.22.42_b272ca2f.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 10.22.40_98e119fd.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 10.22.41_e01a8edc.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 10.22.41_5f758fa6.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 10.22.41_2380c2f2.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 10.22.41_27fe40ea.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 10.22.41_8b0ea796.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 10.22.40_332afe78.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 10.22.42_18ea6bfa.jpg",
      "/razas paqueñas/IMG-20250408-WA0060.jpg",
      "/razas paqueñas/IMG-20250422-WA0105.jpg",
      "/razas paqueñas/IMG-20250422-WA0115.jpg",
      "/razas paqueñas/118d8297-6bef-4416-8ab2-c3645f927190.jpg",
      "/razas paqueñas/acc07ced-366f-4f3b-99a1-3be90de9af99.jpg",
      "/razas paqueñas/9a09270f-b7bd-4e24-9d7a-dba09bc8a02d.jpg",
      "/razas paqueñas/5a105487-3b3a-418e-b01d-7bf6f3f83983.jpg",
      "/razas paqueñas/b6ed5163-3672-442e-80ed-3496fb72640b.jpg",
      "/razas paqueñas/529deb86-16e6-4e85-80af-e5780e2e8292.jpg",
      "/razas paqueñas/8b747a35-3224-4843-bbea-dfde5112a954.jpg",
      "/razas paqueñas/2fa419f9-6cc4-44e3-a7eb-6b186b248a77.jpg",
      "/razas paqueñas/0a3bdb9d-7041-4977-b660-b84aeb14a74e.jpg",
      "/razas paqueñas/00b1d8b6-881b-41b1-bde7-534dc29c8bdf.jpg",
      "/razas paqueñas/06adc90d-2000-4758-a52c-a8193296cfd0.jpg",
      "/razas paqueñas/c6fd370f-791d-4f49-9805-cda55070039b.jpg",
    ]
  },
  {
    name: "Bulldog Francés",
    description: "Compacto, cariñoso y de expresión divertida.",
    image: "/razas paqueñas/IMG-20250422-WA0204.jpg",
    desde: "a partir de",
    precio: {
      macho: 1200000,
      hembra: 1300000
    },
    images: [
      "/razas paqueñas/IMG-20250422-WA0213.jpg",
      "/razas paqueñas/IMG-20250422-WA0196.jpg",
      "/razas paqueñas/IMG-20250422-WA0205.jpg",
      "/razas paqueñas/IMG-20250422-WA0194.jpg",
      "/razas paqueñas/479fc9f3-91ae-44e8-8026-e55c0346feaf.jpg",
      "/razas paqueñas/a2b540e9-d0ce-477c-a804-c5d138876617.jpg",
      "/razas paqueñas/af7addb3-9e4d-4aea-8f73-b541bc05e7a7.jpg",
      "/razas paqueñas/cc7ad306-0dcd-45fb-8512-1f40b0e00827.jpg",
      "/razas paqueñas/d9e31424-8a1d-4096-838a-74c4a9bc9900.jpg",
      "/razas paqueñas/2955e2d6-43c2-4baa-b0ed-41d442276226.jpg",
      "/razas paqueñas/9f010bca-c0a8-43d8-899d-c745ba056271.jpg",
      "/razas paqueñas/8badde02-08d3-4a06-a9a2-038df03f1753.jpg",
      "/razas paqueñas/7db32094-5c5f-4a26-a5b9-223b3d56d44d.jpg",
      "/razas paqueñas/082871ae-ca3b-4edd-947d-5d4fd91a3163.jpg",
      "/razas paqueñas/e9505c67-2821-4fec-9558-81cce1aaf74b.jpg",
      "/razas paqueñas/e7f2ef90-a7a1-4fdf-87a7-33df31242b58.jpg",
      "/razas paqueñas/9c488fc7-5adf-4e9d-85d0-6083293ab46f.jpg",
      "/razas paqueñas/161c96c0-6421-4974-92d3-fd44a34b5694.jpg",
      "/razas paqueñas/bcef194e-3add-4513-9fc2-38e3ab413401.jpg",
      "/razas paqueñas/117c6ecf-d4e7-4c30-a6b5-ed2a10785daf.jpg",
      "/razas paqueñas/6948f2d9-f1b6-420b-8e0b-10f14120c330.jpg",


    ]
  },
  {
    name: "Bichon Maltes",
    description: "El Bichón Maltés es un perro pequeño, alegre y juguetón. Es conocido por su pelaje blanco y sedoso.",
    image: "/razas paqueñas/IMG-20250422-WA0163.jpg",
    precio: {
      macho: 2000000,
      hembra: 2500000
    },
    images: [
      "/razas paqueñas/IMG-20250422-WA0162.jpg",
      "/razas paqueñas/IMG-20250422-WA0161.jpg",
    ]
  },
  {
    name: "Yorkshie Terriers miniaturas Team cup",
    description: "El temperamento del perro Yorkshire Terrier es generalmente abierto, juguetón, divertido, curioso, inteligente y afectuoso...",
    image: "/razas paqueñas/yorkshkie.jpg",
    precio: {
      macho: 2000000,
      hembra: 2500000
    },
    images: [
      "/razas paqueñas/IMG-20250422-WA0045.jpg",
      "/razas paqueñas/IMG-20250422-WA0039.jpg",
      "/razas paqueñas/IMG-20250422-WA0047.jpg",
    ],
  },
  {
    name: "Yorkshire terrier biewer ",
    description: "El temperamento del perro Yorkshire Terrier es generalmente abierto, juguetón, divertido, curioso, inteligente y afectuoso...",
    image: "/razas paqueñas/7d6526f0-6e98-4259-9e39-79761e93d405.jpg",
    precio: {
      macho: 2500000,
      hembra: 3000000
    },
    images: [

      "/razas paqueñas/19f3478c-e99c-4f87-997c-2c6db69631ba.jpg",
      "/razas paqueñas/00caceb2-14d3-4c18-b22c-932bf5f7a82f.jpg",
      "/razas paqueñas/c8bbcd07-f28e-4250-94ec-7190a1cd7ff9.jpg",
    ],
  },

  {
    name: "Chitzu",
    description: "Afectuoso Tranquilo Sociable Docil Juguetón",
    image: "/razas paqueñas/IMG-20250422-WA0086.jpg",
    precio: {
      macho: 1500000,
      hembra: 1700000
    },
    images: [
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 17.19.51_b67e3d2a.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 17.19.55_6380a29e.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 17.19.56_c2de5790.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 17.19.56_89a5a36b.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 17.19.56_16fed881.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 17.19.57_3efcf89b.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 17.19.57_bb80cd61.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 17.19.58_d9cda6a5.jpg",
      "/razas paqueñas/IMG-20250422-WA0087.jpg",
      "/razas paqueñas/IMG-20250422-WA0081.jpg",
      "/razas paqueñas/IMG-20250422-WA0089.jpg",
    ]
  },
  {
    name: "Teckel salchicha",
    description: "El temperamento del perro Teckel es intuitivo, temerario y valiente...",
    image: "/razas paqueñas/IMG-20250422-WA0003.jpg",
    desde: "a partir de",
    precio: {
      macho: 1500000,
      hembra: 1500000
    },
    images: [
      "/razas paqueñas/IMG-20250422-WA0006.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 11.34.29_d58dd00b.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 11.34.29_f83a5072.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 11.34.29_eebb5ac9.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 11.34.30_b8d9c69d.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 11.34.30_f6de9ec0.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 11.34.30_083468da.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 11.34.30_30ca277e.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 11.34.30_607af05e.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 11.34.31_7ab2cb4c.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 11.34.31_d7d15ed4.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 11.34.31_86974a86.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 11.34.31_de5f3cc9.jpg",
      "/razas paqueñas/Imagen de WhatsApp 2025-09-19 a las 11.34.31_de2a9c31.jpg",
      "/razas paqueñas/IMG-20250422-WA0023.jpg",
      "/razas paqueñas/IMG-20250422-WA0024.jpg",
      "/razas paqueñas/IMG-20250422-WA0034.jpg",
      "/razas paqueñas/IMG-20250422-WA0010.jpg",

    ]
  },
  {
    name: "Jack Russell Terrier",
    description: "El temperamento del perro Jack Russell Terrier es enérgico, inteligente y curioso...",
    image: "/razas paqueñas/IMG-20250423-WA0197.jpg",
    precio: {
      macho: 1600000,
      hembra: 1600000
    },
    images: [
      "/razas paqueñas/IMG-20250422-WA0061.jpg",
      "/razas paqueñas/IMG-20250422-WA0067.jpg",
      "/razas paqueñas/IMG-20250422-WA0072.jpg",
    ]
  },
  {
    name: "Chihuahua miniatura",
    description: "El Chihuahua es un perro pequeño, pero con una gran personalidad. Es conocido por su lealtad y afecto hacia sus dueños.",
    image: "/razas paqueñas/IMG-20250423-WA0000.jpg",
    desde: "a partir de",
    precio: {
      macho: 1500000,
      hembra: 2000000
    },
    images: [
      "/razas paqueñas/IMG-20250423-WA0008.jpg",
      "/razas paqueñas/IMG-20250423-WA0011.jpg",
      "/razas paqueñas/IMG-20250423-WA0001.jpg",
      "/razas paqueñas/IMG-20250423-WA0195.jpg",
      "/razas paqueñas/574946c4-d8e4-4c73-8998-c8d7d76d8f9c.jpg",
      "/razas paqueñas/b05b8e0e-30ba-4eba-876c-fd55cd6e77f5.jpg",
      "/razas paqueñas/a8762fbe-f654-407a-97cc-999aab7498ee.jpg",
      "/razas paqueñas/4fc916aa-91f9-4f68-a7f9-15c417830ddb.jpg",
      "/razas paqueñas/00fe8ae0-f8d0-4d4a-a441-2c40504bff67.jpg",
      "/razas paqueñas/c7578b66-ac7e-4783-8858-016e66f24b23.jpg",
    ]
  },
];

export const mediumBreeds: Breed[] = [
  {
    name: "Cockel Spaniel ",
    description: "Se describe como amigable, alegre y afectuoso. Son muy sociables y se llevan bien con personas de todas las edades, incluidas las familias con niños..",
    image: "/razas-medianas/IMG-20250423-WA0014.jpg",
    precio: {
      macho: 1200000,
      hembra: 1200000
    },
    images: [
      "/razas-medianas/IMG-20250423-WA0015.jpg",
      "/razas-medianas/IMG-20250423-WA0019.jpg",
      "/razas-medianas/IMG-20250423-WA0026.jpg",
    ]
  },
  {
    name: "Beagles",
    description: "Es amigable, cariñoso y energético. Son perros ecuánimes, ni demasiado agresivos ni demasiado tímidos. Prefieren compañía y pueden ser destructivos y ladradores si se les deja solos. ",
    image: "/razas-medianas/IMG-20250423-WA0028.jpg",
    precio: {
      macho: 1300000,
      hembra: 1300000
    },
    images: [
      "/razas-medianas/IMG-20250423-WA0029.jpg",
      "/razas-medianas/IMG-20250423-WA0032.jpg",
    ]
  },
  {
    name: "West Highland White Terrier",
    description: "Con las personas se muestra por lo general muy cariñoso y sociable, aunque requiere una correcta educación desde cachorro para que el adulto sea un animal equilibrado.",
    image: "/razas-medianas/IMG-20250423-WA0037.jpg",
    precio: {
      macho: 2000000,
      hembra: 2500000
    },
    images: [
      "/razas-medianas/IMG-20250423-WA0036.jpg",
      "/razas-medianas/IMG-20250423-WA0035.jpg",
      "/razas-medianas/IMG-20250423-WA0034.jpg",
    ]
  },
  {
    name: "Schnauzer ",
    description: "El schnauzer es una raza canina con un temperamento fuerte y cariñoso. Son inteligentes, energéticos y protectores. Aunque ladran mucho, también son excelentes perros guardianes",
    image: "/razas-medianas/IMG-20250423-WA0041.jpg",
    precio: {
      macho: 1300000,
      hembra: 1300000
    },
    images: [
      "/razas-medianas/IMG-20250423-WA0039.jpg",
      "/razas-medianas/IMG-20250423-WA0040.jpg",
    ]
  },
  {
    name: "Boston Terrier ",
    description: "temperamento suave y equilibrado. Por otro lado, a menudo pueden resultar increíblemente obstinados, por lo que la paciencia y la firmeza son dos herramientas que debemos tener siempre presentes a la hora de educarlos.",
    image: "/razas-medianas/IMG-20250423-WA0045.jpg",
    precio: {
      macho: 1700000,
      hembra: 1700000
    },
    images: [
      "/razas-medianas/IMG-20250423-WA0050.jpg",
      "/razas-medianas/IMG-20250423-WA0043.jpg",
      "/razas-medianas/IMG-20250423-WA0048.jpg",
      "/razas-medianas/IMG-20250423-WA0046.jpg",
    ]
  },
  {
    name: "Bulldog Ingles Tradicional y Exotico",
    description: "El temperamento del bulldog inglés se caracteriza por ser dulce, paciente, confiable y excelente como perro de compañía. Aunque es curioso y travieso como cachorro, se convierte en un perro tranquilo de adulto.",
    image: "/razas-medianas/IMG-20250423-WA0059.jpg",
    desde: "a partir de",
    precio: {
      macho: 2000000,
      hembra: 2300000
    },
    images: [
      "/razas-medianas/IMG-20250423-WA0056.jpg",
      "/razas-medianas/IMG-20250423-WA0054.jpg",
      "/razas-medianas/IMG-20250423-WA0053.jpg",
      "/razas-medianas/IMG-20250423-WA0060.jpg",

    ]
  },
  {
    name: "Pug",
    description: "El temperamento del pug o carlino es el típico de un perro de compañía. Es cariñoso, alegre y juguetón. Tiene una personalidad fuerte y le gusta llamar la atención, pero es de carácter estable.",
    image: "/razas-medianas/IMG-20250423-WA0062.jpg",
    precio: {
      macho: 1300000,
      hembra: 1300000
    },
    images: [
      "/razas-medianas/IMG-20250423-WA0064.jpg",
      "/razas-medianas/IMG-20250423-WA0061.jpg",
      "/razas-medianas/IMG-20250423-WA0066.jpg",
    ]
  },
  {
    name: "Pomsky siberianos lobitos miniatura",
    description: "El temperamento del perro Pomsky es uno de los aspectos más atractivos de esta raza. Son juguetones, inteligentes, amigables y territoriales.",
    image: "/razas-medianas/IMG-20250423-WA0077.jpg",
    desde: "a partir de",
    precio: {
      macho: 2000000,
      hembra: 2300000
    },
    images: [
      "/razas-medianas/IMG-20250423-WA0077.jpg",
      "/razas-medianas/IMG-20250423-WA0076.jpg",
      "/razas-medianas/IMG-20250423-WA0073.jpg",
      "/razas-medianas/IMG-20250423-WA0072.jpg",
    ]
  },
];

export const largeBreeds: Breed[] = [
  {
    name: "Husky siberianosr",
    description: " Tiende a ser amigable con la gente incluyendo a los niños. Son inteligentes, pero de alguna manera independientes y tercos. ",
    image: "/razas-grandes/f3889dbb-be6c-4db8-ad6e-a63f027b9a12.jpg",
    desde: "a partir de",
    precio: {
      macho: 1300000,
      hembra: 1300000
    },
    images: [
      "/razas-grandes/f3889dbb-be6c-4db8-ad6e-a63f027b9a12.jpg",
      "/razas-grandes/902d5f22-a052-4071-bfec-f6c396529598.jpg",
      "/razas-grandes/cb1b307d-9518-4b13-9853-e4c354dcb411.jpg",
      "/razas-grandes/42fb37f9-20e2-4131-a6c1-304242ec02b6.jpg",
    ]
  },
  {
    name: "Doberman",
    description: "Los Dóberman son perros fuertes y enérgicos que necesitan practicar mucho ejercicio. Si no lo practican, es probable que se vuelvan irritables o incluso agresivos. Una cuidadosa socialización y adiestramiento en obediencia desde muy jóvenes son esenciales.",
    image: "/razas-grandes/640a3bd5-2f3f-477c-850e-6a3cafc499df.jpg",
    precio: {
      macho: 1600000,
      hembra: 1600000
    },
    images: [
      "/razas-grandes/52054915-9825-4617-aa32-840ca451603a.jpg",
      "/razas-grandes/00140f28-e76d-40ae-9cde-3910f6915e05.jpg",
      "/razas-grandes/459d42de-5064-45c3-83ec-c5911f05c89a.jpg",
    ]
  },
  {
    name: "Golden Retriever",
    description: "El temperamento del Golden Retriever es fuerte, poderoso pero muy gentil y fácilmente entrenable1. Son perros muy inteligentes, dóciles, amigables, fieles, celosos y confiantes. Les encanta la gente y los niños, por lo que no son buenos perros guardianes",
    image: "/razas-grandes/7881fd25-0865-499b-aa07-e113c5808753.jpg",
    precio: {
      macho: 1500000,
      hembra: 1500000
    },
    images: [
      "/razas-grandes/798c658b-838d-4f97-896b-2ee462875563.jpg",
      "/razas-grandes/0f81b499-bef4-48e2-846e-cd3f16ab8c5b.jpg",
      "/razas-grandes/c90275e9-f6cc-4c14-b4ed-a70af5b777d7.jpg",
    ]
  },
  {
    name: "Labradores",
    description: "El Labrador Retriever es una raza de perro con un carácter amigable, leal, apacible y cariñoso. Son ideales para compartir vida con los niños y se adaptan tanto a una vida en la ciudad como en el campo",
    image: "/razas-grandes/c9025328-c6af-4398-87c0-d7c2ecaf01de.jpg",
    precio: {
      macho: 1300000,
      hembra: 1300000
    },
    images: [
      "/razas-grandes/fdf9f0a9-5857-467c-af14-2bc0b8e25786.jpg",
      "/razas-grandes/c2bec3d3-b582-43fb-bd89-34b86350722b.jpg",
      "/razas-grandes/478e0f49-dc62-4187-9602-db73d2d641b3.jpg",
    ]
  },
  {
    name: "Dogo de burdeos",
    description: "El Dogo de Burdeos es conocido por su temperamento tranquilo y firme. Es un perro de temperamento equilibrado y amable, que siente un gran apego por su familia y es apto para convivir con niños",
    image: "/razas-grandes/cf655953-908e-4d00-8568-4c597fdd19a7.jpg",
    precio: {
      macho: 3500000,
      hembra: 3500000
    },
    images: [
      "/razas-grandes/f4d2bd6b-e61f-494c-aba9-31d16f48ca7b.jpg",
      "/razas-grandes/e9df34e5-68fd-49b1-a235-d3a1bbbe2762.jpg",
      "/razas-grandes/3f79dde5-2eab-4210-bbef-f22cd2367277.jpg",
    ]
  },
  {
    name: "Barnes de la montaña",
    description: "El Boyero de Berna o Bernés de la Montaña tiene un temperamento equilibrado y afectuoso. Son perros leales y protectores con su familia, ideales para convivir con niños y otras mascotas. A pesar de su tamaño, son muy gentiles y pacientes, especialmente con los niños",
    image: "/razas-grandes/4330a8aa-2314-4582-a592-ab4f01f91dd6.jpg",
    precio: {
      macho: 4000000,
      hembra: 4000000
    },
    images: [
      "/razas-grandes/009f5150-d31d-4cd7-bc84-dfe606287493.jpg",
      "/razas-grandes/da31dfe5-5304-4a1d-bf38-7f2c44bdbef5.jpg",
      "/razas-grandes/43e83696-0b85-41f5-ba5a-71083590d4a7.jpg",
    ]
  },
  {
    name: "Pastor belga Malinois",
    description: "El Pastor Belga Malinois es un perro inteligente, leal y enérgico. Requiere mucho ejercicio físico y mental para mantenerse saludables y felices. ",
    image: "/razas-grandes/72353e25-5706-4abe-9c57-203cbb7b9d8e.jpg",
    precio: {
      macho: 1600000,
      hembra: 1600000
    },
    images: [
      "/razas-grandes/7bc4d377-e4dc-4b37-9ea7-9e7d7cb9fc63.jpg",
      "/razas-grandes/22564207-9f4b-4946-9e0b-34a9b1dce5d4.jpg",
      "/razas-grandes/cc890688-b646-4c70-aa28-8af8d7e5f97b.jpg",
    ]
  },
  {
    name: "Rottweiler",
    description: "El temperamento del perro Rottweiler se puede definir como la mezcla perfecta entre amoroso, dócil, leal y firme. Es un perro de carácter inteligente y fácil de entrenar. A nivel temperamentales, son leales, protectores y excelentes guardianes. ",
    image: "/razas-grandes/43e779ef-ae19-4da8-896f-eec0a0f7e743.jpg",
    precio: {
      macho: 1600000,
      hembra: 1600000
    },
    images: [
      "/razas-grandes/67286174-3e67-48c7-98b9-e34cea1180ac.jpg",
      "/razas-grandes/a88fe6ec-b312-41b0-91ce-3aaece5c434a.jpg",
      "/razas-grandes/5a340d20-bdee-4067-9f0a-c413ef06ba95.jpg",
    ]
  },
  {
    name: "Pastor alemán pelo largo",
    description: "El Pastor Alemán es una raza de perro con un temperamento valiente, obediente e inteligente. ",
    image: "/razas-grandes/4ee06a1b-4d44-4f16-bb09-6a2b70876bce.jpg",
    desde: "a partir de",
    precio: {
      macho: 1300000,
      hembra: 2500000
    },
    images: [
      "/razas-grandes/Imagen de WhatsApp 2025-09-19 a las 11.34.31_4eee8130.jpg",
      "/razas-grandes/Imagen de WhatsApp 2025-09-19 a las 11.34.32_5273d960.jpg",
      "/razas-grandes/Imagen de WhatsApp 2025-09-19 a las 11.34.32_187dddf4.jpg",
      "/razas-grandes/Imagen de WhatsApp 2025-09-19 a las 11.34.32_45cd93d3.jpg",

      "/razas-grandes/9ed65810-cd44-4529-99df-e28902cd09a2.jpg",
      "/razas-grandes/281fc109-74a6-4731-a365-a3dd82de60af.jpg",
      "/razas-grandes/ff89b8dd-cdd3-48dd-8945-1c74690bb3a4.jpg",
    ]
  },

];