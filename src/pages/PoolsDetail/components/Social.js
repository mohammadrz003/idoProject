const Social = ({darkMode}) => {
  return (
    <div className="w-full flex justify-center space-x-3 mt-4">
      <div
        style={{ backgroundColor: `${darkMode === "dark" ? "#424242" : "#EEF0F3"}`}}
        className="w-6 box-content p-1.5 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-world w-full"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke={`${darkMode === "dark" ? "#9E9E9E" : "#435152"}`}
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="9" />
          <line x1="3.6" y1="9" x2="20.4" y2="9" />
          <line x1="3.6" y1="15" x2="20.4" y2="15" />
          <path d="M11.5 3a17 17 0 0 0 0 18" />
          <path d="M12.5 3a17 17 0 0 1 0 18" />
        </svg>
      </div>
      <div
        style={{ backgroundColor: `${darkMode === "dark" ? "#424242" : "#EEF0F3"}`}}
        className="w-6 box-content p-1.5 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-brand-twitter w-full"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke={`${darkMode === "dark" ? "#9E9E9E" : "#435152"}`}
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
        </svg>
      </div>
      <div
        style={{ backgroundColor: `${darkMode === "dark" ? "#424242" : "#EEF0F3"}`}}
        className="w-6 box-content p-1.5 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-brand-telegram w-full"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke={`${darkMode === "dark" ? "#9E9E9E" : "#435152"}`}
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
        </svg>
      </div>
    </div>
  );
};

export default Social;
