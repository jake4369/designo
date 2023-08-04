import Image from "next/image";

const Features = () => {
  return (
    <div className="features-section">
      <div className="feature">
        <Image
          src="/assets/home/desktop/illustration-passionate.svg"
          alt="Illustration of person working"
          width={202}
          height={202}
        />
        <div className="feature__text-content">
          <span>PASSIONATE</span>
          <p>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </p>
        </div>
      </div>

      <div className="feature">
        <Image
          src="/assets/home/desktop/illustration-resourceful.svg"
          alt="Illustration of person working"
          width={202}
          height={202}
        />
        <div className="feature__text-content">
          <span>RESOURCEFUL</span>
          <p>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </p>
        </div>
      </div>

      <div className="feature">
        <Image
          src="/assets/home/desktop/illustration-friendly.svg"
          alt="Illustration of two people working together"
          width={202}
          height={202}
        />
        <div className="feature__text-content">
          <span>FRIENDLY</span>
          <p>
            {" "}
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
