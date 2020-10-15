SELECT * FROM languages;

SELECT * FROM languages INNER JOIN ranking ON ranking_id = ranking.id;

SELECT name, ranking FROM languages INNER JOIN ranking ON ranking_id = ranking.id;