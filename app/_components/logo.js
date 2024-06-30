import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png"
function Logo() {
    return (
        <>
            <Link href="/" className="flex items-center gap-5 z-10">
            {/*     <Image
                    src="/logo.png"
                    alt="The Wild Oasis Logo"
                    width={60}
                    height={60}
                /> */}
                <Image
                    src={logo}
                    alt="The Wild Oasis Logo"
                    width={60}
                    quality={100}
                    height={60}
                />
            </Link>
            <span className="text-xl font-semibold text-primary-100">
                The Wild Oasis
            </span>
        </>
    );
}

export default Logo;
