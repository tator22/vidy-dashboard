export const TableColumn = [
  { id: "account_name", label: "Account Name" },
  { id: "plan", label: "Plan" },
  { id: "total_storage_used", label: "Total Storage Used" },
  { id: "number_of_media_files", label: "Number of Media Files" },
  { id: "average_file_size", label: "Average File Size" },
  { id: "oldest_media_date", label: "Oldest Media Date" },
  { id: "actions", label: "Actions" },
] as const;

export type TableColumnId = (typeof TableColumn)[number]["id"];
