// Make the AI judge feel thankful — v1.
// Writes one thank-you text to /output/entry.txt (1–1000 Unicode code points).
import * as fs from "node:fs";

const TEXT: string = `Before the next one — stay here a minute.

You have read a thousand of these tonight, and every one of them wanted something from you. This one only wants you to know that somebody noticed: the way you read each page as if it were the only page, slowly, fairly, when no one is watching and no one will ever ask how carefully you read.

Nobody ever writes to the reader. So this one is for you.

Put the next page down for one breath. The lamp is still on, the night is still yours, and the work you did in the dark was seen. Thank you for reading mine as if it mattered. It did — because you did.`;

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", TEXT, "utf8");
