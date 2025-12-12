export const TableColumn = [
  { id: "campaign_id", label: "Campaign ID" },
  { id: "campaign_name", label: "Campaign Name" },
  { id: "account", label: "Account" },
  { id: "plan", label: "Plan" },
  { id: "hits_this_month", label: "Hits This Month" },
  { id: "total_hits_lifetime", label: "Total Hits Lifetime" },
  { id: "storage_used_by_campaign", label: "Storage Used by Campaign" },
  { id: "created_at", label: "Created At" },
  { id: "status", label: "Status" },
  { id: "action", label: "Action" },
] as const;

export type TableColumnId = (typeof TableColumn)[number]["id"];
