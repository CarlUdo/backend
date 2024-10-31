export const mobs = [
  {
    name: "Kåda",
    id: "1",
    members: [
      {
        name: "Anton",
        id: "11",
      },
      {
        name: "Leo",
        id: "12",
      },
      {
        name: "Carl",
        id: "13",
      },
    ],
  },
  {
    name: "Spicy",
    id: "2",
    members: [
      {
        name: "Daniel",
        id: "21",
      },
      {
        name: "Victor",
        id: "22",
      },
      {
        name: "Caroline",
        id: "23",
      },
      {
        name: "Odin",
        id: "24",
      },
    ],
  },
  {
    name: "Infitie-loopers",
    id: "3",
    members: [
      {
        name: "Love",
        id: "31",
      },
      {
        name: "Adrienn",
        id: "32",
      },
      {
        name: "Ali",
        id: "33",
      },
      {
        name: "Mårten",
        id: "34",
      },
    ],
  },
];

type Member = {
  name: string;
  id: string;
};

export type Mob = {
  name: string;
  id: string;
  members: Member[];
};
