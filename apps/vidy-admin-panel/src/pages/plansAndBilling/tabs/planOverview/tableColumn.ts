export const TableColumn = [
  {
    id: "plan_name",
    label: "Plan Name",
  },
  {
    id: "internal_id",
    label: "Internal ID",
  },
  {
    id: "monthly_price",
    label: "Monthly Price",
  },
  {
    id: "yearly_price",
    label: "Yearly Price",
  },
  {
    id: "campaign_limit",
    label: "Campaign Limit",
  },
  {
    id: "storage_limit_gb",
    label: "Storage Limit (GB)",
  },
  {
    id: "hit_limit_per_month",
    label: "Hit Limit / Month",
  },
  {
    id: "branding_enabled",
    label: "Branding Status",
  },
] as const;

export type TableColumnId = (typeof TableColumn)[number]["id"];
