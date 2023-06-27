import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="footer">
      <div className="haye">
        <div className="footer_contenet">
          <div className="logo">
            <Link href="/">
              <Image
                width={25}
                height={25}
                src="/Images/Logo_Cadaan.png"
                alt="Logo"
              />
              <p>Takriim</p>
            </Link>
          </div>
          <div className="q_footer">
            <p>
              developed by <Link href="tel:0634645195">Eng Jumhuur </Link>
              <span>&copy; 2023</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
