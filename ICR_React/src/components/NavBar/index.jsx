import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import { Link } from 'react-router-dom'


const Nav= () =>{
const [toggle, setToggle] = useState(false);

function openMenu(){
    setToggle(!toggle);
}

    return (
        <header className="bg-gradient-to-tr from-cyan-300 to-indigo-400 font-lexend">
            <div className="flex items-center justify-between p-5 ">
                <div className="w-36">
                    <img src="./src/assets/logo.png" alt="Logo ICR" />
                </div>

                <nav className="space-x-4">
                    <nav className="hidden lg:block space-x-2 pr-8 font text-xl">
                        <a className="text-white hover:bg-cyan-500
                        rounded-full px-5 py-2 cursor-pointer"><Link to="/">Home</Link></a>
                        <a className="text-white hover:bg-cyan-500
                        rounded-full px-5 py-2 cursor-pointer"><Link to="Exames">Exames</Link></a>
                        <a className="text-white hover:bg-cyan-500
                        rounded-full px-5 py-2 cursor-pointer"><Link to="Doacoes">Doações</Link></a>
                        <a className="text-white hover:bg-cyan-500
                        rounded-full px-5 py-2 cursor-pointer"><Link to="AssistenteClara">Assistente Clara</Link></a>
                    </nav>

                    {/* Adicionando icon de menu para dispositivos móveis */}
                    <div className="ssm:block lg:hidden">
                        {/* Adicionando display de abrir e fechar menu no mobile */}
                        {toggle ? (
                            <AiOutlineClose onClick={openMenu} size={30} className="text-white cursor-pointer"/>
                        ):(<HiMenuAlt1 onClick={openMenu} size={30} className="text-white cursor-pointer"/>)}
                        
                    </div>
                </nav>
            </div>

            {/* MOVEL */}
            <div className=" lg:hidden"> {/* Criando o Mobile Menu */}
                {toggle ? (
                <nav className="flex justify-between ml-10">
                    <ul>
                        <li className="text-white text-xl mb-2 cursor-pointer hover:bg-cyan-500 py-2"><Link to="/">Home</Link></li>
                        <li className="text-white text-xl mb-2 cursor-pointer hover:bg-cyan-500 py-2"><Link to="Exames">Exames</Link></li>
                        <li className="text-white text-xl mb-2 cursor-pointer hover:bg-cyan-500 py-2"><Link to="Doacoes">Doações</Link></li>
                        <li className="text-white text-xl mb-2 cursor-pointer hover:bg-cyan-500 py-2"><Link to="AssistenteClara">Assistente Clara</Link></li>
                    </ul>
                </nav>
                ):(
                    <div></div>
                )}
            </div>
        </header>
    );
}

export default Nav;