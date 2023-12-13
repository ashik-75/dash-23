import TopSection from "@/components/ui/top-section";
import React from "react";
import InvoiceTable from "./table-info/invoice-table";

const InvoiceList: React.FC = () => {
  return (
    <div className="space-y-5">
      <TopSection
        title="Invoice List"
        links={[
          {
            title: "Dashboard",
            href: "/dashboard",
          },
          {
            title: "Invoice",
            href: "/invoice",
          },
          {
            title: "List",
          },
        ]}
      />

      <InvoiceTable />
    </div>
  );
};

export default InvoiceList;
