import "../page.css";

export default function Home() {
  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <div className="bg-purple-800 text-white w-1/4 flex flex-col justify-between items-center font-bold">
        <div className="flex flex-col w-full bg-white shadow-lg  overflow-hidden relative top-[210px] ">
          <div className="h-1/2 p-4 bg-white text-black flex justify-center items-center">
            <svg
              width="15"
              height="15"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_2329_258)">
                <path
                  d="M8.40869 15.7752L10.5507 13.2052C11.3995 12.186 11.8238 11.677 12.3817 11.677C12.9407 11.677 13.3651 12.186 14.2138 13.2052L14.5237 13.5771C15.3725 14.5963 15.7968 15.1053 16.3559 15.1053C16.9137 15.1053 17.3381 14.5963 18.1868 13.5771L20.3289 11.0071"
                  stroke="black"
                  stroke-width="3.06519"
                  stroke-linecap="round"
                />
                <path
                  d="M26.2891 13.3911C26.2891 19.0103 26.2891 21.8199 24.5428 23.565C22.7989 25.3113 19.9881 25.3113 14.3689 25.3113C8.74974 25.3113 5.94015 25.3113 4.19384 23.565C2.44873 21.8211 2.44873 19.0103 2.44873 13.3911C2.44873 7.77196 2.44873 4.96237 4.19384 3.21607C5.94134 1.47095 8.74974 1.47095 14.3689 1.47095C19.9881 1.47095 22.7977 1.47095 24.5428 3.21607C25.7038 4.37709 26.0924 6.00897 26.2235 8.62306"
                  stroke="black"
                  stroke-width="3.06519"
                  stroke-linecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2329_258">
                  <rect
                    width="28.6084"
                    height="28.6084"
                    fill="white"
                    transform="translate(0.0649414 0.108643)"
                  />
                </clipPath>
              </defs>
            </svg>
            Candidate Tracking
          </div>
          <div className="h-1/2 p-4 bg-[#B3A7BC] text-black flex justify-center items-center">
            <svg
              width="15"
              height="15"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 25.75C9.74167 25.75 6.90267 24.67 4.483 22.5101C2.06333 20.3501 0.675944 17.6523 0.320833 14.4167H3.225C3.55556 16.8722 4.64781 18.9028 6.50175 20.5083C8.35569 22.1139 10.5218 22.9167 13 22.9167C15.7625 22.9167 18.1061 21.9547 20.0309 20.0309C21.9557 18.1071 22.9176 15.7634 22.9167 13C22.9157 10.2366 21.9538 7.89339 20.0309 5.9705C18.108 4.04761 15.7644 3.08522 13 3.08333C11.3708 3.08333 9.84792 3.46111 8.43125 4.21667C7.01458 4.97222 5.82222 6.01111 4.85417 7.33333H8.75V10.1667H0.25V1.66667H3.08333V4.99583C4.2875 3.48472 5.75753 2.31597 7.49342 1.48958C9.22931 0.663194 11.0648 0.25 13 0.25C14.7708 0.25 16.4297 0.586695 17.9767 1.26008C19.5237 1.93347 20.8696 2.84203 22.0142 3.98575C23.1589 5.12947 24.0679 6.47531 24.7413 8.02325C25.4147 9.57119 25.7509 11.2301 25.75 13C25.7491 14.7699 25.4128 16.4288 24.7413 17.9767C24.0698 19.5247 23.1608 20.8705 22.0142 22.0142C20.8677 23.158 19.5219 24.067 17.9767 24.7413C16.4316 25.4157 14.7727 25.7519 13 25.75ZM16.9667 18.95L11.5833 13.5667V5.91667H14.4167V12.4333L18.95 16.9667L16.9667 18.95Z"
                fill="black"
              />
            </svg>
            History
          </div>
        </div>

        <div className="mt-auto p-3 w-full">
          <button className="bg-white rounded-full p-2 w-[100%] text-black">
            Support
          </button>
        </div>
      </div>
      {/* Main content */}
      <div className="flex flex-col w-full ">
        <div className="flex-col justify-center items-center bg-white pt-10">
          <div className="flex mb-8 relative right-[110px] mr-0">
            <div className="flex w-full p-2 border border-gray-300 bg-[#E2E2E2] rounded-full shadow-2xl">
              <div className="flex items-center text-[#170039] font-bold font-europa text-[40px] z-0">
                <svg
                  className="mr-[2px]"
                  width="40"
                  height="35"
                  viewBox="0 0 40 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.06283 19.5595L8.65073 32.7682L12.1528 25.4947L8.3218 18.8274C8.11293 18.4751 8.00272 18.0729 8.00272 17.6633C8.00272 17.2537 8.11293 16.8516 8.3218 16.4992L13.1025 8.17923C13.5298 7.43753 14.2602 7.01347 15.11 7.01347H17.6817L12.7059 18.2244H18.8523L10.4937 34.4402L27.2819 14.3031H22.1206L25.6421 7.01508H35.4003L39.241 0.333344H12.1125C10.7259 0.333344 9.53593 1.02345 8.8426 2.22629L1.06283 15.7704C0.723161 16.3439 0.543945 16.9983 0.543945 17.6649C0.543945 18.3315 0.723161 18.9859 1.06283 19.5595ZM12.693 34.9997H27.6721C28.3379 35.0082 28.9937 34.8364 29.5699 34.5026C30.1461 34.1688 30.6213 33.6854 30.9452 33.1035L38.725 19.5595C39.0629 18.9853 39.241 18.3311 39.241 17.6649C39.241 16.9987 39.0629 16.3446 38.725 15.7704L35.6131 10.3527H27.9333L31.4644 16.5008C31.8869 17.2425 31.8869 18.0922 31.4644 18.8291L26.6853 27.1522C26.4859 27.5097 26.1937 27.8067 25.8395 28.0119C25.4853 28.217 25.0823 28.3228 24.673 28.318H21.2L18.7862 28.2906L12.693 34.9997Z"
                    fill="#170039"
                  />
                </svg>
                Employia
              </div>
              <div className="relative">
                <div className="absolute left-[650px]">
                  <div className="w-14 h-14  rounded-full flex justify-center items-center border-2 border-purple-600">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/99f0/2011/f6f78ff4ecf8c1a8d1d27687cac77dee?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jzugBHS7JO00VmT6oQ5g6Mb1bEZd28bHrTDQemfI-vs~CpYuhADpEk0GReOxG71jrgai2Zp1x2Rx6yQBzmElhdNTPkPcd5ejHdcyUW8QMWVCht-hBUcZO6wzy-PfX-qphxPVJFcI4cY~mNizltSpBAqGBYI8tcF~XUkU4b5XwgTijsI~7KxqBFkfCpjvlqDLGsLBO9mV813v26WhtbA8QPeIS7hY7miqkQNQsYmrbM9TZpT15zY-VsPFDzztfEJsVHs8r3z~LaUt6xcaLuXNehaXNT5RRFpta1syynbjTw3uHsAuyeLFp3cCoBWpUz3KK6uZS9JUWiMm53Uq-okCdw__"
                      alt="Dummy Image"
                      className="w-12 h-12 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-purple-600 font-bold text-white ml-3 p-2 rounded-[10px] text-sm flex justify-center items-center">
              <div className="pr-2">
                Credits <br /> 100
              </div>
              <div>
                <svg
                  width="25"
                  height="52"
                  viewBox="0 0 30 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.04253"
                    y="7.21295"
                    width="28.0098"
                    height="53.1871"
                    rx="2.20302"
                    transform="rotate(0.104053 1.04253 7.21295)"
                    fill="white"
                    stroke="black"
                    strokeWidth="1.8883"
                  />
                  <path
                    d="M3.19629 18.8828H26.8V55.0752C26.8 56.5588 26.8 57.3006 26.3391 57.7615C25.8783 58.2224 25.1365 58.2224 23.6529 58.2224H6.34345C4.85987 58.2224 4.11807 58.2224 3.65718 57.7615C3.19629 57.3006 3.19629 56.5588 3.19629 55.0752V18.8828Z"
                    fill="#3CB449"
                  />
                  <path
                    d="M20.5065 4.72106C20.5065 3.46895 19.9262 2.26814 18.8933 1.38277C17.8604 0.497396 16.4594 9.45311e-08 14.9986 0C13.5378 -9.45311e-08 12.1369 0.497395 11.1039 1.38277C10.071 2.26813 9.49072 3.46895 9.49072 4.72106L14.9986 4.72106H20.5065Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-white w-full">
          <div className="flex justify-between items-center mb-8 ">
            <div className="text-3xl font-bold">Track candidate status</div>
          </div>
          <div className="flex items-center justify-center mb-8 w-[90%]">
            <div className="flex items-center pl-10 p-2 border border-gray-300 rounded-full w-[66%]">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M17.6252 15.5324H16.523L16.1323 15.1557C17.5468 13.515 18.3243 11.4204 18.3227 9.25413C18.3227 7.46053 17.7909 5.70721 16.7944 4.21589C15.7979 2.72457 14.3816 1.56223 12.7245 0.875845C11.0675 0.189465 9.24408 0.00987631 7.48495 0.35979C5.72581 0.709704 4.10995 1.5734 2.84168 2.84167C1.57341 4.10993 0.709715 5.7258 0.359801 7.48494C0.00988775 9.24407 0.189476 11.0675 0.875857 12.7245C1.56224 14.3816 2.72458 15.7979 4.2159 16.7944C5.70723 17.7909 7.46055 18.3227 9.25414 18.3227C11.5004 18.3227 13.5652 17.4996 15.1557 16.1323L15.5324 16.523V17.6251L22.5082 24.587L24.587 22.5082L17.6252 15.5324ZM9.25414 15.5324C5.78018 15.5324 2.97589 12.7281 2.97589 9.25413C2.97589 5.78016 5.78018 2.97588 9.25414 2.97588C12.7281 2.97588 15.5324 5.78016 15.5324 9.25413C15.5324 12.7281 12.7281 15.5324 9.25414 15.5324Z"
                  fill="#4F4F4F"
                />
              </svg>
              <h1 className="text-[#696969]">
                Enter your Email or Mobile Number
              </h1>
            </div>
            <button className="bg-purple-600 text-white ml-3 p-2 rounded-full text-sm shadow-2xl">
              Check status
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-[#ECECEC] rounded-[22px] p-3 w-[80%] flex-grow">
            <div className="p-4 border border-black rounded-[16px] bg-white flex justify-center items-center flex-col">
              <h2 className="text-lg font-bold">INFOSYS</h2>
              <p className="text-green-500">● Final Round</p>
            </div>
            <div className="p-4 border border-black rounded-[16px] bg-white flex justify-center items-center flex-col">
              <h2 className="text-lg font-bold">Google</h2>
              <p className="text-yellow-500">
                ● Waiting for Final Round result
              </p>
            </div>
            <div className="p-4 border border-black rounded-[16px] bg-white flex justify-center items-center flex-col">
              <h2 className="text-lg font-bold">Microsoft</h2>
              <p className="text-red-500">● Screening Round</p>
            </div>
            <div className="p-4 border border-black rounded-[16px] bg-white flex justify-center items-center flex-col">
              <h2 className="text-lg font-bold">Adobe</h2>
              <p className="text-green-500">● Final Round</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
