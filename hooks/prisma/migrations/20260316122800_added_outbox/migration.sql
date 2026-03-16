/*
  Warnings:

  - Added the required column `metadata` to the `zapRun` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "zapRun" ADD COLUMN     "metadata" JSONB NOT NULL;

-- CreateTable
CREATE TABLE "zapRunOutbox" (
    "id" TEXT NOT NULL,
    "zapRunId" TEXT NOT NULL,

    CONSTRAINT "zapRunOutbox_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "zapRunOutbox_zapRunId_key" ON "zapRunOutbox"("zapRunId");

-- AddForeignKey
ALTER TABLE "zapRunOutbox" ADD CONSTRAINT "zapRunOutbox_zapRunId_fkey" FOREIGN KEY ("zapRunId") REFERENCES "zapRun"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
