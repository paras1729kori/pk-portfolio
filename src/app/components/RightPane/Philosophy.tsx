const Philosophy = () => {
  return (
    <div className="flex flex-col gap-8" id="engineering-philosophy">
      <h1 className="text-xs font-extrabold uppercase">
        Engineering Philosophy
      </h1>
      <div className="flex flex-col gap-3 text-sm">
        <p>
          I start with the <span className="text-white text-sm">user</span>, not
          the implementation. Before writing code, I try to understand the{" "}
          <span className="text-white text-sm">use case</span>, the people using
          the product, and what we're actually trying to solve. If something
          isn't clear, I believe it's an engineer's responsibility to{" "}
          <span className="text-white text-sm">question the requirement</span>.
        </p>

        <p>
          I like interfaces that are{" "}
          <span className="text-white text-sm">
            simple, intentional, and expressive
          </span>
          . Clean layouts, elegant typography, restrained colors, and the
          occasional <span className="text-white text-sm">pop of color</span>{" "}
          are what I naturally gravitate towards. I believe visual design is
          what makes someone want to{" "}
          <span className="text-white text-sm">stay and explore</span>.
        </p>

        <p>
          The small details matter too.{" "}
          <span className="text-white text-sm">Micro-interactions</span>, subtle
          transitions, and near-instant feedback can turn a functional interface
          into an experience that feels{" "}
          <span className="text-white text-sm">alive</span>. Accessibility is
          equally important—I don't believe a beautiful interface should come at
          the cost of being usable.
        </p>

        <p>
          On the code side, I value{" "}
          <span className="text-white text-sm">
            readability over cleverness
          </span>{" "}
          and pragmatism over unnecessary abstraction. I want today's
          implementation to leave room for tomorrow's changes, without making{" "}
          <span className="text-white text-sm">future refactoring painful</span>
          .
        </p>

        <p>
          I care about performance, but I don't optimize blindly. If a trade-off
          isn't something the{" "}
          <span className="text-white text-sm">user can actually feel</span>,
          I'd rather keep the code simple and maintainable. Ultimately, I want
          to build software that feels{" "}
          <span className="text-white text-sm">
            fast, thoughtful, accessible, and human
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default Philosophy;
