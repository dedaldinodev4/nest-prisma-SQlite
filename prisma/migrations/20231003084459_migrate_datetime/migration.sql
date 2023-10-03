-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new__books" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "bar_code" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new__books" ("bar_code", "description", "id", "title") SELECT "bar_code", "description", "id", "title" FROM "_books";
DROP TABLE "_books";
ALTER TABLE "new__books" RENAME TO "_books";
CREATE UNIQUE INDEX "_books_bar_code_key" ON "_books"("bar_code");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
