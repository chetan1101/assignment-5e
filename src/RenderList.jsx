import React, { useEffect, useState } from 'react';

const RenderList = (props) => {
    const [itemList, setItemList] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            let itemlist = localStorage.getItem('itemList')
            setItemList(JSON.parse(itemlist))
        }, 100);
    }, [props]);
    return (
        <div class="row ">
            {itemList && itemList.map((item, index) =>

                <div class="col-sm-4 mt-5">
                    <div className="card">
                        <img src="https://picsum.photos/200" height="200" className="card-img-top" alt={item.title} />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>

                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Description: {item.description}</li>
                            <li className="list-group-item">Qty: {item.qty}</li>
                            <li className="list-group-item">Price: {item.description}</li>
                            <li className="list-group-item">Date: {item.date}</li>
                        </ul>

                    </div>
                </div>
            )}

        </div>
    );
};

export default RenderList;
