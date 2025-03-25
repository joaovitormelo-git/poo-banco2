const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('banco.db');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS ESTUDANTE (
        matr INTEGER PRIMARY KEY, 
        nome TEXT NOT NULL, 
        idade INTEGER
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS TURMA (
        cod INTEGER PRIMARY KEY,
        idioma TEXT(30) NOT NULL,
        horario TEXT(20) NOT NULL
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS TURMA_ESTUDANTE (
        matr INTEGER, 
        cod INTEGER, 
        PRIMARY KEY (matr, cod), 
        FOREIGN KEY (matr) REFERENCES ESTUDANTE(matr), 
        FOREIGN KEY (cod) REFERENCES TURMA(cod)
    )`);

    // Inserindo dados
    db.run(`INSERT INTO ESTUDANTE (matr, nome, idade) VALUES 
        (1, 'João', 20),
        (2, 'Maria', 21),
        (3, 'Laura', 24),
        (4, 'Pedro', 23),
        (5, 'Vitor', 18)
    `);

    db.run(`INSERT INTO TURMA (cod, idioma, horario) VALUES 
        (1, 'PT', '18:00'),
        (2, 'EN', '19:00'),
        (3, 'ES', '12:00'),
        (4, 'DD', '13:00'),
        (5, 'SD', '15:00')
    `);
});

db.close();
