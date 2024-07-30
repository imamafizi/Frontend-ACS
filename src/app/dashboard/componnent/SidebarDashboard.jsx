import React from "react";
import { HiChartPie, HiSpeakerphone } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";

const SidebarDasboard = () => {
  return (
    <section className="h-screen sticky top-0">
      <div>
        <div>
          <a href="*">
            <HiChartPie />
            Dashboard
          </a>
          <a href="*">
            <HiSpeakerphone />
            Events
          </a>
          <a href="*">
            <FaCartShopping />
            Transactions
          </a>
          <a href="*">
            <MdAnalytics />
            Analytics
          </a>
        </div>
      </div>
    </section>
  );
};

export default SidebarDasboard;
