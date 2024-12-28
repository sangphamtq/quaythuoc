function LoginPage() {
  return (
    <div className="bg-base-100 w-[500px] mx-auto rounded-lg shadow my-10">
      <div className="w-full p-4">
        <h6 className="text-3xl font-semibold text-center">Đăng nhập</h6>
        <form className="needs-validation peer grid gap-y-4" noValidate>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="label label-text" htmlFor="lastName">
                Tên đăng nhập
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="sangpham"
                className="input"
                required
              />
              <span className="error-message">
                Vui lòng điền tên đăng nhập.
              </span>
              <span className="success-message">Hợp lệ!</span>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div>
              <label className="label label-text" htmlFor="userPassword">
                Mật khẩu
              </label>
              <div className="input-group">
                <input
                  id="userPassword"
                  type="password"
                  className="input"
                  placeholder="Điền mật khẩu"
                  required
                />
                {/* <span className="input-group-text">
                  <button
                    type="button"
                    data-toggle-password='{ "target": "#userPassword" }'
                    className="block"
                  >
                    <span className="icon-[tabler--eye] text-base-content/80 password-active:block hidden size-4 flex-shrink-0"></span>
                    <span className="icon-[tabler--eye-off] text-base-content/80 password-active:hidden block size-4 flex-shrink-0"></span>
                  </button>
                </span> */}
              </div>
              <span className="error-message">Vui lòng điền mật khẩu.</span>
              <span className="success-message">Hợp lệ!</span>
            </div>
          </div>

          <div className="mt-4 mx-auto">
            <a type="submit" className="btn btn-success">
              Đăng nhập
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
