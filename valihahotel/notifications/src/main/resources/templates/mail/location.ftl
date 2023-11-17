<#import "layout/defaultLayout.ftl" as layout>
<@layout.myLayout>
<p>
    ${hello} ${client.firstName} ${client.lastName}
</p>
<div class="info">
    <p>${confirmation_location}</p>
    <p>${confirmation_wish}</p><br/>
<div>
</@layout.myLayout>
