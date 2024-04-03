import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LogoWhite from "../../../public/icons/logo_white.svg";

const Footer = () => {
  return (
    <footer className='footer border-t-2 border-t-slate-800 text-white'>
        <div className='container p-12 flex justify-between'>
        <Link
          href={"/"}>
          <Image width={100} src={LogoWhite} alt="Aram Dev Logo" />
        </Link>
        <p className='text-slate-500'>All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
