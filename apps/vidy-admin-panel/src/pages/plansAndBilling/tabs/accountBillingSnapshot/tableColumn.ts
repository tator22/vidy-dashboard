export const TableColumn = [
  {
    id: "current_plan",
    label: "Current Plan",
  },
  {
    id: "billing_interval",
    label: "Billing Interval",
  },
  {
    id: "store_subscription_id",
    label: "App Store / Google Play Subscription ID",
  },
  {
    id: "original_purchase_date",
    label: "Original Purchase Date",
  },
  {
    id: "last_renewal_timestamp",
    label: "Last Renewal Timestamp",
  },
  {
    id: "last_receipt_validation_status",
    label: "Last Receipt Validation Status",
  },
  {
    id: "expiration_date",
    label: "Expiration Date",
  },
  {
    id: "cancellation_flag",
    label: "Cancellation Flag",
  },
  {
    id: "refund_flag",
    label: "Refund Flag",
  },
] as const;

export type TableColumnId = (typeof TableColumn)[number]["id"];
