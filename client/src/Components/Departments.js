import React from 'react'
import Cardio from '../assets/cardiology.jpg'
function Departments() {
    return (
        <div>
            <section id="departments" className="departments">
                <div className="Departcontainer">

                    <div className="section-title" style={{marginBlock:30}}>
                        <h2 style={{marginBlock:20}}>Departments</h2>
                    </div>

                    <div className="row gy-4">
                        <div className="col-lg-3">
                            <ul className="nav nav-tabs flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1" style={{color:"black"}}>Cardiology</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#tab-2" style={{color:"black"}}>Neurology</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#tab-3" style={{color:"black"}}>Hepatology</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#tab-4" style={{color:"black"}}>Pediatrics</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#tab-5" style={{color:"black"}}>Eye Care</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-9">
                            <div className="tab-content">
                                <div className="tab-pane active show" id="tab-1">
                                    <div className="row gy-4">
                                        <div className="col-lg-8 details order-2 order-lg-1" style={{textAlign:"start"}}>
                                            <h3 style={{marginBlock:20}}>Cardiology</h3>
                                            
                                            <p style={{marginBlock:20}}>Cardiology is a branch of medicine that deals with disorders of the heart and the cardiovascular system. The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease and electrophysiology.</p>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src={Cardio} alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-2">
                                    <div className="row gy-4">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Et blanditiis nemo veritatis excepturi</h3>
                                            <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                            <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src="assets/img/departments-2.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-3">
                                    <div className="row gy-4">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                                            <p className="fst-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                                            <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src="assets/img/departments-3.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-4">
                                    <div className="row gy-4">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                                            <p className="fst-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
                                            <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src="assets/img/departments-4.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-5">
                                    <div className="row gy-4">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                                            <p className="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                                            <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src="assets/img/departments-5.jpg" alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Departments