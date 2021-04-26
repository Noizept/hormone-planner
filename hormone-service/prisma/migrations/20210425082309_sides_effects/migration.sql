-- AlterTable
ALTER TABLE "HormoneTrans" ADD COLUMN     "sideEffect" TEXT,
ADD COLUMN     "counterMedicine" TEXT,
ALTER COLUMN "doses" DROP NOT NULL;
