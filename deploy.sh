#!bin/bash sh

TARGET="/www/data/cu/sabor/"

chmod +x dist/*.js
# Transfer files
expect -c "
   spawn bash -c \"scp dist/* $UNI@cunix.cc.columbia.edu:$TARGET\"
   expect password: { send $PASSWORD\r }
   expect eof
"
echo "\nThank you for your patronage. Have a nice day.\n"

