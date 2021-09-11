const Whitepaper = () => {
  return (
    <div className="w-screen h-screen overflow-y-auto flex items-center justify-center">
      <iframe
        id="pdf-js-viewer"
        src="lib/web/viewer.html?file=../../files/bulllaunchpad-whitepaper.pdf"
        title="webviewer"
        frameBorder="0"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
};

export default Whitepaper;
