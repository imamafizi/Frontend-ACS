import AuthGuard from "@/hoc/AuthGuard";
import SidebarDasboard from "./componnent/SidebarDashboard";

const Dashboard = () => {
  return (
    <section className="flex w-full ">
      <SidebarDasboard />
      {/* <section className="min-h-screen w-full p-20">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Dashboard
        </h1>
        <TopCards />
        <div className="pt-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          <ChartOne />
        </div>
      </section> */}
    </section>
  );
};

export default AuthGuard(Dashboard);
