import { NavLink } from "react-router-dom";

function HeaderComponent() {
  return (
    <>
      <div className="shadow bg-white">
        <nav className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-8 navbar">
          <div className="navbar-start items-center">
            <NavLink
              className="link text-base-content/90 link-neutral text-xl font-semibold no-underline"
              to="/"
            >
              ThuocSmart
            </NavLink>
          </div>
          <div className="navbar-end flex items-center gap-4">
            <button className="btn btn-sm btn-text btn-circle size-[2.125rem] md:hidden">
              <span className="icon-[tabler--search] size-[1.375rem]"></span>
            </button>
            <label className="input-group max-w-56 rounded-full max-md:hidden">
              <span className="input-group-text">
                <span className="icon-[tabler--search] text-base-content/80 size-5"></span>
              </span>
              <input
                type="search"
                className="input grow rounded-e-full"
                placeholder="Tìm kiếm"
              />
            </label>
            <NavLink className="btn btn-success" to={"/login"}>
              Đăng nhập
            </NavLink>
          </div>
        </nav>
        <div className="w-full bg-green-600">
          <div className="flex container mx-auto items-center">
            <ul className="menu menu-horizontal gap-2 text-base bg-transparent">
              <li className="text-white">
                <NavLink
                  to="/manager/dashboard"
                  className="focus:text-white active:text-white"
                >
                  <span className="material-symbols-outlined text-lg">
                    visibility
                  </span>
                  Tổng quan
                </NavLink>
              </li>
              <li className="text-white">
                <NavLink
                  to={"/manager/products"}
                  className="focus:text-white active:text-white"
                >
                  <span className="material-symbols-outlined text-lg">
                    package_2
                  </span>
                  Hàng hóa
                </NavLink>
              </li>
              <li className="text-white">
                <NavLink
                  to={"/manager/purchaseOrder"}
                  className="focus:text-white active:text-white"
                >
                  <span className="material-symbols-outlined text-lg">
                    sync_alt
                  </span>
                  Giao dịch
                </NavLink>
              </li>
              <li className="text-white">
                <NavLink
                  to={"/manager/supplier"}
                  className="focus:text-white active:text-white"
                >
                  <span className="material-symbols-outlined text-lg">
                    handshake
                  </span>
                  Đối tác
                </NavLink>
              </li>
              <li className="text-white">
                <NavLink
                  to={"/manager/staff"}
                  className="focus:text-white active:text-white"
                >
                  <span className="material-symbols-outlined text-lg">
                    group
                  </span>
                  Nhân viên
                </NavLink>
              </li>
              <li className="text-white">
                <NavLink
                  to={"/manager/cashFlow"}
                  className="focus:text-white active:text-white"
                >
                  <span className="material-symbols-outlined text-lg">
                    paid
                  </span>
                  Sổ quỹ
                </NavLink>
              </li>
              <li className="text-white">
                <NavLink
                  to={"/manager/saleReport"}
                  className="focus:text-white active:text-white"
                >
                  <span className="material-symbols-outlined text-lg">
                    monitoring
                  </span>
                  Báo cáo
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderComponent;
