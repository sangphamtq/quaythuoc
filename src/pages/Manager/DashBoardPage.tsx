import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
// Dữ liệu doanh thu theo ngày trong tháng
const data = {
  labels: Array.from({ length: 31 }, (_, i) => `${i + 1}`), // Tạo nhãn từ "Day 1" đến "Day 31"
  datasets: [
    {
      label: "Doanh thu ngày", // Chú thích
      data: Array.from(
        { length: 31 },
        () => Math.round(Math.floor(Math.random() * 2000000) / 1000) * 1000
      ), // Tạo doanh thu ngẫu nhiên từ 500 đến 1500
      backgroundColor: "rgba(75, 192, 192, 0.6)", // Màu cột
      borderColor: "rgba(75, 192, 192, 1)", // Màu viền
      borderWidth: 1,
    },
  ],
};

// Cấu hình biểu đồ
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Ngày trong tháng",
      },
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Doanh thu",
      },
    },
  },
};
function DashBoardPage() {
  return (
    <div className="flex gap-6">
      <div className="flex-1">
        <div className="card mb-6">
          <div className="card-header">
            <h5 className="card-title">KẾT QUẢ BÁN HÀNG HÔM NAY</h5>
          </div>
          <div className="card-body">
            <div className="flex">
              <div className="flex items-center gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48px"
                    viewBox="0 -960 960 960"
                    width="48px"
                    fill="#0000F5"
                  >
                    <path d="M456.77-202.62h43.84v-50.07q54.47-4.31 90.77-33.46 36.31-29.16 36.31-81.7 0-48.69-28.42-78.77-28.42-30.07-98.19-58.3-61.85-24.39-84.77-43-22.93-18.62-22.93-51.39 0-31.77 24.24-51.69 24.23-19.92 64.38-19.92 30 0 52 13.61 22 13.62 37.38 39.31L609-635.62q-17-31.92-44.23-50.38-27.23-18.46-62.16-21.69v-49.08h-43.84v49.08q-51.77 7-80.31 36.92t-28.54 71.46q0 46.69 29.04 74.16 29.04 27.46 91.73 52.46 66.62 27.23 90.27 48.96 23.66 21.73 23.66 55.88 0 37-29.2 56.89-29.19 19.88-68.8 19.88-37.85 0-68.16-21.23-30.31-21.23-44.61-58.46L334-356.46q20.62 42.92 50.54 66.92 29.92 24 72.23 34.85v52.07ZM480-100q-78.15 0-147.31-29.96-69.15-29.96-120.96-81.77-51.81-51.81-81.77-120.96Q100-401.85 100-480q0-78.77 29.96-148.11 29.96-69.35 81.77-120.66 51.81-51.31 120.96-81.27Q401.85-860 480-860q78.77 0 148.11 29.96 69.35 29.96 120.66 81.27 51.31 51.31 81.27 120.66Q860-558.77 860-480q0 78.15-29.96 147.31-29.96 69.15-81.27 120.96-51.31 51.81-120.66 81.77Q558.77-100 480-100Z" />
                  </svg>
                </span>
                <div>
                  <p className="font-medium">6 Hóa đơn</p>
                  <p className="text-xl text-[#0000F5]">1000,000 ₫</p>
                  <p className="text-gray-500">Doanh thu</p>
                </div>
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="flex items-center gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48px"
                    viewBox="0 -960 960 960"
                    width="48px"
                    fill="#F19E39"
                  >
                    <path d="M422.69-103.54q-67.77-10.92-125.84-43.77-58.08-32.85-100.12-82.46-42.04-49.62-65.73-113.5-23.69-63.88-23.69-136.73 0-86.46 40.54-164.35 40.54-77.88 114.38-138.34H135.62v-45.39h207.07V-621h-45.38v-130.54q-69 51.39-106.81 122.46Q152.69-558 152.69-480q0 125.46 75.77 217.04 75.77 91.57 194.23 113.04v46.38ZM423-320 278-465l32-32 113 113 227-227 32 32-259 259Zm194.31 188.46v-207.08h45.38v130.54q69-52.38 106.81-123.15Q807.31-402 807.31-480q0-125.46-75.77-217.04-75.77-91.57-194.23-113.04v-46.38Q674.46-835 763.58-730.54 852.69-626.08 852.69-480q0 86.46-40.54 164.54-40.54 78.07-114.38 138.54h126.61v45.38H617.31Z" />
                  </svg>
                </span>
                <div>
                  <p className="font-medium">1 Phiếu</p>
                  <p className="text-xl text-[#F19E39]">600,000 ₫</p>
                  <p className="text-gray-500">Trả hàng</p>
                </div>
              </div>
              <div className="divider divider-horizontal"></div>
              <div className="flex items-center gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48px"
                    viewBox="0 -960 960 960"
                    width="48px"
                    fill="#48752C"
                  >
                    <path d="M457.31-341.23h45.77v-192.39l81.3 81.31L616-483.92 480.38-619.15 344.39-483.92 376-452.31l81.31-81.31v192.39ZM480.07-100q-78.22 0-147.4-29.92t-120.99-81.71q-51.81-51.79-81.75-120.94Q100-401.71 100-479.93q0-78.84 29.92-148.21t81.71-120.68q51.79-51.31 120.94-81.25Q401.71-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.22-29.92 147.4t-81.21 120.99q-51.29 51.81-120.63 81.75Q558.9-100 480.07-100Z" />
                  </svg>
                </span>
                <div>
                  <p className="font-medium">Tăng</p>
                  <p className="text-xl text-[#48752C]">+ 15%</p>
                  <p className="text-gray-500">So với tháng trước</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <div className="flex justify-between">
              <div className="flex gap-4 items-center">
                <h5 className="card-title">DOANH THU THÁNG NÀY</h5>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined">payments</span>
                  14,525,000₫
                </div>
              </div>
              <select
                className="select w-32 appearance-none border-none"
                aria-label="select"
              >
                <option disabled selected>
                  Tháng này
                </option>
                <option>Tháng 1</option>
                <option>Tháng 2</option>
                <option>Tháng 3</option>
                <option>Tháng 4</option>
                <option>Tháng 5</option>
                <option>Tháng 6</option>
                <option>Tháng 7</option>
                <option>Tháng 8</option>
                <option>Tháng 9</option>
                <option>Tháng 10</option>
                <option>Tháng 11</option>
                <option>Tháng 12</option>
              </select>
            </div>
          </div>
          <div className="card-body">
            {/* @ts-ignore */}
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
      <div className="w-1/4">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">CÁC HOẠT ĐỘNG GẦN ĐÂY</h5>
          </div>
          <div className="divider my-0 h-0"></div>
          <div className="card-body">
            <ul className="relative flex h-96 flex-col gap-y-2">
              <li className="group flex flex-1 shrink basis-0 flex-col w-fit">
                <div className="flex items-center justify-center gap-2.5 text-md">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary">
                    <span className="material-symbols-outlined text-white">
                      sell
                    </span>
                  </div>
                  <div className="text-base-content/90 block">
                    <p>
                      <a className="link link-animated text-primary">Sang</a>{" "}
                      vừa{" "}
                      <a className="link link-animated text-primary">
                        bán đơn hàng
                      </a>{" "}
                      giá trị <span className="text-black">542,000đ</span>
                    </p>
                    <p className="text-sm italic text-gray-500">
                      một giờ trước
                    </p>
                  </div>
                </div>
                <div className="bg-neutral/20 ms-4.5 mt-2 h-full w-px justify-self-start group-last:hidden"></div>
              </li>
              <li className="group flex flex-1 shrink basis-0 flex-col w-fit">
                <div className="flex items-center justify-center gap-2.5 text-md">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-400">
                    <span className="material-symbols-outlined text-white">
                      input_circle
                    </span>
                  </div>
                  <div className="text-base-content/90 block">
                    <p>
                      <a className="link link-animated text-primary">Tiến</a>{" "}
                      vừa{" "}
                      <a className="link link-animated text-primary">
                        nhập hàng
                      </a>{" "}
                      giá trị <span className="text-black">624,000đ</span>
                    </p>
                    <p className="text-sm italic text-gray-500">ba giờ trước</p>
                  </div>
                </div>
                <div className="bg-neutral/20 ms-4.5 mt-2 h-full w-px justify-self-start group-last:hidden"></div>
              </li>
              <li className="group flex flex-1 shrink basis-0 flex-col w-fit">
                <div className="flex items-center justify-center gap-2.5 text-md">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-400">
                    <span className="material-symbols-outlined text-white">
                      output_circle
                    </span>
                  </div>
                  <div className="text-base-content/90 block">
                    <p>
                      <a className="link link-animated text-primary">Hùng</a>{" "}
                      vừa{" "}
                      <a className="link link-animated text-primary">
                        nhập đơn hàng
                      </a>{" "}
                      giá trị <span className="text-black">956,000đ</span>
                    </p>
                    <p className="text-sm italic text-gray-500">
                      một ngày trước
                    </p>
                  </div>
                </div>
                <div className="bg-neutral/20 ms-4.5 mt-2 h-full w-px justify-self-start group-last:hidden"></div>
              </li>
              <li className="group flex flex-1 shrink basis-0 flex-col w-fit">
                <div className="flex items-center justify-center gap-2.5 text-md">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary">
                    <span className="material-symbols-outlined text-white">
                      sell
                    </span>
                  </div>
                  <div className="text-base-content/90 block">
                    <p>
                      <a className="link link-animated text-primary">Sang</a>{" "}
                      vừa{" "}
                      <a className="link link-animated text-primary">
                        bán đơn hàng
                      </a>{" "}
                      giá trị <span className="text-black">542,000đ</span>
                    </p>
                    <p className="text-sm italic text-gray-500">
                      ba ngày trước
                    </p>
                  </div>
                </div>
                <div className="bg-neutral/20 ms-4.5 mt-2 h-full w-px justify-self-start group-last:hidden"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardPage;
