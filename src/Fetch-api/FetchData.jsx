import React, { useState, useEffect } from 'react'
import './FetchData.css'

const FetchData = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        // setLoading(true);
        fetch("http://universities.hipolabs.com/search?country=India")
            .then((resp) => resp.json())
            .then((objdata) => setData(objdata))
            .finally(() => {
                setLoading(false);
            })
    }, []);

    console.log(data);

    return (
        <div>
            {loading ? <h1>Loading...</h1> :
                <div>
                    <h1>List of all Colleges retrive from API</h1>
                    <table id="api-data">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>State</th>
                                <th>Domains</th>
                                <th>web-pages</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, id) => (
                                <tr key={id}>
                                    <td>{item["name"]}</td>
                                    <td>{item["state-province"]}</td>
                                    <td>{item["domains"][0]}</td>
                                    <td> <a href="https://www.w3schools.com" target="_blank">{item["web_pages"][0]}</a> </td>
                                </tr>
                            )
                            )}

                        </tbody>
                    </table>
                </div>
            }

        </div>
    )
}

export default FetchData