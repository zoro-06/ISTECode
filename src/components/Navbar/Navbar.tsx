import { authModalState } from "@/atoms/authModalAtom";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSetRecoilState } from "recoil";
type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
	const setAuthModalState = useSetRecoilState(authModalState);
	const handleClick = () => {
		setAuthModalState((prev) => ({ ...prev, isOpen: true }));
	};
	return (
		<div className='flex items-center justify-between sm:px-12 px-2 md:px-24'>
			<Link href='/' className='flex items-center justify-center h-20'>
			<img src="1iste.png" alt="Description of the GIF"  width={70} height={70}/>
				<Image src='/3iste.png' alt='ISTECode' height={200} width={200} />
			</Link>
			<div className='flex items-center'>
				
				

				<button
					className='bg-brand-purple text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium
                hover:text-brand-purple hover:bg-white hover:border-3 hover:border-brand-purple border-3 border-transparent
                transition duration-300 ease-in-out marhin-left:20px
                '
					onClick={handleClick}
				>
					Log In
				</button>
			</div>
		</div>
	);
};
export default Navbar;
