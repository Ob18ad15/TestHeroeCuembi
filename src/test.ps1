$us = Get-WMIObject -class Win32_UserProfile | Where {(!$_.Special) -and ($_.ConvertToDateTime($_.LastUseTime) -lt (Get-Date).AddDays(-0))}| Measure-Object

$count_day = 60

if($us.Count -eq $count_day){
write-output "hola1"
exit 1 }
else{ 
write-output "hola2"
exit 0
}
