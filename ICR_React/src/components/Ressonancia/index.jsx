
function RessonanciaMagnetica() {
    return (
        <body className="font-lexend">
            <div className="">
                <h1 className="pt-6 ml-[1px] flex justify-center md:text-6xl text-4xl text-center ">
                    <img src="./src/assets/quadrado azul.png" alt="Blue-square" className="md:w-16 md:h-16 mr-5 w-9 h-9"/>
                    Ressonância Magnética
                    <img src="./src/assets/quadrado azul.png" alt="Blue-square" className="md:w-16 md:h-16 ml-5 w-9 h-9"/>
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
                        A ressonância magnética é uma técnica de imagem não invasiva e extremamente poderosa que revolucionou a medicina moderna. Utilizando campos magnéticos e ondas de rádio, a RM fornece imagens detalhadas dos tecidos e estruturas internas do corpo humano, permitindo diagnósticos precisos e tratamentos mais eficazes.
                        <br />
                        O princípio por trás da ressonância magnética é complexo, mas sua aplicação é surpreendentemente simples. Durante o exame, o paciente é posicionado dentro de um grande ímã que cria um campo magnético forte e uniforme ao redor do corpo. Em seguida, são aplicadas ondas de rádio específicas que interagem com os átomos de hidrogênio presentes nos tecidos do corpo.
                        <br />
                        Esses átomos, quando expostos ao campo magnético, alinham-se em uma direção específica. Quando as ondas de rádio são desligadas, os átomos liberam energia e voltam ao seu estado original, produzindo sinais detectáveis por antenas especiais. Esses sinais são processados por computadores para criar imagens detalhadas dos órgãos, músculos, ossos e outras estruturas internas.
                        </p>

                        <div className="pb-5">
                            <img src="./src/assets/ressonancia_magnetica.jpg" alt="Raio-x Imagem 1" className="w-[600px] h-[500px]"/>
                        </div>
                    </div>
                </div>

                <div>

                    <h2 className="border-t-2 text-3xl xl:mx-60 md:mx-5 flex justify-center text-center">
                        Indicações de quando necessário
                    </h2>
                    <div className="pt-5 md:grid md:grid-cols-2">

                        <div className="pb-5">
                            <img src="./src/assets/doctor-looking-ct-scan.jpg" alt="Raio-x Imagem 1" className="w-[600px] h-[600px] 2xl:ml-32 xl:mx-10"/>
                        </div>

                        <div>
                            <p className="text-[18px] pb-4 text-justify pr-5 mx-3">
                                Um exame de Raio-X é indicado em diversas situações clínicas para auxiliar no diagnóstico e A ressonância magnética é uma ferramenta indispensável no arsenal diagnóstico dos profissionais de saúde, proporcionando uma visão sem precedentes do interior do corpo humano. Sua capacidade de fornecer imagens detalhadas e precisas desempenha um papel fundamental no diagnóstico precoce e no tratamento eficaz de uma variedade de condições médicas. Alguns dos cenários em que é recomendado realizar um exame de Ressonância Magnética incluem:
                            </p>
                            <ul className="list-disc whitespace-pre-wrap text-[18px] text-justify pl-10 pr-5 pb-5">
                                <li>
                                    Lesões Traumáticas: Após acidentes de carro, quedas ou lesões esportivas, a ressonância magnética pode ser usada para avaliar danos nos tecidos moles, como músculos, ligamentos, tendões e cartilagens.
                                </li>
                                <li>
                                    Doenças Neurológicas: Para diagnóstico de condições neurológicas, como acidente vascular cerebral (AVC), tumores cerebrais, esclerose múltipla, doença de Alzheimer, lesões na medula espinhal e esclerose lateral amiotrófica (ELA).
                                </li>
                                <li>
                                    Dor Crônica nas Costas ou Pescoço: Em casos de dor nas costas ou no pescoço persistente e inexplicável, a ressonância magnética pode ajudar a identificar hérnias de disco, estenose espinhal, tumores ou outras anormalidades estruturais na coluna vertebral.
                                </li>
                                <li>
                                    Problemas nas Articulações: Para avaliar condições como artrite, osteoartrite, lesões de cartilagem ou rompimento de ligamentos em articulações como joelhos, ombros, quadris ou tornozelos.
                                </li>
                                <li>
                                    Doenças Cardíacas: Em casos de suspeita de doenças cardíacas, como problemas de válvulas cardíacas, cardiomiopatias ou infartos do miocárdio, a ressonância magnética cardíaca pode fornecer imagens detalhadas do coração e dos vasos sanguíneos.
                                </li>
                                <li>
                                    Câncer e Metástases: Para avaliar a extensão do câncer, identificar tumores primários e metástases, e monitorar a eficácia do tratamento.
                                </li>
                                <li>
                                    Anomalias Congênitas: Em casos de suspeita de anomalias congênitas, a ressonância magnética pode ser usada para avaliar o desenvolvimento fetal e diagnosticar condições como espinha bífida, hidrocefalia ou malformações cardíacas.
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </section>
            
        </body>
    )
}

export default RessonanciaMagnetica