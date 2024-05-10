// eslint-disable-next-line react/prop-types
function CardMain({titulo, foto, descricao}) {
    return <div className="bg-cyan-300 mx-8 my-5 w-80">
        <div className="grid justify-items-center m-10">
            <h1 className="text-3x1 text-white mt-10 text-4xl mb-5">{titulo}</h1>
            <img src={foto} alt={foto} className="w-80 h-80"/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full relative bottom-5 object-center">{descricao} </button>
        </div>
    </div>
}

export default CardMain;