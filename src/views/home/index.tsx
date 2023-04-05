// Next, React
import { FC, useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Connection } from "@solana/web3.js";
import { Metaplex } from "@metaplex-foundation/js";
import { sagaCollection } from "../../../lib/collectionAddresses";
import { Loader } from "components/Loader";
import { sagaNFTInfo } from "./sagaNFTInfo";

export const HomeView: FC = ({}) => {
  const wallet = useWallet();
  const connection = new Connection(
    "https://try-rpc.mainnet.solana.blockdaemon.tech"
  );
  const metaplex = new Metaplex(connection);
  const [isFetched, setIsFetched] = useState<boolean>(false);
  const [userSagaNFTs, setUserSagaNFTs] = useState<any[]>();
  const [nbUserNFTs, setNbUserNFTs] = useState<number>();
  const nbTotalNFTsInCollection = sagaNFTInfo.length;

  async function getUserNFT() {
    if (!wallet.publicKey) {
      return;
    }
    const publickey = wallet.publicKey;
    const _userSagaNFTs = [];
    setIsFetched(false);

    const userNFTs = await metaplex
      .nfts()
      .findAllByOwner({ owner: publickey }, { commitment: "processed" });

    const sagaNFTs = userNFTs.filter(
      (metadata) =>
        metadata.collection !== null &&
        metadata.collection.verified &&
        metadata.collection.address.toBase58() === sagaCollection.toBase58()
    );

    sagaNFTs.map((nft) => {
      const name = nft.name;
      _userSagaNFTs.push(name);
    });

    const userSagaNFTs = _userSagaNFTs.filter(
      (x, i) => _userSagaNFTs.indexOf(x) === i
    );

    console.log("Got their Saga NFTs ", userSagaNFTs);

    setUserSagaNFTs(userSagaNFTs);
    setNbUserNFTs(userSagaNFTs.length);
    setIsFetched(true);
  }

  useEffect(() => {
    if (wallet.publicKey) {
      getUserNFT();
    }
  }, [wallet.publicKey]);

  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex justify-center">
        <div className="">
          <h1 className="font-bold text-4xl text-center">SAGA Cards TRACKER</h1>
          <div className="font-bold text-2xl text-center mt-2">
            Track the SAGA Cards NFTs you are missing
          </div>

          {!wallet.publicKey && (
            <div className="text-center font-bold text-xl my-6">
              Please, connect your wallet to see your progression!
            </div>
          )}
          {wallet.publicKey && isFetched && (
            <div className="text-center font-bold text-xl my-6">
              You have{" "}
              <span className="font-black text-[#14F195]">{nbUserNFTs}</span>{" "}
              out of{" "}
              <span className="font-black text-[#14F195]">
                {nbTotalNFTsInCollection}
              </span>{" "}
              NFTs!
              <br />
            </div>
          )}
          {wallet.publicKey && !isFetched && <Loader />}
          <div className="flex justify-center">
            <div className="w-[90%] md:w-[80%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4 flex items-center">
              {sagaNFTInfo.map((currentNft) => {
                return (
                  <div key={currentNft.name}>
                    <div className="bg-[#000000]">
                      <img className="" src={currentNft.image}></img>
                      <h1 className="font-bold mt-2">{currentNft.name}</h1>
                      <h2 className="font-bold text-sm">
                        By{" "}
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#9945FF] font-bold"
                          href={
                            "https://twitter.com/" +
                            currentNft.artist1.substring(1)
                          }
                        >
                          {currentNft.artist1}
                        </a>{" "}
                        {currentNft.artist2 != "" && (
                          <span>
                            &{" "}
                            <a
                              target="_blank"
                              rel="noreferrer"
                              className="text-[#9945FF] font-bold"
                              href={
                                "https://twitter.com/" +
                                currentNft.artist2.substring(1)
                              }
                            >
                              {currentNft.artist2}
                            </a>
                          </span>
                        )}
                      </h2>
                      {isFetched && wallet.publicKey && (
                        <div className="flex justify-center">
                          {isFetched &&
                          userSagaNFTs.find((nft) => nft == currentNft.name) !=
                            undefined ? (
                            <a
                              target="_blank"
                              rel="noreferrer"
                              className="mt-4 py-2 px-2 font-bold rounded-xl text-xs bg-[#14F195] uppercase sm:ml-1 mb-2 sm:mb-4"
                            >
                              Owned
                            </a>
                          ) : (
                            <a
                              target="_blank"
                              rel="noreferrer"
                              className="mt-4 py-2 px-2 font-bold rounded-xl text-xs bg-[#E42575] hover:bg-[#BA2163] uppercase sm:ml-1 mb-2 sm:mb-4"
                              href={currentNft.magiceden}
                            >
                              Buy on Magic Eden
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
