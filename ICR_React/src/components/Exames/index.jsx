import CardMain from "../CardMain"
import CardComingSoon from "../CardComingSoon"


const Exames = () => {
  return (
    <div className="font-lexend">
      <h1 className="pt-6 flex justify-center text-3xl text-center">
        Área de Exames e Procedimentos
      </h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3">
        <CardMain titulo="Sangue" foto="./src/assets/coronavirus-blood-samples-assortment-lab.jpg" direction="../ExameSangue" descricao="Clique Aqui"/>
        <CardMain titulo="Raio-X" foto="./src/assets/owen-beard-DK8jXx1B-1c-unsplash.jpg" direction="../RaioX" descricao="Clique Aqui"/>
        <CardMain titulo="Ressonância" foto="./src/assets/ressonancia_magnetica.jpg" direction="../Ressonancia" descricao="Clique Aqui"/>
      </div>

      <h2 className="pt-6 flex justify-center text-2xl">Exames em breve...</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3">
        <CardComingSoon titulo="Em breve" foto="Comming Soon" descricao="Clique Aqui"/>
        <CardComingSoon titulo="Em breve" foto="Comming Soon" descricao="Clique Aqui"/>
        <CardComingSoon titulo="Em breve" foto="Comming Soon" descricao="Clique Aqui"/>
      </div>
    </div>
  )
}

export default Exames