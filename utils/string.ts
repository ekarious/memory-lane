import { FileWithPath } from "@mantine/dropzone";
import { readFile, writeFile } from "fs/promises";
import { join } from "path";

export const sanitizeFileName = (filename: string): string => {
  const [name, ext] = filename.split(".");

  const sanitizedName = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "")
    .replace(/\-+/g, "-")
    .replace(/^\-+|\-+$/g, "");

  const sanitizedExt = ext.toLowerCase();

  return `${sanitizedName}.${sanitizedExt}`;
};
