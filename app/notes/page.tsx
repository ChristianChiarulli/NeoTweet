import React from "react";

export default function page() {
  return (
    <div
      id="feed"
      className="max-w-lg bg-white border border-b-0 border-gray-200 mx-auto"
    >
      <div
        id="post"
        className="flex border-b hover:bg-gray-100 duration-200 cursor-pointer pt-2 pl-3"
      >
        <div className="flex-shrink-0 my-1">
          <div id="picture" className="rounded-full">
            <div className="rounded-full hover:opacity-80 duration-200 overflow-hidden">
              <img
                className="w-12 h-12"
                src="https://placekitten.com/320/320"
              />
            </div>
          </div>
        </div>
        <div className="flex-col my-1 mx-3">
          <div id="title" className="flex items-center justify-between">
            <div id="details" className="flex flex-shrink-0 space-x-1">
              <div className="text-black font-bold hover:underline">
                Lewis Lloyd
              </div>
              <div className="text-gray-500">@LloydTao</div>
              <div className="text-gray-500">·</div>
              <div className="text-gray-500 hover:underline">37s</div>
            </div>
            <div id="options">
              <div className="w-7 text-gray-400 hover:text-blue-400 hover:bg-blue-100 duration-200 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div id="body" className=" pr-2">
            <div id="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div
              id="media"
              className="hover:bg-gray-200 duration-200 rounded-2xl border border-gray-300 cursor-pointer overflow-hidden mt-2"
            >
              <div
                id="image"
                className="padding-top: 56.25%; position: relative; background-image: url('https://placekitten.com/1280/400'); background-size: cover; background-repeat: no-repeat;"
              ></div>
              <div id="body" className="px-3 py-2">
                <div id="title" className="flex-col">
                  <div>Cats: The Mystery of the Universe</div>
                  <div className="text-gray-500 hidden sm:block">
                    Recently, I approached our cat once again meowing at our
                    back door.
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                      </svg>
                    </div>
                    <div className="text-gray-500 px-1">blog.lloyd.cx</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="buttons"
              className="flex justify-between items-center mt-1"
            >
              <div className="w-full">
                <div className="w-9 text-gray-400 hover:text-blue-400 hover:bg-blue-100 duration-200 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-full">
                <div className="w-9 text-gray-400 hover:text-green-400 hover:bg-green-100 duration-200 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-full">
                <div className="w-9 text-gray-400 hover:text-red-400 hover:bg-red-100 duration-200 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-full">
                <div className="w-9 text-gray-400 hover:text-blue-400 hover:bg-blue-100 duration-200 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="post"
        className="flex border-b hover:bg-gray-100 duration-200 cursor-pointer pt-2 pl-3"
      >
        <div className="flex-shrink-0 my-1">
          <div id="picture" className="rounded-full">
            <div className="rounded-full hover:opacity-80 duration-200 overflow-hidden">
              <img
                className="w-12 h-12"
                src="https://placekitten.com/320/320"
              />
            </div>
          </div>
        </div>
        <div className="flex-col my-1 mx-3">
          <div id="title" className="flex items-center justify-between">
            <div id="details" className="flex flex-shrink-0 space-x-1">
              <div className="text-black font-bold hover:underline">
                Lewis Lloyd
              </div>
              <div className="text-gray-500">@LloydTao</div>
              <div className="text-gray-500">·</div>
              <div className="text-gray-500 hover:underline">37s</div>
            </div>
            <div id="options">
              <div className="w-7 text-gray-400 hover:text-blue-400 hover:bg-blue-100 duration-200 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div id="body" className=" pr-2">
            <div id="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div
              id="media"
              className="hover:bg-gray-200 duration-200 rounded-2xl border border-gray-300 cursor-pointer overflow-hidden mt-2"
            >
              <div
                id="image"
                className="padding-top: 56.25%; position: relative; background-image: url('https://placekitten.com/1280/400'); background-size: cover; background-repeat: no-repeat;"
              ></div>
              <div id="body" className="px-3 py-2">
                <div id="title" className="flex-col">
                  <div>Cats: The Mystery of the Universe</div>
                  <div className="text-gray-500 hidden sm:block">
                    Recently, I approached our cat once again meowing at our
                    back door.
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                      </svg>
                    </div>
                    <div className="text-gray-500 px-1">blog.lloyd.cx</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="buttons"
              className="flex justify-between items-center mt-1"
            >
              <div className="w-full">
                <div className="w-9 text-gray-400 hover:text-blue-400 hover:bg-blue-100 duration-200 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-full">
                <div className="w-9 text-gray-400 hover:text-green-400 hover:bg-green-100 duration-200 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-full">
                <div className="w-9 text-gray-400 hover:text-red-400 hover:bg-red-100 duration-200 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-full">
                <div className="w-9 text-gray-400 hover:text-blue-400 hover:bg-blue-100 duration-200 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="post"
        className="flex border-b hover:bg-gray-100 duration-200 cursor-pointer pt-2 pl-3"
      >
        <div className="flex-shrink-0 my-1">
          <div id="picture" className="rounded-full">
            <div className="rounded-full hover:opacity-80 duration-200 overflow-hidden">
              <img
                className="w-12 h-12"
                src="https://placekitten.com/320/320"
              />
            </div>
          </div>
        </div>
        <div className="flex-col my-1 mx-3">
          <div id="title" className="flex items-center justify-between">
            <div id="details" className="flex flex-shrink-0 space-x-1">
              <div className="text-black font-bold hover:underline">
                Lewis Lloyd
              </div>
              <div className="text-gray-500">@LloydTao</div>
              <div className="text-gray-500">·</div>
              <div className="text-gray-500 hover:underline">37s</div>
            </div>
            <div id="options">
              <div className="w-7 text-gray-400 hover:text-blue-400 hover:bg-blue-100 duration-200 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div id="body" className=" pr-2">
            <div id="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div
              id="media"
              className="hover:bg-gray-200 duration-200 rounded-2xl border border-gray-300 cursor-pointer overflow-hidden mt-2"
            >
              <div
                id="image"
                className="padding-top: 56.25%; position: relative; background-image: url('https://placekitten.com/1280/400'); background-size: cover; background-repeat: no-repeat;"
              ></div>
              <div id="body" className="px-3 py-2">
                <div id="title" className="flex-col">
                  <div>Cats: The Mystery of the Universe</div>
                  <div className="text-gray-500 hidden sm:block">
                    Recently, I approached our cat once again meowing at our
                    back door.
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                        />
                      </svg>
                    </div>
                    <div className="text-gray-500 px-1">blog.lloyd.cx</div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="buttons"
              className="flex justify-between items-center mt-1"
            >
              <div className="w-full">
                <div className="w-9 text-gray-400 hover:text-blue-400 hover:bg-blue-100 duration-200 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-full">
                <div className="w-9 text-gray-400 hover:text-green-400 hover:bg-green-100 duration-200 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-full">
                <div className="w-9 text-gray-400 hover:text-red-400 hover:bg-red-100 duration-200 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-full">
                <div className="w-9 text-gray-400 hover:text-blue-400 hover:bg-blue-100 duration-200 rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
