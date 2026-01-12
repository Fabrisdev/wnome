import type { DirectoryNode, FSNode } from "one-terminal";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type FileSystemState = {
  fs: DirectoryNode;
  createFile: (path: string, contents?: string) => void;
};

export const useFileSystemStore = create<FileSystemState>()(
  persist(
    (set) => ({
      fs: { kind: "directory", entries: {} },
      createFile: (path, contents = "") =>
        set((state) => {
          const parts = path.split("/");
          const fileName = parts.pop();
          if (!fileName) return state;

          const fs = cloneDirectory(state.fs);
          let current = fs;
          for (const part of parts) {
            const entry = current.entries[part];
            if (entry) {
              if (!isDirectory(entry)) return state;
              current = entry;
              continue;
            }
            const newDirectory: DirectoryNode = {
              kind: "directory",
              entries: {},
            };
            current.entries[part] = newDirectory;
            current = newDirectory;
          }
          current.entries[fileName] = {
            kind: "file",
            content: contents,
            fileType: "text",
          };
          return { fs };
        }),
    }),
    {
      name: "file-system-store",
      partialize: (state) => ({
        fs: state.fs,
      }),
    },
  ),
);

function isDirectory(node: FSNode) {
  return node.kind === "directory";
}

function cloneDirectory(dir: DirectoryNode): DirectoryNode {
  const entries: DirectoryNode["entries"] = {};

  for (const [key, value] of Object.entries(dir.entries)) {
    entries[key] =
      value.kind === "directory" ? cloneDirectory(value) : { ...value };
  }

  return {
    kind: "directory",
    entries,
  };
}
