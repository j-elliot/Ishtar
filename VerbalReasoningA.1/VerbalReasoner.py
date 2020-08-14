import json
import time

class Verbal:
    #def __init__(self):

    def getInput(self, file):
        flag = True

        inputStart = {"time": 0}

        try:
            with open(file, "r") as readFile:
                inputStart = json.load(readFile)
        except FileNotFoundError:
            print("Nothing to hear.")


        while(flag):

            #print("Listening...")

            inputCheck = {"time": 0}

            try:
                with open("../textCom/input.json", "r") as readFile:
                    inputCheck = json.load(readFile)
            except FileNotFoundError:
                print("Nothing to hear.")



            if(inputStart["time"] != inputCheck["time"]):
                print("Loading new message...")

                inputStart = inputCheck

                flag = False

            time.sleep(1)

        return inputStart

    def dumpResponse(self, response, file):

        with open(file, 'w') as writeFile:
            json.dump(response, writeFile)

r1 = Verbal()

while(True):
    r1.dumpResponse(r1.getInput("../textCom/input.json"), "../textCom/output.json")
