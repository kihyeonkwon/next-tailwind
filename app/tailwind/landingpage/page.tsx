export default function Page() {
  return (
    <div className="border-t bg-[url('/landingpage/images/bg-header-desktop.png')] bg-cover">
      <section id="hero">
        <div className="section-container mb-40pt-16">
          <img
            src="/landingpage/images/logo.svg"
            alt=""
            className="mx-auto my-16"
          />
          <h3 className="section-title">A history of everything you copy</h3>
          <p className="section-content mb-10 ">
            Clipborad allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
          <div className="button-container">
            <a
              href=""
              className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
            >
              Download for iOS
            </a>
            <a
              href=""
              className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80"
            >
              Download for Android
            </a>
          </div>
        </div>
      </section>
      <section id="snippets">
        <div className="section-container my-20">
          <h3 className="section-title">Keep track of your snippets</h3>
          <p className="max-w-3xl mx-auto mb-24 text-xl leading-9 text-center text-grayishBlue">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>
      </section>
      <section id="features">
        <div className="section-container my-20">
          <div className="relative flex flex-col md:flex-row md:space-x32">
            <div className="md:w-1/2">
              <img
                className="md:absolute top-0 right-[50%]"
                src="/landingpage/images/image-computer.png"
                alt=""
              />
            </div>
            <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
              <div className="flex flex-col items-center">
                <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                  Quick Search
                </h5>
                <p className="max-w-md text-grayishBlue ">
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                  iCloud Sync
                </h5>
                <p className="max-w-md text-grayishBlue">
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                  Complete History
                </h5>
                <p className="max-w-md text-grayishBlue">
                  Retrieve any snippets from the first moment you started using
                  the app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="access">
        <div className="section-container my-20">
          <h3 className="section-title">Access Clipboard Anywhere</h3>
          <p className="section-content mb-10">
            Whether you’re on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>
          <img
            src="/landingpage/images/image-devices.png"
            alt=""
            className="mx-auto"
          />
        </div>
      </section>
      <section id="supercharge">
        <div className="section-container my-20">
          <h3 className="section-title">Supercharge your flow</h3>
          <p className="section-content mb-16">
            We’ve got the tools to boost your productivity.
          </p>
          <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12">
            <div className="flex flex-col items-center space-y-5">
              <img
                src="/landingpage/images/icon-blacklist.svg"
                alt=""
                className="mb-6"
              />
              <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                Create Blacklists
              </h5>
              <p className="max-w-md texy-grayishBlue">
                Ensure sensitive information never makes its way to your
                clipboard by excluding certain sources.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-5">
              <img
                src="/landingpage/images/icon-text.svg"
                alt=""
                className="mb-6"
              />
              <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                Plain Text Snippets
              </h5>
              <p className="max-w-md texy-grayishBlue">
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-5">
              <img
                src="/landingpage/images/icon-preview.svg"
                alt=""
                className="mb-6"
              />
              <h5 className="mb-2 text-2xl font-bold text-darkGrayishBlue">
                Sneak Preview
              </h5>
              <p className="max-w-md texy-grayishBlue">
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
