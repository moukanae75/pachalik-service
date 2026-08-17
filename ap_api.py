from flask import Flask, jsonify, request
from flask_cors import CORS
import psycopg2
import os

app = Flask(__name__)
CORS(app) # السماح للـ JavaScript بالاتصال بالـ API بدون مشاكل CORS

# Connexion à PostgreSQL
def get_db_connection():
    # سيقوم بجلب الرابط من إعدادات Render إذا وجد، وإلا سيستخدم الرابط المباشر الذي أعطيتني إياه
    db_url = os.environ.get("DATABASE_URL", "postgresql://postgres_pb2u_user:HWNjgtk3ALiTcG9yOzhG6ceUjeKxvwG9@dpg-da1nsuf40ujc73c4arfg-a.virginia-postgres.render.com/postgres_pb2u")
    conn = psycopg2.connect(db_url)
    return conn


# Page d'accueil
@app.route("/")
def home():
    return "Gestion des Documents"


# Login
@app.route("/login", methods=["POST"])
def login():
    username = request.form.get("username")
    password = request.form.get("password")

    if username == "admin" and password == "1234":
        return jsonify({"message": "Connexion réussie"})
    else:
        return jsonify({"message": "Nom d'utilisateur ou mot de passe incorrect"}), 401


# Affichage des services et documents
@app.route("/documents", methods=["GET"])
def documents():
    conn = get_db_connection()
    cur = conn.cursor()

    cur.execute("""
        SELECT s.nom_service, d.document
        FROM services s
        JOIN document d ON s.id = d.service_id
        ORDER BY s.id;
    """)

    rows = cur.fetchall()

    data = []
    for service, document in rows:
        data.append({
            "service": service,
            "document": document
        })

    cur.close()
    conn.close()

    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)
