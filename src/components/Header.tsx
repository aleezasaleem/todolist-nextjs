import Link from "next/link"
import { FaGithub } from "react-icons/fa"

const Header = () => {
  return (
    <div className="w-full bg-stone-800  h-[12vh] flex items-center justify-between px-4">
        <div className="text-white text-xl md:text-2xl p-2 font-semibold">Todo List</div>
        <div className="text-white text-xl p-2">
            <Link href={"https://github.com/aleezasaleem"} target="_blank" rel="noopener norefferrer">
                <FaGithub size={40}/>
            </Link>
        </div>
    </div>
  )
}

export default Header