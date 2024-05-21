import data_arr from './second_row.json';
const arr = data_arr
const SecondRow = ({ children }) => {
    return (
        <div>
            <div className="flex justify-center "
                style={{
                    borderRadius:'00px 0px 0px 0px',
                    alignItems:'center',
                    fontWeight:'500',
                    fontSize:'18pt',
                    width: '-webkit-fill-available',
                    height: '40px',
                    backgroundColor: '#C738BD'
                }}>
                -| Promo Hari Ini |-
            </div>
            <div style={{padding:'5px'}}></div>

            <div id="product"
                style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#888 transparent',

                }}
                className="flex 
                overflow-auto
                whitespace-nowrap
             text-white"
            >
                {
                    arr.map((item, index) => (
                        <div style={{
                            borderRadius: '10px 10px 10px 10px',
                            backgroundColor: '#41B06E', margin: '10px',
                            width: '185px', height: '185px'
                        }}

                            key={index}>
                            <div className="justify-start flex-col"
                                style={{ width: 'inherit', height: 'inherit', display: 'flex' }}>
                                <div id="img" style={{ width: 'inherit', height: '85%' }}>
                                    <a href={item.link} style={{ width: 'inherit', height: 'inherit' }}
                                        target="_blank" rel="noopener noreferrer">
                                        <img

                                            src={item.img_src}
                                            alt="Product description"
                                            style={{
                                                objectFit: 'cover',
                                                borderRadius: '10px 10px 0px 0px',
                                                width: 'inherit', height: 'inherit'
                                            }}
                                        />
                                    </a>
                                </div>
                                <div className="flex justify-center" id="product_name">
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        <p>{item.product} </p>
                                    </a>
                                </div>
                            </div>

                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default SecondRow;