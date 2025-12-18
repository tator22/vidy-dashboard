export const TableColumn = [
  { id: "campaign_id", label: "Campaign ID" },
  { id: "account", label: "Account" },
  { id: "storage_used", label: "Storage Used" },
  { id: "number_of_media_assets", label: "No. of Media Assets" },
  { id: "actions", label: "Actions" },
] as const;

export type TableColumnId = (typeof TableColumn)[number]["id"];
