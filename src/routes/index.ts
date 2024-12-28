import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import CashFlowPage from "../pages/Manager/CashFlowPage";
import DashBoardPage from "../pages/Manager/DashBoardPage";
import ProductsPage from "../pages/Manager/ProductsPage";
import PurchaseOrderPage from "../pages/Manager/PurchaseOrderPage";
import SaleReportPage from "../pages/Manager/SaleReportPage";
import StaffPage from "../pages/Manager/StaffPage";
import SupplierPage from "../pages/Manager/SupplierPage";
import NotFoundPage from "../pages/NotFoundPage";

export const routes = [
  {
    path: "/",
    page: HomePage,
  },
  {
    path: "/login",
    page: LoginPage,
  },
  {
    path: "/manager",
    page: DashBoardPage,
  },
  {
    path: "/manager/dashboard",
    page: DashBoardPage,
  },
  {
    path: "/manager/products",
    page: ProductsPage,
  },
  {
    path: "/manager/purchaseOrder",
    page: PurchaseOrderPage,
  },
  {
    path: "/manager/supplier",
    page: SupplierPage,
  },
  {
    path: "/manager/staff",
    page: StaffPage,
  },
  {
    path: "/manager/cashFlow",
    page: CashFlowPage,
  },
  {
    path: "/manager/saleReport",
    page: SaleReportPage,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
];
