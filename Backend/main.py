from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import numpy as np
from tensorflow.keras.models import load_model
from keras.preprocessing.image import load_img, img_to_array

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Allow frontend to call this API

# Load the trained model
MODEL_PATH = "models/model.h5"  # Make sure this file exists
model = load_model(MODEL_PATH)

# Class labels
class_labels = ['pituitary', 'glioma', 'notumor', 'meningioma']

# Upload folder
UPLOAD_FOLDER = "./uploads"
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Helper function to process and predict image
def predict_tumor(image_path):
    IMAGE_SIZE = 128
    img = load_img(image_path, target_size=(IMAGE_SIZE, IMAGE_SIZE))
    img_array = img_to_array(img) / 255.0  # Normalize
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension

    predictions = model.predict(img_array)
    predicted_class_index = np.argmax(predictions, axis=1)[0]
    confidence_score = np.max(predictions, axis=1)[0]

    return {
        "prediction": class_labels[predicted_class_index],
        "confidence": f"{confidence_score * 100:.2f}%"
    }

# API endpoint to receive images and return prediction
@app.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    if file:
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(file_path)

        result = predict_tumor(file_path)
        return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)
