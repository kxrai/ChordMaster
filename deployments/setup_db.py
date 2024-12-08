import sqlite3
import os

# Database file name
DB_FILE = "chords.db"

# SQL statements
CREATE_TABLE_SQL = """
CREATE TABLE IF NOT EXISTS chords (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    chord TEXT NOT NULL,
    image_url TEXT NOT NULL,
    type TEXT NOT NULL
);
"""

SEED_DATA = [
    ("C Major", "https://example.com/c_major.jpg", "Major"),
    ("G Major", "https://example.com/g_major.jpg", "Major"),
    ("D Minor", "https://example.com/d_minor.jpg", "Minor"),
    ("A7", "https://example.com/a7.jpg", "Dominant 7th"),
    ("Csus4", "https://example.com/csus4.jpg", "Suspended"),
]

def initialize_db():
    # Check if the database already exists
    db_exists = os.path.exists(DB_FILE)
    
    # Connect to the database (creates it if it doesn't exist)
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    
    try:
        # Create the chords table
        print("Creating 'chords' table if it doesn't already exist...")
        cursor.execute(CREATE_TABLE_SQL)
        
        if not db_exists:
            # Insert seed data only if the database was just created
            print("Inserting seed data into 'chords' table...")
            cursor.executemany(
                "INSERT INTO chords (chord, image_url, type) VALUES (?, ?, ?);",
                SEED_DATA
            )
            print("Seed data inserted successfully!")
        else:
            print("Database already exists. Skipping seed data insertion.")
        
        # Commit changes
        conn.commit()
        print("Database setup complete.")
    except sqlite3.Error as e:
        print(f"SQLite error: {e}")
    finally:
        # Close the connection
        cursor.close()
        conn.close()

if __name__ == "__main__":
    initialize_db()
