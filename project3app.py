# imports
from flask import Flask
from flask import render_template
import sqlite3
import pandas as pd
from pathlib import Path
from sqlalchemy import create_engine

# Create an app
app = Flask(__name__,
            static_url_path='',
            static_folder='static',
            template_folder='templates')


# Define static routes
# homepage
@app.route("/")
def index():
    return render_template("index.html")

# search functionality
@app.route("/search")
def about():
    return render_template("search.html")

# data analysis graphs
@app.route("/data_analysis")
def data_analysis():
    return render_template("data_analysis.html")


# Define run behavior
if __name__ == "__main__":

    #run app
    app.run(debug=True)

