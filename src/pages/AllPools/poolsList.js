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
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
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
    <div className="relative bottom-10 w-full max-w-xxxl mx-auto px-2 sm:px-0">
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
        <div className="grid grid-cols-10 gap-x-2 justify-start mt-5 text-gray-500 font-semibold text-sm">
            <span className="col-span-3">Pool name</span>
            <span className="text-center">Status</span>
            <span className="text-center">Access</span>
            <span className="text-center">Ratio, 1BUSD</span>
            <span className="text-center">Total raise</span>
            <span className="text-center">Participats</span>
        </div>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "bg-white rounded-xl p-3",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
              )}
            >
              <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative p-3 rounded-md hover:bg-coolGray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        "absolute inset-0 rounded-md",
                        "focus:z-10 focus:outline-none focus:ring-2 ring-blue-400"
                      )}
                    />
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
