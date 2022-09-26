/*
  Warnings:

  - Made the column `username` on table `Player` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Player` MODIFY `username` VARCHAR(191) NOT NULL;
