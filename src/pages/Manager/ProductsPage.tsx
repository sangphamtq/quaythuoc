function ProductsPage() {
  return (
    <div className="flex gap-6">
      <div className="flex flex-shrink-0 basis-1/5">
        <div className="card w-full">
          <div className="card-header">
            <button
              type="button"
              className="collapse-toggle btn btn-text w-full justify-between no-animation focus:outline-none"
              id="basic-collapse"
              aria-expanded="false"
              aria-controls="basic-collapse-heading"
              data-collapse="#basic-collapse-heading"
            >
              Loại hàng
              <span className="icon-[tabler--chevron-down] collapse-open:rotate-180 size-4"></span>
            </button>
          </div>
          <div className="card-body">
            <div
              id="basic-collapse-heading"
              className="collapse hidden w-full overflow-hidden transition-[height] duration-300"
              aria-labelledby="basic-collapse"
            >
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="defaultCheckbox1"
                />
                <label
                  className="label label-text text-base"
                  htmlFor="defaultCheckbox1"
                >
                  Thuốc
                </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="defaultCheckbox2"
                />
                <label
                  className="label label-text text-base"
                  htmlFor="defaultCheckbox2"
                >
                  Thực phẩm chức năng
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 basis-auto w-1/2">
        <div className="flex">
          <div className="w-full rounded-lg pb-2 shadow bg-white p-6">
            <div className="flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center sm:justify-between">
              <label className="input-group max-w-xs">
                <span className="input-group-text">
                  <span className="icon-[tabler--search] size-6"></span>
                </span>
                <input
                  type="search"
                  className="input grow"
                  placeholder="Tìm kiếm"
                />
              </label>
            </div>

            <div className="mt-8 overflow-x-auto h-[570px]">
              <table className="table">
                <thead>
                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-primary checkbox-sm"
                        aria-label="product"
                      />
                    </th>
                    <th className="px-0">Mã hàng</th>
                    <th>Tên hàng</th>
                    <th>Đơn vị</th>
                    <th>Loại hàng</th>
                    <th>Giá</th>
                    <th>Tồn kho</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox checkbox-primary checkbox-sm"
                          aria-label="product"
                        />
                      </label>
                    </th>
                    <td className="px-0">T001</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="bg-base-content/10 h-10 w-10 rounded-md">
                            <img
                              src="https://cdn.nhathuoclongchau.com.vn/unsafe/636x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_0238_fc19904162.jpg"
                              alt="product image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-medium w-[260px] text-wrap">
                            Thuốc Exopadin 60mg Trường Thọ điều trị viêm mũi dị
                            ứng, mày đay (3 vỉ x 10 viên)
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>Hộp, vỉ, viên</td>
                    <td>
                      <div className="flex items-center">Thuốc dị ứng</div>
                    </td>
                    <td>60,000đ</td>
                    <td>30 hộp</td>
                    <td>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--pencil] size-5"></span>
                      </button>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--trash] size-5"></span>
                      </button>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--dots-vertical] size-5"></span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox checkbox-primary checkbox-sm"
                          aria-label="product"
                        />
                      </label>
                    </th>
                    <td className="px-0">T001</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="bg-base-content/10 h-10 w-10 rounded-md">
                            <img
                              src="https://cdn.nhathuoclongchau.com.vn/unsafe/636x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_0238_fc19904162.jpg"
                              alt="product image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-medium w-[260px] text-wrap">
                            Thuốc Exopadin 60mg Trường Thọ điều trị viêm mũi dị
                            ứng, mày đay (3 vỉ x 10 viên)
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>Hộp, vỉ, viên</td>
                    <td>
                      <div className="flex items-center">Thuốc dị ứng</div>
                    </td>
                    <td>60,000đ</td>
                    <td>30 hộp</td>
                    <td>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--pencil] size-5"></span>
                      </button>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--trash] size-5"></span>
                      </button>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--dots-vertical] size-5"></span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox checkbox-primary checkbox-sm"
                          aria-label="product"
                        />
                      </label>
                    </th>
                    <td className="px-0">T001</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="bg-base-content/10 h-10 w-10 rounded-md">
                            <img
                              src="https://cdn.nhathuoclongchau.com.vn/unsafe/636x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_0238_fc19904162.jpg"
                              alt="product image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-medium w-[260px] text-wrap">
                            Thuốc Exopadin 60mg Trường Thọ điều trị viêm mũi dị
                            ứng, mày đay (3 vỉ x 10 viên)
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>Hộp, vỉ, viên</td>
                    <td>
                      <div className="flex items-center">Thuốc dị ứng</div>
                    </td>
                    <td>60,000đ</td>
                    <td>30 hộp</td>
                    <td>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--pencil] size-5"></span>
                      </button>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--trash] size-5"></span>
                      </button>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--dots-vertical] size-5"></span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox checkbox-primary checkbox-sm"
                          aria-label="product"
                        />
                      </label>
                    </th>
                    <td className="px-0">T001</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="bg-base-content/10 h-10 w-10 rounded-md">
                            <img
                              src="https://cdn.nhathuoclongchau.com.vn/unsafe/636x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_0238_fc19904162.jpg"
                              alt="product image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-medium w-[260px] text-wrap">
                            Thuốc Exopadin 60mg Trường Thọ điều trị viêm mũi dị
                            ứng, mày đay (3 vỉ x 10 viên)
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>Hộp, vỉ, viên</td>
                    <td>
                      <div className="flex items-center">Thuốc dị ứng</div>
                    </td>
                    <td>60,000đ</td>
                    <td>30 hộp</td>
                    <td>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--pencil] size-5"></span>
                      </button>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--trash] size-5"></span>
                      </button>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--dots-vertical] size-5"></span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox checkbox-primary checkbox-sm"
                          aria-label="product"
                        />
                      </label>
                    </th>
                    <td className="px-0">T001</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="bg-base-content/10 h-10 w-10 rounded-md">
                            <img
                              src="https://cdn.nhathuoclongchau.com.vn/unsafe/636x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_0238_fc19904162.jpg"
                              alt="product image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-medium w-[260px] text-wrap">
                            Thuốc Exopadin 60mg Trường Thọ điều trị viêm mũi dị
                            ứng, mày đay (3 vỉ x 10 viên)
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>Hộp, vỉ, viên</td>
                    <td>
                      <div className="flex items-center">Thuốc dị ứng</div>
                    </td>
                    <td>60,000đ</td>
                    <td>30 hộp</td>
                    <td>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--pencil] size-5"></span>
                      </button>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--trash] size-5"></span>
                      </button>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--dots-vertical] size-5"></span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox checkbox-primary checkbox-sm"
                          aria-label="product"
                        />
                      </label>
                    </th>
                    <td className="px-0">T001</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="bg-base-content/10 h-10 w-10 rounded-md">
                            <img
                              src="https://cdn.nhathuoclongchau.com.vn/unsafe/636x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_0238_fc19904162.jpg"
                              alt="product image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-medium w-[260px] text-wrap">
                            Thuốc Exopadin 60mg Trường Thọ điều trị viêm mũi dị
                            ứng, mày đay (3 vỉ x 10 viên)
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>Hộp, vỉ, viên</td>
                    <td>
                      <div className="flex items-center">Thuốc dị ứng</div>
                    </td>
                    <td>60,000đ</td>
                    <td>30 hộp</td>
                    <td>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--pencil] size-5"></span>
                      </button>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--trash] size-5"></span>
                      </button>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--dots-vertical] size-5"></span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox checkbox-primary checkbox-sm"
                          aria-label="product"
                        />
                      </label>
                    </th>
                    <td className="px-0">T001</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="bg-base-content/10 h-10 w-10 rounded-md">
                            <img
                              src="https://cdn.nhathuoclongchau.com.vn/unsafe/636x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_0238_fc19904162.jpg"
                              alt="product image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-medium w-[260px] text-wrap">
                            Thuốc Exopadin 60mg Trường Thọ điều trị viêm mũi dị
                            ứng, mày đay (3 vỉ x 10 viên)
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>Hộp, vỉ, viên</td>
                    <td>
                      <div className="flex items-center">Thuốc dị ứng</div>
                    </td>
                    <td>60,000đ</td>
                    <td>30 hộp</td>
                    <td>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--pencil] size-5"></span>
                      </button>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--trash] size-5"></span>
                      </button>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--dots-vertical] size-5"></span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox checkbox-primary checkbox-sm"
                          aria-label="product"
                        />
                      </label>
                    </th>
                    <td className="px-0">T001</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="bg-base-content/10 h-10 w-10 rounded-md">
                            <img
                              src="https://cdn.nhathuoclongchau.com.vn/unsafe/636x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_0238_fc19904162.jpg"
                              alt="product image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-medium w-[260px] text-wrap">
                            Thuốc Exopadin 60mg Trường Thọ điều trị viêm mũi dị
                            ứng, mày đay (3 vỉ x 10 viên)
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>Hộp, vỉ, viên</td>
                    <td>
                      <div className="flex items-center">Thuốc dị ứng</div>
                    </td>
                    <td>60,000đ</td>
                    <td>30 hộp</td>
                    <td>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--pencil] size-5"></span>
                      </button>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--trash] size-5"></span>
                      </button>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--dots-vertical] size-5"></span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox checkbox-primary checkbox-sm"
                          aria-label="product"
                        />
                      </label>
                    </th>
                    <td className="px-0">T001</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="bg-base-content/10 h-10 w-10 rounded-md">
                            <img
                              src="https://cdn.nhathuoclongchau.com.vn/unsafe/636x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_0238_fc19904162.jpg"
                              alt="product image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-medium w-[260px] text-wrap">
                            Thuốc Exopadin 60mg Trường Thọ điều trị viêm mũi dị
                            ứng, mày đay (3 vỉ x 10 viên)
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>Hộp, vỉ, viên</td>
                    <td>
                      <div className="flex items-center">Thuốc dị ứng</div>
                    </td>
                    <td>60,000đ</td>
                    <td>30 hộp</td>
                    <td>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--pencil] size-5"></span>
                      </button>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--trash] size-5"></span>
                      </button>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--dots-vertical] size-5"></span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label>
                        <input
                          type="checkbox"
                          className="checkbox checkbox-primary checkbox-sm"
                          aria-label="product"
                        />
                      </label>
                    </th>
                    <td className="px-0">T001</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="bg-base-content/10 h-10 w-10 rounded-md">
                            <img
                              src="https://cdn.nhathuoclongchau.com.vn/unsafe/636x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_0238_fc19904162.jpg"
                              alt="product image"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-medium w-[260px] text-wrap">
                            Thuốc Exopadin 60mg Trường Thọ điều trị viêm mũi dị
                            ứng, mày đay (3 vỉ x 10 viên)
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>Hộp, vỉ, viên</td>
                    <td>
                      <div className="flex items-center">Thuốc dị ứng</div>
                    </td>
                    <td>60,000đ</td>
                    <td>30 hộp</td>
                    <td>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--pencil] size-5"></span>
                      </button>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--trash] size-5"></span>
                      </button>
                      <button
                        className="btn btn-circle btn-text btn-sm"
                        aria-label="Action button"
                      >
                        <span className="icon-[tabler--dots-vertical] size-5"></span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 py-4 pt-6">
              <div className="me-2 block max-w-sm text-sm font-normal text-gray-500 sm:mb-0">
                Hiển thị
                <span className="font-semibold text-gray-900"> 1 - 10 </span>
                của
                <span className="font-semibold"> 30 </span>
                sản phẩm
              </div>
              <nav className="join">
                <button
                  type="button"
                  className="btn btn-soft btn-square join-item"
                  aria-label="previous button"
                >
                  <span className="icon-[tabler--chevron-left] size-5 rtl:rotate-180"></span>
                </button>
                <button
                  type="button"
                  className="btn btn-soft join-item btn-square aria-[current='page']:text-bg-primary"
                  aria-current="page"
                >
                  1
                </button>
                <button
                  type="button"
                  className="btn btn-soft join-item btn-square aria-[current='page']:text-bg-primary"
                >
                  2
                </button>
                <button
                  type="button"
                  className="btn btn-soft join-item btn-square aria-[current='page']:text-bg-primary"
                >
                  3
                </button>
                <button
                  type="button"
                  className="btn btn-soft btn-square join-item"
                  aria-label="next button"
                >
                  <span className="icon-[tabler--chevron-right] size-5 rtl:rotate-180"></span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
