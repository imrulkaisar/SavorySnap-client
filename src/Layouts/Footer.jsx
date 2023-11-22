const Footer = () => {
  return (
    <footer>
      <div className="py-16 bg-gradient-to-r from-[#1F2937] from-50% to-[#111827] to-50%">
        <div className="container-area flex justify-center gap-16">
          <div className="text-center space-y-5 w-96">
            <h4 className="text-white text-6xl uppercase font-medium">
              Contact us
            </h4>
            <p className="text-white leading-relaxed">
              123 ABS Street, Uni 21, Bangladesh
              <br />
              +88 123456789
              <br />
              Mon - Fri: 08:00 - 22:00
              <br />
              Sat - Sun: 10:00 - 23:00
            </p>
          </div>
          <div className="text-center space-y-5 w-96">
            <h4 className="text-white text-6xl uppercase font-medium">
              Follow US
            </h4>
            <p className="text-white">Join us on social media</p>
          </div>
        </div>
      </div>
      <p className="p-5 bg-gray-950 text-white text-center">
        Copyright © CulinaryCloud. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
