import { HeadCell } from "@repo/UI";

export const TableColumn: HeadCell[] = [
  { id: "campaign_id", label: "Campaign ID" },
  { id: "campaign_name", label: "Campaign Name" },
  { id: "account", label: "Account" },
  { id: "plan", label: "Plan" },
  { id: "hits_this_month", label: "Hits This Month", enableSorting: true },
  {
    id: "total_hits_lifetime",
    label: "Total Hits Lifetime",
    enableSorting: true,
  },
  {
    id: "storage_used_by_campaign",
    label: "Storage Used by Campaign",
    enableSorting: true,
  },
  { id: "created_at", label: "Created At" },
  { id: "status", label: "Status" },
  { id: "action", label: "Action" },
] as const;

export type TableColumnId = (typeof TableColumn)[number]["id"];
