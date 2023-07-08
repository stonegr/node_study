from flask import Flask, render_template
from livereload import Server

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index_boot.html")


if __name__ == "__main__":
    # app.run(host="127.0.0.1", port=8000, debug=True)
    app.debug = True
    live_server = Server(app.wsgi_app)
    # live_server.watch('**/*.*')
    live_server.serve()
    # app.run()
