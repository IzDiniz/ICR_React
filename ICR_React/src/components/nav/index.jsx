import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";

const Nav= () =>{

const [toggle, setToggle] = useState(false);

function openMenu(){
    setToggle(!toggle);
}

    return (
        <header className="bg-cyan-300 font-lexend">
            <div className="flex items-center justify-between p-5 ">
                <div className="w-36">
                    <img src="./src/assets/logo.png" alt="Logo ICR" />
                </div>

                <nav className="space-x-4">
                    <div className="hidden lg:block space-x-2 pr-8 font text-xl">
                        <a className="text-white hover:bg-cyan-500
                        rounded-full px-5 py-2 cursor-pointer">Home</a>
                        <a className="text-white hover:bg-cyan-500
                        rounded-full px-5 py-2 cursor-pointer">Exames</a>
                        <a className="text-white hover:bg-cyan-500
                        rounded-full px-5 py-2 cursor-pointer">Doações</a>
                    </div>

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
                    <div className="flex justify-between ml-10">
                    <ul>
                        <li className="text-white text-xl mb-2 cursor-pointer hover:bg-cyan-500 py-2">Home</li>
                        <li className="text-white text-xl mb-2 cursor-pointer hover:bg-cyan-500 py-2">Exames</li>
                        <li className="text-white text-xl mb-2 cursor-pointer hover:bg-cyan-500 py-2">Doações</li>
                    </ul>
                </div>
                ):(
                    <div></div>
                )}
            </div>
        </header>
    );
}

export default Nav;