
function RaioX() {
    return (
        <body className="font-lexend">
            <div className="">
                <h1 className="pt-6 ml-[1px] flex justify-center text-6xl text-center ">
                    <img src="./src/assets/estrela verde.png" alt="Grenn-Star" className="md:w-16 md:h-16 mr-5 w-9 h-9"/>
                    Raio-X
                    <img src="./src/assets/estrela verde.png" alt="Grenn-Star" className="md:w-16 md:h-16 ml-5 w-9 h-9"/>
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
                        Também chamado de radiografia, os raios X são um exame de imagem não invasivo, que utiliza baixas doses de radiação para identificar rapidamente alguns tipos de alterações na estrutura de ossos e de órgãos.
                        <br />
                        Os raios X são um exame não invasivo e indolor. Nele, o paciente pode deitar-se em uma maca ou ficar de pé contra uma determinada superfície. O exame geralmente é focado em uma única parte do corpo, orientada de acordo com a queixa do paciente. Então, um aparelho emite um feixe de luz e partículas que são invisíveis a olho nu. No entanto, essas partículas conseguem atravessar o corpo em diferentes velocidades e com maior ou menor facilidade, de acordo com a área. Esses feixes de partículas, após atravessarem o corpo, aterrissam em uma chapa e deixam suas impressões ali, como se fosse uma fotografia mesmo.
                        <br />
                        Assim, aquilo que é osso ganha uma determinada impressão, enquanto tecidos moles e partes líquidas geram outras marcas, permitindo que o médico visualize o interior do corpo do paciente e feche um diagnóstico com base no exame de raios X.
                        </p>

                        <div className="pb-5">
                            <img src="./src/assets/owen-beard-DK8jXx1B-1c-unsplash.jpg" alt="Raio-x Imagem 1" className="w-[600px] h-[500px]"/>
                        </div>
                    </div>
                </div>

                <div>

                    <h2 className="border-t-2 text-3xl xl:mx-60 md:mx-5 flex justify-center text-center">
                        Indicações de quando necessário
                    </h2>
                    <div className="pt-5 md:grid md:grid-cols-2">

                        <div className="pb-5">
                            <img src="./src/assets/bones.jpg" alt="Raio-x Imagem 1" className="w-[600px] h-[600px] 2xl:ml-32 xl:mx-10"/>
                        </div>

                        <div>
                            <p className="text-[18px] pb-4 text-justify pr-5 mx-3">Um exame de Raio-X é indicado em diversas situações clínicas para auxiliar no diagnóstico e avaliação de condições médicas. 
                            Alguns dos cenários em que é recomendado realizar um exame de Raio-X incluem:
                            </p>
                            <ul className="list-disc whitespace-pre-wrap text-[18px] text-justify pl-10 pr-5">
                                <li>Fraturas ósseas: O Raio-X é frequentemente usado para identificar e avaliar fraturas ósseas em diferentes partes do corpo, como braços, pernas, coluna vertebral e crânio.</li>
                                <li>Suspeita de pneumonias e outras infecções pulmonares: O exame de Raio-X do tórax é comumente utilizado para avaliar os pulmões e identificar sinais de infecções respiratórias, como pneumonia.</li>
                                <li>Avaliação de órgãos e estruturas abdominais: O Raio-X pode ser usado para visualizar o abdômen e avaliar órgãos como estômago, intestinos e rins, identificando possíveis obstruções ou outras anormalidades.</li>
                                <li>Avaliação de dentes e ossos da face: O Raio-X dentário é amplamente utilizado na odontologia para diagnosticar cáries, problemas na raiz dos dentes, infecções ou fraturas dentárias.</li>
                                <li>Avaliação do esqueleto para deformidades ou doenças ósseas: O Raio-X pode ser usado para avaliar a coluna vertebral em busca de escoliose ou outras deformidades e para detectar doenças ósseas, como osteoporose.</li>
                                <li>Avaliação de órgãos e estruturas do sistema urinário: O Raio-X com contraste pode ser usado para examinar os rins e o trato urinário, identificando anomalias ou obstruções.</li>
                                <li>Avaliação de próteses e dispositivos médicos: O exame de Raio-X é útil para verificar a posição e a integridade de próteses articulares, dispositivos implantados e outros materiais médicos.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
            
        </body>
    )
}

export default RaioX