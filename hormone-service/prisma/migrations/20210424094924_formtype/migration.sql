/*
  Warnings:

  - Added the required column `form` to the `Hormones` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Form" AS ENUM ('INJECTABLE', 'ORAL');

-- AlterTable
ALTER TABLE "Hormones" ADD COLUMN     "form" "Form" NOT NULL;
