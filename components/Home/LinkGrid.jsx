import Link from "next/link";
import Image from "next/image";

const LinkGrid = () => {
  return (
    <section className="link-grid-section">
      <div className="link-grid__col-1">
        <Link
          href="web-design"
          className="link-grid__item link-grid__item__web-design"
        >
          <h2>WEB DESIGN</h2>
          <span>
            VIEW PROJECTS{" "}
            <Image
              src="/assets/shared/desktop/icon-arrow-right.svg"
              alt=""
              aria-disabled
              width={4}
              height={8}
            />
          </span>
        </Link>
      </div>
      <div className="link-grid__col-2">
        <Link
          href="app-design"
          className="link-grid__item link-grid__item__app-design"
        >
          <h2>APP DESIGN</h2>
          <span>
            VIEW PROJECTS{" "}
            <Image
              src="/assets/shared/desktop/icon-arrow-right.svg"
              alt=""
              aria-disabled
              width={4}
              height={8}
            />
          </span>
        </Link>
        <Link
          href="web-design"
          className="link-grid__item link-grid__item__graphic-design"
        >
          <h2>GRAPHIC DESIGN</h2>
          <span>
            VIEW PROJECTS{" "}
            <Image
              src="/assets/shared/desktop/icon-arrow-right.svg"
              alt=""
              aria-disabled
              width={4}
              height={8}
            />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default LinkGrid;
