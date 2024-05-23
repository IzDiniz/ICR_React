import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function Example() {
  return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
        <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start">
             <img
              src="https://github.com/phz1n777/base-challenge/blob/main/image/palhaco.jpg?raw=true"
              alt="Why Donate"
              className="w-full md:w-1/2 rounded-lg flex-col"
            />
            <div className="mt-6 md:mt-0 md:ml-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Por que ajudar?
              </h2>
              <p className="mt-4 text-gray-700">
              No dialeto africano, existe uma palavra chamada “Ubuntu”, que significa: Acolhimento, respeito, ENTREAJUDA, PARTILHA, comunidade, CUIDADO, confiança, GENEROSIDADE. E em sua tradução literal, ela significa: “Eu sou porque tu és. Eu só posso ser pessoa através das outras pessoas”. Isso nos leva a pensar que devemos ter uma humanidade para com os outros.
              </p>
              <p className="mt-2 text-gray-700 font-semibold">
              Esta é uma parte dedicada a doações, mas não uma doação comum, sim uma doação daquilo que você tem de melhor.
              Se você é um profissional da diversão ou gostaria de melhorar o dia de uma criança de alguma forma, por favor, preencha o formulário abaixo com seus dados e aquilo com o que gostaria de ajudar, que a nossa equipe entrará em contato para agendar a sua visita. <br/> Obrigado.
              </p>
            </div>
          </div>
  
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Doe</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="nome-completo" className="block text-sm font-medium text-gray-700">
                  Nome completo:
                </label>
                <input
                  type="text"
                  id="nome-completo"
                  name="nome-completo"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder='Manuela Castro Rodrigues'
                  required
                />
              </div>
              <div>
                <label htmlFor="Telefone" className="block text-sm font-medium text-gray-700">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="Telefone"
                  name="Telefone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder='(11)12345-6789'
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder='nome@email.com'
                  required
                />
              </div>
              <div>
                <label htmlFor="como-ajudar" className="block text-sm font-medium text-gray-700">
                  Como gostaria de ajudar?
                </label>
                <textarea
                  id="como-ajudar"
                  name="como-ajudar"
                  rows="3"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
