import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
export const Footer: FC = () => {
  return (
    <div className="relative mb-40 mt-40">
      <footer className="border-t-2 border-[#141414] bg-black hover:text-white absolute w-full">
        <div className="ml-12 py-12 mr-12">
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-8 md:space-x-12 relative">

              <div className="mb-6 items-center mx-auto max-w-screen-lg">
                <div className="font-normal capitalize mb-2.5">SAGA by Solana Mobile</div>

                <div className="flex flex-col mb-0 gap-2">
                  <Link
                    href="https://solanamobile.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    passHref
                    className="text-secondary hover:text-white"
                  >
                    Website
                  </Link>
                  <Link
                    href="https://twitter.com/solanamobile/"
                    target="_blank"
                    rel="noopener noreferrer"
                    passHref
                    className="text-secondary hover:text-white"
                  >
                    Twitter
                  </Link>
                  <Link
                    href="https://discord.com/invite/solanamobile"
                    target="_blank"
                    rel="noopener noreferrer"
                    passHref
                    className="text-secondary hover:text-white"
                  >
                    Discord
                  </Link>
                  <Link
                    href="https://github.com/solana-mobile/solana-mobile-stack-sdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    passHref
                    className="text-secondary hover:text-white"
                  >
                    Github
                  </Link>

                </div>
              </div>

              <div className="mb-6 items-center mx-auto max-w-screen-lg">
                <h5 className="font-normal capitalize tracking-tight  mb-2.5">
                  MADE BY LA LOUTRE
                </h5>

                <div className="flex flex-col mb-0 gap-2">
                  <Link
                    href="https://twitter.com/laloutre"
                    target="_blank"
                    rel="noopener noreferrer"
                    passHref
                    className="text-secondary hover:text-white"
                  >
                    Twitter
                  </Link>
                  <Link
                    href="https://github.com/cryptoloutre/saga-card-tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                    passHref
                    className="text-secondary hover:text-white"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
