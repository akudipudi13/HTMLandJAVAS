
def listUpperEle(myList):
    length = len(myList)
    for i in range(length):
        UpperStr = ""
        for x in range(len(myList[i])):
            UpperStr += myList[i][x].upper()
        myList[i] = UpperStr

    return myList

myList = input("Enter list of strings: ").split()
print(listUpperEle(myList))
