import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PoolsList() {
  let [categories] = useState({
    Ongoing: [
      {
        id: 1,
        title: "Dotmoovs BNB",
        img: "image/coins/dotmoovs.jpg",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "Royale Finance",
        img: "image/coins/realfevr.jpg",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Future: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Ended: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <div className="relative bottom-16 w-full max-w-xxxl mx-auto px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-6 bg-blue-900/20 rounded-xl">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full md:w-auto text-xl leading-5 font-bold py-3",
                  selected
                    ? "border-b-2 border-orange-500 text-white"
                    : "text-gray-500"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <div className="grid grid-cols-10 gap-x-2 px-7 justify-start mt-5 text-gray-500 font-semibold text-sm">
          <span className="relative right-7 col-span-3">Pool name</span>
          <span className="text-center">Status</span>
          <span className="text-center">Access</span>
          <span className="text-center">Ratio, 1BUSD</span>
          <span className="text-center">Total raise</span>
          <span className="text-left col-span-2">Progress</span>
        </div>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel key={idx}>
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="cursor-pointer bg-gradient-to-b from-darkMode-800 to-darkMode-600 border border-gray-600 grid grid-cols-10 gap-x-2 px-7 py-4 rounded-lg mt-3"
                  >
                    <div className="col-span-3 flex items-center space-x-4">
                      <img
                        className="rounded-full h-12"
                        src={post.img}
                        alt=""
                      />
                      <h3 className="text-base font-bold leading-5 text-white">
                        {post.title}
                      </h3>
                    </div>
                    <span className="bg-gradient-to-t from-orange-500 to-orange-300 rounded-full self-center mx-auto px-2.5 py-1.5 text-white text-center inline-block w-min font-semibold text-xs leading-none">
                      Ongoing
                    </span>
                    <span className="rounded-full self-center mx-auto px-2.5 py-1.5 text-white text-center inline-block w-min font-semibold text-base leading-none">
                      Private
                    </span>
                    <span className="rounded-full self-center mx-auto px-2.5 py-1.5 text-white text-center inline-block w-min font-semibold text-base leading-none">
                      8303.00
                    </span>
                    <span className="rounded-full self-center mx-auto px-2.5 py-1.5 text-orange-500 text-center inline-block w-min font-semibold text-base leading-none">
                      200K
                    </span>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
