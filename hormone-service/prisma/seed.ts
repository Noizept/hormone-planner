import prisma from "./connection";
const k = async () =>
  await prisma.hormones.create({
    data: {
      pictureUrl: "aaa",
      form: "INJECTABLE",
      halfLife: 222,
      kind: "ANABOLIC",
      AnabolicTrans: {
        createMany: {
          data: [
            {
              locale: "en",
              title: "Test E",
              description: "enatato",
              doses: "500mg",
              counterMedicine: "aromasin",
            },
            {
              locale: "pt",
              title: "testsoterona ena",
              description: "enatato",
              doses: "500mg",
              counterMedicine: "pixota",
            },
          ],
        },
      },
    },
  });

k();
