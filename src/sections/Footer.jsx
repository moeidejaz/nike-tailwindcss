import { footerLogo } from "../assets/images";
import { footerLinks, socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-black font-primary text-white-400 padding-x py-9 md:pt-16">
      <section className="flex flex-col lg:flex-row gap-20 items-start">
        <section className="">
          <img src={footerLogo} alt="nike logo" width={150} height={46} />
          <p className="mt-6 text-base leading-7 sm:max-w-lg">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards.
          </p>

          <div className="socialLinks flex gap-5 mt-6">
            {socialLinks.map((item) => (
              <a
                href={item.link}
                className="bg-white w-12 h-12 rounded-full flex justify-center items-center"
                key={item.alt}
              >
                <img src={item.imgURL} alt={item.alt} />
              </a>
            ))}
          </div>
        </section>

        <section className="flex justify-between gap-5 w-full flex-wrap">
          {footerLinks.map((item) => (
            <div key={item.title}>
              <h3 className="text-2xl font-medium text-white mb-6">
                {item.title}
              </h3>
              <ul>
                {item.links.map((links) => (
                  <li
                    key={links.name}
                    className="text-white-400 mb-3 hover:text-slate-gray"
                  >
                    <a href={links.link}>{links.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </section>

      <section className="flex flex-col justify-between items-center md:flex-row pt-6">
        <p>&copy; Copyright. All rights reserved.</p>
        <p className="hover:text-slate-gray">
          <a href="/">Terms & Conditions</a>
        </p>
      </section>
    </footer>
  );
};

export default Footer;