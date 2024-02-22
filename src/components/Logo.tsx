import Link from "next/link";
import Image from "next/image";
const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo-no-background.svg" width={64} height={64} priority alt="" />
    </Link>
  );
};

export default Logo;
