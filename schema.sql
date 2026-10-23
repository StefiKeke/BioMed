-- BioMed: schemă SQL de bază (compatibilă cu SQLite cu modificări minore pentru alte SGBD-uri).
-- Frontendul demonstrativ folosește localStorage; acest fișier descrie structura pentru un backend SQL real.

CREATE TABLE subjects (
  id INTEGER PRIMARY KEY,
  name VARCHAR(120) NOT NULL UNIQUE
);

CREATE TABLE questions (
  id INTEGER PRIMARY KEY,
  subject_id INTEGER NOT NULL,
  source_label VARCHAR(200),
  topic VARCHAR(120) NOT NULL,
  question_text TEXT NOT NULL,
  explanation TEXT,
  difficulty VARCHAR(20) DEFAULT 'standard',
  FOREIGN KEY (subject_id) REFERENCES subjects(id)
);

CREATE TABLE answer_options (
  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  option_label CHAR(1) NOT NULL,
  option_text TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL DEFAULT FALSE,
  FOREIGN KEY (question_id) REFERENCES questions(id) ON DELETE CASCADE,
  UNIQUE (question_id, option_label)
);

CREATE TABLE study_sessions (
  id INTEGER PRIMARY KEY,
  learner_label VARCHAR(120),
  started_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  finished_at TIMESTAMP
);

CREATE TABLE attempts (
  id INTEGER PRIMARY KEY,
  session_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,
  selected_option_id INTEGER,
  is_correct BOOLEAN,
  answered_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (session_id) REFERENCES study_sessions(id),
  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (selected_option_id) REFERENCES answer_options(id)
);

CREATE INDEX idx_questions_topic ON questions(topic);
CREATE INDEX idx_attempts_question ON attempts(question_id);
