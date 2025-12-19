import { HeadCell } from "@repo/UI";

export const TableColumn: HeadCell[] = [
  { id: "campaign_id", label: "Campaign ID" },
  { id: "account", label: "Account" },
  { id: "storage_used", label: "Storage Used", enableSorting: true },
  {
    id: "number_of_media_assets",
    label: "No. of Media Assets",
    enableSorting: true,
  },
  { id: "actions", label: "Actions" },
] as const;

export type TableColumnId = (typeof TableColumn)[number]["id"];
