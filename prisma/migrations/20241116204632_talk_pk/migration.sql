/*
  Warnings:

  - You are about to drop the column `code` on the `Talk` table. All the data in the column will be lost.
  - You are about to drop the column `companyId` on the `Talk` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Company` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `companyName` to the `Talk` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Talk` DROP FOREIGN KEY `Talk_companyId_fkey`;

-- AlterTable
ALTER TABLE `Talk` DROP COLUMN `code`,
    DROP COLUMN `companyId`,
    ADD COLUMN `companyName` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Company_name_key` ON `Company`(`name`);

-- AddForeignKey
ALTER TABLE `Talk` ADD CONSTRAINT `Talk_companyName_fkey` FOREIGN KEY (`companyName`) REFERENCES `Company`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;
