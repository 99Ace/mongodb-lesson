from flask import Flask, render_template, request, redirect
import os
import pymongo	
app = Flask(__name__)
	
MONGODB_URI = os.getenv('MONGO_URI')
DATABASE_NAME = 'cmdata'
COLLECTION_NAME = 'players'

def mongo_connect(url):
    try:
        conn = pymongo.MongoClient(url)
        print("Mongo is connected")
        return conn
    except pymongo.errors.ConnectionFailure as e:
        print("Could not connect to MongoDB: %s") % e


def show_menu():
    print("")
    print("1. Add a record")
    print("2. Find a record by name")
    print("3. Edit a record")
    print("4. Delete a record")
    print("5. Exit")

    option = input("Enter option: ")
    return option


def main_loop():
    while True:
        option = show_menu()
        if option == "1":
            print("You have selected option 1")
        elif option == "2":
            print("You have selected option 2")
        elif option == "3":
            print("You have selected option 3")
        elif option == "4":
            print("You have selected option 4")
        elif option == "5":
            conn.close()
            break
        else:
            print("Invalid option")
        print("")
conn = mongo_connect(MONGODB_URI)
coll = conn[DATABASE_NAME][COLLECTION_NAME]
main_loop()
        
# STEP 1 - Create a home route and test it
# @app.route('/') # map the root route to the index function
# def index():
#     # return "Hello world" 

#     # STEP 2 - Blank, no logic

#     # STEP 3 - Return a template
#     return render_template('index.html')
	
	
# "magic code" -- boilerplate
if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True) 