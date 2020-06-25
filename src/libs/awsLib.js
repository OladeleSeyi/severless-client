import { Storage } from "aws-amplify";

export async function s3Upload(file) {
  const filename = `${Date.now()}-${file.name}`;

  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type,
  });
  console.log("Stored Object", stored);
  return stored.key;
}

export async function s3Delete(file) {
  const deleted = await Storage.vault.remove(file);
  return;
}