-- CreateTable
CREATE TABLE "Payments" (
    "id" SERIAL NOT NULL,
    "paymentStatus" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Payments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Membership" (
    "id" SERIAL NOT NULL,
    "subscribedWeeks" INTEGER NOT NULL,
    "totalUsedHours" DOUBLE PRECISION NOT NULL,
    "totalAssignedWeekHours" DOUBLE PRECISION NOT NULL,
    "usedUpHours" BOOLEAN NOT NULL,
    "insideUnipod" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Membership_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Complaints" (
    "id" SERIAL NOT NULL,
    "complaint" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Complaints_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Membership" ADD CONSTRAINT "Membership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Complaints" ADD CONSTRAINT "Complaints_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
