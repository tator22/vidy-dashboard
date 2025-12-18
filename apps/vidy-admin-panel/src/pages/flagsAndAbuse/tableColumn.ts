export const TableColumn = [
  { id: "account", label: "Account" },
  { id: "campaign", label: "Campaign (if specific)" },
  { id: "flag_type", label: "Flag Type" },
  { id: "reason", label: "Reason (auto or manual)" },
  { id: "status", label: "Status" },
  { id: "created_at", label: "Created At" },
  { id: "last_updated", label: "Last Updated" },
  { id: "actions", label: "Actions" },
] as const;

export type TableColumnId = (typeof TableColumn)[number]["id"];
