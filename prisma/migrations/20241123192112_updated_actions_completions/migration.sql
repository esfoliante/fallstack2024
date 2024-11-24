/*
  Warnings:

  - You are about to drop the column `completedAt` on the `Action` table. All the data in the column will be lost.
  - You are about to drop the column `parentId` on the `Action` table. All the data in the column will be lost.
  - You are about to drop the `_ActionToStudent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_ActionToStudent` DROP FOREIGN KEY `_ActionToStudent_A_fkey`;

-- DropForeignKey
ALTER TABLE `_ActionToStudent` DROP FOREIGN KEY `_ActionToStudent_B_fkey`;

-- AlterTable
ALTER TABLE `Action` DROP COLUMN `completedAt`,
    DROP COLUMN `parentId`;

-- DropTable
DROP TABLE `_ActionToStudent`;

-- CreateTable
CREATE TABLE `ActionCompletion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `completedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `actionId` INTEGER NOT NULL,
    `studentId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ActionCompletion` ADD CONSTRAINT `ActionCompletion_actionId_fkey` FOREIGN KEY (`actionId`) REFERENCES `Action`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ActionCompletion` ADD CONSTRAINT `ActionCompletion_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `Student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
