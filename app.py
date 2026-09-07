from flask import Flask, render_template
from logic.data import exercises;

app = Flask(__name__)

@app.route('/')
def catalog():
    return render_template('catalog.html',workouts = exercises)

@app.route('/muscle')
def muscle():
    return render_template('muscle.html')

if __name__ == '__main__':
    app.run(debug=True)