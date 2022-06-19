/*
  Warnings:

  - You are about to drop the column `name` on the `Assignment` table. All the data in the column will be lost.
  - You are about to drop the column `date_completed` on the `StudentAssignment` table. All the data in the column will be lost.
  - You are about to drop the column `date_started` on the `StudentAssignment` table. All the data in the column will be lost.
  - You are about to drop the column `due_date` on the `StudentAssignment` table. All the data in the column will be lost.
  - Added the required column `title` to the `Assignment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dueDate` to the `StudentAssignment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Assignment" DROP COLUMN "name",
ADD COLUMN     "title" VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE "StudentAssignment" DROP COLUMN "date_completed",
DROP COLUMN "date_started",
DROP COLUMN "due_date",
ADD COLUMN     "dateCompleted" DATE,
ADD COLUMN     "dateStarted" DATE,
ADD COLUMN     "dueDate" DATE NOT NULL;
