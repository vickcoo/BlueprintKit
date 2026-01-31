from flask import Flask, jsonify, request
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return jsonify({
        'message': 'Welcome to __PROJECT_NAME__ API',
        'version': '1.0.0',
        'endpoints': {
            'health': '/health',
            'api': '/api/v1'
        }
    })

@app.route('/health')
def health():
    return jsonify({'status': 'healthy'})

@app.route('/api/v1/items', methods=['GET'])
def get_items():
    return jsonify({'items': []})

@app.route('/api/v1/items', methods=['POST'])
def create_item():
    data = request.get_json()
    return jsonify({'success': True, 'data': data}), 201

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
