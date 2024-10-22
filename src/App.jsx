import { Layout } from "./layouts/Layout";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Sales } from "./pages/sales/Sales";
import { Items } from "./pages/managements/Items";
import { Finance } from "./pages/finance/Finance";
import { SalesReport } from "./pages/salesreport/SalesReport";
import { PurchaseReport } from "./pages/purchasereport/PurchaseReport";
import { Profile } from "./pages/profile/Profile";
import { ProfileSettings } from "./pages/profile/ProfileSettings";
import { ItemsCategory } from "./pages/managements/ItemsCategory";
import { Settings } from "./pages/settings/Settings";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/items" element={<Items />} />
        <Route path="/items-category" element={<ItemsCategory />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/sales-report" element={<SalesReport />} />
        <Route path="/purchase-report" element={<PurchaseReport />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile-settings" element={<ProfileSettings />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
}

export default App;
