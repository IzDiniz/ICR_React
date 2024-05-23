
function ExameSangue() {
    return (
        <body className="font-lexend">
            <div className="">
                <h1 className="pt-6 ml-[1px] flex justify-center text-6xl text-center ">
                    <img src="./src/assets/circulo vermelho.png" alt="Red-circle" className="md:w-16 md:h-16 mr-5 w-9 h-9"/>
                    Exame de Sangue
                    <img src="./src/assets/circulo vermelho.png" alt="Red-circle" className="md:w-16 md:h-16 ml-5 w-9 h-9"/>
                </h1>
            

                <div className="flex justify-center py-10">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/eEl2vRZ2tL8?si=e7ZcPeQP7_P8zLB3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="border-8 border-cyan-300"></iframe>
                </div>
            </div>

            <section>
                <div>
                    <h2 className="border-t-2 text-3xl xl:mx-60 md:mx-5 flex justify-center">
                        Sobre o exame
                    </h2>
                    <div className="pt-5 md:grid md:grid-cols-2">
                        <p className="text-justify xl:ml-32 mx-3 sm:mx-5 text-[18px]">
                        O exame de sangue é uma ferramenta fundamental no campo da medicina, oferecendo insights valiosos sobre a saúde e o bem-estar do paciente. Este procedimento simples e amplamente utilizado fornece uma riqueza de informações que os profissionais de saúde podem usar para diagnosticar condições médicas, monitorar tratamentos e prevenir doenças.
                        <br />
                        Durante o exame de sangue, uma pequena amostra de sangue é coletada geralmente de uma veia no braço do paciente. Essa amostra é então enviada para um laboratório, onde é analisada por técnicos especializados. Existem diferentes tipos de exames de sangue, e cada um pode fornecer informações específicas sobre a saúde do indivíduo.
                        <br />
                        Esses átomos, quando expostos ao campo magnético, alinham-se em uma direção específica. Quando as ondas de rádio são desligadas, os átomos liberam energia e voltam ao seu estado original, produzindo sinais detectáveis por antenas especiais. Esses sinais são processados por computadores para criar imagens detalhadas dos órgãos, músculos, ossos e outras estruturas internas.
                        </p>

                        <div className="pb-5 w-auto">
                            <img src="./src/assets/exame-de-sangue.jpg" alt="Raio-x Imagem 1" className="w-[600px] h-[500px] w"/>
                        </div>
                    </div>
                </div>

                <div>

                    <h2 className="border-t-2 text-3xl xl:mx-60 md:mx-5 flex justify-center text-center">
                        Tipos comuns de Exames de Sangue
                    </h2>
                    <div className="pt-5 md:grid md:grid-cols-2">

                        <div className="pb-5">
                            <img src="./src/assets/coronavirus-blood-samples-assortment-lab.jpg" alt="Raio-x Imagem 1" className="w-[600px] h-[600px] 2xl:ml-32 xl:mx-10"/>
                        </div>

                        <div className="">
                            <p className=" text-[18px] pb-4 text-justify pr-5 mx-3">
                                O exame de sangue desempenha um papel crucial na prevenção, diagnóstico e tratamento de uma ampla gama de condições médicas.
                            </p>
                            <ul className="list-disc whitespace-pre-wrap text-[18px] text-justify pl-10 pr-5 pb-5">
                                <li>
                                    Hemograma Completo: Este exame avalia a contagem de glóbulos vermelhos, glóbulos brancos e plaquetas no sangue, fornecendo informações sobre a saúde geral do paciente.
                                </li>
                                <li>
                                    Perfil Lipídico: Avalia os níveis de colesterol e triglicerídeos no sangue, ajudando a avaliar o risco de doenças cardiovasculares.
                                </li>
                                <li>
                                    Glicemia: Mede os níveis de glicose no sangue, sendo útil no diagnóstico e monitoramento do diabetes.
                                </li>
                                <li>
                                    Perfil Hepático: Avalia a função do fígado, verificando os níveis de enzimas hepáticas e bilirrubina.
                                </li>
                                <li>
                                    Perfil Renal: Analisa a função dos rins, medindo os níveis de ureia, creatinina e eletrólitos no sangue.
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
            
        </body>
    )
}

export default ExameSangue