#!/usr/bin/env node

import { Command } from "commander";
import { writeFileSync } from "fs";
import { join } from "path";

const program = new Command();

program
    .version("0.0.1")
    .description("A CLI for generating blog posts template markdown files")
    .option("-t, --title <title>", "Title of the blog post")
    .option("-d, --diary", "Create a diary post")
    .action((options: { title: string; diary: boolean }) => {
        if (!options.title) {
            options.diary = true;
        }

        if (options.diary) {
            console.log("Creating diary post...");
        }

        const date = new Date().toISOString().split("T")[0];
        const filename = options.diary
            ? `${date}-diary.md`
            : `${date}-${options.title.toLowerCase().replace(/ /g, "-")}.md`;
        console.log(`Creating ${filename}...`);

        let content;

        if (options.diary) {
            content = `---\ntitle: "Diary - ${date}"\ndate: "${date}"\n---`;
        } else {
            content = `---\ntitle: "${options.title}"\ndate: "${date}"\n---`;
        }

        const filePath = join(process.cwd(), "contents", filename);
        if (filePath) {
            writeFileSync(filePath, content);
            console.log(`File created at ${filePath}`);
        } else {
            console.error("Failed to create file");
            process.exit(1);
        }
    })
    .parse(process.argv);
