-- AlterTable
ALTER TABLE "User" ADD COLUMN     "phoneNumber" TEXT;

-- CreateTable
CREATE TABLE "Time" (
    "id" SERIAL NOT NULL,
    "logintime" TIMESTAMP(3) NOT NULL,
    "logouttime" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Time_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Time" ADD CONSTRAINT "Time_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
