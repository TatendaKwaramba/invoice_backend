
module.exports =  (data) =>{
  let {tax, discount, shipping, notes, date,
  dueDate, address, invNumber, lineItems, subtotal,
  amount, toEmail, fromEmail, companyName, attentionTo, imageUrl} = data;

  var addresses = address.split(',')

  const itemsSubTotal = () =>{
    lineItems.map((item, i) =>( 
      subtotal = subtotal + item.total  
    ))
    return subtotal
  }
    return `  
   
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>A simple, clean, and responsive HTML invoice template</title>
    
    <style>
    .invoice-box {
        max-width: 800px;
        margin: auto;
        padding: 30px;
        border: 1px solid #eee;
        box-shadow: 0 0 10px rgba(0, 0, 0, .15);
        font-size: 16px;
        line-height: 24px;
        font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
        color: #555;
    }
    
    .invoice-box table {
        width: 100%;
        line-height: inherit;
        text-align: left;
    }
    
    .invoice-box table td {
        padding: 5px;
        vertical-align: top;
    }
    
    .invoice-box table tr td:nth-child(2) {
        text-align: right;
    }
    
    .invoice-box table tr.top table td {
        padding-bottom: 20px;
    }
    
    .invoice-box table tr.top table td.title {
        font-size: 45px;
        line-height: 45px;
        color: #333;
    }
    
    .invoice-box table tr.information table td {
        padding-bottom: 40px;
    }
    
    .invoice-box table tr.heading td {
        background: rgb(119, 118, 118);
        border-bottom: 1px solid #ddd;
        font-weight: bold;
    }
    
    .invoice-box table tr.details td {
        padding-bottom: 20px;
    }
    
    .invoice-box table tr.item td{
        border-bottom: 1px solid #eee;
    }
    
    .invoice-box table tr.item.last td {
        border-bottom: none;
    }
    
    .invoice-box table tr.total td:nth-child(2) {
        border-top: 2px solid #eee;
        font-weight: bold;
    }
    
    @media only screen and (max-width: 600px) {
        .invoice-box table tr.top table td {
            width: 100%;
            display: block;
            text-align: center;
        }
        
        .invoice-box table tr.information table td {
            width: 100%;
            display: block;
            text-align: center;
        }
    }
    
    /** RTL **/
    .rtl {
        direction: rtl;
        font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
    }
    
    .rtl table {
        text-align: right;
    }
    
    .rtl table tr td:nth-child(2) {
        text-align: left;
    }

    .invoice-box table.items > thead > tr > td.item-desc {
        width: 30% !important;
        padding: 5px;
        text-align: left;
    }

    .invoice-box table.items > thead > tr > td.item-q {
        width: 20% !important;
        padding: 5px;
        text-align: left;
    }

    .invoice-box table.items > thead > tr > td.item-price {
        width: 20% !important;
        padding: 5px;
        text-align: left;
    }

    .invoice-box table.items > thead > tr > td.item-total {
        width: 20% !important;
        padding: 5px;
        text-align: left;
    }

    .invoice-box table.items > tbody > tr > td.item-desc {
        width: 30% !important;
        padding: 5px;
        text-align: left;
    }

    .invoice-box table.items > tbody > tr > td.item-q {
        width: 20% !important;
        padding: 5px;
        text-align: right;
    }

    .invoice-box table.items > tbody > tr > td.item-price {
        width: 20% !important;
        padding: 5px;
        text-align: right;
    }

    .invoice-box table.items > tbody > tr > td.item-total {
        width: 20% !important;
        padding: 5px;
        text-align: right;
    }

    .invoice-box table.items > tbody > tr.head {
        background-color: #555 !important;
        color: whitesmoke;
      }

      .invoice-box table.items > tbody > tr > td.grey {
        background-color: rgb(189, 189, 189);
      }
    </style>
</head>

<body>
    <div class="invoice-box">
        
        <table cellpadding="0" cellspacing="0">
            <tr class="top">
                <td colspan="2">
                    <table>
                        <tr>
                            <td class="title">
                                <img src="${imageUrl}" style="width:100%; max-width:300px;">
                            </td>
                            
                            <td>
                                Invoice #: ${invNumber}<br>
                                Created: ${date}<br>
                                Due: ${dueDate}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            
            <tr class="information">
                <td colspan="2">
                    <table>
                        <tr>
                            <td>
                                ${addresses[0]}<br>
                                ${addresses[1]}<br>
                                ${addresses[2]}<br>
                                ${addresses[3]}<br>
                                ${fromEmail}
                            </td>
                            
                            <td>
                                ${companyName}.<br>
                                ${attentionTo}<br>
                                ${toEmail}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            
            <tr class="heading">
                <table class="items" cellspacing="0">
                    <tbody>
                    <tr class="head">
                        <td class="item-desc"><strong>Item Name</strong></td>
                        <td class="item-q"><strong>Item Quantity</strong></td>
                        <td class="item-price"><strong>Item Price</strong></td>
                        <td class="item-total"><strong>Total</strong></td>
                    </tr>
                        ${ lineItems.map((item, i) =>( 
                        `<tr>
                            <td class="item-desc">${item.item}</td>
                            <td class="item-q">${item.quantity}</td>
                            <td class="item-price">${item.price}</td>
                            <td class="item-total">${item.price*item.quantity}</td>
                        </tr>`
                        ))}

                        <tr>
                          <td class="highrow"></td>
                          <td class="highrow"></td>
                          <td class="highrow"></td>
                          <td class="highrow"></td>
                        </tr>
                        <tr>
                          <td class="emptyrow"></td>
                          <td class="emptyrow"></td>
                          <td class="emptyrow"></td>
                          <td class="emptyrow"></td>
                        </tr>
                        <tr>
                            <td class="emptyrow"></td>
                            <td class="emptyrow"></td>
                            <td class="emptyrow grey"><strong>Subtotal</strong></td>
                            <td class="emptyrow item-q grey">${itemsSubTotal()}</td>
                        </tr>
                        <tr>
                            <td class="emptyrow"></td>
                            <td class="emptyrow"></td>
                            <td class="emptyrow item-q"><strong>Shipping</strong></td>
                            <td class="emptyrow item-q">${shipping}</td>
                        </tr>
                        <tr>
                            <td class="emptyrow"></td>
                            <td class="emptyrow"></td>
                            <td class="emptyrow item-q"><strong>Tax</strong></td>
                            <td class="emptyrow item-q">${(tax/100)*subtotal}</td>
                        </tr>
                        <tr>
                            <td class="emptyrow"></td>
                            <td class="emptyrow"></td>
                            <td class="emptyrow item-q"><strong>Discount</strong></td>
                            <td class="emptyrow item-q">${discount}</td>
                        </tr>
                        <tr>
                            <td class="emptyrow">Notes</td>
                            <td class="emptyrow"></td>
                            <td class="emptyrow grey"><strong>Total</strong></td>
                            <td class="emptyrow item-q grey">${subtotal + ((tax/100)*subtotal) - discount}</td>
                        </tr>
                        <tr>
                            <td class="emptyrow">${notes}</td>
                            <td class="emptyrow"></td>
                            <td class="emptyrow item-q"><strong>Amount Paid</strong></td>
                            <td class="emptyrow item-q">${amount}</td>
                        </tr>
                        <tr>
                            <td class="emptyrow"></td>
                            <td class="emptyrow"></td>
                            <td class="emptyrow grey"><strong>Balance Due</strong></td>
                            <td class="emptyrow item-q grey">${(subtotal + ((tax/100)*subtotal) - discount) - amount}</td>
                        </tr>
                    </tbody>
                </table>
            </tr>
        </table>
    </div>
</body>
</html>

    `
}