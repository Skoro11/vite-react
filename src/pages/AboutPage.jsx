import "./About.css"

function AboutPage(){
    return(
        <section className="mg-inline-auto pd-in-30p pd-in-15-mb mx-width-1170px">
             <div className="links-home"><a className="home-link" href="/">Home</a> / About</div>
            <div className="flex align-center mg-bottom-10">
                <div className="width-40 padding-right-10">
                    <h1 className="font-48px mg-bottom-5">Our Story</h1>
                    <p className="mg-bottom-5">Launched in 2015, Exclusive is South Asias premier online shopping marketplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 

                    </p >
                    <p>
                    Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                    </p>
                </div>
                <div className="width-50">
                    <img className="width-100" src="customers.png" alt="Two african women"/>
                </div>
            </div>
            <div className="flex space-between">
                <div className="box-about ">
                <img src="arrow-icon.png" />
                <span className="bold font-32px">10.5k </span>
                <span>Sallers active our site</span>
                </div>
                <div className="box-about bg-black color-white width-20">

item
                </div>
                <div className="box-about bg-black color-white width-20">
item
                </div>
                <div className="box-about bg-black color-white width-20">
item
                </div>
            </div>

        </section>
    )
}

export default AboutPage;