def caseCheck(string):
    if string == " ":
        return "enter string! "
    length = len(string)
    upperChar = False
    lowerChar = False
    
    for i in range(length):
        if string[i] == string[i].upper():
            upperChar = True
        else:
            lowerChar = True
        
        if upperChar == True and lowerChar == True:
            return "mixedCase"
        
    if upperChar == True:
        return "upperCase"
    else:
        return "lowerCase"

string = str(input("enter string: "))
print(caseCheck(string))