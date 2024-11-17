/*
  Warnings:

  - A unique constraint covering the columns `[companyName]` on the table `Talk` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Talk_companyName_key` ON `Talk`(`companyName`);
