import { NextPage } from 'next';
import { Global } from '@emotion/core';
import tw from 'tailwind.macro';
import copy from 'copy-to-clipboard';

const Page: NextPage = () => (
  <div className="text-center">
    <div className="animated fadeInUp w-16 h-16 rounded-lg bg-white mb-5 mx-auto" />
    <h1 className="animated fadeInUp font-bold mb-10 text-lg">
      black icon generator
    </h1>
    <button
      className="animated fadeInUp transition-all border-white border py-2 px-4 rounded cursor-pointer hover:bg-white hover:text-black"
      onClick={() => copy(' ‍ ')}
    >
      copy empty text
    </button>
    <Global
      styles={{
        html: tw`h-full`,
        body: tw`h-full bg-black text-white flex justify-center items-center`
      }}
    />
  </div>
);
export default Page;
