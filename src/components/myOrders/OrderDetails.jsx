import React from 'react'

const OrderDetails = () => {
  return (
    
    <section className="orderDetails">
        <main>
        <h1>Order Details</h1>
            <div>
                <h1>Shipping</h1>
                <p>
                    <b>Address</b>
                    {"fnierhsnfisufn"}
                </p>
            </div>

            <div>
                <h1>Contact</h1>
                <p>
                    <b>Name</b>
                    {"abhay"}
                </p>
                <p>
                    <b>Phone</b>
                    {8464146364}
                </p>
            </div>

            <div>
                <h1>Status</h1>
                <p>
                    <b>Order status</b>
                    {"Processing"}
                </p>
                <p>
                    <b>Placed At</b>
                    {"23-03-2022"}
                </p>
                <p>
                    <b>Delivered At</b>
                    {"29-03-2022"}
                </p>
            </div>

            <div>
                <h1>Payment</h1>
                <p>
                    <b>Payment method</b>
                    {"Online"}
                </p>
                <p>
                    <b>Payment Reference</b>
                    {"hdsbczhbczhjbd"}
                </p>
                <p>
                    <b>Paid At</b>
                    {"30-03-2022"}
                </p>
            </div>

            <div>
                <h1>Amount</h1>
                <p>
                    <b>Items total</b>
                    {4894}
                </p>
                <p>
                    <b>Shipping Charges</b>
                    {200}
                </p>
                <p>
                    <b>Tax</b>
                    {108}
                </p>
                <p>
                    <b>Total</b>
                    {5649}
                </p>
                
            </div>

            <article>
                <h1>
                    Ordered Items
                </h1>

                <div>
                    <h4>Cheese Burger</h4>
                    <div>
                        <span>{12}</span> x <span>{232}</span>
                    </div>
                </div>

                <div>
                    <h4>Veg Cheese Burger</h4>
                    <div>
                        <span>{10}</span> x <span>{500}</span>
                    </div>
                </div>

                <div>
                    <h4> Burger Fries</h4>
                    <div>
                        <span>{10}</span> x <span>{1800}</span>
                    </div>
                </div>
                <div><h4 style={{fontWeight:800}}>Sub Total</h4>
                <div style={{fontWeight:800}}>{5656}</div></div>
            </article>
        </main>
    </section>
  )
}

export default OrderDetails