from flask import Flask, render_template
import subprocess
flaskapp= Flask(__name__)

@flaskapp.route('/', methods=['GET'])
def hello_word():
    return render_template('web.html')


@flaskapp.route('/run_python', methods=['POST'])
def run_python():
    subprocess.Popen(['python', 'app.py'])
    return ('please wait till we start the camera')

if __name__ == '__main__':
    flaskapp.run(port=3000, debug=True)