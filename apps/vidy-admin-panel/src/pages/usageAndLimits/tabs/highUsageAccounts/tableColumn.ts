export const TableColumn = [
  { id: "account_name", label: "Account Name" },
  { id: "plan", label: "Plan" },
  { id: "storage_limit", label: "Hits Used / Hit Limit (This Month)" },
  { id: "storage_used", label: "Storage Used / Storage Limit" },
  { id: "number_of_campaigns", label: "Number of Campaigns" },
  { id: "flag_status", label: "Flag Status" },
] as const;

export type TableColumnId = (typeof TableColumn)[number]["id"];
