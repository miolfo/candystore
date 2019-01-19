
# These scripts will help fix dockerNAT network problems caused by win1809 update
# Update has a bad habit of forcing docker networks to be public after which the 
# firewall will not permit host mount access from docker containers

# Get connection profiles where there is keyword docker
Get-NetConnectionProfile | select interfacealias, interfaceindex | where-object -FilterScript {$_ -like "*docker*"}

# Set connection profile as private uncomment or copy when needed
# Set-NetConnectionProfile -interfaceindex xx -networkcategory private