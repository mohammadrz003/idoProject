import {
  PaperImageBox,
  PaperItem,
  PaperItemTitle,
  WhitePaperWrapper,
} from "./style/whitePaper.style";
import Classes from "./style/whitePaper.module.css";
import { PoolTitle } from "../../components/style/cardStyle.style";
import img1 from "../../img/whitepaper/img1.jpg";
import img2 from "../../img/whitepaper/img2.jpg";
import img3 from "../../img/whitepaper/img3.jpg";
import { useState } from "react/cjs/react.development";

const WhitepaperPreview = ({ useDarkMode }) => {
  const imageList = [
    { id: 1, imgSrc: img1 },
    { id: 2, imgSrc: img2 },
    { id: 3, imgSrc: img3 },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <WhitePaperWrapper className="dark:bg-darkMode-800 dark:text-white text-center py-16">
      <PoolTitle
        useDarkMode={useDarkMode}
        className={`dark:text-white leading-none relative inline-block text-center font-bold text-secondery-300 text-3xl`}
      >
        <span className="relative z-10">Whitepaper Preview</span>
      </PoolTitle>
      <div
        className={
          model ? `${Classes.model} ${Classes.open}` : `${Classes.model}`
        }
      >
        <img src={tempimgSrc} alt="" />
        <svg
          onClick={() => setModel(false)}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#ffffff"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="container mx-auto mt-16">
        <PaperImageBox className="px-4 xl:px-20 space-y-8 lg:space-y-0 lg:space-x-12">
          {imageList.map((item) => {
            return (
              <PaperItem
                key={item.id}
                className="w-full lg:w-1/3 rounded-2xl"
                onClick={() => getImg(item.imgSrc)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 absolute top-6 right-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#F7F7F7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                <img
                  className="w-full h-full object-cover"
                  src={item.imgSrc}
                  alt=""
                />
                <PaperItemTitle>Lorem Ipsum</PaperItemTitle>
              </PaperItem>
            );
          })}
        </PaperImageBox>
      </div>
    </WhitePaperWrapper>
  );
};

export default WhitepaperPreview;
