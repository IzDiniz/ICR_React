import CardMain from "../CardMain"

const Main = () => {
  return (
    <main className="mb-5">
      <section className="w-full">

        <div className="flex justify-center h-screen w-full bg-[url(./src/assets/background_novo2.jpg)] object-center">
          <div className="flex flex-col gap-y-5 pt-5 text-white">

            <div className="relative top-1/3">
              <h1 className="flex justify-center text-3xl font-lexend pb-2">
                Quem Somos ?
              </h1>
              <p className="align text-center lg:px-32 font-lexend text-lg">
                Conheça um pouco sobre nós, A nossa empresa, Tech do Bem, que surgiu da parceria do ICr com a Fiap, tem como missao, informar de uma maneira fácil, simples e divertida, todas as crianças/adolescentes e seus acompanhantes que visitam o Instituto!
              </p>
            </div>
              
          </div>
        </div>

        <section>
          <h1 className="pt-6 flex justify-center text-3xl">
            Exames e Procedimentos
          </h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            <CardMain titulo="Sangue" foto="./src/assets/coronavirus-blood-samples-assortment-lab.jpg" descricao="Clique Aqui"/>
            <CardMain titulo="Raio-X" foto="./src/assets/owen-beard-DK8jXx1B-1c-unsplash.jpg" descricao="Clique Aqui"/>
            <CardMain titulo="Ressonância" foto="./src/assets/ressonancia_magnetica.jpg" descricao="Clique Aqui"/>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Main