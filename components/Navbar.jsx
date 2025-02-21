import Link from "next/link"

const Navbar = () => {
  return (
    <header>
        <nav className="flex items-center justify-between container mx-auto p-4 max-w-5xl">
            <h1 className="text-purple-500 text-2xl font-semibold">OneCart</h1>
            <ul className="flex gap-4">
                <li className="text-blue-950">
                    <Link href={'/'}>Home</Link>
                </li>
                <li  className="text-blue-950">
                    <Link href={'/about'}>About</Link>
                </li>
                <li  className="text-blue-950">
                    <Link href={'/services'}>Services</Link>
                </li>
            </ul>    
        </nav>
    </header>
  )
}

export default Navbar