import LandingTop from "../components/nav/landtop.nav";

export default function Home() {
  return (
    <main
      className="
        flex min-h-screen flex-col 
        bg-[#EDF1D6] text-black
        dark:bg-[#35374B] dark:text-white"
    >
      <LandingTop />
      <div className="md:flex md:flex-row">
        <div className="md:text-2xl text-center px-6 md:py-4 md:w-1/2 border border-black">
          <p>Test</p>
        </div>
        <div
          id="Descriptive-Content"
          className="md:text-2xl text-center px-6 md:py-4 md:w-1/2 border border-black"
        >
          <p>
            CryoHub is a modern and intuitive content management system (CMS)
            designed for creators and developers who prioritize flexibility,
            simplicity, and performance. With CryoHub, managing and publishing
            content becomes effortless, thanks to its user-friendly interface
            and powerful features.
          </p>
          <p>
            {
              "Create and organize your content with ease, whether you're publishing blog posts, articles, portfolios, or multimedia-rich pages. CryoHub's flexible architecture adapts to your unique needs, allowing you to customize layouts, styles, and content structures effortlessly."
            }
          </p>
          <p>
            Built on Next.js and MongoDB, CryoHub leverages cutting-edge
            technologies to deliver blazing-fast performance and seamless
            integration with your favorite tools and services. Its TypeScript
            support ensures type safety and consistency throughout your
            development process.
          </p>
          <p>
            {
              "With CryoHub, you're in control. Manage your database connections, configure settings, and personalize your CMS experience to suit your workflow and preferences. Enjoy peace of mind knowing that your content is secure and accessible, backed by robust security measures and best practices."
            }
          </p>
        </div>
      </div>
    </main>
  );
}
