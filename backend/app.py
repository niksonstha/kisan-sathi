import pickle
import numpy as np
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from flask import Flask, send_from_directory
import openai
import gradio







app = Flask(__name__, static_folder="static")
model = pickle.load(open("RandomForest.pkl", "rb"))
# openai.api_key = "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"


@app.route("/")
def home():
    return render_template("index.html")

@app.route('/')
def index():
    return render_template('index.html')

@app.route("/about-us")
def about_us():
    return render_template("about-us.html")

@app.route("/crop")
def crop():
    return render_template("crop.html")


@app.route("/fertilizer")
def fertilizer():
    return render_template("fertilizer.html")

@app.route('/weather')
def serve_frontend():
    return render_template('/Weather/weather.html')

@app.route("/crop_prediction", methods=["POST"])
def crop_prediction():
        features = [int(x) for x in request.form.values()]
        print(features)
        input_data = [np.array(features)]
        
        crop_prediction = model.predict(input_data)
        crop_name = crop_prediction[0]
        return render_template("crop.html", prediction_text = "The crop you should harvest is {}".format(crop_name))

        
  
# @app.route('/chat', methods=['POST'])
# def chatbot_route():
#     data = request.get_json()
#     user_input = data.get('user_input')

#     response = api_calling(user_input)
    
#     return jsonify({"response": response})

# def api_calling(prompt):
    # completions = openai.Completion.create(
    #     engine="text-davinci-003",
    #     prompt=prompt,
    #     max_tokens=100,
    #     n=1,
    #     stop=None,
    #     temperature=0.5,
    # )
    # message = completions.choices[0].text.strip()
    # return message
    
    
@app.route("/chat")
def chat():
    return render_template("chat.html")

# if __name__ == "__main__":
#     app.run(debug=True)
    
    
# from flask import Flask
  # Enable CORS for the entire app

# ... your routes and app logic ...

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
