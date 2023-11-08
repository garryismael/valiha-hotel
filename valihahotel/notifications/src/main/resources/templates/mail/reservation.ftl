<#import "layout/defaultLayout.ftl" as layout>
<@layout.myLayout>
<p>
    ${hello} ${client.firstName} ${client.lastName}
</p>
<div class="info">
    <p>${confirmation}</p>
    <p>${confirmation_wish}</p><br/>
    <h2 class='infoH2'>${detail_reservation}</h2>
<div>
</@layout.myLayout>
