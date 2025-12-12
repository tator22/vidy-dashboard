export const TableColumn = [
  // { id: "account_id", label: "Account ID" },
  { id: "account_name", label: "Account Name" },
  { id: "email", label: "Owner Email" },
  { id: "platforms", label: "Platform(s)" },
  { id: "current_plan", label: "Current Plan" },
  { id: "total_campaigns", label: "Total Campaigns" },
  { id: "storage_used", label: "Storage Used (MB / GB)" },
  { id: "hits_this_month", label: "Hits Used This Month" },
  { id: "branding", label: "Branding" },
  { id: "status", label: "Status" },
  // { id: "created_at", label: "Created At" },
  // { id: "last_active_at", label: "Last Active At" },
  // { id: "hit_limit", label: "Hit Limit" },
  { id: "action", label: "Action" },
] as const;

export type TableColumnId = (typeof TableColumn)[number]["id"];
