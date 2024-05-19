import Link from "next/link"
import { FaGithub } from "react-icons/fa"

const Header = () => {
  return (
    <div className="w-full bg-stone-800 flex justify-between">
        <div className="text-white text-xl p-2">Todo List</div>
        <div className="text-white text-xl p-2">
            <Link href={"https://github.com/gh-tayyab"} target="_blank" rel="noopener norefferrer">
                <FaGithub size={30}/>
            </Link>
        </div>
    </div>
  )
}

export default Header