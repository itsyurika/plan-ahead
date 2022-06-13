/*
  Warnings:

  - A unique constraint covering the columns `[studentId,assignmentId]` on the table `StudentAssignment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "StudentAssignment_studentId_assignmentId_key" ON "StudentAssignment"("studentId", "assignmentId");
