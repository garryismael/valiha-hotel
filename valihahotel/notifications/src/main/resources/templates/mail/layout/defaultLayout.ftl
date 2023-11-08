<#macro myLayout>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<style>
  body { justify-content: center; } div.signature { margin-right: 50px;
  text-align: right; } div.image img { display: block; margin-bottom: 12px; } div.adresse{
  line-height: 7px; } div.adresse p { color: gray; } .bold { font-weight:
  500; } div.info { line-height: 16px; } .left { margin-left: 8px; } .my-3 {
  margin: 12px 0; } .infoH4 { font-size: 18px; font-weight: 700; } .infoH3 {
  font-size: 20px; font-weight: 800; } .infoH2 {
    font-size: 24px; font-weight: 900;
  }
</style>
</head>
    <body style="width:100%;height:100%">
      <table cellspacing="0" cellpadding="0" style="width:100%;height:100%">
        <tr>
          <td colspan="2" align="center">
            <#include "header.ftl"/>
          </td>
        </tr>
        <tr>
          <td>
            <#nested/>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <#include "footer.ftl"/>
          </td>
        </tr>
      </table>
    </body>
  </html>
</#macro>
