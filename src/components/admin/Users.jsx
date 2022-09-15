import React from 'react';
import me from "../../assests/Naman Pic.jpeg"

const Users = () => {
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
            Name
        </th>
        <th>
            Picture
        </th> 
        <th>
            Admin
        </th>
        <th>
            Since
        </th>
    </tr>
</thead>

<tbody>
    {
        arr.map((i)=>(<tr>
        <td>#nakdnwakbf</td>
        <td>Naman</td>
        <td><img src={me} alt="User"/></td>
        <td>admin</td>
        <td>{"24-03-2022"}</td>
    </tr>))
    }
</tbody>

            </table>
        </main>
    </section>
  )
}

export default Users