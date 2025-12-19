export const TableColumn = [
  { id: "account_name", label: "Account Name" },
  { id: "type", label: "Type" },
  { id: "message", label: "Message" },
  { id: "status", label: "Status" },
  { id: "created_at", label: "Created At" },
  { id: "action", label: "Action" },
] as const;

export type TableColumnId = (typeof TableColumn)[number]["id"];
