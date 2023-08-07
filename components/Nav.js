"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { signIn, signOut, useSession, getProviders } from "next-auth/react"
import '@styles/globals.css'


function Header() {
    const { data: session } = useSession()
    const [providers, setProviders] = useState(null)
    const [toggleDropDown, setToggleDropDown] = useState(false)

    useEffect(() => {
        const setUpProviders = async () => {
            const response = await getProviders()
            console.log(response)
            setProviders(response)
        }
        setUpProviders()
    }, [])
 
  
  return (
    <nav className="flex-between w-full mb-0 p-4">
     <div style={{display: "flex", alignItems: "center", justifyContent: "center", width: "212px", height: "100%", backgroundColor:"transparent" }}>
        <Link href="/" className="flex gap-2 flex-center"> 
            <Image src={'/flashy-logo2.png'} width={211.6935} height={35} alt="Flashy McFlasherson" />
        </Link>
        </div>

       {/* Desktop navigation */}
       <div className="sm:flex hidden">
            {session?.user ? (
                <div className="flex gap-3 md:gap-5">
                    <button 
                        type="button"
                        onClick={signOut}
                        className="outline_btn"
                    >
                        Sign Out
                    </button>  
                    <Link href="/profile">
                        <Image
                            src={session?.user.image}
                            alt="Profile"
                            width={37}
                            height={37}
                            className="rounded-full"
                        />
                    </Link>
                </div>
            ): (
                    <>
                        {providers && Object.values(providers).map((provider) => (
                            <button
                                type="button"
                                key={provider.name}
                                onClick={() => signIn(provider.id)}
                                className="white_btn"
                            >
                                Sign In
                            </button>
                        ))}
                    </>
                )}
        </div>


             {/* mobile navigation */}
             <div className="sm:hidden flex relative">
                { session?.user ? (
                    <div className="flex">
                    <Image
                        src={session?.user.image}
                        alt="Profile"
                        width={37}
                        height={37}
                        className="rounded-full"
                        onClick={() => setToggleDropDown((prev) => !prev)}
                    />
                    
                    {toggleDropDown && (
                        <div className="dropdown">
                            <Link 
                                className="dropdown_link"
                                href="/profile"
                                onClick={() => setToggleDropDown(false)}
                            >
                                My Profile
                            </Link>
                            <Link 
                                className="dropdown_link"
                                href="/create-prompt"
                                onClick={() => setToggleDropDown(false)}
                            >
                                Create Prompt
                            </Link>
                            <button
                                type="button"
                                onClick={() => {
                                    setToggleDropDown(false)
                                    signOut()
                                }}
                                className="mt-5 w-full black_btn"
                            >
                                Sign Out
                            </button>
                        </div>
                    )}

                    </div>
                ): (
                    <>{ providers && Object.values(providers).map((provider) => (
                        <button
                            type="button"
                            key={provider.name}
                            onClick={() => signIn(provider.id)}
                            className="black_btn"
                        >
                            Sign In
                        </button>

                    ))} 
                </>  )}
        </div>
    </nav>
  )}

export default Header;
