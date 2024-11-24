/*
  Warnings:

  - You are about to drop the column `isRevealed` on the `Action` table. All the data in the column will be lost.
  - You are about to drop the `Talk` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_StudentToTalk` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Talk` DROP FOREIGN KEY `Talk_companyName_fkey`;

-- DropForeignKey
ALTER TABLE `_StudentToTalk` DROP FOREIGN KEY `_StudentToTalk_A_fkey`;

-- DropForeignKey
ALTER TABLE `_StudentToTalk` DROP FOREIGN KEY `_StudentToTalk_B_fkey`;

-- AlterTable
ALTER TABLE `Action` DROP COLUMN `isRevealed`,
    ADD COLUMN `completedAt` DATETIME(3) NULL,
    ADD COLUMN `isVisible` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `parentId` INTEGER NULL;

-- DropTable
DROP TABLE `Talk`;

-- DropTable
DROP TABLE `_StudentToTalk`;
