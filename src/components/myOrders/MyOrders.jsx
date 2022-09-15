import React from 'react';
import burger1 from "../../assests/burger1.png";
import burger2 from "../../assests/burger2.png";
import burger3 from "../../assests/burger3.png";
import { Link } from 'react-router-dom';
import {AiOutlineEye} from "react-icons/ai";

const MyOrders = () => {

    const arr=[1,2,3,4];
  return (
    <section className="tableClass">
        <main>
            <table>
                
<thead>
    <tr>
        <th>
            Order Id
        </th>
        <th>
            Status
        </th>
        <th>
            Item Qty
        </th>
        <th>
            Amount
        </th>
        <th>
            Payment Method
        </th>
        <th>
            Action
        </th>
    </tr>
</thead>

<tbody>
    {
        arr.map((i)=>(<tr>
        <td>#nakdnwakbf</td>
        <td>Processing</td>
        <td>23</td>
        <td>{2364}</td>
        <td>COD</td>
        <td><Link to={`/order/${"jdnawj"}`}>
            <AiOutlineEye/>
        </Link></td>
    </tr>))
    }
</tbody>

            </table>
        </main>
    </section>
  )
}

export default MyOrders