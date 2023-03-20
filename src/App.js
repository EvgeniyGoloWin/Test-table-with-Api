import {useEffect, useState} from "react";
import './App.css';
import axios from "axios";


export default function App() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}&limit=5')

    useEffect(() => {
        axios.get(url)
            .then(response => setData(response.data))
            .catch(error => console.log(error))
        setData(state => {
            state.sort((a, b) => a.id - b.id)
            return state;
        })
        dataFunc();
    }, [url]);
    console.log(data)
    const dataFunc = async () => {
        setLoading(true)
        const res = await axios.get(url)
        setLoading(false)
    }

    return (<div className="table">
            {data.map(item => (<div className="item_table" key={item.id}>
                <div loading={loading}>
                    <p className="cell">{item.id}</p>
                    <p className="cell">{item.firstName} {item.lastName}</p>
                    <p className="cell">{item.email}</p>
                    <p className="cell">{item.phone}</p>
                    <p className="cell">{item.address.streetAddress} ,{item.address.city},{item.address.state},{item.address.zip}</p>
                </div>
            </div>))}
        </div>
    );
}