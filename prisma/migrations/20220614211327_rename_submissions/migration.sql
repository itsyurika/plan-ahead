/*
  Warnings:

  - You are about to drop the `StudentAssignment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "StudentAssignment" DROP CONSTRAINT "StudentAssignment_assignmentId_fkey";

-- DropForeignKey
ALTER TABLE "StudentAssignment" DROP CONSTRAINT "StudentAssignment_studentId_fkey";

-- DropTable
DROP TABLE "StudentAssignment";

-- CreateTable
CREATE TABLE "Submission" (
    "id" SERIAL NOT NULL,
    "dueDate" DATE NOT NULL,
    "dateStarted" DATE,
    "dateCompleted" DATE,
    "studentId" INTEGER NOT NULL,
    "assignmentId" INTEGER NOT NULL,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Submission_studentId_assignmentId_key" ON "Submission"("studentId", "assignmentId");

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_assignmentId_fkey" FOREIGN KEY ("assignmentId") REFERENCES "Assignment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
