/*
  Warnings:

  - Added the required column `categoryId` to the `_books` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "_categories" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new__books" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "bar_code" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "_books_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "_categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new__books" ("bar_code", "created_at", "description", "id", "title") SELECT "bar_code", "created_at", "description", "id", "title" FROM "_books";
DROP TABLE "_books";
ALTER TABLE "new__books" RENAME TO "_books";
CREATE UNIQUE INDEX "_books_bar_code_key" ON "_books"("bar_code");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_categories_name_key" ON "_categories"("name");
