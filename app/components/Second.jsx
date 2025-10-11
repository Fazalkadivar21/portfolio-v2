"use client";

export default function AboutMe() {
  return (
    <div className="min-h-screen w-full bg-[#18181b] text-[#f5f5dc] px-4 sm:px-6 lg:px-12 py-12 lg:py-20">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500&display=swap');
        
        .heading-font {
          font-family: 'Bebas Neue', sans-serif;
          letter-spacing: 0.02em;
        }
        
        .body-font {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          font-weight: 400;
          line-height: 1.8;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 lg:mb-20">
          <h1 className="heading-font uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight">
            About me
          </h1>
        </div>

        {/* Content Section */}
        <div className="max-w-3xl lg:max-w-4xl">
          <div className="body-font space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl">
            <p className="opacity-90 hover:opacity-100 transition-opacity duration-300">
              I spend a lot of time building things on the internet. Sometimes
              it's the part you see, like a button that actually does what you
              expect. Sometimes it's the part you don't, like making sure your
              messages don't disappear into the void or your login actually
              keeps out nosy neighbors. I like making things that are useful,
              and I get a weird amount of joy from seeing someone use something
              I made.
            </p>
            <p className="opacity-90 hover:opacity-100 transition-opacity duration-300">
              I'm the kind of person who gets a little too excited when a new
              problem pops up. I love figuring things out, whether it's making a
              website run faster, fixing something that's broken, or just making
              sure everything works the way it should. If you've ever yelled at
              your computer, I've probably been there, too—except I usually end
              up talking to my screen like it's going to answer back.
            </p>
            <p className="opacity-90 hover:opacity-100 transition-opacity duration-300">
              I'm not going to pretend I'm a wizard or a ninja or whatever. I
              just really like making stuff work, and I'm stubborn enough to
              keep poking at a problem until it gives up. If you want someone
              who cares about the details, laughs at their own typos, and will
              probably send you memes at 2am when something finally works,
              that's me.
            </p>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-16 lg:mt-24">
          <div className="w-20 sm:w-32 h-1 bg-[#f5f5dc] opacity-30"></div>
        </div>
      </div>
    </div>
  );
}