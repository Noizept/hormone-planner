-- CreateEnum
CREATE TYPE "HormoneType" AS ENUM ('ANABOLIC', 'SARMS', 'PEPTIDES', 'HORMONE');

-- CreateTable
CREATE TABLE "Hormones" (
    "id" TEXT NOT NULL,
    "kind" "HormoneType" NOT NULL,
    "pictureUrl" TEXT,
    "halfLife" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HormoneTrans" (
    "id" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "hormonesId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "doses" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "HormoneTrans" ADD FOREIGN KEY ("hormonesId") REFERENCES "Hormones"("id") ON DELETE CASCADE ON UPDATE CASCADE;
