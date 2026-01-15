from flask import Flask, render_template, request
from predict import analyze_message

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    result = None

    if request.method == "POST":
        message = request.form["message"]

        # Simple default values (can improve later)
        toxicity_score = 50
        confidence = 80

        result = analyze_message(
            message,
            toxicity_score,
            confidence
        )

    return render_template("index.html", result=result)

if __name__ == "__main__":
    app.run(debug=True)
