export const TableColumn = [
  {
    id: "total_hits_across_platforms",
    label: "Total Hits Across Platforms (Per Day/Month)",
  },
  {
    id: "total_storage_used",
    label: "Total Storage Used",
  },
  {
    id: "storage_distribution_by_plan",
    label: "Storage Distribution by Plan",
  },
  {
    id: "action",
    label: "Action",
  },
] as const;

export type TableColumnId = (typeof TableColumn)[number]["id"];
