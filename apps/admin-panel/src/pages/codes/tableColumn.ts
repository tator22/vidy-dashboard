export const TableColumn = [
  {
    id: "name",
    label: "name",
  },
  {
    id: "created",
    label: "updated",
  },
  {
    id: "creator",
    label: "creator",
  },
  {
    id: "scans",
    label: "scans",
  },
  {
    id: "engagement",
    label: "engagement",
  },
  {
    id: "status",
    label: "status",
  },
  { id: "action", label: "action" },
] as const;

export type TableColumnId = (typeof TableColumn)[number]["id"];
